<template>
  <section class="home-section bg-dark bg-gradient" id="home">
    <div class="titan-caption">
      <div class="caption-content">
        <div class="font-alt mb-30 titan-title-size-1">
          {{ $t('welcome_title') }}
        </div>
        <div class="font-alt mb-40 titan-title-size-4">
          {{ $t('company_name') }}
        </div>
        <nuxt-link
          class="section-scroll btn btn-border-w btn-round"
          to="/catalog"
          >{{ $t('learn_more') }}</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<style>
  #home {
    background-image: url('/images/solar/bg_1.jpg');
    height: 500px;
  }
</style>
