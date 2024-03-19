let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput"); 


function sendMsgToChatbot(){
    let userMsg = userInputEl.value 

    let msgContainerEl = document.createElement("div")
    msgContainerEl.classList.add("msg-to-chatbot-container");
 
        chatContainerEl.appendChild(msgContainerEl)

    

    let userMsgEI = document.createElement("span")
    userMsgEI.textContent = userMsg
    userMsgEI.classList.add("msg-to-chatbot");
   
        msgContainerEl.appendChild(userMsgEI)

    
 

    userInputEl.value =""
    
    getReplyFromChatBox()
}

function getReplyFromChatBox(){
    let noOfChatBoxMsg = chatbotMsgList.length 
    let chatboxmsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatBoxMsg)-1]

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");

        chatContainerEl.appendChild(msgContainerEl)


    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatboxmsg
    chatbotMsgEl.classList.add("msg-from-chatbot");
   
        msgContainerEl.appendChild(chatbotMsgEl)
   
   
  
}