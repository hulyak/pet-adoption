parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2tnM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react");const t=(0,e.createContext)(["green",function(){}]);var r=t;exports.default=r;
},{}],"Ztkr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),t=require("react/jsx-runtime");function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class s extends e.Component{constructor(...e){super(...e),a(this,"state",{active:0}),a(this,"handleIndexClick",e=>{this.setState({active:+e.target.dataset.index})})}render(){const{active:e}=this.state,{images:a}=this.props;return(0,t.jsxs)("div",{className:"carousel",children:[(0,t.jsx)("img",{src:a[e],alt:"animal"}),(0,t.jsx)("div",{className:"carousel-smaller",children:a.map((a,s)=>(0,t.jsx)("img",{src:a,className:s===e?"active":"",alt:"animal thumbnail","data-index":s,onClick:this.handleIndexClick},a))})]})}}a(s,"defaultProps",{images:["http://pets-images.dev-apis.com/pets/none.jpg"]});var i=s;exports.default=i;
},{}],"mD05":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-router-dom"),t=require("react/jsx-runtime");function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class s extends e.Component{constructor(...e){super(...e),o(this,"state",{hasError:!1,redirect:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,r){console.error("ErrorBoundary caught an error",e,r),setTimeout(()=>this.setState({redirect:!0}),5e3)}render(){return this.state.redirect?(0,t.jsx)(r.Redirect,{to:"/"}):this.state.hasError?(0,t.jsxs)("h2",{children:["This listing has an error. ",(0,t.jsx)(r.Link,{to:"/",children:"Click here"})," to go back to the homepage or wait five seconds."]}):this.props.children}}var i=s;exports.default=i;
},{}],"KnKP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-dom"),t=require("react/jsx-runtime");let u;const c=({children:c})=>{u=u||document.getElementById("modal");const n=(0,e.useRef)(null);return n.current||(n.current=document.createElement("div")),(0,e.useEffect)(()=>(u.appendChild(n.current),()=>u.removeChild(n.current)),[]),(0,r.createPortal)((0,t.jsx)("div",{children:c}),n.current)};var n=c;exports.default=n;
},{}],"C/Dc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=require("react"),t=require("react-router-dom"),s=a(require("./Carousel")),i=a(require("./ErrorBoundary")),o=a(require("./ThemeContext")),r=a(require("./Modal")),n=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class d extends e.Component{constructor(...e){super(...e),l(this,"state",{loading:!0,showModal:!1}),l(this,"toggleModal",()=>this.setState({showModal:!this.state.showModal})),l(this,"adopt",()=>window.location="http://bit.ly/pet-adopt")}async componentDidMount(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`),t=await e.json();this.setState(Object.assign({loading:!1},t.pets[0]))}render(){if(this.state.loading)return(0,n.jsx)("h2",{children:"Loading"});console.log(this.state);const{animal:e,breed:t,city:i,state:a,description:l,name:d,images:c,showModal:u}=this.state;return(0,n.jsxs)("div",{className:"details",children:[(0,n.jsx)(s.default,{images:c}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:d}),(0,n.jsx)("h2",{children:`${e} - ${t} - ${i}, ${a}`}),(0,n.jsx)(o.default.Consumer,{children:([e])=>(0,n.jsxs)("button",{style:{backgroundColor:e},onClick:this.toggleModal,children:["Adopt ",d]})}),(0,n.jsx)("p",{children:l}),u?(0,n.jsx)(r.default,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h1",{children:["Would you like to adopt ",d,"?"]}),(0,n.jsxs)("div",{className:"buttons",children:[(0,n.jsx)("button",{onClick:this.adopt,children:"Yes"}),(0,n.jsx)("button",{onClick:this.toggleModal,children:"No"})]})]})}):null]})]})}}const c=(0,t.withRouter)(d);function u(){return(0,n.jsx)(i.default,{children:(0,n.jsx)(c,{})})}
},{"./Carousel":"Ztkr","./ErrorBoundary":"mD05","./ThemeContext":"2tnM","./Modal":"KnKP"}],"qepC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react-router-dom"),t=require("react/jsx-runtime");const r=({name:r,breed:s,animal:a,images:i,location:l,id:o})=>{let n="https://pets-images.dev-apis.com/pets/none.jpg";return i.length&&(n=i[0]),(0,t.jsxs)(e.Link,{to:`/details/${o}`,className:"relative block",children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:n,alt:r})}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2",children:[(0,t.jsx)("h2",{children:r}),(0,t.jsx)("h2",{children:`${a} - ${s} - ${l}`})]})]})};var s=r;exports.default=s;
},{}],"r5l1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),r=i(require("./Pet")),t=require("react/jsx-runtime");function i(e){return e&&e.__esModule?e:{default:e}}const a=({pets:e})=>(0,t.jsx)("div",{className:"grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2",children:e.length?e.map(e=>(0,t.jsx)(r.default,{name:e.name,breed:e.breed,animal:e.animal,id:e.id,images:e.images,location:`${e.city}, ${e.state}`},e.id)):(0,t.jsx)("h2",{children:"No pets found!"})});var s=a;exports.default=s;
},{"./Pet":"qepC"}],"/HkA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var e=require("react");const t={};function s(s){const[a,o]=(0,e.useState)([]),[n,c]=(0,e.useState)("unloaded");return(0,e.useEffect)(()=>{s?t[s]?o(t[s]):async function(){o([]),c("loading");const e=await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${s}`),a=await e.json();t[s]=a.breeds||[],console.log(a),o(t[s]),c("loaded")}():o([])},[s]),[a,n]}
},{}],"n0tu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),a=r(require("./ThemeContext")),l=r(require("./Results")),t=r(require("./useBreedList")),s=require("react/jsx-runtime");function r(e){return e&&e.__esModule?e:{default:e}}const o=["bird","cat","dog","rabbit","reptile"],n=()=>{const[r,n]=(0,e.useState)(""),[i,c]=(0,e.useState)(""),[u,d]=(0,e.useState)(""),[h,m]=(0,e.useState)([]),[x]=(0,t.default)(i),[p,v]=(0,e.useContext)(a.default);async function j(){const e=await fetch(`https://pets-v2.dev-apis.com/pets?animal=${i}&location=${r}&breed=${u}`),a=await e.json();console.log(a),m(a.pets)}return(0,e.useEffect)(()=>{j()},[]),(0,s.jsxs)("div",{className:"my-0 mx-auto w-11/12",children:[(0,s.jsxs)("form",{className:"p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900",onSubmit:e=>{e.preventDefault(),j()},children:[(0,s.jsxs)("label",{htmlFor:"location",className:"search-label",children:["Location"," ",(0,s.jsx)("input",{className:"search-control",id:"location",value:r,placeholder:"Location",onChange:e=>n(e.target.value)})]}),(0,s.jsxs)("label",{htmlFor:"animal",className:"search-label",children:["Animal",(0,s.jsxs)("select",{className:"search-control ",id:"animal",value:i,onChange:e=>c(e.target.value),onBlur:e=>c(e.target.value),children:[(0,s.jsx)("option",{}),o.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),(0,s.jsxs)("label",{htmlFor:"animal",className:"search-label",children:["Breed",(0,s.jsxs)("select",{className:"search-control disabled:opacity-50",id:"animal",value:u,onChange:e=>d(e.target.value),onBlur:e=>d(e.target.value),children:[(0,s.jsx)("option",{}),x.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]})]}),(0,s.jsxs)("label",{htmlFor:"theme",className:"search-label",children:["Theme",(0,s.jsxs)("select",{className:"search-control",value:p,onChange:e=>v(e.target.value),onBlur:e=>d(e.target.value),children:[(0,s.jsx)("option",{value:"darkblue",children:"Dark Blue"}),(0,s.jsx)("option",{value:"peru",children:"Peru"}),(0,s.jsx)("option",{value:"chartreuse",children:"Chartreuse"}),(0,s.jsx)("option",{value:"mediumorchid",children:"Medium orchid"})]})]}),(0,s.jsx)("button",{style:{backgroundColor:p},className:"rounded px-6 py-2 text-white hover:opacity-50 border-none",children:"Submit"})]}),(0,s.jsx)(l.default,{pets:h})]})};var i=n;exports.default=i;
},{"./ThemeContext":"2tnM","./Results":"r5l1","./useBreedList":"/HkA"}],"eBcb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=l(require("react-dom")),t=require("react-router-dom"),a=l(require("./ThemeContext")),s=l(require("./Details")),i=l(require("./SearchParams")),d=require("react/jsx-runtime");function l(e){return e&&e.__esModule?e:{default:e}}const u=()=>{const r=(0,e.useState)("darkblue");return(0,d.jsx)(e.StrictMode,{children:(0,d.jsx)(a.default.Provider,{value:r,children:(0,d.jsxs)("div",{className:"p-0 m-0",style:{background:"url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"},children:[(0,d.jsx)("header",{className:"w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500",children:(0,d.jsx)(t.Link,{to:"/",className:"text-6xl text-white hover:text-gray-200",children:(0,d.jsx)("h1",{children:"Adopt Me!"})})}),(0,d.jsxs)(t.Switch,{children:[(0,d.jsx)(t.Route,{path:"/details/:id",children:(0,d.jsx)(s.default,{theme:r})}),(0,d.jsx)(t.Route,{path:"/",children:(0,d.jsx)(i.default,{})})]})]})})})};var c=u;exports.default=c;
},{"./ThemeContext":"2tnM","./Details":"C/Dc","./SearchParams":"n0tu"}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("express")),t=require("react-dom/server"),r=require("react-router-dom"),s=n(require("fs")),u=n(require("../src/App")),i=require("react/jsx-runtime");function n(e){return e&&e.__esModule?e:{default:e}}const d=process.env.PORT||3e3,o=s.default.readFileSync("dist/index.html").toString(),l=o.split("not rendered"),c=(0,e.default)();c.use("/dist",e.default.static("dist")),c.use((e,s)=>{const n={},d=(0,i.jsx)(r.StaticRouter,{url:e.url,context:n,children:(0,i.jsx)(u.default,{})});s.status(n.statusCode||200),s.send(`${l[0]}${(0,t.renderToString)(d)}${l[1]}`),s.end()}),console.log(`Listening on http://localhost:${d}`),c.listen(d);
},{"../src/App":"eBcb"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map