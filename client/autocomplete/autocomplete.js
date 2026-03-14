import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './autocomplete.html';

Template.autocomplete.onRendered(function() {
    Meteor.call('getTags', (error, result) => {
        if (error) {
            console.error(error);
            return;
        }
        $("#tags").attr("placeholder", "search for tag");
        $("#tags").autocomplete({
            source: result
        });
    });
});

