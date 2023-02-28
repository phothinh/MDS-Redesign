<script>
  export default {
    name: 'CustomButton',
    props: {
      buttonClass: {
        type: String,
        default: 'bg-custom-cyan text-white font-bold py-3 px-8 rounded-full text-sm',
      },
    },
    methods: {
      onClick() {
        console.log('Le bouton a été cliqué');
      },
    },
  };
</script>

<template>
    <button :class="buttonClass" @click="onClick">
        <slot>Le texte</slot>
    </button>
</template>


  