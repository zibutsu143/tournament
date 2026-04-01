const fs = require('fs');

async function simulate() {
    const dataFile = fs.readFileSync(__dirname + '/../public/data.js', 'utf8');

    const matches = [];
    const lines = dataFile.split('\n');
    let inGroupSection = false;

    lines.forEach(line => {
        if (line.includes('const groupStageCSV = `')) {
            inGroupSection = true;
            return;
        }
        if (inGroupSection && line.includes('`;')) {
            inGroupSection = false;
            return;
        }
        if (inGroupSection && line.trim() !== '') {
            const parts = line.split(',');
            if (parts.length >= 6) {
                matches.push({
                    id: parts[0].trim(),
                    p1: parts[4].trim(),
                    p2: parts[5].trim()
                });
            }
        }
    });

    console.log(`Found ${matches.length} group matches.`);

    // Wait 2 secs to ensure local dev server is ready 
    await new Promise(r => setTimeout(r, 2000));

    // Limit to 360 just in case
    for (const match of matches) {
        if (!match.id || isNaN(match.id)) continue;
        
        const winnerIsP1 = Math.random() > 0.5;
        const loserScore = Math.floor(Math.random() * 5); // 0 to 4
        
        let scoreStr = "";
        let winnerName = "";
        
        const p1Clean = match.p1.split(' - ').pop().trim();
        const p2Clean = match.p2.split(' - ').pop().trim();

        if (winnerIsP1) {
            scoreStr = `5-${loserScore}`;
            winnerName = p1Clean;
        } else {
            scoreStr = `${loserScore}-5`;
            winnerName = p2Clean;
        }

        try {
            const res = await fetch(`http://127.0.0.1:8788/api/scores/${match.id}/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ score: scoreStr, winner: winnerName })
            });
            if (!res.ok) console.log(`HTTP ${res.status} on match ${match.id}`);
        } catch (e) {
            console.error(`Failed to post match ${match.id}:`, e.message);
        }
    }
    
    console.log("Successfully randomized all group match scores!");
}

simulate();
