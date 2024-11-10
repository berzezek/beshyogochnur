<template>
  <div>
    <main-section />
    <main-hr />

    <main-about />
    <main-hr />

    <main-service :services="services" />
    <main-hr />


    <main-investors />
    <main-hr />

    <contact-form />
  </div>

</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const lang = useCookie('lang')

// Инициализация с текущим языком из куки или дефолтным значением
if (lang.value) {
  locale.value = lang.value
}

const createServices = () => [
  { name: t('service_1_title'), image: "/images/service_1.jpg", text: t('service_1_text'), to: "/maintenance" },
  { name: t('service_2_title'), image: "/images/service_2.jpg", text: t('service_2_text'), to: "/project" },
  { name: t('service_3_title'), image: "/images/service_3.jpg", text: t('service_3_text'), to: "/rental" },
]

// Локализованный список виджетов
const services = ref(createServices())

// Наблюдение за изменением языка и обновление виджетов
watch(locale, () => {
  services.value = createServices()
})

// Функция смены языка
const changeLanguage = (newLang: string) => {
  locale.value = newLang
  lang.value = newLang
}

</script>
