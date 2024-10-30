<template>
  <div>
    <main-loader v-if="pending" />
    <div v-else>
      <section class="module" id="catalog">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">{{ $t('categories') }}</h2>
            </div>
          </div>
          <div class="row">
            <div
              class="mb-sm-20 wow fadeInUp col-sm-3"
              v-for="catalog in catalogs?.results"
              :key="catalog.name"
            >
              <div
                class="team-item"
                @click="catalogList(catalog.slug)"
                id="catalog"
              >
                <div class="team-image">
                  <img :src="catalog.image" :alt="catalog.name" />
                </div>
                <div class="team-descr font-alt">
                  <div class="team-name">{{ catalog.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import type { ICategory } from '~/types/apiResponse';
  const runtimeConfig = useRuntimeConfig();
  const router = useRouter();
  const lang = useCookie('lang');

  const catalogs = ref<ICategory>();
  const pending = ref(false); // Переменная для отслеживания состояния загрузки

  const fetchCatalogs = async () => {
    pending.value = true; // Начало загрузки
    try {
      const response = await fetch(
        `${runtimeConfig.public.apiBase}catalogs/?${
          lang.value ? `lang=${lang.value}` : 'lang=uz'
        }`
      );
      catalogs.value = await response.json();
    } catch (error) {
      console.error('Failed to fetch catalogs:', error);
    } finally {
      pending.value = false; // Завершение загрузки
    }
  };

  // Следим за изменением значения языка и обновляем данные
  watch(lang, async () => {
    await fetchCatalogs();
  });

  // Инициализируем загрузку данных при первом рендере
  await fetchCatalogs();

  const catalogList = async (slug: string) => {
    router.push(`/catalog/${slug}`);
  };
</script>

<style scoped>
  #catalog {
    cursor: pointer;
  }
</style>
