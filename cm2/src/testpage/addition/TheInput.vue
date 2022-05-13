<template>
    <div>First Name: {{ firstname }}</div>
    <div>
      <label for="firstname" class="block text-sm font-medium text-gray-700"
        >First Name</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="firstname"
          id="firstname"
          :class="inputClass"
          placeholder="Your First Name"
          v-model="firstname"
        />
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>