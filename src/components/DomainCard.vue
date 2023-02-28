<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
    <div class="w-60 h-72 shadow-2xl rounded-xl overflow-hidden text-left m-4">
        <div class="relative">
        <img src="/illustrations/domain/Rectangle12.svg" alt="rect" class="h-14 w-14 mx-8 my-6 object-cover" />
        <img class="absolute top-0 left-0 mx-11 my-4 h-6 w-8 object-cover" src="/illustrations/domain/Vector.svg" alt="Image 2" />
        </div>
        <div class="px-8 -my-3">
        <h3 class="font-bold text-xl mb-2">{{ title }}</h3>
        <p class="text-gray-700 text-sm mb-6">{{ description }}</p>
        <h4 class="text-black font-bold text-sm -my-1">Découvrir</h4>
        </div>
    </div>
</template>
  
  
  