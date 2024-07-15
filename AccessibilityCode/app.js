// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert('Your browser does not support the Web Speech API. Please use Google Chrome.');
} else {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Continue listening until stopped
    recognition.interimResults = false; // We want final results
    recognition.lang = 'en-US'; // Set language

    // Get references to DOM elements
    const startBtn = document.getElementById('start-btn');
    const output = document.getElementById('output');

    // Start listening when the button is clicked
    startBtn.addEventListener('click', () => {
        recognition.start();
        output.textContent = 'Listening...';
        document.getElementById("output").style.color = "green";
    });



    // Handle the result of the speech recognition
    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim();
        output.textContent = `You said: ${transcript}`;
        document.getElementById("output").style.color = "#ff0000";
        handleCommand(transcript); // Process the voice command
    };

    // Handle any speech recognition errors
    recognition.onerror = (event) => {
        output.textContent = `Error occurred: ${event.error}`;
    };

    // Handle the end of the speech recognition
    recognition.onend = () => {
        output.textContent = 'Stopped listening.';
    };

    // Function to process voice commands
    function handleCommand(command) {
        // Implement your voice command handling logic here
        if (command.toLowerCase() === 'hello') {
            alert('Hello there!');
        } else if (command.toLowerCase() === 'open google') {
            window.open('https://www.google.com', '_blank');

        } else if(command.toLowerCase() === 'open twitter') {
            window.open('https://x.com/?lang=en', '_blank');

        } else if(command.toLowerCase() === 'open linkedin'){
            window.open('https://www.linkedin.com/', '_blank')
        }
    }
}
