<script setup>
import { urunEklemeKullan } from "@/stores/urunEkle";
import { ref, onMounted, inject, getCurrentInstance } from "vue"; // Make sure to import onMounted here
import { storeToRefs } from "pinia";

const { proxy } = getCurrentInstance();

const eventBus = proxy.$eventBus;

const urunEklemeDukkani = urunEklemeKullan();
const { sil, ara, guncelle, ticaretSec } = urunEklemeDukkani;

const { urunler, yeniUrun } = storeToRefs(urunEklemeDukkani);
const sayfa_no = ref(0);

onMounted(() => {
  ara(sayfa_no.value);
});

const basket = ref([]);

onMounted(() => {
  const storedBasket = localStorage.getItem("basket");
  if (storedBasket) {
    basket.value = JSON.parse(storedBasket);
  }
});

const buyProduct = () => {
  // Implement buy product logic
};

const addProductToCart = (product) => {
  if (!eventBus.state.basket) {
    console.error("Basket is null!");
    return; // Exit the function if basket is null
  }

  const index = eventBus.state.basket.findIndex((p) => p.id === product.id);

  let updatedBasket;
  if (index !== -1) {
    // Product is in the basket, remove it
    updatedBasket = eventBus.state.basket.filter((_, i) => i !== index);
  } else {
    // Product is not in the basket, add it
    updatedBasket = [...eventBus.state.basket, product];
  }

  eventBus.updateBasket(updatedBasket);
};
</script>

<template>
  <div class="product-cards">
    <div
      class="product-card"
      v-for="urun in urunler.filter((urun) => urun.urun_fiyat >= 500)"
      :key="urun.id"
    >
      <div class="product-image-container">
        <div class="product-image">
          <img
            :src="urun.urun_resim"
            class="product-image"
            alt="Resim Yüklenemedi
        "
          />
        </div>
      </div>
      <div class="product-info">
        <h2 class="product-name">{{ urun.urun_adi }}</h2>
        <div class="product-price">{{ urun.urun_fiyat }} $</div>
      </div>
      <div class="product-action">
        <button class="satin-al" @click="buyProduct(urun)">Satın Al</button>
        <button class="sepete-ekle" @click="addProductToCart(urun)">
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
}

.product-card {
  width: 250px;
  height: 350px;
  margin: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}

.product-image-container {
  height: 100%;
  overflow: hidden;
  border-bottom: 2px solid #ccc;
}

.product-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.product-info {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.satin-al {
  margin-right: 10px;
  background-color: green;
  color: white;
}

.sepete-ekle {
  background-color: red;
  color: white;
}

.product-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price {
  font-size: 1rem;
  font-weight: bold;
}

.product-action {
  margin-top: auto;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  border-top: 1px solid #ccc;
}

.product-action button {
  flex: 1;
  padding: 12px;
  cursor: pointer;
}

.product-action button:hover {
  background-color: lightsalmon;
  color: black;
  font-weight: bold;
}
</style>
