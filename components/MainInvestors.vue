<template>
  <section class="module-small" id="investors">
    <div class="container">
      <div class="row">
        <h2 class="module-title font-alt titat-tile-size-2">{{ $t('investors_title') }}</h2>
      </div>
      <div class="row align-items-center">
        <div class="col-md-4 mt-40">
          <img src="/images/solar/investor_bg.jpg" alt="Services" class="img-responsive" />
        </div>
        <div class="col-md-7 col-md-offset-1 mt-40">
          <div class="post-header font-alt titat-tile-size-1">
            <h2 class="post-title">{{ $t('investors_title') }}</h2>
          </div>
          <div class="post-entry">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title font-alt">
                  {{ $t('investors_ul_1') }}
                </h4>
              </div>
              <div class="panel-body">{{ $t('investors_ul_1_1') }}</div>
            </div>
          </div>
          <div class="post-entry">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title font-alt">
                  {{ $t('investors_ul_2') }}
                </h4>
              </div>
              <div class="panel-body">{{ $t('investors_ul_2_1') }}</div>
            </div>
          </div>
          <div class="post-entry">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title font-alt">
                  {{ $t('investors_ul_3') }}
                </h4>
              </div>
              <div class="panel-body">{{ $t('investors_ul_3_1') }}</div>
            </div>
          </div>
          <div class="post-entry">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title font-alt">
                  {{ $t('investors_ul_4') }}
                </h4>
              </div>
              <div class="panel-body">{{ $t('investors_ul_4_1') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mx-5 {
  margin-left: 50px;
}
/* mt for 768px */
@media (min-width: 768px) {
  .mt-40 {
    margin-top: 40px;
  }
}
</style>