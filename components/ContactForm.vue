<template>
  <section class="module" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <h2 class="module-title font-alt">
            {{ $t('contact_us') }}
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <form id="contactForm" role="form" @submit.prevent="sendMess">
            <div class="form-group">
              <label class="sr-only" for="name">{{ $t('name_placeholder') }}</label>
              <input class="form-control" type="text" id="name" name="name" :placeholder="$t('name_placeholder')"
                v-model="formData.userName" required />
            </div>
            <div class="form-group">
              <label class="sr-only" for="email">{{ $t('email_placeholder') }}</label>
              <input class="form-control" type="email" id="email" name="email" :placeholder="$t('email_placeholder')"
                v-model="formData.email" required />
            </div>
            <div class="form-group">
              <label class="sr-only" for="phone">{{ $t('phone_placeholder') }}</label>
              <input class="form-control" type="text" id="phone" name="phone" :placeholder="$t('phone_placeholder')"
                v-model="formData.phone" required />
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="7" id="message" name="message" v-model="formData.message"
                :placeholder="$t('message_placeholder')"></textarea>
            </div>
            <div class="text-center">
              <button class="btn btn-block btn-round btn-d" type="submit">
                {{ $t('send') }}
              </button>
              <button class="btn btn-block btn-round btn-secondary mt-20" type="button" @click="closeModal"
                v-if="props.isOpen">
                {{ $t('close') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2';

const { t } = useI18n();

const props = defineProps({
  product: { type: Object, required: false },
  isOpen: { type: Boolean, required: true },
});

const emit = defineEmits(["close"]); // Создаём событие для закрытия

const formData = ref({
  userName: '',
  email: '',
  phone: '',
  message: '',
});

const runtimeConfig = useRuntimeConfig();
const chatIds = runtimeConfig.public.chatId;

const sendMess = async () => {
  try {
    const message = `Информация о заказе:\n\tИмя: ${formData.value.userName}
      \n\tEmail: ${formData.value.email}
      \n\tТелефон: ${formData.value.phone}
      \n\tСообщение: ${formData.value.message}
      ${props.product?.name ? `\n\tПродукт: ${props.product.name}` : ''}`;

    console.log('Sending message:', message);

    for (const chat of chatIds.split(',')) {
      await fetch(
        `https://api.telegram.org/bot${runtimeConfig.public.telegramToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chat.trim(), text: message }),
        }
      );
    }

    Swal.fire({
      title: t('message_sent_title'),
      text: t('message_sent'),
      icon: 'success',
      confirmButtonText: 'OK',
      timer: 10000,
      timerProgressBar: true
    });

    // Очищаем форму
    formData.value = { userName: '', email: '', phone: '', message: '' };

    // Закрываем модальное окно
    emit("close");

  } catch (error) {
    console.error('Failed to send message:', error);
  }
};

const closeModal = () => {
  emit("close"); // Вызываем событие закрытия
};
</script>
