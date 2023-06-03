<template>
    <div id="cart-component-main">
        <Transition name="slide-fade">
            <div id="cart-wrapper" class="modal-overlay" v-if="isCartVisible">
            <div id="cart-content" class="center-content">
                <div id="cart-header">
                    <h2>Cart 🛒</h2>
                    <button type="button" class="btn close-icon hide-cart--btn" aria-label="Close" @click="hideCart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                    </button>
                </div>
                <div id="cart-body">
                    <div id="cart-list">
                        <div class="cart-item" v-for="(cart_list, index) in aCart" :key="index">
                            <div class="cart-item-details">
                                <img :src="cart_list.image"/>
                                <div class="cart-item-text">
                                    <div class="cart-item-name">{{cart_list.name}}</div>
                                    <div class="cart-item-price">₱{{cart_list.price}}</div>
                                </div>
                                <div class="cart-item-qty">
                                    <input type="text" :value="cart_list.quantity"/>
                                </div>
                                <button type="button" class="btn close-icon del-item--btn" aria-label="Close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="cart-total">
                        Total: ₱<span>83,000</span>
                    </div>
                </div>
                <div id="cart-footer">
                    <button class="button button-cart" id="check-out--btn" @click="checkOut">Check Out</button>
                    <button class="button button-cart hide-cart--btn" id="close-cart--btn" @click="hideCart">Continue Shopping</button>
                </div>
            </div>

        </div>
        </Transition>
        
        
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            aCart: [
                {
                    name: "Dining chairs",
                    price: '2,000',
                    quantity: 3,
                    image: '../../src/images/products/prod-19.png'
                },
                
                {
                    name: "Cafe chairs",
                    price: '5,000',
                    quantity: '8',
                    image: '../../src/images/products/prod-2.png'
                },

                {
                    name: "Reading chairs",
                    price: '8,000',
                    quantity: '1',
                    image: '../../src/images/products/prod-17.png'
                },

                {
                    name: "Bar stool",
                    price: '3,000',
                    quantity: '3',
                    image: '../../src/images/products/prod-11.png'
                },

                {
                    name: "Porch chair",
                    price: '10,000',
                    quantity: '2',
                    image: '../../src/images/products/prod-14.png'
                }
            ]
        };
    },
    computed: {
        ...mapState('store', ['bShowCart']),

        isCartVisible: {
            get() {
                return this.bShowCart;
            }
        }
    },
    methods: {
        ...mapMutations('store', ['setShowCart']),

        hideCart() {
            this.setShowCart(false);
            document.body.style.overflow = '';
        },

        checkOut() {
            this.setShowCart(false)
            Swal.fire(
                'Order# 12345',
                'Thank you for ordering! <br> Check your email for the receipt.',
                'success'
            )
        }
    },
}
</script>

<style>
.close-icon {
    color: #004e56;
}
#cart-content {
    position: fixed;
    width: 500px;
    height: 100vh;
    background-color: #f6f6f4;
    z-index: 9999;
    flex-direction: column;
    padding:20px;
}

#cart-wrapper{
    display: flex;
    justify-content: flex-end;
}


#cart-header {
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-content: center;
    width: 100%;
}

#cart-header > button {
    float: right;
}

#cart-footer {
    display: flex;
    width: 100%;
}

#cart-list {
    height: 760px;
}

.cart-item {
    height: 139px;
    display: flex;
    padding: 20px 0;
}

.del-item--btn {
    float: right
    
}

.cart-item-details {
    display: flex;
    gap: 10px;
}

.cart-item-details > img {
    width: 100px;
    height: 100px;
}

.cart-item-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    width: 257px;
}

.cart-item-name {
    font-weight: bold;
    font-size: 16px;
}

.cart-item-price {
    font-weight: 200;
}

.cart-item-qty, .cart-item-delete {
    justify-content: center;
    flex-direction: column;
    display: flex;
} 

.cart-item-qty > input{
    width: 30px;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.096);
    text-align: center;
    font-size: 12px;
} 

.cart-item-qty > input:focus{
    border: 1px solid rgba(0, 0, 0, 0.36) !important;
    outline: none !important;
} 
#cart-total {
    display: flex;
    margin: 20px 0;
    font-size: 28px;
    float: right;
}

#cart-total > span {
    font-weight: bolder;
    padding: 0 10px;
}

</style>

