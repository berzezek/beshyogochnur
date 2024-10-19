<template>
  <div class="module-small bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="widget">
            <h5 class="widget-title font-alt">{{ $t('company_name_1') }}  </h5>
            <p>{{ $t('address') }}</p>
            <p>{{ $t('phone') }} +998 (90) 099 30 45</p>
            <p>Email: <a href="#"> info@beshyogochnur.uz</a></p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="widget">
            <h5 class="widget-title font-alt">{{ $t('map_title') }}</h5>
            <iframe
              :src="$t('map_link')"
              width="400" height="300" style="border:0;" allowfullscreen="true" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>