<template>
  <form @submit.prevent="handleSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8">
    <!-- -------First name input--------- -->
    <div>
      <p>First Name: {{ firstname }}</p>
    </div>
    <div>
      <label>First name</label>
      <input
        name="FirstName"
        id="fname"
        type="text"
        required
        v-model="firstname"
        :class="inputClass"
        placeholder="First Name"
      />
    </div>

    <!-- -------Last name input--------- -->
    <div>
      <p>Last Name: {{ lastname }}</p>
    </div>
    <div>
      <label>Last name</label>
      <input
        name="LasttName"
        id="lname"
        type="text"
        required
        v-model="lastname"
        :class="inputClass"
        placeholder="Last Name"
      />
    </div>

    <!-- -------Email input--------- -->
    <div>
      <p>Email: {{ email }}</p>
    </div>
    <div>
      <label>Email</label>
      <input
        name="email"
        id="email"
        type="email"
        required
        v-model="email"
        :class="inputClass"
        placeholder="Email"
      />
    </div>

    <!-- -------Password input--------- -->
    <div>
      <p>Password: {{ password }}</p>
    </div>
    <div>
      <label>Password</label>
      <input
        name="password"
        id="password"
        type="password"
        required
        v-model="password"
        :class="inputClass"
        placeholder="Password"
      />
    </div>

    <!-- -------Password error input--------- -->
    <div>
      <p>Password Error: {{ passworderror }}</p>
    </div>
    <div class="relative">
      <label>Password error</label>
      <input
        name="emailerror"
        id="emailerror"
        type="password"
        required
        v-model="passworderror"
        :class="inputClassError"
        placeholder="Password"
      />
      <div v-if="passworderror" class="error">{{ passworderror }} </div>
      <div class="absolute inset-y-0 right-0 pt-6 pr-3 flex items-center pointer-events-none">
        <ExclamationCircleIcon
          class="h-5 w-5 text-red-500"
          aria-hidden="true"/>
      </div>
      <!-- <HelpText /> -->
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
import HelpText from "./addition/HeplText.vue";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import FormSearch from "./addition/FormSearch.vue";
import FormNumber from "./addition/FormNumber.vue";
import FormCurrency from "./addition/FormCurrency.vue";
import FormCardAdress from "./addition/FormCardAdress.vue";

export default {
  components: {
    HelpText,
    ExclamationCircleIcon,
    FormSearch,
    FormNumber,
    FormCurrency,
    FormCardAdress,
  },

  data() {
    return {
      firstname: "Alex",
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
    }
  },

  methods: {
    handleSubmit() {
      console.log("firstname: ", this.firstname);
      console.log("lastname: ", this.lastname);
      console.log("email: ", this.email);
      console.log("password: ", this.password);
      console.log("role: ", this.role);
      console.log("names: ", this.names);
      this.passworderror = this.password.length > 4 ? '' : 'Your password must be less than 5 characters.'
    },
  },

  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    hideLabel: {
      type: Boolean,
    },
    type: {
      required: true,
      type: String,
    },
    helpText: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>
