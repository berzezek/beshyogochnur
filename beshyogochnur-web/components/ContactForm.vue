<template>
  <section class="module" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <h2 class="module-title font-alt" data-lang="contact_us">{{ $t('contact_us') }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <form id="contactForm" role="form">
            <div class="form-group">
              <label class="sr-only" for="name">{{ $t('name_placeholder') }}</label>
              <input class="form-control" type="text" id="name" name="name" 
                :placeholder="$t('name_placeholder')" 
                required="true" 
                :data-validation-required-message="$t('validation_required_name')" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="email">Email</label>
              <input class="form-control" type="email" id="email" name="email" 
                :placeholder="$t('email_placeholder')" 
                :data-validation-required-message="$t('validation_required_email')" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="phone">Phone</label>
              <input class="form-control" type="text" id="phone" name="phone" 
                :placeholder="$t('phone_placeholder')" 
                :required="true" 
                :data-validation-required-message="$t('validation_required_phone')" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="7" id="message" name="message" 
                :placeholder="$t('message_placeholder')" 
                :required="true" 
                :data-validation-required-message="$t('validation_required_message')"></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <div class="text-center">
              <button class="btn btn-block btn-round btn-d" id="cfsubmit" type="submit">
                {{ $t('send') }}
              </button>
            </div>
          </form>
          <div class="ajax-response font-alt" id="contactFormResponse"></div>
        </div>
      </div>
    </div>
  </section>
</template>
