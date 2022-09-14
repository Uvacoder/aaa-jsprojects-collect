<template>
  <div
    class="grid grid-cols-1 py-6 px-4 sm:px-2 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">
        Switcher / Toggle plugin Vue3
      </h1>
    </div>
    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">
        npm install @vueform/toggle
      </h1>
    </div>
    <div class="pt-8 lg:pl-8 grid  grid-cols-1 lg:grid-cols-2">

      <div class="py-4 bg-white p-4 rounded-md m-2">
        <h3 class="pb-4" id="example-1">#1 - Default toggle</h3>
        <div class="output">Data: {{ example1.value }}</div>
        <Toggle v-model="example1.value" v-bind="example1" />
      </div>

      <div class="py-4 bg-white p-4 rounded-md m-2">
        <h3 class="pb-4" id="example-2">#2 - Toggle with labels</h3>
        <div class="output">Data: {{ example2.value }}</div>
        <Toggle v-model="example2.value" v-bind="example2" />
      </div>

      <div class="py-4 bg-white p-4 rounded-md m-2">
        <h3 class="pb-4" id="example-3">#3 - Toggle with custom values</h3>
        <div class="output">Data: {{ example3.value }}</div>
        <Toggle v-model="example3.value" v-bind="example3" />
      </div>

      <div class="py-4 bg-white p-4 rounded-md m-2">
        <h3 class="pb-4" id="example-4">#4 - Toggle with custom labels</h3>
        <div class="output">Data: {{ example4.value }}</div>
        <Toggle v-model="example4.value" v-bind="example4">
          <template v-slot:label="{ checked, classList }">
            <span :class="classList.label">{{ checked ? "On" : "Off" }}</span>
          </template>
        </Toggle>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@vueform/toggle";

export default {
  components: {
    Toggle,
  },
  data() {
    return {
      example1: {
        value: false,
      },
      example2: {
        value: false,
        onLabel: "On",
        offLabel: "Off",
      },
      example3: {
        value: "off",
        trueValue: "on",
        falseValue: "off",
      },
      example4: {
        value: false,
      },
    };
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
