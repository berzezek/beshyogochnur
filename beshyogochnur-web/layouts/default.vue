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
    <div class="scroll-up"><a href="#totop"><i class="fa fa-angle-double-up"></i></a></div>
  </main>
</template>