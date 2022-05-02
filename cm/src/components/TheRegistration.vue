<template>
  <div class="">
     <h1 class="text-xl font-semibold flex justify-center py-4 ">
      Sign in registration
    </h1>
    <div class="grid grid-cols-1 ">
      <div class=" ">
        <TheSignInForm />
      </div>
  
 
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import TheSignInForm from './Registration/TheSignInForm.vue';


export default {
  components: {
   TheSignInForm,
 
  },
};
</script>
