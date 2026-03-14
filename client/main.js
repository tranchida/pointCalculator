import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';

// Import jQuery UI from NPM
import 'jquery-ui-dist/jquery-ui';
import 'jquery-ui-dist/jquery-ui.css';

// Expose jQuery globally for older plugins like jquery-ui
window.jQuery = window.$ = $;

import './main.css';
import './index.html';

import './pointCalculator/pointCalculator.html';
import './pointCalculator/pointCalculator.js';
import './autocomplete/autocomplete.html';
import './autocomplete/autocomplete.js';
import './datepicker/datepicker.html';
import './datepicker/datepicker.js';
import './datepicker/datepicker-fr-CH.js';
