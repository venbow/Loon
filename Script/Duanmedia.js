const url = $request.url;

if (url.indexOf('user/me/subscription') !== -1) {
    let body = $response.body;
    body = body
      .replace(/state="inactive"/g, 'state="active"')
      .replace(/message="很遗憾，您没有有效的订阅"/g, 'message="订阅有效，欢迎体验会员服务"')
      .replace(/term="false"/g, 'term="true"');
    $done({ body });
} else if (url.indexOf('account/token/generate') !== -1) {
    let body = $response.body;
    body = body.replace(/allow":false/g, '"allow":true');
    $done({ body });
} else {
    let body = $response.body;
    body = body.replace(/state="inactive"/g, 'state="active"');
    $done({ body });
}
