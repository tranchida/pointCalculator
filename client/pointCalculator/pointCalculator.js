import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './pointCalculator.html';

Session.setDefault('points', 0);
Session.setDefault('poid', 100);

Template.pointCalculator.events({
    'input .nutriment': function(e) {
        const form = e.target.form;
        const proteins = parseFloat(form.proteins.value) || 0;
        const glucides = parseFloat(form.glucides.value) || 0;
        const lipides = parseFloat(form.lipides.value) || 0;
        const fibres = parseFloat(form.fibres.value) || 0;
        const poid = parseFloat(form.poid.value) || 0;
        
        const points = Math.round((proteins / 11 + glucides / 9 + lipides / 4 + fibres / 30) * poid) / 100;
        Session.set("poid", poid);
        Session.set('points', points);
    }
});

Template.pointCalculator.helpers({
    points() {
        return Session.get('points');
    },
    poid() {
        return Session.get('poid');
    }
});