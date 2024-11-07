<template>
  <div>

    <section class="home-section home-parallax home-fade bg-dark-30 service-section">
      <div class="titan-caption">
        <div class="caption-content">
          <div class="font-alt mb-30 titan-title-size-1">{{ $t('ses_rental_text') }}</div>
          <div class="font-alt mb-40 titan-title-size-4">{{ $t('ses_rental_title') }}</div>
        </div>
      </div>
    </section>
    <div class="main">
      <section class="module" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h3 class="module-title font-alt">{{ $t('ses_rental_priority') }}</h3>
              <div class="post-entry mb-40" v-for="i in [1, 2, 3, 4]" :key="i">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title font-alt">{{ $t(`ses_rental_priority_${i}`) }}</h4>
                  </div>
                  <div class="panel-body">{{ $t(`ses_rental_priority_${i}_text`) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2 col-sm-offset-5">
              <div class="large-text align-center"><a class="section-scroll" href="#contact"><i
                    class="fa fa-angle-down"></i></a></div>
            </div>
          </div>
        </div>
      </section>
      <hr class="divider-w">

      <section class="module" id="services">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">{{ $t('ses_rental_how_it_works') }}</h2>
            </div>
          </div>
          <div class="row multi-columns-row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="features-item">
                <div class="features-icon"><span class="icon-lightbulb"></span></div>
                <h3 class="features-title font-alt">{{ $t('ses_rental_how_it_works_1') }}</h3>
                <p>{{ $t('ses_rental_how_it_works_1_text') }}</p>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="features-item">
                <div class="features-icon"><span class="icon-tools"></span></div>
                <h3 class="features-title font-alt">{{ $t('ses_rental_how_it_works_2') }}</h3>
                <p>{{ $t('ses_rental_how_it_works_2_text') }}</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="features-item">
                <div class="features-icon"><span class="icon-lifesaver"></span></div>
                <h3 class="features-title font-alt">{{ $t('ses_rental_how_it_works_3') }}</h3>
                <p>{{ $t('ses_rental_how_it_works_3_text') }}</p>
              </div>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="features-item">
                <div class="features-icon"><span class="icon-tools-2"></span></div>
                <h3 class="features-title font-alt">{{ $t('ses_rental_how_it_works_4') }}</h3>
                <p>{{ $t('ses_rental_how_it_works_4_text') }}</p>
              </div>
            </div>


          </div>
        </div>
      </section>
      <hr class="divider-w">
      <contact-form />
    </div>
  </div>
</template>

<style scoped>
.service-section {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.836) 25%, rgba(34, 34, 34, 0.67) 75%),
    url('/images/agency/agency_bg.jpg');
  height: 600px;
  background-size: cover;
  background-position: center;
  color: rgba(255, 255, 255, 0.7);
}
</style>