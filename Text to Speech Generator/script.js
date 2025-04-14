const textarea = document.getElementById("text");
const voiceSelect = document.getElementById("voiceSelect");
const speakButton = document.getElementById("speakBtn");

let voices = [];

function loadVoices() {
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";
    voices.forEach(voice => {
        const option = document.createElement("option");
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });
}
window.speechSynthesis.onvoiceschanged = loadVoices;
window.onload = loadVoices;

speakButton.addEventListener("click", () => {
    const text = textarea.value;
    if (!text) return alert("Please enter some text!");

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utterance);
});
