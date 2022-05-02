<template>
  <div class="bg-white shadow sm:rounded-lg">
    <SwitchGroup as="div" class="px-4 py-5 sm:p-6">
      <SwitchLabel as="h3" class="text-lg leading-6 font-medium text-gray-900" passive> Renew subscription automatically </SwitchLabel>
      <div class="mt-2 sm:flex sm:items-start sm:justify-between">
        <div class="max-w-xl text-sm text-gray-500">
          <SwitchDescription> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum. </SwitchDescription>
        </div>
        <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
        <TheShortToggle />
        </div>
      </div>
    </SwitchGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import TheShortToggle from '../Toggles/TheShortToggle.vue';

export default {
  components: {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    TheShortToggle
  },
  setup() {
    const enabled = ref(false)

    return {
      enabled,
    }
  },
}
</script>