System.register(["./index-legacy-3407b3eb.js"],(function(e,t){"use strict";var n,o,i,r;return{setters:[e=>{n=e.h,o=e.g,i=e.r,r=e.c}],execute:function(){var t=globalThis&&globalThis.__awaiter||function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){e.done?n(e.value):i(e.value).then(a,c)}s((o=o.apply(e,t||[])).next())}))},a=globalThis&&globalThis.__generator||function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(e){return function(t){return s([e,t])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,c[0]&&(a=0)),a;)try{if(n=1,o&&(i=2&c[0]?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,o=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],o=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};e("pwa_camera_modal_instance",function(){function e(e){var n=this;i(this,e),this.onPhoto=r(this,"onPhoto",7),this.noDeviceError=r(this,"noDeviceError",7),this.handlePhoto=function(e){return t(n,void 0,void 0,(function(){return a(this,(function(t){return this.onPhoto.emit(e),[2]}))}))},this.handleNoDeviceError=function(e){return t(n,void 0,void 0,(function(){return a(this,(function(t){return this.noDeviceError.emit(e),[2]}))}))},this.facingMode="user",this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image"}return e.prototype.handleBackdropClick=function(e){e.target!==this.el&&this.onPhoto.emit(null)},e.prototype.handleComponentClick=function(e){e.stopPropagation()},e.prototype.handleBackdropKeyUp=function(e){"Escape"===e.key&&this.onPhoto.emit(null)},e.prototype.render=function(){var e=this;return n("div",{class:"wrapper",onClick:function(t){return e.handleBackdropClick(t)}},n("div",{class:"content"},n("pwa-camera",{onClick:function(t){return e.handleComponentClick(t)},facingMode:this.facingMode,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))},Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:!1,configurable:!0}),e}()).style=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}"}}}));
