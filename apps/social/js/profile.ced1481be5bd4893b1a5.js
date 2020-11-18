(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{397:function(t,n,e){"use strict";var o=e(36),i=e.n(o),a=e(37),r=e.n(a)()(i.a);r.push([t.i,"\n.user-profile[data-v-7faafb1f] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-between;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding-top: 20px;\n\talign-items: flex-end;\n\tmargin-bottom: 20px;\n}\nh2[data-v-7faafb1f] {\n\tmargin-bottom: 5px;\n}\n.user-profile--sections[data-v-7faafb1f] {\n\tdisplay: flex;\n\tmargin-bottom: 30px;\n}\n.user-profile--sections li[data-v-7faafb1f] {\n\tflex-grow: 1;\n}\n.user-profile--sections li a[data-v-7faafb1f] {\n\tpadding: 10px;\n\tpadding-left: 24px;\n\tdisplay: inline-block;\n\tbackground-position: 0 center;\n\theight: 40px;\n\topacity: .6;\n}\n.user-profile--sections li a.router-link-exact-active[data-v-7faafb1f],\n.user-profile--sections li a[data-v-7faafb1f]:focus{\n\topacity: 1;\n\tborder-bottom: 1px solid var(--color-main-text);\n}\n","",{version:3,sources:["webpack://src/components/ProfileInfo.vue"],names:[],mappings:";AA8DA;CACA,aAAA;CACA,eAAA;CACA,8BAAA;CACA,WAAA;CACA,kBAAA;CACA,iBAAA;CACA,qBAAA;CACA,mBAAA;AACA;AACA;CACA,kBAAA;AACA;AAEA;CACA,aAAA;CACA,mBAAA;AACA;AACA;CACA,YAAA;AACA;AACA;CACA,aAAA;CACA,kBAAA;CACA,qBAAA;CACA,6BAAA;CACA,YAAA;CACA,WAAA;AACA;AACA;;CAEA,UAAA;CACA,+CAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>\n  -\n  - @author Julius Härtl <jus@bitgrid.net>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<div v-if=\"profileAccount && accountInfo\" class=\"user-profile\">\n\t\t<div>\n\t\t\t<avatar v-if=\"accountInfo.local\" :user=\"localUid\" :disable-tooltip=\"true\"\n\t\t\t\t:size=\"128\" />\n\t\t\t<avatar v-else :url=\"avatarUrl\" :disable-tooltip=\"true\"\n\t\t\t\t:size=\"128\" />\n\t\t\t<h2>{{ displayName }}</h2>\n\t\t\t<p>@{{ accountInfo.account }}</p>\n\t\t\t<p v-if=\"accountInfo.website\">\n\t\t\t\tWebsite: <a :href=\"accountInfo.website.value\">\n\t\t\t\t\t{{ accountInfo.website.value }}\n\t\t\t\t</a>\n\t\t\t</p>\n\t\t\t<follow-button :account=\"accountInfo.account\" :uid=\"uid\" />\n\t\t\t<button v-if=\"serverData.public\" class=\"primary\" @click=\"followRemote\">\n\t\t\t\t{{ t('social', 'Follow') }}\n\t\t\t</button>\n\t\t</div>\n\t\t\x3c!-- TODO: we have no details, timeline and follower list for non-local accounts for now --\x3e\n\t\t<ul v-if=\"accountInfo.details && accountInfo.local\" class=\"user-profile--sections\">\n\t\t\t<li>\n\t\t\t\t<router-link :to=\"{ name: 'profile', params: { account: uid } }\" class=\"icon-category-monitoring\">\n\t\t\t\t\t{{ getCount('post') }} {{ t('social', 'posts') }}\n\t\t\t\t</router-link>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<router-link :to=\"{ name: 'profile.following', params: { account: uid } }\" class=\"icon-category-social\">\n\t\t\t\t\t{{ getCount('following') }}  {{ t('social', 'following') }}\n\t\t\t\t</router-link>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<router-link :to=\"{ name: 'profile.followers', params: { account: uid } }\" class=\"icon-category-social\">\n\t\t\t\t\t{{ getCount('followers') }}  {{ t('social', 'followers') }}\n\t\t\t\t</router-link>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</template>\n<style scoped>\n\t.user-profile {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: space-between;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tpadding-top: 20px;\n\t\talign-items: flex-end;\n\t\tmargin-bottom: 20px;\n\t}\n\th2 {\n\t\tmargin-bottom: 5px;\n\t}\n\n\t.user-profile--sections {\n\t\tdisplay: flex;\n\t\tmargin-bottom: 30px;\n\t}\n\t.user-profile--sections li {\n\t\tflex-grow: 1;\n\t}\n\t.user-profile--sections li a {\n\t\tpadding: 10px;\n\t\tpadding-left: 24px;\n\t\tdisplay: inline-block;\n\t\tbackground-position: 0 center;\n\t\theight: 40px;\n\t\topacity: .6;\n\t}\n\t.user-profile--sections li a.router-link-exact-active,\n\t.user-profile--sections li a:focus{\n\t\topacity: 1;\n\t\tborder-bottom: 1px solid var(--color-main-text);\n\t}\n</style>\n<script>\nimport Avatar from '@nextcloud/vue/dist/Components/Avatar'\nimport accountMixins from '../mixins/accountMixins'\nimport serverData from '../mixins/serverData'\nimport currentUser from '../mixins/currentUserMixin'\nimport follow from '../mixins/follow'\nimport FollowButton from './FollowButton.vue'\nimport { generateUrl } from '@nextcloud/router'\n\nexport default {\n\tname: 'ProfileInfo',\n\tcomponents: {\n\t\tFollowButton,\n\t\tAvatar\n\t},\n\tmixins: [\n\t\taccountMixins,\n\t\tcurrentUser,\n\t\tserverData,\n\t\tfollow\n\t],\n\tprops: {\n\t\tuid: {\n\t\t\ttype: String,\n\t\t\tdefault: ''\n\t\t}\n\t},\n\tdata: function() {\n\t\treturn {\n\t\t\tfollowingText: t('social', 'Following')\n\t\t}\n\t},\n\tcomputed: {\n\t\tlocalUid() {\n\t\t\t// Returns only the local part of a username\n\t\t\treturn (this.uid.indexOf('@') === -1) ? this.uid : this.uid.substr(0, this.uid.indexOf('@'))\n\t\t},\n\t\tdisplayName() {\n\t\t\tif (typeof this.accountInfo.name !== 'undefined' && this.accountInfo.name !== '') {\n\t\t\t\treturn this.accountInfo.name\n\t\t\t}\n\t\t\tif (typeof this.accountInfo.preferredUsername !== 'undefined' && this.accountInfo.preferredUsername !== '') {\n\t\t\t\treturn this.accountInfo.preferredUsername\n\t\t\t}\n\t\t\treturn this.profileAccount\n\t\t},\n\t\tgetCount() {\n\t\t\tlet account = this.accountInfo\n\t\t\treturn (field) => account.details.count ? account.details.count[field] : ''\n\t\t},\n\t\tavatarUrl() {\n\t\t\treturn generateUrl('/apps/social/api/v1/global/actor/avatar?id=' + this.accountInfo.id)\n\t\t}\n\t},\n\tmethods: {\n\t\tfollowRemote() {\n\t\t\twindow.open(generateUrl('/apps/social/api/v1/ostatus/followRemote/' + encodeURI(this.localUid)), 'followRemote', 'width=433,height=600toolbar=no,menubar=no,scrollbars=yes,resizable=yes')\n\t\t}\n\t}\n}\n\n<\/script>\n"],sourceRoot:""}]),n.a=r},399:function(n,e,o){"use strict";var i=o(128),a=o.n(i),r=o(129),s=o(58),c=o(57),l=o(370),u=o(371),f=o(1),p={name:"ProfileInfo",components:{FollowButton:u.a,Avatar:a.a},mixins:[r.a,c.a,s.a,l.a],props:{uid:{type:String,default:""}},data:function(){return{followingText:t("social","Following")}},computed:{localUid:function(){return-1===this.uid.indexOf("@")?this.uid:this.uid.substr(0,this.uid.indexOf("@"))},displayName:function(){return void 0!==this.accountInfo.name&&""!==this.accountInfo.name?this.accountInfo.name:void 0!==this.accountInfo.preferredUsername&&""!==this.accountInfo.preferredUsername?this.accountInfo.preferredUsername:this.profileAccount},getCount:function(){var t=this.accountInfo;return function(n){return t.details.count?t.details.count[n]:""}},avatarUrl:function(){return Object(f.generateUrl)("/apps/social/api/v1/global/actor/avatar?id="+this.accountInfo.id)}},methods:{followRemote:function(){window.open(Object(f.generateUrl)("/apps/social/api/v1/ostatus/followRemote/"+encodeURI(this.localUid)),"followRemote","width=433,height=600toolbar=no,menubar=no,scrollbars=yes,resizable=yes")}}},d=o(35),A=o.n(d),h=o(397),m={insert:"head",singleton:!1},v=(A()(h.a,m),h.a.locals,o(42)),w=Object(v.a)(p,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.profileAccount&&t.accountInfo?e("div",{staticClass:"user-profile"},[e("div",[t.accountInfo.local?e("avatar",{attrs:{user:t.localUid,"disable-tooltip":!0,size:128}}):e("avatar",{attrs:{url:t.avatarUrl,"disable-tooltip":!0,size:128}}),t._v(" "),e("h2",[t._v(t._s(t.displayName))]),t._v(" "),e("p",[t._v("@"+t._s(t.accountInfo.account))]),t._v(" "),t.accountInfo.website?e("p",[t._v("\n\t\t\tWebsite: "),e("a",{attrs:{href:t.accountInfo.website.value}},[t._v("\n\t\t\t\t"+t._s(t.accountInfo.website.value)+"\n\t\t\t")])]):t._e(),t._v(" "),e("follow-button",{attrs:{account:t.accountInfo.account,uid:t.uid}}),t._v(" "),t.serverData.public?e("button",{staticClass:"primary",on:{click:t.followRemote}},[t._v("\n\t\t\t"+t._s(t.t("social","Follow"))+"\n\t\t")]):t._e()],1),t._v(" "),t.accountInfo.details&&t.accountInfo.local?e("ul",{staticClass:"user-profile--sections"},[e("li",[e("router-link",{staticClass:"icon-category-monitoring",attrs:{to:{name:"profile",params:{account:t.uid}}}},[t._v("\n\t\t\t\t"+t._s(t.getCount("post"))+" "+t._s(t.t("social","posts"))+"\n\t\t\t")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"icon-category-social",attrs:{to:{name:"profile.following",params:{account:t.uid}}}},[t._v("\n\t\t\t\t"+t._s(t.getCount("following"))+"  "+t._s(t.t("social","following"))+"\n\t\t\t")])],1),t._v(" "),e("li",[e("router-link",{staticClass:"icon-category-social",attrs:{to:{name:"profile.followers",params:{account:t.uid}}}},[t._v("\n\t\t\t\t"+t._s(t.getCount("followers"))+"  "+t._s(t.t("social","followers"))+"\n\t\t\t")])],1)]):t._e()]):t._e()}),[],!1,null,"7faafb1f",null);e.a=w.exports},567:function(t,n,e){"use strict";var o=e(36),i=e.n(o),a=e(37),r=e.n(a)()(i.a);r.push([t.i,"\n.social__wrapper.icon-loading[data-v-67f482d9] {\n\tmargin-top: 50vh;\n}\n\n","",{version:3,sources:["webpack://src/views/Profile.vue"],names:[],mappings:";AAiCA;CACA,gBAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>\n  -\n  - @author Julius Härtl <jus@bitgrid.net>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<div :class=\"{'icon-loading': !accountLoaded}\" class=\"social__wrapper\">\n\t\t<profile-info v-if=\"accountLoaded && accountInfo\" :uid=\"uid\" />\n\t\t\x3c!-- TODO: we have no details, timeline and follower list for non-local accounts for now --\x3e\n\t\t<router-view v-if=\"accountLoaded && accountInfo && accountInfo.local\" name=\"details\" />\n\t\t<empty-content v-if=\"accountLoaded && !accountInfo\" :item=\"emptyContentData\" />\n\t</div>\n</template>\n\n<style scoped>\n\n\t.social__wrapper.icon-loading {\n\t\tmargin-top: 50vh;\n\t}\n\n</style>\n\n<script>\nimport ProfileInfo from './../components/ProfileInfo.vue'\nimport EmptyContent from '../components/EmptyContent.vue'\nimport accountMixins from '../mixins/accountMixins'\nimport serverData from '../mixins/serverData'\n\nexport default {\n\tname: 'Profile',\n\tcomponents: {\n\t\tEmptyContent,\n\t\tProfileInfo\n\t},\n\tmixins: [\n\t\taccountMixins,\n\t\tserverData\n\t],\n\tdata() {\n\t\treturn {\n\t\t\tstate: [],\n\t\t\tuid: null\n\t\t}\n\t},\n\tcomputed: {\n\t\ttimeline: function() {\n\t\t\treturn this.$store.getters.getTimeline\n\t\t},\n\t\temptyContentData() {\n\t\t\treturn {\n\t\t\t\timage: 'img/undraw/profile.svg',\n\t\t\t\ttitle: t('social', 'User not found'),\n\t\t\t\tdescription: t('social', 'Sorry, we could not find the account of {userId}', { userId: this.uid })\n\t\t\t}\n\t\t}\n\t},\n\t// Start fetching account information before mounting the component\n\tbeforeMount() {\n\t\tthis.uid = this.$route.params.account || this.serverData.account\n\n\t\t// Are we authenticated?\n\t\tlet fetchMethod = ''\n\t\tif (this.serverData.public) {\n\t\t\tfetchMethod = 'fetchPublicAccountInfo'\n\t\t} else {\n\t\t\tfetchMethod = 'fetchAccountInfo'\n\t\t}\n\n\t\t// We need to update this.uid because we may have asked info for an account whose domain part was a host-meta,\n\t\t// and the account returned by the backend always uses a non host-meta'ed domain for its ID\n\t\tthis.$store.dispatch(fetchMethod, this.profileAccount).then((response) => {\n\t\t\tthis.uid = response.account\n\t\t})\n\t}\n}\n<\/script>\n"],sourceRoot:""}]),n.a=r},568:function(t,n,e){"use strict";var o=e(36),i=e.n(o),a=e(37),r=e.n(a)()(i.a);r.push([t.i,"\n.social__followers[data-v-00bc3eb3] {\n\twidth: 100%;\n\tmax-width: 600px;\n\tmargin: 15px auto;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n.user-entry[data-v-00bc3eb3] {\n\twidth: 100%;\n\tpadding: 20px;\n\tmargin-bottom: 10px;\n}\n","",{version:3,sources:["webpack://src/views/ProfileFollowers.vue"],names:[],mappings:";AA6BA;CACA,WAAA;CACA,gBAAA;CACA,iBAAA;CACA,aAAA;CACA,eAAA;AACA;AACA;CACA,WAAA;CACA,aAAA;CACA,mBAAA;AACA",sourcesContent:["\x3c!--\n  - @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>\n  -\n  - @author Julius Härtl <jus@bitgrid.net>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<div class=\"social__followers\">\n\t\t<user-entry v-for=\"user in users\" :key=\"user.id\" :item=\"user\" />\n\t</div>\n</template>\n\n<style scoped>\n\t.social__followers {\n\t\twidth: 100%;\n\t\tmax-width: 600px;\n\t\tmargin: 15px auto;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\t.user-entry {\n\t\twidth: 100%;\n\t\tpadding: 20px;\n\t\tmargin-bottom: 10px;\n\t}\n</style>\n\n<script>\nimport UserEntry from '../components/UserEntry.vue'\nimport serverData from '../mixins/serverData'\n\nexport default {\n\tname: 'ProfileFollowers',\n\tcomponents: {\n\t\tUserEntry\n\t},\n\tmixins: [\n\t\tserverData\n\t],\n\tcomputed: {\n\t\tprofileAccount() {\n\t\t\treturn (this.$route.params.account.indexOf('@') === -1) ? this.$route.params.account + '@' + this.hostname : this.$route.params.account\n\t\t},\n\t\tusers: function() {\n\t\t\tif (this.$route.name === 'profile.followers') {\n\t\t\t\treturn this.$store.getters.getAccountFollowers(this.profileAccount)\n\t\t\t} else {\n\t\t\t\treturn this.$store.getters.getAccountFollowing(this.profileAccount)\n\t\t\t}\n\t\t}\n\t},\n\tbeforeMount() {\n\t\tif (this.$route.name === 'profile.followers') {\n\t\t\tthis.$store.dispatch('fetchAccountFollowers', this.profileAccount)\n\t\t} else {\n\t\t\tthis.$store.dispatch('fetchAccountFollowing', this.profileAccount)\n\t\t}\n\t}\n}\n<\/script>\n"],sourceRoot:""}]),n.a=r},571:function(n,e,o){"use strict";o.r(e);var i=o(399),a=o(534),r=o(129),s=o(58),c={name:"Profile",components:{EmptyContent:a.a,ProfileInfo:i.a},mixins:[r.a,s.a],data:function(){return{state:[],uid:null}},computed:{timeline:function(){return this.$store.getters.getTimeline},emptyContentData:function(){return{image:"img/undraw/profile.svg",title:t("social","User not found"),description:t("social","Sorry, we could not find the account of {userId}",{userId:this.uid})}}},beforeMount:function(){var t=this;this.uid=this.$route.params.account||this.serverData.account;var n="";n=this.serverData.public?"fetchPublicAccountInfo":"fetchAccountInfo",this.$store.dispatch(n,this.profileAccount).then((function(n){t.uid=n.account}))}},l=o(35),u=o.n(l),f=o(567),p={insert:"head",singleton:!1},d=(u()(f.a,p),f.a.locals,o(42)),A=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"social__wrapper",class:{"icon-loading":!t.accountLoaded}},[t.accountLoaded&&t.accountInfo?e("profile-info",{attrs:{uid:t.uid}}):t._e(),t._v(" "),t.accountLoaded&&t.accountInfo&&t.accountInfo.local?e("router-view",{attrs:{name:"details"}}):t._e(),t._v(" "),t.accountLoaded&&!t.accountInfo?e("empty-content",{attrs:{item:t.emptyContentData}}):t._e()],1)}),[],!1,null,"67f482d9",null);e.default=A.exports},572:function(t,n,e){"use strict";e.r(n);var o=e(372),i=e(58),a={name:"ProfileFollowers",components:{UserEntry:o.a},mixins:[i.a],computed:{profileAccount:function(){return-1===this.$route.params.account.indexOf("@")?this.$route.params.account+"@"+this.hostname:this.$route.params.account},users:function(){return"profile.followers"===this.$route.name?this.$store.getters.getAccountFollowers(this.profileAccount):this.$store.getters.getAccountFollowing(this.profileAccount)}},beforeMount:function(){"profile.followers"===this.$route.name?this.$store.dispatch("fetchAccountFollowers",this.profileAccount):this.$store.dispatch("fetchAccountFollowing",this.profileAccount)}},r=e(35),s=e.n(r),c=e(568),l={insert:"head",singleton:!1},u=(s()(c.a,l),c.a.locals,e(42)),f=Object(u.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"social__followers"},this._l(this.users,(function(t){return n("user-entry",{key:t.id,attrs:{item:t}})})),1)}),[],!1,null,"00bc3eb3",null);n.default=f.exports},573:function(t,n,e){"use strict";e.r(n);var o={name:"ProfileTimeline",components:{TimelineList:e(398).a},computed:{},beforeMount:function(){this.$store.dispatch("changeTimelineTypeAccount",this.$route.params.account)}},i=e(42),a=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("timeline-list")}),[],!1,null,"291fb9a6",null);n.default=a.exports}}]);
//# sourceMappingURL=profile.ced1481be5bd4893b1a5.js.map