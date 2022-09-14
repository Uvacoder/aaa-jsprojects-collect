import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

// import TheForm from './components/TheForm.vue';


import Select_Component from './components/Select_Component.vue';
import Multiselect from './components/MultiSelect.vue';
import Input_Names from './components/Input_Names.vue';
import Password from './components/Password.vue';
import Email from './components/Email.vue';
import Text_Area from './components/Text_Area.vue';
import Checkbox from './components/Checkbox.vue';
import Date_Picker from './components/Date_Picker.vue';
import Country_Code from './components/Country_Code.vue';
import TimePicker from './components/TimePicker.vue';
import DatePickerRange from './components/DatePickerRange.vue';
import ColorPicker from './components/ColorPicker.vue';
import Switcher from './components/Switcher.vue';
import RadioComponent from './components/RadioComponent.vue';
import TableInput from './components/TableInput.vue';


export default createRouter({

    history: createWebHashHistory(),
    routes: [
        //     path: '/',
        //     component: TheInputs
        // },
        // {
        //     path: '/forms',
        //     component: TheForm
        // },
        {
            path: '/select',
            component: Select_Component
        }, {
            path: '/multiselect',
            component: Multiselect
        },
        {
            path: '/inputs-names',
            component: Input_Names
        },
        {
            path: '/password',
            component: Password
        },
        {
            path: '/email',
            component: Email
        },
        {
            path: '/textarea',
            component: Text_Area
        },
        {
            path: '/checkbox',
            component: Checkbox
        },
        {
            path: '/date-picker',
            component: Date_Picker
        },
        {
            path: '/country-code',
            component: Country_Code
        },
        {
            path: '/time-picker',
            component: TimePicker
        },
        {
            path: '/date-picker-range',
            component: DatePickerRange
        },
        {
            path: '/color-picker',
            component: ColorPicker
        },
        {
            path: '/toggle',
            component: Switcher
        },
        {
            path: '/radio',
            component: RadioComponent
        },
        {
            path: '/table-input',
            component: TableInput
        }
    ]
});