<script setup>
import { ref } from "vue";

const products = ref([
  {
    image: "https://cdn.akakce.com/z/apple/iphone-14-pro-max.jpg",
    name: "iPhone 14 Pro Max",
    price: "$1,099",
  },
  {
    image: "https://cdn.akakce.com/z/apple/iphone-14-pro-max.jpg",
    name: "Samsung Galaxy S23 ULTRA",
    price: "$999",
  },
  {
    image: "https://cdn.akakce.com/z/apple/iphone-14-pro-max.jpg",
    name: "Google Pixel 7 Pro",
    price: "$899",
  },
  {
    image: "https://cdn.akakce.com/z/apple/iphone-14-pro-max.jpg",
    name: "iPhone 14 Pro Max",
    price: "$1,099",
  },
  {
    image: "https://cdn.akakce.com/z/apple/iphone-14-pro-max.jpg",
    name: "iPhone 14 Pro Max",
    price: "$1,099",
  },
  {
    image: "https://cdn.akakce.com/z/apple/iphone-14-pro-max.jpg",
    name: "iPhone 14 Pro Max",
    price: "$1,099",
  },
]);

const buyProduct = () => {
  // Implement buy product logic
};

const addProductToCart = () => {
  // Implement add product to cart logic
};
</script>

<template>
  <div class="product-cards">
    <div class="product-card" v-for="(product, index) in products" :key="index">
      <div class="product-image-container">
        <div class="product-image" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
      </div>
      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <div class="product-price">{{ product.price }}</div>
      </div>
      <div class="product-action">
        <button class="satin-al" @click="buyProduct">Satın Al</button>
        <button class="sepete-ekle" @click="addProductToCart">Sepete Ekle</button>
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
