<template>
  
    <div class="example">
      <h3 id="example-1">#1 - Default toggle</h3>
      <div class="output">Data: {{ example1.value }}</div>
      <Toggle v-model="example1.value" v-bind="example1" />
    </div>
 

  <div class="example">
    <h3 id="example-2">#2 - Toggle with labels</h3>
    <div class="output">Data: {{ example2.value }}</div>
    <Toggle v-model="example2.value" v-bind="example2" />
  </div>

  <div class="example">
    <h3 id="example-3">#3 - Toggle with custom values</h3>
    <div class="output">Data: {{ example3.value }}</div>
    <Toggle
      v-model="example3.value"
      v-bind="example3"
    />
  </div>

  <div class="example">
    <h3 id="example-4">#4 - Toggle with custom labels</h3>
    <div class="output">Data: {{ example4.value }}</div>
    <Toggle
      v-model="example4.value"
      v-bind="example4"
    >
      <template v-slot:label="{ checked, classList }">
        <span :class="classList.label">{{ checked ? 'On' : 'Off' }}</span>
      </template>
    </Toggle>
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
