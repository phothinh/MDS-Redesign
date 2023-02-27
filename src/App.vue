<script setup>
import NavBar from './components/NavBar.vue';
import CustomBall from './components/CustomBall.vue';
import CampusList from './components/CampusList.vue';
import CustomButton from './components/CustomButton.vue';

</script>

<script>
export default {
  name: 'ImageGrid',
  components: {
    NavBar,
    CustomBall,
    CampusList,
    CustomButton,
  },
  data() {
    return {
      balls: [
        { top: '25vw', left: '20vw', w: '4', h: '4', color: 'custom-cyan' },
        { top: '26vw', right: '20vw', w: '4', h: '4', color: 'custom-cyan' },
        { top: '32vw', right: '40vw', w: '3', h: '3', color: 'custom-dark' },
        { top: '35vw', left: '12vw', w: '3', h: '3', color: 'custom-dark' },
        { top: '50vw', left: '23vw', w: '4', h: '4', color: 'custom-darkcyan' },
        { top: '42vw', right: '17vw', w: '6', h: '6', color: 'custom-darkcyan' },
        { top: '53vw', right: '34vw', w: '3', h: '3', color: 'custom-cyan' }
      ],
      images: [
        {
          url: '/illustrations/photos/photo1.svg',
          alt: 'image1',
          class: 'mx-3',
        },
        {
          url: '/illustrations/photos/photo2.svg',
          alt: 'image2',
          class: 'mx-3 my-12',
        },
        {
          url: '/illustrations/photos/photo3.svg',
          alt: 'image3',
          class: 'mx-3 my-12',
        },
        {
          url: '/illustrations/photos/photo4.svg',
          alt: 'image4',
          class: 'mx-3',
        },
      ],
    }
  },
  methods: {
    getImageClass(index) {
      return this.images[index].class + ' h-48 rounded-full';
    },
  },
}
</script>

<template>
  
  <NavBar/>

  <div class="text-center mt-6">
    <h1 class="text-5xl font-extrabold text-custom-black">La meilleure école des<br> métiers du digital</h1>
    <CustomButton>Appelez-nous</CustomButton>
  </div>

  <div class="mt-14">
    <custom-ball v-for="(ball, index) in balls" :key="index" :top="ball.top" :left="ball.left" :right="ball.right" :w="ball.w" :h="ball.h" :color="ball.color"></custom-ball>
  </div>

  <div class="flex justify-center mt-14">
    <img v-for="(image, index) in images"
         :key="index"
         :class="[getImageClass(index)]"
         :src="image.url"
         :alt="image.alt">
  </div>

  <div>
    <CampusList
      title="DES CAMPUS PARTOUT EN FRANCE"
      :campuses="[
        { name: 'Lyon', image: '/illustrations/campus/lyon.svg', class: 'h-7 mx-7', students: '2000', textClass: 'font-bold text-custom-grey text-sm my-3' }, 
        { name: 'Paris', image: '/illustrations/campus/paris.svg', class: 'h-8 mx-7', students: '2000', textClass: 'font-bold text-custom-grey text-sm my-2' },
        { name: 'Annecy', image: '/illustrations/campus/annecy.svg', class: 'h-4 my-2 mx-7', students: '2000', textClass: 'font-bold text-custom-grey text-sm my-4' },
        { name: 'Nantes', image: '/illustrations/campus/nantes.svg', class: 'h-9 -my-1 mx-7', students: '2000', textClass: 'font-bold text-custom-grey text-sm my-3' }
        ]"
    />
  </div>

  <div class="text-center mt-40">
    <h3 class="font-bold text-custom-cyan mt-12">PLUSIEURS SPÉCIALITÉS</h3>
    <h2 class="text-3xl font-extrabold text-custom-black">Les domaines les plus<br>demandés dans le digital</h2>
  </div>
</template>

<style scoped></style>
