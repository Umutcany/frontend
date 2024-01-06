<script setup>
import { ref } from "vue";


const props = defineProps([
    'metin','tur','zaman'
])

const emits=defineEmits([
    'sureBitti'
])

const gorunur=ref(true)


setTimeout(function() {
    gorunur.value=false;
    emits('sureBitti')
},props.zaman)

</script>

<template>
  <div class="uyari" :class="tur" v-if="gorunur">
    <div>{{ metin }}</div>
  </div>
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
