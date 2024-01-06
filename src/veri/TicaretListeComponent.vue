<script setup>
import { ticaretDukkaniKullan } from '@/stores/ticaretDukkani';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import SayfalamaComponent from '@/components/ortak/SayfalamaComponent.vue'
import { ref } from 'vue';



const ticaretDukkani = ticaretDukkaniKullan();

const {sil} = ticaretDukkani
const { ara } = ticaretDukkani;



const sayfa_no = ref(0);

const { ticaretler, toplam_sayfa } = storeToRefs(ticaretDukkani);

onMounted(() => {
  ara(sayfa_no.value);
});
</script>

<template>
  <div class="ticaretler">
    <div class="ticaretler baslik">
      <span class="baslik">Tanımlı Ticaretler</span>
    </div>
    <div class="satir baslik">
      <div class="hucre sutun-0">Ticaret Telefon</div>
      <div class="hucre sutun-1">Ticaret Ad</div>
      <div class="hucre sutun-2">Ticaret Adres</div>
      <div class="hucre sutun-3">Ticaret Yetkili Kisi</div>
     
    </div>
    <div class="satir" v-for="ticaret in ticaretler" :key="ticaret.id">
      <div class="hucre sutun-0">{{ ticaret.ticaret_telefon }}</div>
      <div class="hucre sutun-1">{{ ticaret.ticaret_adi }}</div>
      <div class="hucre sutun-2">{{ ticaret.ticaret_adres }}</div>
      <div class="hucre sutun-3">{{ ticaret.ticaret_yetkiliKisi }}</div>
      <div class="hucre sutun-4">
        <a class="guncelle btn">
          <font-awesome-icon icon="pen-to-square" />
        </a>
        <a class="sil btn">
          <font-awesome-icon @click="sil()" icon="trash-can" />
        </a>
      </div>
    </div>
  </div>
  <div>
    <SayfalamaComponent/>
  </div>
</template>

<style scoped>


.ticaretler{
    width:100%;
    padding: 20px 10px;

}
.satir.baslik{
    color: red;
    background-color: rgba(1, 1, 1, 0%);
}

.ticaretler.baslik span{
    font-weight: bold;
    font-size: 20pt;
}

.ticaretler.baslik{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(1, 1, 1, 0%);
    color: red;
}


.satir {
  display: flex;
  border-spacing: 2px; /* Sütunlar arasında boşluk */
}

.hucre {
  display: block;
  padding: 5px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis; /* Metin sütuna sığmazsa üç nokta ile kes */
  white-space: nowrap; /* Metni tek satırda tut */
}

.hucre.sutun-0 {
  order: 0;
  flex: 1 1 15%; /* İlk sütunun genişliği */
  border-left: 1px solid black;
}

.hucre.sutun-1 {
  order: 1;
  flex: 1 1 20%;
}

.hucre.sutun-2 {
  order: 2;
  flex: 1 1 30%;
}

.hucre.sutun-3 {
  order: 3;
  flex: 1 1 25%; /* Dördüncü sütunun genişliği */
}

.hucre.sutun-4 {
  order: 4;
  flex: 1 1 10%;
  /* border-right: none; */ /* Sınırı kaldırın */
}

.guncelle{
  cursor: pointer;
  color: green;
}

.sil{
  cursor: pointer;
  color: red;
}

a.btn{
  margin: 2px;
}


</style>