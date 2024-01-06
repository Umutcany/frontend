<script setup>
</script>


<template>
    <div class="ticaret_menu">
        <div class="alt_menu">
        <div class="link1">
            <router-link to="/ekle">Ticaret Ekle</router-link>
        </div>
        <div class="link2">
            <router-link to="/liste">Ticaret Listele</router-link>
        </div>
    </div>
    <div class="icerik">
        <router-view></router-view>
    </div>
    </div>
</template>


<style scoped>

.ticaret_menu{
    display: flex;
    padding: 10px;
    overflow: hidden;
}

.link1:hover {
    background-color: red;
    color: white;
    border: 1px solid black;
    border-radius: 35px;
    transition: 0.5s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

}


.link2:hover {
    background-color: red;
    color: white;
    border: 1px solid black;
    border-radius: 35px;
    transition: 0.5s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.alt_menu{
    display: flex;
    flex-direction: column;
    width: 20vw;
}

.alt_menu a, .alt_menu a:visited{
    display: block;
    padding:10px 20px;
    text-decoration: none;
    color: black;
}

.icerik {
    width: 80vw;
}

.link1.router-link-active, .link1.router-link-exact-active {
    background-color: var(--menu-arkaplan-uzerinde);
    color: var(--menu-yazi-tipi-uzerinde) !important;
}

.link2.router-link-active, .link2.router-link-exact-active {
    background-color: var(--menu-arkaplan-uzerinde);
    color: var(--menu-yazi-tipi-uzerinde) !important;
}

</style>