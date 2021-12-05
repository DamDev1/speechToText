const record = document.querySelector(".microphone");
const content = document.querySelector(".demo")

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();
recognition.interimResults = true;

recognition.onstart = function(){
    console.log("voice is activated")
}

record.addEventListener("click", () =>{
    recognition.start();
})

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript
    content.textContent = transcript;
}