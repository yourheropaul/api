(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{525:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("blockquote",[r("h1",{attrs:{id:"class-address"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-address","aria-hidden":"true"}},[e._v("#")]),e._v(" Class: Address")])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("name")])]),e._v(" Address")]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v("\nA wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.\nSince we are dealing with underlying publicKeys (or shorter encoded addresses),\nwe extend from Base with an AccountId/AccountIndex wrapper. Basically the Address\nis encoded as "),r("code",[e._v("[ <prefix-byte>, ...publicKey/...bytes ]")]),e._v(" as per spec")]),e._v(" "),r("h2",{attrs:{id:"hierarchy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy","aria-hidden":"true"}},[e._v("#")]),e._v(" Hierarchy")]),e._v(" "),r("ul",[r("li",[r("p",[r("router-link",{attrs:{to:"/types/classes/_codec_base_.base.html"}},[e._v("Base")]),e._v("‹"),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[e._v("AccountId")]),e._v(" | "),r("router-link",{attrs:{to:"/types/classes/_primitive_accountindex_.accountindex.html"}},[e._v("AccountIndex")])],1),e._v("›")],1),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Address")])])])])]),e._v(" "),r("h2",{attrs:{id:"implements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implements","aria-hidden":"true"}},[e._v("#")]),e._v(" Implements")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[e._v("Codec")])],1)]),e._v(" "),r("h3",{attrs:{id:"index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[e._v("#")]),e._v(" Index")]),e._v(" "),r("h4",{attrs:{id:"constructors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructors","aria-hidden":"true"}},[e._v("#")]),e._v(" Constructors")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#constructor"}},[e._v("constructor")])],1)]),e._v(" "),r("h4",{attrs:{id:"accessors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessors","aria-hidden":"true"}},[e._v("#")]),e._v(" Accessors")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#encodedlength"}},[e._v("encodedLength")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#isempty"}},[e._v("isEmpty")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#rawlength"}},[e._v("rawLength")])],1)]),e._v(" "),r("h4",{attrs:{id:"methods"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#eq"}},[e._v("eq")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tohex"}},[e._v("toHex")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tojson"}},[e._v("toJSON")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#torawtype"}},[e._v("toRawType")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tostring"}},[e._v("toString")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#tou8a"}},[e._v("toU8a")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html#static-decodeaddress"}},[e._v("decodeAddress")])],1)]),e._v(" "),r("h2",{attrs:{id:"constructors-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructors-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Constructors")]),e._v(" "),r("h3",{attrs:{id:"constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[e._v("#")]),e._v(" constructor")]),e._v(" "),r("p",[e._v("+ "),r("strong",[e._v("new Address")]),e._v("("),r("code",[e._v("value")]),e._v(": "),r("code",[e._v("AnyAddress")]),e._v("): "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html"}},[e._v("Address")])],1)]),e._v(" "),r("p",[r("em",[e._v("Overrides "),r("router-link",{attrs:{to:"/types/classes/_codec_base_.base.html"}},[e._v("Base")]),e._v("."),r("router-link",{attrs:{to:"/types/classes/_codec_base_.base.html#constructor"}},[e._v("constructor")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:27"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[e._v("Parameters:")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Default")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("value")])]),e._v(" "),r("td",[r("code",[e._v("AnyAddress")])]),e._v(" "),r("td",[e._v("new Uint8Array()")])])])]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_address_.address.html"}},[e._v("Address")])],1)]),e._v(" "),r("h2",{attrs:{id:"accessors-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessors-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Accessors")]),e._v(" "),r("h3",{attrs:{id:"encodedlength"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encodedlength","aria-hidden":"true"}},[e._v("#")]),e._v(" encodedLength")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("get encodedLength")]),e._v("(): "),r("em",[e._v("number")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L69",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:69"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" The length of the value when encoded as a Uint8Array")]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("number")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"isempty"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#isempty","aria-hidden":"true"}},[e._v("#")]),e._v(" isEmpty")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("get isEmpty")]),e._v("(): "),r("em",[e._v("boolean")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L83",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:83"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Checks if the value is an empty value")]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("boolean")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"rawlength"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rawlength","aria-hidden":"true"}},[e._v("#")]),e._v(" rawLength")]),e._v(" "),r("p",[e._v("• "),r("strong",[e._v("get rawLength")]),e._v("(): "),r("em",[e._v("number")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L90",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:90"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" The length of the raw value, either AccountIndex or AccountId")]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("number")])]),e._v(" "),r("h2",{attrs:{id:"methods-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#methods-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),r("h3",{attrs:{id:"eq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eq","aria-hidden":"true"}},[e._v("#")]),e._v(" eq")]),e._v(" "),r("p",[e._v("▸ "),r("strong",[e._v("eq")]),e._v("("),r("code",[e._v("other?")]),e._v(": any): "),r("em",[e._v("boolean")])]),e._v(" "),r("p",[r("em",[e._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[e._v("Codec")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L99",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:99"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Compares the value of the input to see if there is a match")]),e._v(" "),r("p",[r("strong",[e._v("Parameters:")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Type")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("other?")])]),e._v(" "),r("td",[e._v("any")])])])]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("boolean")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"tohex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tohex","aria-hidden":"true"}},[e._v("#")]),e._v(" toHex")]),e._v(" "),r("p",[e._v("▸ "),r("strong",[e._v("toHex")]),e._v("(): "),r("em",[e._v("string")])]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L106",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:106"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Returns a hex string representation of the value")]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("string")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"tojson"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tojson","aria-hidden":"true"}},[e._v("#")]),e._v(" toJSON")]),e._v(" "),r("p",[e._v("▸ "),r("strong",[e._v("toJSON")]),e._v("(): "),r("em",[e._v("string")])]),e._v(" "),r("p",[r("em",[e._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[e._v("Codec")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L113",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:113"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Converts the Object to JSON, typically used for RPC transfers")]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("string")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"torawtype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#torawtype","aria-hidden":"true"}},[e._v("#")]),e._v(" toRawType")]),e._v(" "),r("p",[e._v("▸ "),r("strong",[e._v("toRawType")]),e._v("(): "),r("em",[e._v("string")])]),e._v(" "),r("p",[r("em",[e._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[e._v("Codec")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L127",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:127"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Returns the base runtime type name for this instance")]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("string")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"tostring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tostring","aria-hidden":"true"}},[e._v("#")]),e._v(" toString")]),e._v(" "),r("p",[e._v("▸ "),r("strong",[e._v("toString")]),e._v("(): "),r("em",[e._v("string")])]),e._v(" "),r("p",[r("em",[e._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[e._v("Codec")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L120",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:120"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Returns the string representation of the value")]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[e._v("string")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"tou8a"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tou8a","aria-hidden":"true"}},[e._v("#")]),e._v(" toU8a")]),e._v(" "),r("p",[e._v("▸ "),r("strong",[e._v("toU8a")]),e._v("("),r("code",[e._v("isBare?")]),e._v(": undefined | false | true): "),r("em",[r("code",[e._v("Uint8Array")])])]),e._v(" "),r("p",[r("em",[e._v("Implementation of "),r("router-link",{attrs:{to:"/types/interfaces/_types_.codec.html"}},[e._v("Codec")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L135",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:135"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[r("code",[e._v("description")])]),e._v(" Encodes the value as a Uint8Array as per the SCALE specifications")]),e._v(" "),r("p",[r("strong",[e._v("Parameters:")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("isBare?")])]),e._v(" "),r("td",[e._v("undefined | false | true")]),e._v(" "),r("td",[e._v("true when the value has none of the type-specific prefixes (internal)")])])])]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[r("code",[e._v("Uint8Array")])])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"static-decodeaddress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-decodeaddress","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("code",[e._v("Static")]),e._v(" decodeAddress")]),e._v(" "),r("p",[e._v("▸ "),r("strong",[e._v("decodeAddress")]),e._v("("),r("code",[e._v("value")]),e._v(": "),r("code",[e._v("AnyAddress")]),e._v("): "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[e._v("AccountId")]),e._v(" | "),r("router-link",{attrs:{to:"/types/classes/_primitive_accountindex_.accountindex.html"}},[e._v("AccountIndex")])],1)]),e._v(" "),r("p",[r("em",[e._v("Defined in "),r("a",{attrs:{href:"https://github.com/polkadot-js/api/blob/efb38db/packages/types/src/primitive/Address.ts#L34",target:"_blank",rel:"noopener noreferrer"}},[e._v("primitive/Address.ts:34"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("strong",[e._v("Parameters:")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Type")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("value")])]),e._v(" "),r("td",[r("code",[e._v("AnyAddress")])])])])]),e._v(" "),r("p",[r("strong",[e._v("Returns:")]),e._v(" "),r("em",[r("router-link",{attrs:{to:"/types/classes/_primitive_accountid_.accountid.html"}},[e._v("AccountId")]),e._v(" | "),r("router-link",{attrs:{to:"/types/classes/_primitive_accountindex_.accountindex.html"}},[e._v("AccountIndex")])],1)])])},[],!1,null,null,null);t.default=a.exports}}]);