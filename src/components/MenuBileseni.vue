<script setup>
</script>

<template>
<div class="Menu">
    <routerLink to ='/ticaret'>Ticaret Bilgileri</routerLink>
    <routerLink to ='/urunler'>Ürünlerimiz</routerLink>
    <a href="#">Ürün Hakkında</a>
    <a href="#">Sepet</a>   
</div>
</template>

<style>
.Menu{
    overflow-x:hidden;
    flex-grow: 1;
}

.Menu a {
    font-size: 18px;
    font-weight: bold;
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    border-radius: 30px;
    margin: 2px;
}

.Menu a:hover{
    background-color: var(--menu-arkaplan-uzerinde);
    color: var(--menu-yazi-tipi-uzerinde);
}

.Menu a.router-link-active{
    background-color: var(--menu-arkaplan-uzerinde);
    color: var(--menu-yazi-tipi-uzerinde);

}

</style>
