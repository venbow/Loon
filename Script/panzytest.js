/****************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/venbow/Loon/main/Script/panzytest.js

[mitm]
hostname = api.revenuecat.com
****************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "request_date_ms" : 1762829545008,
  "request_date" : "2025-11-11T10:52:25Z",
  "subscriber" : {
    "non_subscriptions" : {
    },
    "first_seen" : "2025-08-15T14:23:20Z",
    "original_application_version" : "5077",
    "entitlement" : {
    },
    "other_purchases" : {
    },
    "management_url" : null,
    "subscriptions" : {
      "panzy.lifetime" : {
        "purchase_date" : "2025-09-09T09:09:09Z",
        "original_purchase_date" : "2025-09-09T09:09:09Z",
        "ownership_type" : "PURCHASED",
        "expires_date" : "2099-09-09T09:09:09Z"
      }
    },
    "entitlements" : {
      "PanzySubscriptions" : {
        "ownership_type" : "PURCHASED",
        "product_identifier" : "panzy.lifetime",
        "expires_date" : null,
        "original_purchase_date" : "2025-09-09T09:09:09Z",
        "purchase_date" : "2025-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : "2025-09-09T09:09:09Z",
    "original_app_user_id" : "$RCAnonymousID:ebc2c4f413f740c284494afbdfec8c93",
    "last_seen" : "2025-11-10T11:10:56Z"
  }
};

$done({body : JSON.stringify(chxm1023)});
