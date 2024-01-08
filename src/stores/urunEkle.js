
import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { yukleniyorDukkaniKullan } from "./yukleniyorDukkani";
import { uyariDukkaniKullan } from "./uyariDukkani";

export const urunEklemeKullan = defineStore("urun", () => {

  const seciliUrun = ref({
    id: 0,
    olusturulma_tarihi: "",
    guncelleme_tarihi: "",
    urun_kodu: "",
    urun_adi: "",
    urun_resim: "",
    urun_fiyat: 0,
    urun_aciklama: "",
  });


    const yeniUrun = ref({
        urun_kodu: "",
        urun_adi: "",
        urun_resim: "",
        urun_fiyat: 0,
        urun_aciklama: "",
      });

      const urunler = ref([]);

      
    const api = axios.create({
      baseURL: "http://127.0.0.1:5000/api/v1",
    });
  
    const yukleniyorDukkan = yukleniyorDukkaniKullan();
    const { yukleniyor } = storeToRefs(yukleniyorDukkan);
  
    const uyariDukkani = uyariDukkaniKullan();
    const { bilgi, hata } = uyariDukkani;
  
    const ekle = (fonksiyon) => {
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
          yukleniyor.value=false;
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
      api.delete(`/urun/${seciliUrun.value.id}`)
      .then((result)=>{
        yukleniyor.value=false
        bilgi(`${seciliUrun.urun_adi} Silindi.`)
        fonksiyon()
      })
      .catch(()=>{
        yukleniyor.value=false;
        hata("Kayıt silinirken bir hata meydana geldi.")
        fonksiyon()
      })
  };
  
  const ara = () => {
    yukleniyor.value = true;
    api.get("/urun")
      .then((veri) => {
        yukleniyor.value = false;
        urunler.value=veri.data
        bilgi("İşlem Başarılı");
      })
      .catch(() => {
        yukleniyor.value = false;
        hata("İşlem gerçekleşirken bir hata meydana geldi.");
      });
  };
  
    return { ekle,yeniUrun,urunler,ara,sil,seciliUrun };
  });
  