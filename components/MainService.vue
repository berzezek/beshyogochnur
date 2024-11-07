<template>
  <section class="module-small" id="services">
    <div class="container">
      <div class="row">
        <h2 class="module-title font-alt">{{ $t('service_title') }}</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-md-7 mt-40">
          <div class="post-header font-alt titat-tile-size-1">
            <h1 class="post-title">{{ $t('services_title_1') }}</h1>
          </div>
          <div v-for="service in services" :key="service.name" class="post-entry mb-40">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title font-alt">{{ service.name }}</h4>
              </div>
              <div class="panel-body">{{ service.text }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-md-offset-1 mt-40">
          <img src="/images/solar/service_bg.jpg" alt="Services" class="img-responsive" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  services: { name: string; image: string; text: string }[]
}>()
</script>

<style scoped>
/* Отступы и зеркальное расположение */
.mx-5 {
  margin-left: 50px;
}

/* Вертикальный отступ для экранов шире 768px */
@media (min-width: 768px) {
  .mt-40 {
    margin-top: 40px;
  }
}

/* Настройка стилей панели и отступов для компонента */
.post-entry {
  margin-bottom: 20px;
}

.panel {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.panel-heading {
  background-color: #f7f7f7;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.panel-title {
  font-size: 1.25em;
  margin: 0;
}

.panel-body {
  padding: 15px;
  font-size: 1em;
  color: #555;
}
</style>
