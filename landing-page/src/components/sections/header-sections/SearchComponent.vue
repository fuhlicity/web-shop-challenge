<template>
    <div id="search-component-main">
        <Transition name="bounce">
            <div id="search-wrapper" v-if="isSearchVisible">
                <input type="search" id="search-input"/>
                <button class="button">Search</button>
            </div>
        </Transition>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
        };
    },

    computed: {
        ...mapState('store', ['bShowSearch']),

        isSearchVisible: {
            get() {
                return this.bShowSearch;
            }
        }
    }
}
</script>

<style>
#cart-component-main {
    width:500px;
    display: flex;
    float: right;
    color: black
}


#search-wrapper {
    padding: 0 20px;
    display: flex;
    gap: 20px;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    transform: translateY(0);
    opacity: 1;
}

#search-wrapper.hide {
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

#search-wrapper > button {
    font-weight: bold;
}

</style>

