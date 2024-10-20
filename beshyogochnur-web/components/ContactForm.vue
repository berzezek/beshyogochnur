<template>
  <section class="module" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <h2 class="module-title font-alt" data-lang="contact_us">
            {{ $t('contact_us') }}
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <form id="contactForm" role="form" @submit.prevent="sendMess">
            <div class="form-group">
              <label class="sr-only" for="name">{{
                $t('name_placeholder')
              }}</label>
              <input
                class="form-control"
                type="text"
                id="name"
                name="name"
                :placeholder="$t('name_placeholder')"
                v-model="formData.userName"
                required="true"
                :data-validation-required-message="
                  $t('validation_required_name')
                "
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="email">{{
                $t('email_placeholder')
              }}</label>
              <input
                class="form-control"
                type="email"
                id="email"
                name="email"
                :placeholder="$t('email_placeholder')"
                v-model="formData.email"
                :data-validation-required-message="
                  $t('validation_required_email')
                "
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="phone">{{
                $t('phone_placeholder')
              }}</label>
              <input
                class="form-control"
                type="text"
                id="phone"
                name="phone"
                :placeholder="$t('phone_placeholder')"
                v-model="formData.phone"
                :required="true"
                :data-validation-required-message="
                  $t('validation_required_phone')
                "
              />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="7"
                id="message"
                name="message"
                v-model="formData.message"
                :placeholder="$t('message_placeholder')"
                :data-validation-required-message="
                  $t('validation_required_message')
                "
              ></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <div class="text-center">
              <button
                class="btn btn-block btn-round btn-d"
                id="cfsubmit"
                type="submit"
              >
                {{ $t('send') }}
              </button>
            </div>
          </form>
          <div class="ajax-response font-alt" id="contactFormResponse"></div>

          <!-- Уведомление о принятии заказа -->
          <div v-if="isOrderConfirmed" class="order-confirmation">
            <p>{{ $t('order_accepted_message') }}</p>
            <button class="btn btn-primary" @click="closeConfirmation">
              {{ $t('close') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const emit = defineEmits(['sendMess']);

  const formData = ref({
    userName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Переменная для отображения уведомления
  const isOrderConfirmed = ref(false);

  const sendMess = async () => {
    emit('sendMess', formData.value);

    // Показываем уведомление после отправки
    isOrderConfirmed.value = true;

    // Сброс формы
    formData.value.userName = '';
    formData.value.email = '';
    formData.value.phone = '';
    formData.value.message = '';
  };

  // Закрыть уведомление
  const closeConfirmation = () => {
    isOrderConfirmed.value = false;
  };
</script>

<style scoped>
  .order-confirmation {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f8fc11;
    color: #303030;
    padding: 30px 50px;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 2000;
    max-width: 400px;
  }

  .order-confirmation p {
    font-size: 1.4em;
    margin: 0 0 15px;
    padding: 0;
  }

  .order-confirmation button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    transition: background-color 0.3s ease;
  }

  .order-confirmation button:hover {
    background-color: #0056b3;
  }
</style>
