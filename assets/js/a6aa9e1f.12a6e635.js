"use strict";(self.webpackChunkscifracx_github_io=self.webpackChunkscifracx_github_io||[]).push([[3089],{8665:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),l=a(6010),r=a(2600),i=a(9960),m="sidebar_a9qW",s="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",u="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",g=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}function E(e){const{sidebar:t,toc:a,children:i,...m}=e,s=t&&t.items.length>0;return n.createElement(r.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},s&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},7329:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),l=a(2263),r=a(8665),i=a(8561),m=a(6299),s=a(5199),o=a(4739),c=a(6010);function u(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.Z)(),{blogDescription:r,blogTitle:i,permalink:m}=t,c="/"===m?a:i;return n.createElement(n.Fragment,null,n.createElement(s.d,{title:c,description:r}),n.createElement(o.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(r.Z,{sidebar:l},a.map((e=>{let{content:t}=e;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(m.Z,{metadata:t}))}function g(e){return n.createElement(s.FG,{className:(0,c.Z)(s.kM.wrapper.blogPages,s.kM.page.blogListPage)},n.createElement(u,e),n.createElement(d,e))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(5999),r=a(1750);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&n.createElement(r.Z,{permalink:i,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8561:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),l=a(6010),r=a(5999),i=a(9960),m=a(4996),s=a(5199),o=a(8780),c=a(6926),u=a(6753),d="blogPostTitle_rzP5",g="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",E=a(62),h="image_o0gy";function b(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:i,email:m}=t,s=r||m&&"mailto:"+m||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(b,{href:s},n.createElement("img",{className:h,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function N(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map(((e,t)=>{var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?Z:f),key:t},n.createElement(v,{author:{...e,imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL}}))})))}function k(e){var t;const a=function(){const{selectMessage:e}=(0,s.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:h}=(0,m.C)(),{children:b,frontMatter:v,assets:f,metadata:_,truncated:Z,isBlogPostPage:k=!1}=e,{date:P,formattedDate:T,permalink:w,tags:y,readingTime:I,title:L,editUrl:R,authors:x}=_,A=null!=(t=f.image)?t:v.image,C=!k&&Z,M=y.length>0,D=k?"h1":"h2";return n.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(D,{className:d,itemProp:"headline"},k?L:n.createElement(i.Z,{itemProp:"url",to:w},L)),n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:P,itemProp:"datePublished"},T),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",a(I))),n.createElement(N,{authors:x,assets:f})),A&&n.createElement("meta",{itemProp:"image",content:h(A,{absolute:!0})}),n.createElement("div",{id:k?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(c.Z,null,b)),(M||Z)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",k&&p)},M&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":C})},n.createElement(E.Z,{tags:y})),k&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:R})),C&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":M})},n.createElement(i.Z,{to:_.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(5999),r=a(3117),i=a(6010),m="iconEdit_dcUD";function s(e){let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(5199);function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},n.createElement(s,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(9960);function r(e){const{permalink:t,title:a,subLabel:r}=e;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(9960),i="tag_hD8n",m="tagRegular_D6E_",s="tagWithCount_i0QQ";function o(e){const{permalink:t,name:a,count:o}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,o?s:m)},a,o&&n.createElement("span",null,o))}},62:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),m="tags_XVD_",s="tag_JSN8";function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);