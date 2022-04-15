<template>
  <div>
    <form
      action="#"
      method="POST"
      class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <h2>Example of using with `type` `First name`</h2>
      </div>
      <div>
        <FormInput
          id="fname"
          label="First Name"
          type="text"
          placeholder="fef"
        />
      </div>
      <div>
        <h2>Example of using with `type` `Last Name`</h2>
      </div>
      <div>
        <FormInput id="mailIcon" label="Last Name" type="text"></FormInput>
      </div>
      <div>
        <h2>Example of using Input with hidden label</h2>
      </div>
      <div>
        <FormInput id="email" type="text" />
      </div>
      <div>
        <h2>
          Example of using with `type` `Email - Input with label and help text`
        </h2>
      </div>
      <div>
        <FormInput
          id="email"
          label="Email"
          type="email"
          help-text="We'll only use this for spam."
        />
      </div>
      <div>
        <h2>Example of using text Area</h2>
      </div>
      <div>
        <FormTextArea :rows="9" id="desc" label="comment" />
      </div>
      <div>
        <h2>Example of using with Input with validation error</h2>
      </div>
      <div>
        <FormInputError></FormInputError>
      </div>
      <div>
        <h2>Input with inline leading add-on and trailing dropdown</h2>
      </div>
      <div>
        <FormCurrency></FormCurrency>
      </div>

      <div>
        <h2>Input with inline leading dropdown</h2>
      </div>
      <div>
        <FormNumber></FormNumber>
      </div>
      <div>
        <h2>Input with leading icon and trailing button</h2>
      </div>

      <div>
        <FormSearch></FormSearch>
      </div>
      
      <div>
        <h2>Inputs with shared borders</h2>
      </div>

      <div>
        <FormCardAdress></FormCardAdress>
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from "./components/Form/FormInput.vue";
import FormTextArea from "./components/Form/FormTextArea.vue";
import FormLabel from "./components/Form/Partials/FormLabel.vue";
import FormInputError from "./components/Form/FormInputError.vue";
import FormCurrency from "./components/Form/FormCurrency.vue";
import FormNumber from "./components/Form/FormNumber.vue";
import FormSearch from "./components/Form/FormSearch.vue";
import FormCardAdress from "./components/Form/FormCardAdress.vue";

export default {
  components: {
    FormInput,
    FormTextArea,
    FormLabel,
    FormInputError,
    FormCurrency,
    FormNumber,
    FormSearch,
    FormCardAdress,
  },
};
</script>
