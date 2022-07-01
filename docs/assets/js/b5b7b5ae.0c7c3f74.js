"use strict";(self.webpackChunk_lage_docs=self.webpackChunk_lage_docs||[]).push([[355],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(5773),r=(n(7378),n(5318));const o={sidebar_position:1,title:"Getting Started"},i="Getting started",l={unversionedId:"Guide/getting-started",id:"Guide/getting-started",title:"Getting Started",description:"Getting started with lage is quite easy! There are 2 ways to do this: automated or manual.",source:"@site/docs/Guide/getting-started.md",sourceDirName:"Guide",slug:"/Guide/getting-started",permalink:"/lage/docs/Guide/getting-started",draft:!1,editUrl:"https://github.com/microsoft/lage/docs/Guide/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Introducing Lage",permalink:"/lage/docs/Guide/"},next:{title:"How does `lage` work?",permalink:"/lage/docs/Guide/levels"}},p={},d=[{value:"Automated",id:"automated",level:2},{value:"1. Invoke the <code>lage init</code> command in the monorepo root to get started:",id:"1-invoke-the-lage-init-command-in-the-monorepo-root-to-get-started",level:3},{value:"2. Customize <code>lage.config.js</code>",id:"2-customize-lageconfigjs",level:3},{value:"Manual - Yarn and PNPM Workspaces",id:"manual---yarn-and-pnpm-workspaces",level:2},{value:"1. Place <code>lage</code> in the <code>devDependencies</code> at the root level:",id:"1-place-lage-in-the-devdependencies-at-the-root-level",level:3},{value:"2. Add a <code>lage.config.js</code> file to configure the pipeline:",id:"2-add-a-lageconfigjs-file-to-configure-the-pipeline",level:3},{value:"3. Inside your monorepo, run <code>yarn</code> or <code>pnpm install</code>",id:"3-inside-your-monorepo-run-yarn-or-pnpm-install",level:3},{value:"4. Run <code>lage</code> commands",id:"4-run-lage-commands",level:3}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Getting started with ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," is quite easy! There are 2 ways to do this: automated or manual."),(0,r.kt)("h2",{id:"automated"},"Automated"),(0,r.kt)("h3",{id:"1-invoke-the-lage-init-command-in-the-monorepo-root-to-get-started"},"1. Invoke the ",(0,r.kt)("inlineCode",{parentName:"h3"},"lage init")," command in the monorepo root to get started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx lage init\n")),(0,r.kt)("p",null,"This will let ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," install the latest version of lage into your repo as a one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," at the root level."),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," is compatible with all the popular workspace managers, this can be applied to a ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"rush")," workspace. ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," is an excellent\nreplacement for ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," in handling running tasks in your repo topologically."),(0,r.kt)("h3",{id:"2-customize-lageconfigjs"},"2. Customize ",(0,r.kt)("inlineCode",{parentName:"h3"},"lage.config.js")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command will also generate a default ",(0,r.kt)("inlineCode",{parentName:"p"},"lage.config.js"),". This will likely need to be modified. In particular, pay attention to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline"),"\nconfiguration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  pipeline: {\n    build: ["^build"],\n    test: ["build"],\n    lint: [],\n  },\n};\n')),(0,r.kt)("p",null,"You may or may not have these scripts in your packages' ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," files. Remember the ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," character is to indicate that the task is run in\ntopological order."),(0,r.kt)("p",null,"To build with the freshly installed ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," runner, type the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run lage build\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn lage build\n")),(0,r.kt)("h2",{id:"manual---yarn-and-pnpm-workspaces"},"Manual - Yarn and PNPM Workspaces"),(0,r.kt)("p",null,"You can manually install ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," as well."),(0,r.kt)("h3",{id:"1-place-lage-in-the-devdependencies-at-the-root-level"},"1. Place ",(0,r.kt)("inlineCode",{parentName:"h3"},"lage")," in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"devDependencies")," at the root level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    ...,\n    "lage": "0.16.0",\n    ...\n  }\n}\n')),(0,r.kt)("h3",{id:"2-add-a-lageconfigjs-file-to-configure-the-pipeline"},"2. Add a ",(0,r.kt)("inlineCode",{parentName:"h3"},"lage.config.js")," file to configure the pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  pipeline: {\n    build: ["^build"],\n    test: ["build"],\n    lint: [],\n  },\n};\n')),(0,r.kt)("h3",{id:"3-inside-your-monorepo-run-yarn-or-pnpm-install"},"3. Inside your monorepo, run ",(0,r.kt)("inlineCode",{parentName:"h3"},"yarn")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"pnpm install")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm install\n")),(0,r.kt)("h3",{id:"4-run-lage-commands"},"4. Run ",(0,r.kt)("inlineCode",{parentName:"h3"},"lage")," commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn lage build\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm run lage build\n")))}c.isMDXComponent=!0}}]);