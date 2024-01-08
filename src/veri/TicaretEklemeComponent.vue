<script setup>
import { ref } from "vue";
import Modal from "../components/ortak/Modal.vue";
import { storeToRefs } from "pinia";
import { ticaretDukkaniKullan } from "@/stores/ticaretDukkani";



const dialog_acik = ref(false);

const ticaretDukkan = ticaretDukkaniKullan();

const {yeniTicaret} = storeToRefs(ticaretDukkan)

const {ekle} = ticaretDukkan


const ticaret_bilgilerini_yazdir = () => {
  console.log(yeniTicaret.value);
  dialog_acik.value = true;
};


const ticaret_bilgilerini_kapat = () => {
  dialog_acik.value=false
}

function ticaret_telefon_karakter_sinirini_kontrol_et(e) {
  /* Telefon Numarasına 11 haneden fazla sayı girilmesin diye blokladım. */
  if (e.target.value.length > 11) {
    e.target.value = e.target.value.substring(0, 11);
  }
}

function ticaret_adi_karakter_sinirini_kontrol_et(e) {
  /* adi kontrol eden fonksiyon. */
  if (e.target.value.length > 30) {
    e.target.value = e.target.value.substring(0, 30);
  }
}

function ticaret_yetkiliKisi_karakter_sinirini_kontrol_et(e) {
  /* adi kontrol eden fonksiyon. */
  if (e.target.value.length > 30) {
    e.target.value = e.target.value.substring(0, 30);
  }
}

</script>

<template>
  <div class="data-form">
    <div class="satir">
      <div class="etiket">Şube Adı</div>
      <div class="bilesen">
        <font-awesome-icon icon="basket-shopping" />
        <input
          class="girdi"
          type="text"
          name="ticaret_adi"
          placeholder="lütfen şube ismi giriniz..."
          v-model="yeniTicaret.ticaret_adi"
          @input="ticaret_adi_karakter_sinirini_kontrol_et"
        />
      </div>
    </div>
    <div class="satir">
      <div class="etiket">Şube Telefon</div>
      <div class="bilesen">
        <font-awesome-icon icon="phone" />
        <input
          class="girdi"
          type="number"
          name="ticaret_telefon"
          placeholder="0 (5xx) xxx xx xx"
          v-model="yeniTicaret.ticaret_telefon"
          @input="ticaret_telefon_karakter_sinirini_kontrol_et"
        />
      </div>
    </div>
    <div class="satir">
      <div class="etiket">Şube Adres</div>
      <div class="bilesen">
        <font-awesome-icon icon="location-dot" />
        <textarea
          class="girdi"
          name="ticaret_adresi"
          placeholder="lütfen adres giriniz..."
          v-model="yeniTicaret.ticaret_adres"
        ></textarea>
      </div>
    </div>
    <div class="satir">
      <div class="etiket">Şube Yetkili Kişi</div>
      <div class="bilesen">
        <font-awesome-icon icon="user-tie" />
        <input
          class="girdi"
          type="text"
          name="ticaret_yetkiliKisi"
          placeholder="lütfen yetkili kisiyi belirtiniz..."
          v-model="yeniTicaret.ticaret_yetkiliKisi"
          @input="ticaret_yetkiliKisi_karakter_sinirini_kontrol_et"
        />
      </div>
    </div>
    <div class="satir">
      <div class="butonlar">
        <div class="ekle" @click="ticaret_bilgilerini_yazdir">EKLE</div>
        <div class="iptal">İPTAL</div>
      </div>
    </div>
  </div>
  <Modal
    v-model:acik="dialog_acik"
    @update:kapanmaSebebi="
      (sebep) => {
        if (sebep === 'carpi') {
          return (dialog_acik = false);
        }
      }
    "
  >
    <template #baslik> Kaydetme Onayı </template>
    <template #sorumetni>
      Değişiklikleri kaydetmek istediğinize emin misiniz?
      <br />
      <span class="uyari-mesaji">Bu işlem geri alınamaz!</span>
    </template>
    <div>
      
    </div>

    <template #buttons>
      <div class="ekle" @click="ekle(()=>{dialog_acik=false;})">Evet</div>
      <div class="iptal" @click="ticaret_bilgilerini_kapat">Hayır</div>
    </template>
  </Modal>
  </template>

<style scoped>


div.butonlar {
  display: flex;
}

.ekle{
  display: block;
  padding: 10px;
  background-color: green;
  color: white;
  margin-right: 15px;
  border-radius: 20px;
  transition: all 0.3s ease; /* Animasyon için geçiş süresi ve kolaylık ekledik */

}
.iptal {
  color: white;
  display: block;
  padding: 10px;
  background-color: red;
  margin-right: 15px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease; /* Animasyon için geçiş süresi ve kolaylık ekledik */
}

.ekle:hover,
.iptal:hover {
  color: black;
  background-color: white;
  cursor: pointer;
  transform: scale(1.1); /* Büyüklük artışı animasyonu */

}

.uyari-mesaji {
  font-size: 14pt;
  font-weight: bold;
  color: red;
  text-decoration: underline;
}

.bilesen > textarea {
  height: 150px;
  margin-left: 5px;
}
.bilesen > input {
  margin-left: 5px;
}
.satir {
  display: flex;
  flex-direction: column;
}
.bilesen {
  display: flex;
  width: 70%;
  margin-bottom: 15px;
}

.bilesen svg {
  padding: 10px;
  background: var(--menu-arkaplan);
  color: var(--menu-yazirengi);
  min-width: 50px;
  text-align: center;
}

.girdi {
  width: 100%;
  padding: 5px;
  outline: none;
  overflow-x: hidden;
  border: none;
}

.bilesen > .girdi:focus {
  border: 2px solid var(--menu-arkaplan);
}
</style>
