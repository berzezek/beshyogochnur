<template>
  <section class="home-section home-parallax home-fade home-full-height bg-dark bg-dark-30"
    data-background="/images/404.jpg">
    <div class="titan-caption">
      <div class="caption-content">
        <div class="font-alt mb-30 titan-title-size-4">{{ $t('error_404') }}</div>
        <div class="font-alt">{{ $t('error_404_message') }}
        </div>
        <div class="font-alt mt-30"><a class="btn btn-border-w btn-round" href="/">{{ $t('back') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>