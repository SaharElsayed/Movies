(window.webpackJsonpboilerplate=window.webpackJsonpboilerplate||[]).push([[29],{144:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r(23),c=r(24),o=r(26),s=r(25),i=r(27),p=r(0),l=r.n(p),u=r(31),h=r(20),b=r(13),f=r(22);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=function(e){function t(){var e,r;Object(a.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(r=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).fetchList=function(e){var t=r.props,n=t.fetchMoviesRequest,a=t.setSearchKeyword,c=t.activeTab.key;a({search:e}),n(c,{page:1,query:e})},r}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.computedMatch.params.keyword;this.fetchList(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.computedMatch.params.keyword;t!==e.computedMatch.params.keyword&&this.fetchList(t)}},{key:"render",value:function(){var e=this.props,t=e.searchKeyword.search,r=e.activeTab.title,n=e.list.results;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.Suspense,{fallback:l.a.createElement(f.a,null)},l.a.createElement(b.s,{title:"".concat(t," - Search results")}),l.a.createElement(b.m,{pageTitle:0===t.length?r:n&&n.length>0?t:" ",subTitle:0===t.length?"MOVIES":t.length>0&&n&&n.length>0?"SEARCH RESULTS":" "})))}}]),t}(l.a.Component),d={setSearchKeyword:h.i,fetchMoviesRequest:h.d};t.default=Object(u.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}),d)(O)}}]);
//# sourceMappingURL=29.5d1e624f.chunk.js.map