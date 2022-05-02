<template>
  <nav class="flex justify-center flex-wrap pt-2 border-b-2 pb-4">
     <div class="button">
      <router-link to="/testpage">Main Input</router-link>
    </div>
    <!-- <div class="button">
      <router-link to="/">Inputs</router-link>
    </div> -->
    <div class="button">
      <router-link to="/sidebar">Sidebar</router-link>
    </div>
    <div class="button">
      <router-link to="/radio">Radio</router-link>
    </div>
    <div class="button">
      <router-link to="/pageheadings">Page Headings</router-link>
    </div>
    <div class="button">
      <router-link to="/cardheadings">Card Headings</router-link>
    </div>
    <div class="button">
      <router-link to="/descriptionslist">Descriptions list</router-link>
    </div>
    <div class="button">
      <router-link to="/calendar">Calendar</router-link>
    </div>
    <div class="button">
      <router-link to="/feeds">Feeds</router-link>
    </div>
    <div class="button">
      <router-link to="/tables">Tables</router-link>
    </div>
    <div class="button">
      <router-link to="/forms">Forms</router-link>
    </div>
    <div class="button">
      <router-link to="/selectmenus">Select Menus</router-link>
    </div>
    <div class="button">
      <router-link to="/stackedlists">Stacked Lists</router-link>
    </div>
    <div class="button">
      <router-link to="/checkboxes">Checkboxes</router-link>
    </div>
    <div class="button">
      <router-link to="/textareas">Text Areas</router-link>
    </div>
    <div class="button">
      <router-link to="/toggles">Toggles</router-link>
    </div>
    <div class="button">
      <router-link to="/registration">Registration</router-link>
    </div>
    <div class="button">
      <router-link to="/actionpanel">Action Panel</router-link>
    </div>
  
  </nav>

  <router-view></router-view>

  <!-- <h1 class="font-bold flex justify-center text-xl pb-8 ">Input Groups</h1>
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

  <h1 class="font-bold flex justify-center text-xl py-12">Radio Groups</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div>
      <h2 class="pb-2 border-b-2 bord mb-4 font-medium">Radio - Simple list</h2>
      <RadioSimpleList></RadioSimpleList>
    </div>
    <div>
      <h2 class="pb-2 border-b-2 bord mb-4 font-medium">Radio - List with description</h2>
      <RadioListDescroption></RadioListDescroption>
    </div>
    <div>
      <h2 class="pb-2 border-b-2 bord mb-4 font-medium">Radio - List with radio on right</h2>
      <RadioListRight></RadioListRight>
    </div>
    <div>
      <h2 class="pb-2 border-b-2 bord mb-4 font-medium">Radio - Card</h2>
      <Card></Card>
    </div>
    <div>
      <h2 class="pb-2 border-b-2 bord mb-4 font-medium">Radio - Simple table</h2>
      <Table></Table>
    </div>
    <div>
      <h2 class="pb-2 border-b-2 bord mb-4 font-medium">Radio - List with descriptions in panel</h2>
      <TablePanel></TablePanel>
    </div>
  </div>

  <nav class="flex justify-center pt-4">
    
    
   
  </nav> -->
</template>

//
<script>
// import FormInput from "./components/Form/FormInput.vue";
// import FormTextArea from "./components/Form/FormTextArea.vue";
// import FormLabel from "./components/Form/Partials/FormLabel.vue";
// import FormInputError from "./components/Form/FormInputError.vue";
// import FormCurrency from "./components/Form/FormCurrency.vue";
// import FormNumber from "./components/Form/FormNumber.vue";
// import FormSearch from "./components/Form/FormSearch.vue";
// import FormCardAdress from "./components/Form/FormCardAdress.vue";

// import RadioSimpleList from "./components/Radio/RadioSimpleList.vue";
// import RadioListDescroption from "./components/Radio/RadioListDescroption.vue";
// import RadioListRight from "./components/Radio/RadioListRight.vue";
// import Card from "./components/Radio/Card.vue";
// import Table from "./components/Radio/Table.vue";
// import TablePanel from "./components/Radio/TablePanel.vue";

// export default {
//   components: {
//     FormInput,
//     FormTextArea,
//     FormLabel,
//     FormInputError,
//     FormCurrency,
//     FormNumber,
//     FormSearch,
//     FormCardAdress,
//     RadioSimpleList,
//     RadioListDescroption,
//     RadioListRight,
//     Card,
//     Table,
//     TablePanel,
//   },
// };
//
</script>
