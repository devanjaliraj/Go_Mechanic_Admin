(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[165],{1957:function(e,a,t){"use strict";t.r(a),t.d(a,"EditCustomer",(function(){return C}));var n=t(51),l=t(13),r=t(14),s=t(16),c=t(15),m=t(0),o=t.n(m),i=t(1083),u=t(1081),p=t(1082),h=t(171),d=t(1086),g=t(797),E=t(802),f=t(795),v=t(793),b=t(561),y=(t(864),t(56)),N=t(1636),C=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.setState({activeTab:a})},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files[0]}),e.setState({selectedName:a.target.files[0].name}),console.log(a.target.files[0])},e.changeHandler1=function(a){e.setState({status:a.target.value})},e.changeHandler=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),console.log(e.props.match.params,e.state);var t=e.props.match.params.id;b.a.post("/view_onecust/".concat(t),N.data).then((function(a){console.log(a),e.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;b.a.get("/getonecustomer/".concat(a)).then((function(a){console.log(a),e.setState({first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",selectedFile:null,status:a.data.data.status})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(p.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Customer")),o.a.createElement(p.a,null,o.a.createElement(y.b,{render:function(e){var a=e.history;return o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/customer/customerList")}},"Back")}}))),o.a.createElement(d.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(p.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(f.a,null," First Name"),o.a.createElement(v.a,{type:"text",placeholder:"First Name",name:"first_name",value:this.state.first_name,onChange:this.changeHandler}))),o.a.createElement(p.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(f.a,null," Last Name"),o.a.createElement(v.a,{type:"text",placeholder:"Last Name",name:"last_name",value:this.state.last_name,onChange:this.changeHandler}))),o.a.createElement(p.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(f.a,null,"Sort Order"),o.a.createElement(v.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler}))),o.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(E.a,null,o.a.createElement(f.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),o.a.createElement(u.a,null,o.a.createElement(h.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Update Customer"))))))}}]),t}(m.Component);a.default=C}}]);
//# sourceMappingURL=165.8ab13669.chunk.js.map