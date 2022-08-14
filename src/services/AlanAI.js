visualHints("Say 'Hi'",
           "Say 'Tell me about this project?'");

intent('(hi|hello), Alan ', p => {
    p.play('(hello|hi there)');
});

intent('(Tell me about this project?|What do this project do?| What can I do here)', p =>{
    p.play('This is a News project and I am Alan here to help you');
});

intent('(How do you work? | Tell me what can you do? )' ,p=>{
    p.play('I am Alan AI, you can pass me a category of news you want and I will try to get (latest|recent) News on your selected category. ')
    p.play("Say '(Get|Show|Fetch) me news on and pass me a Catergory' ")
})

intent('(Get|Show|Fetch) me news on $(item* (.*))', (p)=> {
    if(p.item.value==='health'|| p.item.value==='general' || p.item.value==='technology' || p.item.value==='science' || p.item.value==='sports' || p.item.value==='business' ||p.item.value==='entertainment'){
        p.play({command : "VoiceNews" , data : p.item.value.toUpperCase()});
        p.play('(Fetching|Getting|Showing) (latest|recent) News on your selected category.');
    }
    else{
        p.play('Sorry, Cannot get Data, try some other category')
    }
});









