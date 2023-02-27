<script>
    export default {
    name: 'CampusList',
    props: {
        title: {
        type: String,
        required: true
        },
        campuses: {
        type: Array,
        required: true
        }
    }
}
</script>

<template>
    <div class="text-center mt-20">
      <h3 class="font-bold text-custom-cyan">{{ title }}</h3>
      <div class="flex justify-center mt-7">
        <div v-for="campus in campuses" :key="campus.name">
          <img :src="campus.image" :alt="campus.name" :class="campus.class">
          <h3 :class="campus.textClass">{{ campus.students }} ÉTUDIANTS</h3>
        </div>
      </div>
    </div>
  </template>
  

  