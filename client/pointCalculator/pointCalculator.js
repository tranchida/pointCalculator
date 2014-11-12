Session.setDefault('points', 0);
Session.setDefault('poid', 100);

Template.pointCalculator.events({
    'input .nutriment': function(e) {
        var proteins = e.target.form.proteins.value;
        var glucides = e.target.form.glucides.value;
        var lipides = e.target.form.lipides.value;
        var fibres = e.target.form.fibres.value;
        var poid = e.target.form.poid.value;
        var points = Math.round((proteins / 11 + glucides / 9 + lipides / 4 + fibres / 30) * poid) / 100;
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