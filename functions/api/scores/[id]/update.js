export async function onRequestPost({ request, env, params }) {
    try {
        const id = params.id;
        const body = await request.json();
        const { score, winner } = body;
        
        // Fetch current scores
        let scoresMap = await env.SCORES_KV.get("ALL_SCORES", "json");
        if (!scoresMap) {
            scoresMap = {};
        }
        
        // Update the score for this match ID
        scoresMap[id] = { score, winner };
        
        // Save back to KV
        await env.SCORES_KV.put("ALL_SCORES", JSON.stringify(scoresMap));
        
        return new Response(JSON.stringify({ 
            message: 'Score updated successfully', 
            match_id: id, 
            score, 
            winner 
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
