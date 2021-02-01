!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.utils"],e):e(jQuery)}(function(E){"use strict";E.jgrid=E.jgrid||{},E.extend(E.jgrid,{formatCell:function(e,t,r,l,o,a){return void 0!==l.formatter?(a={rowId:"",colModel:l,gid:o.p.id,pos:t,styleUI:"",isExported:!0,exporttype:a},E.jgrid.isFunction(l.formatter)?l.formatter.call(o,e,a,r):E.fmatter?E.fn.fmatter.call(o,l.formatter,e,a,r):e):e},formatCellCsv:function(t,e){t=null==t?"":String(t);try{t=E.jgrid.stripHtml(t.replace(e._regexsep,e.separatorReplace).replace(/\r\n/g,e.replaceNewLine).replace(/\n/g,e.replaceNewLine))}catch(e){t=""}return e.escquote&&(t=t.replace(e._regexquot,e.escquote+e.quote)),-1!==t.indexOf(e.separator)&&-1!==t.indexOf(e.qoute)||(t=e.quote+t+e.quote),t},excelCellPos:function(e){for(var t="A".charCodeAt(0),r="Z".charCodeAt(0)-t+1,l="";0<=e;)l=String.fromCharCode(e%r+t)+l,e=Math.floor(e/r)-1;return l},makeNode:function(e,t,r){var l=e.createElement(t);return r&&(r.attr&&E(l).attr(r.attr),r.children&&E.each(r.children,function(e,t){l.appendChild(t)}),r.hasOwnProperty("text")&&l.appendChild(e.createTextNode(r.text))),l},xmlToZip:function(o,e){var a,d,n,i,p,s=this,m=new XMLSerializer,f=-1===m.serializeToString(E.parseXML(E.jgrid.excelStrings["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"),u=[];E.each(e,function(e,t){if(E.isPlainObject(t))p=o.folder(e),s.xmlToZip(p,t);else{if(f){for(a=t.childNodes[0],d=a.attributes.length-1;0<=d;d--){var r=a.attributes[d].nodeName,l=a.attributes[d].nodeValue;-1!==r.indexOf(":")&&(u.push({name:r,value:l}),a.removeAttribute(r))}for(d=0,n=u.length;d<n;d++)(i=t.createAttribute(u[d].name.replace(":","_dt_b_namespace_token_"))).value=u[d].value,a.setAttributeNode(i)}p=m.serializeToString(t),f&&(-1===p.indexOf("<?xml")&&(p='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+p),p=p.replace(/_dt_b_namespace_token_/g,":")),p=p.replace(/<row xmlns="" /g,"<row ").replace(/<cols xmlns="">/g,"<cols>").replace(/<mergeCells xmlns="" /g,"<mergeCells ").replace(/<numFmt xmlns="" /g,"<numFmt ").replace(/<xf xmlns="" /g,"<xf "),o.file(e,p)}})},excelStrings:{"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="7"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/><numFmt numFmtId="170" formatCode="yyyy/mm/dd;@"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="170" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},excelParsers:[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(e){return e/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(e){return e/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(e){return-1*e.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(e){return-1*e.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64},{match:/^\d{4}\-\d{2}\-\d{2}$/,style:67},{match:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi,style:4}]}),E.jgrid.extend({exportToCsv:function(k){k=E.extend(!0,{separator:",",separatorReplace:" ",quote:'"',escquote:'"',newLine:"\r\n",replaceNewLine:" ",includeCaption:!0,includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,includeHeader:!0,fileName:"jqGridExport.csv",mimetype:"text/csv;charset=utf-8",returnAsString:!1,onBeforeExport:null,treeindent:" ",loadIndicator:!0},k||{});var T="";if(this.each(function(){k._regexsep=new RegExp(k.separator,"g"),k._regexquot=new RegExp(k.quote,"g");var e,t,w=this,r=w.p.treeGrid?E(w).jqGrid("getRowData",null,!0,k.treeindent):w.addLocalData(!0),l=r.length,o=w.p.colModel,a=o.length,d=w.p.colNames,n=0,i="",p="",s="",m="",f="",u=[],c="";E.jgrid.isFunction(k.loadIndicator)?k.loadIndicator("show"):k.loadIndicator&&E(w).jqGrid("progressBar",{method:"show",loadtype:w.p.loadui,htmlcontent:E.jgrid.getRegional(w,"defaults.loadtext")});var g=[];if(E.each(o,function(e,t){t._expcol=!0,void 0===t.exportcol?t.hidden&&(t._expcol=!1):t._expcol=t.exportcol,"cb"!==t.name&&"rn"!==t.name&&"subgrid"!==t.name||(t._expcol=!1),t._expcol&&(u.push(E.jgrid.formatCellCsv(d[e],k)),g.push(t.name))}),k.includeLabels&&(f=u.join(k.separator)+k.newLine),k.collen=u.length,w.p.grouping){var y=!!w.p.groupingView._locgr;w.p.groupingView._locgr=!1,i+=function(s,m){var f="",u=w.p.groupingView,c=[],g=u.groupField.length,y=w.p.colModel,h=y.length,x=0;function I(e,t,r,l){for(var o,a,d=function(e,t,r){var l,o=!1;if(0===t)o=r[e];else{var a=r[e].idx;if(0===a)o=r[e];else for(l=e;0<=l;l--)if(r[l].idx===a-t){o=r[l];break}}return o}(e,t,r),n=d.cnt,i=new Array(m.collen),p=0,s=l;s<h;s++)y[s]._excol&&(a="{0}",E.each(d.summary,function(){if(this.nm===y[s].name){y[s].summaryTpl&&(a=y[s].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&0<n&&(this.v=this.v/n));try{this.groupCount=d.cnt,this.groupIndex=d.dataIndex,this.groupValue=d.value,o=this.v}catch(e){o=this.v}return i[p]=E.jgrid.formatCellCsv(E.jgrid.stripHtml(E.jgrid.template(a,o)),m),!1}}),p++);return i}E.each(y,function(e,t){for(var r=0;r<g;r++)if(u.groupField[r]===t.name){c[r]=e;break}});var F,b,v=E.makeArray(u.groupSummary);if(v.reverse(),"local"===w.p.datatype&&!w.p.loadonce){E(w).jqGrid("groupingSetup");for(var e=E.jgrid.getMethod("groupingPrepare"),t=0;t<l;t++)e.call(E(w),r[t],t)}return E.each(u.groups,function(e,t){x++;try{F=Array.isArray(u.formatDisplayField)&&E.jgrid.isFunction(u.formatDisplayField[t.idx])?u.formatDisplayField[t.idx].call(w,t.displayValue,t.value,w.p.colModel[c[t.idx]],t.idx,u):w.formatter("",t.displayValue,c[t.idx],t.value)}catch(e){F=t.displayValue}var r,l="";if("string"!=typeof(l=E.jgrid.isFunction(u.groupText[t.idx])?u.groupText[t.idx].call(w,F,t.cnt,t.summary):E.jgrid.template(u.groupText[t.idx],F,t.cnt,t.summary))&&"number"!=typeof l&&(l=F),(r="header"===u.groupSummaryPos[t.idx]?I(e,0,u.groups,0):new Array(m.collen))[0]=E.jgrid.formatCellCsv(E.jgrid.stripHtml(l),m),f+=r.join(m.separator)+m.newLine,g-1===t.idx){for(var o,a,d,n=u.groups[e+1],l=t.startRow,i=void 0!==n?n.startRow:u.groups[e].startRow+u.groups[e].cnt,p=l;p<i&&s[+p];p++){for(a=s[+p],o=b=0;o<y.length;o++)y[o]._expcol&&(r[b]=E.jgrid.formatCellCsv(E.jgrid.formatCell(E.jgrid.getAccessor(a,y[o].name),o,a,y[o],w,"csv"),m),b++);f+=r.join(m.separator)+m.newLine}if("header"!==u.groupSummaryPos[t.idx]){if(void 0!==n){for(d=0;d<u.groupField.length&&n.dataIndex!==u.groupField[d];d++);x=u.groupField.length-d}for(o=0;o<x;o++)v[o]&&(r=I(e,o,u.groups,0),f+=r.join(m.separator)+m.newLine);x=d}}}),f}(r,k),w.p.groupingView._locgr=y}else for(;n<l;){for(e=r[n],F=[],x=t=0;x<a;x++)o[x]._expcol&&(F[t]=E.jgrid.formatCellCsv(E.jgrid.formatCell(E.jgrid.getAccessor(e,o[x].name),x,e,o[x],w,"csv"),k),t++);i+=F.join(k.separator)+k.newLine,n++}if(r=null,F=new Array(k.collen),k.includeCaption&&w.p.caption){for(n=k.collen;--n;)F[n]="";F[0]=E.jgrid.formatCellCsv(w.p.caption,k),p+=F.join(k.separator)+k.newLine}if(k.includeGroupHeader&&E(w).jqGrid("isGroupHeaderOn"))for(var h=w.p.groupHeader,x=0;x<h.length;x++){for(var I=h[x].groupHeaders,n=0,F=[],b=0;b<g.length;b++){for(F[n]="",t=0;t<I.length;t++)I[t].startColumnName===g[b]&&(F[n]=E.jgrid.formatCellCsv(I[t].titleText,k));n++}s+=F.join(k.separator)+k.newLine}if(k.includeFooter&&w.p.footerrow&&E(".ui-jqgrid-ftable",this.sDiv).length){var v=E(w).jqGrid("footerData","get");for(x=0,F=[];x<k.collen;){var j=g[x];v.hasOwnProperty(j)&&F.push(E.jgrid.formatCellCsv(E.jgrid.stripHtml(v[j]),k)),x++}m+=F.join(k.separator)+k.newLine}if(k.includeHeader&&w.p.headerrow){var C=E(w).jqGrid("headerData","get");for(x=0,F=[];x<k.collen;){var B=g[x];C.hasOwnProperty(B)&&F.push(E.jgrid.formatCellCsv(E.jgrid.stripHtml(C[B]),k)),x++}c+=F.join(k.separator)+k.newLine}T=p+s+f+c+i+m,E.jgrid.isFunction(k.loadIndicator)?k.loadIndicator("hide"):k.loadIndicator&&E(w).jqGrid("progressBar",{method:"hide",loadtype:w.p.loadui})}),k.returnAsString)return T;if(-1!==k.mimetype.toUpperCase().indexOf("UTF-8")&&(T="\ufeff"+T),E.jgrid.isFunction(k.onBeforeExport)&&!(T=k.onBeforeExport(T)))throw"Before export does not return data!";E.jgrid.saveAs(T,k.fileName,{type:k.mimetype})},exportToExcel:function(P){P=E.extend(!0,{includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,includeHeader:!0,fileName:"jqGridExport.xlsx",mimetype:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",maxlength:40,onBeforeExport:null,replaceStr:null,treeindent:" ",loadIndicator:!0},P||{}),this.each(function(){for(var F=this,e=E.jgrid.excelStrings,c=0,g=E.parseXML(e["xl/worksheets/sheet1.xml"]),y=g.getElementsByTagName("sheetData")[0],o=E.parseXML(e["xl/styles.xml"]),a=o.getElementsByTagName("numFmts")[0],d=E(a.getElementsByTagName("numFmt")),n=o.getElementsByTagName("cellXfs")[0],t={_rels:{".rels":E.parseXML(e["_rels/.rels"])},xl:{_rels:{"workbook.xml.rels":E.parseXML(e["xl/_rels/workbook.xml.rels"])},"workbook.xml":E.parseXML(e["xl/workbook.xml"]),"styles.xml":o,worksheets:{"sheet1.xml":g}},"[Content_Types].xml":E.parseXML(e["[Content_Types].xml"])},b=F.p.colModel,r=0,v={body:F.p.treeGrid?E(F).jqGrid("getRowData",null,!0,P.treeindent):F.addLocalData(!0),header:[],footer:[],width:[],map:[],parser:[]},l=0,i=b.length;l<i;l++)b[l]._expcol=!0,void 0===b[l].exportcol?b[l].hidden&&(b[l]._expcol=!1):b[l]._expcol=b[l].exportcol,"cb"!==b[l].name&&"rn"!==b[l].name&&"subgrid"!==b[l].name&&b[l]._expcol&&(v.header[r]=b[l].name,v.width[r]=5,v.map[r]=l,v.parser[l]=function(e){var r,l,t;return E.isEmptyObject(e)?e.excel_parsers=!0:e.excel_format&&!e.excel_style&&(l=r=0,E.each(d,function(e,t){r++,l=Math.max(l,parseInt(E(t).attr("numFmtId"),10))}),t=E.jgrid.makeNode(o,"numFmt",{attr:{numFmtId:l+1,formatCode:e.excel_format}}),a.appendChild(t),E(a).attr("count",r+1),r=0,t=E.jgrid.makeNode(o,"xf",{attr:{numFmtId:l+1+"",fontId:"0",fillId:"0",borderId:"0",applyFont:"1",applyFill:"1",applyBorder:"1",xfId:"0",applyNumberFormat:"1"}}),n.appendChild(t),r=parseInt(E(n).attr("count"),10),E(n).attr("count",r+1),e.excel_style=r+1),e}(b[l].hasOwnProperty("exportoptions")?b[l].exportoptions:{}),r++);function h(e,t){return E.jgrid.makeNode(g,"c",{attr:e,children:[E.jgrid.makeNode(g,"v",{text:t})]})}function x(e,t){return E.jgrid.makeNode(g,"c",{attr:{t:"inlineStr",r:e},children:{row:E.jgrid.makeNode(g,"is",{children:{row:E.jgrid.makeNode(g,"t",{text:t})}})}})}var I,w,j=E.jgrid.isFunction(P.replaceStr)?P.replaceStr:function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,"")},C=function(e,t){I=c+1,w=E.jgrid.makeNode(g,"row",{attr:{r:I}});for(var r,l,o=0;o<v.header.length;o++){var a,d,n=E.jgrid.excelCellPos(o)+""+I;null==(u=Array.isArray(e)&&t?F.p.colNames[v.map[o]]:E.jgrid.getAccessor(e,v.header[o]))&&(u=""),t||(u=E.jgrid.formatCell(u,v.map[o],e,b[v.map[o]],F,"excel")),v.width[o]=Math.max(v.width[o],Math.min(parseInt(u.toString().length,10),P.maxlength)),a=null;var i=v.parser[v.map[o]];if(!0===i.excel_parsers)for(var p=0,s=E.jgrid.excelParsers.length;p<s;p++){var m=E.jgrid.excelParsers[p];if(u.match&&!u.match(/^0\d+/)&&u.match(m.match)){var f=u,u=u.replace(/[^\d\.\-]/g,"");if(m.fmt&&(u=m.fmt(u)),67===m.style)a=h({t:"d",r:n,s:m.style},u);else if(4===m.style)r=f,l=void 0,(l=document.createElement("div")).innerHTML=r,a=(u="A"===(l=l.firstChild).nodeName?[l.href,l.text]:"#text"===l.nodeName&&[l.textContent,l.textContent])?(r={t:"str",r:n,s:m.style},l='HYPERLINK("'+u[0]+'","'+u[1]+'")',E.jgrid.makeNode(g,"c",{attr:r,children:[E.jgrid.makeNode(g,"f",{text:l})]})):x(n,f);else{if(E.inArray(m.style,["63","64","65","66"])&&15<u.toString().length){a=x(n,f.replace?j(f):f),w.appendChild(a);break}a=h({r:n,s:m.style},u)}w.appendChild(a);break}}else void 0===i.excel_format||void 0===i.excel_style||t||a||(i.replace_format&&(u=i.replace_format(u)),a=h({r:n,s:i.excel_style},u),w.appendChild(a));a||(u.match&&(d=u.match(/^-?([1-9]\d+)(\.(\d+))?$/)),a="number"==typeof u&&u.toString().length<=15||d&&d[1].length+(d[2]?d[3].length:0)<=15?h({t:"n",r:n},u):x(n,u.replace?j(u):u),w.appendChild(a))}y.appendChild(w),c++};if(E.jgrid.isFunction(P.loadIndicator)?P.loadIndicator("show"):P.loadIndicator&&E(F).jqGrid("progressBar",{method:"show",loadtype:F.p.loadui,htmlcontent:E.jgrid.getRegional(F,"defaults.loadtext")}),E("sheets sheet",t.xl["workbook.xml"]).attr("name",P.sheetName),P.includeGroupHeader&&E(F).jqGrid("isGroupHeaderOn")){for(var p,s=F.p.groupHeader,m=[],f=0,u=0;u<s.length;u++){var B=s[u].groupHeaders,k={};for(f++,l=l=0;l<v.header.length;l++){k[p=v.header[l]]="";for(var T,_,N=0;N<B.length;N++)B[N].startColumnName===p&&(k[p]=B[N].titleText,T=E.jgrid.excelCellPos(l)+f,_=E.jgrid.excelCellPos(l+B[N].numberOfColumns-1)+f,m.push({ref:T+":"+_}))}C(k,!0)}E("row c",g).attr("s","2");var S=E.jgrid.makeNode(g,"mergeCells",{attr:{count:m.length}});for(E("worksheet",g).append(S),r=0;r<m.length;r++)S.appendChild(E.jgrid.makeNode(g,"mergeCell",{attr:m[r]}))}if(P.includeLabels&&(C(v.header,!0),E("row:last c",g).attr("s","2")),P.includeHeader||F.p.headerrow){var A=E(F).jqGrid("headerData","get");for(r in A)A.hasOwnProperty(r)&&(A[r]=E.jgrid.stripHtml(A[r]));E.isEmptyObject(A)||(C(A,!0),E("row:last c",g).attr("s","2"))}if(F.p.grouping){e=!!F.p.groupingView._locgr;F.p.groupingView._locgr=!1,function(s){var m=F.p.groupingView,f=[],u=m.groupField.length,c=b.length,g=0;function y(e,t,r,l){for(var o,a,d=function(e,t,r){var l,o=!1;if(0===t)o=r[e];else{var a=r[e].idx;if(0===a)o=r[e];else for(l=e;0<=l;l--)if(r[l].idx===a-t){o=r[l];break}}return o}(e,t,r),n=d.cnt,i=h(v.header),p=l;p<c;p++)b[p]._expcol&&(a="{0}",E.each(d.summary,function(){if(this.nm===b[p].name){b[p].summaryTpl&&(a=b[p].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&0<n&&(this.v=this.v/n));try{this.groupCount=d.cnt,this.groupIndex=d.dataIndex,this.groupValue=d.value,o=this.v}catch(e){o=this.v}return i[this.nm]=E.jgrid.stripHtml(E.jgrid.template(a,o)),!1}}));return i}function h(e){for(var t={},r=0;r<e.length;r++)t[e[r]]="";return t}E.each(b,function(e,t){for(var r=0;r<u;r++)if(m.groupField[r]===t.name){f[r]=e;break}});var x,I=E.makeArray(m.groupSummary);if(I.reverse(),"local"===F.p.datatype&&!F.p.loadonce){E(F).jqGrid("groupingSetup");for(var e=E.jgrid.getMethod("groupingPrepare"),t=0;t<v.body.length;t++)e.call(E(F),v.body[t],t)}E.each(m.groups,function(e,t){g++;try{x=Array.isArray(m.formatDisplayField)&&E.jgrid.isFunction(m.formatDisplayField[t.idx])?m.formatDisplayField[t.idx].call(F,t.displayValue,t.value,F.p.colModel[f[t.idx]],t.idx,m):F.formatter("",t.displayValue,f[t.idx],t.value)}catch(e){x=t.displayValue}var r,l="";if("string"!=typeof(l=E.jgrid.isFunction(m.groupText[t.idx])?m.groupText[t.idx].call(F,x,t.cnt,t.summary):E.jgrid.template(m.groupText[t.idx],x,t.cnt,t.summary))&&"number"!=typeof l&&(l=x),(r="header"===m.groupSummaryPos[t.idx]?y(e,0,m.groups,0):h(v.header))[Object.keys(r)[0]]=E.jgrid.stripHtml(new Array(5*t.idx).join(" ")+l),C(r,!1),u-1===t.idx){for(var o,a,d=m.groups[e+1],l=t.startRow,n=void 0!==d?d.startRow:m.groups[e].startRow+m.groups[e].cnt,i=l;i<n&&s[+i];i++){var p=s[+i];C(p,!1)}if("header"!==m.groupSummaryPos[t.idx]){if(void 0!==d){for(a=0;a<m.groupField.length&&d.dataIndex!==m.groupField[a];a++);g=m.groupField.length-a}for(o=0;o<g;o++)I[o]&&(r=y(e,o,m.groups,0),C(r,!1));g=a}}})}(v.body),F.p.groupingView._locgr=e}else for(var H=0,q=v.body.length;H<q;H++)C(v.body[H],!1);if(P.includeFooter||F.p.footerrow){for(r in v.footer=E(F).jqGrid("footerData","get"),v.footer)v.footer.hasOwnProperty(r)&&(v.footer[r]=E.jgrid.stripHtml(v.footer[r]));E.isEmptyObject(v.footer)||(C(v.footer,!0),E("row:last c",g).attr("s","2"))}var D=E.jgrid.makeNode(g,"cols");for(E("worksheet",g).prepend(D),r=0,i=v.width.length;r<i;r++)D.appendChild(E.jgrid.makeNode(g,"col",{attr:{min:r+1,max:r+1,width:v.width[r],customWidth:1}}));E.jgrid.isFunction(P.onBeforeExport)&&P.onBeforeExport(t,c),v=null;try{var G=new JSZip,L={type:"blob",mimeType:P.mimetype};E.jgrid.xmlToZip(G,t),G.generateAsync?G.generateAsync(L).then(function(e){E.jgrid.saveAs(e,P.fileName,{type:P.mimetype})}):E.jgrid.saveAs(G.generate(L),P.fileName,{type:P.mimetype})}catch(e){throw e}finally{E.jgrid.isFunction(P.loadIndicator)?P.loadIndicator("hide"):P.loadIndicator&&E(F).jqGrid("progressBar",{method:"hide",loadtype:F.p.loadui})}})},exportToPdf:function(F){return F=E.extend(!0,{title:null,orientation:"portrait",pageSize:"A4",description:null,onBeforeExport:null,download:"download",includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,includeHeader:!0,fileName:"jqGridExport.pdf",mimetype:"application/pdf",treeindent:"-",loadIndicator:!0},F||{}),this.each(function(){var e,t,r,v=this,w=[],l=v.p.colModel,a={},d=v.p.treeGrid?E(v).jqGrid("getRowData",null,!0,F.treeindent):v.addLocalData(!0),j=[],n=0,i=[],o=[],p=[],C={};for(E.jgrid.isFunction(F.loadIndicator)?F.loadIndicator("show"):F.loadIndicator&&E(v).jqGrid("progressBar",{method:"show",loadtype:v.p.loadui,htmlcontent:E.jgrid.getRegional(v,"defaults.loadtext")}),e=0,y=l.length;e<y;e++)l[e]._expcol=!0,void 0===l[e].exportcol?l[e].hidden&&(l[e]._expcol=!1):l[e]._expcol=l[e].exportcol,"cb"!==l[e].name&&"rn"!==l[e].name&&"subgrid"!==l[e].name&&l[e]._expcol&&(a={text:v.p.colNames[e],style:"tableHeader"},o.push(a),j[n]=l[e].name,i[n]=e,p.push(l[e].width),C[l[e].name]=l[e].align||"left",n++);if(F.includeGroupHeader&&E(v).jqGrid("isGroupHeaderOn"))for(r=v.p.groupHeader,n=0;n<r.length;n++){for(var s=[],m=r[n].groupHeaders,f=0;f<j.length;f++){for(a={text:"",style:"tableHeader"},t=0;t<m.length;t++)m[t].startColumnName===j[f]&&(a={text:m[t].titleText,colSpan:m[t].numberOfColumns,style:"tableHeader"});s.push(a),e++}w.push(s)}if(F.includeLabels&&w.push(o),F.includeHeader&&v.p.headerrow){var u=E(v).jqGrid("headerData","get"),o=[];for(f=0;f<j.length;f++)a={text:E.jgrid.stripHtml(E.jgrid.getAccessor(u,j[f])),style:"tableFooter",alignment:C[j[f]]},o.push(a);w.push(o)}if(v.p.grouping){var c=!!v.p.groupingView._locgr;v.p.groupingView._locgr=!1,function(s){var m=v.p.groupingView,f=[],u=m.groupField.length,c=v.p.colModel,g=c.length,y=0;function h(e,t){for(var r=0,l=[],o=0;o<j.length;o++)a={text:null==e[j[o]]?"":t?E.jgrid.formatCell(e[j[o]]+"",i[r],d[n],c[i[r]],v,"pdf"):e[j[o]],alignment:C[o],style:"tableBody"},l.push(a),r++;return l}function x(e,t,r,l){for(var o,a,d=function(e,t,r){var l,o=!1;if(0===t)o=r[e];else{var a=r[e].idx;if(0===a)o=r[e];else for(l=e;0<=l;l--)if(r[l].idx===a-t){o=r[l];break}}return o}(e,t,r),n=d.cnt,i=I(j),p=l;p<g;p++)c[p]._expcol&&(a="{0}",E.each(d.summary,function(){if(this.nm===c[p].name){c[p].summaryTpl&&(a=c[p].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&0<n&&(this.v=this.v/n));try{this.groupCount=d.cnt,this.groupIndex=d.dataIndex,this.groupValue=d.value,o=this.v}catch(e){o=this.v}return i[this.nm]=E.jgrid.stripHtml(E.jgrid.template(a,o)),!1}}));return i}function I(e){for(var t={},r=0;r<e.length;r++)t[e[r]]="";return t}E.each(c,function(e,t){for(var r=0;r<u;r++)if(m.groupField[r]===t.name){f[r]=e;break}});var F,b=E.makeArray(m.groupSummary);if(b.reverse(),"local"===v.p.datatype&&!v.p.loadonce){E(v).jqGrid("groupingSetup");for(var e=E.jgrid.getMethod("groupingPrepare"),t=0;t<d.length;t++)e.call(E(v),d[t],t)}E.each(m.groups,function(e,t){y++;try{F=Array.isArray(m.formatDisplayField)&&E.jgrid.isFunction(m.formatDisplayField[t.idx])?m.formatDisplayField[t.idx].call(v,t.displayValue,t.value,v.p.colModel[f[t.idx]],t.idx,m):v.formatter("",t.displayValue,f[t.idx],t.value)}catch(e){F=t.displayValue}var r,l="";if("string"!=typeof(l=E.jgrid.isFunction(m.groupText[t.idx])?m.groupText[t.idx].call(v,F,t.cnt,t.summary):E.jgrid.template(m.groupText[t.idx],F,t.cnt,t.summary))&&"number"!=typeof l&&(l=F),(r="header"===m.groupSummaryPos[t.idx]?x(e,0,m.groups,0):I(j))[Object.keys(r)[0]]=E.jgrid.stripHtml(new Array(5*t.idx).join(" ")+l),w.push(h(r,!0)),u-1===t.idx){for(var o,a,d=m.groups[e+1],l=t.startRow,n=void 0!==d?d.startRow:m.groups[e].startRow+m.groups[e].cnt,i=l;i<n&&s[+i];i++){var p=s[+i];w.push(h(p,!0))}if("header"!==m.groupSummaryPos[t.idx]){if(void 0!==d){for(a=0;a<m.groupField.length&&d.dataIndex!==m.groupField[a];a++);y=m.groupField.length-a}for(o=0;o<y;o++)b[o]&&(r=x(e,o,m.groups,0),w.push(h(r,!0)));y=a}}})}(d),v.p.groupingView._locgr=c}else for(var g,n=0,y=d.length;n<y;n++){for(t=0,o=[],g=d[n],f=0;f<j.length;f++)a={text:null==g[j[f]]?"":E.jgrid.stripHtml(E.jgrid.formatCell(E.jgrid.getAccessor(g,j[f])+"",i[t],d[n],l[i[t]],v,"pdf")),alignment:C[j[f]],style:"tableBody"},o.push(a),t++;w.push(o)}if(F.includeFooter&&v.p.footerrow){var h=E(v).jqGrid("footerData","get");for(o=[],f=0;f<j.length;f++)a={text:E.jgrid.stripHtml(E.jgrid.getAccessor(h,j[f])),style:"tableFooter",alignment:C[j[f]]},o.push(a);w.push(o)}var x={pageSize:F.pageSize,pageOrientation:F.orientation,content:[{style:"tableExample",widths:p,table:{headerRows:null!=r?0:1,body:w}}],styles:{tableHeader:{bold:!0,fontSize:11,color:"#2e6e9e",fillColor:"#dfeffc",alignment:"center"},tableBody:{fontSize:10},tableFooter:{bold:!0,fontSize:11,color:"#2e6e9e",fillColor:"#dfeffc"},title:{alignment:"center",fontSize:15},description:{}},defaultStyle:{fontSize:10}};F.description&&x.content.unshift({text:F.description,style:"description",margin:[0,0,0,12]}),F.title&&x.content.unshift({text:F.title,style:"title",margin:[0,0,0,12]}),E.jgrid.isFunction(F.onBeforeExport)&&F.onBeforeExport.call(v,x);try{var I=pdfMake.createPdf(x);I.getDataUrl(function(e){E.jgrid.isFunction(F.loadIndicator)?F.loadIndicator("hide"):F.loadIndicator&&E(v).jqGrid("progressBar",{method:"hide",loadtype:v.p.loadui})}),"open"===F.download?I.open():I.getBuffer(function(e){E.jgrid.saveAs(e,F.fileName,{type:F.mimetype})})}catch(e){throw e}})},exportToHtml:function(p){var s;return p=E.extend(!0,{title:"",onBeforeExport:null,includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,includeHeader:!0,tableClass:"jqgridprint",autoPrint:!1,topText:"",bottomText:"",returnAsString:!1,treeindent:"&nbsp;",loadIndicator:!0},p||{}),this.each(function(){var b=this,v=b.p.colModel,e=0,w={body:b.p.treeGrid?E(b).jqGrid("getRowData",null,!0,p.treeindent):b.addLocalData(!0),header:[],footer:[],width:[],map:[],align:[]},t=0;for(d=v.length;t<d;t++)v[t]._expcol=!0,void 0===v[t].exportcol?v[t].hidden&&(v[t]._expcol=!1):v[t]._expcol=v[t].exportcol,"cb"!==v[t].name&&"rn"!==v[t].name&&"subgrid"!==v[t].name&&v[t]._expcol&&(w.header[e]=v[t].name,w.width[e]=v[t].width,w.map[e]=t,w.align[e]=v[t].align||"left",e++);var r=document.createElement("a"),l=function(e){r.href=e;e=r.host;return-1===e.indexOf("/")&&0!==r.pathname.indexOf("/")&&(e+="/"),r.protocol+"//"+e+r.pathname+r.search},j=function(e,t,r,l,o){for(var a,d,n="<tr>",i=0,p=w.header.length;i<p&&(d=o?' colspan= "'+w.header.length+'" style=text-align:left':!0===l?" style=width:"+w.width[i]+"px;text-align:"+w.align[i]+";":" style=text-align:"+w.align[i]+";",a=w.header[i],e.hasOwnProperty(a)&&(n+="<"+t+d+">"+(r?E.jgrid.formatCell(E.jgrid.getAccessor(e,a),w.map[i],e,v[w.map[i]],b,"html"):e[a])+"</"+t+">"),!o);i++);return n+"</tr>"};E.jgrid.isFunction(p.loadIndicator)?p.loadIndicator("show"):p.loadIndicator&&E(b).jqGrid("progressBar",{method:"show",loadtype:b.p.loadui,htmlcontent:E.jgrid.getRegional(b,"defaults.loadtext")});var o='<table class="'+p.tableClass+'">';if(p.includeLabels&&(o+="<thead>"+function(e,t,r){for(var l="<tr>",o=0,a=e.length;o<a;o++)l+="<"+t+(!0===r?" style=width:"+w.width[o]+"px;":"")+">"+b.p.colNames[w.map[o]]+"</"+t+">";return l+"</tr>"}(w.header,"th",!0)+"</thead>"),o+="<tbody>",p.includeHeader&&b.p.headerrow&&(a=E(b).jqGrid("headerData","get",null,!1),o+=j(a,"td",!1)),b.p.grouping){var a=!!b.p.groupingView._locgr;b.p.groupingView._locgr=!1,o+=function(m){var f=b.p.groupingView,u=[],c=f.groupField.length,s=v.length,g=0,y="";function h(e,t,r,l){for(var o,a,d=function(e,t,r){var l,o=!1;if(0===t)o=r[e];else{var a=r[e].idx;if(0===a)o=r[e];else for(l=e;0<=l;l--)if(r[l].idx===a-t){o=r[l];break}}return o}(e,t,r),n=d.cnt,i=x(w.header),p=l;p<s;p++)v[p]._expcol&&(a="{0}",E.each(d.summary,function(){if(this.nm===v[p].name){v[p].summaryTpl&&(a=v[p].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&0<n&&(this.v=this.v/n));try{this.groupCount=d.cnt,this.groupIndex=d.dataIndex,this.groupValue=d.value,o=this.v}catch(e){o=this.v}return i[this.nm]=E.jgrid.stripHtml(E.jgrid.template(a,o)),!1}}));return i}function x(e){for(var t={},r=0;r<e.length;r++)t[e[r]]="";return t}E.each(v,function(e,t){for(var r=0;r<c;r++)if(f.groupField[r]===t.name){u[r]=e;break}});var I,F=E.makeArray(f.groupSummary);if(F.reverse(),"local"===b.p.datatype&&!b.p.loadonce){E(b).jqGrid("groupingSetup");for(var e=E.jgrid.getMethod("groupingPrepare"),t=0;t<w.body.length;t++)e.call(E(b),w.body[t],t)}return E.each(f.groups,function(e,t){g++;try{I=Array.isArray(f.formatDisplayField)&&E.jgrid.isFunction(f.formatDisplayField[t.idx])?f.formatDisplayField[t.idx].call(b,t.displayValue,t.value,b.p.colModel[u[t.idx]],t.idx,f):b.formatter("",t.displayValue,u[t.idx],t.value)}catch(e){I=t.displayValue}var r="";"string"!=typeof(r=E.jgrid.isFunction(f.groupText[t.idx])?f.groupText[t.idx].call(b,I,t.cnt,t.summary):E.jgrid.template(f.groupText[t.idx],I,t.cnt,t.summary))&&"number"!=typeof r&&(r=I);var l,o=!1;if("header"===f.groupSummaryPos[t.idx]?l=h(e,0,f.groups,0):(l=x(w.header),o=!0),l[Object.keys(l)[0]]=new Array(5*t.idx).join(" ")+r,y+=j(l,"td",!0,1===g,o),c-1===t.idx){for(var a,d,n=f.groups[e+1],o=t.startRow,i=void 0!==n?n.startRow:f.groups[e].startRow+f.groups[e].cnt,p=o;p<i&&m[+p];p++){var s=m[+p];y+=j(s,"td",!0)}if("header"!==f.groupSummaryPos[t.idx]){if(void 0!==n){for(d=0;d<f.groupField.length&&n.dataIndex!==f.groupField[d];d++);g=f.groupField.length-d}for(a=0;a<g;a++)F[a]&&(l=h(e,a,f.groups,0),y+=j(l,"td",!0));g=d}}}),y}(w.body),b.p.groupingView._locgr=a}else for(var e=0,d=w.body.length;e<d;e++)o+=j(w.body[e],"td",!0,0===e);if(p.includeFooter&&b.p.footerrow&&(w.footer=E(b).jqGrid("footerData","get",null,!1),o+=j(w.footer,"td",!1)),o+="</tbody>",o+="</table>",p.returnAsString)s=o;else{var n=window.open("","");n.document.close();var i=p.title?"<title>"+p.title+"</title>":"";E("style, link").each(function(){i+=function(e){e=E(e).clone()[0];return"link"===e.nodeName.toLowerCase()&&(e.href=l(e.href)),e.outerHTML}(this)});try{n.document.head.innerHTML=i}catch(e){E(n.document.head).html(i)}n.document.body.innerHTML=(p.title?"<h1>"+p.title+"</h1>":"")+"<div>"+(p.topText||"")+"</div>"+o+"<div>"+(p.bottomText||"")+"</div>",E(n.document.body).addClass("html-view"),E("img",n.document.body).each(function(e,t){t.setAttribute("src",l(t.getAttribute("src")))}),p.onBeforeExport&&p.onBeforeExport(n),Boolean(n.chrome)?p.autoPrint&&(n.print(),n.close()):setTimeout(function(){p.autoPrint&&(n.print(),n.close())},1e3)}E.jgrid.isFunction(p.loadIndicator)?p.loadIndicator("hide"):p.loadIndicator&&E(b).jqGrid("progressBar",{method:"hide",loadtype:b.p.loadui})}),s}})});