import{f as j,aP as P,j as t,at as b,aU as g,af as L,aV as w,r as v,o as B,aW as k,av as T,aX as A,a1 as C,aR as S,au as _,aS as W,ar as D,ai as H,aT as E}from"./sanity-ed8062bd.js";const G=j.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function R(l){const{childItemId:n,items:a,isActive:o,layout:i,showIcons:d,title:r}=l,{collapsed:u}=L(),c=w(a==null?void 0:a.filter(e=>e.type!=="divider")),x=v.useCallback(e=>{var s;return((s=a==null?void 0:a.find((h,m)=>m===e))==null?void 0:s.type)==="divider"},[a]),p=v.useCallback(e=>{var h;const s=(h=e.displayOptions)==null?void 0:h.showIcon;return typeof s<"u"?s!==!1:d!==!1},[d]),I=v.useCallback((e,s)=>{const{virtualIndex:h}=s;if(e.type==="divider")return t.jsx(B,{marginBottom:1,children:t.jsx(G,{})},`divider-${h}`);const m=!o&&n===e.id,y=o&&n===e.id,f=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return t.jsx(k,{icon:p(e)?e.icon:!1,id:e.id,layout:i,marginBottom:1,pressed:m,schemaType:e.schemaType,selected:y,title:c(e).title,value:f},e.id)},[n,c,o,i,p]);return t.jsx(T,{overflow:u?"hidden":"auto",children:a&&a.length>0&&t.jsx(A,{activeItemDataAttr:"data-hovered",ariaLabel:r,canReceiveFocus:!0,getItemDisabled:x,itemHeight:51,items:a,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1})})}const F=({index:l,menuItems:n,menuItemGroups:a,title:o})=>{const{features:i}=C(),{collapsed:d,isLast:r}=S(),u=r&&!d?-1:0;return t.jsx(_,{actions:t.jsx(W,{menuItems:n,menuItemGroups:a}),backButton:i.backButton&&l>0&&t.jsx(D,{as:H,"data-as":"a",icon:E,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:u,title:o})};function X(l){const{childItemId:n,index:a,isActive:o,isSelected:i,pane:d,paneKey:r}=l,{defaultLayout:u,displayOptions:c,items:x,menuItems:p,menuItemGroups:I}=d,e=(c==null?void 0:c.showIcons)!==!1,{title:s}=P(d);return t.jsxs(b,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:r,maxWidth:640,minWidth:320,selected:i,children:[g,t.jsx(F,{index:a,menuItems:p,menuItemGroups:I,title:s}),t.jsx(R,{childItemId:n,isActive:o,items:x,layout:u,showIcons:e,title:s},r)]})}export{X as default};
