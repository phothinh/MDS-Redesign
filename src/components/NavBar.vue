<script setup>
import CustomButton from '../components/CustomButton.vue';
</script>

<script>
export default {
  name: 'MyComponent',
  components: {
    CustomButton,
  },
};
</script>

<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between px-14 py-12">
        <div class="flex-shrink-0">
          <img class="h-8" src="/illustrations/logo/logo.svg" alt="Logo">
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <a href="#" class="text-custom-black  px-3 py-2 rounded-md text-sm font-bold">Accueil</a>
            <a href="#" class="text-custom-grey  px-3 py-2 rounded-md text-sm font-bold">Les programmes</a>
            <a href="#" class="text-custom-grey  px-3 py-2 rounded-md text-sm font-bold">Notre blog</a>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <CustomButton>M'inscrire</CustomButton>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>