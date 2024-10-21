<template>
  <section class="module-small bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
          <div class="callout-text font-alt">
            <h3 class="callout-title">{{ $t("investors") }}</h3>
            <p>{{ $t("investors_intro") }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2">
          <div class="callout-btn-box">
            <nuxt-link class="btn btn-w btn-round" to="/investors">{{ $t("learn_more") }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
