import { createRouter, createWebHashHistory } from "vue-router";
import BosMenu from "../components/ortak/BosMenu.vue";
import TicaretMenuComponent from "../veri/TicaretMenuComponent.vue";
import TicaretEklemeComponent from "../veri/TicaretEklemeComponent.vue";
import TicaretListeComponent from "../veri/TicaretListeComponent.vue";
import TicaretUrunlerComponent from "../veri/TicaretUrunlerComponent.vue";
import TicaretGiyimComponent from "../veri/TicaretGiyimComponent.vue";
import TicaretKisiselBakimComponent from "../veri/TicaretKisiselBakim.vue";
import TicaretElektronikComponent from "../veri/TicaretElektronikComponent.vue";
import TicaretUrunEklemeComponent from "../veri/TicaretUrunEklemeComponent.vue";
import TicaretUrunKategoriComponent from "../veri/TicaretUrunKategoriComponent.vue";
import TicaretSepettekiUrunler from "../veri/TicaretSepettekiUrunler.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: BosMenu },
    {
      path: "/urunler",
      component: TicaretUrunlerComponent,
      children: [
        {
          path: "/giyim",
          component: TicaretGiyimComponent,
        },
        {
          path: "/kisiselBakim",
          component: TicaretKisiselBakimComponent,
        },
        {
          path: "/elektronik",
          component: TicaretElektronikComponent,
        },
      ],
    },
    { path: "/urun_ekle", component: TicaretUrunEklemeComponent },
    {
      path: "/ticaret",
      component: TicaretMenuComponent,
      children: [
        {
          path: "/ekle",
          component: TicaretEklemeComponent,
        },
        {
          path: "/liste",
          component: TicaretListeComponent,
        },
      ],
    },
    { path: "/sepet", component: TicaretSepettekiUrunler },
  ],
});
