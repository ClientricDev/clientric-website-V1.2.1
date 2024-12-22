(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(7325)}])},2760:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),a=n(1163),r=n(2837);function o(e){let{title:t,description:n,image:o,type:i="WebPage"}=e,c=(0,a.useRouter)(),l={"@context":"https://schema.org","@type":i,name:t,description:n,url:"https://clientric.co".concat(c.asPath),image:o||"https://clientric.co/images/clientric-og.jpg",inLanguage:"en-US",isPartOf:{"@type":"WebSite",name:r.pB,url:"https://clientric.co"},publisher:{"@type":"Organization",name:r.pB,logo:{"@type":"ImageObject",url:"https://clientric.co/images/clientric-logo.png"}}};return(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(l)}})}},7162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893),a=n(9008),r=n.n(a);function o(e){let{title:t,description:n,canonical:a="https://clientric.co",ogImage:o="https://clientric.co/images/clientric-logo.png"}=e,i="".concat(t," | Clientric CRM Consulting");return(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:i}),(0,s.jsx)("meta",{name:"description",content:n}),(0,s.jsx)("link",{rel:"canonical",href:a}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:i}),(0,s.jsx)("meta",{property:"og:description",content:n}),(0,s.jsx)("meta",{property:"og:image",content:o}),(0,s.jsx)("meta",{property:"og:url",content:a}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:title",content:i}),(0,s.jsx)("meta",{name:"twitter:description",content:n}),(0,s.jsx)("meta",{name:"twitter:image",content:o}),(0,s.jsx)("meta",{name:"robots",content:"index, follow"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]})}},7325:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(5893),a=n(7294),r=n(6571),o=n(8357);function i(){let[e,t]=(0,o.YD)({triggerOnce:!0,threshold:.1}),[n,i]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{i(!0)},[]),n)?(0,s.jsx)("section",{className:"gradient-bg py-20",ref:e,children:(0,s.jsx)("div",{className:"container mx-auto px-4",children:(0,s.jsxs)(r.E.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{},transition:{duration:.8},className:"text-center max-w-4xl mx-auto",children:[(0,s.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"Let's Talk Business"}),(0,s.jsx)("p",{className:"text-xl text-gray-300 mb-8",children:"No fancy sales pitch. No technical jargon. Just a straight-forward conversation about your business needs and how we can help."})]})})}):null}function c(){let[e,t]=(0,a.useState)({Name_First:"",Name_Last:"",Email:"",PhoneNumber_countrycode:"",PhoneNumber_first:"",PhoneNumber_second:"",Dropdown:"",MultiLine:"",DecisionBox:!0}),[n,r]=(0,a.useState)(!1),o=e=>{let{name:n,value:s,type:a}=e.target;t(t=>({...t,[n]:"checkbox"===a?e.target.checked:s}))},i=(e,n)=>{let{name:s,value:a}=e.target;if(t(e=>({...e,[s]:a})),a.length===e.target.maxLength&&n){let e=document.getElementById(n);e&&e.focus()}},c=()=>{let{PhoneNumber_countrycode:t,PhoneNumber_first:n,PhoneNumber_second:s}=e,a=[t,n,s].every(e=>/^\d+$/.test(e)&&e.length>0);return a||alert("Please enter a valid phone number using only digits."),a};return(0,s.jsxs)("div",{className:"py-16 bg-surface-dark",children:[(0,s.jsx)("iframe",{id:"submissionFrame",name:"submissionFrame",style:{display:"none"}}),(0,s.jsx)("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-white mb-6 text-center",children:"Fill out the form below, and we will get back to you as soon as possible."}),(0,s.jsxs)("form",{id:"zohoForm",action:"https://forms.zohopublic.com/clientric/form/ContactUs/formperma/QaMgmFq0ML8erljFkF-tLHz-jM0EmYJ-KOF-ZcEGVBA/htmlRecords/submit",method:"POST",encType:"multipart/form-data",target:"submissionFrame",onSubmit:t=>{if(t.preventDefault(),!c())return;let n=e.PhoneNumber_countrycode+e.PhoneNumber_first+e.PhoneNumber_second,s=document.createElement("input");s.setAttribute("type","hidden"),s.setAttribute("name","PhoneNumber"),s.setAttribute("value",n);let a=document.getElementById("zohoForm");a.appendChild(s),r(!0),a.submit(),setTimeout(()=>{alert("Form successfully submitted! Thank you."),window.location.reload()},1500)},className:"bg-surface p-8 rounded-lg shadow-md space-y-6",children:[(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"Name_First",className:"block text-gray-300 mb-2",children:["First Name ",(0,s.jsx)("span",{className:"text-accent-gold","aria-hidden":"true",children:"*"}),(0,s.jsx)("span",{className:"sr-only",children:"(Required)"})]}),(0,s.jsx)("input",{type:"text",id:"Name_First",name:"Name_First","aria-required":"true",value:e.Name_First,onChange:o,placeholder:"First Name",required:!0,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"Name_Last",className:"block text-gray-300 mb-2",children:["Last Name ",(0,s.jsx)("span",{className:"text-accent-gold",children:"*"})]}),(0,s.jsx)("input",{type:"text",id:"Name_Last",name:"Name_Last",value:e.Name_Last,onChange:o,placeholder:"Last Name",required:!0,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"Email",className:"block text-gray-300 mb-2",children:["Email ",(0,s.jsx)("span",{className:"text-accent-gold","aria-hidden":"true",children:"*"}),(0,s.jsx)("span",{className:"sr-only",children:"(Required)"})]}),(0,s.jsx)("input",{type:"email",id:"Email",name:"Email","aria-required":"true",value:e.Email,onChange:o,placeholder:"Email",required:!0,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"PhoneNumber_countrycode",className:"block text-gray-300 mb-2",children:["Phone ",(0,s.jsx)("span",{className:"text-accent-gold",children:"*"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,s.jsx)("input",{type:"text",id:"PhoneNumber_countrycode",name:"PhoneNumber_countrycode",value:e.PhoneNumber_countrycode,onChange:e=>i(e,"PhoneNumber_first"),placeholder:"###",maxLength:3,required:!0,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-center focus:border-accent-gold focus:outline-none"}),(0,s.jsx)("input",{type:"text",id:"PhoneNumber_first",name:"PhoneNumber_first",value:e.PhoneNumber_first,onChange:e=>i(e,"PhoneNumber_second"),placeholder:"###",maxLength:3,required:!0,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-center focus:border-accent-gold focus:outline-none"}),(0,s.jsx)("input",{type:"text",id:"PhoneNumber_second",name:"PhoneNumber_second",value:e.PhoneNumber_second,onChange:i,placeholder:"####",maxLength:4,required:!0,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white text-center focus:border-accent-gold focus:outline-none"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{htmlFor:"Dropdown",className:"block text-gray-300 mb-2",children:["I need help with... ",(0,s.jsx)("span",{className:"text-accent-gold",children:"*"})]}),(0,s.jsxs)("select",{id:"Dropdown",name:"Dropdown",value:e.Dropdown,onChange:o,required:!0,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none",children:[(0,s.jsx)("option",{value:"",children:"-Select-"}),(0,s.jsx)("option",{value:"Systems that make my team more efficient",children:"Systems that make my team more efficient"}),(0,s.jsx)("option",{value:"Making reports and dashboards easy to access",children:"Making reports and dashboards easy to access"}),(0,s.jsx)("option",{value:"Cutting down on software costs",children:"Cutting down on software costs"}),(0,s.jsx)("option",{value:"Automating tasks to save time",children:"Automating tasks to save time"}),(0,s.jsx)("option",{value:"Organizing our processes and SOPs",children:"Organizing our processes and SOPs"}),(0,s.jsx)("option",{value:"Customizing tech solutions for my business",children:"Customizing tech solutions for my business"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"MultiLine",className:"block text-gray-300 mb-2",children:"Tell me about your project"}),(0,s.jsx)("textarea",{id:"MultiLine",name:"MultiLine",value:e.MultiLine,onChange:o,placeholder:"Please share any specific challenges or goals you'd like to discuss...",rows:4,className:"w-full bg-surface-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-accent-gold focus:outline-none"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"checkbox",id:"DecisionBox",name:"DecisionBox",checked:e.DecisionBox,onChange:o,className:"form-checkbox text-accent-gold rounded border-gray-700 bg-surface-dark focus:ring-accent-gold"}),(0,s.jsx)("span",{className:"ml-2 text-gray-300",children:"SMS & Email Opt-in"})]}),(0,s.jsx)("p",{className:"text-sm text-gray-400 mt-2",children:"Opt-in to receive SMS notifications, alerts, and occasional marketing communications. You are opted in by default to ensure you receive timely updates from our team."})]}),(0,s.jsx)("button",{type:"submit",disabled:n,className:"btn-primary w-full ".concat(n?"opacity-50 cursor-not-allowed":""),children:n?"Submitting...":"Submit"})]})]})})]})}var l=n(8689),d=n(73),m=n(6162),u=n(2837);function h(){let[e,t]=(0,o.YD)({triggerOnce:!0,threshold:.1}),[n,i]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{i(!0)},[]),!n)return null;let c=[{icon:l.Z,title:"Phone",content:u.UE,link:u.sI},{icon:d.Z,title:"Email",content:u.xK,link:u.PF},{icon:m.Z,title:"Hours",content:"Monday - Friday: 8:00 AM - 5:00 PM Pacific",link:null}];return(0,s.jsxs)(r.E.div,{ref:e,initial:{opacity:0,x:20},animate:t?{opacity:1,x:0}:{},transition:{duration:.8},className:"space-y-8",children:[(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-white mb-6",children:"Get in Touch"}),(0,s.jsx)("p",{className:"text-gray-300 mb-8",children:"Whether you're ready to transform your business or just have questions, we're here to help. Let's have a straight-forward conversation about your needs."}),(0,s.jsx)("div",{className:"space-y-6",children:c.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-start",children:[(0,s.jsx)(e.icon,{className:"h-6 w-6 text-accent-gold mr-4 mt-1"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-1",children:e.title}),e.link?(0,s.jsx)("a",{href:e.link,className:"text-gray-300 hover:text-accent-yellow transition-colors",children:e.content}):(0,s.jsx)("p",{className:"text-gray-300",children:e.content})]})]},t))})]}),(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-white mb-6",children:"Why Choose Us"}),(0,s.jsxs)("ul",{className:"space-y-4",children:[(0,s.jsxs)("li",{className:"flex items-center text-gray-300",children:[(0,s.jsx)("span",{className:"text-accent-gold mr-2",children:"✓"}),"Full Money-Back Guarantee"]}),(0,s.jsxs)("li",{className:"flex items-center text-gray-300",children:[(0,s.jsx)("span",{className:"text-accent-gold mr-2",children:"✓"}),"Construction & Trades Specialists"]}),(0,s.jsxs)("li",{className:"flex items-center text-gray-300",children:[(0,s.jsx)("span",{className:"text-accent-gold mr-2",children:"✓"}),"Zoho Premium Partner"]}),(0,s.jsxs)("li",{className:"flex items-center text-gray-300",children:[(0,s.jsx)("span",{className:"text-accent-gold mr-2",children:"✓"}),"No-Nonsense Solutions"]})]})]})]})}var x=n(7162),p=n(2760);function g(){let[e,t]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Z,{title:"Contact Us - Construction & Trades Technology Experts",description:"Get in touch with Clientric CRM Consulting. Schedule your free consultation and learn how we can help transform your construction or trades business with practical technology solutions.",canonical:"https://clientric.co/contact"}),(0,s.jsxs)("div",{className:"min-h-screen bg-surface pt-24",children:[(0,s.jsx)(p.Z,{title:"Contact Us - Construction & Trades Technology Experts",description:"Get in touch with Clientric CRM Consulting. Schedule your free consultation and learn how we can help transform your business.",type:"ContactPage"}),(0,s.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/ContactPage",children:[(0,s.jsx)("meta",{itemProp:"name",content:"Contact Clientric CRM Consulting"}),(0,s.jsx)("meta",{itemProp:"description",content:"Get in touch with our technology experts specializing in construction and trades businesses."}),(0,s.jsx)("header",{children:(0,s.jsx)(i,{})}),(0,s.jsx)("div",{className:"container mx-auto px-4 py-20",children:(0,s.jsxs)("div",{className:"grid lg:grid-cols-2 gap-12",children:[(0,s.jsx)("section",{"aria-label":"Contact Form",itemProp:"mainContentOfPage",children:(0,s.jsx)(c,{})}),(0,s.jsxs)("section",{"aria-label":"Contact Information",itemProp:"contactPoint",itemScope:!0,itemType:"http://schema.org/ContactPoint",children:[(0,s.jsx)(h,{}),(0,s.jsx)("meta",{itemProp:"contactType",content:"customer service"}),(0,s.jsx)("meta",{itemProp:"availableLanguage",content:"English"}),(0,s.jsx)("meta",{itemProp:"areaServed",content:"United States"})]})]})})]})]})]}):null}},6162:function(e,t,n){"use strict";var s=n(7294);let a=s.forwardRef(function(e,t){let{title:n,titleId:a,...r}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},r),n?s.createElement("title",{id:a},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});t.Z=a}},function(e){e.O(0,[746,888,774,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);