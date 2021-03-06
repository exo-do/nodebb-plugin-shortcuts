!function(){"use strict";var a=$(document);
// define module to provide main instance of Core (e.g. for other plugins to extend actions, etc.)
define("plugin/shortcuts/main",["plugin/shortcuts/debug","plugin/shortcuts/Core"],function(b,c){var d=$.Deferred();return socket.emit("plugins.shortcuts",null,function(e,f){if(null!=e)return d.reject(e),b.error(e);var g=f.settings;b.log("Settings",g),a.ready(function(){if(!app.inAdmin){
// apply styles to document
var a=".shortcuts-selection { box-shadow:0 0 5px 1px "+g.selectionColor+" !important; }";$('<style type="text/css" id="styles-shortcuts">'+a+"</style>").appendTo("head")}
// create main instance
var b=new c(g);
d.resolve(b)})}),d}),a.ready(function(){require(["plugin/shortcuts/debug","plugin/shortcuts/main","plugin/shortcuts/theme-defaults"],function(b,c,d){c.done(function(c){function e(a){
// add theme related actions
var b={};d(c,b),"function"==typeof a&&a(c,b);
var e="";for(var f in b.selection)b.selection.hasOwnProperty(f)&&(e+=(b.selection[f].selector+=":visible")+",");
b.itemSelectorsJoined=e.substring(0,e.length-1),c.attachTheme(b)}function f(a){
// create new selection instance
var b=new a;$(window).on("action:ajaxify.start",function(){b.reset()}),$(window).on("action:ajaxify.end",function(){b.reset(b.refreshAreas())}),
// add selection related actions
//noinspection JSUnusedGlobalSymbols
c.mergeActions({selection:{release:function(){return b.deselect()},follow:function(){return b.triggerAction(0)},highlight:function(){return b.highlight()},item:{next:function(){return null==b.active.area?b.selectNextArea(0):b.selectNextItem(1)},prev:function(){return null==b.active.area?b.selectNextArea(0):b.selectNextItem(-1)}},area:{next:function(){return b.selectNextArea(1)},prev:function(){return b.selectNextArea(-1)}}}}),c.prependToAction("body.focus",function(){return b.deselect()}),b.attachTheme(c.theme)}
// resolve theme module
var g=["lavender","persona","exodus"],h=config["theme:id"].substring("nodebb-theme-".length);app.inAdmin?(b.log("In ACP."),e(),c.startWatching(a)):~g.indexOf(h)?(b.log("Theme detected.",h),require(["plugin/shortcuts/themes/persona/main","plugin/shortcuts/selection/Selection"],function(b,d){e(b),f(d),c.startWatching(a)})):b.error("Theme not supported.",h)})})})}();
