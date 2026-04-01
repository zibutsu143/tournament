export async function onRequestPost({ request, env, params }) {
    try {
        const id = params.id;
        const body = await request.json();

        // Fetch current scores
        let scoresMap = await env.SCORES_KV.get("ALL_SCORES", "json");
        if (!scoresMap) scoresMap = {};

        // Merge: preserve all existing fields, apply only the fields sent in body
        // This allows score/winner updates and showLive toggles to be independent
        const existing = scoresMap[id] || {};
        const updated  = { ...existing };

        if ('score'    in body) updated.score    = body.score;
        if ('winner'   in body) updated.winner   = body.winner;
        if ('showLive' in body) updated.showLive = body.showLive;
        if ('tableNum' in body) updated.tableNum = body.tableNum;

        scoresMap[id] = updated;

        // Save back to KV
        await env.SCORES_KV.put("ALL_SCORES", JSON.stringify(scoresMap));

        return new Response(JSON.stringify({
            message:  'Score updated successfully',
            match_id: id,
            ...updated
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}

// Preflight handler
export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
