<template>
  <div class="basket-page">
    <h2>Sepetim</h2>
    <div class="product-cards">
      <div class="product-card" v-for="(item, index) in basket" :key="item.id">
        <div class="product-image-container">
          <div class="product-image">
            <img
              :src="item.urun_resim"
              class="product-image"
              :alt="item.urun_adi"
            />
          </div>
        </div>
        <div class="product-info">
          <h2 class="product-name">{{ item.urun_adi }}</h2>
          <div class="product-price">{{ item.urun_fiyat }} $</div>
          <p class="product-description">{{ item.urun_aciklama }}</p>
        </div>
        <div class="product-action">
          <button class="remove-from-basket" @click="removeFromBasket(index)">
            Sil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

const eventBus = proxy.$eventBus;

const basket = ref([]);

onMounted(() => {
  const storedBasket = localStorage.getItem("basket");
  if (storedBasket) {
    basket.value = JSON.parse(storedBasket);
  }
});

const removeFromBasket = (index) => {
  basket.value.splice(index, 1);
  eventBus.updateBasket(basket.value);
};
</script>

<style scoped>
.product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  align-items: flex-start;
}

.product-card {
  width: 250px;
  margin: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image-container {
  width: 100%;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
}

.product-info {
  padding: 10px;
  width: 100%;
}

.product-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1rem;
  font-weight: bold;
}

.product-description {
  font-size: 0.9rem;
  margin-top: 10px;
}

.product-action {
  padding: 10px;
  width: 100%;
}

.remove-from-basket {
  width: 100%;
  padding: 12px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}

.remove-from-basket:hover {
  background-color: darkred;
}
</style>
