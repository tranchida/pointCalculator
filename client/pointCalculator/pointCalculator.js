Session.setDefault('points', 0);
Session.setDefault('poid', 100);

Template.pointCalculator.events({
    'input .nutriment': function(e) {
        proteins = e.target.form.proteins.value;
        glucides = e.target.form.glucides.value;
        lipides = e.target.form.lipides.value;
        fibres = e.target.form.fibres.value;
        poid = e.target.form.poid.value;
        points = Math.round((proteins / 11 + glucides / 9 + lipides / 4 + fibres / 30) * poid) / 100;
        Session.set("poid", poid);
        Session.set('points', points);
    }
});

Template.pointCalculator.helpers({
    'points': function() {
        return Session.get('points')
    },
    'poid': function() {
        return Session.get('poid')
    }
});