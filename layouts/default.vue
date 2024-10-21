<template>
  <main id="main" data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
    <main-navbar />

    <div class="main">

      <slot name="default" />


      <main-contact />

      <main-footer />
    </div>
    <div class="scroll-up">
      <nuxt-link to="/#main"><i class="fa fa-angle-double-up"></i></nuxt-link>
    </div>
  </main>
</template>
