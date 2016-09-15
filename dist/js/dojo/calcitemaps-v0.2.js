/* calcite-maps - v0.0.1 - 2016-06-13
*  https://github.com/alaframboise/calcite-maps#readme
*  Copyright (c) 2016 Environmental Systems Research Institute, Inc.
*  Apache 2.0 License */
define(["dojo/_base/declare","dojo/_base/lang","dojo/query","dojo/dom-class","dojo/domReady!"],function(declare,lang,query,domClass){var CalciteMaps=declare(null,{constructor:function(){this._setNavbarEvents(),this._setTouchEvents()},navbarSelector:".calcite-navbar .calcite-dropdown li > a",navbarToggleTarget:"toggleNavbar",preventOverscrolling:!0,toggleNavbar:function(){domClass.contains(query("body")[0],"calcite-nav-transparent")?query("body").removeClass("calcite-nav-transparent"):(query("body").addClass("calcite-nav-transparent"),query(".calcite-panels .panel.in").collapse("hide"))},_setNavbarEvents:function(){var funcContext=function(e){if(e.currentTarget.dataset.target){var panelBody,panels,panel=query(e.currentTarget.dataset.target);panel.length>0&&domClass.contains(panel[0],"panel")?domClass.contains(panel[0],"in")?(panel.removeClass("in"),panel.collapse("show")):(panels=query(panel).parent().query(".panel.in"),panels.collapse("hide"),query(panels).query(".panel-collapse").collapse("hide"),panel.collapse("show"),panelBody=query(panel).query(".panel-collapse"),domClass.contains(panelBody[0],"in")||query(panelBody[0]).collapse("show")):e.currentTarget.dataset.target===this.navbarToggleTarget&&this.toggleNavbar()}};query(this.navbarSelector).on("click",lang.hitch(this,funcContext)),query(".calcite-dropdown").on("show.bs.dropdown",function(){query(".calcite-dropdown-toggle").addClass("open")}),query(".calcite-dropdown").on("hide.bs.dropdown",function(){query(".calcite-dropdown-toggle").removeClass("open")})},_setTouchEvents:function(){var funcContext=function(e){this.preventOverscrolling&&e.target instanceof SVGSVGElement&&e.preventDefault()};query(".calcite-map").on("touchmove",lang.hitch(this,funcContext))}});return new CalciteMaps});