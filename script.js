document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');
  const messageInput = document.getElementById('messageInput');
  const responseBox = document.getElementById('TalkbotResponse');

  const responses = [
    { trigger: 'yo', reply: 'What’s up?' },
    { trigger: 'hi', reply: 'Hello!' },
    { trigger: 'whats good', reply: 'Ask your mama.' },
    { trigger: 'so you wanna play dirty', reply: 'Did I stutter?' },
    { trigger: 'okay lets do this', reply: 'Aight, let me see what you got, homie.' },
  ];

  function getBotReply(input) {
    input = input.toLowerCase();
    const match = responses.find(({ trigger }) => input.includes(trigger));
    return match ? match.reply : "I don't understand that yet.";
  }

  function handleSubmit() {
    const userInput = messageInput.value.trim();
    if (!userInput) {
      responseBox.textContent = 'Please say something.';
      return;
    }

    responseBox.textContent = getBotReply(userInput);
    messageInput.value = '';
  }

  submitButton.addEventListener('click', handleSubmit);

  // Optional: allow Enter key to submit
  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSubmit();
  });
});
