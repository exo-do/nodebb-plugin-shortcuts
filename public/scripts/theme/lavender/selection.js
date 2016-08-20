define("plugin/shortcuts/themes/lavender/selection",["plugin/shortcuts/selection/Area"],function(a){"use strict";return function(b,c){var d={// dropDowns
selector:'[data-toggle="dropdown"]:not([disabled])',isParent:!0,force:!0,// topic- and post-tools get lazy-loaded on-focus
getArea:function(){if(this.parent().is("#header-menu *"))return!1;var b=new a(this.parent());return b.setHooks({selector:">ul>li:not(.divider,.dropdown-header)",focus:d.focus,blur:d.blur,follow:d.follow}),b},focus:{area:function(){this.parent.hasClass("open")||$('[data-toggle="dropdown"]:not([disabled])',this.parent).click(),setTimeout(c.utils.blurFocus,50)},item:function(){var a=this.parent().parent();a.hasClass("open")||$('[data-toggle="dropdown"]:not([disabled])',a).click(),setTimeout(c.utils.blurFocus,50)}},blur:{area:function(){this.parent.hasClass("open")&&$('[data-toggle="dropdown"]:not([disabled])',this.parent).click()}},follow:[function(){$(">*",this).focus()[0].click()}]};c.selection=[{// posts
selector:'[component="post"]',follow:[function(){ajaxify.go("topic/"+ajaxify.data.slug+"/"+(1+this.data("index")))}]},{// topics
selector:'[component="category/topic"]',follow:[function(){var a=this.find('.replies > a[href*="/topic/"]');a.length||(a=$('[component="topic/header"],.topic-title',this)),a.length&&a[0].click()},function(){var a=this.find('[component="topic/header"],.topic-title');a.length&&a[0].click()}]},{// categories
selector:'[component="categories/category"], .subcategories>[data-cid]',follow:[function(){ajaxify.go("category/"+this.data("cid"))}],getClassElement:function(){return $(".category-icon",this)}},{// notifications
selector:".notifications-list>[data-nid]",follow:[function(){var a=this.find("a");a.length&&a[0].click()}]},{// users
selector:".users-container>li",follow:[function(){var a=this.find('a[href*="/user/"]');a.length&&a[0].click()}]},{// groups
selector:'[component="groups/summary"]',getClassElement:function(){return this.children().eq(0)},follow:[function(){var a=this.find(".panel-heading");a.length&&a[0].click()}]},{// tags
selector:".tag-list>.tag-container",follow:[function(){var a=this.find(">a");a.length&&a[0].click()}],getClassElement:function(){return this.find(".tag-item,.tag-topic-count")}},{// chats_recent
selector:'[component="chat/recent"]>li',getClassElement:function(){return this.find(".user-icon,.username")},follow:[function(){this[0].click()}]},{// chats_contacts
selector:'[component="chat/contacts"]>li',getClassElement:function(){return this.find(".user-icon,.username")},follow:[function(){this[0].click()}]},d]}});