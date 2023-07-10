"use strict";(self.webpackChunkstorybook_ui=self.webpackChunkstorybook_ui||[]).push([[232],{"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectDestructuringEmpty}})},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:function(){return _taggedTemplateLiteral}})},"./src/stories/Toggler.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default_Size_Toggler:function(){return Default_Size_Toggler},Large_Size_Toggler:function(){return Large_Size_Toggler},Primary:function(){return Primary},Toggler_with_description:function(){return Toggler_with_description},Toggler_with_title:function(){return Toggler_with_title},Toggler_with_title_and_description:function(){return Toggler_with_title_and_description},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Toggler_stories}});var _templateObject,_templateObject2,_templateObject3,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Default_Size_Toggler,_Default_Size_Toggler2,_Default_Size_Toggler3,_Large_Size_Toggler$p,_Large_Size_Toggler$p2,_Large_Size_Toggler$p3,_Toggler_with_title$p,_Toggler_with_title$p2,_Toggler_with_title$p3,_Toggler_with_descrip,_Toggler_with_descrip2,_Toggler_with_descrip3,_Toggler_with_title_a,_Toggler_with_title_a2,_Toggler_with_title_a3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),v1=__webpack_require__("./node_modules/uuid/dist/esm-browser/v1.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Toggler=function Toggler(props){var rest=Object.assign({},((0,objectDestructuringEmpty.Z)(props),props)),togglerId=(0,v1.Z)(),TogglerInput=styled_components_browser_esm.ZP.input(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n      opacity: 0;\n      left: -90000px;\n      top: -90000px;\n      position: absolute;\n\n      &:checked + label::before {\n        background: var(--blue06);\n      }\n      &:checked + label::after {\n        left: ",";\n      }\n      &:hover + label:before {\n        background: var(--grey06);\n      }\n      &:checked:hover + label:before {\n        background: var(--blue08);\n      }\n    "])),"large"===props.variant?"1.35em":"1.05em"),TogglerLabel=styled_components_browser_esm.ZP.label(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(['\n      display: inline-flex;\n      align-items: center;\n      gap: .5rem;\n      position: relative;\n      cursor: pointer;\n\n      &:before {\n        content: "";\n        width: ',";\n        height: ",';\n        background: var(--grey04);\n        border-radius: 1em;\n        transition: .3s ease-in-out;\n      }\n      \n      &:after {\n        content: "";\n        position: absolute;\n        left: .15em;\n        width: ',";\n        height: ",";\n        background: white;\n        border-radius: 50%;\n        transition: .3s ease-in-out;\n      }\n    "])),"large"===props.variant?"2.5em":"2em","large"===props.variant?"1.2em":"1em","large"===props.variant?"1em":".8em","large"===props.variant?"1em":".8em"),TogglerTitles=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      display: flex;\n      flex-direction: column;\n      align-items: start;\n      \n      & h3 {\n        margin: 0;\n        font-size: .6rem;\n        font-weight: 500;\n        color: var(--grey09);\n        \n      }\n      & p {\n        margin: 0;\n        font-size: .4rem;\n        font-weight: 300;\n        color: var(--grey06);\n        \n      }\n    "])));return(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},rest),{},{children:[(0,jsx_runtime.jsx)(TogglerInput,{type:"checkbox",id:togglerId}),(0,jsx_runtime.jsx)(TogglerLabel,{htmlFor:togglerId,children:function toggleTitlesChecker(){return props.title&&props.subTitle?(0,jsx_runtime.jsxs)(TogglerTitles,{children:[(0,jsx_runtime.jsx)("h3",{children:props.title}),(0,jsx_runtime.jsx)("p",{children:props.subTitle})]}):props.title||!props.subTitle?(0,jsx_runtime.jsx)(TogglerTitles,{children:(0,jsx_runtime.jsx)("h3",{children:props.title})}):!props.title||props.subTitle?(0,jsx_runtime.jsx)(TogglerTitles,{children:(0,jsx_runtime.jsx)("p",{children:props.subTitle})}):""}()})]}))},Selectors_Toggler=Toggler;try{Toggler.displayName="Toggler",Toggler.__docgenInfo={description:"",displayName:"Toggler",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"large"'}]}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Selectors/Toggler.tsx#Toggler"]={docgenInfo:Toggler.__docgenInfo,name:"Toggler",path:"src/components/Selectors/Toggler.tsx#Toggler"})}catch(__react_docgen_typescript_loader_error){}var Toggler_stories={title:"Components/Selectors/Toggler",component:Selectors_Toggler,tags:["autodocs"],argTypes:{}},Primary={render:function render(args){return(0,jsx_runtime.jsx)(Selectors_Toggler,(0,objectSpread2.Z)({},args))}},Default_Size_Toggler={args:{variant:"default"},render:function render(args){return(0,jsx_runtime.jsx)(Selectors_Toggler,(0,objectSpread2.Z)({},args))}},Large_Size_Toggler={args:{variant:"large"},render:function render(args){return(0,jsx_runtime.jsx)(Selectors_Toggler,(0,objectSpread2.Z)({},args))}},Toggler_with_title={args:{variant:"default",title:"Toggler Title"},render:function render(args){return(0,jsx_runtime.jsx)(Selectors_Toggler,(0,objectSpread2.Z)({},args))}},Toggler_with_description={args:{variant:"default",subTitle:"description"},render:function render(args){return(0,jsx_runtime.jsx)(Selectors_Toggler,(0,objectSpread2.Z)({},args))}},Toggler_with_title_and_description={args:{variant:"default",title:"Toggler Title",subTitle:"description"},render:function render(args){return(0,jsx_runtime.jsx)(Selectors_Toggler,(0,objectSpread2.Z)({},args))}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: args => {\n    return <Toggler {...args} />;\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Default_Size_Toggler.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default_Size_Toggler.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default_Size_Toggler=Default_Size_Toggler.parameters)||void 0===_Default_Size_Toggler?void 0:_Default_Size_Toggler.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    variant: "default"\n  },\n  render: args => {\n    return <Toggler {...args} />;\n  }\n}'},null===(_Default_Size_Toggler2=Default_Size_Toggler.parameters)||void 0===_Default_Size_Toggler2||null===(_Default_Size_Toggler3=_Default_Size_Toggler2.docs)||void 0===_Default_Size_Toggler3?void 0:_Default_Size_Toggler3.source)})}),Large_Size_Toggler.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Large_Size_Toggler.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Large_Size_Toggler$p=Large_Size_Toggler.parameters)||void 0===_Large_Size_Toggler$p?void 0:_Large_Size_Toggler$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    variant: "large"\n  },\n  render: args => {\n    return <Toggler {...args} />;\n  }\n}'},null===(_Large_Size_Toggler$p2=Large_Size_Toggler.parameters)||void 0===_Large_Size_Toggler$p2||null===(_Large_Size_Toggler$p3=_Large_Size_Toggler$p2.docs)||void 0===_Large_Size_Toggler$p3?void 0:_Large_Size_Toggler$p3.source)})}),Toggler_with_title.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Toggler_with_title.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Toggler_with_title$p=Toggler_with_title.parameters)||void 0===_Toggler_with_title$p?void 0:_Toggler_with_title$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    variant: "default",\n    title: "Toggler Title"\n  },\n  render: args => {\n    return <Toggler {...args} />;\n  }\n}'},null===(_Toggler_with_title$p2=Toggler_with_title.parameters)||void 0===_Toggler_with_title$p2||null===(_Toggler_with_title$p3=_Toggler_with_title$p2.docs)||void 0===_Toggler_with_title$p3?void 0:_Toggler_with_title$p3.source)})}),Toggler_with_description.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Toggler_with_description.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Toggler_with_descrip=Toggler_with_description.parameters)||void 0===_Toggler_with_descrip?void 0:_Toggler_with_descrip.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    variant: "default",\n    subTitle: "description"\n  },\n  render: args => {\n    return <Toggler {...args} />;\n  }\n}'},null===(_Toggler_with_descrip2=Toggler_with_description.parameters)||void 0===_Toggler_with_descrip2||null===(_Toggler_with_descrip3=_Toggler_with_descrip2.docs)||void 0===_Toggler_with_descrip3?void 0:_Toggler_with_descrip3.source)})}),Toggler_with_title_and_description.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Toggler_with_title_and_description.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Toggler_with_title_a=Toggler_with_title_and_description.parameters)||void 0===_Toggler_with_title_a?void 0:_Toggler_with_title_a.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    variant: "default",\n    title: "Toggler Title",\n    subTitle: "description"\n  },\n  render: args => {\n    return <Toggler {...args} />;\n  }\n}'},null===(_Toggler_with_title_a2=Toggler_with_title_and_description.parameters)||void 0===_Toggler_with_title_a2||null===(_Toggler_with_title_a3=_Toggler_with_title_a2.docs)||void 0===_Toggler_with_title_a3?void 0:_Toggler_with_title_a3.source)})});var __namedExportsOrder=["Primary","Default_Size_Toggler","Large_Size_Toggler","Toggler_with_title","Toggler_with_description","Toggler_with_title_and_description"]},"./node_modules/uuid/dist/esm-browser/v1.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _rng_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/dist/esm-browser/rng.js"),_stringify_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/uuid/dist/esm-browser/stringify.js");let _nodeId,_clockseq,_lastMSecs=0,_lastNSecs=0;__webpack_exports__.Z=function v1(options,buf,offset){let i=buf&&offset||0;const b=buf||new Array(16);let node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){const seedBytes=options.random||(options.rng||_rng_js__WEBPACK_IMPORTED_MODULE_0__.Z)();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}let msecs=void 0!==options.msecs?options.msecs:Date.now(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1;const dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq,msecs+=122192928e5;const tl=(1e4*(268435455&msecs)+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;const tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(let n=0;n<6;++n)b[i+n]=node[n];return buf||(0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.S)(b)}}}]);