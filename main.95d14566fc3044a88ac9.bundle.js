(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{303:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectSpread2=__webpack_require__(125),react=__webpack_require__(0),lib=__webpack_require__(100),metaforms_lib=__webpack_require__(4),isBoolean=function isBoolean(value){return"boolean"==typeof value},isDate=function isDate(value){return value instanceof Date},Input_getValue=function getValue(value){return isDate(value)?value.toISOString():isBoolean(value)?value?"true":"false":function isNumber(value){return"number"==typeof value}(value)?"".concat(value):value},fields_Input=react.forwardRef((function(props,ref){return react.createElement("div",null,props.label&&react.createElement(components_Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms_lib.isRequired)(props.validation)}),react.createElement("input",{ref:ref,id:props.name,type:props.type,name:props.name,placeholder:props.placeholder,value:Input_getValue(props.value),disabled:props.disabled,onChange:function onChange(e){return props.update({name:props.name,value:e.target.value,groupName:props.groupName})},onBlur:function onBlur(){return props.validate({name:props.name})},inputMode:props.inputMode}),props.errorMessage?react.createElement(components_ErrorMessage,{message:props.errorMessage}):null)})),NumberInput_getValue=function getValue(value){return isDate(value)?value.getTime():function isString(value){return"string"==typeof value}(value)?parseInt(value,10):isBoolean(value)?value?1:0:value},fields_NumberInput=react.forwardRef((function(props,ref){return react.createElement("div",null,props.label&&react.createElement(components_Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms_lib.isRequired)(props.validation)}),react.createElement("input",{ref:ref,id:props.name,type:"number",name:props.name,placeholder:props.placeholder,min:props.min,max:props.max,value:NumberInput_getValue(props.value),disabled:props.disabled,onChange:function onChange(e){return props.update({name:props.name,value:e.target.value,groupName:props.groupName})},onBlur:function onBlur(){return props.validate({name:props.name})},inputMode:props.inputMode}),props.errorMessage?react.createElement(components_ErrorMessage,{message:props.errorMessage}):null)})),fields_Textarea=react.forwardRef((function(props,ref){var label=props.label,name=props.name,validation=props.validation,placeholder=props.placeholder,value=props.value,disabled=props.disabled,update=props.update,validate=props.validate,groupName=props.groupName,errorMessage=props.errorMessage;return react.createElement("div",null,label?react.createElement(components_Label,{fieldId:name,label:label,isRequired:Object(metaforms_lib.isRequired)(validation)}):null,react.createElement("textarea",{ref:ref,id:name,name:name,placeholder:placeholder,defaultValue:value,disabled:disabled,onChange:function onChange(e){return update({name:name,value:e.target.value,groupName:groupName})},onBlur:function onBlur(){return validate({name:name})}}),errorMessage?react.createElement(components_ErrorMessage,{message:errorMessage}):null)})),fields_Checkbox=react.forwardRef((function(props,ref){return react.createElement("div",null,props.label&&react.createElement(components_Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms_lib.isRequired)(props.validation)}),react.createElement("input",{ref:ref,id:props.name,name:props.name,type:"checkbox",disabled:props.disabled,defaultChecked:props.value||!1,onChange:function onChange(event){return props.updateAndValidate({name:props.name,value:event.target.checked,groupName:props.groupName})}}),props.errorMessage?react.createElement(components_ErrorMessage,{message:props.errorMessage}):null)})),fields_Select=react.forwardRef((function(props,ref){return react.createElement("div",null,props.label&&react.createElement(components_Label,{fieldId:props.name,label:props.label,isRequired:Object(metaforms_lib.isRequired)(props.validation)}),react.createElement("select",{ref:ref,id:props.name,name:props.name,disabled:props.disabled,defaultValue:props.value||"",onChange:function onChange(event){return props.updateAndValidate({name:props.name,value:event.target.value,groupName:props.groupName})}},props.placeholder?react.createElement("option",{value:""},props.placeholder):null,(props.options||[]).map((function(option){return react.createElement("option",{value:option.value,key:option.value},option.label||option.value)}))),props.errorMessage?react.createElement(components_ErrorMessage,{message:props.errorMessage}):null)})),fields_Submit=function Submit(_ref){var label=_ref.label,name=_ref.name,disabled=_ref.disabled;return react.createElement("button",{disabled:disabled,name:name,type:"submit"},label||"Submit")},fields_Group=function Group(_ref){var legend=_ref.legend,children=_ref.children;return react.createElement("div",null,react.createElement("div",null,legend||null),children)},Label_Asterisk=function Asterisk(){return react.createElement("span",null," *")},components_Label=function Label(_ref){var fieldId=_ref.fieldId,label=_ref.label,isRequired=_ref.isRequired,children=_ref.children;return react.createElement("label",{htmlFor:fieldId},label,isRequired&&react.createElement(Label_Asterisk,null),children)},components_ErrorMessage=function ErrorMessage(_ref){var message=_ref.message;return react.createElement("div",{className:"error-message"},message)};__webpack_exports__.a=function Form(props){var inputRefs={};react.useEffect((function(){resolveFocusedField()}),[]);var resolveFocusedField=function resolveFocusedField(){var focused=Object(metaforms_lib.shouldComponentFocus)(props.fields||[]);focused&&inputRefs[focused]&&inputRefs[focused].current&&inputRefs[focused].current.focus()},thisUpdate=function thisUpdate(_ref){var name=_ref.name,value=_ref.value,groupName=_ref.groupName;props.onFieldsChange(Object(metaforms_lib.update)({name:name,value:value,groupName:groupName},props.fields||[]))},thisValidate=function thisValidate(_ref2){var name=_ref2.name;props.onFieldsChange(Object(metaforms_lib.validate)({name:name},props.fields||[]))},thisUpdateAndValidate=function thisUpdateAndValidate(_ref3){var name=_ref3.name,value=_ref3.value,groupName=_ref3.groupName;props.onFieldsChange(Object(metaforms_lib.updateAndValidate)({name:name,value:value,groupName:groupName},props.fields||[]))};return react.createElement("form",{id:props.id,onSubmit:function thisOnSubmit(event){event.preventDefault();var validated=Object(metaforms_lib.validateForm)(props.fields||[]);props.onFieldsChange(validated),Object(metaforms_lib.hasError)(validated)||props.onSubmit(validated)}},Object(lib.map)((function getComponent(field,groupName){if(inputRefs[field.name]=react.createRef(),props.getComponent){var component=props.getComponent(Object(objectSpread2.a)({},field,{groupName:groupName,key:field.name,children:field.fields?Object(lib.map)((function(c){return getComponent(c,field.name)}),field.fields):[],update:thisUpdate,validate:thisValidate,updateAndValidate:thisUpdateAndValidate}),inputRefs[field.name]);if(component)return component}switch(field.type){case"text":case"email":case"datetime-local":case"password":return react.createElement(fields_Input,Object.assign({key:field.name},field,{ref:inputRefs[field.name],groupName:groupName,update:thisUpdate,validate:thisValidate}));case"number":return react.createElement(fields_NumberInput,Object.assign({key:field.name},field,{ref:inputRefs[field.name],groupName:groupName,update:thisUpdate,validate:thisValidate}));case"textarea":return react.createElement(fields_Textarea,Object.assign({key:field.name},field,{ref:inputRefs[field.name],groupName:groupName,update:thisUpdate,validate:thisValidate}));case"checkbox":return react.createElement(fields_Checkbox,Object.assign({key:field.name},field,{ref:inputRefs[field.name],groupName:groupName,updateAndValidate:thisUpdateAndValidate}));case"select":return react.createElement(fields_Select,Object.assign({key:field.name},field,{ref:inputRefs[field.name],groupName:groupName,updateAndValidate:thisUpdateAndValidate}));case"submit":return react.createElement(fields_Submit,Object.assign({key:field.name},field,{groupName:groupName}));case"group":return react.createElement(fields_Group,{key:field.name,name:field.name,type:"group",legend:field.legend},Object(lib.map)((function(c){return getComponent(c,field.name)}),field.fields));default:return null}}),props.fields||[]))}},304:function(module,exports,__webpack_require__){__webpack_require__(305),__webpack_require__(451),module.exports=__webpack_require__(452)},369:function(module,exports){},452:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(624)],module)}.call(this,__webpack_require__(111)(module))},624:function(module,exports,__webpack_require__){var map={"./stories/CustomComponents.stories.tsx":625,"./stories/Form.stories.tsx":655,"./stories/Wizard.stories.tsx":656};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=624},625:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"form",(function(){return form}));var _home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),_export__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(76),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(49),metaforms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(59),form=[{name:"surname",label:"Surname",type:"tags"},{name:"submit",type:"submit"}],Tags=react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef((function(props,ref){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(!1),_React$useState2=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),isOpen=_React$useState2[0],setIsOpen=_React$useState2[1],update=function update(value){props.logme("my value: ".concat(value)),props.update({name:props.name,value:value,groupName:props.groupName})};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",null,props.label),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{ref:ref,name:props.name,value:props.value,onFocus:function onFocus(){return setIsOpen(!0)},onChange:function onChange(e){return update(e.target.value)}}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,isOpen?"open":"closed",react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:function onClick(){return update("Hey")}},"set Hey")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{onClick:function onClick(){return update("Yo")}},"set Yo")))))})),FormStory=function FormStory(){var _React$useState3=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(form),_React$useState4=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState3,2),fields=_React$useState4[0],onFieldsChange=_React$useState4[1],logme=console.log;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_export__WEBPACK_IMPORTED_MODULE_1__.default,{id:"demo-form",fields:fields,onFieldsChange:function handleFieldChange(state){Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onFieldsChange")(Object(metaforms__WEBPACK_IMPORTED_MODULE_4__.getFormData)(fields)),onFieldsChange(state)},onSubmit:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("submit"),getComponent:function getComponent(props,ref){if("tags"===props.type)return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tags,Object.assign({},props,{ref:ref,logme:logme}))}})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf)("CustomComponents",module).add("example 1",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormStory,null)}))}.call(this,__webpack_require__(111)(module))},655:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"fields1",(function(){return fields1})),__webpack_require__.d(__webpack_exports__,"fields2",(function(){return fields2})),__webpack_require__.d(__webpack_exports__,"fields3",(function(){return fields3}));var _home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),_export__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(76),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(49),metaforms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(59),fields1=[{name:"name",label:"Name",type:"text",validation:[{type:"required",message:"This field is required."}]},{name:"button",label:"Button example",type:"button"},{name:"agree",type:"checkbox",label:"Agree ?"},{name:"my-textarea",type:"textarea",value:"Text area"},{type:"group",name:"first-group",legend:"Inline group",fields:[{name:"inline-button",label:"Inline Button",type:"button"},{type:"text",name:"inline-input",label:"Inline Input",validation:[{type:"required",message:"Please choose a inline text value"}]}]},{name:"submit",type:"submit"}],fields2=[{name:"name",label:"Name",type:"text",value:"banana"},{name:"submit",type:"submit"}],fields3=[{name:"name",label:"Name",type:"text",value:"banana"},{name:"groups",type:"select",options:[{value:"first"},{value:2,label:"Second"}]},{name:"submit",type:"submit"}],submit=function submit(props){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{type:"submit",style:{margin:"10px 0"}},props.label," [OK] Custom button")},FormStory=function FormStory(_ref){var fieldsDefault=_ref.fieldsDefault,_React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(fieldsDefault),_React$useState2=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),fields=_React$useState2[0],onFieldsChange=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_export__WEBPACK_IMPORTED_MODULE_1__.default,{id:"demo-form",fields:fields,onFieldsChange:function handleFieldChange(state){Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onFieldsChange")(Object(metaforms__WEBPACK_IMPORTED_MODULE_4__.getFormData)(fields)),onFieldsChange(state)},onSubmit:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("submit"),onButtonClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("button click"),customComponents:{submit:submit}})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf)("Form",module).add("example 1",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormStory,{fieldsDefault:fields1})})).add("example 2",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormStory,{fieldsDefault:fields2})})).add("example 3",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormStory,{fieldsDefault:fields3})}))}.call(this,__webpack_require__(111)(module))},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"fieldConfig",(function(){return fieldConfig}));var _home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(125),_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),_export__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(76),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(49),metaforms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),_storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(59),fieldConfig=[[{name:"name",label:"Name",type:"text",validation:[{type:"required",message:"This field is required."}]},{name:"hasAddress",type:"checkbox",label:"I want to enter my address",value:!1},{name:"submit",label:"Continue",type:"submit"}],[{name:"street",label:"Street",type:"text"},{name:"city",label:"City",type:"text"},{name:"submit",label:"Continue",type:"submit"}],[{name:"companyName",label:"Company Name",type:"text",value:"banana"},{name:"submit",label:"Finish",type:"submit"}]],submit=function submit(props){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button",{type:"submit",style:{margin:"10px 0"}},props.label)},WizardStory=function WizardStory(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),_React$useState2=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState,2),values=_React$useState2[0],setValues=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),_React$useState4=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState3,2),step=_React$useState4[0],setStep=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(fieldConfig[step]),_React$useState6=Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_React$useState5,2),fields=_React$useState6[0],onFieldsChange=_React$useState6[1];return step>2?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong",null,"values:")," ",JSON.stringify(values))):react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_export__WEBPACK_IMPORTED_MODULE_2__.default,{id:"demo-form",fields:fields,onFieldsChange:function handleFieldChange(state){onFieldsChange(state)},onSubmit:function onSubmit(f){var nextStep=step+1;!1===Object(metaforms__WEBPACK_IMPORTED_MODULE_5__.getFormData)(f).hasAddress&&(nextStep=2),setStep(nextStep),onFieldsChange(fieldConfig[nextStep]),setValues(Object(_home_runner_work_react_metaforms_react_metaforms_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},values,{},Object(metaforms__WEBPACK_IMPORTED_MODULE_5__.getFormData)(f)))},onButtonClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("button click"),customComponents:{submit:submit}})};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.storiesOf)("Wizard",module).add("basic usage",(function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WizardStory,null)}))}.call(this,__webpack_require__(111)(module))},76:function(module,__webpack_exports__,__webpack_require__){"use strict";var _components_Form__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(303);__webpack_require__.d(__webpack_exports__,"default",(function(){return _components_Form__WEBPACK_IMPORTED_MODULE_0__.a}));__webpack_require__(4)}},[[304,1,2]]]);
//# sourceMappingURL=main.95d14566fc3044a88ac9.bundle.js.map