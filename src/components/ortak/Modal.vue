    <script setup>
    import { computed } from 'vue';


    const props = defineProps(['acik',"kapanmaSebebi"]);
    const emits = defineEmits(['update:acik',"update:kapanmaSebebi"])

    const acikProp = computed({
        get(){
            return props.acik;
        },
        set(value){
            emits('update:acik',value)
        }
    });

    const kapanmaSebebi = computed({
        get(){
            return props.kapanmaSebebi;
        },
        set(value){
            emits('update:kapanmaSebebi',value) 
        }
    });

    </script>

    <template>
    <Teleport to="body" v-if="acikProp">
        <div class="soru-arkaplan" >
        <div class="soru-pencere">
            <div class="soru-baslik" @click="kapanmaSebebi='arkaplan';">
            <slot name="baslik">Onay</slot>
            <span class="soru-baslik-iptal" @click="kapanmaSebebi='carpi';"
                >X</span>
            </div>
            <div class="soru-icerik">
            <div class="simge">
                <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
            </div>
            <div class="soru-metni">
                <slot name="sorumetni">
                    Soru
                    </slot>
                </div>
            </div>
            <div class="buttons">
                <slot name="buttons">
                <div class="ekle">Evet</div>
                <div class="iptal" @click="acikProp=false">Hayır</div>
                </slot>
            </div>
        </div>
        </div>
    </Teleport>
    </template>

    <style scoped>



    .soru-metni{
        max-width: 30vw;
        margin-left: 5px;
        font-size:15pt;
    }
    .simge{
        color:red ;
        display: flex;
        align-items: center;
        font-size: 35px;
    }
    .buttons{
        justify-content: center;
        display: flex;
        padding: 5px;
    }

    div.buttons div {
        padding: 10px 10px;
        cursor: pointer;
    }

    .soru-icerik{
        align-items: center;
        display: flex;
        padding: 5px;
        gap: 5px;
    }

    .soru-baslik-iptal{
        margin-right: 10px;
        cursor: pointer;
        font-weight: bold;
    }

    .soru-pencere{
        display: flex;
        flex-direction: column;
        background-color: #F7F9F9;
        border-radius: 8px;
        border: thin solid #7b7d7d;
        font-family: 'Montserrat', sans-serif;  
    }

    .soru-baslik{
        min-width: 30vw;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        font-size: 25pt;
        font-weight: bold;
    }


    .soru-arkaplan{
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    div.butonlar {
    display: flex;
    }

    div.butonlar {
    display: flex;
    }

    .ekle,
    .iptal {
    display: block;
    padding: 10px;
    background-color: red;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.3s ease; /* Animasyon için geçiş süresi ve kolaylık ekledik */
    }

    .ekle:hover,
    .iptal:hover {
    color: red;
    background-color: white;
    cursor: pointer;
    transform: scale(1.1); /* Büyüklük artışı animasyonu */
    }

    </style>
