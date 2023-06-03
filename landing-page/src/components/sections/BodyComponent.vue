<template>
    <div id="body-component-main">
        <div id="body-categ">
            <div id="categ-title">
                <h1>See our latest collections ✨</h1>
            </div>
            <div id="categ-list">
                <div class="categ-items" v-for="(collection, index) in aCollection" :key="index">
                    <img :src="collection.image">
                    <div class="categ-name">{{ collection.name }}</div>
                </div>
            </div>
        </div>
        <div id="body-signup">
            <p id="signup-text">Become one of us & get 10% off your first purchase + rewards just for shopping!</p>
            <div id="signup-links">
                <div id="signup-signup" class="signup-links">Become a member 🧑‍🤝‍🧑</div>
                <div id="signup-subscribe" class="signup-links">Subscribe to our news letter ✉️</div>
            </div>
        </div>
        <div id="body-spotlight">
            <div id="spotlight-text">
                Shop our critically acclaimed chairs. 🗣️
                <br>
                <button class="button" id="spotlight-shop">
                    Shop now
                </button>
            </div>
        </div>
        <div id="body-spotted">
            <div id="spotted-text" class="center-contet">
                Spotted! 📷
            </div>
            <div id="spotted-subtitle" class="center-contet">
                Upload photos of our products and use the hashtag <span> #Chairs </span> to get featured in our website 😉
            </div>
            <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
                <Slide v-for="(product, index) in aSpotted" :key="index">
                    <div class="carousel__item">
                        <img :src="product"/>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>

            </Carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'
export default {

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            aCollection: [
                {
                    name: 'Summer 2023',
                    image: '../../src/images/collections/col-1.png'
                },

                {
                    name: 'Fall 2022',
                    image: '../../src/images/collections/col-2.png'
                },

                {
                    name: 'Spring 2022',
                    image: '../../src/images/collections/col-3.png'
                },

                {
                    name: 'Winter 2022',
                    image: '../../src/images/collections/col-4.png'
                },

                {
                    name: 'Holiday 2022',
                    image: '../../src/images/collections/col-5.png'
                }
            ],
            aSpotted: [
                '../../src/images/products/prod-1.png',
                '../../src/images/products/prod-2.png',
                '../../src/images/products/prod-3.png',
                '../../src/images/products/prod-4.png',
                '../../src/images/products/prod-5.png',
                '../../src/images/products/prod-6.png',
                '../../src/images/products/prod-7.png',
                '../../src/images/products/prod-8.png',
                '../../src/images/products/prod-9.png',
                '../../src/images/products/prod-10.png',
                '../../src/images/products/prod-11.png',
                '../../src/images/products/prod-12.png',
                '../../src/images/products/prod-13.png',
                '../../src/images/products/prod-14.png',
                '../../src/images/products/prod-15.png',
                '../../src/images/products/prod-16.png',
                '../../src/images/products/prod-17.png',
                '../../src/images/products/prod-18.png'
            ]
        };
    },
}
</script>

<style>
#categ-title {
    padding: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
}
#categ-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}

.categ-items {
  border-radius: 10px;
  border: 1px solid #004e56 !important;
  padding: 20px;
  cursor: pointer;
  width: 350px;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px rgba(0, 78, 86, 0);
  transition: border .5s ease-in-out, color .5s ease-in-out, box-shadow .5s ease-in-out;
}

.categ-items:hover {  
  border: 3px solid #004e56 !important;
  color: #004e56;
}

.categ-items:last-child {
  margin-right: 0;
}

.categ-items > img {
    border-radius: 10px;
    width: 300px;
    height: 300px;
}

.categ-name {
    margin-top: 40px;
    font-size: 32px;
    text-align: center;
    font-family: 'Yeseva One', cursive;
}


#body-signup{
    width: 100%;
    height: 150px;
    background-color: #fffdd0;
    margin-top: 20px;
    padding: 40px;
}

#signup-text {
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    color: #006570;
}

#signup-links {
    text-align: center;
    display: flex;
    justify-content: center;
}

.signup-links {
    color: #004e56;
    font-size: 18px;
    padding: 0 20px;
    cursor: pointer;
    transition: font-weigh .5s, font-size .5s, text-decoration .5s;
}

.signup-links:hover {
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
}

#body-spotlight {
    width: 100vw;
    height: 1000px;
    margin-top: 20px;
    background: #f6f6f4 center/cover url('../../images/spotlight.png') no-repeat;
    position: relative;
}

#spotlight-text {
    font-size: 50px;
    color: #f6f6f4;
    font-weight: bold;
    text-align: center;
    position: absolute;
    bottom: 24px;
    left: 0;
    right: 0;
}
#spotlight-shop > button{
    position: absolute;
    bottom: 66px;
    left: 0;
    right: 0;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__item {
    background-color: #f6f6f4 !important;
}

#spotted-text {
    font-weight: bold;
    font-size: 36px;
    margin-top: 50px;
    color: #004e56;
}

#spotted-subtitle {
    font-size: 20px;
    margin-top: 20px;
}
#spotted-subtitle > span {
    padding: 0 10px;
    color:#004e56;
    font-weight: bold;
}

@media screen and (max-width: 1000px) {
  #signup-text {
    font-size: 20px;
  }
}

@media screen and (max-width: 1200px) {
    #body-signup{
        height: 185px;
    }
  
}

@media screen and (max-width: 600px) {
    #body-signup{
        height: 190px;
    }
  
}

#spotlight-shop {
    font-weight: bold;
}


</style>