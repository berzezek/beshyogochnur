<template>
  <div>
    <section class="service-section">
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
    <section class="module-small" id="catalog">
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
          <div class="col-sm-6 col-md-3 col-lg-3" v-for="product in products?.results" :key="product.id">
            <div class="shop-item" @click="productDetail(product.slug)">
              <div class="shop-item-image">
                <img :src="product.image" :alt="product.name" class="product-image" />
                <div class="shop-item-detail">
                  <a class="btn btn-round btn-b">
                    <span class="">{{ $t('more') }}</span>
                  </a>
                </div>
              </div>
              <div class="shop-item-content">
                <h4 class="shop-item-title font-alt">
                  <a href="#">{{ product.name }}</a>
                </h4>
                <p class="product-description">{{ product.description }}</p>
                <p class="product-price">{{ prettyPrice(product.price) }}</p>
              </div>
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
import { prettyPrice } from '~/utils';

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
  router.push(`/product/${slug}/#product`);
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

.product-image {
  width: 100%;
  height: 200px;
}

/* Карточка товара занимает всю высоту */
.shop-item {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Карточка товара */
.shop-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f8f9fa; /* Светло-серый фон */
  border-radius: 8px; /* Скругленные углы */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Мягкая тень */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Анимация */
  padding: 15px;
}

/* При наведении карточка увеличивается и тень становится глубже */
.shop-item:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}

/* Контент карточки */
.shop-item-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

/* Описание товара занимает всю доступную высоту */
.product-description {
  flex-grow: 1;
  color: #5c5c5c; /* Серый цвет текста */
}

/* Цена всегда внизу */
.product-price {
  margin-top: auto;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}

/* Картинка товара */
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

</style>
