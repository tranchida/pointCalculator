Template.autocomplete.rendered = function() {
    Meteor.call('getTags', function(error, result) {
        $("#tags").attr("placeholder", "search for tag");
        $("#tags").autocomplete({
            source: result
        });
    })
};
