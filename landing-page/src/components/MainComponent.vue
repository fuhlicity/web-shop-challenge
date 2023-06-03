<template>
    <div id="main-component-main">
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import BodyComponent from './sections/BodyComponent.vue';
import FooterComponent from './sections/FooterComponent.vue';
import HeaderComponent from './sections/HeaderComponent.vue';

export default {
    components: { HeaderComponent, BodyComponent, FooterComponent }
}
</script>

<style></style>