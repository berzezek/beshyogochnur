<template>
  <div>
    <section class="catalog-section">
      <div class="titan-caption">
        <div class="caption-content">
          <div class="font-alt mb-40 titan-title-size-4 color-orange">
            {{ pageTitle }}
          </div>
        </div>
      </div>
    </section>
    <div v-if="pending" class="loader-overlay">
      <div class="loader"></div>
    </div>
    <section class="module-small">
      <div class="container">
        <form class="row">
          <div class="col-sm-6 mb-sm-20">
            <select class="form-control" @change="onCategoryChange($event)" :value="currentCategory">
              <option selected="true" value="">{{ $t('categories') }}</option>
              <option v-for="category in categories" :key="category.name" :value="category.slug">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="col-sm-6 mb-sm-20">
            <select class="form-control" @change="onManufacterChange($event)">
              <option selected="true" value="">{{ $t('manufacturers') }}</option>
              <option v-for="manufacter in manufacturers" :key="manufacter.name">{{ manufacter.name }}</option>
            </select>
          </div>
        </form>
      </div>
    </section>
    <hr class="divider-w">
    <section class="module-small">
      <div class="container">
        <div class="row multi-columns-row">
          <div class="col-sm-6 col-md-3 col-lg-3" v-for="product in products?.results" :key="product.name">
            <div class="shop-item" @click="productDetail(product.slug)">
              <div class="shop-item-image">
                <img :src="product.image" :alt="product.name" />
                <div class="shop-item-detail">
                  <a class="btn btn-round btn-b">
                    <span class="">{{ $t('more') }}</span>
                  </a>
                </div>
              </div>
              <h4 class="shop-item-title font-alt">
                <a href="#">{{ product.name }}</a>
              </h4>
              {{ product.price }} {{ $t('currency') }}
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-sm-12">
            <div class="pagination font-alt">
              <a href="#"><i class="fa fa-angle-left"></i></a><a class="active" href="#">1</a><a href="#">2</a><a
                href="#">3</a><a href="#">4</a><a href="#"><i class="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>

</template>

<script lang="ts" setup>
import type { IProduct, Category, Manufacter } from '~/types/apiResponse';
const { t, locale } = useI18n();
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const lang = useCookie('lang');

if (!lang.value) lang.value = 'uz';
locale.value = lang.value;

const products = ref<IProduct>();
const pageTitle = ref(route.params.slug);
const category = ref<Category>();
const categories = ref<Category[]>();
const manufacter = ref('');
const manufacturers = ref<Manufacter[]>();
const manufacterTitle = ref('');
const pending = ref(false);

const currentCategory = ref(route.params.slug || '');

const fetchManufacturers = async () => {
  pending.value = true;
  const categoryParam = route.params.slug ? `&category=${route.params.slug}` : '';
  try {
    const response = await fetch(
      `${runtimeConfig.public.apiBase}manufacturers/?lang=${locale.value}${categoryParam}`
    );
    manufacturers.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch manufacturers:', error);
  } finally {
    pending.value = false;
  }
};

const fetchCurrentCategory = async () => {
  pending.value = true;
  try {
    const response = await fetch(
      `${runtimeConfig.public.apiBase}catalogs/?lang=${locale.value}`
    );
    const data = await response.json();
    categories.value = data;
    category.value = data.find(
      (item: Category) => item.slug === route.params.slug
    );
  } catch (error) {
    console.error('Failed to fetch category:', error);
  } finally {
    pending.value = false;
  }
};

const fetchProducts = async () => {
  pending.value = true;
  const categoryParam = route.params.slug ? `&category=${route.params.slug}` : '';
  const manufacterParam = manufacter.value ? `&manufactures=${manufacter.value}` : '';
  try {
    const response = await fetch(
      `${runtimeConfig.public.apiBase}products/?lang=${locale.value}${categoryParam}${manufacterParam}`
    );
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  } finally {
    pending.value = false;
  }
};

const onCategoryChange = (event: Event) => {
  const selectedCategory = (event.target as HTMLSelectElement).value;
  if (selectedCategory) {
    router.push(`/catalog/${selectedCategory}`);
  }
};

const onManufacterChange = async (event: Event) => {
  const selectedManufacter = (event.target as HTMLSelectElement).value;
  manufacter.value = selectedManufacter;
  await fetchProducts();
};

const productDetail = (slug: string) => {
  router.push(`/product/${slug}`);
};

watch(
  () => route.params.slug,
  async (newSlug) => {
    if (newSlug) {
      currentCategory.value = newSlug;
      manufacterTitle.value = '';
      await fetchCurrentCategory();
      await fetchManufacturers();
      await fetchProducts();
    }
  }
);

watch(
  () => locale.value,
  async (newLang) => {
    await fetchCurrentCategory();
    await fetchManufacturers();
    await fetchProducts();
  }
);

watch(
  () => lang.value,
  (newLang) => {
    if (typeof newLang === 'string') {
      locale.value = newLang;
    }
  }
);

onMounted(async () => {
  await fetchManufacturers();
  await fetchCurrentCategory();
  await fetchProducts();
});
</script>

<style scoped>
#product {
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
}

.catalog-section {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.57) 25%, rgba(107, 107, 107, 0.67) 75%),
    url('/images/catalog_bg.jpg');
  height: 400px;
  background-size: cover;
  background-position: center;
}

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  /* Более темный фон */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loader {
  border: 8px solid #f3f3f3;
  /* Увеличенный размер обводки */
  border-radius: 50%;
  border-top: 8px solid #dbc234;
  /* Цвет лоадера */
  width: 60px;
  /* Увеличенный размер */
  height: 60px;
  /* Увеличенный размер */
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
