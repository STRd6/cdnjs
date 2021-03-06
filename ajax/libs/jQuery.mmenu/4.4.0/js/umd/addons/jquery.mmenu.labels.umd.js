(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(l){function e(e){return"boolean"==typeof e&&(e={collapse:e}),"object"!=typeof e&&(e={}),e=l.extend(!0,{},l[c].defaults[p],e)}function a(l){return l}function s(){i=!0,o=l[c]._c,t=l[c]._d,n=l[c]._e,o.add("collapsed"),t.add("updatelabel"),d=l[c].glbl}var o,t,n,d,c="mmenu",p="labels",i=!1;l[c].prototype["_init_"+p]=function(d){i||s();var c=this.vars[p+"_added"];this.vars[p+"_added"]=!0,c||(this.opts[p]=e(this.opts[p]),this.conf[p]=a(this.conf[p]));var u=this.opts[p];this.conf[p],u.collapse&&(this.__refactorClass(l("li",this.$menu),this.conf.classNames[p].collapsed,"collapsed"),l("."+o.label,d).each(function(){var e=l(this),a=e.nextUntil("."+o.label,"all"==u.collapse?null:"."+o.collapsed);"all"==u.collapse&&(e.addClass(o.opened),a.removeClass(o.collapsed)),a.length&&(e.data(t.updatelabel)||(e.data(t.updatelabel,!0),e.wrapInner("<span />"),e.prepend('<a href="#" class="'+o.subopen+" "+o.fullsubopen+'" />')),e.find("a."+o.subopen).off(n.click).on(n.click,function(l){l.preventDefault(),e.toggleClass(o.opened),a[e.hasClass(o.opened)?"removeClass":"addClass"](o.collapsed)}))}))},l[c].addons.push(p),l[c].defaults[p]={collapse:!1},l[c].configuration.classNames[p]={collapsed:"Collapsed"}}(jQuery);
}));