(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[124],{1953:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t(51),s=t(13),r=t(14),l=t(16),c=t(15),i=t(0),o=t.n(i),m=t(1083),u=t(1081),d=t(1082),f=t(171),p=t(1086),h=t(797),b=t(795),g=t(793),v=t(36),E=t.n(v),y=t(56),O=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),E.a.post("http://3.108.185.7:4000/api/user/customersignup",r.state).then((function(e){console.log(e),alert("Customer Added Successful")})).catch((function(e){console.log(e)}))},r.state={first_name:"",last_name:"",customer_email:"",mobile_no:"",selectedFile:null,status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"Add User")),o.a.createElement(d.a,null,o.a.createElement(y.b,{render:function(e){var a=e.history;return o.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/vehicle/VehicleModel")}}," ","Back")}}))),o.a.createElement(p.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null," Name"),o.a.createElement(g.a,{type:"text",placeholder:"Enter Name"})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Permissions"),o.a.createElement(g.a,{type:"select",name:"last_name",placeholder:"Enter Last Name"}))),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Password "),o.a.createElement(g.a,{required:!0,type:"text",name:"sortorder",placeholder:"Enter Password",value:this.state.sortorder,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Confirm Password "),o.a.createElement(g.a,{required:!0,type:"text",name:"sortorder",placeholder:"Enter Confirm  Password",value:this.state.sortorder,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add User")))))))}}]),t}(i.Component)},793:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),c=t(0),i=t.n(c),o=t(1),m=t.n(o),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,c=e.valid,o=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),O="form-control";h?(O+="-plaintext",y=m||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(f.mapToCssModules)(d()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===y||m&&"function"===typeof m)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},795:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),l=t.n(r),c=t(1),i=t.n(c),o=t(4),m=t.n(o),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,i=e.tag,o=e.check,f=e.size,p=e.for,h=Object(s.a)(e,d),b=[];c.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var c,i=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(u.mapToCssModules)(m()(((c={})[r]=s.size||""===s.size,c["order"+i+s.order]=s.order||0===s.order,c["offset"+i+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(l,a,s),b.push(r)}}));var v=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!o&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),t);return l.a.createElement(i,Object(n.a)({htmlFor:p},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},797:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),c=t(0),i=t.n(c),o=t(1),m=t.n(o),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,o=Object(s.a)(e,p),m=Object(f.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},o,{ref:c,className:m}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=124.0f4b9781.chunk.js.map