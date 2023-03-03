import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";
import './assets/app.css'


import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";


const app = createApp(App);
app.use(ToastService);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);
app.use(PrimeVue);
app.mount("#app");
