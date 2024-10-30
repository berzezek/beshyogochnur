<template>
  <div>
    <main-loader v-if="pending" />
    <div v-else>
      <section class="catalog-section">
        <div class="titan-caption">
          <div class="caption-content">
            <div class="font-alt mb-40 titan-title-size-4 color-orange">
              {{ pageTitle }}
            </div>
            <nuxt-link class="section-scroll btn btn-border-w btn-round" to="#catalog">
              {{ $t('learn_more') }}</nuxt-link>
          </div>
        </div>
      </section>
      <section class="mb-40">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt mt-30">
                {{ $t('products') }}{{ manufacterTitle }}
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-md-3 sidebar container">
              <side-widgets :widgets="manufacterProps" :widget-name="t('manufacturers')" @widgetClick="widgetClick" />
            </div>
            <div class="col-sm-8 col-sm-offset-1">
              <section id="catalog">
                <div class="container">

                  <div class="row">
                    <div class="wow fadeInUp col-sm-6 col-md-3" v-for="product in products?.results"
                      :key="product.name">
                      <div class="team-item" @click="productDetail(product.slug)" id="product">
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, onMounted } from 'vue';
import type { IProduct, Category, IManufacter } from '~/types/apiResponse';
const { t } = useI18n();
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const lang = useCookie('lang');

const products = ref<IProduct>();
const pageTitle = ref(route.params.slug);
const category = ref<Category>();
const manufacturers = ref<IManufacter>();
const manufacterTitle = ref('');
const pending = ref(false);

const createProps = (data?: IManufacter) => {
  if (!data || !data.results) {
    return [];
  }
  return data.results.map((item) => ({
    name: item.name,
    image: undefined,
  }));
};

const manufacterProps = computed(() => {
  return createProps(manufacturers.value);
});

const fetchManufacturers = async () => {
  pending.value = true;
  const langParam = lang.value ? `lang=${lang.value}` : 'lang=uz';
  try {
    const response = await fetch(
      `${runtimeConfig.public.apiBase}manufacturers/?${langParam}&category=${route.params.slug}`
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
  const langParam = lang.value ? `lang=${lang.value}` : 'lang=uz';
  try {
    const response = await fetch(
      `${runtimeConfig.public.apiBase}catalogs/?${langParam}`
    );
    const data = await response.json();
    category.value = data.results.find(
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
  const langParam = lang.value ? `lang=${lang.value}` : 'lang=uz';
  try {
    const response = await fetch(
      `${runtimeConfig.public.apiBase}catalogs/${route.params.slug}/?${langParam}`
    );
    const data = await response.json();
    products.value = { ...data }; // Принудительно создаем новый объект
  } catch (error) {
    console.error('Failed to fetch products:', error);
  } finally {
    pending.value = false;
  }
};

// Используем watchEffect, чтобы отслеживать изменения lang и route.params.slug
watchEffect(async () => {
  await fetchManufacturers();
  await fetchCurrentCategory();
  await fetchProducts();
});

const productDetail = async (slug: string) => {
  router.push(`/product/${slug}`);
};

const productQueryByManufacter = async (manufacter: string) => {
  pending.value = true;
  try {
    const langParam = lang.value ? `lang=${lang.value}` : 'lang=uz';
    const categoryParam = route.params.slug ? `&category=${route.params.slug}` : '';

    const response = await fetch(
      `${runtimeConfig.public.apiBase}products?${langParam}&manufactures=${manufacter}${categoryParam}`
    );

    const data = await response.json();
    products.value = { ...data }; // Принудительно создаем новый объект
  } catch (error) {
    console.error('Failed to fetch products by manufacturer:', error);
  } finally {
    pending.value = false;
  }
};

const widgetClick = (name: string) => {
  productQueryByManufacter(name);
  manufacterTitle.value = ` - ${name}`;
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

.catalog-section {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.57) 25%, rgba(85, 85, 85, 0.67) 75%),
    url('/images/catalog_bg.jpg');
  height: 400px;
  background-size: cover;
  background-position: center;
}
</style>
