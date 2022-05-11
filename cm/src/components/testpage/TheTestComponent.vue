<template>
  <form
    @submit.prevent="handleSubmit"
    class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8"
  >
    <!-- -------Selected menu-------- -->
    <div>
      <p>Selected options here: {{ selected }}</p>
    </div>
    <div>
      <v-select name="country" :options="options" @select="optionSelect" />
    </div>

    <!-- -------First name-------- -->
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

    <!-- -------Last name-------- -->
    <div>Last Name: {{ lastname }}</div>
    <div>
      <label for="lastname" class="block text-sm font-medium text-gray-700"
        >Last name</label
      >
      <div class="mt-1">
        <input
          type="text"
          name="lastname"
          id="lastname"
          :class="inputClass"
          placeholder="Your Last Name"
          v-model="lastname"
        />
      </div>
    </div>

    <!-- -------Password-------- -->
    <div>Password: {{ password }}</div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <div class="mt-1">
        <input
          type="password"
          name="password"
          id="password"
          :class="inputClass"
          placeholder="Your password"
          v-model="password"
        />
        <div v-if="passwordError" class="error text-red-600">
        {{ passwordError }}
      </div>
      </div>
    </div>

    <!-- -------Email input--------- -->
    <div>
      <p>Email: {{ email }}</p>
    </div>
    <div class="mt-1">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <input
        type="email"
        name="email"
        id="email"
        :class="inputClass"
        placeholder="Your email"
        v-model="email"
      />
    </div>


    <!-- -------Text Area--------- -->
    <div>
      <p>Text Area: {{ textarea }}</p>
    </div>
    <div>
      <label for="comment" class="block text-sm font-medium text-gray-700"
        >Add your comment</label
      >
      <div class="mt-1">
        <textarea
          v-model="textarea"
          :rows="rows"
          :name="id"
          :id="id"
          :class="textAreaClass"
        />
      </div>
    </div>

    <!-- -------Dropdown box --------- -->
    <div>
      <p>Dropdown - Role: {{ role }}</p>
    </div>
    <div>
      <label>Dropdown</label>
      <select v-model="role" name="dropdown" id="dropdown" :class="inputClass">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
    </div>

    <!-- -------Checkbox--------- -->
    <div>
      <p>Terms accepted: {{ terms }}</p>
    </div>
    <div class="terms">
      <input type="checkbox" required :class="checkbox" v-model="terms" />
      <label class="pl-2">Accept terms and conditions</label>
    </div>

    <!-- -------Checkbox names value--------- -->
    <div>
      <p>Names: {{ names }}</p>
    </div>
    <div>
      <div>
        <input type="checkbox" value="alex" v-model="names" :class="checkbox" />
        <label class="pl-2">Alex</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="jacob"
          v-model="names"
          :class="checkbox"
        />
        <label class="pl-2">Jacob</label>
      </div>
      <div>
        <input type="checkbox" value="matt" v-model="names" :class="checkbox" />
        <label class="pl-2">Matt</label>
      </div>
    </div>

    <!-- -------Button Submit--------- -->
    <div>
      <p>Button</p>
    </div>
    <div class="submit">
      <button :class="buttonClass">Submit</button>
    </div>
  </form>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t-2">
    <!-- -------Form Currency--------- -->
    <div>
      <p>Form Currency: {{ currency }} {{ amount }}</p>
    </div>
    <div>
      <label>Price</label>
      <div class="relative">
        <input
          type="text"
          name="price"
          id="price"
          v-model="amount"
          :class="inputClass"
          placeholder="0.00"
        />
        <div class="absolute inset-y-0 right-0 flex items-center">
          <label for="currency" class="sr-only">Currency</label>
          <select
            id="currency"
            name="currency"
            :class="currencyClass"
            v-model="currency"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <p>Form Number:{{ region }} {{ number }}</p>
    </div>
    <div>
      <label>Your number</label>
      <div class="relative">
        <input
          class="pl-16"
          type="number"
          name="phone-number"
          id="phone-number"
          v-model="number"
          :class="inputClass"
          placeholder="+305344234434"
        />
        <div class="absolute inset-y-0 left-0 flex items-center">
          <label for="region" class="sr-only"></label>
          <select
            id="region"
            name="region"
            :class="currencyClass"
            v-model="region"
          >
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <p>Form Search: {{ "" }}</p>
    </div>
    <div>
      <FormSearch />
    </div>
    <div>
      <p>Form Card Adress: {{ "" }}</p>
    </div>
    <div>
      <FormCardAdress />
    </div>
  </div>
</template>

<script>
import BaseInput from "./addition/BaseInput.vue";
import HelpText from "./addition/HeplText.vue";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import FormSearch from "./addition/FormSearch.vue";
import FormNumber from "./addition/FormNumber.vue";
import FormCurrency from "./addition/FormCurrency.vue";
import FormCardAdress from "./addition/FormCardAdress.vue";
import TheButton from "./addition/TheButton.vue";
import vSelect from "./addition/vSelect.vue";

export default {
  components: {
    HelpText,
    ExclamationCircleIcon,
    FormSearch,
    FormNumber,
    FormCurrency,
    FormCardAdress,
    TheButton,
    BaseInput,
    vSelect,
  },
  props:{
    value:{
      type: String,
      default:""
    }
  },

  data() {
    return {
      options: [
        { code: "UA", value: 1 },
        { name: "Ukraine", value: 2 },
        { code: "UK", value: 3 },
        { name: "Poland", value: 4 },
      ],
      selected: "",

      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passworderror: "",
      textarea: "",
      role: "",
      terms: false,
      names: [],
      amount: "",
      currency: "",
      number: "",
      region: "",
    };
  },
  computed: {
    helpText: function () {
      return "mt-2 text-sm text-red-600";
    },
    checkbox: function () {
      return "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded";
    },
    inputClass: function () {
      return "block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm border-gray-300 rounded-md";
    },
    inputClassError: function () {
      return "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md";
    },
    textAreaClass: function () {
      return "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";
    },
    buttonClass: function () {
      return "inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
    },
    currencyClass: function () {
      return "focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md";
    },
    regionClass: function () {
      return "";
    },
  },

  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
    handleSubmit() {
      console.log("firstname: ", this.firstname);
      console.log("lastname: ", this.lastname);
      console.log("email: ", this.email);
      console.log("password: ", this.password);
      console.log("role: ", this.role);
      console.log("names: ", this.names);
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Your password must be less than 6 characters.";
    },
  },
};
</script>
