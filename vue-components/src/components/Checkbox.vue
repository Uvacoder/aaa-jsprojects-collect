<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">Checkbox component</h1>
    </div>
    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Checkbox</h1>
    </div>
    <div></div>
    <div class="pt-8 px-2 lg:pl-8">
      <div> 
          <input
            type="checkbox"
            id="jack"
            value="Jack"
            v-model="checkedNames"
          />
          <label for="jack">Jack</label>
          <input
            type="checkbox"
            id="john"
            value="John"
            v-model="checkedNames"
          />
          <label for="john">John</label>
          <input
            type="checkbox"
            id="mike"
            value="Mike"
            v-model="checkedNames"
          />
          <label for="mike">Mike</label>
     
      </div>

      <br />
      <span>Checked names: {{ checkedNames }}</span>
      <TheCheckbox
        :type="'checkbox'"
        :id="'checkbox1'"
        :name="'Comments'"
        :readonly="true"
        :required="false"
        :value="'checked'"
        v-model="checked"
      />
      <TheCheckbox
        :type="'checkbox'"
        :id="'checkbox1'"
        :name="'Comments'"
        :readonly="true"
        :required="false"
        :value="'checked'"
        v-model="checked"
      />
    </div>
  </div>
</template>

<script>
import TheCheckbox from "./partials/TheCheckbox.vue";
export default {
  data() {
    return {
      checked: "",
      checked1: "",
      checkedNames: [],
    };
  },
  components: {
    TheCheckbox,
  },
  computed: {
    radioButton: function () {
      return "h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500";
    },
  },
};
</script>
