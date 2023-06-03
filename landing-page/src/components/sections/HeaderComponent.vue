<template>
    <div id="header-component-main">
        <div id="nav-bar">
            <div id="header-title">
            <h1>Chairs!🥂</h1>
            </div>
            <div id="header-actions">
                <img src="https://img.icons8.com/ios-filled/50/ffe01b/user-male-circle.png" alt="user-male-circle--v1"/>
                <img src="https://img.icons8.com/glyph-neue/35/ffe01b/shopping-cart.png" alt="shopping-cart" @click="showCart"/>
                <img src="https://img.icons8.com/sf-regular-filled/35/ffe01b/help.png" alt="help"/>
                <img src="https://img.icons8.com/sf-regular/48/ffe01b/search.png" alt="search" @click="bDisplaySearch = !bDisplaySearch"/>

            </div>
            
        </div>
        <div id="header-search" :class="{ hide: !bDisplaySearch }">
            <input type="search" id="search-input"/>
            <button class="button">Search</button>
        </div>
        
        <div id="header-content">
            <carousel :items-to-show="1">
                <slide v-for="slide in aSlides" :key="slide">
                    <div class="sale-img" >
                        <img :src="slide" width="800px"/>
                    </div>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
        <CartComponent/>
        
    </div>
  
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import CartComponent from './header-sections/CartComponent.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        CartComponent
    },
    
    data() {
        return {
            bDisplaySearch: false,
            aSlides: [
                '../../src/images/sale/sale-1.png',
                '../../src/images/sale/sale-2.png',
                '../../src/images/sale/sale-3.png',
            ]
        };
    },

    computed: {
        ...mapState('store', ['bShowCart'])
    },

    methods: {
        ...mapMutations('store', ['setShowCart']),
        showCart() {
            this.setShowCart(true);
        }
    }

}
</script>

<style>
#header-title > h1 {
    font-family: 'Yeseva One', cursive;
}
.carousel__item {
  min-height: 500px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination {
    position: relative;
    z-index: 9999;
    margin: -54px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
.sale-img > img {
    width: 100vw;
    height: 490px;
}

#header-component-main {
    background-color: #004e56;
}

#nav-bar {
    position: sticky;
    top: 0;
    width: auto;
    height: 100px;
    display: flex;
    color: white;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    z-index: 9999;
    background-color: #004e56;
}

#header-title {
    float: left;
}

#header-actions {
    display: flex;
    justify-content: flex-end;
}


#header-actions > img {
    width: 30px;
    cursor: pointer;
    margin-left: 10px;
}

#header-content {
    height: 500px;
}

#header-search {
    padding: 0 20px;
    display: flex;
    gap: 20px;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    transform: translateY(0);
    opacity: 1;
}

#header-search.hide {
    transform: translateY(-100%);
    opacity: 0;
    display: none;
}

#search-input {
    width: 100%;
    border-radius: 4px !important;
    min-height: 50px;
    font-size: 17px;
    line-height: 20px;
    padding: 0 15px !important;
    display: inline-block;
    margin-bottom: 24px;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid rgba(36,28,21,0.3);
    -ms-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    font-weight: 100;
}

input[type="search"] {
    outline-color: transparent;
    transition: outline-color 0.3s ease-in-out;
}

input[type="search"]:focus {
    outline-color: #004e56;
}
</style>
