
<script setup>
import { useToast } from "primevue/usetoast";
import {ref} from 'vue'
const toast = useToast();
const text = ref(); 
const greet = () =>{
 toast.add({severity:'success', summary:'PrimeTime'  , detail:text.value})
}

</script>






<template>
<div class="container">
 <Toast></Toast> 
 <span class="p-float-label  p-input-filled">
	<InputText id="txt" type="text" v-model="text" />
	<label for="txt">Text</label>
</span>
<Button label="Greet" @click="greet" icon="pi pi-user" > </Button>
</div>

</template>


<style>
.container{
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
}
</style>
