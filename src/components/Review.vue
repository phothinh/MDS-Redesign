<script>
  export default {
    name: "Review",
    props: {
      name: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
    },
  };
</script>

<template>
    <div class="w-full h-64 rounded-xl bg-white overflow-hidden text-left m-4 flex flex-col justify-center px-8">
      <div class="flex">
        <img :src="avatar" alt="avatar" class="h-14 w-14 object-cover mr-4" />
        <div class="flex flex-col justify-center">
          <h4 class="text-black font-bold text-base -my-1">{{ name }}</h4>
          <p class="text-sm text-custom-grey">{{ date }}</p>
        </div>
      </div>
      <p class="text-sm my-8">{{ content }}</p>
      <h4 class="text-black font-bold text-sm -my-1">{{ date }}</h4>
    </div>
</template>
  