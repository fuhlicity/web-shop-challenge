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
                <img src="https://img.icons8.com/sf-regular/48/ffe01b/search.png" alt="search" @click="toggleSearch"/>

            </div>
            
        </div>
        <SearchComponent/>
        
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
import SearchComponent from './header-sections/SearchComponent.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        CartComponent,
        SearchComponent
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
        ...mapState('store', ['bShowCart', 'bShowSearch'])
    },

    methods: {
        ...mapMutations('store', ['setShowCart', 'setShowSearch']),
        showCart() {
            this.setShowCart(true);
            document.body.style.overflow = 'hidden';
        },
        toggleSearch() {
            this.setShowSearch(!this.bShowSearch);
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
    height: auto;
}

#header-component-main {
    background-color: #004e56;
    width: 100vw;
}

#nav-bar {
    position: sticky;
    top: 0;
    width: auto;
    color: white;
    padding: 0 20px;
    display: flex;
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
    margin-right: 20px;
}

</style>
