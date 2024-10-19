<template>
  <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" @click="navigateTo('/#main')" data-lang="company_name">Beshyougochnur</span>
      </div>
      <div class="collapse navbar-collapse" id="custom-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><nuxt-link to="/#main">{{ $t('main') }}</nuxt-link></li>
          <li><nuxt-link to="/#about">{{ $t('about_us') }}</nuxt-link></li>
          <li><nuxt-link to="/#services">{{ $t('services') }}</nuxt-link></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown">{{ $t('products') }}</a>
            <ul class="dropdown-menu">
              <li v-for="catalog in catalogs?.results" :key="catalog.name">
                <nuxt-link @click="navigateTo(`/catalog/${catalog.slug}`)">{{ catalog.name }}</nuxt-link>
              </li>
            </ul>
          </li>
          <li><nuxt-link to="/#contact">{{ $t('contact') }}</nuxt-link></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown">
              <img src="/images/lang/earth.png" alt="lang" width="20" />
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a @click="setLanguage('ru')"><img src="/images/lang/russia.png" alt="lang" width="24" /> Русский</a></li>
              <li><a @click="setLanguage('uz')"><img src="/images/lang/uzbekistan.png" alt="lang" width="24" /> O'zbek</a></li>
              <li><a @click="setLanguage('en')"><img src="/images/lang/united-kingdom.png" alt="lang" width="24" /> English</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { ICatalog } from '~/types/apiResponse';
const runtimeConfig = useRuntimeConfig();
const lang = useCookie('lang');

const { setLocale } = useI18n(); // Используем функцию для установки языка интерфейса

// Делаем catalogs реактивным, чтобы обновлять данные при изменении языка
const catalogs = ref<ICatalog>();

const fetchCatalogs = async () => {
  const response = await fetch(`${runtimeConfig.public.apiBase}catalogs/?${lang.value ? `lang=${lang.value}` : 'lang=uz'}`);
  catalogs.value = await response.json();
};

// Следим за изменением значения языка и обновляем данные
watch(lang, async () => {
  await fetchCatalogs();
});

// Инициализируем загрузку данных при первом рендере
await fetchCatalogs();

const setLanguage = async (newLang: string) => {
  lang.value = newLang;
  setLocale(newLang); // Меняем язык интерфейса
  await fetchCatalogs(); // Обновляем каталоги
};
</script>
