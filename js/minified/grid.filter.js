!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],e):e(jQuery)}(function(T){"use strict";T.fn.jqFilter=function(e){if("string"==typeof e){var t=T.fn.jqFilter[e];if(!t)throw"jqFilter - No such method: "+e;var r=T.makeArray(arguments).slice(1);return t.apply(this,r)}var x=T.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,uniqueSearchFields:!1,direction:"ltr",addsubgrup:"Add subgroup",addrule:"Add rule",delgroup:"Delete group",delrule:"Delete rule",autoencode:!1,unaryOperations:[]},T.jgrid.filter,e||{});return this.each(function(){if(!this.filter){this.p=x,null!==this.p.filter&&void 0!==this.p.filter||(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&T.jgrid.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var e,t,r=this.p.columns.length,b=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=T.extend(!0,{},this.p.filter),r){for(e=0;e<r;e++)(t=this.p.columns[e]).stype?t.inputtype=t.stype:t.inputtype||(t.inputtype="text"),t.sorttype?t.searchtype=t.sorttype:t.searchtype||(t.searchtype="string"),void 0===t.hidden&&(t.hidden=!1),t.label||(t.label=t.name),t.index&&(t.name=t.index),t.hasOwnProperty("searchoptions")||(t.searchoptions={}),t.hasOwnProperty("searchrules")||(t.searchrules={}),void 0===t.search?t.inlist=!0:t.inlist=t.search;var S=function(){return T("#"+T.jgrid.jqID(x.id))[0]||null},s=S(),F=T.jgrid.styleUI[s.p.styleUI||"jQueryUI"].filter,O=T.jgrid.styleUI[s.p.styleUI||"jQueryUI"].common;this.p.showQuery&&T(this).append("<table class='queryresult "+F.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var o=function(e,t){var r=[!0,""],s=S();if(T.jgrid.isFunction(t.searchrules))r=t.searchrules.call(s,e,t);else if(T.jgrid&&T.jgrid.checkValues)try{r=T.jgrid.checkValues.call(s,e,-1,t.searchrules,t.label)}catch(e){}r&&r.length&&!1===r[0]&&(x.error=!r[0],x.errmsg=r[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",!!T.jgrid.isFunction(this.p.onChange)&&this.p.onChange.call(this,this.p)},this.reDraw=function(){T(this).find("table.group").first().remove();var e=this.createTableForGroup(x.filter,null);T(this).append(e),T.jgrid.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(s,e){var a=this,t=T("<table class='group "+F.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),r="left";"rtl"===this.p.direction&&(r="right",t.attr("dir","rtl")),null===e&&t.append("<tr class='error' style='display:none;'><th colspan='5' class='"+O.error+"' align='"+r+"'></th></tr>");var i=T("<tr></tr>");t.append(i);r=T("<th colspan='5' align='"+r+"'></th>");if(i.append(r),!0===this.p.ruleButtons){var o=T("<select size='1' class='opsel "+F.srSelect+"'></select>");r.append(o);for(var l,n="",p=0;p<x.groupOps.length;p++)l=s.groupOp===a.p.groupOps[p].op?" selected='selected'":"",n+="<option value='"+a.p.groupOps[p].op+"'"+l+">"+a.p.groupOps[p].text+"</option>";o.append(n).on("change",function(){s.groupOp=T(o).val(),a.onchange()})}var c,u,i="<span></span>";if(this.p.groupButton&&(i=T("<input type='button' value='+ {}' title='"+a.p.subgroup+"' class='add-group "+O.button+"'/>")).on("click",function(){return void 0===s.groups&&(s.groups=[]),s.groups.push({groupOp:x.groupOps[0].op,rules:[],groups:[]}),a.reDraw(),a.onchange(),!1}),r.append(i),!0===this.p.ruleButtons&&((u=T("<input type='button' value='+' title='"+a.p.addrule+"' class='add-rule ui-add "+O.button+"'/>")).on("click",function(){for(void 0===s.rules&&(s.rules=[]),p=0;p<a.p.columns.length;p++){var e=void 0===a.p.columns[p].search||a.p.columns[p].search,t=!0===a.p.columns[p].hidden;if(!0===a.p.columns[p].searchoptions.searchhidden&&e||e&&!t){c=a.p.columns[p];break}}if(!c)return!1;var r=c.searchoptions.sopt||a.p.sopt||(-1!==T.inArray(c.searchtype,a.p.strarr)?a.p.stropts:a.p.numopts);return s.rules.push({field:c.name,op:r[0],data:""}),a.reDraw(),!1}),r.append(u)),null!==e&&(u=T("<input type='button' value='-' title='"+a.p.delgroup+"' class='delete-group "+O.button+"'/>"),r.append(u),u.on("click",function(){for(p=0;p<e.groups.length;p++)if(e.groups[p]===s){e.groups.splice(p,1);break}return a.reDraw(),a.onchange(),!1})),void 0!==s.groups)for(p=0;p<s.groups.length;p++){var d=T("<tr></tr>");t.append(d);var h=T("<td class='first'></td>");d.append(h);h=T("<td colspan='4'></td>");h.append(this.createTableForGroup(s.groups[p],s)),d.append(h)}void 0===s.groupOp&&(s.groupOp=a.p.groupOps[0].op);var g=a.p.ruleButtons&&a.p.uniqueSearchFields;if(g)for(m=0;m<a.p.columns.length;m++)a.p.columns[m].inlist&&(a.p.columns[m].search=!0);if(void 0!==s.rules)for(p=0;p<s.rules.length;p++)if(t.append(this.createTableRowForRule(s.rules[p],s)),g)for(var f=s.rules[p].field,m=0;m<a.p.columns.length;m++)if(f===a.p.columns[m].name){a.p.columns[m].search=!1;break}return t},this.createTableRowForRule=function(i,e){var o,l,n,t,p=this,c=S(),r=T("<tr></tr>"),s="";r.append("<td class='first'></td>");var a=T("<td class='columns'></td>");r.append(a);var u,d=T("<select size='1' class='"+F.srSelect+"'></select>"),h=[];a.append(d),d.on("change",function(){var e;for(p.p.ruleButtons&&p.p.uniqueSearchFields&&(e=parseInt(T(this).data("curr"),10),r=this.selectedIndex,0<=e&&(p.p.columns[e].search=!0,T(this).data("curr",r),p.p.columns[r].search=!1)),i.field=T(d).val(),l=T(this).parents("tr").first(),T(".data",l).empty(),f=0;f<p.p.columns.length;f++)if(p.p.columns[f].name===i.field){n=p.p.columns[f];break}if(n){n.searchoptions.id=T.jgrid.randId(),n.searchoptions.name=i.field,n.searchoptions.oper="filter",b&&"text"===n.inputtype&&(n.searchoptions.size||(n.searchoptions.size=10));var t=T.jgrid.createEl.call(c,n.inputtype,n.searchoptions,"",!0,p.p.ajaxSelectOptions||{},!0);T(t).addClass("input-elm "+F.srInput),o=n.searchoptions.sopt||p.p.sopt||(-1!==T.inArray(n.searchtype,p.p.strarr)?p.p.stropts:p.p.numopts);var r,s="",a=0;for(h=[],T.each(p.p.ops,function(){h.push(this.oper)}),f=0;f<o.length;f++)-1!==(u=T.inArray(o[f],h))&&(0===a&&(i.op=p.p.ops[u].oper),s+="<option value='"+p.p.ops[u].oper+"'>"+p.p.ops[u].text+"</option>",a++);T(".selectopts",l).empty().append(s),T(".selectopts",l)[0].selectedIndex=0,T.jgrid.msie()&&T.jgrid.msiever()<9&&(r=parseInt(T("select.selectopts",l)[0].offsetWidth,10)+1,T(".selectopts",l).width(r),T(".selectopts",l).css("width","auto")),T(".data",l).append(t),T.jgrid.bindEv.call(c,t,n.searchoptions),T(".input-elm",l).on("change",function(e){e=e.target;"custom"===n.inputtype&&T.jgrid.isFunction(n.searchoptions.custom_value)?i.data=n.searchoptions.custom_value.call(c,T(".customelement",this),"get"):i.data=T(e).val(),"select"===n.inputtype&&n.searchoptions.multiple&&(i.data=i.data.join(",")),p.onchange()}),setTimeout(function(){i.data=T(t).val(),("nu"===i.op||"nn"===i.op||0<=T.inArray(i.op,p.p.unaryOperations))&&(T(t).attr("readonly","true"),T(t).attr("disabled","true")),"select"===n.inputtype&&n.searchoptions.multiple&&Array.isArray(i.data)&&(i.data=i.data.join(",")),p.onchange()},0)}});for(var g=0,f=0;f<p.p.columns.length;f++){var m=void 0===p.p.columns[f].search||p.p.columns[f].search,y=!0===p.p.columns[f].hidden;(!0===p.p.columns[f].searchoptions.searchhidden&&m||m&&!y)&&(t="",i.field===p.p.columns[f].name&&(t=" selected='selected'",g=f),s+="<option value='"+p.p.columns[f].name+"'"+t+">"+p.p.columns[f].label+"</option>")}d.append(s),d.data("curr",g);var v=T("<td class='operators'></td>");r.append(v),(n=x.columns[g]).searchoptions.id=T.jgrid.randId(),b&&"text"===n.inputtype&&(n.searchoptions.size||(n.searchoptions.size=10)),n.searchoptions.name=i.field,n.searchoptions.oper="filter";a=T.jgrid.createEl.call(c,n.inputtype,n.searchoptions,i.data,!0,p.p.ajaxSelectOptions||{},!0);("nu"===i.op||"nn"===i.op||0<=T.inArray(i.op,p.p.unaryOperations))&&(T(a).attr("readonly","true"),T(a).attr("disabled","true"));var j=T("<select size='1' class='selectopts "+F.srSelect+"'></select>");for(v.append(j),j.on("change",function(){i.op=T(j).val(),l=T(this).parents("tr").first();var e=T(".input-elm",l)[0];"nu"===i.op||"nn"===i.op||0<=T.inArray(i.op,p.p.unaryOperations)?(i.data="","SELECT"!==e.tagName.toUpperCase()&&(e.value=""),e.setAttribute("readonly","true"),e.setAttribute("disabled","true")):("SELECT"===e.tagName.toUpperCase()&&(i.data=e.value),e.removeAttribute("readonly"),e.removeAttribute("disabled")),p.onchange()}),o=n.searchoptions.sopt||p.p.sopt||(-1!==T.inArray(n.searchtype,p.p.strarr)?p.p.stropts:p.p.numopts),s="",T.each(p.p.ops,function(){h.push(this.oper)}),f=0;f<o.length;f++)-1!==(u=T.inArray(o[f],h))&&(t=i.op===p.p.ops[u].oper?" selected='selected'":"",s+="<option value='"+p.p.ops[u].oper+"'"+t+">"+p.p.ops[u].text+"</option>");j.append(s);v=T("<td class='data'></td>");r.append(v),v.append(a),T.jgrid.bindEv.call(c,a,n.searchoptions),T(a).addClass("input-elm "+F.srInput).on("change",function(){i.data="custom"===n.inputtype?n.searchoptions.custom_value.call(c,T(".customelement",this),"get"):T(this).val(),p.onchange()});v=T("<td></td>");return r.append(v),!0===this.p.ruleButtons&&(a=T("<input type='button' value='-' title='"+p.p.delrule+"' class='delete-rule ui-del "+O.button+"'/>"),v.append(a),a.on("click",function(){for(f=0;f<e.rules.length;f++)if(e.rules[f]===i){e.rules.splice(f,1);break}return p.reDraw(),p.onchange(),!1})),r},this.getStringForGroup=function(e){var t,r="(";if(void 0!==e.groups)for(t=0;t<e.groups.length;t++){1<r.length&&(r+=" "+e.groupOp+" ");try{r+=this.getStringForGroup(e.groups[t])}catch(e){alert(e)}}if(void 0!==e.rules)try{for(t=0;t<e.rules.length;t++)1<r.length&&(r+=" "+e.groupOp+" "),r+=this.getStringForRule(e.rules[t])}catch(e){alert(e)}return"()"===(r+=")")?"":r},this.getStringForRule=function(e){for(var t,r,s="",a="",i=0;i<this.p.ops.length;i++)if(this.p.ops[i].oper===e.op){s=this.p.operands.hasOwnProperty(e.op)?this.p.operands[e.op]:"",a=this.p.ops[i].oper;break}for(i=0;i<this.p.columns.length;i++)if(this.p.columns[i].name===e.field){t=this.p.columns[i];break}return void 0===t?"":(r=this.p.autoencode?T.jgrid.htmlEncode(e.data):e.data,"bw"!==a&&"bn"!==a||(r+="%"),"ew"!==a&&"en"!==a||(r="%"+r),"cn"!==a&&"nc"!==a||(r="%"+r+"%"),"in"!==a&&"ni"!==a||(r=" ("+r+")"),x.errorcheck&&o(e.data,t),-1!==T.inArray(t.searchtype,["int","integer","float","number","currency"])||"nn"===a||"nu"===a||0<=T.inArray(e.op,this.p.unaryOperations)?e.field+" "+s+" "+r:e.field+" "+s+' "'+r+'"')},this.resetFilter=function(){this.p.filter=T.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){T("th."+O.error,this).html(""),T("tr.error",this).hide()},this.showError=function(){T("th."+O.error,this).html(this.p.errmsg),T("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(x.filter)},this.toString=function(){var a=this;return function e(t){var r,s="(";if(void 0!==t.groups)for(r=0;r<t.groups.length;r++)1<s.length&&("OR"===t.groupOp?s+=" || ":s+=" && "),s+=e(t.groups[r]);if(void 0!==t.rules)for(r=0;r<t.rules.length;r++)1<s.length&&("OR"===t.groupOp?s+=" || ":s+=" && "),s+=function(e){if(a.p.errorcheck){for(var t,r=0;r<a.p.columns.length;r++)if(a.p.columns[r].name===e.field){t=a.p.columns[r];break}t&&o(e.data,t)}return e.op+"(item."+e.field+",'"+e.data+"')"}(t.rules[r]);return"()"==(s+=")")?"":s}(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},T.extend(T.fn.jqFilter,{toSQLString:function(){var e="";return this.each(function(){e=this.toUserFriendlyString()}),e},filterData:function(){var e;return this.each(function(){e=this.p.filter}),e},getParameter:function(r){var s=null;return void 0!==r&&this.each(function(e,t){t.p.hasOwnProperty(r)&&(s=t.p[r])}),s||this[0].p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(e){"string"==typeof e&&(e=T.jgrid.parse(e)),this.each(function(){this.p.filter=e,this.reDraw(),this.onchange()})}}),T.extend(T.jgrid,{filterRefactor:function(e){var t,r,s,a,i,o,l={};try{if((l="string"==typeof e.ruleGroup?T.jgrid.parse(e.ruleGroup):e.ruleGroup).rules&&l.rules.length)for(t=l.rules,r=0;r<t.length;r++)o=(s=t[r]).field,-1<T.inArray(o,e.ssfield)&&1<(a=s.data.split(e.splitSelect)).length&&(void 0===l.groups&&(l.groups=[]),i={groupOp:e.groupOpSelect,groups:[],rules:[]},l.groups.push(i),T.each(a,function(e){a[e]&&i.rules.push({data:a[e],op:s.op,field:s.field})}),t.splice(r,1),r--)}catch(e){}return l}}),T.jgrid.extend({filterToolbar:function(_){var s=T.jgrid.getRegional(this[0],"search");return _=T.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,onClearSearchValue:null,url:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",splitSelect:",",groupOpSelect:"OR",errorcheck:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^",in:"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#",bt:"..."},disabledKeys:[9,16,17,18,19,20,33,34,35,36,37,38,39,30,45,112,113,114,115,116,117,118,119,120,121,122,123,144,145]},s,_||{}),this.each(function(){var q=this,w=[];if(!q.p.filterToolbar){if(T(q).data("filterToolbar")||T(q).data("filterToolbar",_),q.p.force_regional&&(_=T.extend(_,s)),void 0!==q.p.customFilterDef)for(var e in q.p.customFilterDef)q.p.customFilterDef.hasOwnProperty(e)&&!_.operands.hasOwnProperty(e)&&(_.odata.push({oper:e,text:q.p.customFilterDef[e].text}),_.operands[e]=q.p.customFilterDef[e].operand,!0===q.p.customFilterDef[e].unary&&w.push(e));var g,f,t,m=T.jgrid.styleUI[q.p.styleUI||"jQueryUI"].filter,p=T.jgrid.styleUI[q.p.styleUI||"jQueryUI"].common,y=T.jgrid.styleUI[q.p.styleUI||"jQueryUI"].base,v=function(){var r,s,a,i,o={},l=0,n={},p=!1,c=[],u=[],d={},h=[],g=!1,f=[!0,"",""],m=!1;if(T.each(q.p.colModel,function(){var e,t=!1;if(s=this.index||this.name,i=this.searchoptions||{},!0===this.frozen&&!0===q.p.frozenColumns?(e=T("#gs_"+q.p.idPrefix+T.jgrid.jqID(this.name),q.grid.fhDiv),t=!0):e=T("#gs_"+q.p.idPrefix+T.jgrid.jqID(this.name),q.grid.hDiv),void 0===e[0]&&(e=T("#gs_"+q.p.idPrefix+T.jgrid.jqID(this.name),q.grid.hDiv)),a=_.searchOperators&&i.searchOperMenu?e.parents("table.ui-search-table").find("td.ui-search-oper").children("a").attr("soper")||_.defaultSearch:i.sopt?i.sopt[0]:"select"===this.stype?"eq":_.defaultSearch,"custom"===this.stype&&T.jgrid.isFunction(i.custom_value)&&0<e.length?(r=i.custom_value.call(q,e,"get"),h.push(s)):r=e.val(),"select"===this.stype&&i.multiple&&Array.isArray(r)?r=0<r.length?(p=!0,c.push(s),1===r.length?r[0]:r):"":"bt"!==a&&"text"===this.stype&&!0===i.splitSearchWord&&u.push(s),this.searchrules&&_.errorcheck&&(T.jgrid.isFunction(this.searchrules)?f=this.searchrules.call(q,r,this):T.jgrid&&T.jgrid.checkValues&&(f=T.jgrid.checkValues.call(q,r,-1,this.searchrules,this.label||this.name)),f&&f.length&&!1===f[0]))return this.searchrules.hasOwnProperty("validationError")&&(m=this.searchrules.validationError),!1;if("bt"===a&&(g=!0),t&&"cb"!==s&&"rn"!==s&&"subgrid"!==s&&(d[s]=r),r||"nu"===a||"nn"===a||0<=T.inArray(a,w))o[s]=r,n[s]=a,l++;else try{delete q.p.postData[s]}catch(e){}}),!1!==f[0]){var e,t=0<l;if(!0===_.stringResult||"local"===q.p.datatype||!0===_.searchOperators){var y,v,j,b,S,F,O='{"groupOp":"'+_.groupOp+'","rules":[',x=0;if(T.each(o,function(e,t){0<x&&(O+=","),O+='{"field":"'+e+'",',O+='"op":"'+n[e]+'",',O+='"data":"'+(t+="").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',x++}),O+="]}",p&&(y=T.jgrid.filterRefactor({ruleGroup:O,ssfield:c,splitSelect:_.splitSelect,groupOpSelect:_.groupOpSelect})),g&&(y=!T.isPlainObject(y)?T.jgrid.parse(O):y).rules&&y.rules.length)for(v=y.rules,j=0;j<v.length;j++)"bt"===(b=v[j]).op&&1<(S=b.data.split("...")).length&&(void 0===y.groups&&(y.groups=[]),F={groupOp:"AND",groups:[],rules:[]},y.groups.push(F),T.each(S,function(e){S[e]&&F.rules.push({data:S[e],op:0===e?"ge":"le",field:b.field})}),v.splice(j,1),j--);u.length&&(y=T.jgrid.filterRefactor({ruleGroup:O,ssfield:u,splitSelect:i.splitSearchSeparator||";",groupOpSelect:"OR"})),(g||p||u.length)&&(O=JSON.stringify(y)),!0===q.p.mergeSearch&&q.p.searchModules.hasOwnProperty("filterToolbar")&&!1!==q.p.searchModules.filterToolbar?(q.p.searchModules.filterToolbar=0<x?O:null,t=!0,T.extend(q.p.postData,{filters:T.jgrid.splitSearch(q.p.searchModules)})):T.extend(q.p.postData,{filters:O}),T.each(["searchField","searchString","searchOper"],function(e,t){q.p.postData.hasOwnProperty(t)&&delete q.p.postData[t]})}else T.extend(q.p.postData,o);_.url&&(e=q.p.url,T(q).jqGrid("setGridParam",{url:_.url}));var D="stop"===T(q).triggerHandler("jqGridToolbarBeforeSearch");(D=!D&&T.jgrid.isFunction(_.beforeSearch)?_.beforeSearch.call(q):D)||T(q).jqGrid("setGridParam",{search:t}).trigger("reloadGrid",[{page:1}]),e&&T(q).jqGrid("setGridParam",{url:e}),T(q).triggerHandler("jqGridToolbarAfterSearch"),T.jgrid.isFunction(_.afterSearch)&&_.afterSearch.call(q),q.p.frozenColumns&&I(d,n,c,h)}else T.jgrid.isFunction(m)?m.call(q,f[1]):(e=T.jgrid.getRegional(q,"errors"),T.jgrid.info_dialog(e.errcap,f[1],"",{styleUI:q.p.styleUI}))},I=function(e,i,t,o){var l=T(".ui-search-toolbar",q.grid.hDiv),n=T(".ui-search-toolbar",q.grid.fhDiv);T.each(e,function(e,t){var r,s,a;!_.searchOperators||(s=i[e])&&(T(".ui-search-table .ui-search-oper [colname='userId']",l).attr({soper:s}).text(_.operands[s]),T(".ui-search-table .ui-search-oper [colname='userId']",n).attr({soper:s}).text(_.operands[s])),-1<T.inArray(e,o)?(a=T.jgrid.getElemByAttrVal(q.p.colModel,"name",e))&&a.searchoptions&&(r=a.searchoptions||{},T.jgrid.isFunction(r.custom_value)&&(s=T("#gs_"+q.p.idPrefix+T.jgrid.jqID(e),q.grid.fhDiv),a=T("#gs_"+q.p.idPrefix+T.jgrid.jqID(e),q.grid.hDiv),r.custom_value.call(q,s,"set",t),r.custom_value.call(q,a,"set",t))):(T("#gs_"+q.p.idPrefix+T.jgrid.jqID(e),l).val(t),T("#gs_"+q.p.idPrefix+T.jgrid.jqID(e),n).val(t))})},j=T("<tr class='ui-search-toolbar' role='row'></tr>");_.restoreFromFilters&&(t=!0===q.p.mergeSearch&&q.p.searchModules.hasOwnProperty("filterToolbar")&&!1!==q.p.searchModules.filterToolbar?q.p.searchModules.filterToolbar:q.p.postData.filters)&&("string"==typeof t&&(t=T.jgrid.parse(t)),f=!(!t.rules||!t.rules.length)&&t.rules);var b=new Set(_.disabledKeys);if(b.size!==_.disabledKeys.length)for(var r=0;r<_.disabledKeys.length;r++)(b=new Set).add(_.disabledKeys[r]);T.each(q.p.colModel,function(e){var t,r,s,a,i,o=this,l="",n="=",p=T("<th role='columnheader' class='"+y.headerBox+" ui-th-"+q.p.direction+" "+(o.labelClasses||"")+"' id='gsh_"+q.p.id+"_"+o.name+"' ></th>"),c=T("<div></div>"),u=T("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(!0===this.hidden&&T(p).css("display","none"),this.search=!1!==this.search,void 0===this.stype&&(this.stype="text"),this.searchoptions=this.searchoptions||{},void 0===this.searchoptions.searchOperMenu&&(this.searchoptions.searchOperMenu=!0),t=T.extend({},this.searchoptions,{name:o.index||o.name,id:"gs_"+q.p.idPrefix+o.name,oper:"search"}),this.search){if(_.restoreFromFilters&&f)for(var d=!1,h=0;h<f.length;h++)if(f[h].field)if((o.index||o.name)===f[h].field){d=f[h];break}if(_.searchOperators){for(r=t.sopt?t.sopt[0]:"select"===o.stype?"eq":_.defaultSearch,_.restoreFromFilters&&d&&(r=d.op),s=0;s<_.odata.length;s++)if(_.odata[s].oper===r){n=_.operands[r]||"";break}a=null!=t.searchtitle?t.searchtitle:_.operandTitle,l=this.searchoptions.searchOperMenu?"<a title='"+a+"' soper='"+r+"' class='soptclass' colname='"+this.name+"'>"+n+"</a>":""}switch(T("td",u).eq(0).attr("columname",o.name).append(l),void 0===t.clearSearch&&(t.clearSearch=!0),t.clearSearch?(i=_.resetTitle||"Clear Search Value",T("td",u).eq(2).append("<a title='"+i+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+_.resetIcon+"</a>")):T("td",u).eq(2).hide(),this.surl&&(t.dataUrl=this.surl),i="",t.defaultValue&&(i=T.jgrid.isFunction(t.defaultValue)?t.defaultValue.call(q):t.defaultValue),_.restoreFromFilters&&d&&(i=d.data),i=T.jgrid.createEl.call(q,this.stype,t,i,!1,T.extend({},T.jgrid.ajaxOptions,q.p.ajaxSelectOptions||{})),"custom"!==this.stype&&("select"===this.stype?T(i).addClass(m.srSelect):T(i).addClass(m.srInput)),T("td",u).eq(1).append(i),T(c).append(u),null==t.dataEvents&&(t.dataEvents=[]),this.stype){case"select":!0===_.autosearch&&t.dataEvents.push({type:"change",fn:function(){return v(),!1}});break;case"text":case"custom":!0===_.autosearch&&(_.searchOnEnter?t.dataEvents.push({type:"keypress",fn:function(e){return 13===(e.charCode||e.keyCode||0)?(v(),!1):this}}):t.dataEvents.push({type:"keydown",fn:function(e){e=e.which;if(!b.has(e)){if(13===e)return!1;g&&clearTimeout(g),g=setTimeout(function(){v()},_.autosearchDelay)}}}))}T.jgrid.bindEv.call(q,i,t)}T(p).append(c),T(j).append(p),_.searchOperators&&""!==l||T("td",u).eq(0).hide()}),T("table thead",q.grid.hDiv).append(j),_.searchOperators&&(T(".soptclass",j).click(function(e){var t=T(this).offset();!function(r,e,t){T("#sopt_menu").remove(),e=parseInt(e,10),t=parseInt(t,10)+18;var s,a='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+(T(".ui-jqgrid").css("font-size")||"11px")+";left:"+e+"px;top:"+t+'px;">',i=T(r).attr("soper"),o=[],t=T(r).attr("colname"),l=T.jgrid.getElemByAttrVal(q.p.colModel,"name",t,!0);if(-1!==l){var t=q.p.colModel[l],n=T.extend({},t.searchoptions);for(n.sopt||(n.sopt=[],n.sopt[0]="select"===t.stype?"eq":_.defaultSearch),T.each(_.odata,function(){o.push(this.oper)}),l=0;l<n.sopt.length;l++)-1!==(s=T.inArray(n.sopt[l],o))&&(a+='<li class="ui-menu-item '+(i===_.odata[s].oper?p.highlight:"")+'" role="presentation"><a class="'+p.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+_.odata[s].oper+'" oper="'+_.operands[_.odata[s].oper]+'"><table class="ui-common-table"><tr><td class="opersign">'+_.operands[_.odata[s].oper]+"</td><td>"+_.odata[s].text+"</td></tr></table></a></li>");a+="</ul>",T("body").append(a),T("#sopt_menu").addClass("ui-menu "+m.menu_widget),T("#sopt_menu > li > a").hover(function(){T(this).addClass(p.hover)},function(){T(this).removeClass(p.hover)}).click(function(){var e=T(this).attr("value"),t=T(this).attr("oper");T(q).triggerHandler("jqGridToolbarSelectOper",[e,t,r]),T("#sopt_menu").hide(),T(r).text(t).attr("soper",e),!0===_.autosearch&&(t=T(r).parent().next().children()[0],(T(t).val()||"nu"===e||"nn"===e||0<=T.inArray(e,w))&&v())})}}(this,t.left,t.top),e.stopPropagation()}),T("body").on("click",function(e){"soptclass"!==e.target.className&&T("#sopt_menu").remove()})),T(".clearsearchclass",j).click(function(){var e=T(this).parents("tr").first(),t=T("td.ui-search-oper",e).attr("columname"),r=0,s=T("td.ui-search-oper a",e).attr("soper");if(-1===(r=T.jgrid.getElemByAttrVal(q.p.colModel,"name",t,!0)))return!1;var a,i,o,l=q.p.colModel[r],n=T.extend({},l.searchoptions||{}),t=n.defaultValue||"";"select"===l.stype?(a=T("td.ui-search-input select",e),t?a.val(t):a[0].selectedIndex=0):(a=T("td.ui-search-input input",e)).val(t),T(q).triggerHandler("jqGridToolbarClearVal",[a[0],r,n,t]),T.jgrid.isFunction(_.onClearSearchValue)&&_.onClearSearchValue.call(q,a[0],r,n,t),("nu"===s||"nn"===s||0<=T.inArray(s,w))&&(i=n.sopt?n.sopt[0]:"select"===l.stype?"eq":_.defaultSearch,o=null!=q.p.customFilterDef&&null!=q.p.customFilterDef[i]?q.p.customFilterDef[i].operand:_.operands[i]||"",(i===s?T("td.ui-search-oper a",e).attr("soper","dummy"):T("td.ui-search-oper a",e).attr("soper",i)).text(o)),!0===_.autosearch&&(v(),i===s&&T("td.ui-search-oper a",e).attr("soper",i).text(o))}),T(q.grid.hDiv).on("scroll",function(e){q.grid.bDiv.scrollLeft=q.grid.hDiv.scrollLeft}),this.p.filterToolbar=!0,this.triggerToolbar=v,this.clearToolbar=function(e){var r,s={},a=0;e="boolean"!=typeof e||e,T.each(q.p.colModel,function(){var t,e=T("#gs_"+q.p.idPrefix+T.jgrid.jqID(this.name),!0===this.frozen&&!0===q.p.frozenColumns?q.grid.fhDiv:q.grid.hDiv);switch(this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(t=this.searchoptions.defaultValue),r=this.index||this.name,this.stype){case"select":if(e.find("option").each(function(e){if(0===e&&(this.selected=!0),T(this).val()===t)return!(this.selected=!0)}),void 0!==t)s[r]=t,a++;else try{delete q.p.postData[r]}catch(e){}break;case"text":if(e.val(t||""),void 0!==t)s[r]=t,a++;else try{delete q.p.postData[r]}catch(e){}break;case"custom":T.jgrid.isFunction(this.searchoptions.custom_value)&&0<e.length&&this.searchoptions.custom_value.call(q,e,"set",t||"")}});var i,o,t,l=0<a;(q.p.resetsearch=!0)===_.stringResult||"local"===q.p.datatype?(i='{"groupOp":"'+_.groupOp+'","rules":[',o=0,T.each(s,function(e,t){0<o&&(i+=","),i+='{"field":"'+e+'",',i+='"op":"eq",',i+='"data":"'+(t+="").replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',o++}),i+="]}",!0===q.p.mergeSearch&&q.p.searchModules.hasOwnProperty("filterToolbar")&&!1!==q.p.searchModules.filterToolbar?(q.p.searchModules.filterToolbar=0<o?i:null,l=!0,T.extend(q.p.postData,{filters:T.jgrid.splitSearch(q.p.searchModules)})):T.extend(q.p.postData,{filters:i}),T.each(["searchField","searchString","searchOper"],function(e,t){q.p.postData.hasOwnProperty(t)&&delete q.p.postData[t]})):T.extend(q.p.postData,s),_.url&&(t=q.p.url,T(q).jqGrid("setGridParam",{url:_.url}));var n="stop"===T(q).triggerHandler("jqGridToolbarBeforeClear");(n=!n&&T.jgrid.isFunction(_.beforeClear)?_.beforeClear.call(q):n)||e&&T(q).jqGrid("setGridParam",{search:l}).trigger("reloadGrid",[{page:1}]),t&&T(q).jqGrid("setGridParam",{url:t}),T(q).triggerHandler("jqGridToolbarAfterClear"),T.jgrid.isFunction(_.afterClear)&&_.afterClear()},this.toggleToolbar=function(){var e=T("tr.ui-search-toolbar",q.grid.hDiv);!0===q.p.frozenColumns&&T(q).jqGrid("destroyFrozenColumns"),"none"===e.css("display")?e.show():e.hide(),!0===q.p.frozenColumns&&T(q).jqGrid("setFrozenColumns")}}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,T(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},refreshFilterToolbar:function(g){return g=T.extend(!0,{filters:"",onClearVal:null,onSetVal:null},g||{}),this.each(function(){var a,i,o,e,l,n,p,c=this,u=c.p.colModel,d=c.p.colModel.length,h=[];if(c.p.filterToolbar){for(i=T(c).data("filterToolbar"),a=0;a<d;a++){switch(h.push(u[a].index||u[a].name),o=T("#gs_"+c.p.idPrefix+T.jgrid.jqID(u[a].name)),u[a].stype){case"select":case"text":o.val("")}T.jgrid.isFunction(g.onClearVal)&&g.onClearVal.call(c,o,u[a].name)}"string"==typeof g.filters&&(g.filters.length?e=g.filters:c.p.postData.hasOwnProperty("filters")&&(e=c.p.postData.filters),e=T.jgrid.parse(e)),T.isPlainObject(e)&&function e(t){if(t&&t.rules){for(l=t.rules,d=l.length,a=0;a<d;a++){var r;n=l[a],-1!==(p=T.inArray(n.field,h))&&0<(o=T("#gs_"+c.p.idPrefix+T.jgrid.jqID(u[p].name))).length&&("select"===u[p].stype?o.find("option[value='"+T.jgrid.jqID(n.data)+"']").prop("selected",!0):"text"===u[p].stype&&o.val(n.data),T.jgrid.isFunction(g.onSetVal)&&g.onSetVal.call(c,o,u[p].name),i&&i.searchOperators&&(r=o.parent().prev()).hasClass("ui-search-oper")&&(T(".soptclass",r).attr("soper",n.op),i.operands.hasOwnProperty(n.op)&&T(".soptclass",r).html(i.operands[n.op])))}if(t.groups)for(var s=0;s<t.groups.length;s++)e(t.groups[s])}}(e)}})},searchGrid:function(C){var e=T.jgrid.getRegional(this[0],"search");return C=T.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,splitSelect:",",groupOpSelect:"OR",operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE",in:"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"},buttons:[]},e,C||{}),this.each(function(){var a=this;if(a.grid){var t,r,s="fbox_"+a.p.id,i=!0,o=!0,l={themodal:"searchmod"+s,modalhead:"searchhd"+s,modalcontent:"searchcnt"+s,scrollelm:s},e=[],n=T.jgrid.styleUI[a.p.styleUI||"jQueryUI"].filter,p=T.jgrid.styleUI[a.p.styleUI||"jQueryUI"].common;if(C.styleUI=a.p.styleUI,"string"==typeof(t=T.isPlainObject(a.p._savedFilter)&&!T.isEmptyObject(a.p._savedFilter)?a.p._savedFilter:!0===a.p.mergeSearch&&a.p.searchModules.hasOwnProperty("searchGrid")&&!1!==a.p.searchModules.searchGrid?!0===a.p.searchModules.searchGrid?"":a.p.searchModules.searchGrid:a.p.postData[C.sFilter])&&(t=T.jgrid.parse(t)),!0===C.recreateFilter&&T("#"+T.jgrid.jqID(l.themodal)).remove(),void 0!==T("#"+T.jgrid.jqID(l.themodal))[0])G(T("#fbox_"+T.jgrid.jqID(a.p.id)));else{var c=T("<div><div id='"+s+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+T.jgrid.jqID(a.p.id)),u="left",d="";"rtl"===a.p.direction&&(u="right",d=" style='text-align:left'",c.attr("dir","rtl"));var h,g=T.extend([],a.p.colModel),f="<a id='"+s+"_search' class='fm-button "+p.button+" fm-button-icon-right ui-search'><span class='"+p.icon_base+" "+n.icon_search+"'></span>"+C.Find+"</a>",m="<a id='"+s+"_reset' class='fm-button "+p.button+" fm-button-icon-left ui-reset'><span class='"+p.icon_base+" "+n.icon_reset+"'></span>"+C.Reset+"</a>",y="",v="",j=!1,b=-1,S=!1,F=[];C.showQuery&&(y="<a id='"+s+"_query' class='fm-button "+p.button+" fm-button-icon-left'><span class='"+p.icon_base+" "+n.icon_query+"'></span>Query</a>");var O=T.jgrid.buildButtons(C.buttons,y+f,p),x=null;T(a).jqGrid("isGroupHeaderOn")&&(f=T("table.ui-jqgrid-htable",a.grid.hDiv).find(".jqg-second-row-header"),D=a.p.groupHeader.length,void 0!==f[0]&&(x=a.p.groupHeader[D-1]));var D;if(C.columns.length)g=C.columns,h=g[b=0].index||g[0].name;else{if(null!==x)for(var q=0;q<g.length;q++){var w=function(e,t){for(var r=t.length,s=0;s<r;s++)if(t[s].startColumnName===e)return s;return-1}(g[q].name,x.groupHeaders);if(0<=w){g[q].label=x.groupHeaders[w].titleText+"::"+a.p.colNames[q];for(var I=1;I<=x.groupHeaders[w].numberOfColumns-1;I++)g[q+I].label=x.groupHeaders[w].titleText+"::"+a.p.colNames[q+I];q=q+x.groupHeaders[w].numberOfColumns-1}}T.each(g,function(e,t){var r,s;t.label||(t.label=a.p.colNames[e]),j||(r=void 0===t.search||t.search,s=!0===t.hidden,(t.searchoptions&&!0===t.searchoptions.searchhidden&&r||r&&!s)&&(j=!0,h=t.index||t.name,b=e)),"select"===t.stype&&t.searchoptions&&t.searchoptions.multiple&&(S=!0,F.push(t.index||t.name))})}if((!t&&h||!1===C.multipleSearch)&&(D="eq",0<=b&&g[b].searchoptions&&g[b].searchoptions.sopt?D=g[b].searchoptions.sopt[0]:C.sopt&&C.sopt.length&&(D=C.sopt[0]),t={groupOp:"AND",rules:[{field:h,op:D,data:""}]}),j=!1,C.tmplNames&&C.tmplNames.length&&(j=!0,v="<tr><td class='ui-search-label'>"+C.tmplLabel+"</td>",v+="<td><select size='1' class='ui-template "+n.srSelect+"'>",v+="<option value='default'>Default</option>",T.each(C.tmplNames,function(e,t){v+="<option value='"+e+"'>"+t+"</option>"}),v+="</select></td></tr>"),void 0!==a.p.customFilterDef)for(var _ in a.p.customFilterDef)a.p.customFilterDef.hasOwnProperty(_)&&!C.operands.hasOwnProperty(_)&&(C.odata.push({oper:_,text:a.p.customFilterDef[_].text}),C.operands[_]=a.p.customFilterDef[_].operand,!0===a.p.customFilterDef[_].unary&&e.push(_));O="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+s+"_2'><tbody><tr><td colspan='2'><hr class='"+p.content+"' style='margin:1px'/></td></tr>"+v+"<tr><td class='EditButton' style='text-align:"+u+"'>"+m+"</td><td class='EditButton' "+d+">"+O+"</td></tr></tbody></table>",s=T.jgrid.jqID(s),T("#"+s).jqFilter({columns:g,sortStrategy:C.sortStrategy,filter:C.loadDefaults?t:null,showQuery:C.showQuery,errorcheck:C.errorcheck,sopt:C.sopt,groupButton:C.multipleGroup,ruleButtons:C.multipleSearch,uniqueSearchFields:C.uniqueSearchFields,afterRedraw:C.afterRedraw,ops:C.odata,operands:C.operands,ajaxSelectOptions:a.p.ajaxSelectOptions,groupOps:C.groupOps,addsubgrup:C.addsubgrup,addrule:C.addrule,delgroup:C.delgroup,delrule:C.delrule,autoencode:a.p.autoencode,unaryOperations:e,onChange:function(){this.p.showQuery&&T(".query",this).html(this.toUserFriendlyString()),T.jgrid.isFunction(C.afterChange)&&C.afterChange.call(a,T("#"+s),C)},direction:a.p.direction,id:a.p.id}),c.append(O),T("#"+s+"_2").find("[data-index]").each(function(){var t=parseInt(T(this).attr("data-index"),10);0<=t&&T(this).on("click",function(e){C.buttons[t].click.call(a,T("#"+s),C,e)})}),j&&C.tmplFilters&&C.tmplFilters.length&&T(".ui-template",c).on("change",function(){var e=T(this).val();return"default"===e?T("#"+s).jqFilter("addFilter",t):T("#"+s).jqFilter("addFilter",C.tmplFilters[parseInt(e,10)]),!1}),!0===C.multipleGroup&&(C.multipleSearch=!0),T(a).triggerHandler("jqGridFilterInitialize",[T("#"+s)]),T.jgrid.isFunction(C.onInitializeSearch)&&C.onInitializeSearch.call(a,T("#"+s)),C.gbox="#gbox_"+T.jgrid.jqID(a.p.id);O=T(".ui-jqgrid").css("font-size")||"11px";C.layer?T.jgrid.createModal(l,c,C,"#gview_"+T.jgrid.jqID(a.p.id),T("#gbox_"+T.jgrid.jqID(a.p.id))[0],"string"==typeof C.layer?"#"+T.jgrid.jqID(C.layer):C.layer,"string"==typeof C.layer?{position:"relative","font-size":O}:{"font-size":O}):T.jgrid.createModal(l,c,C,"#gview_"+T.jgrid.jqID(a.p.id),T("#gbox_"+T.jgrid.jqID(a.p.id))[0],null,{"font-size":O}),(C.searchOnEnter||C.closeOnEscape)&&T("#"+T.jgrid.jqID(l.themodal)).keydown(function(e){var t=T(e.target);return!C.searchOnEnter||13!==e.which||t.hasClass("add-group")||t.hasClass("add-rule")||t.hasClass("delete-group")||t.hasClass("delete-rule")||t.hasClass("fm-button")&&t.is("[id$=_query]")?C.closeOnEscape&&27===e.which?(T("#"+T.jgrid.jqID(l.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void 0:(T("#"+s+"_search").click(),!1)}),y&&T("#"+s+"_query").on("click",function(){return T(".queryresult",c).toggle(),!1}),void 0===C.stringResult&&(C.stringResult=C.multipleSearch),T("#"+s+"_search").on("click",function(){var e,t={};return(r=T("#"+s)).find(".input-elm:focus").change(),S&&C.multipleSearch?(a.p._savedFilter={},e=T.jgrid.filterRefactor({ruleGroup:T.extend(!0,{},r.jqFilter("filterData")),ssfield:F,splitSelect:C.splitSelect,groupOpSelect:C.groupOpSelect}),a.p._savedFilter=T.extend(!0,{},r.jqFilter("filterData"))):e=r.jqFilter("filterData"),C.errorcheck&&(r[0].hideError(),C.showQuery||r.jqFilter("toSQLString"),r[0].p.error)?r[0].showError():(C.stringResult?(t[C.sFilter]=JSON.stringify(e),T.each([C.sField,C.sValue,C.sOper],function(){t[this]=""})):C.multipleSearch?(t[C.sFilter]=e,T.each([C.sField,C.sValue,C.sOper],function(){t[this]=""})):(t[C.sField]=e.rules[0].field,t[C.sValue]=e.rules[0].data,t[C.sOper]=e.rules[0].op,t[C.sFilter]=""),"string"!=typeof t[C.sFilter]&&(t[C.sFilter]=JSON.stringify(t[C.sFilter])),(a.p.search=!0)===a.p.mergeSearch&&a.p.searchModules.hasOwnProperty("searchGrid")&&!1!==a.p.searchModules.searchGrid&&C.multipleSearch?(""!==t[C.sFilter]?a.p.searchModules.searchGrid=t[C.sFilter]:a.p.searchModules.searchGrid=null,T.extend(a.p.postData,{filters:T.jgrid.splitSearch(a.p.searchModules)})):T.extend(a.p.postData,t),!1!==(o=(o=void 0===(o=T(a).triggerHandler("jqGridFilterSearch"))?!0:o)&&T.jgrid.isFunction(C.onSearch)?C.onSearch.call(a,a.p.filters):o)&&T(a).trigger("reloadGrid",[{page:1}]),C.closeAfterSearch&&T.jgrid.hideModal("#"+T.jgrid.jqID(l.themodal),{gb:"#gbox_"+T.jgrid.jqID(a.p.id),jqm:C.jqModal,onClose:C.onClose})),!1}),T("#"+s+"_reset").on("click",function(){var e={},t=T("#"+s);return a.p.search=!1,!(a.p.resetsearch=!0)===C.multipleSearch?e[C.sField]=e[C.sValue]=e[C.sOper]="":e[C.sFilter]="",t[0].resetFilter(),j&&T(".ui-template",c).val("default"),!0===a.p.mergeSearch&&a.p.searchModules.hasOwnProperty("searchGrid")&&!1!==a.p.searchModules.searchGrid?(a.p.searchModules.searchGrid=null,T.extend(a.p.postData,{filters:T.jgrid.splitSearch(a.p.searchModules)}),a.p.search=!0):T.extend(a.p.postData,e),!1!==(o=(o=void 0===(o=T(a).triggerHandler("jqGridFilterReset"))?!0:o)&&T.jgrid.isFunction(C.onReset)?C.onReset.call(a):o)&&T(a).trigger("reloadGrid",[{page:1}]),C.closeAfterReset&&T.jgrid.hideModal("#"+T.jgrid.jqID(l.themodal),{gb:"#gbox_"+T.jgrid.jqID(a.p.id),jqm:C.jqModal,onClose:C.onClose}),!1}),G(T("#"+s)),T(".fm-button:not(."+p.disabled+")",c).hover(function(){T(this).addClass(p.hover)},function(){T(this).removeClass(p.hover)})}}function G(e){(i=(i=void 0===(i=T(a).triggerHandler("jqGridFilterBeforeShow",[e]))?!0:i)&&T.jgrid.isFunction(C.beforeShowSearch)?C.beforeShowSearch.call(a,e):i)&&(T.jgrid.viewModal("#"+T.jgrid.jqID(l.themodal),{gbox:"#gbox_"+T.jgrid.jqID(a.p.id),jqm:C.jqModal,modal:C.modal,overlay:C.overlay,toTop:C.toTop}),T(a).triggerHandler("jqGridFilterAfterShow",[e]),T.jgrid.isFunction(C.afterShowSearch)&&C.afterShowSearch.call(a,e))}})},filterInput:function(o,l){return l=T.extend(!0,{defaultSearch:"cn",groupOp:"OR",searchAll:!1,beforeSearch:null,afterSearch:null},l||{}),this.each(function(){var e,t,r,s,a,i=this;i.grid&&(t='{"groupOp":"'+l.groupOp+'","rules":[',r=0,o+="","local"===i.p.datatype&&(T.each(i.p.colModel,function(){e=this.index||this.name,s=this.searchoptions||{},s=l.defaultSearch||(s.sopt?s.sopt[0]:l.defaultSearch),this.search=!1!==this.search,(this.search||l.searchAll)&&(0<r&&(t+=","),t+='{"field":"'+e+'",',t+='"op":"'+s+'",',t+='"data":"'+o.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',r++)}),t+="]}",!0===i.p.mergeSearch&&i.p.searchModules.hasOwnProperty("filterInput")&&!1!==i.p.searchModules.filterInput?(i.p.searchModules.filterInput=0<r?t:null,T.extend(i.p.postData,{filters:T.jgrid.splitSearch(i.p.searchModules)})):T.extend(i.p.postData,{filters:t}),T.each(["searchField","searchString","searchOper"],function(e,t){i.p.postData.hasOwnProperty(t)&&delete i.p.postData[t]}),(a=!(a="stop"===T(i).triggerHandler("jqGridFilterInputBeforeSearch"))&&T.jgrid.isFunction(l.beforeSearch)?l.beforeSearch.call(i):a)||T(i).jqGrid("setGridParam",{search:!0}).trigger("reloadGrid",[{page:1}]),T(i).triggerHandler("jqGridFilterInputAfterSearch"),T.jgrid.isFunction(l.afterSearch)&&l.afterSearch.call(i)))})},autoSelect:function(n){return n=T.extend(!0,{field:"",direction:"asc",src_date:"Y-m-d",allValues:"All",count_item:!0,create_value:!0},n||{}),this.each(function(){var e,t=this,r="";if(n.field&&t.p.data&&Array.isArray(t.p.data)){var s,a,i,o,l=[];try{o=(i=T.jgrid.from.call(t,t.p.data).groupBy(n.field,n.direction,"text",n.src_date)).length}catch(e){}if(i&&i.length){for(a=T("#gsh_"+t.p.id+"_"+n.field).find("td.ui-search-input > select"),o=i.length,n.allValues&&(r="<option value=''>"+n.allValues+"</option>",l.push(":"+n.allValues));o--;)e=i[o],s=n.count_item?" ("+e.items.length+")":"",r+="<option value='"+e.unique+"'>"+e.unique+s+"</option>",l.push(e.unique+":"+e.unique+s);a.append(r),a.on("change",function(){t.triggerToolbar()}),n.create_value&&(a=T.jgrid.getElemByAttrVal(t.p.colModel,"name",n.field,!1),T.isEmptyObject(a)||(a.searchoptions?T.extend(a.searchoptions,{value:l.join(";")}):(a.searchoptions={},a.searchoptions.value=l.join(";"))))}}})}})});