"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/blurhash";
exports.ids = ["vendor-chunks/blurhash"];
exports.modules = {

/***/ "(rsc)/./node_modules/blurhash/dist/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/blurhash/dist/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValidationError: () => (/* binding */ d),\n/* harmony export */   decode: () => (/* binding */ j),\n/* harmony export */   encode: () => (/* binding */ S),\n/* harmony export */   isBlurhashValid: () => (/* binding */ N)\n/* harmony export */ });\nvar q=[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\",\"H\",\"I\",\"J\",\"K\",\"L\",\"M\",\"N\",\"O\",\"P\",\"Q\",\"R\",\"S\",\"T\",\"U\",\"V\",\"W\",\"X\",\"Y\",\"Z\",\"a\",\"b\",\"c\",\"d\",\"e\",\"f\",\"g\",\"h\",\"i\",\"j\",\"k\",\"l\",\"m\",\"n\",\"o\",\"p\",\"q\",\"r\",\"s\",\"t\",\"u\",\"v\",\"w\",\"x\",\"y\",\"z\",\"#\",\"$\",\"%\",\"*\",\"+\",\",\",\"-\",\".\",\":\",\";\",\"=\",\"?\",\"@\",\"[\",\"]\",\"^\",\"_\",\"{\",\"|\",\"}\",\"~\"],x=t=>{let e=0;for(let r=0;r<t.length;r++){let n=t[r],l=q.indexOf(n);e=e*83+l}return e},p=(t,e)=>{var r=\"\";for(let n=1;n<=e;n++){let l=Math.floor(t)/Math.pow(83,e-n)%83;r+=q[Math.floor(l)]}return r};var f=t=>{let e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},h=t=>{let e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.trunc(e*12.92*255+.5):Math.trunc((1.055*Math.pow(e,.4166666666666667)-.055)*255+.5)},F=t=>t<0?-1:1,M=(t,e)=>F(t)*Math.pow(Math.abs(t),e);var d=class extends Error{constructor(e){super(e),this.name=\"ValidationError\",this.message=e}};var C=t=>{if(!t||t.length<6)throw new d(\"The blurhash string must be at least 6 characters\");let e=x(t[0]),r=Math.floor(e/9)+1,n=e%9+1;if(t.length!==4+2*n*r)throw new d(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*n*r}`)},N=t=>{try{C(t)}catch(e){return{result:!1,errorReason:e.message}}return{result:!0}},z=t=>{let e=t>>16,r=t>>8&255,n=t&255;return[f(e),f(r),f(n)]},L=(t,e)=>{let r=Math.floor(t/361),n=Math.floor(t/19)%19,l=t%19;return[M((r-9)/9,2)*e,M((n-9)/9,2)*e,M((l-9)/9,2)*e]},U=(t,e,r,n)=>{C(t),n=n|1;let l=x(t[0]),m=Math.floor(l/9)+1,b=l%9+1,i=(x(t[1])+1)/166,u=new Array(b*m);for(let o=0;o<u.length;o++)if(o===0){let a=x(t.substring(2,6));u[o]=z(a)}else{let a=x(t.substring(4+o*2,6+o*2));u[o]=L(a,i*n)}let c=e*4,s=new Uint8ClampedArray(c*r);for(let o=0;o<r;o++)for(let a=0;a<e;a++){let y=0,B=0,R=0;for(let w=0;w<m;w++)for(let P=0;P<b;P++){let G=Math.cos(Math.PI*a*P/e)*Math.cos(Math.PI*o*w/r),T=u[P+w*b];y+=T[0]*G,B+=T[1]*G,R+=T[2]*G}let V=h(y),I=h(B),E=h(R);s[4*a+0+o*c]=V,s[4*a+1+o*c]=I,s[4*a+2+o*c]=E,s[4*a+3+o*c]=255}return s},j=U;var A=4,D=(t,e,r,n)=>{let l=0,m=0,b=0,g=e*A;for(let u=0;u<e;u++){let c=A*u;for(let s=0;s<r;s++){let o=c+s*g,a=n(u,s);l+=a*f(t[o]),m+=a*f(t[o+1]),b+=a*f(t[o+2])}}let i=1/(e*r);return[l*i,m*i,b*i]},$=t=>{let e=h(t[0]),r=h(t[1]),n=h(t[2]);return(e<<16)+(r<<8)+n},H=(t,e)=>{let r=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[0]/e,.5)*9+9.5)))),n=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[1]/e,.5)*9+9.5)))),l=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[2]/e,.5)*9+9.5))));return r*19*19+n*19+l},O=(t,e,r,n,l)=>{if(n<1||n>9||l<1||l>9)throw new d(\"BlurHash must have between 1 and 9 components\");if(e*r*4!==t.length)throw new d(\"Width and height must match the pixels array\");let m=[];for(let s=0;s<l;s++)for(let o=0;o<n;o++){let a=o==0&&s==0?1:2,y=D(t,e,r,(B,R)=>a*Math.cos(Math.PI*o*B/e)*Math.cos(Math.PI*s*R/r));m.push(y)}let b=m[0],g=m.slice(1),i=\"\",u=n-1+(l-1)*9;i+=p(u,1);let c;if(g.length>0){let s=Math.max(...g.map(a=>Math.max(...a))),o=Math.floor(Math.max(0,Math.min(82,Math.floor(s*166-.5))));c=(o+1)/166,i+=p(o,1)}else c=1,i+=p(0,1);return i+=p($(b),4),g.forEach(s=>{i+=p(H(s,c),2)}),i},S=O;\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYmx1cmhhc2gvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHFTQUFxUyxnQ0FBZ0MsUUFBUSxhQUFhLFFBQVEsWUFBWSxXQUFXLEtBQUssMEJBQTBCLFNBQVMsU0FBUyxXQUFXLFNBQVMsWUFBWSxLQUFLLEtBQUssd0NBQXdDLG9CQUFvQixVQUFVLFVBQVUsWUFBWSxzREFBc0QsT0FBTyxnQ0FBZ0MsNEdBQTRHLHFEQUFxRCwwQkFBMEIsZUFBZSxzREFBc0QsVUFBVSxtRkFBbUYsMENBQTBDLHlFQUF5RSxVQUFVLG1CQUFtQixRQUFRLEdBQUcsT0FBTyxJQUFJLEtBQUssU0FBUyxPQUFPLGlDQUFpQyxPQUFPLFdBQVcsT0FBTywrQkFBK0IsdUJBQXVCLFdBQVcscURBQXFELHFEQUFxRCxlQUFlLFdBQVcsNkVBQTZFLFlBQVksV0FBVyxjQUFjLDBCQUEwQixVQUFVLEtBQUssa0NBQWtDLGNBQWMsdUNBQXVDLFlBQVksSUFBSSxnQkFBZ0IsSUFBSSxLQUFLLGdCQUFnQixZQUFZLElBQUksZ0JBQWdCLElBQUksS0FBSyxpRUFBaUUsOEJBQThCLHlCQUF5Qiw4REFBOEQsU0FBUyxLQUFLLHNCQUFzQixzQkFBc0IsWUFBWSxJQUFJLEtBQUssVUFBVSxZQUFZLElBQUksS0FBSyxxQkFBcUIsNENBQTRDLGNBQWMsb0JBQW9CLE9BQU8sa0NBQWtDLHVCQUF1QixXQUFXLHNOQUFzTixzQkFBc0IsaUJBQWlCLG1GQUFtRixnRkFBZ0YsU0FBUyxZQUFZLElBQUksZ0JBQWdCLElBQUksS0FBSyx5RkFBeUYsVUFBVSwyQ0FBMkMsVUFBVSxNQUFNLGVBQWUsd0dBQXdHLHNCQUFzQixtQkFBbUIsa0NBQWtDLGVBQWUsSUFBSSxLQUErRTtBQUM5bEciLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdhdG8vRG9jdW1lbnRzL0dpdEh1Yi9jb3Vwd2VhdGhlci9ub2RlX21vZHVsZXMvYmx1cmhhc2gvZGlzdC9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHE9W1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiLFwiNFwiLFwiNVwiLFwiNlwiLFwiN1wiLFwiOFwiLFwiOVwiLFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiLFwiYVwiLFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiLFwiaVwiLFwialwiLFwia1wiLFwibFwiLFwibVwiLFwiblwiLFwib1wiLFwicFwiLFwicVwiLFwiclwiLFwic1wiLFwidFwiLFwidVwiLFwidlwiLFwid1wiLFwieFwiLFwieVwiLFwielwiLFwiI1wiLFwiJFwiLFwiJVwiLFwiKlwiLFwiK1wiLFwiLFwiLFwiLVwiLFwiLlwiLFwiOlwiLFwiO1wiLFwiPVwiLFwiP1wiLFwiQFwiLFwiW1wiLFwiXVwiLFwiXlwiLFwiX1wiLFwie1wiLFwifFwiLFwifVwiLFwiflwiXSx4PXQ9PntsZXQgZT0wO2ZvcihsZXQgcj0wO3I8dC5sZW5ndGg7cisrKXtsZXQgbj10W3JdLGw9cS5pbmRleE9mKG4pO2U9ZSo4MytsfXJldHVybiBlfSxwPSh0LGUpPT57dmFyIHI9XCJcIjtmb3IobGV0IG49MTtuPD1lO24rKyl7bGV0IGw9TWF0aC5mbG9vcih0KS9NYXRoLnBvdyg4MyxlLW4pJTgzO3IrPXFbTWF0aC5mbG9vcihsKV19cmV0dXJuIHJ9O3ZhciBmPXQ9PntsZXQgZT10LzI1NTtyZXR1cm4gZTw9LjA0MDQ1P2UvMTIuOTI6TWF0aC5wb3coKGUrLjA1NSkvMS4wNTUsMi40KX0saD10PT57bGV0IGU9TWF0aC5tYXgoMCxNYXRoLm1pbigxLHQpKTtyZXR1cm4gZTw9LjAwMzEzMDg/TWF0aC50cnVuYyhlKjEyLjkyKjI1NSsuNSk6TWF0aC50cnVuYygoMS4wNTUqTWF0aC5wb3coZSwuNDE2NjY2NjY2NjY2NjY2NyktLjA1NSkqMjU1Ky41KX0sRj10PT50PDA/LTE6MSxNPSh0LGUpPT5GKHQpKk1hdGgucG93KE1hdGguYWJzKHQpLGUpO3ZhciBkPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSl7c3VwZXIoZSksdGhpcy5uYW1lPVwiVmFsaWRhdGlvbkVycm9yXCIsdGhpcy5tZXNzYWdlPWV9fTt2YXIgQz10PT57aWYoIXR8fHQubGVuZ3RoPDYpdGhyb3cgbmV3IGQoXCJUaGUgYmx1cmhhc2ggc3RyaW5nIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCIpO2xldCBlPXgodFswXSkscj1NYXRoLmZsb29yKGUvOSkrMSxuPWUlOSsxO2lmKHQubGVuZ3RoIT09NCsyKm4qcil0aHJvdyBuZXcgZChgYmx1cmhhc2ggbGVuZ3RoIG1pc21hdGNoOiBsZW5ndGggaXMgJHt0Lmxlbmd0aH0gYnV0IGl0IHNob3VsZCBiZSAkezQrMipuKnJ9YCl9LE49dD0+e3RyeXtDKHQpfWNhdGNoKGUpe3JldHVybntyZXN1bHQ6ITEsZXJyb3JSZWFzb246ZS5tZXNzYWdlfX1yZXR1cm57cmVzdWx0OiEwfX0sej10PT57bGV0IGU9dD4+MTYscj10Pj44JjI1NSxuPXQmMjU1O3JldHVybltmKGUpLGYociksZihuKV19LEw9KHQsZSk9PntsZXQgcj1NYXRoLmZsb29yKHQvMzYxKSxuPU1hdGguZmxvb3IodC8xOSklMTksbD10JTE5O3JldHVybltNKChyLTkpLzksMikqZSxNKChuLTkpLzksMikqZSxNKChsLTkpLzksMikqZV19LFU9KHQsZSxyLG4pPT57Qyh0KSxuPW58MTtsZXQgbD14KHRbMF0pLG09TWF0aC5mbG9vcihsLzkpKzEsYj1sJTkrMSxpPSh4KHRbMV0pKzEpLzE2Nix1PW5ldyBBcnJheShiKm0pO2ZvcihsZXQgbz0wO288dS5sZW5ndGg7bysrKWlmKG89PT0wKXtsZXQgYT14KHQuc3Vic3RyaW5nKDIsNikpO3Vbb109eihhKX1lbHNle2xldCBhPXgodC5zdWJzdHJpbmcoNCtvKjIsNitvKjIpKTt1W29dPUwoYSxpKm4pfWxldCBjPWUqNCxzPW5ldyBVaW50OENsYW1wZWRBcnJheShjKnIpO2ZvcihsZXQgbz0wO288cjtvKyspZm9yKGxldCBhPTA7YTxlO2ErKyl7bGV0IHk9MCxCPTAsUj0wO2ZvcihsZXQgdz0wO3c8bTt3KyspZm9yKGxldCBQPTA7UDxiO1ArKyl7bGV0IEc9TWF0aC5jb3MoTWF0aC5QSSphKlAvZSkqTWF0aC5jb3MoTWF0aC5QSSpvKncvciksVD11W1ArdypiXTt5Kz1UWzBdKkcsQis9VFsxXSpHLFIrPVRbMl0qR31sZXQgVj1oKHkpLEk9aChCKSxFPWgoUik7c1s0KmErMCtvKmNdPVYsc1s0KmErMStvKmNdPUksc1s0KmErMitvKmNdPUUsc1s0KmErMytvKmNdPTI1NX1yZXR1cm4gc30saj1VO3ZhciBBPTQsRD0odCxlLHIsbik9PntsZXQgbD0wLG09MCxiPTAsZz1lKkE7Zm9yKGxldCB1PTA7dTxlO3UrKyl7bGV0IGM9QSp1O2ZvcihsZXQgcz0wO3M8cjtzKyspe2xldCBvPWMrcypnLGE9bih1LHMpO2wrPWEqZih0W29dKSxtKz1hKmYodFtvKzFdKSxiKz1hKmYodFtvKzJdKX19bGV0IGk9MS8oZSpyKTtyZXR1cm5bbCppLG0qaSxiKmldfSwkPXQ9PntsZXQgZT1oKHRbMF0pLHI9aCh0WzFdKSxuPWgodFsyXSk7cmV0dXJuKGU8PDE2KSsocjw8OCkrbn0sSD0odCxlKT0+e2xldCByPU1hdGguZmxvb3IoTWF0aC5tYXgoMCxNYXRoLm1pbigxOCxNYXRoLmZsb29yKE0odFswXS9lLC41KSo5KzkuNSkpKSksbj1NYXRoLmZsb29yKE1hdGgubWF4KDAsTWF0aC5taW4oMTgsTWF0aC5mbG9vcihNKHRbMV0vZSwuNSkqOSs5LjUpKSkpLGw9TWF0aC5mbG9vcihNYXRoLm1heCgwLE1hdGgubWluKDE4LE1hdGguZmxvb3IoTSh0WzJdL2UsLjUpKjkrOS41KSkpKTtyZXR1cm4gcioxOSoxOStuKjE5K2x9LE89KHQsZSxyLG4sbCk9PntpZihuPDF8fG4+OXx8bDwxfHxsPjkpdGhyb3cgbmV3IGQoXCJCbHVySGFzaCBtdXN0IGhhdmUgYmV0d2VlbiAxIGFuZCA5IGNvbXBvbmVudHNcIik7aWYoZSpyKjQhPT10Lmxlbmd0aCl0aHJvdyBuZXcgZChcIldpZHRoIGFuZCBoZWlnaHQgbXVzdCBtYXRjaCB0aGUgcGl4ZWxzIGFycmF5XCIpO2xldCBtPVtdO2ZvcihsZXQgcz0wO3M8bDtzKyspZm9yKGxldCBvPTA7bzxuO28rKyl7bGV0IGE9bz09MCYmcz09MD8xOjIseT1EKHQsZSxyLChCLFIpPT5hKk1hdGguY29zKE1hdGguUEkqbypCL2UpKk1hdGguY29zKE1hdGguUEkqcypSL3IpKTttLnB1c2goeSl9bGV0IGI9bVswXSxnPW0uc2xpY2UoMSksaT1cIlwiLHU9bi0xKyhsLTEpKjk7aSs9cCh1LDEpO2xldCBjO2lmKGcubGVuZ3RoPjApe2xldCBzPU1hdGgubWF4KC4uLmcubWFwKGE9Pk1hdGgubWF4KC4uLmEpKSksbz1NYXRoLmZsb29yKE1hdGgubWF4KDAsTWF0aC5taW4oODIsTWF0aC5mbG9vcihzKjE2Ni0uNSkpKSk7Yz0obysxKS8xNjYsaSs9cChvLDEpfWVsc2UgYz0xLGkrPXAoMCwxKTtyZXR1cm4gaSs9cCgkKGIpLDQpLGcuZm9yRWFjaChzPT57aSs9cChIKHMsYyksMil9KSxpfSxTPU87ZXhwb3J0e2QgYXMgVmFsaWRhdGlvbkVycm9yLGogYXMgZGVjb2RlLFMgYXMgZW5jb2RlLE4gYXMgaXNCbHVyaGFzaFZhbGlkfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/blurhash/dist/index.mjs\n");

/***/ })

};
;