<template>
  <div>
    <main-loader v-if="pending" />
    <div v-else>
      <section class="module" id="catalog">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">{{ $t('products') }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" v-for="product in products?.results" :key="product.name">
              <div class="team-item" @click="productDetail(product.slug)">
                <div class="team-image"><img :src="product.image" :alt="product.name" /></div>
                <div class="team-descr font-alt">
                  <div class="team-name">{{ product.name }}</div>
                  <div class="team-role">{{ product.price }} {{ $t('currency') }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-20">
            <a @click="navigateTo('/catalog')" class="btn btn-lg btn-round btn-primary mb-4">{{ $t('back') }}</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { IProduct } from '~/types/apiResponse';
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const lang = useCookie('lang');

const products = ref<IProduct>();
const pending = ref(false); // Переменная для отслеживания состояния загрузки

const fetchProducts = async () => {
  pending.value = true; // Начало загрузки
  try {
    const response = await fetch(`${runtimeConfig.public.apiBase}catalogs/${route.params.slug}/?${lang.value ? `lang=${lang.value}` : 'lang=uz'}`);
    products.value = await response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    pending.value = false; // Завершение загрузки
  }
};

// Следим за изменением языка и обновляем данные
watch(lang, async () => {
  await fetchProducts();
});

// Инициализируем загрузку данных при первом рендере
await fetchProducts();

const productDetail = async (slug: string) => {
  router.push(`/product/${slug}`);
};
</script>
