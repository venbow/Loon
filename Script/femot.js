var body = $response.body;
var obj = JSON.parse(body);
obj =
{
  "subscriptionActivityPlan": {
    "scene": 0,
    "source": "MePagePrimeSubscription",
    "packageId": 0,
    "language": 0,
    "appFlag": 1,
    "period": 3,
    "usedMultiBgImgUrl": 0,
    "endTime": 2143295700,
    "pageUrlType": 0,
    "missOutFlag": false,
    "type": 0,
    "id": 2,
    "proportion": 0,
    "closeFlag": true,
    "product": 0,
    "bannerUrlType": 0,
    "groupId": 0,
    "startTime": 1705469700,
    "missOutCloseFlag": false,
    "showEndTimestamp": false,
    "timeInterval": 0,
    "description": "iOS-注册常规-TTTPREG-年包"
  },
  "activityFlag": true,
  "subscriptionPlansList": [
    {
      "productId": "com.btang.thermometer.prime2.free_trial_yearly",
      "appFlag": 1,
      "renewalFlag": true,
      "period": 3,
      "storeType": 1,
      "isPromotionalOffer": false,
      "proportion": 0,
      "advertisementType": 0,
      "freeTrialDays": 7,
      "firstPeriod": 0,
      "memberStatus": 1,
      "expiredTimestamp": 2067955200,
	  "memberExpiredTimestamp": 2067955200,
      "subscriptionStartTimestamp": 1752473250,
      "lastPurchaseTimestamp": 1752473250,
      "channel": "Unknown",
	  "triggerType": 0,
      "subscriptionSource": 0,
      "group": 2,
      "planType": 0,
      "icon": "popular",
      "offerProportion": 0,
      "totalFee": 4999,
      "firstPrice": 0,
      "unionAppFlag": 0,
      "status": 1
    }
  ]
}
body = JSON.stringify(obj);
$done({body});
