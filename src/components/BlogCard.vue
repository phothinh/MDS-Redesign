<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  };
</script>

<template>
    <div class="w-60 h-72 rounded-xl bg-white overflow-hidden text-left m-4 flex flex-col justify-centerpb-4">
        <img :src="imageSrc" class="h-36 mx-8 my-6 object-cover rounded-xl" />
        <p class="text-sm ml-8">{{ date }}</p>
        <h3 class="font-bold ml-8 my-2 w-48">{{ title }}</h3>
    </div>
</template>

<style>
 
</style>
  