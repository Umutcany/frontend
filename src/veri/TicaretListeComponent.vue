<script setup>
import { ticaretDukkaniKullan } from "@/stores/ticaretDukkani";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import SayfalamaComponent from "@/components/ortak/SayfalamaComponent.vue";
import Modal from "@/components/ortak/Modal.vue";
import { ref } from "vue";

const ticaretDukkani = ticaretDukkaniKullan();
const { sil, ara, guncelle,ticaretSec } = ticaretDukkani;
const sayfa_no = ref(0);

const sayfayaGit = (i) => {
  sayfa_no.value = i;
  ara(sayfa_no.value);
};

const { ticaretler, seciliTicaret } = storeToRefs(ticaretDukkani);

onMounted(() => {
  ara(sayfa_no.value);
});

const silme_dialog_acik = ref(false);
const duzenle_dialog_acik = ref(false);
</script>

<template>
  <div>
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
          <a
            class="guncelle btn"
            @click="ticaretSec(ticaret);duzenle_dialog_acik = true"
          >
            <font-awesome-icon icon="pen-to-square" />
          </a>
          <a
            class="sil btn"
            @click="
              seciliTicaret = ticaret;
              silme_dialog_acik = true;
            "
          >
            <font-awesome-icon icon="trash-can" />
          </a>
        </div>
      </div>
    </div>
    <div>
      <SayfalamaComponent />
    </div>
    <Modal
      v-model:acik="silme_dialog_acik"
      @update:kapanmaSebebi="
        (sebep) => {
          if (sebep === 'carpi') silme_dialog_acik = false;
        }
      "
    >
      <template #baslik> Silme Onayı? </template>
      <template #sorumetni>
        {{ seciliTicaret.ticaret_adi }} Silmek İstediğinize Emin Misiniz??
        <br />
        <span class="uyari-mesaji">Bu işlem geri alınamaz!</span>
      </template>
      <template #buttons>
        <div
          class="ekle"
          @click="
            sil(() => {
              silme_dialog_acik = false;
              sayfayaGit(sayfa_no);
            })
          "
        >
          Evet
        </div>
        <div class="iptal" @click="silme_dialog_acik = false">Hayır</div>
      </template>
    </Modal>

    <Modal
      v-model:acik="duzenle_dialog_acik"
      @update:kapanmaSebebi="
        (sebep) => {
          if (sebep === 'carpi') duzenle_dialog_acik = false;
        }
      "
    >
      <template #baslik> Düzenleme </template>
      <template #sorumetni>
        <div class="data-form">
          <div class="satir">
            <div class="etiket">Ticaret Adı</div>
            <div class="bilesen">
              <font-awesome-icon icon="basket-shopping" />
              <input
                class="girdi"
                type="text"
                name="ticaret_adi"
                placeholder="lütfen şube ismi giriniz..."
                v-model="seciliTicaret.ticaret_adi"
                @input="ticaret_adi_karakter_sinirini_kontrol_et"
              />
            </div>
          </div>
          <div class="satir">
            <div class="etiket">Ticaret Telefon</div>
            <div class="bilesen">
              <font-awesome-icon icon="phone" />
              <input
                class="girdi"
                type="number"
                name="ticaret_telefon"
                placeholder="0 (5xx) xxx xx xx"
                v-model="seciliTicaret.ticaret_telefon"
                @input="ticaret_telefon_karakter_sinirini_kontrol_et"
              />
            </div>
          </div>
          <div class="satir">
            <div class="etiket">Ticaret Adres</div>
            <div class="bilesen">
              <font-awesome-icon icon="location-dot" />
              <textarea
                class="girdi"
                name="ticaret_adresi"
                placeholder="lütfen adres giriniz..."
                v-model="seciliTicaret.ticaret_adres"
              ></textarea>
            </div>
          </div>
          <div class="satir">
            <div class="etiket">Yetkili kisi</div>
            <div class="bilesen">
              <font-awesome-icon icon="user-tie" />
              <input
                class="girdi"
                type="text"
                name="ticaret_yetkiliKisi"
                placeholder="lütfen yetkili kisiyi belirtiniz..."
                v-model="seciliTicaret.ticaret_yetkiliKisi"
                @input="ticaret_yetkiliKisi_karakter_sinirini_kontrol_et"
              />
            </div>
          </div>
        </div>
      </template>
      <div></div>
      <template #buttons>
        <div
          class="ekle"
          @click="
            guncelle(() => {
              duzenle_dialog_acik = false;
              sayfayaGit(sayfa_no);
            })
          "
        >
          Evet
        </div>
        <div class="iptal" @click="duzenle_dialog_acik = false">Hayır</div>
      </template>
    </Modal>
  </div>
</template>

<style scoped>
.ticaretler {
  width: 100%;
  padding: 20px 10px;
}
.satir.baslik {
  color: red;
  background-color: rgba(1, 1, 1, 0%);
}

.ticaretler.baslik span {
  font-weight: bold;
  font-size: 20pt;
}

.ticaretler.baslik {
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

.guncelle {
  cursor: pointer;
  color: green;
}

.sil {
  cursor: pointer;
  color: red;
}

a.btn {
  margin: 2px;
}

.ekle,
.iptal {
  display: block;
  padding: 10px;
  background-color: red;
  margin-right: 15px;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease; /* Animasyon için geçiş süresi ve kolaylık ekledik */
}

.ekle:hover,
.iptal:hover {
  color: red;
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

div.butonlar {
  display: flex;
}

div.butonlar {
  display: flex;
}
</style>
