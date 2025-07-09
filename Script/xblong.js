let body = $response.body;

let modifiedBody = body
    .replace(/"vip"\s*:\s*-?\d+/g, '"vip":1')
    .replace(/"unpaid_vip"\s*:\s*\d+/g, '"unpaid_vip":0')
    //.replace(/"new"\s*:\s*\d+/g, '"new":0')
    .replace(/"expire"\s*:\s*-?\d+/g, '"expire":2067552000')
    .replace(/"exp_vip"\s*:\s*-?\d+/g, '"exp_vip":2067552000')
    .replace(/"viptime"\s*:\s*\d+/g, '"viptime":315360000');

$done({ body: modifiedBody });
