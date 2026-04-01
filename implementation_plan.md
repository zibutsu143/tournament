# Live Match Admin Feature

## Description
You requested a dedicated `/matchadmin` page for live score keeping during matches. The system should allow scores to be updated as the match progresses and automatically conclude the match when a player hits the "Race to" target (Race to 5 for Groups, Race to 7 for Knockouts, Race to 9 for the Final).

## Proposed Changes

### 1. Refactor Shared Data (`public/data.js`)
Currently, all the tournament data (`groupStageCSV`, `playerGroupIDs`, `matchData` for knockouts) is hardcoded inside `<script>` tags in `index.html`. 
To avoid duplicating 400 lines of data and keeping it in sync:
- **[NEW]** `public/data.js`: We will extract all match arrays, CSVs, and parsers into this shared file.
- **[MODIFY]** `public/index.html`: Remove the hardcoded data strings and replace them with `<script src="data.js"></script>`.

### 2. Live Match Admin Interface (`public/matchadmin.html`)
- **[NEW]** `public/matchadmin.html`: A new responsive dashboard for scorekeepers and referees.
- **Match Selector:** A search/dropdown to pick the active match (e.g., "Match 1 - Group A", or "SF-1").
- **Live Scoreboard UI:** Once a match is selected, it will show both players side-by-side with big score numbers.
- **Controls:** "+1" and "-1" increment buttons for each player.
- **Background Saving:** Every time a score button is pressed, the page will instantly push the live score (e.g., "3-2") to the backend. The main `index.html` page will show this partial score, but no winner will be declared or points assigned yet.
- **Auto-Finish Logic:** The page will look at the `Race To` format of the selected match (5, 7, or 9). When a player's score hits that target, the match concludes. A prompt will specify that the match is over, and it will push the final score *along with the Winner's name* to the backend. This triggers the group standings and bracket highlighter on the main page.

## Open Questions

> [!WARNING]
> Please review the following details:
> 1. Is it acceptable to securely extract the hardcoded CSV schedule from `index.html` and move it into `data.js` so that `matchadmin.html` can read it as well?
> 2. Currently, there is `admin.html` which uses a manual text-input form for Score and Winner. Should I keep `admin.html` as a fallback, or delete it in favor of this new automatic `matchadmin.html`?

## Verification Plan
1. Start the local server.
2. Navigate to `/matchadmin.html`.
3. Pick a group match (e.g. Match 1). Verify the target race is 5.
4. Use the +1 button to increment a player's score to 3-2. Verify the main page sees "3-2" without giving 3 points.
5. Increment the player's score to 5. Check if it auto-declares them the winner.
6. Verify the main page now gives 3 points to the winner.
