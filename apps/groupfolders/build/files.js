!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,(function(){return function(e){function n(n){for(var t,i,a=n[0],o=n[1],s=0,l=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(p&&p(n);l.length;)l.shift()()}var t={},r={0:0};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,i){t=r[e]=[n,i]}));n.push(t[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+""+({2:"sharing",3:"vendors~sharing"}[e]||e)+".js"}(e);var p=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",p.name="ChunkLoadError",p.type=i,p.request=a,t[1](p)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var a=window.webpackJsonpGroupFolder=window.webpackJsonpGroupFolder||[],o=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var p=o;return i(i.s=29)}({1:function(e,n,t){"use strict";
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var r={PROPERTY_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-list",PROPERTY_ACL_ENTRY:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl",PROPERTY_ACL_MAPPING_TYPE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-type",PROPERTY_ACL_MAPPING_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-id",PROPERTY_ACL_MASK:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mask",PROPERTY_ACL_PERMISSIONS:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-permissions",PROPERTY_ACL_ENABLED:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-enabled",PROPERTY_ACL_CAN_MANAGE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-can-manage",PROPERTY_INHERITED_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}inherited-acl-list",GROUP_FOLDER_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}group-folder-id"};n.a=r},12:function(e,n,t){"use strict";var r,i=t(1),a=t(7);function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var p=function(e){for(var n=[],t=0;t<e.length;t++){var r={mask:0,permissions:0};for(var i in e[t].children){var a=e[t].children[i];if(a.nodeName)switch(a.nodeName.split(":")[1]||""){case"acl-mapping-id":r.mappingId=a.textContent||a.text;break;case"acl-mapping-type":r.mappingType=a.textContent||a.text;break;case"acl-mapping-display-name":r.mappingDisplayName=a.textContent||a.text;break;case"acl-mask":r.mask=parseInt(a.textContent||a.text,10);break;case"acl-permissions":r.permissions=parseInt(a.textContent||a.text,10)}}n.push(r)}return n},l={attach:function(e){(r=e.filesClient).addFileInfoParser((function(e){var n={},t=e.propStat[0].properties,r=t[i.a.GROUP_FOLDER_ID];void 0!==r&&(n.groupFolderId=r);var a=t[i.a.PROPERTY_ACL_ENABLED];void 0!==a&&(n.aclEnabled=!!a);var o=t[i.a.PROPERTY_ACL_CAN_MANAGE];void 0!==o&&(n.aclCanManage=!!o);var s=t[i.a.PROPERTY_ACL_LIST]||[],l=t[i.a.PROPERTY_INHERITED_ACL_LIST]||[];return n.acl=p(s),n.inheritedAcls=p(l),n.acl.map((function(e){var t=n.inheritedAcls.find((function(n){return n.mappingType===e.mappingType&&n.mappingId===e.mappingId}));return t&&(e.permissions=e.permissions&e.mask|t.permissions&~e.mask),e})),n})),function(e){e._client.getPropertyBody=function(e,n){var t,r=this.parseClarkNotation(e);if(t=this.xmlNamespaces[r.namespace]?this.xmlNamespaces[r.namespace]+":"+r.name:"x:"+r.name+' xmlns:x="'+r.namespace+'"',Array.isArray(n)){var i="";for(var a in n)n[a].hasOwnProperty("type")&&n[a].hasOwnProperty("data")?i+=this.getPropertyBody(n[a].type,n[a].data):i+=this.getPropertyBody(a,n[a]);return"      <"+t+">"+i+"</"+t+">"}if("object"===s(n)){var o="";if(n.hasOwnProperty("type")&&n.hasOwnProperty("data"))return this.getPropertyBody(n.type,n.data);for(var p in n)o+=this.getPropertyBody(p,n[p]);return"      <"+t+">"+o+"</"+t+">"}return"d:resourcetype"!==t&&(n=dav._escapeXml(""+n)),"      <"+t+">"+n+"</"+t+">"},e._client._renderPropSet=function(e){var n="  <d:set>\n   <d:prop>\n";for(var t in e)e.hasOwnProperty(t)&&(n+=this.getPropertyBody(t,e[t]));return n+="    </d:prop>\n",n+="  </d:set>\n"}}(r)}};!function(e){_.extend(e.Files.Client,i.a)}(window.OC),OC.Plugins.register("OCA.Files.FileList",l);var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,s;return n=e,(t=[{key:"propFind",value:function(e){return r.getFileInfo(e.path+"/"+e.name,{properties:[i.a.PROPERTY_ACL_LIST,i.a.PROPERTY_INHERITED_ACL_LIST,i.a.GROUP_FOLDER_ID,i.a.PROPERTY_ACL_ENABLED,i.a.PROPERTY_ACL_CAN_MANAGE]}).then((function(e,n){if(n){var t={},r={};for(var i in n.acl){var o=new a.a;o.fromValues(n.acl[i].mappingType,n.acl[i].mappingId,n.acl[i].mappingDisplayName,n.acl[i].mask,n.acl[i].permissions),t[o.getUniqueMappingIdentifier()]=o}for(var s in n.inheritedAcls){var p=new a.a;p.fromValues(n.inheritedAcls[s].mappingType,n.inheritedAcls[s].mappingId,n.inheritedAcls[s].mappingDisplayName,n.inheritedAcls[s].mask,n.inheritedAcls[s].permissions,!0);var l=p.getUniqueMappingIdentifier();r[l]=p,null==t[l]&&(t[l]=p)}return{acls:Object.values(t),inheritedAclsById:r,aclEnabled:n.aclEnabled,aclCanManage:n.aclCanManage,groupFolderId:n.groupFolderId}}return null}))}},{key:"propPatch",value:function(e,n){var t=[];for(var a in n)t.push({type:i.a.PROPERTY_ACL_ENTRY,data:n[a].getProperties()});var o={};return o[i.a.PROPERTY_ACL_LIST]=t,r._client.propPatch(r._client.baseUrl+e.path+"/"+e.name,o)}}])&&o(n.prototype,t),s&&o(n,s),e}();n.a=new c},29:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);t(12);
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.nc=btoa(OC.requestToken),t.p=OC.linkTo("groupfolders","build/"),function(e,n){e.Plugins.register("OCA.Files.App",{attach:function(){n.Theming?e.MimeType._mimeTypeIcons["dir-group"]=e.generateUrl("/apps/theming/img/groupfolders/folder-group.svg?v="+n.Theming.cacheBuster):e.MimeType._mimeTypeIcons["dir-group"]=e.imagePath("groupfolders","folder-group")}})}(OC,OCA),window.addEventListener("DOMContentLoaded",(function(){Promise.all([t.e(3),t.e(2)]).then(t.bind(null,32)).then((function(e){OCA.Sharing.ShareTabSections.registerSection((function(n,t){if("group"===t.mountType)return e.default}))}))}))},7:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(1);function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}
/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,(t=[{key:"fromProperties",value:function(e){this.mappingType=e[r.a.PROPERTY_ACL_MAPPING_TYPE],this.mappingId=e[r.a.PROPERTY_ACL_MAPPING_ID],this.mask=e[r.a.PROPERTY_ACL_MASK],this.permissions=e[r.a.PROPERTY_ACL_PERMISSIONS]}},{key:"fromValues",value:function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:31,a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.mappingType=e,this.mappingId=n,this.mappingDisplayName=t,this.mask=r,this.permissions=i,this.inherited=a}},{key:"getProperties",value:function(){var e={};return e[r.a.PROPERTY_ACL_MAPPING_TYPE]=this.mappingType,e[r.a.PROPERTY_ACL_MAPPING_ID]=this.mappingId,e[r.a.PROPERTY_ACL_MASK]=this.mask,e[r.a.PROPERTY_ACL_PERMISSIONS]=this.permissions,e}},{key:"getUniqueMappingIdentifier",value:function(){return this.mappingType+":"+this.mappingId}},{key:"clone",value:function(){var n=this,t=new e;return Object.getOwnPropertyNames(this).forEach((function(e){t[e]=n[e]})),t}}])&&i(n.prototype,t),a&&i(n,a),e}()}})}));
//# sourceMappingURL=files.js.map