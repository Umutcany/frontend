import { defineStore } from "pinia";
import {ref} from 'vue'

export const uyariDukkaniKullan = defineStore('uyari',()=>{
    const uyarilar=ref([
    ])

    const suresiBitenler=ref([]);

    const temizle = () => {
        for (let i=0; i<suresiBitenler.value.length; i++) {
            uyarilar.value.splice(0,1)
        }

    }

    const bilgi = (msj) =>{
        temizle()
        uyarilar.value.push({mesaj:msj,tur:'bilgi'})

    }

    const hata = (msj) =>{
        temizle()
        uyarilar.value.push({mesaj:msj,tur:'hata'})

    }

    return {uyarilar,suresiBitenler,bilgi,hata,temizle}


})