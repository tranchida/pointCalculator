/**
 * Created with PointCalculator.
 * User: tranchida
 * Date: 2014-11-09
 * Time: 05:53 AM
 * To change this template use Tools | Templates.
 */
Session.setDefault('points', 0);
Session.setDefault('poid', 100);
Template.pointCalculator.helpers({
    'points': function() {
        return Session.get('points')
    },
    'poid': function() {
        return Session.get('poid')
    }
});
Template.autocomplete.rendered = function() {
    Meteor.call('getTags', function(error, result) {
        $("#tags").attr("placeholder", "search for tag");
        $("#tags").autocomplete({
            source: result
        });
    })
};
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