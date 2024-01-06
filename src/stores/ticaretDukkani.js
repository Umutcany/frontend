import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { yukleniyorDukkaniKullan } from "./yukleniyorDukkani";
import { uyariDukkaniKullan } from "./uyariDukkani";

export const ticaretDukkaniKullan = defineStore("ticaret", () => {
  const seciliTicaret = ref({
    id: 0,
    olusturulma_tarihi: "",
    guncelleme_tarihi: "",
    ticaret_telefon: "",
    ticaret_adi: "",
    ticaret_adres: "",
    ticaret_yetkiliKisi: "",
  });

  const yeniTicaret = ref({
    ticaret_telefon: "",
    ticaret_adi: "",
    ticaret_adres: "",
    ticaret_yetkiliKisi: "",
  });

  const ticaretler = ref([]);
  const sayfadaki_kayit_sayisi = ref(10);
  const toplam_sayfa = ref(0);

  const api = axios.create({
    baseURL: "http://127.0.0.1:5000/api/v1",
  });

  const yukleniyorDukkan = yukleniyorDukkaniKullan();
  const { yukleniyor } = storeToRefs(yukleniyorDukkan);

  const uyariDukkani = uyariDukkaniKullan();
  const { bilgi, hata } = uyariDukkani;

  const ekle = (fonksiyon) => {
    yukleniyor.value = true;
    api.post("/ticaret", yeniTicaret.value)
      .then(function (deger) {
        if (fonksiyon !== undefined) {
          fonksiyon(deger.data);
        } else {
          console.log(deger.data);
        }
        console.log(deger.data);
        yeniTicaret.value = {
          ticaret_telefon: "",
          ticaret_adi: "",
          ticaret_adres: "",
          ticaret_yetkiliKisi: "",
        };
        yukleniyor.value = false;
        bilgi("İşleminiz Başarıyla Tamamlandı!");
      })
      .catch(function () {
        hata("Malesef işleminiz esnasında hata meydana geldi tekrar deneyiniz...");
      });
  };

  const guncelle = () => {};

  const sil = (ticaretId, fonksiyon) => {
    yukleniyor.value = true;
    api.delete(`/ticaret`,yeniTicaret.id)
        .then(function (deger) {
            if (id !== yeniTicaret.id) {
                fonksiyon(deger.data);
            } else {
                console.log(deger.data);
            }
            yukleniyor.value = false;
            bilgi("İşleminiz Başarıyla Tamamlandı!");
        })
        .catch(function () {
            yukleniyor.value = false;
            hata("Malesef işleminiz esnasında hata meydana geldi tekrar deneyiniz...");
        });
};



  const ara = (sayfa = 1) => {
    yukleniyor.value = true;
    api.get(`/ticaret/sayfa_sayisi/${sayfadaki_kayit_sayisi.value}`)
      .then((veri) => {
        toplam_sayfa.value = veri.data.sayfa_sayisi;
        api.get(`/ticaret/sayfa/${sayfa}/${sayfadaki_kayit_sayisi.value}`)
          .then((veri) => {
            yukleniyor.value = false;
            ticaretler.value = veri.data;
            bilgi("Veri Başarıyla Yüklendi!");
          })
          .catch(() => {
            yukleniyor.value = false;
            hata("Veri Yüklenemedi...");
          });
      })
      .catch(() => {
        yukleniyor.value = "false";
        hata("Sayfa Sayısı Öğrenilemedi!");
      });
  };

  return { toplam_sayfa,seciliTicaret, yeniTicaret, ticaretler, ekle, sil, guncelle, ara };
});
