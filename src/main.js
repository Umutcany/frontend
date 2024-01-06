import "./assets/main.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from "./routes/routes"

import { faBasketShopping, faCircleExclamation, faLocationDot, faPenToSquare, faPhone, faTrashCan, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"


const app = createApp(App)
const pinia=createPinia()

library.add([faBasketShopping,faLocationDot,faPhone,faUserTie,faCircleExclamation,faPenToSquare,faTrashCan])

app.use(pinia)
app.use(router)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(createPinia())

app.mount('#app')
