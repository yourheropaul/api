(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{535:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-interfaces","aria-hidden":"true"}},[t._v("#")]),t._v(" TypeScript interfaces")]),t._v(" "),a("p",[t._v("The API is written in TypeScript, and as such definitions for all actual exposed interfaces are available. In general terms, care has been taken to expose types via a "),a("code",[t._v("@polkadot/<package>/types")]),t._v(" interface, for instance the "),a("code",[t._v("ApiOptions")]),t._v(" type which is passed through on  the "),a("code",[t._v(".create")]),t._v(" interface is available under "),a("code",[t._v("@polkadot/api/types")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"rpc-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc-interfaces","aria-hidden":"true"}},[t._v("#")]),t._v(" RPC interfaces")]),t._v(" "),a("p",[t._v('Before getting to the "hard things", i.e. methods as decorated based on metadata interfaces, let\'s take a look at more "static" interfaces such as RPC. (Be aware though that these can be customized on a per-chain basis as well - for now this functionality is not reflected in the API itself).')]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Header "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/interfaces'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" firstHead "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeNewHeads")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastHead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current header:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("In the above example a couple of things are introduced - most of the chain definitions (the default types for both Polkadot & Substrate) can be imported as interfaces from the "),a("code",[t._v("@polkadot/types/interfaces")]),t._v(" endpoint. These are not classes (since they are "),a("a",{attrs:{href:"https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("generated from definitions"),a("OutboundLink")],1),t._v(") but rather a combination of TypeScript "),a("code",[t._v("interfaces")]),t._v(" (where structures are involved) and "),a("code",[t._v("type")]),t._v(", i.e. "),a("code",[t._v("type Balance = u128")]),t._v(".")]),t._v(" "),a("p",[t._v("In the subscription example, we explicitly define "),a("code",[t._v("lastHead: Header")]),t._v(", although the same definition  is missing for "),a("code",[t._v("firstHead")]),t._v(". However, in both these cases the definitions for the "),a("code",[t._v("api.rpc")]),t._v(" sections are such that TypeScript understands that "),a("code",[t._v("firstHead")]),t._v(" and "),a("code",[t._v("lastHead")]),t._v(" are of type "),a("code",[t._v("Header")]),t._v(". The "),a("code",[t._v(": Header")]),t._v(" here is rather for our own understanding (and could be needed based on your eslint/tslint config).")]),t._v(" "),a("p",[t._v("As indicated, most of the Substrate/Polkadot default types are available via "),a("code",[t._v("types/interfaces")]),t._v(". However, for primitives types where there is an actual implementation, these are made available via "),a("code",[t._v("@polkadot/types")]),t._v(" directly. For instance, "),a("code",[t._v("import { u32 } from '@polkadot/types")]),t._v(" is valid in this context.")]),t._v(" "),a("h2",{attrs:{id:"metadata-injected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-injected","aria-hidden":"true"}},[t._v("#")]),t._v(" Metadata injected")]),t._v(" "),a("p",[t._v("For any interface injected by metadata, the types are not available by default (although it may be in the future for default interfaces), but rather what the API understands is that all results need to comply to the "),a("code",[t._v("Codec")]),t._v(" interface. (The bas of all out types)")]),t._v(" "),a("p",[t._v("However, to make this sane from a developer perspective the injected methods are generic, effectively making the following possible -")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Balance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Index "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/interfaces'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nonce "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountNonce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" balance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balances"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freeBalance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Balance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADDR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("In both these case we can instruct the TypeScript compiler that the type we are expecting in "),a("code",[t._v("Index")]),t._v(" and "),a("code",[t._v("Balance")]),t._v(" respectively, not just pure "),a("code",[t._v("Codec")]),t._v(". This means that functions like "),a("code",[t._v(".toNumber()")]),t._v(" is available on both these types - as opposed to just the "),a("router-link",{attrs:{to:"/start/types.basics.html#everything-is-a-type"}},[t._v("general type defaults")]),t._v(" with "),a("code",[t._v(".toHex()")]),t._v(" and friends.")],1),t._v(" "),a("h2",{attrs:{id:"future-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-work","aria-hidden":"true"}},[t._v("#")]),t._v(" Future work")]),t._v(" "),a("p",[t._v("As of this writing, there are still some gray areas to type detection, specifically around the following interfaces -")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(".at")]),t._v(" & "),a("code",[t._v(".multi")]),t._v(" on "),a("code",[t._v("api.query")]),t._v(" does not (yet) have a "),a("code",[t._v("<TypeOverride>")]),t._v(" interface. This means "),a("code",[t._v("as <TypeOverride>")]),t._v(" casts are presently needed for these results")]),t._v(" "),a("li",[a("code",[t._v("api.queryMulti")]),t._v(" does not (yet) allow you to provide a hint to the types returned, this ties to the previous point")])]),t._v(" "),a("p",[t._v("In additiont to expanding the type covereage, we wish to make the actual generation script for the types from "),a("code",[t._v("@polkadot/types/interfaces")]),t._v(" available in 2 ways -")]),t._v(" "),a("ul",[a("li",[t._v("allowing you to point to a folder of types and auto-generate the TypeScript typings from those. (Which is akin to what we do internally). This would allow a reduction in type classes explicitly written and injected.")]),t._v(" "),a("li",[t._v("once the metadata itself supports full type definitions, the script can be used to generate interface definitions specifically tailored for a chain")])]),t._v(" "),a("h2",{attrs:{id:"and-it-is-a-wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-it-is-a-wrap","aria-hidden":"true"}},[t._v("#")]),t._v(" And it is a wrap")]),t._v(" "),a("p",[t._v("This brings us to the end of our overview and jump through the API. While the documentation is still very much and ever evolving item, we can encourage you to try out what you have learned with some "),a("a",{attrs:{href:"../examples"}},[t._v("examples")]),t._v(". As we "),a("router-link",{attrs:{to:"/start/#help-us-help-others"}},[t._v("indicated right at the start of this journey")]),t._v(", if there are areas for improvement, let us know.")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);