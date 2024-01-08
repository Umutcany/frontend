<script setup>
import { urunEklemeKullan } from "@/stores/urunEkle";
import { ref, onMounted, inject } from "vue"; // Make sure to import onMounted here
import { storeToRefs } from "pinia";

const eventBus = inject("eventBus");


const urunEklemeDukkani = urunEklemeKullan();
const { sil, ara, guncelle,ticaretSec } = urunEklemeDukkani;

const { urunler, seciliUrun } = storeToRefs(urunEklemeDukkani);

onMounted(() => {
  ara();
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
  const index = eventBus.state.basket.findIndex((p) => p.name === product.name);

  let updatedBasket;
  if (index !== -1) {
    updatedBasket = eventBus.state.basket.filter((_, i) => i !== index);
  } else {
    updatedBasket = [...eventBus.state.basket, product];
  }

  eventBus.updateBasket(updatedBasket);
};
</script>

<template>
  <div class="product-cards">
    <div class="product-card" v-for="urun in urunler" :key="urun.id">
      <div class="product-image-container">
        <div
          class="product-image"
        ><img :src="urun.urun_resim" class="product-image" alt="Product Image"></div>
      </div>
      <div class="product-info">
        <h2 class="product-name">{{ urun.urun_adi }}</h2>
        <div class="product-price">{{urun.urun_fiyat }} $</div>
      </div>
      <div class="product-action">
        <button class="sepete-ekle" @click="sil(); seciliUrun=urun">
          Ürünü Sil
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
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}

.product-action button {
  flex: 1;
  padding: 8px;
  cursor: pointer;
}

.product-action button:hover {
  background-color: gray;
}
</style>
