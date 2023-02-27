<script>
export default {
  name: 'CustomBall',
  props: {
    top: {
      type: String,
      required: true
    },
    left: {
      type: String,
      required: true
    },
    right: {
      type: String,
      required: false
    },
    w: {
      type: String,
      required: true
    },
    h: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>


<template>
    <div :style="{top: top, left: left, right: right, width: w, height: h, backgroundColor: color}" class="w-4 h-4 absolute rounded-full bg-custom-cyan  mx-2 animate-bounce"></div>
</template>

<style scoped>
.custom-ball {
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: bounce;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
