<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-2 py-6 px-4 sm:px-8 md:pl-64 lg:pl-64"
  >
    <div>
      <h1 class="pt-12 px-2 lg:pl-8 text-xl font-bold">Text Area</h1>
    </div>
    <div></div>
    <div>
      <h1 class="pt-2 px-2 lg:pl-8 text-base font-normal">Text Area</h1>
    </div>
    <div></div>
    <div class="pt-8 px-2 lg:px-8">
      <TheTextArea
        :type="'textarea'"
        :label="'My text area'"
        :helpText="'Write your messages'"
        :id="'textarea'"
        :required="true"
        :readonly="false"
        :name="'Textarea'"
        placeholder="Write your text"
        :value="textarea"
        @input="textarea = $event.target.value"
        v-model="textarea"
      />
      <div>
        <p>Messages:</p>
      </div>
      <p>{{textarea}}</p>
    </div>
  </div>
</template>

<script>
import TheTextArea from "./partials/TheTextArea.vue";
export default {
  components: {
    TheTextArea,
  },
   data() {
    return {
      textarea: "",
    };
  },
};
</script>
