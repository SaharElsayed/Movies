(window.webpackJsonpboilerplate=window.webpackJsonpboilerplate||[]).push([[26],{143:function(t,e,r){"use strict";r.r(e);var a=r(12),n=r(23),c=r(24),i=r(26),o=r(25),s=r(27),p=r(0),u=r.n(p),l=r(31),f=r(20),b=r(13),h=r(22);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}var O=function(t){function e(){var t,r;Object(n.a)(this,e);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(r=Object(i.a)(this,(t=Object(o.a)(e)).call.apply(t,[this].concat(c)))).fetchArtist=function(t){var e=r.props,a=e.fetchArtistDetailsRequest,n=e.fetchMoviesRequest,c=e.activeTab.key;a(t),n(c,{page:1,sort_by:"popularity.desc",with_cast:t})},r}return Object(s.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.computedMatch.params.id;this.fetchArtist(t)}},{key:"componentDidUpdate",value:function(t){this.props.computedMatch.params.id!==t.computedMatch.params.id&&this.fetchArtist(this.props.computedMatch.params.id)}},{key:"render",value:function(){var t=this.props.artist;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.Suspense,{fallback:u.a.createElement(h.a,null)},u.a.createElement(b.s,{title:"".concat(t.name," - Movie Library")}),u.a.createElement(b.a,{artist:t}),u.a.createElement(b.m,{pageTitle:"also enters in",artistKey:!0})))}}]),e}(u.a.Component),y={fetchArtistDetailsRequest:f.b,fetchMoviesRequest:f.d};e.default=Object(l.b)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(r,!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t)}),y)(O)}}]);
//# sourceMappingURL=26.979658f0.chunk.js.map