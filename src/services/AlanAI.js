onUserEvent((p, e) => {
    console.info('EVENT', e.event);
    if (e.event == 'firstActivate') {
        p.showPopup({
            html: '<div class="info-popup"> <div class="info-popup_header"><object type="image/svg+xml" class="bot-image" data="https://alan.app/docs/_static/assets/img/script-concepts/popup2.svg" alt="Created by vectorjuice - freepik.com"/></object> <div class="buble">Ask me a question</br>or say</br> <span style="font-size:10px; color:#BD10E0; font-weight:800">"What do this project do?" </br> "How do you work?" "</span></div><div class="info-popup_pointer-button grey-arrow"></div></div></div>',
            style: ".bot-image{width:250px;height:250px;margin-left: 4px;margin-top:-20px}.info-popup{background:linear-gradient(.45turn,#efefef,#fff);max-width:394px;height:280px;width:400px;max-height:280px;-webkit-box-shadow:0 5px 14px rgba(0,0,0,.25);box-shadow:0 5px 14px rgba(0,0,0,.25);overflow:hidden;border-radius:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.info-popup_header{position:relative;display:flex;height:100%;width:100%;color:#000;font-size:13px;font-weight:700;padding-top:48px;padding-right:18px;text-align:center;background:linear-gradient(102.76deg,#fbf7f7 2.32%,#e0e4e9 94.85%);background-repeat:no-repeat;background-position:center center;background-size:100% 100%}.info-popup_pointer-button{margin:22px auto 10px}.buble{min-width:186px;width:186px;height:104px;background-image:url(https://alan.app/docs/_static/assets/img/script-concepts/bubble.svg);background-repeat:no-repeat;background-size:100% auto;padding-left:28px;padding-top:18px;font-size:13px;line-height:20px;position:absolute;top:25px;right:29px}.grey-arrow{background-image:url(https://alan.app/docs/_static/assets/img/script-concepts/grey_arrow.svg);background-repeat:no-repeat;background-size:100% auto;-webkit-transform:rotate(357deg);-ms-transform:rotate(357deg);transform:rotate(357deg);width:104px;height:62px;position:absolute;bottom:14px;right:95px}.alan-overlay-popup__ok{background:none; opacity:0.3; color:#000}.alan-overlay-popup__ok:before{content:'✕';position: absolute;top:0;left:0;width:100%;height:100%;font-size:13px;color:#bfbfbf; opacity:1 !important}",
            overlay: true,
            buttonMarginInPopup: 15,
            force: false,
        });
    }
});

intent('(hi|hello), Alan ', p => {
    p.play('(hello|hi there)');
});

intent('(Tell me about this project?|What do this project do?| What can I do here)', p => {
    p.play('This is a News project and I am Alan here to help you');
});

intent('(How do you work? | Tell me what can you do?| What do you do?)', p => {
    p.play('I am Alan AI, you can pass me a category of news you want and I will try to get (latest|recent) News on your selected category. ')
    p.play("Say '(Get|Show|Fetch) me news on and pass me a Catergory' ")
})

intent('(Get|Show|Fetch) me news on $(item* (.*))', (p) => {
    if (p.item.value === 'health' || p.item.value === 'general' || p.item.value === 'technology' || p.item.value === 'science' || p.item.value === 'sports' || p.item.value === 'business' || p.item.value === 'entertainment') {
        p.play({ command: "VoiceNews", data: p.item.value.toUpperCase() });
        p.play('(Fetching|Getting|Showing) (latest|recent) News on your selected category.');
    }
    else {
        p.play('Sorry, Cannot get Data, try some other category')
    }
});









