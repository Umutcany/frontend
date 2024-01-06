<script setup>
import { storeToRefs } from "pinia";
import UyariMesajiComponent from "./UyariMesajiComponent.vue";
import {uyariDukkaniKullan} from '@/stores/uyariDukkani'

const uyariDukkani=uyariDukkaniKullan()

const {uyarilar,suresiBitenler}= storeToRefs(uyariDukkani)
const {temizle} =uyariDukkani 

</script>

<template>
  <Teleport to="body" v-if="uyarilar.length>0">
    <div class="uyari-listesi">
      <UyariMesajiComponent
        :metin="uyari.mesaj"
        @sure-bitti="
          () => {
            suresiBitenler.push(index);
            temizle()
          }
        "
        :tur="uyari.tur"
        :zaman="3000"
        :key="index"
        v-for="(uyari, index) in uyarilar"
      />
    </div>
  </Teleport>
</template>

<style scope>
.uyari-listesi {
  width: 25vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.uyari {
  color: black;
  width: 60%;
  height: 50px;
  margin: 5px 0;
  border-radius: 12px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", "sans-serif";
  font-size: 20px;
  filter: drop-shadow(2px 2px 5px black);
}

.uyari.hata {
  background-color: lightcoral;
}

.uyari.bilgi {
  background-color: lightgreen;
}

.uyari-mesaji {
  font-weight: bold;
}
</style>
