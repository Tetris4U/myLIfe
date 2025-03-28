function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // Set language to English
    speech.pitch = 1; // Set pitch level (1 is normal)
    speech.rate = 1; // Set speaking speed (1 is normal speed)
    window.speechSynthesis.speak(speech); // Speak the text
}

// Add an event listener to the button
const startButton = document.getElementById("start");

startButton.addEventListener("click", function() {
    speak("Hello, I am Jarvis"); // Make the AI say "Hello, I am Jarvis"
});