<template>
  <main id="main">
    <main-navbar />


    <div class="main">

      <hr class="divider-w mb-4">

      <slot />

      <hr class="divider-w">


      <main-contact />

      <hr class="divider-d">
      <main-footer />
    </div>
    <div class="scroll-up"><nuxt-link to="/#main"><i class="fa fa-angle-double-up"></i></nuxt-link></div>
  </main>
</template>