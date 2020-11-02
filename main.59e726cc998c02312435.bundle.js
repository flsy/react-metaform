(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return Input})),__webpack_require__.d(__webpack_exports__,"f",(function(){return Textarea})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Checkbox})),__webpack_require__.d(__webpack_exports__,"d",(function(){return Select})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Group})),__webpack_require__.d(__webpack_exports__,"e",(function(){return Submit}));__webpack_require__(63),__webpack_require__(18),__webpack_require__(671);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),metaforms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),ErrorMessage=function ErrorMessage(_ref){var message=_ref.message;return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{className:"error-message"},message)},Asterisk=function Asterisk(){return react__WEBPACK_IMPORTED_MODULE_3__.createElement("span",null," *")},Label=function Label(props){return react__WEBPACK_IMPORTED_MODULE_3__.createElement("label",{htmlFor:props.fieldId},props.label,props.isRequired&&react__WEBPACK_IMPORTED_MODULE_3__.createElement(Asterisk,null),props.children)},Input=react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((function(props,ref){return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,props.label&&react__WEBPACK_IMPORTED_MODULE_3__.createElement(Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms__WEBPACK_IMPORTED_MODULE_4__.isRequired)(props.validation)}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("input",{ref:ref,id:props.name,type:props.type,name:props.name,placeholder:props.placeholder,defaultValue:props.value,onChange:function onChange(e){return props.update(props.name,e.target.value)},onBlur:function onBlur(){return props.validate(props.name)}}),props.errorMessage?react__WEBPACK_IMPORTED_MODULE_3__.createElement(ErrorMessage,{message:props.errorMessage}):null)})),NumberInput=react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((function(props,ref){return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,props.label&&react__WEBPACK_IMPORTED_MODULE_3__.createElement(Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms__WEBPACK_IMPORTED_MODULE_4__.isRequired)(props.validation)}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("input",{ref:ref,id:props.name,type:"number",name:props.name,placeholder:props.placeholder,min:props.min,max:props.max,defaultValue:props.value,onChange:function onChange(e){return props.update(props.name,parseInt(e.target.value,10))},onBlur:function onBlur(){return props.validate(props.name)}}),props.errorMessage?react__WEBPACK_IMPORTED_MODULE_3__.createElement(ErrorMessage,{message:props.errorMessage}):null)})),Textarea=react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((function(props,ref){var label=props.label,name=props.name,validation=props.validation,placeholder=props.placeholder,value=props.value,update=props.update,validate=props.validate,errorMessage=props.errorMessage;return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,label?react__WEBPACK_IMPORTED_MODULE_3__.createElement(Label,{fieldId:name,label:label,isRequired:Object(metaforms__WEBPACK_IMPORTED_MODULE_4__.isRequired)(validation)}):null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("textarea",{ref:ref,id:name,name:name,placeholder:placeholder,defaultValue:value,onChange:function onChange(e){return update(name,e.target.value)},onBlur:function onBlur(){return validate(name)}}),errorMessage?react__WEBPACK_IMPORTED_MODULE_3__.createElement(ErrorMessage,{message:errorMessage}):null)})),Checkbox=react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((function(props,ref){return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,props.label&&react__WEBPACK_IMPORTED_MODULE_3__.createElement(Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms__WEBPACK_IMPORTED_MODULE_4__.isRequired)(props.validation)}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("input",{ref:ref,id:props.name,name:props.name,type:"checkbox",defaultChecked:props.value||!1,onChange:function onChange(event){return props.updateAndValidate(props.name,event.target.checked)}}),props.errorMessage?react__WEBPACK_IMPORTED_MODULE_3__.createElement(ErrorMessage,{message:props.errorMessage}):null)})),Select=react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((function(props,ref){return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,props.label&&react__WEBPACK_IMPORTED_MODULE_3__.createElement(Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms__WEBPACK_IMPORTED_MODULE_4__.isRequired)(props.validation)}),react__WEBPACK_IMPORTED_MODULE_3__.createElement("select",{ref:ref,id:props.name,name:props.name,defaultValue:props.value||"",onChange:function onChange(event){return props.updateAndValidate(props.name,event.target.value)}},props.placeholder?react__WEBPACK_IMPORTED_MODULE_3__.createElement("option",{value:""},props.placeholder):null,(props.options||[]).map((function(option){return react__WEBPACK_IMPORTED_MODULE_3__.createElement("option",{value:option.value,key:option.value},option.label||option.value)}))),props.errorMessage?react__WEBPACK_IMPORTED_MODULE_3__.createElement(ErrorMessage,{message:props.errorMessage}):null)})),Group=function Group(_ref2){var legend=_ref2.legend,children=_ref2.children;return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,legend||null),children)},Submit=function Submit(_ref3){var label=_ref3.label,name=_ref3.name;return react__WEBPACK_IMPORTED_MODULE_3__.createElement("button",{name:name,type:"submit"},label||"Submit")};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},update:{defaultValue:null,description:"",name:"update",required:!0,type:{name:"(path: string, value: string) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!0,type:{name:"(path: string) => void"}},updateAndValidate:{defaultValue:null,description:"",name:"updateAndValidate",required:!0,type:{name:"(path: string, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/stories/components.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}try{NumberInput.displayName="NumberInput",NumberInput.__docgenInfo={description:"",displayName:"NumberInput",props:{min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},update:{defaultValue:null,description:"",name:"update",required:!0,type:{name:"(path: string, value: number) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!0,type:{name:"(path: string) => void"}},updateAndValidate:{defaultValue:null,description:"",name:"updateAndValidate",required:!0,type:{name:"(path: string, value: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components.tsx#NumberInput"]={docgenInfo:NumberInput.__docgenInfo,name:"NumberInput",path:"src/stories/components.tsx#NumberInput"})}catch(__react_docgen_typescript_loader_error){}try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},update:{defaultValue:null,description:"",name:"update",required:!0,type:{name:"(path: string, value: string) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!0,type:{name:"(path: string) => void"}},updateAndValidate:{defaultValue:null,description:"",name:"updateAndValidate",required:!0,type:{name:"(path: string, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/stories/components.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},update:{defaultValue:null,description:"",name:"update",required:!0,type:{name:"(path: string, value: boolean) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!0,type:{name:"(path: string) => void"}},updateAndValidate:{defaultValue:null,description:"",name:"updateAndValidate",required:!0,type:{name:"(path: string, value: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/stories/components.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ value: string; label?: string; }[] | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},update:{defaultValue:null,description:"",name:"update",required:!0,type:{name:"(path: string, value: string) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!0,type:{name:"(path: string) => void"}},updateAndValidate:{defaultValue:null,description:"",name:"updateAndValidate",required:!0,type:{name:"(path: string, value: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/stories/components.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}try{Group.displayName="Group",Group.__docgenInfo={description:"",displayName:"Group",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},fields:{defaultValue:null,description:"",name:"fields",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components.tsx#Group"]={docgenInfo:Group.__docgenInfo,name:"Group",path:"src/stories/components.tsx#Group"})}catch(__react_docgen_typescript_loader_error){}try{Submit.displayName="Submit",Submit.__docgenInfo={description:"",displayName:"Submit",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"null"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},update:{defaultValue:null,description:"",name:"update",required:!0,type:{name:"(path: string, value: null) => void"}},validate:{defaultValue:null,description:"",name:"validate",required:!0,type:{name:"(path: string) => void"}},updateAndValidate:{defaultValue:null,description:"",name:"updateAndValidate",required:!0,type:{name:"(path: string, value: null) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components.tsx#Submit"]={docgenInfo:Submit.__docgenInfo,name:"Submit",path:"src/stories/components.tsx#Submit"})}catch(__react_docgen_typescript_loader_error){}},302:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(21),__webpack_require__(63),__webpack_require__(31),__webpack_require__(107),__webpack_require__(15),__webpack_require__(40),__webpack_require__(24),__webpack_require__(290);var _home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(41),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),metaforms__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(11);__webpack_exports__.a=function(props){var inputRefs={};react__WEBPACK_IMPORTED_MODULE_9__.useEffect((function(){resolveFocusedField()}),[]);var resolveFocusedField=function resolveFocusedField(){var focused=Object(metaforms__WEBPACK_IMPORTED_MODULE_10__.shouldComponentFocus)(props.form||{});focused&&inputRefs[focused]&&inputRefs[focused].current&&inputRefs[focused].current.focus()};return props.form?react__WEBPACK_IMPORTED_MODULE_9__.createElement("form",{onSubmit:function onSubmit(event){event.preventDefault();var validated=Object(metaforms__WEBPACK_IMPORTED_MODULE_10__.validateForm)(props.form);props.onFormChange(validated),Object(metaforms__WEBPACK_IMPORTED_MODULE_10__.hasError)(validated)||props.onSubmit({form:validated,formData:Object(metaforms__WEBPACK_IMPORTED_MODULE_10__.getFormData)(validated)})}},Object.entries(props.form).map((function getComponent(_ref){var _ref2=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__.a)(_ref,2),name=_ref2[0],component=_ref2[1];if(!component)return null;var stringName=name.toString();inputRefs[stringName]=react__WEBPACK_IMPORTED_MODULE_9__.createRef();var properties={name:stringName,component:component,ref:inputRefs[stringName],groupChildren:component.fields?Object.entries(component.fields).map((function(_ref3){var _ref4=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__.a)(_ref3,2),nestedName=_ref4[0],nestedComponent=_ref4[1];return getComponent(["".concat(name,".").concat(nestedName),nestedComponent])})):null,actions:{update:function update(path,value){props.onFormChange(Object(metaforms__WEBPACK_IMPORTED_MODULE_10__.update)(path.split("."),value,props.form))},validate:function validate(path){props.onFormChange(Object(metaforms__WEBPACK_IMPORTED_MODULE_10__.validate)(path.split("."),props.form))},updateAndValidate:function updateAndValidate(path,value){props.onFormChange(Object(metaforms__WEBPACK_IMPORTED_MODULE_10__.updateAndValidate)(path.split("."),value,props.form))}}};return props.components(properties)}))):null};try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{onFormChange:{defaultValue:null,description:"",name:"onFormChange",required:!0,type:{name:"(form: T) => void"}},form:{defaultValue:null,description:"",name:"form",required:!0,type:{name:"T"}},components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"Components<T>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(submitted: { form: T; formData: FormData<T>; }) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},303:function(module,exports){},304:function(module,exports,__webpack_require__){__webpack_require__(305),__webpack_require__(457),__webpack_require__(458),__webpack_require__(642),__webpack_require__(654),__webpack_require__(657),module.exports=__webpack_require__(662)},371:function(module,exports){},458:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(64)},662:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(64).configure)([__webpack_require__(663)],module,!1)}).call(this,__webpack_require__(84)(module))},663:function(module,exports,__webpack_require__){var map={"./stories/Form.stories.tsx":664,"./stories/NestedForm.stories.tsx":673,"./stories/Wizard.stories.tsx":674};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=663},664:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"myForm",(function(){return myForm}));__webpack_require__(18),__webpack_require__(19);var _home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_export__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(90),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(65),metaforms__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_storybook_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(64),_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(20),myForm={name:{label:"Name",type:"text",value:"banana"},groups:{type:"select",options:[{value:"first"},{value:"second",label:"Second"}]},sendNewsLetter:{type:"checkbox",value:!1},submit:{label:"Submit",type:"submit"}},FormStory=function FormStory(_ref){var form=_ref.form,_React$useState=react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(form),_React$useState2=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState,2),fields=_React$useState2[0],onFieldsChange=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_export__WEBPACK_IMPORTED_MODULE_3__.default,{form:fields,onFormChange:function handleFieldChange(state){Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("onFieldsChange")(Object(metaforms__WEBPACK_IMPORTED_MODULE_6__.getFormData)(state)),onFieldsChange(state)},onSubmit:function onSubmit(_ref2){var formData=_ref2.formData;return Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("submit")(formData)},components:function components(_ref3){var name=_ref3.name,component=_ref3.component,ref=_ref3.ref,actions=_ref3.actions;switch(component.type){case"checkbox":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.a,Object.assign({ref:ref,name:name},component,actions));case"select":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.d,Object.assign({ref:ref,name:name},component,actions));case"text":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.c,Object.assign({ref:ref,name:name},component,actions));case"submit":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.e,Object.assign({name:name},component,actions));default:return}}})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__.storiesOf)("Form",module).add("example",(function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FormStory,{form:myForm})}))}.call(this,__webpack_require__(199)(module))},673:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"fields1",(function(){return fields1}));__webpack_require__(18),__webpack_require__(19);var _home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_export__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(90),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(65),metaforms__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_storybook_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(64),_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(20),fields1={name:{type:"text",label:"Name",validation:[{type:"required",message:"This field is required."}]},button:{label:"Button example",type:"button"},agree:{type:"checkbox",label:"Agree ?"},"my-textarea":{type:"textarea",value:"Text area"},"first-group":{type:"group",legend:"Inline group Label",fields:{"inline-button":{type:"button",label:"Inline Button"},"inline-input":{type:"text",label:"Inline Input",validation:[{type:"required",message:"Please choose a inline text value"}]}}},actions:{type:"group",fields:{submit:{label:"Submit",type:"submit"}}}},FormStory=function FormStory(_ref){var form=_ref.form,_React$useState=react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(form),_React$useState2=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.a)(_React$useState,2),fields=_React$useState2[0],onFieldsChange=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_export__WEBPACK_IMPORTED_MODULE_3__.default,{form:fields,onFormChange:function handleFieldChange(state){Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("onFieldsChange")(Object(metaforms__WEBPACK_IMPORTED_MODULE_6__.getFormData)(state)),onFieldsChange(state)},onSubmit:function onSubmit(_ref2){var formData=_ref2.formData;return Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("submit")(formData)},components:function components(_ref3){var name=_ref3.name,component=_ref3.component,ref=_ref3.ref,actions=_ref3.actions,groupChildren=_ref3.groupChildren;switch(component.type){case"text":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.c,Object.assign({ref:ref,name:name},component,actions));case"submit":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.e,Object.assign({name:name},component,actions));case"group":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.b,Object.assign({},component,{children:groupChildren}));case"checkbox":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.a,Object.assign({ref:ref,name:name},component,actions));case"button":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",null,component.label);case"textarea":return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__.f,Object.assign({ref:ref,name:name},component,actions));default:return}}})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__.storiesOf)("Nested Form",module).add("nested form",(function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FormStory,{form:fields1})}))}.call(this,__webpack_require__(199)(module))},674:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"fieldConfig",(function(){return fieldConfig}));__webpack_require__(18),__webpack_require__(19);var _home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(200),_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41),_export__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(90),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(64),_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),fieldConfig=[{name:{type:"text",label:"Name",validation:[{type:"required",message:"This field is required."}]},hasAddress:{type:"checkbox",label:"I want to enter my address",value:!1},submit:{label:"Continue",type:"submit"}},{street:{label:"Street",type:"text"},city:{label:"City",type:"text"},submit:{label:"Continue",type:"submit"}},{companyName:{label:"Company Name",type:"text",value:"banana"},submit:{label:"Finish",type:"submit"}}],WizardStory=function WizardStory(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_5___default.a.useState([]),_React$useState2=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_React$useState,2),values=_React$useState2[0],setValues=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(0),_React$useState4=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_React$useState3,2),step=_React$useState4[0],setStep=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(fieldConfig[step]),_React$useState6=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_React$useState5,2),fields=_React$useState6[0],onFieldsChange=_React$useState6[1];return step>2?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong",null,"values:")," ",JSON.stringify(values))):react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_export__WEBPACK_IMPORTED_MODULE_4__.default,{form:fields,onFormChange:function handleFieldChange(state){onFieldsChange(state)},onSubmit:function onSubmit(_ref){return function onSubmit(formData){var nextStep=step+1;!1===formData.hasAddress&&(nextStep=2),setStep(nextStep),onFieldsChange(fieldConfig[nextStep]),setValues(Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)(Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},values),formData))}(_ref.formData)},components:function components(_ref2){var name=_ref2.name,component=_ref2.component,ref=_ref2.ref,actions=_ref2.actions;switch(component.type){case"text":return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.c,Object.assign({ref:ref,name:name},component,actions));case"checkbox":return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.a,Object.assign({ref:ref,name:name},component,actions));case"submit":return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.e,Object.assign({name:name},component,actions))}}})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf)("Wizard",module).add("basic usage",(function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WizardStory,null)}))}.call(this,__webpack_require__(199)(module))},90:function(module,__webpack_exports__,__webpack_require__){"use strict";var _components_Form__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(302);__webpack_require__.d(__webpack_exports__,"default",(function(){return _components_Form__WEBPACK_IMPORTED_MODULE_0__.a}));__webpack_require__(303),__webpack_require__(11)}},[[304,1,2]]]);
//# sourceMappingURL=main.59e726cc998c02312435.bundle.js.map