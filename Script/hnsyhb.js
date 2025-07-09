const path1 = "/v1/get_purchase_list";
const path2 = "/v1/get_vip_info_h5";
const path3 = "/v1/get_user_info";
const path4 = "/v1/get_enlightening_book_info";

let key = {"expire_time":7955110875,"vip_type":1,"last_product_id":"com.ihuman.book.sub.vip1y", "pack_list":["com.ihuman.book.sub.vip1y"]};

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
	obj.result["vip_status"] = key;	
}
if ($request.url.indexOf(path2) != -1){
	obj.result["vip_status"] = key;
	// obj.result["allow_guest"] = 1;
}
if ($request.url.indexOf(path3) != -1){
	obj.result.userinfo["vip_status"] = key;
}
if ($request.url.indexOf(path4) != -1){
	obj.result.books.forEach(function (item, idnex, array) {
	    item.is_vip = 0;
	})
}
$done({body: JSON.stringify(obj)});

/*
var modifiedBody = $response.body; 
var obj = JSON.parse(modifiedBody);
obj.result.books.forEach(function (item, idnex, array) {
    item.is_vip = 0;
})
modifiedBody = JSON.stringify(obj); 
$done(modifiedBody);
*/
