<template>
  <section class="home-section home-full-height bg-dark bg-gradient" id="main">
    <div class="titan-caption">
      <div class="caption-content">
        <div class="font-alt mb-30 titan-title-size-1">{{ $t('welcome_title_1') }}</div>
        <div class="font-alt mb-40 titan-title-size-4">{{ $t('company_name') }}</div>
        <div class="font-alt titan-title-size-1">
          {{ $t('welcome_title') }}
        </div>
        <div class="font-alt mb-30 titan-title-size-1 font-bold">
          {{ $t('welcome_title_2') }}
        </div>
        <nuxt-link class="section-scroll btn btn-border-w btn-round" to="/#contact">{{ $t('learn_more') }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
#main {
  background-image: url('/images/solar/main_bg.jpg');
  height: 800px;
}

.font-bold {
  font-weight: bold;
}

.color-orange {
  color: #ffbb00cc;
}
</style>
