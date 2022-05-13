<template>
  <div>
    <div>
      <MainCustomerPage />
    </div>

    
    <router-view></router-view>
  </div>
</template>

<script>
import MainCustomerPage from "./MainCustomerPage/MainCustomerPage.vue";


export default {
  components: {
    MainCustomerPage
  
  },
};
</script>
