import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/vela-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";
import './assets/app.css'
import InputText from "primevue/inputtext";
import CustomButton from "primevue/button";
import AppToast from "primevue/toast";
import GalleriaComp from "primevue/galleria";

const app = createApp(App);
app.use(ToastService);
app.component("CustomButton", CustomButton);
app.component("InputText", InputText);
app.component("AppToast", AppToast);
app.component("GalleriaComp" , GalleriaComp)
app.use(PrimeVue);
app.mount("#app");
