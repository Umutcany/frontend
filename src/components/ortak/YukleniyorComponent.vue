<script setup>
import { yukleniyorDukkaniKullan } from '@/stores/yukleniyorDukkani';
import { storeToRefs } from 'pinia';


const yukleniyorDukkani=yukleniyorDukkaniKullan();

const {yukleniyor} = storeToRefs(yukleniyorDukkani)

</script>


<template>
    <Teleport to="body" v-if="yukleniyor">
        <div class="yukleniyor">
            <div class="animasyon"></div>
        </div>
    </Teleport>
</template>


<style scoped>

.yukleniyor{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index:2;
}

.animasyon{
    width: 250px;
    height: 250px;
    border: red 20px solid ;
    border-top:lightgreen 20px solid;
    border-radius: 50%;
    animation: yukleme_donus 1.4s linear infinite
}

@keyframes yukleme_donus{
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}

}
</style>