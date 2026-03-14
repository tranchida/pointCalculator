/**
 * Created with PointCalculator.
 * User: tranchida
 * Date: 2014-11-13
 * Time: 04:55 AM
 * To change this template use Tools | Templates.
 */
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './datepicker.html';

Template.datepicker.onRendered(function() {
    $( "#datepicker" ).datepicker($.datepicker.regional[ "fr-CH" ]);
});