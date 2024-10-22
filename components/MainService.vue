<template>
  <section class="module-small bg-sun">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
          <div class="callout-text font-alt">
            <h3 class="callout-title color-black">{{ $t("services") }}</h3>
            <p class="color-black">{{ $t("services_intro") }}</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2">
          <div class="callout-btn-box">
            <nuxt-link class="btn btn-w btn-round" to="/services">{{ $t("learn_more") }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.color-black {
  color: black;
  margin-bottom: 20px;
}
</style>
