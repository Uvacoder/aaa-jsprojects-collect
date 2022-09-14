<template>
  <div>
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <h2 class="text-2xl text-white">Components for CM</h2>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/select">Select Component</router-link>
            </div>
            <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/multiselect">Multi Select</router-link>
            </div>
            <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/inputs-names">Input Names</router-link>
            </div>
            <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/password">Password Input</router-link>
            </div>
            <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/email">Email Input</router-link>
            </div>
             <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/textarea">Text Area</router-link>
            </div>
            <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/checkbox">Checkbox</router-link>
            </div>
            <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/radio">Radio</router-link>
            </div>
             <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/date-picker">Date Picker</router-link>
            </div>
             <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/time-picker">Time Picker</router-link>
            </div>
             <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/date-picker-range">Date Range Picker</router-link>
            </div>
             <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/country-code">Country Code</router-link>
            </div>
             <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/color-picker">Color Picker</router-link>
            </div>
             <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/toggle">Switcher / Toggle</router-link>
            </div>
                <div class="text-white text-base px-4 py-2 rounded-md hover:bg-gray-700">
              <router-link to="/table-input">Table-Input</router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col">
      <main></main>
    </div>
  </div>
  <router-view></router-view>
</template>

<!-- <nav class="flex justify-center flex-wrap pt-2 border-b-2 pb-4">
  
    <div class="button">
      <router-link to="/testpage">Test Page</router-link>
    </div>
    <div class="button">
      <router-link to="/forms">Forms</router-link>
    </div>
  <router-view></router-view>
  </nav> -->
