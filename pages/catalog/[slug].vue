<template>
  <div>
    <main-loader v-if="pending" />
    <div v-else>
      <section class="module" id="catalog">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">
                {{ $t('products') }}
                <span class="text-primary">{{ category?.name }}</span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3"
              v-for="product in products?.results"
              :key="product.name"
            >
              <div
                class="team-item"
                @click="productDetail(product.slug)"
                id="product"
              >
                <div class="team-image">
                  <img :src="product.image" :alt="product.name" />
                </div>
                <div class="team-descr font-alt">
                  <div class="team-name">{{ product.name }}</div>
                  <div class="team-role">
                    {{ product.price }} {{ $t('currency') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button-container mt-20">
            <a
              @click="navigateTo('/catalog')"
              class="btn btn-lg btn-round btn-primary mb-4"
              >{{ $t('back') }}</a
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import type { IProduct, Category } from '~/types/apiResponse';
  const runtimeConfig = useRuntimeConfig();
  const route = useRoute();
  const router = useRouter();
  const lang = useCookie('lang');

  const products = ref<IProduct>();
  const category = ref<Category>();
  const pending = ref(false);

  const fetchCurrentCategory = async () => {
    pending.value = true;
    try {
      const response = await fetch(
        `${runtimeConfig.public.apiBase}catalogs/?${
          lang.value ? `lang=${lang.value}` : 'lang=uz'
        }`
      );
      const data = await response.json();
      category.value = data.results.find(
        (item: Category) => item.slug === route.params.slug
      );
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      pending.value = false;
    }
  };

  const fetchProducts = async () => {
    pending.value = true;
    try {
      const response = await fetch(
        `${runtimeConfig.public.apiBase}catalogs/${route.params.slug}/?${
          lang.value ? `lang=${lang.value}` : 'lang=uz'
        }`
      );
      products.value = await response.json();
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      pending.value = false;
    }
  };

  watch(lang, async () => {
    await fetchProducts();
    await fetchCurrentCategory();
  });

  await fetchProducts();
  await fetchCurrentCategory();

  const productDetail = async (slug: string) => {
    router.push(`/product/${slug}`);
  };
</script>

<style scoped>
  #product {
    cursor: pointer;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
</style>
