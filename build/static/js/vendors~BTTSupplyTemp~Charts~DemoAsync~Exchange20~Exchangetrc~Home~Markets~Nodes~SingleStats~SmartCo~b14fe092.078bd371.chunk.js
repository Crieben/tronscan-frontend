(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1797:function(t,e,i){var n=i(1834).retrieveRawValue;e.getDefaultLabel=function(t,e){var i=t.mapDimension("defaultedLabel",!0),o=i.length;if(1===o)return n(t,e,i[0]);if(o){for(var r=[],a=0;a<i.length;a++){var s=n(t,e,i[a]);r.push(s)}return r.join(" ")}}},1798:function(t,e,i){var n=i(1655),o=i(1672).round;function r(t,e,i){var o=t.getArea(),r=t.getBaseAxis().isHorizontal(),a=o.x,s=o.y,l=o.width,c=o.height,u=i.get("lineStyle.width")||2;a-=u/2,s-=u/2,l+=u,c+=u;var d=new n.Rect({shape:{x:a,y:s,width:l,height:c}});return e&&(d.shape[r?"width":"height"]=0,n.initProps(d,{shape:{width:l,height:c}},i)),d}function a(t,e,i){var r=t.getArea(),a=new n.Sector({shape:{cx:o(t.cx,1),cy:o(t.cy,1),r0:o(r.r0,1),r:o(r.r,1),startAngle:r.startAngle,endAngle:r.endAngle,clockwise:r.clockwise}});return e&&(a.shape.endAngle=r.startAngle,n.initProps(a,{shape:{endAngle:r.endAngle}},i)),a}e.createGridClipPath=r,e.createPolarClipPath=a,e.createClipPath=function(t,e,i){return t?"polar"===t.type?a(t,e,i):"cartesian2d"===t.type?r(t,e,i):null:null}},1799:function(t,e,i){var n=i(1651),o=i(1650),r=i(1655);i(1837),i(2684),n.extendComponentView({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new r.Rect({shape:t.coordinateSystem.getRect(),style:o.defaults({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),n.registerPreprocessor(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})})},1837:function(t,e,i){i(1667).__DEV__;var n=i(1650),o=n.isObject,r=n.each,a=n.map,s=n.indexOf,l=(n.retrieve,i(1684).getLayoutRect),c=i(1969),u=c.createScaleByModel,d=c.ifAxisCrossZero,h=c.niceScaleExtent,x=c.estimateLabelUnionRect,g=i(2678),p=i(2680),f=i(2245),y=i(1748).getStackedDimension;function m(t,e,i){return t.getCoordSysModel()===e}function v(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this.model=t}i(2681);var A=v.prototype;function C(t,e,i,n){i.getAxesOnZeroOf=function(){return o?[o]:[]};var o,r=t[e],a=i.model,s=a.get("axisLine.onZero"),l=a.get("axisLine.onZeroAxisIndex");if(s){if(null!=l)_(r[l])&&(o=r[l]);else for(var c in r)if(r.hasOwnProperty(c)&&_(r[c])&&!n[u(r[c])]){o=r[c];break}o&&(n[u(o)]=!0)}function u(t){return t.dim+"_"+t.index}}function _(t){return t&&"category"!==t.type&&"time"!==t.type&&d(t)}A.type="grid",A.axisPointerEnabled=!0,A.getRect=function(){return this._rect},A.update=function(t,e){var i=this._axesMap;this._updateScale(t,this.model),r(i.x,function(t){h(t.scale,t.model)}),r(i.y,function(t){h(t.scale,t.model)});var n={};r(i.x,function(t){C(i,"y",t,n)}),r(i.y,function(t){C(i,"x",t,n)}),this.resize(this.model,e)},A.resize=function(t,e,i){var n=l(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=n;var o=this._axesList;function a(){r(o,function(t){var e=t.isHorizontal(),i=e?[0,n.width]:[0,n.height],o=t.inverse?1:0;t.setExtent(i[o],i[1-o]),function(t,e){var i=t.getExtent(),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return n-t+e}}(t,e?n.x:n.y)})}a(),!i&&t.get("containLabel")&&(r(o,function(t){if(!t.model.get("axisLabel.inside")){var e=x(t);if(e){var i=t.isHorizontal()?"height":"width",o=t.model.get("axisLabel.margin");n[i]-=e[i]+o,"top"===t.position?n.y+=e.height+o:"left"===t.position&&(n.x+=e.width+o)}}}),a())},A.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var n in i)if(i.hasOwnProperty(n))return i[n];return i[e]}},A.getAxes=function(){return this._axesList.slice()},A.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}o(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var n=0,r=this._coordsList;n<r.length;n++)if(r[n].getAxis("x").index===t||r[n].getAxis("y").index===e)return r[n]},A.getCartesians=function(){return this._coordsList.slice()},A.convertToPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.dataToPoint(i):n.axis?n.axis.toGlobalCoord(n.axis.dataToCoord(i)):null},A.convertFromPixel=function(t,e,i){var n=this._findConvertTarget(t,e);return n.cartesian?n.cartesian.pointToData(i):n.axis?n.axis.coordToData(n.axis.toLocalCoord(i)):null},A._findConvertTarget=function(t,e){var i,n,o=e.seriesModel,r=e.xAxisModel||o&&o.getReferringComponents("xAxis")[0],a=e.yAxisModel||o&&o.getReferringComponents("yAxis")[0],l=e.gridModel,c=this._coordsList;if(o)i=o.coordinateSystem,s(c,i)<0&&(i=null);else if(r&&a)i=this.getCartesian(r.componentIndex,a.componentIndex);else if(r)n=this.getAxis("x",r.componentIndex);else if(a)n=this.getAxis("y",a.componentIndex);else if(l){l.coordinateSystem===this&&(i=this._coordsList[0])}return{cartesian:i,axis:n}},A.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},A._initCartesian=function(t,e,i){var n={left:!1,right:!1,top:!1,bottom:!1},o={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",s("x"),this),e.eachComponent("yAxis",s("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);function s(e){return function(i,r){if(m(i,t)){var s=i.get("position");"x"===e?"top"!==s&&"bottom"!==s&&(s=n.bottom?"top":"bottom"):"left"!==s&&"right"!==s&&(s=n.left?"right":"left"),n[s]=!0;var l=new p(e,u(i),[0,0],i.get("type"),s),c="category"===l.type;l.onBand=c&&i.get("boundaryGap"),l.inverse=i.get("inverse"),i.axis=l,l.model=i,l.grid=this,l.index=r,this._axesList.push(l),o[e][r]=l,a[e]++}}}this._axesMap=o,r(o.x,function(e,i){r(o.y,function(n,o){var r="x"+i+"y"+o,a=new g(r);a.grid=this,a.model=t,this._coordsMap[r]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(n)},this)},this)},A._updateScale=function(t,e){function i(t,e,i){r(t.mapDimension(e.dim,!0),function(i){e.scale.unionExtentFromData(t,y(t,i))})}r(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(n){if(w(n)){var o=L(n,t),r=o[0],a=o[1];if(!m(r,e)||!m(a,e))return;var s=this.getCartesian(r.componentIndex,a.componentIndex),l=n.getData(),c=s.getAxis("x"),u=s.getAxis("y");"list"===l.type&&(i(l,c,n),i(l,u,n))}},this)},A.getTooltipAxes=function(t){var e=[],i=[];return r(this.getCartesians(),function(n){var o=null!=t&&"auto"!==t?n.getAxis(t):n.getBaseAxis(),r=n.getOtherAxis(o);s(e,o)<0&&e.push(o),s(i,r)<0&&i.push(r)}),{baseAxes:e,otherAxes:i}};var b=["xAxis","yAxis"];function L(t,e){return a(b,function(e){return t.getReferringComponents(e)[0]})}function w(t){return"cartesian2d"===t.get("coordinateSystem")}v.create=function(t,e){var i=[];return t.eachComponent("grid",function(n,o){var r=new v(n,t,e);r.name="grid_"+o,r.resize(n,e,!0),n.coordinateSystem=r,i.push(r)}),t.eachSeries(function(t){if(w(t)){var e=L(t),i=e[0],n=e[1],o=i.getCoordSysModel().coordinateSystem;t.coordinateSystem=o.getCartesian(i.componentIndex,n.componentIndex)}}),i},v.dimensions=v.prototype.dimensions=g.prototype.dimensions,f.register("cartesian2d",v);var M=v;t.exports=M},2447:function(t,e,i){var n=i(1650),o=i(1742),r=i(2682),a=i(2439),s=o.extend({type:"cartesian2dAxis",axis:null,init:function(){s.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){s.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){s.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});function l(t,e){return e.type||(e.data?"category":"value")}n.merge(s.prototype,a);var c={offset:0};r("x",s,l,c),r("y",s,l,c);var u=s;t.exports=u},2678:function(t,e,i){var n=i(1650),o=i(1731),r=i(2679);function a(t){r.call(this,t)}a.prototype={constructor:a,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,i){var n=this.getAxis("x"),o=this.getAxis("y");return(i=i||[])[0]=n.toGlobalCoord(n.dataToCoord(t[0])),i[1]=o.toGlobalCoord(o.dataToCoord(t[1])),i},clampData:function(t,e){var i=this.getAxis("x").scale,n=this.getAxis("y").scale,o=i.getExtent(),r=n.getExtent(),a=i.parse(t[0]),s=n.parse(t[1]);return(e=e||[])[0]=Math.min(Math.max(Math.min(o[0],o[1]),a),Math.max(o[0],o[1])),e[1]=Math.min(Math.max(Math.min(r[0],r[1]),s),Math.max(r[0],r[1])),e},pointToData:function(t,e){var i=this.getAxis("x"),n=this.getAxis("y");return(e=e||[])[0]=i.coordToData(i.toLocalCoord(t[0])),e[1]=n.coordToData(n.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")},getArea:function(){var t=this.getAxis("x").getGlobalExtent(),e=this.getAxis("y").getGlobalExtent(),i=Math.min(t[0],t[1]),n=Math.min(e[0],e[1]),r=Math.max(t[0],t[1])-i,a=Math.max(e[0],e[1])-n;return new o(i,n,r,a)}},n.inherits(a,r);var s=a;t.exports=s},2679:function(t,e,i){var n=i(1650);function o(t){return this._axes[t]}var r=function(t){this._axes={},this._dimList=[],this.name=t||""};r.prototype={constructor:r,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return n.map(this._dimList,o,this)},getAxesByScale:function(t){return t=t.toLowerCase(),n.filter(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},o=0;o<i.length;o++){var r=i[o],a=this._axes[r];n[r]=a[e](t[r])}return n}};var a=r;t.exports=a},2680:function(t,e,i){var n=i(1650),o=i(2440),r=function(t,e,i,n,r){o.call(this,t,e,i),this.type=n||"value",this.position=r||"bottom"};r.prototype={constructor:r,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},n.inherits(r,o);var a=r;t.exports=a},2681:function(t,e,i){i(2447);var n=i(1742).extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});t.exports=n},2682:function(t,e,i){var n=i(1650),o=i(2683),r=i(1742),a=i(1684),s=a.getLayoutParams,l=a.mergeLayoutParam,c=i(2437),u=["value","category","time","log"];t.exports=function(t,e,i,a){n.each(u,function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,o){var a=this.layoutMode,c=a?s(e):{},u=o.getTheme();n.merge(e,u.get(r+"Axis")),n.merge(e,this.getDefaultOption()),e.type=i(t,e),a&&l(e,c,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=c.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:n.mergeAll([{},o[r+"Axis"],a],!0)})}),r.registerSubTypeDefaulter(t+"Axis",n.curry(i,t))}},2683:function(t,e,i){var n=i(1650),o={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},r={};r.categoryAxis=n.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},o),r.valueAxis=n.merge({boundaryGap:[0,0],splitNumber:5},o),r.timeAxis=n.defaults({scale:!0,min:"dataMin",max:"dataMax"},r.valueAxis),r.logAxis=n.defaults({scale:!0,logBase:10},r.valueAxis);var a=r;t.exports=a},2684:function(t,e,i){i(2447),i(2685)},2685:function(t,e,i){var n=i(1650),o=i(1655),r=i(2444),a=i(2446),s=i(2445),l=["axisLine","axisTickLabel","axisName"],c=["splitArea","splitLine"],u=a.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,i,a){this.group.removeAll();var d=this._axisGroup;if(this._axisGroup=new o.Group,this.group.add(this._axisGroup),t.get("show")){var h=t.getCoordSysModel(),x=s.layout(h,t),g=new r(t,x);n.each(l,g.add,g),this._axisGroup.add(g.getGroup()),n.each(c,function(e){t.get(e+".show")&&this["_"+e](t,h)},this),o.groupTransition(d,this._axisGroup,t),u.superCall(this,"render",t,e,i,a)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var r=t.getModel("splitLine"),a=r.getModel("lineStyle"),s=a.get("color");s=n.isArray(s)?s:[s];for(var l=e.coordinateSystem.getRect(),c=i.isHorizontal(),u=0,d=i.getTicksCoords({tickModel:r}),h=[],x=[],g=a.getLineStyle(),p=0;p<d.length;p++){var f=i.toGlobalCoord(d[p].coord);c?(h[0]=f,h[1]=l.y,x[0]=f,x[1]=l.y+l.height):(h[0]=l.x,h[1]=f,x[0]=l.x+l.width,x[1]=f);var y=u++%s.length,m=d[p].tickValue;this._axisGroup.add(new o.Line({anid:null!=m?"line_"+d[p].tickValue:null,subPixelOptimize:!0,shape:{x1:h[0],y1:h[1],x2:x[0],y2:x[1]},style:n.defaults({stroke:s[y]},g),silent:!0}))}}},_splitArea:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var r=t.getModel("splitArea"),a=r.getModel("areaStyle"),s=a.get("color"),l=e.coordinateSystem.getRect(),c=i.getTicksCoords({tickModel:r,clamp:!0});if(c.length){var u=s.length,d=this._splitAreaColors,h=n.createHashMap(),x=0;if(d)for(var g=0;g<c.length;g++){var p=d.get(c[g].tickValue);if(null!=p){x=(p+(u-1)*g)%u;break}}var f=i.toGlobalCoord(c[0].coord),y=a.getAreaStyle();s=n.isArray(s)?s:[s];for(g=1;g<c.length;g++){var m,v,A,C,_=i.toGlobalCoord(c[g].coord);i.isHorizontal()?(m=f,v=l.y,A=_-m,C=l.height,f=m+A):(m=l.x,v=f,A=l.width,f=v+(C=_-v));var b=c[g-1].tickValue;null!=b&&h.set(b,x),this._axisGroup.add(new o.Rect({anid:null!=b?"area_"+b:null,shape:{x:m,y:v,width:A,height:C},style:n.defaults({fill:s[x]},y),silent:!0})),x=(x+1)%u}this._splitAreaColors=h}}}});u.extend({type:"xAxis"}),u.extend({type:"yAxis"})}}]);