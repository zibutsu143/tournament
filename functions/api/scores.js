export async function onRequestGet(context) {
    try {
        const { env } = context;
        
        // Fetch ALL_SCORES from KV bound to SCORES_KV
        let scoresMap = await env.SCORES_KV.get("ALL_SCORES", "json");
        
        if (!scoresMap) {
            scoresMap = {}; // Initial state
        }
        
        return new Response(JSON.stringify(scoresMap), {
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
