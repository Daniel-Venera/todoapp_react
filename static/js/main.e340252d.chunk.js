(this.webpackJsonpformation=this.webpackJsonpformation||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),c=a.n(o),d=(a(13),a(4)),r=a(5),i=a(1),m=a(6),s=a(7);var u=function(e){return l.a.createElement("div",{className:"todo-item"},l.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),l.a.createElement("label",{className:e.item.completed?"todo-complete":null},e.item.text))},p=[{id:1,text:"Create a navbar",completed:!0},{id:2,text:"Create a footer",completed:!0},{id:3,text:"Add a font awesome heart icon",completed:!0},{id:4,text:"Add LinkedIn link",completed:!0},{id:5,text:"Add Github code",completed:!0},{id:6,text:"Responsive",completed:!1},{id:7,text:"Feature : add a task",completed:!1},{id:8,text:"Feature : delete one completed task and/or all tasks",completed:!1},{id:9,text:"Feature : delete all completed tasks",completed:!1},{id:10,text:"Feature : delete all completed tasks",completed:!1},{id:11,text:"Feature : tasks sections",completed:!1}];var h=function(){return l.a.createElement("footer",null,"Created with ",l.a.createElement("i",{class:"fa fa-heart"})," by ",l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-venera/"},"Daniel Venera"),l.a.createElement("br",null),"Find the code ",l.a.createElement("a",{href:"https://github.com/Daniel-Venera/todoapp_react"},"here"))};var f=function(){return l.a.createElement("nav",{className:"navbar"},"TodoApp with React")},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={todos:p},e.handleChange=e.handleChange.bind(Object(i.a)(e)),e}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return l.a.createElement(u,{key:t.id,item:t,handleChange:e.handleChange})}));return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"todo-list"},t),l.a.createElement(h,null))}}]),a}(l.a.Component);c.a.render(l.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e340252d.chunk.js.map