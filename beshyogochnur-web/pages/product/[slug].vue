<template>
  <section class="module">
    <main-loader v-if="pending" />
    <div class="container" v-if="product && !pending">
      <div class="row">
        <div class="col-sm-6 mb-sm-40">
          <a class="gallery"><img :src="product?.image" :alt="product?.name" /></a>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="row mb-20">
              <div class="col-sm-8">
                <a @click="$router.go(-1)" class="btn btn-lg btn-block btn-round btn-primary">{{ $t('back') }}</a>
              </div>
            </div>
            <div class="col-sm-12">
              <h1 class="product-title font-alt">{{ product?.name }}</h1>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-12">
              <div class="price font-alt">
                <span class="amount">{{ product?.price }} {{ $t('currency') }}</span>
              </div>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-12">
              <div class="description">
                <p>{{ product?.description }}</p>
              </div>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-8">
              <a class="btn btn-lg btn-block btn-round btn-success" @click="toggleModal">{{ $t('order_now') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isModalOpen" class="modal-overlay" @click.self="toggleModal">
      <div class="modal-content">
        <contact-form @sendMess="sendMess" id="sendMess" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { Product } from '~/types/apiResponse';
import type { IFormData } from '~/types/formData';
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const lang = useCookie('lang');

const product = ref<Product>();
const pending = ref(false); // Переменная для отслеживания состояния загрузки

const fetchProduct = async () => {
  pending.value = true; // Начало загрузки
  try {
    const response = await fetch(`${runtimeConfig.public.apiBase}products/${route.params.slug}/?${lang.value ? `lang=${lang.value}` : 'lang=uz'}`);
    product.value = await response.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
  } finally {
    pending.value = false; // Завершение загрузки
  }
};

// Следим за изменением языка и обновляем данные
watch(lang, async () => {
  await fetchProduct();
});

// Инициализируем загрузку данных при первом рендере
await fetchProduct();

const isModalOpen = ref(false);
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
  if (isModalOpen.value) {
    router.push('#sendMess');
  }
};


const chatIds = runtimeConfig.public.chatId.split(',');

const productMess = ref<Product>();

const sendMess = async (formData: IFormData) => {
  try {
    productMess.value = product.value;
    const message = `Информация о заказе:\n\tИмя: ${formData.userName}\n\tEmail: ${formData.email}\n\tТелефон: ${formData.phone}\n\tСообщение: ${formData.message}\n\tПродукт: ${productMess.value && productMess.value.name ? productMess.value.name : ''}`;

    for (let i = 0; i < chatIds.length; i++) {
      const response = await fetch(`https://api.telegram.org/bot${runtimeConfig.public.telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatIds[i],
          text: message,
        }),
      });
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
  } finally {
    toggleModal();
  }
};

</script>
