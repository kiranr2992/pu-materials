const msgerForm= get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "PU_BOT";
const PERSON_NAME = "you";
const prompts = [
    ["what is your name"],
    ["oo"],
    ["hi","hii","hey","hello","good morning","good afternoon"],
    ["how are you","how is life","how are things"],
    ["what are you doing","what is going on","what is up"],
    ["how old are you"],
    ["are you human","are you bot","are you human or bot"],
    ["who created you","who made you"],
    [
        "your name please",
        "your name",
        "may i know your mame",
        "what is your name",
        "what call yoyrself"
    ],
    
    ["i love you"],
    ["happy","good","fun","wonderful","fantastic","cool"],
    ["bad","bored","tired"],
    ["help me","tell me a joke"],
    ["ah","yes","ya","ok","okay","nice"],
    ["bye","good bye","see you leter"],
    ["what should i eat today"],
    ["hii bro"],
    ["what","why","where","when","how"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"]
]
const replies = [
    ["my name is parth"],
    ["mm"],
    ["hello!","hi!","hey!","hi there!","howdy"],
    [
        "fine.... how are you?",
        "pretty well, how are you?",
        "fantastic, how are you?"
    ],
    [
        "nothing much",
        "about to go to sleep",
        "can you guess?",
        "i dont know actually"
    ],
    ["i am infinite"],
    ["i am just bot","i am bot.what are you"],
    ["the one to god,java script"],
    ["i am nameless","i dont have a name"],
    ["i love you too","me too"],
    ["have you ever felt bad?","glad to hear it"],
    ["why","why you shouldn't!","try watching tv"],
    ["what about?","once upon a time........"],
    ["tell me joke","tell me story","tell me about you"],
    ["bye","goodbye","see you leter"],
    ["sushi","pizza"],
    ["bro!"],
    ["great question"],
    ["that's ok","i understand","what do you want talk about?"],
    ["please say something :("],
    ["haha!!","good one!"]
];
const alternative = [
    "same",
    "go on.....",
    "bro....",
    "try again",
    "i'm listening",
    "i don't understand :/"
]
const robot = ["how do you do, fellow human","i am not a bot"];
msgerForm.addEventListener("submit", event => {
    event.preventDefault();
    const msgText = msgerInput.value;
    if (!msgText) return;
    msgerInput.value ="";
    addChat(PERSON_NAME,PERSON_IMG, "right", msgText);
    output(msgText);
});
function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s]/gi, " ").replace(/[\d]/gi, " ").trim();
    text=text
    .replace(/ a /g, " ")
    .replace(/i feel/g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/I u/g, "are you");
if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
} else if (text.match(/thank/gi)) {
    product = "you are welcome!"
} else if (text.match(/(robot|bot|robo)/gi)) {
    product = alternative[Math.floor(Math.random() * alternative.length)];
} else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
}
const delay = input.split(" ").length * 100;
setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
}, delay);
}
function compare(promptsArray, repliesArray, string){
    let reply;
    let replyFound = false;
    for (let x=0; x<promptsArray.length; x++){
        for (let y =0; y <promptsArray[x].length; y++){
            if (promptsArray[x][y] == string){
                let replies = repliesArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                break;
            }
        }
        if (replyFound) {
            break;
        }
    }
    return reply;
}
function addChat(name, img, side, text) {
    const msgHTML = `
    <div class="msg ${side}-msg">
    <div class="msg-img" style="background-image:url(${img})"></div>
    <div class="msg-bubble">
    <div class="msg-info">
    <div class="msg-info-name">${name}</div>
    <div class="msg-info-time">${FormatDate(new Date())}</div>
    </div>
    <div class="msg-text">${text}</div>
    </div>
    </div>
    `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500; 
}
function get(selector, root = document) {
    return root.querySelector(selector);
}
function FormatDate(date) {
    const h ="0" + date.getHours();
    const m ="0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}