var body = $response.body;
var obj = JSON.parse(body);
obj = {
	"userId": 8888888,
	"appFlag": 1,
	"productId": "com.btang.thermometer.prime2.free_trial_yearly_CNA",
	"status": 1,
	"memberStatus": 1,
	"storeType": 1,
	"expiredTimestamp": 2067955200,
	"memberExpiredTimestamp": 2067955200,
	"bonusDays": 0,
	"memberBonusDays": 0,
	"subscriptionStartTimestamp": 1752473250,
	"goldPrimeFlag": 0,
	"group": 0,
	"flag": "NEW_SUBSCRIPTION_FREE_TRIAL",
	"source": "MePagePrimeSubscription",
	"activityId": 345,
	"fromMissOut": false,
	"lastPurchaseTimestamp": 1752473250,
	"target": 0,
	"channel": "Unknown",
	"triggerType": 0,
	"unionStatus": 0,
	"unionAppFlag": 0,
	"unionTimestamp": 0,
	"subscriptionSource": 0,
	"period": 3
}
body = JSON.stringify(obj);
$done({body});
