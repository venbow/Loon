const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
  'Panzy': { name: 'PanzySubscriptions', id: 'panzy.lifetime' }
  //'HTTPBot': { name: 'rc_lifetime', id: 'com.behindtechlines.HTTPBot.prounlock' },
  //'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
  //'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.yearly' }
};
const data = {
    "grace_period_expires_date": null,
    "expires_date": null
    "purchase_date": "2025-08-20T07:52:54Z"
    //"ownership_type": "PURCHASED",
    //"store": "app_store"
    //"is_sandbox": false
};
const data1 = {
    "price": {
      "amount": 0,
      "currency": "USD"
    },
    "purchase_date": "2025-08-20T07:52:54Z",
    "display_name": null
};
const data2 = {
    "store_transaction_id": "500002333800066",
    "is_sandbox": false,
    "id": "o1_urkDyNzJcaoUmLf5U30QbA",
    "price": {
        "amount": 0,
        "currency": "USD"
    },
    "display_name": null,
    "original_purchase_date": "2025-08-20T07:52:54Z",
    "purchase_date": "2025-08-20T07:52:54Z",
    "store": "app_store"
}
if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
    delete $request.headers["X-RevenueCat-ETag"];
    resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    for (const i in list) {
        if (new RegExp(`^${i}`, `i`).test(ua)) {
            obj.subscriber.subscriptions = {};
            obj.subscriber.other_purchases[list[i].id] = data1;
            obj.subscriber.non_subscriptions[list[i].id] = data2;
            //obj.subscriber.subscriptions[list[i].id] = data;
            obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
            obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
            obj.subscriber.original_purchase_date = "2025-08-20T07:52:54Z"
            break;
        }
    }
    resp.body = JSON.stringify(obj);
}

$done(resp);
