(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1688:function(e,t,a){"use strict";t.a={pieChart:{color:["#98C8EB","#1A3964","#2A4994","#3665B0","#205097","#3A69C4"],title:{text:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} %"},series:[{name:"",type:"pie",radius:["45%","70%"],center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{c}%"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},representPieChart:{color:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"scroll",show:!1,orient:"vertical",left:"right",top:35,selectedMode:"false",data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","60%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:20,length2:10},emphasis:{show:!0}}}]},supplyTypesTRXPieChart:{color:["#c84a45","#e7afad","#e19b98","#da8683"],title:{text:"",subtext:"",x:"center",link:"",target:"self"},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},legend:{type:"plain",show:!1,orient:"horizontal",bottom:0,left:"center",selectedMode:"false",itemGap:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["50%","50%"],data:[],label:{normal:{show:!0,formatter:"{b}"},emphasis:{show:!0}},labelLine:{normal:{show:!0,smooth:!1,length:10,length2:5},emphasis:{show:!0}}}]},lineChart:{title:{text:"",x:"center",link:"",target:"self"},grid:{left:"5%",right:"7%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{data:[],type:"line"}]},ringPieChart:{title:{text:"",x:"center"},color:["#F25C81","#7CB5EC","#F4A45D","#8085ED","#8FCACE","#424246","#348188","#F25C81","#E5D355","#96EE80"],legend:{type:"scroll",orient:"vertical",x:"right",selected:{"Bancor Network":!1,Gatecoin:!1,BitFlip:!1,Braziliex:!1,Cobinhood:!1,CoinExchange:!1,CoinFalcon:!1,Cryptomate:!1,IDEX:!1,"LiteBit.eu":!1,"Stocks.Exchange":!1,Tidex:!1}},tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"",type:"pie",selectedMode:"single",radius:[0,"30%"],center:["50%","50%"],label:{normal:{position:"inner",show:!1}},labelLine:{normal:{show:!1}},data:[]},{name:"",type:"pie",radius:["40%","55%"],center:["50%","50%"],data:[]}]},multiLineChart:{title:{text:"",x:"center"},legend:{type:"scroll",data:[]},grid:{left:"3%",right:"3%",bottom:"5%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[]},mapChart:{color:["gold"],series:[{name:"",type:"map",roam:!0,hoverable:!1,mapType:"none",itemStyle:{normal:{borderColor:"rgba(100,149,237,1)",borderWidth:.5,areaStyle:{color:"#1b1b1b"}}},data:[],geoCoord:{}},{name:"",type:"map",mapType:"none",data:[],markPoint:{symbol:"emptyCircle",symbolSize:function(e){return 1+e/10},effect:{show:!0,shadowBlur:0},itemStyle:{normal:{label:{show:!1}},emphasis:{label:{position:"top"}}},data:[]}}]},barChart:{title:{text:"Ranking"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:150},xAxis:{type:"value",name:"",axisLabel:{formatter:"{value}"}},yAxis:{type:"category",inverse:!0,data:[]},series:[{name:"",type:"bar",data:[],label:{normal:{show:!0,textBorderWidth:0}},itemStyle:{}}]},overviewChart:{title:{text:"",x:"center",link:"",target:"self",padding:[0,0,10,0]},tooltip:{trigger:"axis",axisPointer:{animation:!1}},toolbox:{x2:5,y:-5,feature:{restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}},axisPointer:{link:{xAxisIndex:"all"}},dataZoom:[{start:0,end:100},{type:"inside"}],grid:[{top:80,left:"10%",right:80,containLabel:!0}],xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:[]}],yAxis:[{name:"",nameGap:20,type:"value"}],series:[{name:"",type:"line",markPoint:{data:[{type:"max",name:"max"},{type:"min",name:"min"}]},data:[]}]},overviewHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:"",style:{color:"#c23631",fontSize:"16px"}},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#999999"}}},legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"area",name:"",data:[],marker:{enabled:!0}}]},HomeHighChart:{chart:{zoomType:"",spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0,resetZoomButton:{position:{align:"right",verticalAlign:"top",x:-55,y:0},relativeTo:"chart",theme:{fill:"white",stroke:"silver",r:0,states:{hover:{fill:"#eeeeee",style:{color:"red"}}}}}},title:{text:"",style:{color:"#c23631",fontSize:"16px"}},credits:{enabled:!1},colors:["#c84a45","#e7afad"],exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},subtitle:{text:""},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},yAxis:[{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#c23631"}},gridLineWidth:0},{title:{text:""},tickPixelInterval:30,labels:{style:{color:"#333333"}},opposite:!0,gridLineWidth:0}],legend:{align:"center",verticalAlign:"bottom",floating:!1,backgroundColor:"#FFFFFF"},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ECC2C1"],[1,"#ffffff"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:2}},threshold:null,column:{pointPadding:.1,borderWidth:0}}},series:[{type:"spline",name:"",data:[],color:"#c23631",marker:{enabled:!1,radius:1}},{type:"spline",name:"",data:[],color:"#FFAA38",marker:{enabled:!1,radius:1},visible:!1},{type:"spline",name:"",data:[],color:"#FF8A84",yAxis:1,marker:{enabled:!1,radius:1},visible:!1}]},ringPieHighChart3D:{chart:{type:"pie",options3d:{enabled:!0,alpha:45},spacingTop:5,spacingBottom:0,spacingLeft:0,spacingRight:0},title:{text:""},subtitle:{text:""},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},credits:{enabled:!1},colors:["#424246","#96EE80","#F4A45D","#8085ED","#F25C81","#E5D355","#348188","#F25C81","#8FCACE","#7CB5EC"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",showInLegend:!0,innerSize:100,depth:60}},legend:{itemStyle:{fontWeight:"normal",color:"#666666"}},tooltip:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"}},series:[{name:"",data:[]}]},supplyPieHighChart:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},credits:{enabled:!1},exporting:{enabled:!0,sourceWidth:562,sourceHeight:400,filename:""},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},colors:["#c84a45","#e7afad"],plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0},showInLegend:!0}},series:[{name:"",colorByPoint:!0,data:[]}]},supplyAreaHighChart:{chart:{type:"area"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},tickmarkPlacement:"on",title:{enabled:!1}},yAxis:{title:{text:""},labels:{style:{color:"#999999"}}},tooltip:{shared:!0,valueSuffix:"%"},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{area:{stacking:"normal",lineColor:"#666666",lineWidth:1,marker:{lineWidth:1,lineColor:"#666666",radius:1}}},series:[]},OverallFreezingRateChart:{chart:{type:"",zoomType:"xy"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},legend:{enabled:!0,align:"center"},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},title:{enabled:!1}},yAxis:[],tooltip:{},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{},series:[]},HoldTrxAccountChart:{chart:{type:"",zoomType:"xy"},title:{text:""},subtitle:{text:""},credits:{enabled:!1},legend:{enabled:!0,align:"center"},xAxis:{type:"datetime",ordinal:!1,dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%Y-%m-%d",week:"%m-%d",month:"%Y-%m",year:"%Y"},gridLineColor:"#eeeeee",labels:{style:{color:"#999999"},autoRotation:[-10,-20,-30,-40,-50,-60,-70,-80,-90]},title:{enabled:!1}},yAxis:[],tooltip:{},exporting:{enabled:!0,sourceWidth:1072,sourceHeight:500,filename:""},plotOptions:{},series:[]}}},2006:function(e,t,a){"use strict";a.d(t,"b",function(){return O}),a.d(t,"a",function(){return M}),a.d(t,"c",function(){return P});var r=a(297),n=a.n(r),i=a(104),l=a(13),s=a(12),o=a(24),c=a(23),d=a(25),m=a(0),p=a.n(m),u=a(1688),h=a(1651),g=a.n(h),b=(a(1886),a(1700),a(1714),a(2007),a(2010),a(2011),a(2012),a(2013)),y=a.n(b),x=a(1734),f=a.n(x),v=a(1735),E=a.n(v),k=a(1736),C=a.n(k),w=a(1737),N=a.n(w);f()(y.a),E()(y.a),C()(y.a),N()(y.a);var O=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var r=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+r},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,r=t.data,n=t.message,l=g.a.getInstanceByDom(document.getElementById(e));function s(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}if(void 0===l&&(l=g.a.init(document.getElementById(e))),u.a.ringPieChart.title.text=a.formatMessage({id:n.id})+" Top 10",u.a.ringPieChart.series[0].data=[],u.a.ringPieChart.series[1].data=[],u.a.ringPieChart.legend.data=[],r&&r.length>0){var o=r.sort(s("name")),c=[],d=[],m=[];for(var p in o)c.push({name:o[p].pair,value:o[p].volume}),m.indexOf(o[p].name)<0&&(m.push(o[p].name),d.push({name:o[p].name,value:0,subCount:[]}));for(var h in d)for(var b in o)o[b].name===d[h].name&&(d[h].value=d[h].value+o[b].volume,d[h].subCount.push({name:o[b].pair,value:o[b].volume}));d.sort(s("value"));var y=d.slice(d.length-10,d.length),x=[];for(var f in y)x.push.apply(x,Object(i.a)(y[f].subCount));u.a.ringPieChart.series[0].data=[],u.a.ringPieChart.series[1].data=[],u.a.ringPieChart.legend.data=m,u.a.ringPieChart.series[0].data=y,u.a.ringPieChart.series[1].data=x}r&&0===r.length&&(u.a.ringPieChart.title.text="No data"),l.setOption(u.a.ringPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(p.a.Component),M=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var r=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+r},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,r=t.data,i=t.message,l=t.source,s=n()(u.a.ringPieHighChart3D);if(r.length)for(var o in r)r[o].name?r[o].name.indexOf("http://")>-1&&(r[o].name=r[o].name.substring(7).split(".com")[0]):r[o].name=r[o].address;if(r&&0===r.length&&(s.title.text="No data"),r&&r.length>0){var c=[],d=[];for(var m in r)d.indexOf(r[m].name)<0&&(d.push(r[m].name),c.push([r[m].name,Number(r[m].volumeValue)]));var p=s.series[0].data;p.push.apply(p,c)}s.chart.options3d.enabled=!0,s.title.text=a.formatMessage({id:i.id}),s.exporting.filename=a.formatMessage({id:i.id}),s.tooltip.formatter=function(e){a.formatDate(this.point.x);return a.formatMessage({id:"witness"})+" : "+this.point.name+"<br/>"+a.formatMessage({id:"produced_blocks"})+" : "+this.point.y+"<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},"representatives"==l&&(s.plotOptions.pie.showInLegend=!1,s.plotOptions.pie.innerSize=60,s.plotOptions.pie.depth=40,s.exporting.enabled=!1,s.title.text=""),y.a.chart(document.getElementById(e),s)}},{key:"shouldComponentUpdate",value:function(e){return e.intl.locale!==this.props.intl.locale}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(p.a.Component),P=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(o.a)(this,Object(c.a)(t).call(this,e));var r=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+r},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,r=t.data,i=t.message,l=(t.source,n()(u.a.supplyPieHighChart));if(r&&0===r.length&&(l.title.text="No data"),r&&r.length>0){var s=[];for(var o in r)s.indexOf(r[o].name)<0&&l.series[0].data.push({name:a.formatMessage({id:r[o].name}),y:parseInt(r[o].value),selected:r[o].selected,sliced:r[o].sliced})}l.title.text=a.formatMessage({id:i.id}),l.exporting.filename=a.formatMessage({id:i.id}),l.tooltip.formatter=function(){return a.formatMessage({id:this.point.name})+" ("+a.formatNumber(this.point.y)+" TRX)<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},y.a.chart(document.getElementById(e),l)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(p.a.Component)},3498:function(e,t,a){"use strict";a.r(t);var r=a(71),n=a.n(r),i=a(590),l=a.n(i),s=a(91),o=a.n(s),c=a(1590),d=a.n(c),m=a(2),p=a.n(m),u=a(5),h=a(13),g=a(12),b=a(24),y=a(23),x=a(25),f=a(0),v=a.n(f),E=a(36),k=a(282),C=a(4),w=a(103),N=a(11),O=a(26),M=a(6),P=a(2006),S=a(286),H=a(19),F=a(295),L=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(y.a)(t).call(this))).getLatestBlock=Object(u.a)(p.a.mark(function t(){var a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.getLatestBlock();case 2:a=t.sent,e.setState({latestBlock:a.number});case 4:case"end":return t.stop()}},t)})),e.state={latestBlock:""},e}return Object(x.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.loadWitnesses(),this.props.loadStatisticData(),this.getLatestBlock()}},{key:"getPiechart",value:function(){var e=this.props.intl,t=this.props.statisticData,a=[];return t.length>0&&t.map(function(t,r){a.push({key:r+1,name:t.name?t.name:t.url,address:t.address,volumeValue:t.blockProduced,volumePercentage:e.formatNumber(100*t.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),a}},{key:"renderWitnesses",value:function(e){var t=this,a=this.state.latestBlock;if(0===e.length)return v.a.createElement("div",{className:"card"},v.a.createElement(w.b,null,Object(C.c)("loading_representatives")));var r=d()(o()(e,function(e){return e.producer}),function(e){return-1*e.votes}),n=d()(o()(e,function(e){return!e.producer}),function(e){return-1*e.votes}),i=l()(n,0,100),s=l()(n,100);return r.map(function(e){Number(a)-e.latestBlockNumber<1e3?e.representerStatus=!0:e.representerStatus=!1}),v.a.createElement("div",{className:"card border-0 represent__table w-1000"},v.a.createElement("table",{className:"table table-hover table-striped bg-white m-0 sr",style:{border:"1px solid #DFD7CA"}},v.a.createElement("thead",{className:"thead-dark"},v.a.createElement("tr",null,v.a.createElement("th",{className:"text-center"},Object(C.c)("SR_rank")),v.a.createElement("th",null,Object(C.c)("name")),v.a.createElement("th",{className:"text-center text-nowrap"},Object(C.c)("status")),v.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(C.c)("last_block")),v.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(C.c)("blocks_produced")),v.a.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},Object(C.c)("SR_blocksMissed")),v.a.createElement("th",{className:"text-center text-nowrap"},Object(C.c)("productivity")),v.a.createElement("th",{className:"text-right text-nowrap"},Object(C.c)("SR_votes")),v.a.createElement("th",{className:"text-right text-nowrap",style:{borderRight:"1px solid rgb(223, 215, 202)"}},Object(C.c)("SR_voteRatio"),v.a.createElement("span",{className:"ml-2"},v.a.createElement(F.a,{placement:"top",text:"voting_brokerage_tip"}))))),v.a.createElement("tbody",null,v.a.createElement("tr",{style:{height:"72px"}},v.a.createElement("td",{colSpan:"9",className:"font-weight-bold"},v.a.createElement("i",{className:"fa fa-trophy mr-2 ml-2",style:{color:"#666"}}),Object(C.c)("Super Representatives"))),r.map(function(e,a){return v.a.createElement(j,{index:a,state:t.state,props:t.props,key:e.address+a,account:e})}),v.a.createElement("tr",{style:{height:"72px"}},v.a.createElement("td",{colSpan:"9",className:"font-weight-bold"},v.a.createElement("i",{className:"far fa-handshake mr-2 ml-2",style:{color:"#666"}}),Object(C.c)("Super Representative Partners"))),i.map(function(e,a){return v.a.createElement(j,{index:r?a+r.length:M.v?a+27:a+5,state:t.state,props:t.props,key:e.address+a,account:e,showSync:!1})}),M.v&&v.a.createElement("tr",{style:{height:"72px"}},v.a.createElement("td",{colSpan:"9",className:"font-weight-bold"},v.a.createElement("i",{className:"fa fa-user mr-2 ml-2",style:{color:"#666"}}),Object(C.c)("Super Representative Candidates"))),s&&s.map(function(e,a){return v.a.createElement(j,{index:r?a+r.length+i.length:M.v?a+127:a+5,state:t.state,props:t.props,key:e.address+a,account:e,showSync:!1})}))))}},{key:"render",value:function(){var e=this.props,t=e.intl,a=e.witnesses,r=this.getPiechart(),n=a.slice(0,M.G),i=d()(n,function(e){return-1*e.producePercentage})[0],l=_(n).filter(function(e){return e.producedTotal>0}).sortBy(function(e){return e.producePercentage}).value()[0];return l=l||{},v.a.createElement("main",{className:"container header-overlap pb-3 token_black"},v.a.createElement("div",{className:0===a.length||0===r.length?"card":""},0===a.length||0===r.length?v.a.createElement(w.b,null):v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-6 foundation_title represent_title"},v.a.createElement("div",{className:"mb-3"},v.a.createElement("div",{className:"card h-100 widget-icon"},v.a.createElement("div",{className:"card-body"},v.a.createElement("h3",{className:"text-primary"},v.a.createElement(N.c,{value:a.length})),Object(C.c)("Super Representatives")))),v.a.createElement("div",{className:"mb-3"},v.a.createElement("div",{className:"card h-100"},v.a.createElement("div",{className:"card-body"},v.a.createElement("h3",null,v.a.createElement(N.c,{value:i.producePercentage}),"%"),v.a.createElement("div",{className:"represent_title_text"},v.a.createElement("span",null,Object(C.c)("highest_productivity")," - "),v.a.createElement(O.a,{address:i.address},i.name||i.url))))),v.a.createElement("div",{className:"mb-3"},v.a.createElement("div",{className:"card h-100 widget-icon"},v.a.createElement("div",{className:"card-body"},v.a.createElement("h3",null,v.a.createElement(N.c,{maximumFractionDigits:2,minimunFractionDigits:2,value:l.producePercentage||0}),"%"),v.a.createElement("div",{className:"represent_title_text"},v.a.createElement("span",null,Object(C.c)("lowest_productivity")," - "),v.a.createElement(O.a,{address:l.address},l.name||l.url)))))),v.a.createElement("div",{className:"col-md-6 mb-3"},v.a.createElement("div",{className:"card"},v.a.createElement("div",{style:{height:326,background:"#fff"},className:"pt-2 bg-line_blue"},v.a.createElement("div",{className:"card-header bg-tron-light color-grey-100 text-center pb-0",style:{border:0}},v.a.createElement("h6",{className:"m-0 lh-150",style:{fontSize:16}},v.a.createElement(S.a,{to:"/blockchain/stats/pieChart"},Object(C.c)("produce_distribution")))),v.a.createElement("div",{className:"card-body pt-0"},v.a.createElement("div",{style:{minWidth:255,height:200}},v.a.createElement(P.a,{message:{id:"produce_distribution"},intl:t,data:r,style:{height:255},source:"representatives"})))))))),v.a.createElement("div",{className:" mt-3"},v.a.createElement("div",{className:" table-scroll"},this.renderWitnesses(a))))}}]),t}(f.Component);function j(e){var t=e.account,a=e.showSync,r=void 0===a||a,i=e.index;e.state,e.props;return v.a.createElement("tr",{key:t.address,className:t.index>26?"represent__table__lighter":"represent__table__content"},v.a.createElement("td",{className:"text-center",style:{paddingLeft:"14px"}},i+1),v.a.createElement("td",null,t.name?v.a.createElement("div",{className:"_context_right_click font-weight-bold",style:{width:"200px"}},v.a.createElement(O.a,{address:t.address},t.name,v.a.createElement("br",null),v.a.createElement("span",{className:"small text-muted"},t.url))):v.a.createElement("div",{className:"_context_right_click"},v.a.createElement(O.a,{address:t.address},t.url))),r?v.a.createElement("td",{className:"text-center"},t.representerStatus?v.a.createElement(n.a,{placement:"top",title:Object(C.c)("SR_normal")},v.a.createElement("span",{key:"no",className:"text-success"},v.a.createElement("i",{className:"fas fa-circle"}))):v.a.createElement(n.a,{placement:"top",title:Object(C.c)("SR_avnormal")},v.a.createElement("span",{key:"yes",className:"text-danger"},v.a.createElement("i",{className:"fas fa-circle"})))):v.a.createElement("td",null,"\xa0"),v.a.createElement("td",{className:"text-center  d-none d-lg-table-cell"},t.latestBlockNumber?v.a.createElement(O.b,{number:t.latestBlockNumber}):"-"),v.a.createElement("td",{className:"text-center d-none d-lg-table-cell"},t.producedTotal?v.a.createElement(N.c,{value:t.producedTotal}):"-"),v.a.createElement("td",{className:"text-center d-none d-lg-table-cell"},0!==t.missedTotal?v.a.createElement(N.c,{value:t.missedTotal}):"-"),v.a.createElement("td",{className:"text-center"},t.producedTotal>0?v.a.createElement(f.Fragment,null,Math.floor(100*t.producePercentage)/100,"%"):"-"),v.a.createElement("td",{className:"text-right"},v.a.createElement(f.Fragment,null,v.a.createElement(N.c,{value:t.votes||0}),v.a.createElement("br",null),"(",v.a.createElement(N.c,{minimumFractionDigits:2,maximumFractionDigits:2,value:t.votesPercentage}),"%",")")),v.a.createElement("td",{className:"text-right"},v.a.createElement(f.Fragment,null,v.a.createElement("span",null,t.brokerage||0==t.brokerage?100-t.brokerage+"%":""))))}var A={loadWitnesses:k.f,loadStatisticData:k.e};t.default=Object(E.connect)(function(e){return{witnesses:e.network.witnesses,statisticData:e.network.statisticData}},A,null,{pure:!1})(Object(N.h)(L))}}]);