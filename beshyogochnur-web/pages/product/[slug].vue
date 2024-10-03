<template>
  <section class="module">
    <main-loader v-if="pending" />
    <div class="container" v-if="product">
      <div class="row">
        <div class="col-sm-6 mb-sm-40"><a class="gallery"><img :src="product.image" :alt="product.name" /></a></div>
        <div class="col-sm-6">
          <div class="row">
            <div class="row mb-20">
              <div class="col-sm-8">
                <a @click="$router.go(-1)" class="btn btn-lg btn-block btn-round btn-w">{{ $t('back') }}</a>
              </div>
            </div>
            <div class="col-sm-12">
              <h1 class="product-title font-alt">{{ product.name }}</h1>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-12">
              <div class="price font-alt">
                <span class="amount">{{ product.price }} {{ $t('currency') }}</span>
              </div>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-12">
              <div class="description">
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-8">
              <a class="btn btn-lg btn-block btn-round btn-b" @click="toggleModal">{{ $t('order_now') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="toggleModal">
      <div class="modal-content">
        <contact-form @sendMess="sendMess" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/product';
import type { IFormData } from '~/types/formData';

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const productMess = ref({} as IProduct | null);

const { data: product, pending, error } = await useFetch<IProduct>(`${runtimeConfig.public.apiBase}products/${route.params.slug}/`);

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const sendMess = async (formData: IFormData) => {
  try {
    productMess.value = product.value;
    const message = `Информация о заказе:\n\tИмя: ${formData.userName}\n\tEmail: ${formData.email}\n\tТелефон: ${formData.phone}\n\tСообщение: ${formData.message}\n\tПродукт: ${productMess.value && productMess.value.name ? productMess.value.name : ''}`;

    await fetch(`https://api.telegram.org/bot${runtimeConfig.public.telegramToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: runtimeConfig.public.chatId,
        text: message,
      }),
    });
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to send message',
      error,
    };
  } finally {
    toggleModal();
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  border-radius: 10px;
  max-width: 90%;
  height: auto;
}
</style>
