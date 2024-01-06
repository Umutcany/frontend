<script setup>
import { ticaretDukkaniKullan } from '@/stores/ticaretDukkani';
import { storeToRefs } from 'pinia';
import SayfalamaComponent from '@/components/ortak/SayfalamaComponent.vue'
import { ref } from 'vue';




const ticaretDukkani = ticaretDukkaniKullan();
const { toplam_sayfa } = storeToRefs(ticaretDukkani);

const { ara } = ticaretDukkani;

const sayfayaGit = (i) => {
    sayfa_no.value=i
    ara(sayfa_no.value)
}

const oncekiSayfa = () => {

    if(sayfa_no.value>1){
        sayfayaGit(sayfa_no.value -1)
    }

}

const ilkSayfa = () =>{
    if(sayfa_no.value>1){
        sayfayaGit(1)
    }
}

const sonrakiSayfa = () =>{
    if (sayfa_no.value<toplam_sayfa.value){
        sayfayaGit(sayfa_no.value +1)
    }

}

const sonSayfa = () => {

    if(sayfa_no.value < toplam_sayfa.value) {
        sayfayaGit(toplam_sayfa.value)
    }
}

const sayfa_no = ref(0);

</script>

<template>
  <div class="sayfalar">
    <a class="sayfa" :class="sayfa_no===1?'pasif':''" @click="ilkSayfa">|&lt;</a>
    <a class="sayfa" :class="sayfa_no===1?'pasif':''" @click="oncekiSayfa">&lt;</a>
    <a
      class="sayfa"
      :class="{ aktif: i === sayfa_no }"
      v-for="i in toplam_sayfa"
      @click="sayfa_no = i, sayfayaGit(i)"
      :key="i"
    >
      {{ i }}
    </a>
    <a class="sayfa" :class="sayfa_no===toplam_sayfa?'pasif':''" @click="sonrakiSayfa">&gt;</a>
    <a class="sayfa" :class="sayfa_no===toplam_sayfa?'pasif':''" @click="sonSayfa">&gt;|</a>
  </div>
</template>

<style scoped>
.sayfalar {
  display: flex;
  width: 100%;
  justify-content: center;
}

a.sayfa.pasif{
    background-color: lightgray;
    cursor: not-allowed;
}

a.sayfa {
  display: block;
  width: 25px;
  height: 25px;
  text-align: center;
  margin: 2px;
  padding-bottom: 30px;
  background-color: white;
  cursor: pointer;
  border: 1px solid black;
}

a.sayfa.aktif {
  background-color: red;
  color: white; /* Aktif olduğunda yazı rengini beyaz yap */
}
</style>
