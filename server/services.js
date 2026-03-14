/**
 * Created with PointCalculator.
 * User: tranchida
 * Date: 2014-11-09
 * Time: 05:55 AM
 * To change this template use Tools | Templates.
 */
import { Meteor } from 'meteor/meteor';

Meteor.methods({
    getTags() {
        return ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
    }
});