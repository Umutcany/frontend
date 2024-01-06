<script setup>
import MenuBileseni from './MenuBileseni.vue';

</script>

<template>
    <div class="header">
        <a href="#">
        <img class="logo" src="https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png" alt="logo">
    </a>
    <span class="logo-header">Umut|Alperen Commerce</span>
        <MenuBileseni class="links"/>
    </div>

</template>

<style>

.logo-header{
    margin-left: 15px;
}

.links{
    display: flex;
    align-items: center;
    position: absolute;
    right: 0%;
}

.logo{
    height: 50px;
}

.header{
    display: flex;
    text-align: center;
    align-items: center;
    padding: 25px;
    background: var(--baslik-arkaplan);
    color:var(--baslik-yazirengi);
    font-size: 30px;
    font-weight: bold; 
}

</style>