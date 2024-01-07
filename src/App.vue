<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import IcerikBileseni from "./components/IcerikBileseni.vue";
import Footer from "./components/alt_components/Footer.vue";
import YukleniyorComponent from "./components/ortak/YukleniyorComponent.vue";
import UyariBileseni from "./components/ortak/UyariBileseni.vue";
import { provide } from "vue";
import { EventBus } from "./EventBus.js";

provide("eventBus", EventBus);

const temalar = [
  { tema_adi: "Açık Renk Teması", tema_class: "acik" },
  { tema_adi: "Koyu Renk Teması", tema_class: "koyu" },
];
const secili_tema = ref("acik");
</script>

<template>
  <div class="kapsayici" :class="secili_tema">
    <Navbar />
    <IcerikBileseni />
    <Footer />
    <YukleniyorComponent />
    <UyariBileseni />
  </div>
  <select class="tema_secici" v-model="secili_tema">
    <option v-for="tema in temalar" :value="tema.tema_class">
      {{ tema.tema_adi }}
    </option>
  </select>
</template>

<style scoped>
/* scoped buranın dışına çıkma demek için kullanılıyor. */

.kapsayici {
  display: flex;
  flex-direction: column;
}

.tema_secici {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 15px;
}
</style>
