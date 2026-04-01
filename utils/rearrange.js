const fs = require('fs');

const path = 'public/index.html';
let html = fs.readFileSync(path, 'utf8');

// 1. REARRANGE MOBILE TABS HTML
const tabRegex = /(<nav[^>]*id="mobile-tabs"[^>]*>[\s\S]*?<div class="flex">)([\s\S]*?)(<\/div>\s*<\/nav>)/;
const match = html.match(tabRegex);
if (!match) {
    console.error("Could not find tabs nav");
    process.exit(1);
}

const tabsContent = match[2];
const tabLines = tabsContent.split('\n').filter(l => l.trim().length > 0);

const scoresTab = tabLines.find(l => l.includes('data-target="scores-section"'));
const scheduleTab = tabLines.find(l => l.includes('data-target="schedule-section"'));
const standingsTab = tabLines.find(l => l.includes('data-target="standings-section"'));
const bracketTab = tabLines.find(l => l.includes('data-target="bracket-section"'));
const rulesTab = tabLines.find(l => l.includes('data-target="rules-section"'));

// Set inactive style for all
const inactiveClass = 'tab-btn flex-1 py-3 px-1 sm:px-2 text-[10px] sm:text-xs font-semibold text-slate-400 border-b-2 border-transparent hover:text-slate-200 transition-colors';
const activeClass = 'tab-btn flex-1 py-3 px-1 sm:px-2 text-[10px] sm:text-xs font-semibold text-emerald-400 border-b-2 border-emerald-500 transition-colors';

const newTabs = [
    scoresTab.replace(/class="[^"]+"/, `class="${activeClass}"`),
    scheduleTab.replace(/class="[^"]+"/, `class="${inactiveClass}"`),
    standingsTab.replace(/class="[^"]+"/, `class="${inactiveClass}"`),
    bracketTab.replace(/class="[^"]+"/, `class="${inactiveClass}"`),
    rulesTab.replace(/class="[^"]+"/, `class="${inactiveClass}"`),
];

html = html.replace(tabRegex, `$1\n${newTabs.join('\n')}\n            $3`);

// 2. REASSEMBLE THE SECTIONS (Scores, Schedule, Standings, Bracket, Rules)
function extractSection(commentStr) {
    const startIdx = html.indexOf(commentStr);
    if(startIdx === -1) throw new Error("Could not find " + commentStr);
    const endTag = '        </section>';
    // find the next closing section
    const endIdx = html.indexOf(endTag, startIdx) + endTag.length;
    const sectionHtml = html.substring(startIdx, endIdx);
    
    // remove it from main html to shuffle
    html = html.slice(0, startIdx) + html.slice(endIdx);
    return sectionHtml + '\n\n';
}

const rulesSec = extractSection('        <!-- Rules & Info Section -->');
const standSec = extractSection('        <!-- Group Standings Section -->');
const scoreSec = extractSection('        <!-- Live Scores Section -->');
const schedSec = extractSection('        <!-- Player Schedule Lookup Section -->');
const brackSec = extractSection('        <!-- Bracket Section -->');

// Rebuild sections in new order
let reordered = scoreSec + schedSec + standSec + brackSec + rulesSec;

// Fix active class logic inside the sections
reordered = reordered.replace(/class="mobile-tab-section active /g, 'class="mobile-tab-section ');
reordered = reordered.replace(/id="scores-section" class="mobile-tab-section /g, 'id="scores-section" class="mobile-tab-section active ');

// Inject back below the mobile tabs
// Nav ends with `</nav>` inside `<main>`
const injectionPoint = html.indexOf('</nav>') + 6;
html = html.slice(0, injectionPoint) + '\n\n' + reordered + html.slice(injectionPoint);

// Clean up any stray quadruple newlines that might have been created
html = html.replace(/\n{4,}/g, '\n\n');

fs.writeFileSync(path, html, 'utf8');
console.log("Successfully rearranged UI!");
