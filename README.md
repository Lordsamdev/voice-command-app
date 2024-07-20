# voice-command-app
This is a simple web application built using the JavaScript Web Speech API that allows you to interact with the web using voice commands.

**Features:**

Responds to "hello" with a popup message.
Opens popular websites ("Google", "Twitter", "LinkedIn") in new tabs when commanded.
Getting Started

**1. Clone the repository:**


```git clone https://github.com/Lordsamdev/voice-command-app.git```

**2. Open the index.html file in your browser.**

**3. Grant microphone access:**

The first time you use the app, your browser will ask for permission to use your microphone. Click "Allow" to enable voice commands.

**How it Works:**

The application utilizes the Web Speech API to capture your voice input and convert it to text. This text is then compared to predefined commands.

**Greetings:** If a greeting like "hello" is detected, a popup message appears.
Website Opening: When commands like "open Google", "open Twitter", or "open LinkedIn" are recognized, the corresponding website URL is opened in a new browser tab.

**Customization:**

This is a basic example. You can easily customize the app to:

Add more voice commands and functionalities like setting reminders, playing music, or searching the web.
Change the popup message content.
Integrate with other APIs or services based on voice commands.

**Technologies Used:**

HTML
CSS
JavaScript (Web Speech API)
Development

Feel free to fork the ```voice-command-app``` repository and contribute to its development! You can extend the functionality by adding more commands and responses.

**Note:**

This application currently supports basic voice commands and website opening functionalities.

**Further Resources:**

Web Speech API: [Web Speech API - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
