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
          <form id="contactForm" role="form" @submit.prevent="sendMess">
            <div class="form-group">
              <label class="sr-only" for="name">{{ $t('name_placeholder') }}</label>
              <input class="form-control" type="text" id="name" name="name" :placeholder="$t('name_placeholder')"
                v-model="formData.userName" required="true"
                :data-validation-required-message="$t('validation_required_name')" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="email">{{ $t('email_placeholder') }}</label>
              <input class="form-control" type="email" id="email" name="email" :placeholder="$t('email_placeholder')"
                v-model="formData.email" :data-validation-required-message="$t('validation_required_email')" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="phone">{{ $t('phone_placeholder') }}</label>
              <input class="form-control" type="text" id="phone" name="phone" :placeholder="$t('phone_placeholder')"
                v-model="formData.phone" :required="true"
                :data-validation-required-message="$t('validation_required_phone')" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="7" id="message" name="message" v-model="formData.message"
                :placeholder="$t('message_placeholder')" :required="true"
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

<script lang="ts" setup>

const emit = defineEmits(['sendMess'])


const formData = ref({
  userName: '',
  email: '',
  phone: '',
  message: ''
})

const sendMess = async () => {
  emit('sendMess', formData.value)
  formData.value.userName = '';
  formData.value.email = '';
  formData.value.phone = '';
  formData.value.message = '';
}
</script>