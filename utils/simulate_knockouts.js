/**
 * simulate_knockouts.js
 * Simulates all knockout stage matches (R32 -> R16 -> QTR -> SF -> Final)
 * by fetching the current live bracket state from the API, resolving resolved
 * player names (e.g. "1st Group A" -> actual name), and posting results.
 */

const BASE = 'http://127.0.0.1:8788';

// Static knockout match order from data.js
const KNOCKOUT_IDS = [
    // Round of 32
    'R32-1','R32-2','R32-3','R32-4','R32-5','R32-6','R32-7','R32-8',
    'R32-9','R32-10','R32-11','R32-12','R32-13','R32-14','R32-15','R32-16',
    // Round of 16
    'R16-1','R16-2','R16-3','R16-4','R16-5','R16-6','R16-7','R16-8',
    // Quarter-Finals
    'QTR-1','QTR-2','QTR-3','QTR-4',
    // Semi-Finals
    'SF-1','SF-2',
    // Final
    'F-1',
];

const MATCH_RACE = {
    'R32-1':7,'R32-2':7,'R32-3':7,'R32-4':7,'R32-5':7,'R32-6':7,'R32-7':7,'R32-8':7,
    'R32-9':7,'R32-10':7,'R32-11':7,'R32-12':7,'R32-13':7,'R32-14':7,'R32-15':7,'R32-16':7,
    'R16-1':7,'R16-2':7,'R16-3':7,'R16-4':7,'R16-5':7,'R16-6':7,'R16-7':7,'R16-8':7,
    'QTR-1':7,'QTR-2':7,'QTR-3':7,'QTR-4':7,
    'SF-1':7,'SF-2':7,
    'F-1':9,
};

// Resolve a player slot like "1st Group A" / "Winner R32-1" using scores + playerGroupIDs
function resolvePlayer(slot, resolvedWinners, groupTopTwo, scores) {
    // Already a real name
    if (!slot.startsWith('1st ') && !slot.startsWith('2nd ') && !slot.startsWith('Winner ')) {
        return slot;
    }
    if (slot.startsWith('Winner ')) {
        const matchId = slot.replace('Winner ', '');
        return resolvedWinners[matchId] || slot;
    }
    if (slot.startsWith('1st ') || slot.startsWith('2nd ')) {
        const grpLetter = slot.split(' ').pop(); // e.g. "A"
        const rank = slot.startsWith('1st') ? 0 : 1;
        return (groupTopTwo[grpLetter] && groupTopTwo[grpLetter][rank]) || slot;
    }
    return slot;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
    // 1. Fetch current scores
    console.log('Fetching current scores from API...');
    const res = await fetch(`${BASE}/api/scores`);
    const scores = await res.json();
    console.log(`Fetched ${Object.keys(scores).length} score entries.`);

    // 2. Fetch data.js to get match definitions + playerGroupIDs
    const dataJs = await (await fetch(`${BASE}/data.js`)).text();

    // Parse playerGroupIDs
    const playerGroupIDs = {};
    const pgMatch = dataJs.match(/const playerGroupIDs = \{([\s\S]*?)\};/);
    if (pgMatch) {
        const entries = pgMatch[1].matchAll(/"([^"]+)":\s*"([^"]+)"/g);
        for (const [, name, id] of entries) {
            playerGroupIDs[name] = id;
        }
    }
    console.log(`Loaded ${Object.keys(playerGroupIDs).length} players.`);

    // 3. Calculate group standings from scores
    const groupStats = {}; // { groupLetter: { formattedName: { pts, fd, w } } }
    for (let i = 0; i < 16; i++) {
        groupStats[String.fromCharCode(65 + i)] = {};
    }

    // Initialise players
    for (const [name, id] of Object.entries(playerGroupIDs)) {
        const grp = id.charAt(0);
        const fmtName = `${id} - ${name}`;
        groupStats[grp][fmtName] = { pts: 0, fd: 0, w: 0, mp: 0 };
    }

    // Parse groupStageCSV from dataJs
    const csvMatch = dataJs.match(/const groupStageCSV = `([\s\S]*?)`;/);
    if (csvMatch) {
        const rawToFormatted = {};
        for (const [name, id] of Object.entries(playerGroupIDs)) {
            rawToFormatted[name] = `${id} - ${name}`;
        }
        const csvLines = csvMatch[1].trim().split('\n');
        for (const line of csvLines) {
            const parts = line.split(',');
            const [id, , , , p1Raw, p2Raw] = parts;
            const p1 = rawToFormatted[p1Raw] || p1Raw;
            const p2 = rawToFormatted[p2Raw] || p2Raw;
            if (!scores[id]) continue;
            const { score, winner } = scores[id];
            if (!winner || !score) continue;
            const [a, b] = score.split('-').map(Number);
            if (isNaN(a) || isNaN(b)) continue;
            const p1Grp = p1.split(' ')[0].charAt(0);
            const p2Grp = p2.split(' ')[0].charAt(0);
            // Normalise winner
            let fmtWinner = winner;
            if (rawToFormatted[winner]) fmtWinner = rawToFormatted[winner];

            if (groupStats[p1Grp] && groupStats[p1Grp][p1]) groupStats[p1Grp][p1].mp++;
            if (groupStats[p2Grp] && groupStats[p2Grp][p2]) groupStats[p2Grp][p2].mp++;

            if (fmtWinner === p1) {
                if (groupStats[p1Grp] && groupStats[p1Grp][p1]) {
                    groupStats[p1Grp][p1].pts += 3; groupStats[p1Grp][p1].w++;
                    groupStats[p1Grp][p1].fd += (Math.max(a,b) - Math.min(a,b));
                }
                if (groupStats[p2Grp] && groupStats[p2Grp][p2]) {
                    groupStats[p2Grp][p2].fd -= (Math.max(a,b) - Math.min(a,b));
                }
            } else if (fmtWinner === p2) {
                if (groupStats[p2Grp] && groupStats[p2Grp][p2]) {
                    groupStats[p2Grp][p2].pts += 3; groupStats[p2Grp][p2].w++;
                    groupStats[p2Grp][p2].fd += (Math.max(a,b) - Math.min(a,b));
                }
                if (groupStats[p1Grp] && groupStats[p1Grp][p1]) {
                    groupStats[p1Grp][p1].fd -= (Math.max(a,b) - Math.min(a,b));
                }
            }
        }
    }

    // 4. Build groupTopTwo: { 'A': ['Ali Fayaz', 'Salim Adnan'], ... }
    const groupTopTwo = {};
    for (const [grp, players] of Object.entries(groupStats)) {
        const sorted = Object.entries(players)
            .sort(([,a],[,b]) => b.pts !== a.pts ? b.pts - a.pts : b.fd - a.fd)
            .map(([name]) => name.split(' - ').slice(1).join(' - ')); // raw name only
        groupTopTwo[grp] = [sorted[0], sorted[1]];
    }
    console.log('\nGroup Top Two (1st / 2nd):');
    for (const [g, [first, second]] of Object.entries(groupTopTwo)) {
        console.log(`  Group ${g}: 1st=${first} | 2nd=${second}`);
    }

    // 5. Parse knockout match definitions
    const matchDefs = {};
    const matchLines = dataJs.match(/const matchData = \[([\s\S]*?)\];/);
    if (matchLines) {
        const idRe = /id:\s*'([^']+)'/g;
        const p1Re = /p1:\s*'([^']+)'/g;
        const p2Re = /p2:\s*'([^']+)'/g;
        const raceRe = /race:\s*(\d+)/g;
        const nextRe = /next:\s*'([^']+)'/g;
        const allIds = [...matchLines[1].matchAll(/id:\s*'([^']+)'/g)].map(m=>m[1]);
        const allP1s = [...matchLines[1].matchAll(/p1:\s*'([^']+)'/g)].map(m=>m[1]);
        const allP2s = [...matchLines[1].matchAll(/p2:\s*'([^']+)'/g)].map(m=>m[1]);
        const allRaces = [...matchLines[1].matchAll(/race:\s*(\d+)/g)].map(m=>parseInt(m[1]));
        allIds.forEach((id, i) => {
            matchDefs[id] = { id, p1: allP1s[i], p2: allP2s[i], race: allRaces[i] };
        });
    }

    // 6. Simulate each knockout match in order
    const resolvedWinners = {}; // { matchId -> raw player name }

    console.log('\nSimulating knockout matches...\n');
    for (const matchId of KNOCKOUT_IDS) {
        const def = matchDefs[matchId];
        if (!def) { console.warn(`  ⚠️  No definition for ${matchId}`); continue; }

        const race = def.race || MATCH_RACE[matchId] || 7;

        // Resolve actual player names
        const p1 = resolvePlayer(def.p1, resolvedWinners, groupTopTwo, scores);
        const p2 = resolvePlayer(def.p2, resolvedWinners, groupTopTwo, scores);

        const winnerIsP1 = Math.random() > 0.5;
        const loserScore = Math.floor(Math.random() * race);
        const scoreStr = winnerIsP1 ? `${race}-${loserScore}` : `${loserScore}-${race}`;
        const winnerName = winnerIsP1 ? p1 : p2;

        resolvedWinners[matchId] = winnerName;

        try {
            const res = await fetch(`${BASE}/api/scores/${matchId}/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ score: scoreStr, winner: winnerName })
            });
            if (res.ok) {
                console.log(`  ✅ ${matchId}: ${p1} vs ${p2} => ${scoreStr} (${winnerName} wins)`);
            } else {
                console.log(`  ❌ ${matchId}: HTTP ${res.status}`);
            }
        } catch (e) {
            console.error(`  ❌ ${matchId}: ${e.message}`);
        }
        await sleep(80);
    }

    console.log('\n✅ All knockout matches simulated!');
    console.log('\n🏆 Final Winner:', resolvedWinners['F-1']);
}

main().catch(console.error);
