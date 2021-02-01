!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],e):e(jQuery)}(function(M){"use strict";M.fn.jqFilter=function(e){if("string"==typeof e){var t=M.fn.jqFilter[e];if(!t)throw"jqFilter - No such method: "+e;var r=M.makeArray(arguments).slice(1);return t.apply(this,r)}var x=M.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,uniqueSearchFields:!1,direction:"ltr",addsubgrup:"Add subgroup",addrule:"Add rule",delgroup:"Delete group",delrule:"Delete rule",autoencode:!1,unaryOperations:[]},M.jgrid.filter,e||{});return this.each(function(){if(!this.filter){this.p=x,null!==this.p.filter&&void 0!==this.p.filter||(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&M.jgrid.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var e,t,r=this.p.columns.length,j=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=M.extend(!0,{},this.p.filter),r){for(e=0;e<r;e++)(t=this.p.columns[e]).stype?t.inputtype=t.stype:t.inputtype||(t.inputtype="text"),t.sorttype?t.searchtype=t.sorttype:t.searchtype||(t.searchtype="string"),void 0===t.hidden&&(t.hidden=!1),t.label||(t.label=t.name),t.index&&(t.name=t.index),t.hasOwnProperty("searchoptions")||(t.searchoptions={}),t.hasOwnProperty("searchrules")||(t.searchrules={}),void 0===t.search?t.inlist=!0:t.inlist=t.search;var S=function(){return M("#"+M.jgrid.jqID(x.id))[0]||null},a=S(),F=M.jgrid.styleUI[a.p.styleUI||"jQueryUI"].filter,O=M.jgrid.styleUI[a.p.styleUI||"jQueryUI"].common;this.p.showQuery&&M(this).append("<table class='queryresult "+F.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var o=function(e,t){var r=[!0,""],a=S();if(M.jgrid.isFunction(t.searchrules))r=t.searchrules.call(a,e,t);else if(M.jgrid&&M.jgrid.checkValues)try{r=M.jgrid.checkValues.call(a,e,-1,t.searchrules,t.label)}catch(e){}r&&r.length&&!1===r[0]&&(x.error=!r[0],x.errmsg=r[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",!!M.jgrid.isFunction(this.p.onChange)&&this.p.onChange.call(this,this.p)},this.reDraw=function(){M("table.group:first",this).remove();var e=this.createTableForGroup(x.filter,null);M(this).append(e),M.jgrid.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(a,e){var s=this,t=M("<table class='group "+F.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),r="left";"rtl"===this.p.direction&&(r="right",t.attr("dir","rtl")),null===e&&t.append("<tr class='error' style='display:none;'><th colspan='5' class='"+O.error+"' align='"+r+"'></th></tr>");var i=M("<tr></tr>");t.append(i);r=M("<th colspan='5' align='"+r+"'></th>");if(i.append(r),!0===this.p.ruleButtons){var o=M("<select size='1' class='opsel "+F.srSelect+"'></select>");r.append(o);for(var l,n="",p=0;p<x.groupOps.length;p++)l=a.groupOp===s.p.groupOps[p].op?" selected='selected'":"",n+="<option value='"+s.p.groupOps[p].op+"'"+l+">"+s.p.groupOps[p].text+"</option>";o.append(n).on("change",function(){a.groupOp=M(o).val(),s.onchange()})}var c,u,i="<span></span>";if(this.p.groupButton&&(i=M("<input type='button' value='+ {}' title='"+s.p.subgroup+"' class='add-group "+O.button+"'/>")).on("click",function(){return void 0===a.groups&&(a.groups=[]),a.groups.push({groupOp:x.groupOps[0].op,rules:[],groups:[]}),s.reDraw(),s.onchange(),!1}),r.append(i),!0===this.p.ruleButtons&&((u=M("<input type='button' value='+' title='"+s.p.addrule+"' class='add-rule ui-add "+O.button+"'/>")).on("click",function(){for(void 0===a.rules&&(a.rules=[]),p=0;p<s.p.columns.length;p++){var e=void 0===s.p.columns[p].search||s.p.columns[p].search,t=!0===s.p.columns[p].hidden;if(!0===s.p.columns[p].searchoptions.searchhidden&&e||e&&!t){c=s.p.columns[p];break}}if(!c)return!1;var r=c.searchoptions.sopt||s.p.sopt||(-1!==M.inArray(c.searchtype,s.p.strarr)?s.p.stropts:s.p.numopts);return a.rules.push({field:c.name,op:r[0],data:""}),s.reDraw(),!1}),r.append(u)),null!==e&&(u=M("<input type='button' value='-' title='"+s.p.delgroup+"' class='delete-group "+O.button+"'/>"),r.append(u),u.on("click",function(){for(p=0;p<e.groups.length;p++)if(e.groups[p]===a){e.groups.splice(p,1);break}return s.reDraw(),s.onchange(),!1})),void 0!==a.groups)for(p=0;p<a.groups.length;p++){var d=M("<tr></tr>");t.append(d);var h=M("<td class='first'></td>");d.append(h);h=M("<td colspan='4'></td>");h.append(this.createTableForGroup(a.groups[p],a)),d.append(h)}void 0===a.groupOp&&(a.groupOp=s.p.groupOps[0].op);var g=s.p.ruleButtons&&s.p.uniqueSearchFields;if(g)for(m=0;m<s.p.columns.length;m++)s.p.columns[m].inlist&&(s.p.columns[m].search=!0);if(void 0!==a.rules)for(p=0;p<a.rules.length;p++)if(t.append(this.createTableRowForRule(a.rules[p],a)),g)for(var f=a.rules[p].field,m=0;m<s.p.columns.length;m++)if(f===s.p.columns[m].name){s.p.columns[m].search=!1;break}return t},this.createTableRowForRule=function(i,e){var o,l,n,t,p=this,c=S(),r=M("<tr></tr>"),a="";r.append("<td class='first'></td>");var s=M("<td class='columns'></td>");r.append(s);var u,d=M("<select size='1' class='"+F.srSelect+"'></select>"),h=[];s.append(d),d.on("change",function(){var e;for(p.p.ruleButtons&&p.p.uniqueSearchFields&&(e=parseInt(M(this).data("curr"),10),r=this.selectedIndex,0<=e&&(p.p.columns[e].search=!0,M(this).data("curr",r),p.p.columns[r].search=!1)),i.field=M(d).val(),l=M(this).parents("tr:first"),M(".data",l).empty(),f=0;f<p.p.columns.length;f++)if(p.p.columns[f].name===i.field){n=p.p.columns[f];break}if(n){n.searchoptions.id=M.jgrid.randId(),n.searchoptions.name=i.field,n.searchoptions.oper="filter",j&&"text"===n.inputtype&&(n.searchoptions.size||(n.searchoptions.size=10));var t=M.jgrid.createEl.call(c,n.inputtype,n.searchoptions,"",!0,p.p.ajaxSelectOptions||{},!0);M(t).addClass("input-elm "+F.srInput),o=n.searchoptions.sopt||p.p.sopt||(-1!==M.inArray(n.searchtype,p.p.strarr)?p.p.stropts:p.p.numopts);var r,a="",s=0;for(h=[],M.each(p.p.ops,function(){h.push(this.oper)}),f=0;f<o.length;f++)-1!==(u=M.inArray(o[f],h))&&(0===s&&(i.op=p.p.ops[u].oper),a+="<option value='"+p.p.ops[u].oper+"'>"+p.p.ops[u].text+"</option>",s++);M(".selectopts",l).empty().append(a),M(".selectopts",l)[0].selectedIndex=0,M.jgrid.msie()&&M.jgrid.msiever()<9&&(r=parseInt(M("select.selectopts",l)[0].offsetWidth,10)+1,M(".selectopts",l).width(r),M(".selectopts",l).css("width","auto")),M(".data",l).append(t),M.jgrid.bindEv.call(c,t,n.searchoptions),M(".input-elm",l).on("change",function(e){e=e.target;"custom"===n.inputtype&&M.jgrid.isFunction(n.searchoptions.custom_value)?i.data=n.searchoptions.custom_value.call(c,M(".customelement",this),"get"):i.data=M(e).val(),"select"===n.inputtype&&n.searchoptions.multiple&&(i.data=i.data.join(",")),p.onchange()}),setTimeout(function(){i.data=M(t).val(),("nu"===i.op||"nn"===i.op||0<=M.inArray(i.op,p.p.unaryOperations))&&(M(t).attr("readonly","true"),M(t).attr("disabled","true")),"select"===n.inputtype&&n.searchoptions.multiple&&Array.isArray(i.data)&&(i.data=i.data.join(",")),p.onchange()},0)}});for(var g=0,f=0;f<p.p.columns.length;f++){var m=void 0===p.p.columns[f].search||p.p.columns[f].search,y=!0===p.p.columns[f].hidden;(!0===p.p.columns[f].searchoptions.searchhidden&&m||m&&!y)&&(t="",i.field===p.p.columns[f].name&&(t=" selected='selected'",g=f),a+="<option value='"+p.p.columns[f].name+"'"+t+">"+p.p.columns[f].label+"</option>")}d.append(a),d.data("curr",g);var v=M("<td class='operators'></td>");r.append(v),(n=x.columns[g]).searchoptions.id=M.jgrid.randId(),j&&"text"===n.inputtype&&(n.searchoptions.size||(n.searchoptions.size=10)),n.searchoptions.name=i.field,n.searchoptions.oper="filter";s=M.jgrid.createEl.call(c,n.inputtype,n.searchoptions,i.data,!0,p.p.ajaxSelectOptions||{},!0);("nu"===i.op||"nn"===i.op||0<=M.inArray(i.op,p.p.unaryOperations))&&(M(s).attr("readonly","true"),M(s).attr("disabled","true"));var b=M("<select size='1' class='selectopts "+F.srSelect+"'></select>");for(v.append(b),b.on("change",function(){i.op=M(b).val(),l=M(this).parents("tr:first");var e=M(".input-elm",l)[0];"nu"===i.op||"nn"===i.op||0<=M.inArray(i.op,p.p.unaryOperations)?(i.data="","SELECT"!==e.tagName.toUpperCase()&&(e.value=""),e.setAttribute("readonly","true"),e.setAttribute("disabled","true")):("SELECT"===e.tagName.toUpperCase()&&(i.data=e.value),e.removeAttribute("readonly"),e.removeAttribute("disabled")),p.onchange()}),o=n.searchoptions.sopt||p.p.sopt||(-1!==M.inArray(n.searchtype,p.p.strarr)?p.p.stropts:p.p.numopts),a="",M.each(p.p.ops,function(){h.push(this.oper)}),f=0;f<o.length;f++)-1!==(u=M.inArray(o[f],h))&&(t=i.op===p.p.ops[u].oper?" selected='selected'":"",a+="<option value='"+p.p.ops[u].oper+"'"+t+">"+p.p.ops[u].text+"</option>");b.append(a);v=M("<td class='data'></td>");r.append(v),v.append(s),M.jgrid.bindEv.call(c,s,n.searchoptions),M(s).addClass("input-elm "+F.srInput).on("change",function(){i.data="custom"===n.inputtype?n.searchoptions.custom_value.call(c,M(".customelement",this),"get"):M(this).val(),p.onchange()});v=M("<td></td>");return r.append(v),!0===this.p.ruleButtons&&(s=M("<input type='button' value='-' title='"+p.p.delrule+"' class='delete-rule ui-del "+O.button+"'/>"),v.append(s),s.on("click",function(){for(f=0;f<e.rules.length;f++)if(e.rules[f]===i){e.rules.splice(f,1);break}return p.reDraw(),p.onchange(),!1})),r},this.getStringForGroup=function(e){var t,r="(";if(void 0!==e.groups)for(t=0;t<e.groups.length;t++){1<r.length&&(r+=" "+e.groupOp+" ");try{r+=this.getStringForGroup(e.groups[t])}catch(e){alert(e)}}if(void 0!==e.rules)try{for(t=0;t<e.rules.length;t++)1<r.length&&(r+=" "+e.groupOp+" "),r+=this.getStringForRule(e.rules[t])}catch(e){alert(e)}return"()"===(r+=")")?"":r},this.getStringForRule=function(e){for(var t,r,a="",s="",i=0;i<this.p.ops.length;i++)if(this.p.ops[i].oper===e.op){a=this.p.operands.hasOwnProperty(e.op)?this.p.operands[e.op]:"",s=this.p.ops[i].oper;break}for(i=0;i<this.p.columns.length;i++)if(this.p.columns[i].name===e.field){t=this.p.columns[i];break}return void 0===t?"":(r=this.p.autoencode?M.jgrid.htmlEncode(e.data):e.data,"bw"!==s&&"bn"!==s||(r+="%"),"ew"!==s&&"en"!==s||(r="%"+r),"cn"!==s&&"nc"!==s||(r="%"+r+"%"),"in"!==s&&"ni"!==s||(r=" ("+r+")"),x.errorcheck&&o(e.data,t),-1!==M.inArray(t.searchtype,["int","integer","float","number","currency"])||"nn"===s||"nu"===s||0<=M.inArray(e.op,this.p.unaryOperations)?e.field+" "+a+" "+r:e.field+" "+a+' "'+r+'"')},this.resetFilter=function(){this.p.filter=M.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){M("th."+O.error,this).html(""),M("tr.error",this).hide()},this.showError=function(){M("th."+O.error,this).html(this.p.errmsg),M("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(x.filter)},this.toString=function(){var s=this;return function e(t){var r,a="(";if(void 0!==t.groups)for(r=0;r<t.groups.length;r++)1<a.length&&("OR"===t.groupOp?a+=" || ":a+=" && "),a+=e(t.groups[r]);if(void 0!==t.rules)for(r=0;r<t.rules.length;r++)1<a.length&&("OR"===t.groupOp?a+=" || ":a+=" && "),a+=function(e){if(s.p.errorcheck){for(var t,r=0;r<s.p.columns.length;r++)if(s.p.columns[r].name===e.field){t=s.p.columns[r];break}t&&o(e.data,t)}return e.op+"(item."+e.field+",'"+e.data+"')"}(t.rules[r]);return"()"==(a+=")")?"":a}(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},M.extend(M.fn.jqFilter,{toSQLString:function(){var e="";return this.each(function(){e=this.toUserFriendlyString()}),e},filterData:function(){var e;return this.each(function(){e=this.p.filter}),e},getParameter:function(r){var a=null;return void 0!==r&&this.each(function(e,t){t.p.hasOwnProperty(r)&&(a=t.p[r])}),a||this[0].p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(e){"string"==typeof e&&(e=M.jgrid.parse(e)),this.each(function(){this.p.filter=e,this.reDraw(),this.onchange()})}}),M.extend(M.jgrid,{filterRefactor:function(e){var t,r,a,s,i,o={};try{if((o="string"==typeof e.ruleGroup?M.jgrid.parse(e.ruleGroup):e.ruleGroup).rules&&o.rules.length)for(t=o.rules,r=0;r<t.length;r++)a=t[r],M.inArray(a.filed,e.ssfield)&&1<(s=a.data.split(e.splitSelect)).length&&(void 0===o.groups&&(o.groups=[]),i={groupOp:e.groupOpSelect,groups:[],rules:[]},o.groups.push(i),M.each(s,function(e){s[e]&&i.rules.push({data:s[e],op:a.op,field:a.field})}),t.splice(r,1),r--)}catch(e){}return o}}),M.jgrid.extend({filterToolbar:function(q){var r=M.jgrid.getRegional(this[0],"search");return q=M.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,onClearSearchValue:null,url:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",splitSelect:",",groupOpSelect:"OR",errorcheck:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^",in:"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#",bt:"..."},disabledKeys:[9,16,17,18,19,20,33,34,35,36,37,38,39,30,45,112,113,114,115,116,117,118,119,120,121,122,123,144,145]},r,q||{}),this.each(function(){var O=this,x=[];if(!O.p.filterToolbar){if(M(O).data("filterToolbar")||M(O).data("filterToolbar",q),O.p.force_regional&&(q=M.extend(q,r)),void 0!==O.p.customFilterDef)for(var e in O.p.customFilterDef)O.p.customFilterDef.hasOwnProperty(e)&&!q.operands.hasOwnProperty(e)&&(q.odata.push({oper:e,text:O.p.customFilterDef[e].text}),q.operands[e]=O.p.customFilterDef[e].operand,!0===O.p.customFilterDef[e].unary&&x.push(e));var g,f,t,m=M.jgrid.styleUI[O.p.styleUI||"jQueryUI"].filter,u=M.jgrid.styleUI[O.p.styleUI||"jQueryUI"].common,y=M.jgrid.styleUI[O.p.styleUI||"jQueryUI"].base,v=function(){var t,r,a,s,i={},o=0,l={},n=!1,p=[],c=!1,u=[!0,"",""],d=!1;if(M.each(O.p.colModel,function(){var e=M("#gs_"+O.p.idPrefix+M.jgrid.jqID(this.name),!0===this.frozen&&!0===O.p.frozenColumns?O.grid.fhDiv:O.grid.hDiv);if(r=this.index||this.name,s=this.searchoptions||{},a=q.searchOperators&&s.searchOperMenu?e.parents("table.ui-search-table").find("td.ui-search-oper").children("a").attr("soper")||q.defaultSearch:s.sopt?s.sopt[0]:"select"===this.stype?"eq":q.defaultSearch,t="custom"===this.stype&&M.jgrid.isFunction(s.custom_value)&&0<e.length?s.custom_value.call(O,e,"get"):e.val(),"select"===this.stype&&s.multiple&&Array.isArray(t)&&(t=0<t.length?(n=!0,p.push(r),1===t.length?t[0]:t):""),this.searchrules&&q.errorcheck&&(M.jgrid.isFunction(this.searchrules)?u=this.searchrules.call(O,t,this):M.jgrid&&M.jgrid.checkValues&&(u=M.jgrid.checkValues.call(O,t,-1,this.searchrules,this.label||this.name)),u&&u.length&&!1===u[0]))return this.searchrules.hasOwnProperty("validationError")&&(d=this.searchrules.validationError),!1;if("bt"===a&&(c=!0),t||"nu"===a||"nn"===a||0<=M.inArray(a,x))i[r]=t,l[r]=a,o++;else try{delete O.p.postData[r]}catch(e){}}),!1!==u[0]){var e,h=0<o;if(!0===q.stringResult||"local"===O.p.datatype||!0===q.searchOperators){var g,f,m,y,v,b,j='{"groupOp":"'+q.groupOp+'","rules":[',S=0;if(M.each(i,function(e,t){0<S&&(j+=","),j+='{"field":"'+e+'",',j+='"op":"'+l[e]+'",',j+='"data":"'+(t+="").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',S++}),j+="]}",n&&(g=M.jgrid.filterRefactor({ruleGroup:j,ssfield:p,splitSelect:q.splitSelect,groupOpSelect:q.groupOpSelect}),j=JSON.stringify(g)),c&&(M.isPlainObject(g)||(g=M.jgrid.parse(j)),g.rules&&g.rules.length))for(f=g.rules,m=0;m<f.length;m++)"bt"===(y=f[m]).op&&1<(v=y.data.split("...")).length&&(void 0===g.groups&&(g.groups=[]),b={groupOp:"AND",groups:[],rules:[]},g.groups.push(b),M.each(v,function(e){var t=0===e?"ge":"le";v[e]&&b.rules.push({data:v[e],op:t,field:y.field})}),f.splice(m,1),m--);(c||n)&&(j=JSON.stringify(g)),!0===O.p.mergeSearch&&O.p.searchModules.hasOwnProperty("filterToolbar")&&!1!==O.p.searchModules.filterToolbar?(O.p.searchModules.filterToolbar=0<S?j:null,h=!0,M.extend(O.p.postData,{filters:M.jgrid.splitSearch(O.p.searchModules)})):M.extend(O.p.postData,{filters:j}),M.each(["searchField","searchString","searchOper"],function(e,t){O.p.postData.hasOwnProperty(t)&&delete O.p.postData[t]})}else M.extend(O.p.postData,i);q.url&&(e=O.p.url,M(O).jqGrid("setGridParam",{url:q.url}));var F="stop"===M(O).triggerHandler("jqGridToolbarBeforeSearch");!F&&M.jgrid.isFunction(q.beforeSearch)&&(F=q.beforeSearch.call(O)),F||M(O).jqGrid("setGridParam",{search:h}).trigger("reloadGrid",[{page:1}]),e&&M(O).jqGrid("setGridParam",{url:e}),M(O).triggerHandler("jqGridToolbarAfterSearch"),M.jgrid.isFunction(q.afterSearch)&&q.afterSearch.call(O)}else M.jgrid.isFunction(d)?d.call(O,u[1]):(e=M.jgrid.getRegional(O,"errors"),M.jgrid.info_dialog(e.errcap,u[1],"",{styleUI:O.p.styleUI}))},b=M("<tr class='ui-search-toolbar' role='row'></tr>");q.restoreFromFilters&&(t=O.p.postData.filters)&&("string"==typeof t&&(t=M.jgrid.parse(t)),f=!!t.rules.length&&t.rules),q.disabledKeys=new Set(q.disabledKeys),M.each(O.p.colModel,function(e){var t,r,a,s,i,o,l=this,n="",p="=",c=M("<th role='columnheader' class='"+y.headerBox+" ui-th-"+O.p.direction+"' id='gsh_"+O.p.id+"_"+l.name+"' ></th>"),u=M("<div></div>"),d=M("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(!0===this.hidden&&M(c).css("display","none"),this.search=!1!==this.search,void 0===this.stype&&(this.stype="text"),this.searchoptions=this.searchoptions||{},void 0===this.searchoptions.searchOperMenu&&(this.searchoptions.searchOperMenu=!0),t=M.extend({},this.searchoptions,{name:l.index||l.name,id:"gs_"+O.p.idPrefix+l.name,oper:"search"}),this.search){if(q.restoreFromFilters&&f){o=!1;for(var h=0;h<f.length;h++)if(f[h].field)if((l.index||l.name)===f[h].field){o=f[h];break}}if(q.searchOperators){for(r=t.sopt?t.sopt[0]:"select"===l.stype?"eq":q.defaultSearch,q.restoreFromFilters&&o&&(r=o.op),a=0;a<q.odata.length;a++)if(q.odata[a].oper===r){p=q.operands[r]||"";break}s=null!=t.searchtitle?t.searchtitle:q.operandTitle,n=this.searchoptions.searchOperMenu?"<a title='"+s+"' soper='"+r+"' class='soptclass' colname='"+this.name+"'>"+p+"</a>":""}switch(M("td:eq(0)",d).attr("columname",l.name).append(n),void 0===t.clearSearch&&(t.clearSearch=!0),t.clearSearch?(i=q.resetTitle||"Clear Search Value",M("td:eq(2)",d).append("<a title='"+i+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+q.resetIcon+"</a>")):M("td:eq(2)",d).hide(),this.surl&&(t.dataUrl=this.surl),i="",t.defaultValue&&(i=M.jgrid.isFunction(t.defaultValue)?t.defaultValue.call(O):t.defaultValue),q.restoreFromFilters&&o&&(i=o.data),i=M.jgrid.createEl.call(O,this.stype,t,i,!1,M.extend({},M.jgrid.ajaxOptions,O.p.ajaxSelectOptions||{})),M(i).addClass(m.srInput),M("td:eq(1)",d).append(i),M(u).append(d),null==t.dataEvents&&(t.dataEvents=[]),this.stype){case"select":!0===q.autosearch&&t.dataEvents.push({type:"change",fn:function(){return v(),!1}});break;case"text":!0===q.autosearch&&(q.searchOnEnter?t.dataEvents.push({type:"keypress",fn:function(e){return 13===(e.charCode||e.keyCode||0)?(v(),!1):this}}):t.dataEvents.push({type:"keydown",fn:function(e){e=e.which;if(!q.disabledKeys.has(e)){if(13===e)return!1;g&&clearTimeout(g),g=setTimeout(function(){v()},q.autosearchDelay)}}}))}M.jgrid.bindEv.call(O,i,t)}M(c).append(u),M(b).append(c),q.searchOperators&&""!==n||M("td:eq(0)",d).hide()}),M("table thead",O.grid.hDiv).append(b),q.searchOperators&&(M(".soptclass",b).click(function(e){var t=M(this).offset();!function(r,e,t){M("#sopt_menu").remove(),e=parseInt(e,10),t=parseInt(t,10)+18;for(var a,s='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+(M(".ui-jqgrid").css("font-size")||"11px")+";left:"+e+"px;top:"+t+'px;">',i=M(r).attr("soper"),o=[],l=0,n=M(r).attr("colname"),p=O.p.colModel.length;l<p&&O.p.colModel[l].name!==n;)l++;var t=O.p.colModel[l],c=M.extend({},t.searchoptions);for(c.sopt||(c.sopt=[],c.sopt[0]="select"===t.stype?"eq":q.defaultSearch),M.each(q.odata,function(){o.push(this.oper)}),l=0;l<c.sopt.length;l++)-1!==(a=M.inArray(c.sopt[l],o))&&(s+='<li class="ui-menu-item '+(i===q.odata[a].oper?u.highlight:"")+'" role="presentation"><a class="'+u.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+q.odata[a].oper+'" oper="'+q.operands[q.odata[a].oper]+'"><table class="ui-common-table"><tr><td class="opersign">'+q.operands[q.odata[a].oper]+"</td><td>"+q.odata[a].text+"</td></tr></table></a></li>");s+="</ul>",M("body").append(s),M("#sopt_menu").addClass("ui-menu "+m.menu_widget),M("#sopt_menu > li > a").hover(function(){M(this).addClass(u.hover)},function(){M(this).removeClass(u.hover)}).click(function(){var e=M(this).attr("value"),t=M(this).attr("oper");M(O).triggerHandler("jqGridToolbarSelectOper",[e,t,r]),M("#sopt_menu").hide(),M(r).text(t).attr("soper",e),!0===q.autosearch&&(t=M(r).parent().next().children()[0],(M(t).val()||"nu"===e||"nn"===e||0<=M.inArray(e,x))&&v())})}(this,t.left,t.top),e.stopPropagation()}),M("body").on("click",function(e){"soptclass"!==e.target.className&&M("#sopt_menu").remove()})),M(".clearsearchclass",b).click(function(){for(var e,t,r=M(this).parents("tr:first"),a=M("td.ui-search-oper",r).attr("columname"),s=0,i=O.p.colModel.length,o=M("td.ui-search-oper a",r).attr("soper");s<i;){if(O.p.colModel[s].name===a){e=O.p.colModel[s];break}s++}var l,n,p=M.extend({},O.p.colModel[s].searchoptions||{}),c=p.defaultValue||"";"select"===O.p.colModel[s].stype?(l=M("td.ui-search-input select",r),c?l.val(c):l[0].selectedIndex=0):(l=M("td.ui-search-input input",r)).val(c),M(O).triggerHandler("jqGridToolbarClearVal",[l[0],s,p,c]),M.jgrid.isFunction(q.onClearSearchValue)&&q.onClearSearchValue.call(O,l[0],s,p,c),("nu"===o||"nn"===o||0<=M.inArray(o,x))&&(t=p.sopt?p.sopt[0]:"select"===e.stype?"eq":q.defaultSearch,n=null!=O.p.customFilterDef&&null!=O.p.customFilterDef[t]?O.p.customFilterDef[t].operand:q.operands[t]||"",(t===o?M("td.ui-search-oper a",r).attr("soper","dummy"):M("td.ui-search-oper a",r).attr("soper",t)).text(n)),!0===q.autosearch&&(v(),t===o&&M("td.ui-search-oper a",r).attr("soper",t).text(n))}),M(O.grid.hDiv).on("scroll",function(e){O.grid.bDiv.scrollLeft=O.grid.hDiv.scrollLeft}),this.p.filterToolbar=!0,this.triggerToolbar=v,this.clearToolbar=function(e){var r,a={},s=0;e="boolean"!=typeof e||e,M.each(O.p.colModel,function(){var t,e=M("#gs_"+O.p.idPrefix+M.jgrid.jqID(this.name),!0===this.frozen&&!0===O.p.frozenColumns?O.grid.fhDiv:O.grid.hDiv);switch(this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(t=this.searchoptions.defaultValue),r=this.index||this.name,this.stype){case"select":if(e.find("option").each(function(e){if(0===e&&(this.selected=!0),M(this).val()===t)return!(this.selected=!0)}),void 0!==t)a[r]=t,s++;else try{delete O.p.postData[r]}catch(e){}break;case"text":if(e.val(t||""),void 0!==t)a[r]=t,s++;else try{delete O.p.postData[r]}catch(e){}break;case"custom":M.jgrid.isFunction(this.searchoptions.custom_value)&&0<e.length&&this.searchoptions.custom_value.call(O,e,"set",t||"")}});var i,o,t,l=0<s;(O.p.resetsearch=!0)===q.stringResult||"local"===O.p.datatype?(i='{"groupOp":"'+q.groupOp+'","rules":[',o=0,M.each(a,function(e,t){0<o&&(i+=","),i+='{"field":"'+e+'",',i+='"op":"eq",',i+='"data":"'+(t+="").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',o++}),i+="]}",!0===O.p.mergeSearch&&O.p.searchModules.hasOwnProperty("filterToolbar")&&!1!==O.p.searchModules.filterToolbar?(O.p.searchModules.filterToolbar=0<o?i:null,l=!0,M.extend(O.p.postData,{filters:M.jgrid.splitSearch(O.p.searchModules)})):M.extend(O.p.postData,{filters:i}),M.each(["searchField","searchString","searchOper"],function(e,t){O.p.postData.hasOwnProperty(t)&&delete O.p.postData[t]})):M.extend(O.p.postData,a),q.url&&(t=O.p.url,M(O).jqGrid("setGridParam",{url:q.url}));var n="stop"===M(O).triggerHandler("jqGridToolbarBeforeClear");!n&&M.jgrid.isFunction(q.beforeClear)&&(n=q.beforeClear.call(O)),n||e&&M(O).jqGrid("setGridParam",{search:l}).trigger("reloadGrid",[{page:1}]),t&&M(O).jqGrid("setGridParam",{url:t}),M(O).triggerHandler("jqGridToolbarAfterClear"),M.jgrid.isFunction(q.afterClear)&&q.afterClear()},this.toggleToolbar=function(){var e=M("tr.ui-search-toolbar",O.grid.hDiv);!0===O.p.frozenColumns&&M(O).jqGrid("destroyFrozenColumns"),"none"===e.css("display")?e.show():e.hide(),!0===O.p.frozenColumns&&M(O).jqGrid("setFrozenColumns")}}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,M(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},refreshFilterToolbar:function(g){return g=M.extend(!0,{filters:"",onClearVal:null,onSetVal:null},g||{}),this.each(function(){var s,i,o,e,l,n,p,c=this,u=c.p.colModel,d=c.p.colModel.length,h=[];if(c.p.filterToolbar){for(i=M(c).data("filterToolbar"),s=0;s<d;s++){switch(h.push(u[s].name),o=M("#gs_"+c.p.idPrefix+M.jgrid.jqID(u[s].name)),u[s].stype){case"select":case"text":o.val("")}M.jgrid.isFunction(g.onClearVal)&&g.onClearVal.call(c,o,u[s].name)}"string"==typeof g.filters&&(g.filters.length?e=g.filters:c.p.postData.hasOwnProperty("filters")&&(e=c.p.postData.filters),e=M.jgrid.parse(e)),M.isPlainObject(e)&&function e(t){if(t&&t.rules){for(l=t.rules,d=l.length,s=0;s<d;s++){var r;n=l[s],-1!==(p=M.inArray(n.field,h))&&0<(o=M("#gs_"+c.p.idPrefix+M.jgrid.jqID(u[p].name))).length&&("select"===u[p].stype?o.find("option[value='"+M.jgrid.jqID(n.data)+"']").prop("selected",!0):"text"===u[p].stype&&o.val(n.data),M.jgrid.isFunction(g.onSetVal)&&g.onSetVal.call(c,o,u[p].name),i&&i.searchOperators&&(r=o.parent().prev()).hasClass("ui-search-oper")&&(M(".soptclass",r).attr("soper",n.op),i.operands.hasOwnProperty(n.op)&&M(".soptclass",r).html(i.operands[n.op])))}if(t.groups)for(var a=0;a<t.groups.length;a++)e(t.groups[a])}}(e)}})},searchGrid:function(C){var e=M.jgrid.getRegional(this[0],"search");return C=M.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,splitSelect:",",groupOpSelect:"OR",operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE",in:"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"},buttons:[]},e,C||{}),this.each(function(){var s=this;if(s.grid){var t,r,a="fbox_"+s.p.id,i=!0,o=!0,l={themodal:"searchmod"+a,modalhead:"searchhd"+a,modalcontent:"searchcnt"+a,scrollelm:a},e=[],n=M.jgrid.styleUI[s.p.styleUI||"jQueryUI"].filter,p=M.jgrid.styleUI[s.p.styleUI||"jQueryUI"].common;if(C.styleUI=s.p.styleUI,"string"==typeof(t=M.isPlainObject(s.p._savedFilter)&&!M.isEmptyObject(s.p._savedFilter)?s.p._savedFilter:!0===s.p.mergeSearch&&s.p.searchModules.hasOwnProperty("searchGrid")&&!1!==s.p.searchModules.searchGrid?!0===s.p.searchModules.searchGrid?"":s.p.searchModules.searchGrid:s.p.postData[C.sFilter])&&(t=M.jgrid.parse(t)),!0===C.recreateFilter&&M("#"+M.jgrid.jqID(l.themodal)).remove(),void 0!==M("#"+M.jgrid.jqID(l.themodal))[0])G(M("#fbox_"+M.jgrid.jqID(s.p.id)));else{var c=M("<div><div id='"+a+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+M.jgrid.jqID(s.p.id)),u="left",d="";"rtl"===s.p.direction&&(u="right",d=" style='text-align:left'",c.attr("dir","rtl"));var h,g=M.extend([],s.p.colModel),f="<a id='"+a+"_search' class='fm-button "+p.button+" fm-button-icon-right ui-search'><span class='"+p.icon_base+" "+n.icon_search+"'></span>"+C.Find+"</a>",m="<a id='"+a+"_reset' class='fm-button "+p.button+" fm-button-icon-left ui-reset'><span class='"+p.icon_base+" "+n.icon_reset+"'></span>"+C.Reset+"</a>",y="",v="",b=!1,j=-1,S=!1,F=[];C.showQuery&&(y="<a id='"+a+"_query' class='fm-button "+p.button+" fm-button-icon-left'><span class='"+p.icon_base+" "+n.icon_query+"'></span>Query</a>");var O=M.jgrid.buildButtons(C.buttons,y+f,p),x=null;M(s).jqGrid("isGroupHeaderOn")&&(f=M("table.ui-jqgrid-htable",s.grid.hDiv).find(".jqg-second-row-header"),q=s.p.groupHeader.length,void 0!==f[0]&&(x=s.p.groupHeader[q-1]));var q;if(C.columns.length)g=C.columns,h=g[j=0].index||g[0].name;else{if(null!==x)for(var D=0;D<g.length;D++){var w=function(e,t){for(var r=t.length,a=0;a<r;a++)if(t[a].startColumnName===e)return a;return-1}(g[D].name,x.groupHeaders);if(0<=w){g[D].label=x.groupHeaders[w].titleText+"::"+s.p.colNames[D];for(var I=1;I<=x.groupHeaders[w].numberOfColumns-1;I++)g[D+I].label=x.groupHeaders[w].titleText+"::"+s.p.colNames[D+I];D=D+x.groupHeaders[w].numberOfColumns-1}}M.each(g,function(e,t){var r,a;t.label||(t.label=s.p.colNames[e]),b||(r=void 0===t.search||t.search,a=!0===t.hidden,(t.searchoptions&&!0===t.searchoptions.searchhidden&&r||r&&!a)&&(b=!0,h=t.index||t.name,j=e)),"select"===t.stype&&t.searchoptions&&t.searchoptions.multiple&&(S=!0,F.push(t.index||t.name))})}if((!t&&h||!1===C.multipleSearch)&&(q="eq",0<=j&&g[j].searchoptions&&g[j].searchoptions.sopt?q=g[j].searchoptions.sopt[0]:C.sopt&&C.sopt.length&&(q=C.sopt[0]),t={groupOp:"AND",rules:[{field:h,op:q,data:""}]}),b=!1,C.tmplNames&&C.tmplNames.length&&(b=!0,v="<tr><td class='ui-search-label'>"+C.tmplLabel+"</td>",v+="<td><select size='1' class='ui-template "+n.srSelect+"'>",v+="<option value='default'>Default</option>",M.each(C.tmplNames,function(e,t){v+="<option value='"+e+"'>"+t+"</option>"}),v+="</select></td></tr>"),void 0!==s.p.customFilterDef)for(var _ in s.p.customFilterDef)s.p.customFilterDef.hasOwnProperty(_)&&!C.operands.hasOwnProperty(_)&&(C.odata.push({oper:_,text:s.p.customFilterDef[_].text}),C.operands[_]=s.p.customFilterDef[_].operand,!0===s.p.customFilterDef[_].unary&&e.push(_));O="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+a+"_2'><tbody><tr><td colspan='2'><hr class='"+p.content+"' style='margin:1px'/></td></tr>"+v+"<tr><td class='EditButton' style='text-align:"+u+"'>"+m+"</td><td class='EditButton' "+d+">"+O+"</td></tr></tbody></table>",a=M.jgrid.jqID(a),M("#"+a).jqFilter({columns:g,sortStrategy:C.sortStrategy,filter:C.loadDefaults?t:null,showQuery:C.showQuery,errorcheck:C.errorcheck,sopt:C.sopt,groupButton:C.multipleGroup,ruleButtons:C.multipleSearch,uniqueSearchFields:C.uniqueSearchFields,afterRedraw:C.afterRedraw,ops:C.odata,operands:C.operands,ajaxSelectOptions:s.p.ajaxSelectOptions,groupOps:C.groupOps,addsubgrup:C.addsubgrup,addrule:C.addrule,delgroup:C.delgroup,delrule:C.delrule,autoencode:s.p.autoencode,unaryOperations:e,onChange:function(){this.p.showQuery&&M(".query",this).html(this.toUserFriendlyString()),M.jgrid.isFunction(C.afterChange)&&C.afterChange.call(s,M("#"+a),C)},direction:s.p.direction,id:s.p.id}),c.append(O),M("#"+a+"_2").find("[data-index]").each(function(){var t=parseInt(M(this).attr("data-index"),10);0<=t&&M(this).on("click",function(e){C.buttons[t].click.call(s,M("#"+a),C,e)})}),b&&C.tmplFilters&&C.tmplFilters.length&&M(".ui-template",c).on("change",function(){var e=M(this).val();return"default"===e?M("#"+a).jqFilter("addFilter",t):M("#"+a).jqFilter("addFilter",C.tmplFilters[parseInt(e,10)]),!1}),!0===C.multipleGroup&&(C.multipleSearch=!0),M(s).triggerHandler("jqGridFilterInitialize",[M("#"+a)]),M.jgrid.isFunction(C.onInitializeSearch)&&C.onInitializeSearch.call(s,M("#"+a)),C.gbox="#gbox_"+M.jgrid.jqID(s.p.id);O=M(".ui-jqgrid").css("font-size")||"11px";C.layer?M.jgrid.createModal(l,c,C,"#gview_"+M.jgrid.jqID(s.p.id),M("#gbox_"+M.jgrid.jqID(s.p.id))[0],"string"==typeof C.layer?"#"+M.jgrid.jqID(C.layer):C.layer,"string"==typeof C.layer?{position:"relative","font-size":O}:{"font-size":O}):M.jgrid.createModal(l,c,C,"#gview_"+M.jgrid.jqID(s.p.id),M("#gbox_"+M.jgrid.jqID(s.p.id))[0],null,{"font-size":O}),(C.searchOnEnter||C.closeOnEscape)&&M("#"+M.jgrid.jqID(l.themodal)).keydown(function(e){var t=M(e.target);return!C.searchOnEnter||13!==e.which||t.hasClass("add-group")||t.hasClass("add-rule")||t.hasClass("delete-group")||t.hasClass("delete-rule")||t.hasClass("fm-button")&&t.is("[id$=_query]")?C.closeOnEscape&&27===e.which?(M("#"+M.jgrid.jqID(l.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void 0:(M("#"+a+"_search").click(),!1)}),y&&M("#"+a+"_query").on("click",function(){return M(".queryresult",c).toggle(),!1}),void 0===C.stringResult&&(C.stringResult=C.multipleSearch),M("#"+a+"_search").on("click",function(){var e,t={};return(r=M("#"+a)).find(".input-elm:focus").change(),S&&C.multipleSearch?(s.p._savedFilter={},e=M.jgrid.filterRefactor({ruleGroup:M.extend(!0,{},r.jqFilter("filterData")),ssfield:F,splitSelect:C.splitSelect,groupOpSelect:C.groupOpSelect}),s.p._savedFilter=M.extend(!0,{},r.jqFilter("filterData"))):e=r.jqFilter("filterData"),C.errorcheck&&(r[0].hideError(),C.showQuery||r.jqFilter("toSQLString"),r[0].p.error)?r[0].showError():(C.stringResult?(t[C.sFilter]=JSON.stringify(e),M.each([C.sField,C.sValue,C.sOper],function(){t[this]=""})):C.multipleSearch?(t[C.sFilter]=e,M.each([C.sField,C.sValue,C.sOper],function(){t[this]=""})):(t[C.sField]=e.rules[0].field,t[C.sValue]=e.rules[0].data,t[C.sOper]=e.rules[0].op,t[C.sFilter]=""),"string"!=typeof t[C.sFilter]&&(t[C.sFilter]=JSON.stringify(t[C.sFilter])),(s.p.search=!0)===s.p.mergeSearch&&s.p.searchModules.hasOwnProperty("searchGrid")&&!1!==s.p.searchModules.searchGrid?(""!==t[C.sFilter]?s.p.searchModules.searchGrid=t[C.sFilter]:s.p.searchModules.searchGrid=null,M.extend(s.p.postData,{filters:M.jgrid.splitSearch(s.p.searchModules)})):M.extend(s.p.postData,t),void 0===(o=M(s).triggerHandler("jqGridFilterSearch"))&&(o=!0),o&&M.jgrid.isFunction(C.onSearch)&&(o=C.onSearch.call(s,s.p.filters)),!1!==o&&M(s).trigger("reloadGrid",[{page:1}]),C.closeAfterSearch&&M.jgrid.hideModal("#"+M.jgrid.jqID(l.themodal),{gb:"#gbox_"+M.jgrid.jqID(s.p.id),jqm:C.jqModal,onClose:C.onClose})),!1}),M("#"+a+"_reset").on("click",function(){var e={},t=M("#"+a);return s.p.search=!1,!(s.p.resetsearch=!0)===C.multipleSearch?e[C.sField]=e[C.sValue]=e[C.sOper]="":e[C.sFilter]="",t[0].resetFilter(),b&&M(".ui-template",c).val("default"),!0===s.p.mergeSearch&&s.p.searchModules.hasOwnProperty("searchGrid")&&!1!==s.p.searchModules.searchGrid?(s.p.searchModules.searchGrid=null,M.extend(s.p.postData,{filters:M.jgrid.splitSearch(s.p.searchModules)}),s.p.search=!0):M.extend(s.p.postData,e),void 0===(o=M(s).triggerHandler("jqGridFilterReset"))&&(o=!0),o&&M.jgrid.isFunction(C.onReset)&&(o=C.onReset.call(s)),!1!==o&&M(s).trigger("reloadGrid",[{page:1}]),C.closeAfterReset&&M.jgrid.hideModal("#"+M.jgrid.jqID(l.themodal),{gb:"#gbox_"+M.jgrid.jqID(s.p.id),jqm:C.jqModal,onClose:C.onClose}),!1}),G(M("#"+a)),M(".fm-button:not(."+p.disabled+")",c).hover(function(){M(this).addClass(p.hover)},function(){M(this).removeClass(p.hover)})}}function G(e){void 0===(i=M(s).triggerHandler("jqGridFilterBeforeShow",[e]))&&(i=!0),i&&M.jgrid.isFunction(C.beforeShowSearch)&&(i=C.beforeShowSearch.call(s,e)),i&&(M.jgrid.viewModal("#"+M.jgrid.jqID(l.themodal),{gbox:"#gbox_"+M.jgrid.jqID(s.p.id),jqm:C.jqModal,modal:C.modal,overlay:C.overlay,toTop:C.toTop}),M(s).triggerHandler("jqGridFilterAfterShow",[e]),M.jgrid.isFunction(C.afterShowSearch)&&C.afterShowSearch.call(s,e))}})},filterInput:function(o,l){return l=M.extend(!0,{defaultSearch:"cn",groupOp:"OR",searchAll:!1,beforeSearch:null,afterSearch:null},l||{}),this.each(function(){var e,t,r,a,s,i=this;i.grid&&(t='{"groupOp":"'+l.groupOp+'","rules":[',r=0,o+="","local"===i.p.datatype&&(M.each(i.p.colModel,function(){e=this.index||this.name,a=this.searchoptions||{},a=l.defaultSearch||(a.sopt?a.sopt[0]:l.defaultSearch),this.search=!1!==this.search,(this.search||l.searchAll)&&(0<r&&(t+=","),t+='{"field":"'+e+'",',t+='"op":"'+a+'",',t+='"data":"'+o.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',r++)}),t+="]}",!0===i.p.mergeSearch&&i.p.searchModules.hasOwnProperty("filterInput")&&!1!==i.p.searchModules.filterInput?(i.p.searchModules.filterInput=0<r?t:null,M.extend(i.p.postData,{filters:M.jgrid.splitSearch(i.p.searchModules)})):M.extend(i.p.postData,{filters:t}),M.each(["searchField","searchString","searchOper"],function(e,t){i.p.postData.hasOwnProperty(t)&&delete i.p.postData[t]}),!(s="stop"===M(i).triggerHandler("jqGridFilterInputBeforeSearch"))&&M.jgrid.isFunction(l.beforeSearch)&&(s=l.beforeSearch.call(i)),s||M(i).jqGrid("setGridParam",{search:!0}).trigger("reloadGrid",[{page:1}]),M(i).triggerHandler("jqGridFilterInputAfterSearch"),M.jgrid.isFunction(l.afterSearch)&&l.afterSearch.call(i)))})},autoSelect:function(c){return c=M.extend(!0,{field:"",direction:"asc",src_date:"Y-m-d",allValues:"All",count_item:!0,create_value:!0},c||{}),this.each(function(){var e,t=this,r="";if(c.field&&t.p.data&&Array.isArray(t.p.data)){var a,s,i,o,l,n,p=[];try{n=(l=M.jgrid.from.call(t,t.p.data).groupBy(c.field,c.direction,"text",c.src_date)).length}catch(e){}if(l&&l.length){for(a=M("#gsh_"+t.p.id+"_"+c.field).find("td.ui-search-input > select"),n=l.length,c.allValues&&(r="<option value=''>"+c.allValues+"</option>",p.push(":"+c.allValues));n--;)e=l[n],s=c.count_item?" ("+e.items.length+")":"",r+="<option value='"+e.unique+"'>"+e.unique+s+"</option>",p.push(e.unique+":"+e.unique+s);if(a.append(r),a.on("change",function(){t.triggerToolbar()}),c.create_value){for(n=0,o=t.p.colModel.length;n<o;n++)if(t.p.colModel[n].name===c.field){i=t.p.colModel[n];break}i&&(i.searchoptions?M.extend(i.searchoptions,{value:p.join(";")}):(i.searchoptions={},i.searchoptions.value=p.join(";")))}}}})}})});