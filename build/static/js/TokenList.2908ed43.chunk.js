(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return r.default.findDOMNode(e)};var a,r=(a=n(16))&&a.__esModule?a:{default:a}},1662:function(e,t,n){"use strict";n.d(t,"a",function(){return C});var a=n(721),r=n.n(a),o=n(18),i=n.n(o),l=n(95),c=n.n(l),s=n(219),u=n.n(s),p=n(2),f=n.n(p),m=n(29),d=n(5),b=n(13),h=n(12),g=n(24),y=n(23),v=n(25),E=n(0),w=n.n(E),k=n(4),O=n(19);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(g.a)(this,Object(y.a)(t).call(this,e))).loadDatas=Object(d.a)(f.a.mark(function e(){var t,a,r,o,i=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,a=i.length>1&&void 0!==i[1]?i[1]:40,r=n.state.filter,e.next=5,O.a.getTokens(_({sort:"rank",limit:a,start:(t-1)*a},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),n.handleTableChange=function(e,t,a){var r=_({},n.state.pagination);r.current=e.current,n.setState({pagination:r}),n.fetch(_({pageSize:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order},t))},n.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.setState({loading:!0}),n.props.onPageChange?(n.props.onPageChange(e.page,e.pageSize),n.setState({loading:!1})):n.setState({loading:!1})},n.onInputChange=function(e){n.setState({searchText:e.target.value})},n.onReset=function(){n.setState({searchText:""},function(){n.onSearch()})},n.onSearch=function(){var e=n.props.tableData,t=n.state.searchText,a=new RegExp(t,"gi");n.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(a)?_({},e,{name:w.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,n){return e.toLowerCase()===t.toLowerCase()?w.a.createElement("span",{key:n,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},n.setColumn=function(e){function t(e){return function(t,n){return t[e]>n[e]?1:t[e]<n[e]?-1:0}}var a={filterDropdown:w.a.createElement("div",{className:"custom-filter-dropdown"},w.a.createElement(u.a,{ref:function(e){return n.searchInput=e},placeholder:"Search name",value:n.state.searchText,onChange:n.onInputChange,onPressEnter:n.onSearch})," ",w.a.createElement(c.a,{type:"primary",onClick:n.onSearch}," ",Object(k.c)("search")," ")," ",w.a.createElement(c.a,{className:"btn-secondary ml-1",onClick:n.onReset}," ",Object(k.c)("reset")," ")," "),filterIcon:w.a.createElement(i.a,{type:"filter",style:{color:n.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:n.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){n.setState({filterDropdownVisible:e},function(){n.searchInput&&n.searchInput.focus()})}},r=[],o=!0,l=!1,s=void 0;try{for(var p,f=e[Symbol.iterator]();!(o=(p=f.next()).done);o=!0){var m=p.value;if(m.sorter&&!m.filterDropdown){var d={sorter:t(m.key)};r.push(_({},m,{},d))}else if(!m.sorter&&m.filterDropdown){var b=_({},a);r.push(_({},m,{},b))}else if(m.sorter&&m.filterDropdown){var h=_({sorter:t(m.key)},a);r.push(_({},m,{},h))}else r.push(m)}}catch(g){l=!0,s=g}finally{try{o||null==f.return||f.return()}finally{if(l)throw s}}return r},n.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,n=this.state.pagination;e.current!=t&&this.setState({pagination:_({},n,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,n=e.loading,a=e.data,o=e.column,i=e.bordered,l=e.pagination,c=void 0===l||l,s=e.scroll,u=e.Footer,p=e.locale,f=e.addr,m=e.transfers,d=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),b=c?_({total:t},this.state.pagination):c;return w.a.createElement("div",null," ",f?w.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==a.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},w.a.createElement(r.a,{bordered:i,columns:d,rowKey:function(e,t){return t},dataSource:a,locale:p,scroll:s,footer:u,pagination:b,loading:n,onChange:this.handleTableChange})," "):w.a.createElement("div",{className:"card table_pos"},w.a.createElement(r.a,{bordered:i,columns:d,footer:u,rowKey:function(e,t){return t},dataSource:a,locale:p,scroll:s,pagination:b,loading:n,onChange:this.handleTableChange})," ")," ")}}]),t}(E.Component)},1663:function(e,t,n){e.exports=n.p+"static/media/logo_default.22fc28d0.png"},1689:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){"function"===typeof e?e(t):"object"===a(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=r,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach(function(t){r(t,e)})}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"===typeof e&&!e.prototype.render)return!1;return!0}},1690:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},2061:function(e,t,n){"use strict";var a=n(95),r=n.n(a),o=n(219),i=n.n(o),l=n(13),c=n(12),s=n(24),u=n(23),p=n(25),f=n(0),m=n.n(f),d=n(4),b=n(110),h=n.n(b);m.a.Component},296:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return r.default.Children.forEach(e,function(e){t.push(e)}),t};var a,r=(a=n(0))&&a.__esModule?a:{default:a}},3508:function(e,t,n){"use strict";n.r(t);var a,r=n(1596),o=n.n(r),i=n(294),l=n.n(i),c=n(44),s=n.n(c),u=n(2),p=n.n(u),f=n(5),m=n(13),d=n(12),b=n(24),h=n(23),g=n(25),y=n(0),v=n.n(y),E=n(36),w=n(431),k=n(11),O=n(55),x=n.n(O),_=n(4),C=n(19),j=n(26),S=n(295),N=n(433),T=(n(2061),n(97)),P=n(1662),D=n(6),M=n(21),A=n(57),R=n(103),z=n(70),I=n(17),U=n.n(I),F=n(14),L=n.n(F),B=n(150),W=n(286),V=Object(B.a)(a=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).loadPage=Object(f.a)(p.a.mark(function e(){var t,n,r,o,i,l,c,s,u=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=u.length>0&&void 0!==u[0]?u[0]:1,n=u.length>1&&void 0!==u[1]?u[1]:20,r=a.state.filter,o=a.props.intl,a.setState({loading:!0}),!r.name){e.next=13;break}return e.next=8,U.a.get(D.e+"/api/token?sort=rank&limit="+n+"&start="+(t-1)*n+"&name="+r.name);case 8:i=e.sent,l=i.data.data.length,c=i.data.totalAll,e.next=18;break;case 13:return e.next=15,U.a.get(D.e+"/api/token?sort=rank&limit="+n+"&start="+(t-1)*n+"&totalAll=1&showAll=2");case 15:i=e.sent,l=i.data.total,c=i.data.totalAll;case 18:return 0===(s=i.data.data).length&&T.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"record_not_found"})),a.setState({loading:!1,tokens:s,total:l,totalAll:c}),e.abrupt("return",l);case 22:case"end":return e.stop()}},e)})),a.setSearch=function(){var e=s()(Object(N.a)(a.props.location,"search"));e.length>0?a.setState({filter:{name:"".concat(e)}}):a.setState({filter:{}})},a.onChange=function(e,t){a.loadPage(e,t)},a.searchName=function(e){e.length>0?a.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/list"!==window.location.hash?window.location.hash="#/tokens/list":a.setState({filter:{}})},a.onBuyInputChange=function(e,t,n){var r=a.props.intl;e>n&&(e=n),e=e.replace(/^0|[^\d*]/g,""),a.setState({buyAmount:e}),a.buyAmount.value=e;var o=e*t;a.priceTRX.innerHTML=r.formatNumber(o,{maximumFractionDigits:6})},a.preBuyTokens=function(e){a.state.buyAmount;var t=a.props;t.currentWallet;t.wallet.isOpen?a.setState({alert:v.a.createElement(x.a,{showConfirm:!1},v.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},v.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){a.setState({alert:null})}},v.a.createElement("i",{className:"fa fa-times"})),v.a.createElement("h5",{style:{color:"black"}},Object(_.c)("buy_token_info")),0===e.remaining&&v.a.createElement("span",null," ",Object(_.c)("no_token_to_buy")),v.a.createElement("div",{className:"input-group mt-5"},v.a.createElement("input",{type:"number",ref:function(e){return a.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){a.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/D.E,e.remaining)}})),v.a.createElement("div",{className:"text-center mt-3 text-muted"},v.a.createElement("b",null,"= ",v.a.createElement("span",{ref:function(e){return a.priceTRX=e}},"0")," TRX")),v.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.buyTokens(e)}},Object(_.c)("participate"))))}):a.setState({alert:v.a.createElement(x.a,{info:!0,showConfirm:!1},v.a.createElement("div",{className:"token-sweet-alert"},v.a.createElement("a",{className:"close",onClick:function(){a.setState({alert:null})}},v.a.createElement("i",{className:"fa fa-times"})),v.a.createElement("span",null,Object(_.c)("login_first")),v.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},Object(_.c)("OK"))))})},a.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),n=a.state.buyAmount;if(!(n<=0)){var r=a.props,o=r.currentWallet,i=(r.wallet,n*(t/D.E));o.balance/D.E<i?a.setState({alert:v.a.createElement(x.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},v.a.createElement("div",{className:"mt-5 token-sweet-alert"},v.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},v.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),v.a.createElement("span",null,Object(_.c)("not_enough_trx_message")),v.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},Object(_.c)("confirm"))))}):a.setState({alert:v.a.createElement(x.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},v.a.createElement("div",{className:"mt-5 token-sweet-alert"},v.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},v.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),v.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(_.c)("buy_confirm_message_1")),v.a.createElement("span",null,n," ",e.name," ",Object(_.b)("for")," ",parseFloat((n*(t/D.E)).toFixed(6))," TRX?"),v.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.confirmTransaction(e)}},Object(_.c)("confirm"))))})}},a.submit=function(){var e=Object(f.a)(p.a.mark(function e(t){var n,r,o,i,l,c,s,u,f,m,d,b,h,g,y;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.trxNum/t.num*Math.pow(10,t.precision),r=a.props,o=r.account,i=r.currentWallet,l=a.state.buyAmount,!L.a.get("islogin")&&"ACCOUNT_LEDGER"!==a.props.walletType.type&&"ACCOUNT_TRONLINK"!==a.props.walletType.type){e.next=32;break}if(s=a.props.tronWeb(),u=a.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"!==a.props.walletType.type){e.next=16;break}return e.next=10,s.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((l*n).toFixed(0)),a.props.walletType.address).catch(function(e){return!1});case 10:return f=e.sent,e.next=13,Object(z.c)(f,s);case 13:m=e.sent,d=m.result,c=d;case 16:if("ACCOUNT_TRONLINK"!==a.props.walletType.type){e.next=25;break}return e.next=19,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((l*n).toFixed(0)),u.defaultAddress.hex).catch(function(e){return!1});case 19:return b=e.sent,e.next=22,Object(z.c)(b,u);case 22:h=e.sent,g=h.result,c=g;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,C.a.participateAsset(i.address,t.ownerAddress,t.id+"",parseInt((l*n).toFixed(0)))(o.key);case 34:y=e.sent,c=y.success;case 36:if(!c){e.next=41;break}return a.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:c,buyAmount:0}),e.abrupt("return",!0);case 41:return e.abrupt("return",!1);case 42:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),a.confirmTransaction=function(){var e=Object(f.a)(p.a.mark(function e(t){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props,n.account,r=n.intl,a.state.buyAmount,a.setState({alert:v.a.createElement(x.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:r.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,a.submit(t);case 5:if(!e.sent){e.next=9;break}a.setState({alert:v.a.createElement(x.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},v.a.createElement("div",{className:"mt-5 token-sweet-alert"},v.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){a.setState({alert:null})}},v.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),v.a.createElement("h5",{style:{color:"black"}},Object(_.c)("transaction")," ",Object(_.c)("confirm")),v.a.createElement("span",null,Object(_.c)("success_receive")," ",t.name," ",Object(_.c)("tokens")),v.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){a.setState({alert:null})}},Object(_.c)("OK"))))}),e.next=10;break;case 9:a.setState({alert:v.a.createElement(x.a,{danger:!0,title:"Error",onConfirm:function(){return a.setState({alert:null})}},Object(_.c)("fail_transaction"))});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.customizedColumn=function(){var e=a.props.intl,t=n(1663);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:l()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,a,r){return v.a.createElement("div",{className:"table-imgtext"},a.imgUrl?v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==a.id?v.a.createElement("div",{className:"token-img-top"},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:a.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),v.a.createElement("i",null)):v.a.createElement("img",{style:{width:"42px",height:"42px"},src:a.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:n(1663)})),v.a.createElement("div",null,v.a.createElement("h5",null,v.a.createElement(j.f,{name:a.name,id:a.id,namePlus:a.name+" ("+a.abbr+")",address:a.ownerAddress})),v.a.createElement("p",{style:{wordBreak:"break-all"}},a.description)))}},{title:"ID",render:function(e,t,n){return v.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t,n){return v.a.createElement("div",null,v.a.createElement(k.c,{value:t.participated/D.E,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"reputation"}),dataIndex:"reputation",key:"reputation",align:"center",className:"ant_table",render:function(t,n,a){var r=o()(t);return v.a.createElement("div",null,r&&e.formatMessage({id:r}))}},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e,t,n){return null===e&&(e=0),v.a.createElement("div",null,v.a.createElement(k.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"created_token_time"}),dataIndex:"dateCreated",key:"dateCreated",render:function(e,t,n){return v.a.createElement(k.a,{value:e})},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t,n){return t.isBlack?v.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:!0},Object(_.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?v.a.createElement("span",{style:{fontWeight:"normal"}},Object(_.c)("finish")):t.startTime>new Date?v.a.createElement("span",{style:{fontWeight:"normal"}},Object(_.c)("not_started")):v.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return a.preBuyTokens(t)}},Object(_.c)("participate"))},className:"ant_table"}]},a.state={tokens:[],buyAmount:0,loading:!1,total:0,totalAll:0,filter:{}};var r=s()(Object(N.a)(e.location,"search"));return r.length>0&&(a.state.filter.name="".concat(r)),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,n=t.tokens,a=t.alert,r=t.loading,o=t.total,i=t.totalAll,l=this.props,c=(l.match,l.intl),s=this.customizedColumn(),u=c.formatMessage({id:"part_total"})+" "+o+"/"+i+" "+c.formatMessage({id:"part_pass"});return v.a.createElement("main",{className:"container header-overlap token_black"},a,r&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(R.b,null)),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-12 table_pos"},o?v.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u," ",v.a.createElement("span",null,v.a.createElement(S.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," ","\xa0\xa0"," ",v.a.createElement(W.a,{to:"/exchange/trc10"},Object(_.b)("Trade_on_Poloni DEX"),">")):"",v.a.createElement(P.a,{bordered:!0,loading:r,column:s,data:n,total:o,rowClassName:"table-row",onPageChange:function(t,n){e.loadPage(t,n)}}))))}}]),t}(y.Component))||a;var H={loadTokens:w.b,login:M.v,reloadWallet:A.c};t.default=Object(E.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},H)(Object(k.h)(V))},430:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=c(n(0)),p=s(n(1588)),f=s(n(296)),m=s(n(726)),d=n(1689),b=s(n(425)),h=n(1690),g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=o(this,i(t).apply(this,arguments))).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,a=t[0].target.getBoundingClientRect(),r=a.width,o=a.height,i=Math.floor(r),l=Math.floor(o);if(e.state.width!==i||e.state.height!==l){var c={width:i,height:l};e.setState(c),n&&n(c)}},e.setChildNode=function(t){e.childNode=t},e}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,u.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=p.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new b.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=f.default(e);if(t.length>1)m.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return m.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(u.isValidElement(n)&&h.supportRef(n)){var a=n.ref;t[0]=u.cloneElement(n,{ref:d.composeRef(a,this.setChildNode)})}return 1===t.length?t[0]:t.map(function(e,t){return!u.isValidElement(e)||"key"in e&&null!==e.key?e:u.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})})}}])&&r(n.prototype,a),c&&r(n,c),t}();g.displayName="ResizeObserver",t.default=g}}]);