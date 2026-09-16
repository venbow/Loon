if ($request.url.includes('/v1/apple')) {
    let body = JSON.parse($response.body);
    Object.assign(body, {
        status: "active",
        transaction_id: 000000000652310,
        used_intro_gr1: true,
        auto_renew_status: false,
        expiration_date: "2099-09-09T06:42:17Z",
        features: ["basic_webinar_pass","perimenopause","family","ttc","pregnancy","report_for_doctor","symptom_checker","cycle_trends_widget","library","pregnancy_details","premium","premium_partnership","stories","symptom_patterns","ttc_sex_widget","track","virtual_assistant"],
        subscription_manager: null,
    });
    $done({
        body: JSON.stringify(body)
    });
}
