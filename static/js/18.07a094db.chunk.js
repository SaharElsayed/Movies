(window.webpackJsonpboilerplate=window.webpackJsonpboilerplate||[]).push([[18],{136:function(e,t,r){"use strict";r.r(t);var a=r(12),n=r(23),o=r(24),c=r(26),i=r(25),s=r(27),l=r(0),u=r.n(l),p=r(224),b=r(31),O=r(17);r(213);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=[{value:"popularity.desc",label:"Popularity"},{value:"vote_average.desc",label:"Votes Average"},{value:"original_title.asc",label:"Title"},{value:"release_date.desc",label:"Release Date"}],y=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){var t=r.props,a=t.fetchMoviesRequest,n=t.setSorting,o=t.activeTab,c=o.key,i=o.id,s=t.searchKeyword.search,l=t.artist.id;r.setState({selectedOption:e}),n({sortingKey:e.value}),a(c,{page:1,with_genres:c&&l?"":i,query:s||"",sort_by:e.value,with_cast:l||""})},r.state={selectedOption:h[0]},r}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.selectedOption;return u.a.createElement(p.a,{value:e,onChange:this.handleChange,options:h,theme:function(e){return v({},e,{colors:v({},e.colors,{primary25:"rgba(84, 110, 122, 0.5)",primary:"#37474f"})})}})}}]),t}(u.a.Component),d={setSorting:O.j,fetchMoviesRequest:O.d};t.default=Object(b.b)((function(e){return v({},e)}),d)(y)},213:function(e,t,r){}}]);
//# sourceMappingURL=18.07a094db.chunk.js.map