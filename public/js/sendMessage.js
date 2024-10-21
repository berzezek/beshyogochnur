function sendMessageToTelegram(message) {
    const botToken = config.TG_TOKEN; 
    const chatId = config.CHAT_ID;
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    const data = {
      chat_id: chatId[0],
      text: message
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        console.log('Сообщение успешно отправлено:', data);
      } else {
        console.error('Ошибка при отправке сообщения:', data);
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  }
  
document.addEventListener('DOMContentLoaded', function () {
  // Найти форму по id
  const contactForm = document.getElementById('contactForm');

  // Обработчик события отправки формы
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвратить стандартное поведение отправки формы
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const textMessage = `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`

    alertify.notify(
      'Сообщение отправлено, мы скоро с Вами свяжемся',
      'success',
      5,
      function () {
        sendMessageToTelegram(textMessage)
      }
    );

  });
});
