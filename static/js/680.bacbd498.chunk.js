"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{1900:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5861),a=n(9439),s=n(7757),c=n.n(s),i=n(8771),u=n(9705),o=(n(6497),n(6593),n(4277),n(2791)),p=n(7689),m=n(1256),f={movie_cast_list:"Cast_movie_cast_list__XAA47",movies_cast_item:"Cast_movies_cast_item__lTbWV",movies_cast_name:"Cast_movies_cast_name__7KSXX",wrap:"Cast_wrap__cRSK8",cart:"Cast_cart__o0lr8"},v=n(8184),h=n(184),_=function(){var e=(0,p.UO)().moviesId,t=(0,o.useState)([]),n=(0,a.Z)(t,2),s=n[0],_=n[1];return(0,o.useEffect)((function(){if(e){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,m.v1)(e);case 2:n=t.sent,_(n.cast);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),(0,h.jsxs)("div",{className:f.cart,children:[0===s.length&&(0,h.jsx)("p",{className:f.movies_cast_name,children:"We don't have any cast for this movie"}),(0,h.jsx)(u.tq,{spaceBetween:20,slidesPerView:5,cssMode:!0,navigation:!0,mousewheel:!0,keyboard:!0,modules:[i.W_,i.Gk,i.N1],className:"mySwiper",children:s.map((function(e){var t=e.original_name,n=e.profile_path,r=e.id,a=e.character;return(0,h.jsx)(u.o5,{className:f.movies_cast_item,children:(0,h.jsxs)("div",{className:f.wrap,children:[(0,h.jsx)("img",{className:f.movies_cast_img,src:(0,v.Z)(n),alt:t,width:"200"}),(0,h.jsx)("h4",{className:f.movies_cast_name,children:t}),(0,h.jsxs)("p",{className:f.movies_cast_name,children:["Character: ",a]})]})},r)}))})]})}},8184:function(e,t,n){var r=n(2007),a=n.n(r),s=function(e){return e?"https://image.tmdb.org/t/p/original".concat(e):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg"};t.Z=s,s.propTypes={img:a().string.isRequired}},1256:function(e,t,n){n.d(t,{Zh:function(){return o},eZ:function(){return p},kh:function(){return f},n4:function(){return v},v1:function(){return m}});var r=n(5861),a=n(7757),s=n.n(a),c=n(1243),i="fa6968baf8e484e1bec62141734a6157";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY5NjhiYWY4ZTQ4NGUxYmVjNjIxNDE3MzRhNjE1NyIsInN1YiI6IjY0ZWRhY2RkNTk0Yzk0MDEzOWNhNDg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lf9J7fTsrmXJHha5JIzjUpEXzBpdwx47j_R7so2xGhM"}},o=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i),u);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i),u);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i),u);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i),u);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t,"&include_adult=false&api_key=").concat(i,"&page=1"),u);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.bacbd498.chunk.js.map