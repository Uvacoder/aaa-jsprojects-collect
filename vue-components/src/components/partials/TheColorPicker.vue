<template>
<div class="pt-8" :style="{ background: color }">
</div>
    <ColorPicker
      :id="id"
      :name="name"
      :label="labe"
      theme="light"
      :color="color"
      :sucker-hide="false"
      :sucker-canvas="suckerCanvas"
      :sucker-area="suckerArea"
      @changeColor="changeColor"
      @openSucker="openSucker"
    />
 

</template>

<script>


import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

export default {
  components: {
    ColorPicker,
    
  },
  data() {
    return {
      color: "#59c7f9",
      suckerCanvas: null,
      suckerArea: [],
      isSucking: false,
    };
  },
  methods: {
    changeColor(color) {
      const { r, g, b, a } = color.rgba;
      this.color = `rgba(${r}, ${g}, ${b}, ${a})`;
    },
    openSucker(isOpen) {
      if (isOpen) {
        // ... canvas be created
        // this.suckerCanvas = canvas
        // this.suckerArea = [x1, y1, x2, y2]
      } else {
        // this.suckerCanvas && this.suckerCanvas.remove
      }
    },
  },
   props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
  
    label: {
      type: String,
      default: "",
      required: true,
    },
    id: {
      type: String,
      default: "",
      required: true,
    },
    required: {
      Boolean,
      default: false,
    },
    
  },
  
};
</script>