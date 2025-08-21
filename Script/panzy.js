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
	"expires_date": "2099-02-18T07:52:54Z",
	"original_purchase_date": "2025-08-20T07:52:55Z",
	"purchase_date": "2025-08-20T07:52:54Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
	//"is_sandbox": false
};

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
			obj.subscriber.subscriptions[list[i].id] = data;
			obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
			obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
	resp.body = JSON.stringify(obj);
}

$done(resp);
