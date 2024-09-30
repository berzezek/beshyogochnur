<template>
  <section class="module" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <h2 class="module-title font-alt" data-lang="contact_us">Связаться с нами</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
          <form id="contactForm" role="form">
            <div class="form-group">
              <label class="sr-only" for="name">Имя</label>
              <input class="form-control" type="text" id="name" name="name" data-placeholder="name_placeholder"
                placeholder="Ваше имя*" required="true" data-validation-required-message="Пожалуйста введите имя" />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="email">Email</label>
              <input class="form-control" type="email" id="email" name="email" data-placeholder="email_placeholder"
                placeholder="Ваш email" data-validation-required-message="Пожалуйтста введите ваш email адрес." />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <label class="sr-only" for="phone">Phone</label>
              <input class="form-control" type="text" id="phone" name="phone" data-placeholder="phone_placeholder"
                placeholder="+998 (__) ___-__-__" :required="true"
                data-validation-required-message="Пожалуйтста введите ваш телефон." />
              <p class="help-block text-danger"></p>
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="7" id="message" name="message" data-placeholder="message_placeholder"
                placeholder="Ваше сообщение*" :required="true"
                data-validation-required-message="Пожалуйтса введите ваше сообщение."></textarea>
              <p class="help-block text-danger"></p>
            </div>
            <div class="text-center">
              <button class="btn btn-block btn-round btn-d" id="cfsubmit" type="submit"
                data-lang="send">Отправить</button>
            </div>
          </form>
          <div class="ajax-response font-alt" id="contactFormResponse"></div>
        </div>
      </div>
    </div>
  </section>
</template>