<script setup>
import NavBar from './components/NavBar.vue';
import CustomBall from './components/CustomBall.vue';
import CampusList from './components/CampusList.vue';
import CustomButton from './components/CustomButton.vue';
import DomainCard from './components/DomainCard.vue';
import BlogCard from "./components/BlogCard.vue";
import Review from "./components/Review.vue";

</script>

<script>
export default {
  name: 'ImageGrid',
  components: {
    NavBar,
    CustomBall,
    CampusList,
    CustomButton,
    DomainCard,
    BlogCard,
    Review,
  },
  data() {
    return {
      balls: [
        { top: '25vw', left: '20vw', w: '4', h: '4', color: '#29B7C5' },
        { top: '26vw', right: '20vw', w: '4', h: '4', color: '#29B7C5' },
        { top: '32vw', right: '40vw', w: '3', h: '3', color: '#443A3A' },
        { top: '35vw', left: '12vw', w: '3', h: '3', color: '#443A3A' },
        { top: '50vw', left: '23vw', w: '4', h: '4', color: '#0F8793' },
        { top: '42vw', right: '17vw', w: '6', h: '6', color: '#0F8793' },
        { top: '53vw', right: '34vw', w: '3', h: '3', color: '#29B7C5' }
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
      domains: [
        {
          title: 'Webmarketing',
          description: 'Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool.',
        },
        {
          title: 'UI & UX Design',
          description: 'Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool.',
        },
        {
          title: 'Programmation',
          description: 'Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool.',
        },
        {
          title: 'Communication',
          description: 'Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool.',
        },
      ],
      blogCards: [
        {
          imageSrc: "/illustrations/blog/photo1.svg",
          date: "Posté le 4 mars",
          title: "Comment devenir développeur web ?",
        },
        {
          imageSrc: "/illustrations/blog/photo2.svg",
          date: "Posté le 5 avril",
          title: "UX vs UI Design, quelle est la différence ?",
        },
        {
          imageSrc: "/illustrations/blog/photo3.svg",
          date: "Posté le 9 avril",
          title: "Top 10 des métiers du digital en 2023",
        },
        {
          imageSrc: "/illustrations/blog/photo4.svg",
          date: "Posté le 4 mars",
          title: "Comment devenir développeur web ?",
        },
      ],
      reviews: [
        {
          name: "Mélanie",
          date: "Mars 2022",
          content:
            "J’ai passé clairement mes 2 meilleurs années scolaires à MyDigitalSchool. L’ambiance, les intervenants et les locaux m’ont permis de m’épanouir, gros big up pour la connexion internet !",
          avatar: "/illustrations/review/photo1.svg",
        },
        {
          name: "Léo",
          date: "Juin 2017",
          content:
            "J’ai passé clairement mes 2 meilleurs années scolaires à MyDigitalSchool. L’ambiance, les intervenants et les locaux m’ont permis de m’épanouir, gros big up pour la connexion internet !",
          avatar: "/illustrations/review/photo2.svg",
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
  <body class="bg-custom-bg">
    <NavBar/>

    <div class="text-center mt-6">
      <h1 class="text-5xl font-extrabold text-custom-black">La meilleure école des<br> métiers du digital</h1>
      <CustomButton class="mt-10">Appelez-nous</CustomButton>
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
      
      <div class="flex justify-center items-center h-screen -my-12">
        <DomainCard v-for="(domain, index) in domains"
          :key="index"
          :title = "domain.title"
          :description="domain.description"
        />
      </div>

      <CustomButton>Télécharger le programme</CustomButton>
    </div>

    <div class="w-full h-screen bg-custom-blue my-20 text-center pt-1">
      <h3 class="text-3xl font-extrabold text-white mt-16 ">MyDigitalSchool, c’est aussi<br>un blog avec des conseils</h3>
    
      <div class="flex justify-center items-center h-screen -my-20">
        <BlogCard
          v-for="(card, index) in blogCards"
          :key="index"
          :image-src="card.imageSrc"
          :date="card.date"
          :title="card.title"
        />
      </div>
    </div>

    <div class="mx-20">
      <h3 class="font-bold text-custom-blue font-extrabold text-3xl ml-4 w-80">Qu’est-ce que nos alumnis en pensent ?</h3>
      <div class="flex justify-center items-center h-screen -my-20">

        <Review
          v-for="(review, index) in reviews"
          :key="index"
          :name="review.name"
          :date="review.date"
          :content="review.content"
          :avatar="review.avatar"
        />

      </div>
    </div>

    <div class="flex justify-center items-center p-24 relative">
      <img src="/illustrations/footer/Rectangle.svg" class="h-full">
      <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <h1 class="text-white text-3xl font-bold text-center">Entre ton e-mail pour recevoir le<br>programme de l’école</h1>
        <p class="text-white mt-6 text-sm">Nous t’enverrons le programme complet, et quelqu’un<br>prendra contact avec toi pour savoir tes besoins</p>
        <div class="relative rounded-full overflow-hidden w-96 mt-16">
          <input type="email" placeholder="Entre ton adresse e-mail ici" class="block w-full px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none" />
          <button class="absolute top-0 right-0 w-28 px-4 py-2 text-white bg-custom-cyan rounded-full">Envoyer</button>
        </div>
      </div>
    </div>
    

  </body>
  
</template>

<style scoped>
</style>
