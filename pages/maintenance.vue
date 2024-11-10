<template>
  <div>

    <section class="home-section home-parallax home-fade bg-dark service-section">
      <div class="titan-caption">
        <div class="caption-content">
          <div class="font-alt mb-30 titan-title-size-1">{{ $t('ses_maintenance_text') }}</div>
          <div class="font-alt mb-40 titan-title-size-4">{{ $t('ses_maintenance_title') }}</div>
        </div>
      </div>
    </section>
    <div class="main">
      <section class="module" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h3 class="module-title font-alt">{{ $t('ses_maintenance_priority') }}</h3>
              <div class="post-entry mb-40" v-for="i in [1, 2, 3, 4]" :key="i">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title font-alt">{{ $t(`ses_maintenance_priority_${i}`) }}</h4>
                  </div>
                  <div class="panel-body">{{ $t(`ses_maintenance_priority_${i}_text`) }}</div>
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
      <contact-form />
    </div>
  </div>
</template>
