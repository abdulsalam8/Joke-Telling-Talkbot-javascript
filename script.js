document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');
  const messageInput = document.getElementById('messageInput');
  const responseBox = document.getElementById('TalkbotResponse');

  const responses = [
    { trigger: 'yo', reply: 'whatsup' },
    { trigger: 'hi', reply: 'hello' },
    { trigger: 'whats good', reply: 'ask ur mama' },
    { trigger: 'so you wanna play dirty', reply: 'did I stutter' },
    { trigger: 'okay lets do this', reply: 'aight let me see what you got hommie' },
  ];

  submitButton.addEventListener('click', () => {
    let input = messageInput.value.trim().toLowerCase();

    if (!input) {
      responseBox.textContent = 'Please say something.';
      return;
    }

    let matched = false;
    for (let { trigger, reply } of responses) {
      if (input.includes(trigger)) {
        responseBox.textContent = reply;
        matched = true;
        break;
      }
    }

    if (!matched) {
      responseBox.textContent = "I don't understand that yet.";
    }

    messageInput.value = '';
  });
});
