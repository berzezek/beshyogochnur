<template>
  <section class="module">
    <main-loader v-if="pending" />
    <div class="container" v-if="product && !pending">
      <div class="row">
        <div class="col-sm-6 mb-sm-40">
          <a class="gallery">
            <img :src="product?.image" :alt="product?.name" />
          </a>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="row mb-20"></div>
            <div class="col-sm-12">
              <h1 class="product-title font-alt">{{ product?.name }}</h1>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-12">
              <div class="price font-alt">
                <span class="amount">
                  {{ product?.price }} {{ $t('currency') }}
                </span>
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
          <div class="col-sm-12 buttons-container">
            <a class="btn btn-lg btn-round btn-success" @click="toggleModal">
              {{ $t('order_now') }}
            </a>
            <a @click="$router.go(-1)" class="btn btn-lg btn-round btn-primary">
              {{ $t('back') }}
            </a>
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
  import type { Product } from '~/types/apiResponse';
  import type { IFormData } from '~/types/formData';
  const runtimeConfig = useRuntimeConfig();
  const route = useRoute();
  const router = useRouter();
  const lang = useCookie('lang');

  const product = ref<Product>();
  const pending = ref(false);

  const fetchProduct = async () => {
    pending.value = true;
    try {
      const response = await fetch(
        `${runtimeConfig.public.apiBase}products/${route.params.slug}/?${
          lang.value ? `lang=${lang.value}` : 'lang=uz'
        }`
      );
      product.value = await response.json();
    } catch (error) {
      console.error('Failed to fetch product:', error);
    } finally {
      pending.value = false;
    }
  };

  watch(lang, async () => {
    await fetchProduct();
  });

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
      const message = `Информация о заказе:\n\tИмя: ${
        formData.userName
      }\n\tEmail: ${formData.email}\n\tТелефон: ${
        formData.phone
      }\n\tСообщение: ${formData.message}\n\tПродукт: ${
        productMess.value && productMess.value.name
          ? productMess.value.name
          : ''
      }`;

      for (let i = 0; i < chatIds.length; i++) {
        await fetch(
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
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setTimeout(() => {
        toggleModal();
      }, 3000);
    }
  };
</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }

  .buttons-container {
    display: flex;
    gap: 15px; /* Расстояние между кнопками */
    flex-wrap: wrap; /* Чтобы кнопки переходили на новую строку при необходимости */
    justify-content: center; /* Центрирование кнопок */
  }

  .buttons-container .btn {
    flex: 1; /* Чтобы кнопки занимали одинаковое пространство */
    text-align: center;
  }

  @media (max-width: 767px) {
    /* На экранах меньше 768px кнопки будут друг под другом */
    .buttons-container {
      flex-direction: column;
    }
  }
</style>
