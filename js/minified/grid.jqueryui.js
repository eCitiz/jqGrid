!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","jquery-ui/dialog","jquery-ui/draggable","jquery-ui/droppable","jquery-ui/resizable","jquery-ui/sortable","./addons/ui.multiselect"],t):t(jQuery)}(function(g){"use strict";var s;g.jgrid.msie()&&8===g.jgrid.msiever()&&(g.expr[":"].hidden=function(t){return 0===t.offsetWidth||0===t.offsetHeight||"none"===t.style.display}),g.jgrid._multiselect=!1,g.ui&&g.ui.multiselect&&(g.ui.multiselect.prototype._setSelected&&(s=g.ui.multiselect.prototype._setSelected,g.ui.multiselect.prototype._setSelected=function(t,e){var i,t=s.call(this,t,e);return e&&this.selectedList&&(i=this.element,this.selectedList.find("li").each(function(){g(this).data("optionLink")&&g(this).data("optionLink").remove().appendTo(i)})),t}),g.ui.multiselect.prototype.destroy&&(g.ui.multiselect.prototype.destroy=function(){this.element.show(),this.container.remove(),(void 0===g.Widget?g.widget:g.Widget).prototype.destroy.apply(this,arguments)}),g.jgrid._multiselect=!0),g.jgrid.extend({sortableColumns:function(n){return this.each(function(){var d=this,t=g.jgrid.jqID(d.p.id),e=!1;function i(){d.p.disableClick=!0,d.p.frozenColumns&&(g(d).jqGrid("destroyFrozenColumns"),e=!0)}function s(){setTimeout(function(){d.p.disableClick=!1,e&&(g(d).jqGrid("setFrozenColumns"),e=!1)},50)}var a,o,t={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+t+"_cb,#jqgh_"+t+"_rn,#jqgh_"+t+"_subgrid),:hidden)",cancel:".sortable-disabled",placeholder:{element:function(t){return g(document.createElement(t[0].nodeName)).addClass(t[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]},update:function(t,e){e.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),e.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}},update:function(t,e){var i=g(e.item).parent(),e=g(">th",i),i=d.p.colModel,s={},a=d.p.id+"_";g.each(i,function(t){s[this.name]=t});var o=[];e.each(function(){var t=g(">div",this).get(0).id.replace(/^jqgh_/,"").replace(a,"");s.hasOwnProperty(t)&&o.push(s[t])}),g(d).jqGrid("remapColumns",o,!0,!0),g.jgrid.isFunction(d.p.sortable.update)&&d.p.sortable.update(o)}};d.p.sortable.options?g.extend(t,d.p.sortable.options):g.jgrid.isFunction(d.p.sortable)&&(d.p.sortable={update:d.p.sortable}),t.start?(a=t.start,t.start=function(t,e){i(),a.call(this,t,e)}):t.start=i,t.stop?(o=t.stop,t.stop=function(t,e){s(),o.call(this,t,e)}):t.stop=s,d.p.sortable.exclude&&(t.items+=":not("+d.p.sortable.exclude+")");t=n.sortable(t),t=t.data("sortable")||t.data("uiSortable");null!=t&&(t.data("sortable").floating=!0)})},columnChooser:function(e){var i,s,a=this,d={},o=[],t=a.jqGrid("getGridParam","colModel"),n=a.jqGrid("getGridParam","colNames"),r=function(t){return g.ui.multiselect.prototype&&t.data(g.ui.multiselect.prototype.widgetFullName||g.ui.multiselect.prototype.widgetName)||t.data("ui-multiselect")||t.data("multiselect")},l=g.jgrid.getRegional(this[0],"col");if(!g("#colchooser_"+g.jgrid.jqID(a[0].p.id)).length){if(i=g('<div id="colchooser_'+a[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),s=g("select",i),e=g.extend({width:400,height:240,classname:null,done:function(t){t&&a.jqGrid("remapColumns",t,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(t){var e={};return e[t.bSubmit]=function(){t.apply_perm(),t.cleanup(!1)},e[t.bCancel]=function(){t.cleanup(!0)},g.extend(!0,{buttons:e,close:function(){t.cleanup(!0)},modal:t.modal||!1,resizable:t.resizable||!0,width:t.width+70,resize:p},t.dialog_opts||{})},apply_perm:function(){var o=[];g("option",s).each(function(){g(this).is(":selected")?a.jqGrid("showCol",t[this.value].name):a.jqGrid("hideCol",t[this.value].name)}),g("option[selected]",s).each(function(){o.push(parseInt(this.value,10))}),g.each(o,function(){delete d[t[parseInt(this,10)].name]}),g.each(d,function(){var t,e,i,s,a=parseInt(this,10);t=o,i=e=a,o=0<=e?(a=(s=t.slice()).splice(e,Math.max(t.length-e,e)),s[e=e>t.length?t.length:e]=i,s.concat(a)):t}),e.done&&e.done.call(a,o),a.jqGrid("setGridWidth",a[0].p.width,a[0].p.shrinkToFit)},cleanup:function(t){u(e.dlog,i,"destroy"),u(e.msel,s,"destroy"),i.remove(),t&&e.done&&e.done.call(a)},msel_opts:{}},l,e||{}),g.ui&&g.ui.multiselect&&g.ui.multiselect.defaults){if(!g.jgrid._multiselect)return void alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");e.msel_opts=g.extend(g.ui.multiselect.defaults,e.msel_opts)}e.caption&&i.attr("title",e.caption),e.classname&&(i.addClass(e.classname),s.addClass(e.classname)),e.width&&(g(">div",i).css({width:e.width,margin:"0 auto"}),s.css("width",e.width)),e.height&&(g(">div",i).css("height",e.height),s.css("height",e.height-10)),s.empty(),g.each(t,function(t){d[this.name]=t,this.hidedlg?this.hidden||o.push(t):s.append("<option value='"+t+"' "+(this.hidden?"":"selected='selected'")+">"+g.jgrid.stripHtml(n[t])+"</option>")}),c=g.jgrid.isFunction(e.dlog_opts)?e.dlog_opts.call(a,e):e.dlog_opts,u(e.dlog,i,c),l=g.jgrid.isFunction(e.msel_opts)?e.msel_opts.call(a,e):e.msel_opts,u(e.msel,s,l);var c=g("#colchooser_"+g.jgrid.jqID(a[0].p.id)),l=g(".ui-jqgrid").css("font-size")||"11px";c.parent().css("font-size",l),c.css({margin:"auto"}),c.find(">div").css({width:"100%",height:"100%",margin:"auto"}),(l=r(s)).container.css({width:"100%",height:"100%",margin:"auto"}),l.selectedContainer.css({width:100*l.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),l.availableContainer.css({width:100-100*l.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),l.selectedList.css("height","auto"),l.availableList.css("height","auto"),c=Math.max(l.selectedList.height(),l.availableList.height()),c=Math.min(c,g(window).height()),l.selectedList.css("height",c),l.availableList.css("height",c),p()}function u(t,e){t&&("string"==typeof t?g.fn[t]&&g.fn[t].apply(e,g.makeArray(arguments).slice(2)):g.jgrid.isFunction(t)&&t.apply(e,g.makeArray(arguments).slice(2)))}function p(){var t=r(s),e=t.container.closest(".ui-dialog-content");0<e.length&&"object"==typeof e[0].style?e[0].style.width="":e.css("width",""),t.selectedList.height(Math.max(t.selectedContainer.height()-t.selectedActions.outerHeight()-1,1)),t.availableList.height(Math.max(t.availableContainer.height()-t.availableActions.outerHeight()-1,1))}},sortableRows:function(a){return this.each(function(){var s=this;s.grid&&(s.p.treeGrid||g.fn.sortable&&((a=g.extend({cursor:"move",axis:"y",items:" > .jqgrow"},a||{})).start&&g.jgrid.isFunction(a.start)?(a._start_=a.start,delete a.start):a._start_=!1,a.update&&g.jgrid.isFunction(a.update)?(a._update_=a.update,delete a.update):a._update_=!1,a.start=function(t,e){if(g(e.item).css("border-width","0"),g("td",e.item).each(function(t){this.style.width=s.grid.cols[t].style.width}),s.p.subGrid){var i=g(e.item).attr("id");try{g(s).jqGrid("collapseSubGridRow",i)}catch(t){}}a._start_&&a._start_.apply(this,[t,e])},a.update=function(t,e){g(e.item).css("border-width",""),!0===s.p.rownumbers&&g("td.jqgrid-rownum",s.rows).each(function(t){g(this).html(t+1+(parseInt(s.p.page,10)-1)*parseInt(s.p.rowNum,10))}),a._update_&&a._update_.apply(this,[t,e])},g(s).find("tbody").first().sortable(a),g("tbody",s).first().find(" > .jqgrow").disableSelection()))})},gridDnD:function(s){return this.each(function(){var t,e,o=this;if(o.grid&&!o.p.treeGrid&&g.fn.draggable&&g.fn.droppable){var h;if(void 0===g("#jqgrid_dnd")[0]&&g("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>"),"string"!=typeof s||"updateDnD"!==s||!0!==o.p.jqgdnd){if((s=g.extend({drag:function(a){return g.extend({start:function(t,e){var i,s;if(o.p.subGrid){s=g(e.helper).attr("id");try{g(o).jqGrid("collapseSubGridRow",s)}catch(t){}}for(i=0;i<g.data(o,"dnd").connectWith.length;i++)0===g(g.data(o,"dnd").connectWith[i]).jqGrid("getGridParam","reccount")&&g(g.data(o,"dnd").connectWith[i]).jqGrid("addRowData","jqg_empty_row",{});e.helper.addClass("ui-state-highlight"),g("td",e.helper).each(function(t){this.style.width=o.grid.headers[t].width+"px"}),a.onstart&&g.jgrid.isFunction(a.onstart)&&a.onstart.call(g(o),t,e)},stop:function(t,e){var i,s;for(e.helper.dropped&&!a.dragcopy&&(void 0===(s=g(e.helper).attr("id"))&&(s=g(this).attr("id")),g(o).jqGrid("delRowData",s)),i=0;i<g.data(o,"dnd").connectWith.length;i++)g(g.data(o,"dnd").connectWith[i]).jqGrid("delRowData","jqg_empty_row");a.onstop&&g.jgrid.isFunction(a.onstop)&&a.onstop.call(g(o),t,e)}},a.drag_opts||{})},drop:function(p){return g.extend({accept:function(t){if(!g(t).hasClass("jqgrow"))return t;h=g(t).closest("table.ui-jqgrid-btable");var e=g(this).find("table.ui-jqgrid-btable").first()[0];if(0<h.length&&void 0!==g.data(h[0],"dnd")){t=g.data(h[0],"dnd").connectWith;return-1!==g.inArray("#"+g.jgrid.jqID(e.id),t)}return!1},drop:function(t,e){if(g(e.draggable).hasClass("jqgrow")){var i,s=g(e.draggable).attr("id"),a=e.draggable.parent().parent().jqGrid("getRowData",s),o=[],d=g(this).find("table.ui-jqgrid-btable").first()[0];if(g.isPlainObject(a)&&(o=Object.keys(a)),!p.dropbyname){var n,r,l={},c=0,u=g("#"+g.jgrid.jqID(d.id)).jqGrid("getGridParam","colModel");try{for(n=0;n<u.length;n++)"cb"!==(r=u[n].name)&&"rn"!==r&&"subgrid"!==r&&(void 0!==o[c]&&(l[r]=a[o[c]]),c++);a=l}catch(t){}}e.helper.dropped=!0,g.data(h[0],"dnd").beforedrop&&g.jgrid.isFunction(g.data(h[0],"dnd").beforedrop)&&(null!=(s=g.data(h[0],"dnd").beforedrop.call(d,t,e,a,g(h[0]),g(d)))&&"object"==typeof s&&(a=s)),e.helper.dropped&&(p.autoid&&(i=g.jgrid.isFunction(p.autoid)?p.autoid.call(d,a):(i=Math.ceil(1e3*Math.random()),p.autoidprefix+i)),g("#"+g.jgrid.jqID(d.id)).jqGrid("addRowData",i,a,p.droppos)),p.ondrop&&g.jgrid.isFunction(p.ondrop)&&p.ondrop.call(d,t,e,a)}}},p.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover",tolerance:"intersect"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},s||{})).connectWith)for(s.connectWith=s.connectWith.split(","),s.connectWith=g.map(s.connectWith,function(t){return g.jgrid.trim(t)}),g.data(o,"dnd",s),0===o.p.reccount||o.p.jqgdnd||i(),o.p.jqgdnd=!0,t=0;t<s.connectWith.length;t++)e=s.connectWith[t],g(e).closest(".ui-jqgrid-bdiv").droppable(g.jgrid.isFunction(s.drop)?s.drop.call(g(o),s):s.drop)}else i()}function i(){var t=g.data(o,"dnd");g("tr.jqgrow:not(.ui-draggable)",o).draggable(g.jgrid.isFunction(t.drag)?t.drag.call(g(o),t):t.drag)}})},gridResize:function(o){return this.each(function(){var i,t,e,s=this,a=g.jgrid.jqID(s.p.id);s.grid&&g.fn.resizable&&((o=g.extend({},{resizeclass:"ui-resizable-icon"},o||{})).alsoResize?(o._alsoResize_=o.alsoResize,delete o.alsoResize):o._alsoResize_=!1,o.stop&&g.jgrid.isFunction(o.stop)?(o._stop_=o.stop,delete o.stop):o._stop_=!1,t=o.resizeclass,"jQueryUI"!==s.p.styleUI&&(o.handles?o.handles.se?t+=" "+o.handles.se.replace(".",""):o.handles.se="."+t:(o.handles={},e=t.split(" "),o.handles.se="."+e[0]),t+=" ui-resizable-se ui-resizable-handle",g("#gbox_"+a).append('<span class="'+t+'"></span>')),o.stop=function(t,e){g(s).jqGrid("setGridParam",{height:g("#gview_"+a+" .ui-jqgrid-bdiv").height()}),g(s).jqGrid("setGridWidth",e.size.width,o.shrinkToFit),o._stop_&&o._stop_.call(s,t,e),s.p.caption&&g("#gbox_"+a).css({height:"auto"}),s.p.frozenColumns&&(i&&clearTimeout(i),i=setTimeout(function(){i&&clearTimeout(i),g("#"+a).jqGrid("destroyFrozenColumns"),g("#"+a).jqGrid("setFrozenColumns")}))},o._alsoResize_?o.alsoResize="#gview_"+a+" .ui-jqgrid-bdiv,"+o._alsoResize_:o.alsoResize=g(".ui-jqgrid-bdiv","#gview_"+a),delete o._alsoResize_,g("#gbox_"+a).resizable(o))})}})});