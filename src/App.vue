
<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const text = ref();
const toast = useToast();
const greet = () => {
	toast.add({
		severity: "success",
		summary: "Message",
		detail: text.value,
	});
};
</script>


<template>
<div class="container">
 <AppToast></AppToast> 
 <span class="p-float-label  p-input-filled">
	<InputText id="txt" type="text" v-model="text" />
	<label for="txt">Text</label>
</span>
<CustomButton label="Greet" @click="greet" icon="pi pi-user"></CustomButton>

</div>

</template>


<style>
 html, body {
      height: 100%;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
 .container{
	
	display: flex;
 }
</style>
