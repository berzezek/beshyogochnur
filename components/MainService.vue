<template>
  <!-- <section class="module bg-primary" id="services">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <h2 class="module-title font-alt">{{ $t('services_title') }}</h2>
          <div class="module-subtitle font-serif">
            {{ $t('services_intro') }}
          </div>
        </div>
      </div>
      <div class="row multi-columns-row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="features-item">
            <div class="features-icon">
              <span class="icon-lightbulb"></span>
            </div>
            <h3 class="features-title font-alt">{{ $t('service_1_title') }}</h3>
            <p>{{ $t('service_1_desc') }}</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="features-item">
            <div class="features-icon"><span class="icon-tools"></span></div>
            <h3 class="features-title font-alt">{{ $t('service_2_title') }}</h3>
            <p>{{ $t('service_2_desc') }}</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="features-item">
            <div class="features-icon"><span class="icon-gears"></span></div>
            <h3 class="features-title font-alt">{{ $t('service_3_title') }}</h3>
            <p>{{ $t('service_3_desc') }}</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="features-item">
            <div class="features-icon">
              <span class="icon-lifesaver"></span>
            </div>
            <h3 class="features-title font-alt">{{ $t('service_4_title') }}</h3>
            <p>{{ $t('service_4_desc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section class="module-small bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-8 col-lg-6 col-lg-offset-2">
          <div class="callout-text font-alt">
            <h3 class="callout-title">Want to see more works?</h3>
            <p>We are always open to interesting projects.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-2">
          <div class="callout-btn-box">
            <nuxt-link class="btn btn-w btn-round" to="/services">{{ $t("services") }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
