<script setup>
</script>


<template>
    <div class="ticaret_kategori">
        <div class="alt_menu">
            <span class="kategori">Kategoriler</span>
            <div class="link">
                <router-link to="giyim">Giyim</router-link>
            </div>
            <div class="link">
                <router-link to="kisiselBakim">Kişisel Bakım</router-link>
            </div>
            <div class="link">
                <router-link to="elektronik">Elektronik</router-link>
            </div>
        </div>
    </div>
    <div class="icerik">
        <router-view></router-view>
    </div>
</template>


<style>

.kategori{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    font-weight: bold;
    text-decoration: underline;
}

.link {
    display: flex;
    align-items: center;
    justify-content: center;
}

.ticaret_menu{
    display: flex;
    padding: 10px;
    overflow: hidden;
}

.link:hover {
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

.link.router-link-active, .link.router-link-exact-active {
    background-color: var(--menu-arkaplan-uzerinde);
    color: var(--menu-yazi-tipi-uzerinde) !important;
}


</style>