  <script setup>
  import { urunEklemeKullan } from "@/stores/urunEkle";
  import { storeToRefs } from "pinia";
  import UrunKartGuncel from "@/components/ortak/UrunKartGuncel.vue";
  import { ref, onMounted, inject } from "vue"; // Make sure to import onMounted here

  const dialog_acik = ref(false);

    
  const urunEklemeDukkan = urunEklemeKullan();
  const { ekle,yeniUrun,ara} = urunEklemeDukkan;

  const sayfa_no = ref(0);

  const ticaret_bilgilerini_yazdir = () => {
    console.log(yeniUrun.value);
    dialog_acik.value = true;
  };

  const ticaret_bilgilerini_kapat = () => {
    dialog_acik.value = false;
  };


  const createProduct = async () => {
    console.log("asdadsa");
    ekle;
  };
  </script>

  <template>
    <div class="temel-container">
      <div class="form-container">
      <form>
        <div class="form-group">
          <label for="urun_kodu">Ürün Kodu</label>
          <input
            type="text"
            id="urun_kodu"
            v-model="yeniUrun.urun_kodu"
            required
          />
        </div>

        <div class="form-group">
          <label for="urun_adi">Ürün Adı</label>
          <input
            type="text"
            id="urun_adi"
            v-model="yeniUrun.urun_adi"
            required
          />
        </div>

        <div class="form-group">
          <label for="urun_resim">Ürün Resmi URL</label>
          <input type="url" id="urun_resim" v-model="yeniUrun.urun_resim" />
        </div>

        <div class="form-group">
          <label for="urun_fiyat">Ürün Fiyatı</label>
          <input
            type="number"
            id="urun_fiyat"
            v-model.number="yeniUrun.urun_fiyat"
            required
          />
        </div>

        <div class="form-group">
          <label for="urun_aciklama">Ürün Açıklaması</label>
          <textarea
            id="urun_aciklama"
            v-model="yeniUrun.urun_aciklama"
            required
          ></textarea>
        </div>

        <button @click="ekle()" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? "Ekleniyor..." : "Ürün Ekle" }}
        </button>
      </form>
    </div>
    <div class="urunler">
        <UrunKartGuncel/>
      </div>
    </div>
    
  </template>

  <style scoped>

  .urunler{
    display: flex;
  }

  .temel-container{
    display: flex;
    justify-content: space-between;
  }


  body {
    font-family: "Arial", sans-serif;
    background: #f4f7f6;
    margin: 0;
    padding: 0;
  }

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 30px;
  }

  form {
    width: 100%;
    max-width: 800px;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-size: 16px;
  }

  input[type="text"],
  input[type="url"],
  input[type="number"],
  textarea {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  input[type="text"]:focus,
  input[type="url"]:focus,
  input[type="number"]:focus,
  textarea:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
  }

  button[type="submit"] {
    width: 100%;
    padding: 15px 0;
    margin-top: 20px;
    border-radius: 4px;
    border: none;
    background-image: linear-gradient(to right, #6ab1d7 0%, #3383cd 100%);
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-image 0.3s ease-in-out, box-shadow 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  button[type="submit"]:hover,
  button[type="submit"]:focus {
    background-image: linear-gradient(to right, #3383cd 0%, #6ab1d7 100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  label {
    display: block;
    margin-bottom: 10px;
    color: #333;
    font-size: 1rem;
    font-weight: bold;
  }

  ::placeholder {
    color: #adb5bd;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #adb5bd;
  }

  ::-ms-input-placeholder {
    color: #adb5bd;
  }

  @media (max-width: 768px) {
    .form-container {
      padding: 10px;
    }

    form {
      width: calc(100% - 20px); /* Full width minus padding */
      padding: 20px; /* Reduced padding */
    }
  }
  </style>
