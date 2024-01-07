
import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { yukleniyorDukkaniKullan } from "./yukleniyorDukkani";
import { uyariDukkaniKullan } from "./uyariDukkani";

export const urunEklemeKullan = defineStore("urun", () => {
    const yeniUrun = ref({
        urun_kodu: "",
        urun_adi: "",
        urun_resim: "",
        urun_fiyat: 0,
        urun_aciklama: "",
      });
      
    const api = axios.create({
      baseURL: "http://127.0.0.1:5000/api/v1",
    });
  
    const yukleniyorDukkan = yukleniyorDukkaniKullan();
    const { yukleniyor } = storeToRefs(yukleniyorDukkan);
  
    const uyariDukkani = uyariDukkaniKullan();
    const { bilgi, hata } = uyariDukkani;
  
    const ekle = (fonksiyon) => {
        console.log("ekleniyor...")
      yukleniyor.value = true;
      api.post("/urun", yeniUrun.value)
        .then(function (deger) {
          if (fonksiyon !== undefined) {
            fonksiyon(deger.data);
          } else {
            console.log(deger.data);
          }
          console.log(deger.data);
          yeniUrun.value = {
            urun_kodu: "",
            urun_adi: "",
            urun_resim: "",
            urun_fiyat: 0,
            urun_aciklama: "",
          };
          yukleniyor.value = false;
          bilgi("İşleminiz Başarıyla Tamamlandı!");
        })
        .catch(function () {
          hata("Malesef işleminiz esnasında hata meydana geldi tekrar deneyiniz...");
        });
    };
  
    const guncelle = (fonksiyon) => {
      yukleniyor.value=true;
      api.patch(`/ticaret/${seciliTicaret.value.id}`,{
        ticaret_adi:seciliTicaret.value.ticaret_adi,
        ticaret_adres:seciliTicaret.value.ticaret_adres,
        ticaret_telefon:seciliTicaret.value.ticaret_telefon      
      })
      .then((result)=>{
        yukleniyor.value=false
        bilgi(`${seciliTicaret.value.ticaret_adi} Güncellendi.`)
        fonksiyon()
      })
      .catch(()=>{
        yukleniyor.value=false;
        hata("Kayıt Güncellenemedi!")
        fonksiyon();
      })
    };
  
    const sil = (fonksiyon) => {
      yukleniyor.value=true;
      api.delete(`/ticaret/${seciliTicaret.value.id}`)
      .then((result)=>{
        yukleniyor.value=false
        bilgi(`${seciliTicaret.value.ticaret_adi} Silindi.`)
        fonksiyon();
      })
      .catch(()=>{
        yukleniyor.value=false;
        hata("Kayıt silinirken bir hata meydana geldi.")
        fonksiyon();
      })
  };
  
    const ara = (sayfa = 1) => {
      yukleniyor.value = true;
      api.get(`/ticaret/sayfa_sayisi/${sayfadaki_kayit_sayisi.value}`)
        .then((veri) => {
          toplam_sayfa.value = veri.data.sayfa_sayisi;
          sayfa = Math.min(sayfa,toplam_sayfa.value)
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
  
    return { ekle,yeniUrun };
  });
  