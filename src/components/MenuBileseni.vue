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
    <a href="#">Ürün Hakkında</a>
    <routerLink to="#">
      Sepet <span class="badge">{{ basketItemCount }}</span>
    </routerLink>
  </div>
</template>

<style>
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
  background-color: #ff0000; /* Red background for visibility */
  color: white;
  border-radius: 50%; /* Circular badge */
  padding: 3px 6px; /* Padding inside the badge */
  font-size: 14px;
  vertical-align: top; /* Align top if necessary */
  margin-left: 4px; /* Space between the badge and the link text */
}
</style>
