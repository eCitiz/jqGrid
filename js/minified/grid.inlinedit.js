!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],e):e(jQuery)}(function(D){"use strict";D.jgrid.inlineEdit=D.jgrid.inlineEdit||{},D.jgrid.extend({editRow:function(u,e,i,t,r,a,d,n,o){var p={},s=D.makeArray(arguments).slice(1),f=this[0];return"object"===D.jgrid.type(s[0])?p=s[0]:(void 0!==e&&(p.keys=e),D.jgrid.isFunction(i)&&(p.oneditfunc=i),D.jgrid.isFunction(t)&&(p.successfunc=t),void 0!==r&&(p.url=r),void 0!==a&&(p.extraparam=a),D.jgrid.isFunction(d)&&(p.aftersavefunc=d),D.jgrid.isFunction(n)&&(p.errorfunc=n),D.jgrid.isFunction(o)&&(p.afterrestorefunc=o)),p=D.extend(!0,{keys:!1,keyevent:"keydown",onEnter:null,onEscape:null,oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",focusField:!0,saveui:"enable",savetext:D.jgrid.getRegional(f,"defaults.savetext")},D.jgrid.inlineEdit,p),this.each(function(){var a,d,i,n,e,o=0,s=null,l={},c=D(this).jqGrid("getStyleUI",f.p.styleUI+".inlinedit","inputClass",!0);f.grid&&!1!==(i=D(f).jqGrid("getInd",u,!0))&&(f.p.beforeAction=!0,void 0===(e=D.jgrid.isFunction(p.beforeEditRow)?p.beforeEditRow.call(f,p,u):void 0)&&(e=!0),e?"0"!==(D(i).attr("editable")||"0")||D(i).hasClass("not-editable-row")||(n=f.p.colModel,D(i).children('td[role="gridcell"]').each(function(i){a=n[i].name;var e,t,r=!0===f.p.treeGrid&&a===f.p.ExpandColumn;if(r)d=D("span:first",this).html();else try{d=D.unformat.call(f,this,{rowId:u,colModel:n[i]},i)}catch(e){d=n[i].edittype&&"textarea"===n[i].edittype?D(this).text():D(this).html()}"cb"!==a&&"subgrid"!==a&&"rn"!==a&&(f.p.autoencode&&(d=D.jgrid.htmlDecode(d)),!0===n[i].editable&&(l[a]=d,null===s&&(s=i),(r?D("span:first",this):D(this)).html(""),e=D.extend({},n[i].editoptions||{},{id:u+"_"+a,name:a,rowId:u,oper:"edit",module:"inline"}),n[i].edittype||(n[i].edittype="text"),("&nbsp;"===d||"&#160;"===d||null!==d&&1===d.length&&160===d.charCodeAt(0))&&(d=""),t=D.jgrid.createEl.call(f,n[i].edittype,e,d,!0,D.extend({},D.jgrid.ajaxOptions,f.p.ajaxSelectOptions||{})),D(t).addClass("editable inline-edit-cell"),-1<D.inArray(n[i].edittype,["text","textarea","password","select"])&&D(t).addClass(c),(r?D("span:first",this):D(this)).append(t),D.jgrid.bindEv.call(f,t,e),"select"===n[i].edittype&&void 0!==n[i].editoptions&&!0===n[i].editoptions.multiple&&void 0===n[i].editoptions.dataUrl&&D.jgrid.msie()&&D(t).width(D(t).width()),o++))}),0<o&&(l.id=u,f.p.savedRow.push(l),D(i).attr("editable","1"),p.focusField&&("number"==typeof p.focusField&&parseInt(p.focusField,10)<=n.length&&(s=p.focusField),setTimeout(function(){var e=D("td:eq("+s+") :input:visible",i).not(":disabled");0<e.length&&e.focus()},0)),!0===p.keys&&D(i).on(p.keyevent,function(e){if(27===e.keyCode){if(D.jgrid.isFunction(p.onEscape))return p.onEscape.call(f,u,p,e),!0;if(D(f).jqGrid("restoreRow",u,p),f.p.inlineNav)try{D(f).jqGrid("showAddEditButtons")}catch(e){}return!1}if(13===e.keyCode){if("TEXTAREA"===e.target.tagName)return!0;if(D.jgrid.isFunction(p.onEnter))return p.onEnter.call(f,u,p,e),!0;if(D(f).jqGrid("saveRow",u,p)&&f.p.inlineNav)try{D(f).jqGrid("showAddEditButtons")}catch(e){}return!1}}),D(f).triggerHandler("jqGridInlineEditRow",[u,p]),D.jgrid.isFunction(p.oneditfunc)&&p.oneditfunc.call(f,u))):f.p.beforeAction=!1)})},saveRow:function(d,e,i,t,r,a,n){var o=D.makeArray(arguments).slice(1),s={},l=this[0];"object"===D.jgrid.type(o[0])?s=o[0]:(D.jgrid.isFunction(e)&&(s.successfunc=e),void 0!==i&&(s.url=i),void 0!==t&&(s.extraparam=t),D.jgrid.isFunction(r)&&(s.aftersavefunc=r),D.jgrid.isFunction(a)&&(s.errorfunc=a),D.jgrid.isFunction(n)&&(s.afterrestorefunc=n)),s=D.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",saveui:"enable",savetext:D.jgrid.getRegional(l,"defaults.savetext")},D.jgrid.inlineEdit,s);var c,u,p,f,g=!1,j={},v={},m={},w=!1,h=D.trim(D(l).jqGrid("getStyleUI",l.p.styleUI+".common","error",!0));if(!l.grid)return g;if(!1===(f=D(l).jqGrid("getInd",d,!0)))return g;var y,q,x,R,b,I=D.jgrid.getRegional(l,"errors"),_=D.jgrid.getRegional(l,"edit"),a=D.jgrid.isFunction(s.beforeSaveRow)?s.beforeSaveRow.call(l,s,d):void 0;if(void 0===a&&(a=!0),a){if(n=D(f).attr("editable"),s.url=s.url||l.p.editurl,"1"===n){if(D(f).children('td[role="gridcell"]').each(function(e){if(y=l.p.colModel[e],c=y.name,x="","cb"!==c&&"subgrid"!==c&&!0===y.editable&&"rn"!==c&&!D(this).hasClass("not-editable-cell")){switch(y.edittype){case"checkbox":var i=["Yes","No"];y.editoptions&&y.editoptions.value&&(i=y.editoptions.value.split(":")),j[c]=D("input",this).is(":checked")?i[0]:i[1],x=D("input",this);break;case"text":case"password":case"textarea":case"button":j[c]=D("input, textarea",this).val(),x=D("input, textarea",this);break;case"select":var t;y.editoptions.multiple?(i=D("select",this),t=[],j[c]=D(i).val(),j[c]?j[c]=j[c].join(","):j[c]="",D("select option:selected",this).each(function(e,i){t[e]=D(i).text()}),v[c]=t.join(",")):(j[c]=D("select option:selected",this).val(),v[c]=D("select option:selected",this).text()),y.formatter&&"select"===y.formatter&&(v={}),x=D("select",this);break;case"custom":try{if(!y.editoptions||!D.jgrid.isFunction(y.editoptions.custom_value))throw"e1";if(j[c]=y.editoptions.custom_value.call(l,D(".customelement",this),"get"),void 0===j[c])throw"e2"}catch(e){"e1"===e?D.jgrid.info_dialog(I.errcap,"function 'custom_value' "+_.msg.nodefined,_.bClose,{styleUI:l.p.styleUI}):D.jgrid.info_dialog(I.errcap,e.message,_.bClose,{styleUI:l.p.styleUI})}}if(!1===(p=D.jgrid.checkValues.call(l,j[c],e))[0])return q=e,!1;l.p.autoencode&&(j[c]=D.jgrid.htmlEncode(j[c])),"clientArray"!==s.url&&y.editoptions&&!0===y.editoptions.NullIfEmpty&&""===j[c]&&(m[c]="null",w=!0)}}),!1===p[0]){try{D.jgrid.isFunction(l.p.validationCell)?l.p.validationCell.call(l,x,p[1],f.rowIndex,q):(R=D(l).jqGrid("getGridRowById",d),b=D.jgrid.findPos(R),D.jgrid.info_dialog(I.errcap,p[1],_.bClose,{left:b[0],top:b[1]+D(R).outerHeight(),styleUI:l.p.styleUI,onClose:function(){0<=q&&D("#"+d+"_"+l.p.colModel[q].name).focus()}}))}catch(e){alert(p[1])}return g}var a=l.p.prmNames,G=d,n=!1===l.p.keyName?a.id:l.p.keyName;if(j&&(j[a.oper]=a.editoper,void 0===j[n]||""===j[n]?j[n]=d:f.id!==l.p.idPrefix+j[n]&&(a=D.jgrid.stripPref(l.p.idPrefix,d),void 0!==l.p._index[a]&&(l.p._index[j[n]]=l.p._index[a],delete l.p._index[a]),d=l.p.idPrefix+j[n],D(f).attr("id",d),l.p.selrow===G&&(l.p.selrow=d),!Array.isArray(l.p.selarrrow)||0<=(a=D.inArray(G,l.p.selarrrow))&&(l.p.selarrrow[a]=d),l.p.multiselect&&(C="jqg_"+l.p.id+"_"+d,D("input.cbox",f).attr("id",C).attr("name",C))),void 0===l.p.inlineData&&(l.p.inlineData={}),j=D.extend({},j,l.p.inlineData,s.extraparam)),"clientArray"===s.url){j=D.extend({},j,v),l.p.autoencode&&D.each(j,function(e,i){j[e]=D.jgrid.htmlDecode(i)}),j=D.jgrid.isFunction(l.p.serializeRowData)?l.p.serializeRowData.call(l,j):j;var A,C=D(l).jqGrid("setRowData",d,j);for(D(f).attr("editable","0"),A=0;A<l.p.savedRow.length;A++)if(String(l.p.savedRow[A].id)===String(G)){u=A;break}D(l).triggerHandler("jqGridInlineAfterSaveRow",[d,C,j,s]),D.jgrid.isFunction(s.aftersavefunc)&&s.aftersavefunc.call(l,d,C,j,s),0<=u&&l.p.savedRow.splice(u,1),g=!0,D(f).removeClass("jqgrid-new-row").off("keydown")}else D(l).jqGrid("progressBar",{method:"show",loadtype:s.saveui,htmlcontent:s.savetext}),(m=D.extend({},j,m))[n]=D.jgrid.stripPref(l.p.idPrefix,m[n]),D.ajax(D.extend({url:s.url,data:D.jgrid.isFunction(l.p.serializeRowData)?l.p.serializeRowData.call(l,m):m,type:s.mtype,async:!1,complete:function(e,i){if(D(l).jqGrid("progressBar",{method:"hide",loadtype:s.saveui,htmlcontent:s.savetext}),"success"===i){var t,r=!0,a=D(l).triggerHandler("jqGridInlineSuccessSaveRow",[e,d,s]);if(Array.isArray(a)||(a=[!0,m]),a[0]&&D.jgrid.isFunction(s.successfunc)&&(a=s.successfunc.call(l,e)),Array.isArray(a)?(r=a[0],j=a[1]||j):r=a,!0===r){for(l.p.autoencode&&D.each(j,function(e,i){j[e]=D.jgrid.htmlDecode(i)}),w&&D.each(j,function(e){"null"===j[e]&&(j[e]="")}),j=D.extend({},j,v),D(l).jqGrid("setRowData",d,j),D(f).attr("editable","0"),t=0;t<l.p.savedRow.length;t++)if(String(l.p.savedRow[t].id)===String(d)){u=t;break}D(l).triggerHandler("jqGridInlineAfterSaveRow",[d,e,j,s]),D.jgrid.isFunction(s.aftersavefunc)&&s.aftersavefunc.call(l,d,e,j,s),0<=u&&l.p.savedRow.splice(u,1),g=!0,D(f).removeClass("jqgrid-new-row").off("keydown")}else D(l).triggerHandler("jqGridInlineErrorSaveRow",[d,e,i,null,s]),D.jgrid.isFunction(s.errorfunc)&&s.errorfunc.call(l,d,e,i,null),!0===s.restoreAfterError&&D(l).jqGrid("restoreRow",d,s)}},error:function(e,i,t){if(D("#lui_"+D.jgrid.jqID(l.p.id)).hide(),D(l).triggerHandler("jqGridInlineErrorSaveRow",[d,e,i,t,s]),D.jgrid.isFunction(s.errorfunc))s.errorfunc.call(l,d,e,i,t);else{var r=e.responseText||e.statusText;try{D.jgrid.info_dialog(I.errcap,'<div class="'+h+'">'+r+"</div>",_.bClose,{buttonalign:"right",styleUI:l.p.styleUI})}catch(e){alert(r)}}!0===s.restoreAfterError&&D(l).jqGrid("restoreRow",d,s)}},D.jgrid.ajaxOptions,l.p.ajaxRowOptions||{}))}return g}},restoreRow:function(n,e){var i=D.makeArray(arguments).slice(1),o={};return"object"===D.jgrid.type(i[0])?o=i[0]:D.jgrid.isFunction(e)&&(o.afterrestorefunc=e),o=D.extend(!0,{},D.jgrid.inlineEdit,o),this.each(function(){var e,i,t=this,r=-1,a={};if(t.grid&&!1!==(e=D(t).jqGrid("getInd",n,!0))){var d=D.jgrid.isFunction(o.beforeCancelRow)?o.beforeCancelRow.call(t,o,n):void 0;if(void 0===d&&(d=!0),d){for(i=0;i<t.p.savedRow.length;i++)if(String(t.p.savedRow[i].id)===String(n)){r=i;break}if(0<=r){if(D.jgrid.isFunction(D.fn.datepicker))try{D("input.hasDatepicker","#"+D.jgrid.jqID(e.id)).datepicker("hide")}catch(e){}D.each(t.p.colModel,function(){t.p.savedRow[r].hasOwnProperty(this.name)&&(a[this.name]=t.p.savedRow[r][this.name])}),D(t).jqGrid("setRowData",n,a),D(e).attr("editable","0").off("keydown"),t.p.savedRow.splice(r,1),D("#"+D.jgrid.jqID(n),"#"+D.jgrid.jqID(t.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){D(t).jqGrid("delRowData",n),D(t).jqGrid("showAddEditButtons")},0)}D(t).triggerHandler("jqGridInlineAfterRestoreRow",[n]),D.jgrid.isFunction(o.afterrestorefunc)&&o.afterrestorefunc.call(t,n)}}})},addRow:function(r){return r=D.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},r||{}),this.each(function(){var i,e,t;this.grid&&((i=this).p.beforeAction=!0,void 0===(t=D.jgrid.isFunction(r.beforeAddRow)?r.beforeAddRow.call(i,r.addRowParams):void 0)&&(t=!0),t?(r.rowID=D.jgrid.isFunction(r.rowID)?r.rowID.call(i,r):null!=r.rowID?r.rowID:D.jgrid.randId(),!0===r.useDefValues&&D(i.p.colModel).each(function(){var e;this.editoptions&&this.editoptions.defaultValue&&(e=this.editoptions.defaultValue,e=D.jgrid.isFunction(e)?e.call(i):e,r.initdata[this.name]=e)}),D(i).jqGrid("addRowData",r.rowID,r.initdata,r.position),r.rowID=i.p.idPrefix+r.rowID,D("#"+D.jgrid.jqID(r.rowID),"#"+D.jgrid.jqID(i.p.id)).addClass("jqgrid-new-row"),r.useFormatter?D("#"+D.jgrid.jqID(r.rowID)+" .ui-inline-edit","#"+D.jgrid.jqID(i.p.id)).click():(t=(e=i.p.prmNames).oper,r.addRowParams.extraparam[t]=e.addoper,D(i).jqGrid("editRow",r.rowID,r.addRowParams),D(i).jqGrid("setSelection",r.rowID))):i.p.beforeAction=!1)})},inlineNav:function(d,n){var o=this[0],s=D.jgrid.getRegional(o,"nav"),e=D.jgrid.styleUI[o.p.styleUI].inlinedit;return n=D.extend(!0,{edit:!0,editicon:e.icon_edit_nav,add:!0,addicon:e.icon_add_nav,save:!0,saveicon:e.icon_save_nav,cancel:!0,cancelicon:e.icon_cancel_nav,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0,saveAfterSelect:!1},s,n||{}),this.each(function(){if(this.grid&&!this.p.inlineNav){var a=D.jgrid.jqID(o.p.id),i=D.trim(D(o).jqGrid("getStyleUI",o.p.styleUI+".common","disabled",!0));if(o.p.navGrid||D(o).jqGrid("navGrid",d,{refresh:!1,edit:!1,add:!1,del:!1,search:!1,view:!1}),D(o).data("inlineNav")||D(o).data("inlineNav",n),o.p.force_regional&&(n=D.extend(n,s)),(o.p.inlineNav=!0)===n.addParams.useFormatter)for(var e,t=o.p.colModel,r=0;r<t.length;r++)if(t[r].formatter&&"actions"===t[r].formatter){t[r].formatoptions&&(e=D.extend({keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},t[r].formatoptions),n.addParams.addRowParams={keys:e.keys,oneditfunc:e.onEdit,successfunc:e.onSuccess,url:e.url,extraparam:e.extraparam,aftersavefunc:e.afterSave,errorfunc:e.onError,afterrestorefunc:e.afterRestore});break}n.add&&D(o).jqGrid("navButtonAdd",d,{caption:n.addtext,title:n.addtitle,buttonicon:n.addicon,id:o.p.id+"_iladd",internal:!0,onClickButton:function(){void 0===o.p.beforeAction&&(o.p.beforeAction=!0),D(o).jqGrid("addRow",n.addParams),!n.addParams.useFormatter&&o.p.beforeAction&&(D("#"+a+"_ilsave").removeClass(i),D("#"+a+"_ilcancel").removeClass(i),D("#"+a+"_iladd").addClass(i),D("#"+a+"_iledit").addClass(i))}}),n.edit&&D(o).jqGrid("navButtonAdd",d,{caption:n.edittext,title:n.edittitle,buttonicon:n.editicon,id:o.p.id+"_iledit",internal:!0,onClickButton:function(){var e=D(o).jqGrid("getGridParam","selrow");e?(void 0===o.p.beforeAction&&(o.p.beforeAction=!0),D(o).jqGrid("editRow",e,n.editParams),o.p.beforeAction&&(D("#"+a+"_ilsave").removeClass(i),D("#"+a+"_ilcancel").removeClass(i),D("#"+a+"_iladd").addClass(i),D("#"+a+"_iledit").addClass(i))):(D.jgrid.viewModal("#alertmod_"+a,{gbox:"#gbox_"+a,jqm:!0}),D("#jqg_alrt").focus())}}),n.save&&(D(o).jqGrid("navButtonAdd",d,{caption:n.savetext||"",title:n.savetitle||"Save row",buttonicon:n.saveicon,id:o.p.id+"_ilsave",internal:!0,onClickButton:function(){var e,i,t,r=o.p.savedRow[0].id;r?(i=(e=o.p.prmNames).oper,t=n.editParams,D("#"+D.jgrid.jqID(r),"#"+a).hasClass("jqgrid-new-row")?(n.addParams.addRowParams.extraparam[i]=e.addoper,t=n.addParams.addRowParams):(n.editParams.extraparam||(n.editParams.extraparam={}),n.editParams.extraparam[i]=e.editoper),D(o).jqGrid("saveRow",r,t)&&D(o).jqGrid("showAddEditButtons")):(D.jgrid.viewModal("#alertmod_"+a,{gbox:"#gbox_"+a,jqm:!0}),D("#jqg_alrt").focus())}}),D("#"+a+"_ilsave").addClass(i)),n.cancel&&(D(o).jqGrid("navButtonAdd",d,{caption:n.canceltext||"",title:n.canceltitle||"Cancel row editing",buttonicon:n.cancelicon,id:o.p.id+"_ilcancel",internal:!0,onClickButton:function(){var e=o.p.savedRow[0].id,i=n.editParams;e?(D("#"+D.jgrid.jqID(e),"#"+a).hasClass("jqgrid-new-row")&&(i=n.addParams.addRowParams),D(o).jqGrid("restoreRow",e,i),D(o).jqGrid("showAddEditButtons")):(D.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+a,jqm:!0}),D("#jqg_alrt").focus())}}),D("#"+a+"_ilcancel").addClass(i)),!0!==n.restoreAfterSelect&&!0!==n.saveAfterSelect||D(o).on("jqGridBeforeSelectRow.inlineNav",function(e,i){0<o.p.savedRow.length&&!0===o.p.inlineNav&&i!==o.p.selrow&&null!==o.p.selrow&&(i=!0,o.p.selrow===n.addParams.rowID?D(o).jqGrid("delRowData",o.p.selrow):!0===n.restoreAfterSelect?D(o).jqGrid("restoreRow",o.p.selrow,n.editParams):i=D(o).jqGrid("saveRow",o.p.selrow,n.editParams),i&&D(o).jqGrid("showAddEditButtons"))})}})},showAddEditButtons:function(){return this.each(function(){var e,i;this.grid&&(e=D.jgrid.jqID(this.p.id),i=D.trim(D(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0)),D("#"+e+"_ilsave").addClass(i),D("#"+e+"_ilcancel").addClass(i),D("#"+e+"_iladd").removeClass(i),D("#"+e+"_iledit").removeClass(i))})},showSaveCancelButtons:function(){return this.each(function(){var e,i;this.grid&&(e=D.jgrid.jqID(this.p.id),i=D.trim(D(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0)),D("#"+e+"_ilsave").removeClass(i),D("#"+e+"_ilcancel").removeClass(i),D("#"+e+"_iladd").addClass(i),D("#"+e+"_iledit").addClass(i))})}})});