<template>
  <div>
    <main-section />

    <main-about />

    <hr class="divider-w" />

    <main-service />

    <!-- <main-presentation /> -->

    <contact-form @sendMess="sendMess" />
  </div>
</template>

<script lang="ts" setup>
  import type { IDataForm } from '~/types/dataForm';

  const runtimeConfig = useRuntimeConfig();

  const chatIds = runtimeConfig.public.chatId.split(',');

  const sendMess = async (formData: IDataForm) => {
    try {
      const message = `Имя: ${formData.userName}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`;
      // Отправка сообщения через Telegram Bot API с использованием fetch
      for (let i = 0; i < chatIds.length; i++) {
        const response = await fetch(
          `https://api.telegram.org/bot${runtimeConfig.public.telegramToken}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatIds[i],
              text: message,
            }),
          }
        );
        // Проверка успешности ответа
        if (!response.ok) {
          const errorData = await response.json();
          return {
            status: 'error',
            message: 'Failed to send message',
            error: errorData,
          };
        }
      }
    } catch (error) {
      return {
        status: 'error',
        message: 'Failed to send message',
        error,
      };
    }
  };
</script>
