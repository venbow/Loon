if ($request.url.includes('/v1/apple')) {
    let body = JSON.parse($response.body);
    Object.assign(body, {
        status: "active",
        transaction_id: 000000000652310,
        used_intro_gr1: true,
        auto_renew_status: false,
        expiration_date: "2999-09-09T06:42:17Z",
        features: [
            "premium",
            "premium_partnership",
            "report_for_doctor",
            "symptom_checker"
        ],
        subscription_manager: null,
    });
    $done({
        body: JSON.stringify(body)
    });
}
