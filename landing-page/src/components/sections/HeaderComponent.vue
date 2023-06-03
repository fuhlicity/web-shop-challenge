<template>
    <div id="header-component-main">
        <div id="nav-bar">
            <div id="header-title">
            <h1>Chairs!🥂</h1>
            </div>
            <div id="header-actions">
                <img src="../../images/account.png"/>
                <img src="../../images/cart.png" @click="showCart"/>
                <img src="../../images/help.png" />
                <img src="../../images/search.png" @click="bDisplaySearch = !bDisplaySearch"/>
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
                '../../src/images/products/sale-1.png',
                '../../src/images/products/sale-2.png',
                '../../src/images/products/sale-3.png',
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
</style>
