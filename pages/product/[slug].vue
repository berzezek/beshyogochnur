<template>
  <div>
    <section class="service-section">
      <div class="titan-caption">
        <div class="caption-content">
          <div class="font-alt mb-40 titan-title-size-4 color-orange">
            {{ $t('products') }}
          </div>
        </div>
      </div>
    </section>
    <section class="module">
      <div class="container">
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
            <div class="row mb-20">
              <div class="col-sm-12">
                <div class="description">
                  <p v-if="product?.manufactures">{{ `${$t('manufacturer')} - ${product?.manufactures}` }}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 buttons-container">
              <a :href="product?.pdf" target="_blank" v-if="product?.pdf" class="btn btn-lg btn-round btn-warning">
                {{ $t('view_docs') }}
              </a>
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
          <contact-form :product="product" :isOpen="isModalOpen" @close="toggleModal" />
        </div>
      </div>

    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/apiResponse';
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const lang = useCookie('lang');

const product = ref<Product>();
const pending = ref(false);

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const fetchProduct = async () => {
  pending.value = true;
  try {
    const response = await fetch(
      `${runtimeConfig.public.apiBase}products/${route.params.slug}/?${lang.value ? `lang=${lang.value}` : 'lang=uz'
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
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons-container .btn {
  flex: 1;
  text-align: center;
}

@media (max-width: 767px) {

  .buttons-container {
    flex-direction: column;
  }
}
</style>
