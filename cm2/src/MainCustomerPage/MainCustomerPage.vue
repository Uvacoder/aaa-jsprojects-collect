<template>
  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
      <div class="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
        <img class="h-8 w-auto" src="classmagerloho.png" alt="Workflow" />
      </div>
      <div class="flex-1 flex flex-col overflow-y-auto">
        <nav class="flex-1 px-2 py-4 space-y-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            ]"
          >
            <component
              :is="item.icon"
              :class="[
                item.current
                  ? 'text-gray-300'
                  : 'text-gray-400 group-hover:text-gray-300',
                'mr-3 flex-shrink-0 h-6 w-6',
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
  <div class="md:pl-64 flex flex-col">
    <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        @click="sidebarOpen = true"
      >
        <span class="sr-only">Open sidebar</span>
        <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 px-4 flex justify-between">
        <div class="flex-1 flex">
          <form class="w-full flex md:ml-0" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <div
              class="relative w-full text-gray-400 focus-within:text-gray-600"
            >
              <div
                class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
              >
                <SearchIcon class="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
        <div class="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem
                  v-for="item in userNavigation"
                  :key="item.name"
                  v-slot="{ active }"
                >
                  <a
                    :href="item.href"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >{{ item.name }}</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <TheBreadCrumbs />

    <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <!-- Primary column -->
        <section
          aria-labelledby="primary-heading"
          class="min-w-0 flex-1 h-full flex flex-col lg:order-last"
        >
          <x-placeholder class="h-full">
            <div class="p-6 h-full">
              <div
                class="block border-2 border-dashed border-gray-300 rounded h-full w-full text-black bg-white p-4"
              >
                <div>
                  <BasicInfoInputs />
                </div>
              </div>
            </div>
          </x-placeholder>
        </section>
      </main>

      <!-- Secondary column (hidden on smaller screens) -->
      <aside
        class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block"
      >
        <x-placeholder class="h-full">
          <div class="p-6 h-full">
            <div
              class="block border-2 border-dashed border-gray-300 rounded h-full w-full text-black"
            >
              <di>
                <h3 class="p-4 text-lg leading-6 font-medium text-gray-900 border-b-2">
                  Contact Adress
                </h3>
                <TheAcideInputs />
              </di>
            </div>
          </div>
        </x-placeholder>
      </aside>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TheBreadCrumbs from "./CustomerComponents/TheBreadCrumbs.vue";
import BasicInfoInputs from "./CustomerComponents/BasicInfoInputs.vue";
import TheAcideInputs from "./CustomerComponents/TheAcideInputs.vue"
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { SearchIcon } from "@heroicons/vue/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: false },
  { name: "Customers", href: "#", icon: UsersIcon, current: true },
  { name: "Students", href: "#", icon: FolderIcon, current: false },
  { name: "Staff", href: "#", icon: CalendarIcon, current: false },
  { name: "Classes", href: "#", icon: InboxIcon, current: false },
  { name: "Pont of Sale ", href: "#", icon: ChartBarIcon, current: false },
  { name: "Billing ", href: "#", icon: ChartBarIcon, current: false },
  { name: "Messages ", href: "#", icon: ChartBarIcon, current: false },
  { name: "Reports ", href: "#", icon: ChartBarIcon, current: false },
  { name: "Calendar ", href: "#", icon: CalendarIcon, current: false },
  { name: "Website", href: "#", icon: ChartBarIcon, current: false },
  { name: "Settings", href: "#", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
    TheBreadCrumbs,
    BasicInfoInputs,
    TheAcideInputs
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      navigation,
      userNavigation,
      sidebarOpen,
    };
  },
};
</script>
