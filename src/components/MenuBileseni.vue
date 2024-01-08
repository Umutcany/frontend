<script setup>
import { inject, computed } from "vue";

const eventBus = inject("eventBus");

const basketItemCount = computed(() => eventBus.state.basket.length);
</script>

<template>
  <div class="Menu">
    <routerLink to="/ticaret">Ticaret Bilgileri</routerLink>
    <routerLink to="/urunler">Ürünlerimiz</routerLink>
    <routerLink to="/urun_ekle">Ürün Ekle</routerLink>
    <routerLink to="/sepet">
      <div class="sepet">
          Sepet  <span class="badge">{{ basketItemCount }}</span>
          <font-awesome-icon :icon="['fas', 'basket-shopping']" />
        </div>
    </routerLink>
  </div>
</template>

<style>

.sepet{
  font-weight: bold;
}

.Menu {
  overflow-x: hidden;
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

.Menu a:hover {
  background-color: var(--menu-arkaplan-uzerinde);
  color: var(--menu-yazi-tipi-uzerinde);
}

.Menu a.router-link-active {
  background-color: var(--menu-arkaplan-uzerinde);
  color: var(--menu-yazi-tipi-uzerinde);
}

.badge {
  background-color: #ff0000;
  color: white;
  border-radius: 50%; 
  padding: 3px 6px; 
  font-size: 14px;
  vertical-align: top; 
  position: absolute;
  top: 0.2px;
  right: 10px;
}
</style>
