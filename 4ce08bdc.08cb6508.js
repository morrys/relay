(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1143:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=r(n(1146));const o=["internal","external"];let l;try{l=n(1144).usePluginData}catch(d){l=null}function c(e){return u(e),b()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function b(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=u,t.isInternal=b,t.FbInternalOnly=function(e){return b()?e.children:null},t.OssOnly=function(e){return b()?null:e.children}}).call(this,n(1145))},1144:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"useAllPluginInstancesData",(function(){return r})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function i(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function r(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=r(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},1145:function(e,t){var n,a,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,s=[],u=!1,b=-1;function d(){u&&c&&(u=!1,c.length?s=c.concat(s):b=-1,s.length&&p())}function p(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(c=s,s=[];++b<t;)c&&c[b].run();b=-1,t=s.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||u||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},1146:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const i=n(1147);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1147:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(i,r){function o(e){try{c(a.next(e))}catch(t){r(t)}}function l(e){try{c(a.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,r=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=r++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),n}))}},1148:function(e,t,n){"use strict";n(61);var a=n(1143),i=n(0);function r(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:r},"Filing a task"))},s=function(){return i.createElement(o,null,i.createElement(c,null),i.createElement(l,null))},u=function(){return i.createElement(o,null,i.createElement(l,null))};t.a=function(){return Object(a.fbContent)({internal:i.createElement(s,null),external:i.createElement(u,null)})}},420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a,i=n(3),r=n(8),o=(n(0),n(1142)),l=n(1148),c=n(1143),s={id:"use-pagination-fragment",title:"usePaginationFragment",slug:"/api-reference/use-pagination-fragment/",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",keywords:["pagination","connection"]},u={unversionedId:"api-reference/hooks/use-pagination-fragment",id:"api-reference/hooks/use-pagination-fragment",isDocsHomePage:!1,title:"usePaginationFragment",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",source:"@site/docs/api-reference/hooks/use-pagination-fragment.md",slug:"/api-reference/use-pagination-fragment/",permalink:"/docs/next/api-reference/use-pagination-fragment/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/api-reference/hooks/use-pagination-fragment.md",version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1621286933,sidebar:"docs",previous:{title:"useRefetchableFragment",permalink:"/docs/next/api-reference/use-refetchable-fragment/"},next:{title:"useMutation",permalink:"/docs/next/api-reference/use-mutation/"}},b=[{value:"<code>usePaginationFragment</code>",id:"usepaginationfragment",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Behavior",id:"behavior",children:[]},{value:"Differences with <code>PaginationContainer</code>",id:"differences-with-paginationcontainer",children:[]}]}],d=(a="FbUsePaginationFragmentReturnValue",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={toc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usepaginationfragment"},Object(o.b)("inlineCode",{parentName:"h2"},"usePaginationFragment")),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"usePaginationFragment")," to render a fragment that uses a ",Object(o.b)("inlineCode",{parentName:"p"},"@connection")," and paginate over it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"import type {FriendsListPaginationQuery} from 'FriendsListPaginationQuery.graphql';\nimport type {FriendsList_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsList_user$key,\n};\n\nfunction FriendsList(props: Props) {\n  const {\n    data,\n    loadNext,\n    loadPrevious,\n    hasNext,\n    hasPrevious,\n    isLoadingNext,\n    isLoadingPrevious,\n    refetch, // For refetching connection\n  } = usePaginationFragment<FriendsListPaginationQuery, _>(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n\n      <List items={data.friends?.edges.map(edge => edge.node)}>\n        {node => {\n          return (\n            <div>\n              {node.name} - {node.age}\n            </div>\n          );\n        }}\n      </List>\n      <Button onClick={() => loadNext(10)}>Load more friends</Button>\n    </>\n  );\n}\n\nmodule.exports = FriendsList;\n")),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fragment"),": GraphQL fragment specified using a ",Object(o.b)("inlineCode",{parentName:"li"},"graphql")," template literal.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This fragment must have an ",Object(o.b)("inlineCode",{parentName:"li"},"@connection")," directive on a connection field, otherwise using it will throw an error."),Object(o.b)("li",{parentName:"ul"},"This fragment must have a ",Object(o.b)("inlineCode",{parentName:"li"},"@refetchable")," directive, otherwise using it will throw an error. The ",Object(o.b)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are declared on ',Object(o.b)("inlineCode",{parentName:"li"},"Viewer")," or  ",Object(o.b)("inlineCode",{parentName:"li"},"Query")," types, or on a type that implements ",Object(o.b)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",Object(o.b)("inlineCode",{parentName:"li"},"id"),").",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note that you ",Object(o.b)("em",{parentName:"li"},"do not")," need to manually specify a pagination query yourself. The ",Object(o.b)("inlineCode",{parentName:"li"},"@refetchable")," directive will autogenerate a query with the specified ",Object(o.b)("inlineCode",{parentName:"li"},"queryName"),". This will also generate Flow types for the query, available to import from the generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fragmentReference"),": The ",Object(o.b)("em",{parentName:"li"},"fragment reference")," is an opaque Relay object that Relay uses to read the data for the fragment from the store; more specifically, it contains information about which particular object instance the data should be read from.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The type of the fragment reference can be imported from the generated Flow types, from the file ",Object(o.b)("inlineCode",{parentName:"li"},"<fragment_name>.graphql.js"),", and can be used to declare the type of your ",Object(o.b)("inlineCode",{parentName:"li"},"Props"),". The name of the fragment reference type will be: ",Object(o.b)("inlineCode",{parentName:"li"},"<fragment_name>$key"),". We use our ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/relayjs/eslint-plugin-relay"}),"lint rule")," to enforce that the type of the fragment reference prop is correctly declared.")))),Object(o.b)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should corresponds the Flow type for the ",Object(o.b)("inlineCode",{parentName:"li"},"@refetchable")," pagination query. This type is available to import from the the auto-generated file: ",Object(o.b)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TFragmentRef"),": Type parameter corresponds to the type of the fragment reference argument (i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"<fragment_name>$key"),"). This type usually does not need to be explicitly specified, and can be passed as ",Object(o.b)("inlineCode",{parentName:"li"},"_")," to let Flow infer the concrete type.")),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)(d,{mdxType:"FbUsePaginationFragmentReturnValue"})),Object(o.b)(c.OssOnly,{mdxType:"OssOnly"},Object(o.b)("p",null,"Object containing the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified fragment.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isLoadingNext"),": Boolean value which indicates if a pagination request for the ",Object(o.b)("em",{parentName:"li"},"next")," items in the connection is currently in flight, including any incremental data payloads."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isLoadingPrevious"),": Boolean value which indicates if a pagination request for the ",Object(o.b)("em",{parentName:"li"},"previous")," items in the connection is currently in flight, including any incremental data payloads."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hasNext"),': Boolean value which indicates if the end of the connection has been reached in the "forward" direction. It will be true if there are more items to query for available in that direction, or false otherwise.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hasPrevious"),': Boolean value which indicates if the end of the connection has been reached in the "backward" direction. It will be true if there are more items to query for available in that direction, or false otherwise.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"loadNext"),': Function used to fetch more items in the connection in the "forward" direction.',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Arguments:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"count"),Object(o.b)("em",{parentName:"li"},":")," Number that indicates how many items to query for in the pagination request."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": ",Object(o.b)("em",{parentName:"li"},Object(o.b)("em",{parentName:"em"},"[Optional]"))," options object",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads. If an error occurs during the request, ",Object(o.b)("inlineCode",{parentName:"li"},"onComplete")," will be called with an ",Object(o.b)("inlineCode",{parentName:"li"},"Error")," object as the first parameter."))))),Object(o.b)("li",{parentName:"ul"},"Return Value:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",Object(o.b)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",Object(o.b)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the pagination request."))),Object(o.b)("li",{parentName:"ul"},"Behavior:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Calling ",Object(o.b)("inlineCode",{parentName:"li"},"loadNext"),"  ",Object(o.b)("em",{parentName:"li"},"will not")," cause the component to suspend. Instead, the ",Object(o.b)("inlineCode",{parentName:"li"},"isLoadingNext")," value will be set to true while the request is in flight, and the new items from the pagination request will be added to the connection, causing the component to re-render."),Object(o.b)("li",{parentName:"ul"},"Pagination requests initiated from calling ",Object(o.b)("inlineCode",{parentName:"li"},"loadNext")," will ",Object(o.b)("em",{parentName:"li"},"always")," use the same variables that were originally used to fetch the connection, ",Object(o.b)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"loadPrevious"),': Function used to fetch more items in the connection in the "backward" direction.',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Arguments:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"count"),Object(o.b)("em",{parentName:"li"},":")," Number that indicates how many items to query for in the pagination request."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": ",Object(o.b)("em",{parentName:"li"},Object(o.b)("em",{parentName:"em"},"[Optional]"))," options object",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads. If an error occurs during the request, ",Object(o.b)("inlineCode",{parentName:"li"},"onComplete")," will be called with an ",Object(o.b)("inlineCode",{parentName:"li"},"Error")," object as the first parameter."))))),Object(o.b)("li",{parentName:"ul"},"Return Value:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",Object(o.b)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",Object(o.b)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the pagination request."))),Object(o.b)("li",{parentName:"ul"},"Behavior:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Calling ",Object(o.b)("inlineCode",{parentName:"li"},"loadPrevious"),"  ",Object(o.b)("em",{parentName:"li"},"will not")," cause the component to suspend. Instead, the ",Object(o.b)("inlineCode",{parentName:"li"},"isLoadingPrevious")," value will be set to true while the request is in flight, and the new items from the pagination request will be added to the connection, causing the component to re-render."),Object(o.b)("li",{parentName:"ul"},"Pagination requests initiated from calling ",Object(o.b)("inlineCode",{parentName:"li"},"loadPrevious")," will ",Object(o.b)("em",{parentName:"li"},"always")," use the same variables that were originally used to fetch the connection, ",Object(o.b)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"refetch"),": Function used to refetch the connection fragment with a potentially new set of variables.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Arguments:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"variables"),": Object containing the new set of variable values to be used to fetch the ",Object(o.b)("inlineCode",{parentName:"li"},"@refetchable")," query.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"These variables need to match GraphQL variables referenced inside the fragment."),Object(o.b)("li",{parentName:"ul"},"However, only the variables that are intended to change for the refetch request need to be specified; any variables referenced by the fragment that are omitted from this input will fall back to using the value specified in the original parent query. So for example, to refetch the fragment with the exact same variables as it was originally fetched, you can call ",Object(o.b)("inlineCode",{parentName:"li"},"refetch({})"),"."),Object(o.b)("li",{parentName:"ul"},"Similarly, passing an ",Object(o.b)("inlineCode",{parentName:"li"},"id")," value for the ",Object(o.b)("inlineCode",{parentName:"li"},"$id")," variable is ",Object(o.b)("em",{parentName:"li"},Object(o.b)("em",{parentName:"em"},"optional")),", unless the fragment wants to be refetched with a different ",Object(o.b)("inlineCode",{parentName:"li"},"id"),". When refetching a ",Object(o.b)("inlineCode",{parentName:"li"},"@refetchable")," fragment, Relay will already know the id of the rendered object."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": ",Object(o.b)("em",{parentName:"li"},Object(o.b)("em",{parentName:"em"},"[Optional]"))," options object",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on cached data that is available. See the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../../guided-tour/reusing-cached-data/fetch-policies/"}),"Fetch Policies")," section for full specification."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads."))))),Object(o.b)("li",{parentName:"ul"},"Return value:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",Object(o.b)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",Object(o.b)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the refetch request."))),Object(o.b)("li",{parentName:"ul"},"Behavior:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Calling ",Object(o.b)("inlineCode",{parentName:"li"},"refetch")," with a new set of variables will fetch the fragment again ",Object(o.b)("em",{parentName:"li"},"with the newly provided variables"),". Note that the variables you need to provide are only the ones referenced inside the fragment. In this example, it means fetching the translated body of the currently rendered Comment, by passing a new value to the ",Object(o.b)("inlineCode",{parentName:"li"},"lang")," variable."),Object(o.b)("li",{parentName:"ul"},"Calling ",Object(o.b)("inlineCode",{parentName:"li"},"refetch")," will re-render your component and may cause it to ",Object(o.b)("em",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"em"},{href:"../../guided-tour/rendering/loading-states"}),"suspend")),", depending on the specified ",Object(o.b)("inlineCode",{parentName:"li"},"fetchPolicy")," and whether cached data is available or if it needs to send and wait for a network request. If refetch causes the component to suspend, you'll need to make sure that there's a ",Object(o.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component."),Object(o.b)("li",{parentName:"ul"},"For more details on Suspense, see our ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../../guided-tour/rendering/loading-states/"}),"Loading States with Suspense")," guide."))))))),Object(o.b)("h3",{id:"behavior"},"Behavior"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the fragment data: if the data for this particular ",Object(o.b)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),Object(o.b)("li",{parentName:"ul"},"The component will suspend if any data for that specific fragment is missing, and the data is currently being fetched by a parent query.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For more details on Suspense, see our ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"../../guided-tour/rendering/loading-states/"}),"Loading States with Suspense")," guide."))),Object(o.b)("li",{parentName:"ul"},"Note that pagination (",Object(o.b)("inlineCode",{parentName:"li"},"loadNext")," or ",Object(o.b)("inlineCode",{parentName:"li"},"loadPrevious"),"), ",Object(o.b)("em",{parentName:"li"},"will not")," cause the component to suspend.")),Object(o.b)("h3",{id:"differences-with-paginationcontainer"},"Differences with ",Object(o.b)("inlineCode",{parentName:"h3"},"PaginationContainer")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A pagination query no longer needs to be specified in this api, since it will be automatically generated by Relay by using a ",Object(o.b)("inlineCode",{parentName:"li"},"@refetchable")," fragment."),Object(o.b)("li",{parentName:"ul"},"This api supports simultaneous bi-directional pagination out of the box."),Object(o.b)("li",{parentName:"ul"},"This api no longer requires passing a ",Object(o.b)("inlineCode",{parentName:"li"},"getVariables")," or ",Object(o.b)("inlineCode",{parentName:"li"},"getFragmentVariables")," configuration functions, like the ",Object(o.b)("inlineCode",{parentName:"li"},"PaginationContainer")," does.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This implies that pagination no longer has a between ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," and ",Object(o.b)("inlineCode",{parentName:"li"},"fragmentVariables"),", which were previously vaguely defined concepts. Pagination requests will always use the same variables that were originally used to fetch the connection, ",Object(o.b)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))),Object(o.b)("li",{parentName:"ul"},"This api no longer takes additional configuration like ",Object(o.b)("inlineCode",{parentName:"li"},"direction")," or ",Object(o.b)("inlineCode",{parentName:"li"},"getConnectionFromProps")," function (like Pagination Container does). These values will be automatically determined by Relay."),Object(o.b)("li",{parentName:"ul"},"Refetching no longer has a distinction between ",Object(o.b)("inlineCode",{parentName:"li"},"variables")," and ",Object(o.b)("inlineCode",{parentName:"li"},"fragmentVariables"),", which were previously vaguely defined concepts. Refetching will always correctly refetch and render the fragment with the variables you provide (any variables omitted in the input will fallback to using the original values in the parent query)."),Object(o.b)("li",{parentName:"ul"},"Refetching will unequivocally update the component, which was not always true when calling ",Object(o.b)("inlineCode",{parentName:"li"},"refetchConnection")," from ",Object(o.b)("inlineCode",{parentName:"li"},"PaginationContainer")," (it would depend on what you were querying for in the refetch query and if your fragment was defined on the right object type).")),Object(o.b)(l.a,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);