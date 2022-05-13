<template>
  <div class="">
    <h1 class="text-xl font-semibold flex justify-center py-4">
      Form Layout
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2">

        
      <div class="border-2 p-6">
        <Form />
      </div>
     
    
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Form from './Form_Layout/Form.vue';



export default {
  components: {
   Form,
  },
};
</script>
