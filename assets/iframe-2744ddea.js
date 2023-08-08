import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const E="modulepreload",O=function(_,i){return new URL(_,i).href},l={},t=function(i,n,a){if(!n||n.length===0)return i();const e=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=O(r,a),r in l)return;l[r]=!0;const o=r.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(!!a)for(let p=e.length-1;p>=0;p--){const c=e[p];if(c.href===r&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":E,o||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),o)return new Promise((p,c)=>{s.addEventListener("load",p),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});P.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const T={"./src/app/stories/Introduction.mdx":async()=>t(()=>import("./Introduction-0a5bfb59.js"),["./Introduction-0a5bfb59.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-0fba58e4.js","./index-d475d2ea.js","./index-add592e3.js","./index-d37d4223.js","./index-d3606c93.js","./index-c4ced888.js","./index-f4c58a73.js","./index-6a2b73ba.js","./index-1b3f171e.js","./index-e5b7d252.js","./index-bf70942a.js","./index-c6b1b4f9.js","./Combination-9efd6927.js","./index-11a3acc1.js","./index-356e4a49.js","./classix-ee785c7e.js","./tooltip-747c2033.js","./index-a1cf9e47.js"],import.meta.url),"./src/app/ui/login/login.view.stories.tsx":async()=>t(()=>import("./login.view.stories-2e3c1443.js"),["./login.view.stories-2e3c1443.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./create-remix-stub-9b48c4b9.js","./index-9d890d39.js","./user.mock-b5d38c63.js","./user-avatar-737aede8.js","./index-d3606c93.js","./index-add592e3.js","./tooltip-747c2033.js","./classix-ee785c7e.js","./select-8cb1715f.js","./index-f4c58a73.js","./index-6a2b73ba.js","./index-1b3f171e.js","./index-e5b7d252.js","./index-bf70942a.js","./index-c6b1b4f9.js","./Combination-9efd6927.js","./index-11a3acc1.js","./index-2c0e38a7.js","./index.esm-1bd79aba.js","./iconBase-1d38e9b4.js","./button-e6a2bc29.js"],import.meta.url),"./src/app/components/user-avatar/user-avatar.stories.tsx":async()=>t(()=>import("./user-avatar.stories-6106658d.js"),["./user-avatar.stories-6106658d.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./user.mock-b5d38c63.js","./user-avatar-737aede8.js","./index-d3606c93.js","./index-add592e3.js","./tooltip-747c2033.js","./classix-ee785c7e.js"],import.meta.url),"./src/app/components/tooltip/tooltip.stories.tsx":async()=>t(()=>import("./tooltip.stories-6f25d00d.js"),["./tooltip.stories-6f25d00d.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./tooltip-747c2033.js","./classix-ee785c7e.js"],import.meta.url),"./src/app/components/toast/toast.stories.tsx":async()=>t(()=>import("./toast.stories-660d9c9a.js"),["./toast.stories-660d9c9a.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./theme.store-a20c7057.js","./index-9d890d39.js","./button-e6a2bc29.js","./classix-ee785c7e.js","./toast.stories-55fec1ff.css"],import.meta.url),"./src/app/components/title/title.stories.tsx":async()=>t(()=>import("./title.stories-1902f8c3.js"),["./title.stories-1902f8c3.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./title-a6a809d3.js","./classix-ee785c7e.js","./textarea-autosize-79e9b05e.js"],import.meta.url),"./src/app/components/select/select.stories.tsx":async()=>t(()=>import("./select.stories-33e82f28.js"),["./select.stories-33e82f28.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./user.mock-b5d38c63.js","./select-8cb1715f.js","./index-f4c58a73.js","./index-d3606c93.js","./index-add592e3.js","./index-6a2b73ba.js","./index-1b3f171e.js","./index-e5b7d252.js","./index-bf70942a.js","./index-c6b1b4f9.js","./Combination-9efd6927.js","./index-11a3acc1.js","./index-2c0e38a7.js","./classix-ee785c7e.js","./index.esm-1bd79aba.js","./iconBase-1d38e9b4.js","./user-avatar-737aede8.js","./tooltip-747c2033.js"],import.meta.url),"./src/app/components/scroll-area/scroll-area.stories.tsx":async()=>t(()=>import("./scroll-area.stories-d1b24f46.js"),["./scroll-area.stories-d1b24f46.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./classix-ee785c7e.js","./index-d3606c93.js","./index-add592e3.js","./index-e62f264b.js","./index-c6b1b4f9.js","./index-6a2b73ba.js","./index-1b3f171e.js"],import.meta.url),"./src/app/components/priority-icon/priority-icon.stories.tsx":async()=>t(()=>import("./priority-icon.stories-8838d6e8.js"),["./priority-icon.stories-8838d6e8.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./priority-icon-c8374029.js","./classix-ee785c7e.js","./index.esm-baa42f24.js","./iconBase-1d38e9b4.js"],import.meta.url),"./src/app/components/kbd-placeholder/kbd-placeholder.stories.tsx":async()=>t(()=>import("./kbd-placeholder.stories-5a5cad34.js"),["./kbd-placeholder.stories-5a5cad34.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./kbd-placeholder-9d03590e.js"],import.meta.url),"./src/app/components/error-500/error-500.stories.tsx":async()=>t(()=>import("./error-500.stories-186376cd.js"),["./error-500.stories-186376cd.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./error-base-3d932bd3.js"],import.meta.url),"./src/app/components/dialog/dialog.stories.tsx":async()=>t(()=>import("./dialog.stories-45b6de4c.js"),["./dialog.stories-45b6de4c.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./dialog-fe472930.js","./index-022f8340.js","./index-d3606c93.js","./index-add592e3.js","./index-1b3f171e.js","./Combination-9efd6927.js","./index-e62f264b.js","./classix-ee785c7e.js","./index-2c0e38a7.js","./button-e6a2bc29.js"],import.meta.url),"./src/app/components/error-404/error-404.stories.tsx":async()=>t(()=>import("./error-404.stories-dcb6764b.js"),["./error-404.stories-dcb6764b.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./error-base-3d932bd3.js"],import.meta.url),"./src/app/components/description/description.stories.tsx":async()=>t(()=>import("./description.stories-1bec3916.js"),["./description.stories-1bec3916.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./description-29042694.js","./textarea-autosize-79e9b05e.js","./classix-ee785c7e.js"],import.meta.url),"./src/app/components/button/button.stories.tsx":async()=>t(()=>import("./button.stories-3e8d81a9.js"),["./button.stories-3e8d81a9.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./button-e6a2bc29.js","./classix-ee785c7e.js"],import.meta.url),"./src/app/components/alert-dialog/alert-dialog.stories.tsx":async()=>t(()=>import("./alert-dialog.stories-bf168001.js"),["./alert-dialog.stories-bf168001.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./alert-dialog-6ad59604.js","./index-d3606c93.js","./index-add592e3.js","./index-022f8340.js","./index-1b3f171e.js","./Combination-9efd6927.js","./index-e62f264b.js","./index-2c0e38a7.js","./button-e6a2bc29.js","./classix-ee785c7e.js"],import.meta.url),"./src/app/ui/main/header/header.stories.tsx":async()=>t(()=>import("./header.stories-6e29e6c5.js"),["./header.stories-6e29e6c5.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./utils-fb64ba1b.js","./create-remix-stub-9b48c4b9.js","./index-9d890d39.js","./user.mock-b5d38c63.js","./theme.store-a20c7057.js","./classix-ee785c7e.js","./index.esm-baa42f24.js","./iconBase-1d38e9b4.js","./tooltip-747c2033.js","./index-d3606c93.js","./index-add592e3.js","./index-1b3f171e.js","./Combination-9efd6927.js","./index-e5b7d252.js","./index-bf70942a.js","./index-c6b1b4f9.js","./index-e62f264b.js","./index.esm-33476c78.js","./index.esm-52b74111.js","./user-avatar-737aede8.js","./button-e6a2bc29.js"],import.meta.url),"./src/app/ui/main/projects/project-card/project-card.stories.tsx":async()=>t(()=>import("./project-card.stories-58930274.js"),["./project-card.stories-58930274.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./project.mock-77dfe5aa.js","./user.mock-b5d38c63.js","./utils-fb64ba1b.js","./create-remix-stub-9b48c4b9.js","./index-9d890d39.js","./theme.store-a20c7057.js","./index.esm-33476c78.js","./iconBase-1d38e9b4.js","./classix-ee785c7e.js","./alert-dialog-6ad59604.js","./index-d3606c93.js","./index-add592e3.js","./index-022f8340.js","./index-1b3f171e.js","./Combination-9efd6927.js","./index-e62f264b.js","./index-2c0e38a7.js","./button-e6a2bc29.js"],import.meta.url),"./src/app/ui/main/projects/create-project-panel/create-project-panel.stories.tsx":async()=>t(()=>import("./create-project-panel.stories-b59d7415.js"),["./create-project-panel.stories-b59d7415.js","./project.mock-77dfe5aa.js","./user.mock-b5d38c63.js","./utils-fb64ba1b.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./create-remix-stub-9b48c4b9.js","./index-9d890d39.js","./theme.store-a20c7057.js","./dialog-fe472930.js","./index-022f8340.js","./index-d3606c93.js","./index-add592e3.js","./index-1b3f171e.js","./Combination-9efd6927.js","./index-e62f264b.js","./classix-ee785c7e.js","./index-2c0e38a7.js","./index-11a3acc1.js","./index-bf70942a.js","./index.esm-c6bb7c6a.js","./iconBase-1d38e9b4.js","./user-avatar-737aede8.js","./tooltip-747c2033.js","./title-a6a809d3.js","./textarea-autosize-79e9b05e.js","./description-29042694.js","./kbd-placeholder-9d03590e.js","./button-e6a2bc29.js"],import.meta.url),"./src/app/ui/main/project/sidebar/sidebar.stories.tsx":async()=>t(()=>import("./sidebar.stories-7652788b.js"),["./sidebar.stories-7652788b.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./project.mock-77dfe5aa.js","./user.mock-b5d38c63.js","./utils-fb64ba1b.js","./create-remix-stub-9b48c4b9.js","./index-9d890d39.js","./theme.store-a20c7057.js","./index.esm-baa42f24.js","./iconBase-1d38e9b4.js","./classix-ee785c7e.js","./index.esm-1bd79aba.js","./index.esm-c6bb7c6a.js"],import.meta.url),"./src/app/ui/main/project/board/category-column/issue-card/issue-card.stories.tsx":async()=>t(()=>import("./issue-card.stories-2ab8f789.js"),["./issue-card.stories-2ab8f789.js","./jsx-runtime-29545a09.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./utils-fb64ba1b.js","./create-remix-stub-9b48c4b9.js","./index-9d890d39.js","./user.mock-b5d38c63.js","./theme.store-a20c7057.js","./classix-ee785c7e.js","./index.esm-52b74111.js","./iconBase-1d38e9b4.js","./priority-icon-c8374029.js","./index.esm-baa42f24.js"],import.meta.url)};async function u(_){return T[_]()}u.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:L,PreviewWeb:I,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,f=async()=>{const _=await Promise.all([t(()=>import("./config-dae14476.js"),["./config-dae14476.js","./index-d475d2ea.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./react-18-b61ff3fc.js","./index-add592e3.js","./index-c4ced888.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),t(()=>import("./preview-cd6b3393.js"),[],import.meta.url),t(()=>import("./preview-a60aa466.js"),[],import.meta.url),t(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-25cb0eda.js"),["./preview-25cb0eda.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-b79ea209.js"),["./preview-b79ea209.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-d06fc6bf.js"),["./preview-d06fc6bf.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js"],import.meta.url),t(()=>import("./preview-0b293f2a.js"),[],import.meta.url),t(()=>import("./preview-0b293f2a.js"),[],import.meta.url),t(()=>import("./preview-a2d29787.js"),["./preview-a2d29787.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./preview-0f5b1157.css"],import.meta.url)]);return L(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:u,getProjectAnnotations:f});export{t as _};
//# sourceMappingURL=iframe-2744ddea.js.map
