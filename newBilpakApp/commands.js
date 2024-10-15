/*! For license information please see main.200987d8.js.LICENSE.txt */
( () => {
    var e = {
        2730: (e, n, t) => {
            "use strict";
            var r = t(5043)
              , a = t(8853);
            function i(e) {
                for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
                    n += "&args[]=" + encodeURIComponent(arguments[t]);
                return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var o = new Set
              , l = {};
            function s(e, n) {
                u(e, n),
                u(e + "Capture", n)
            }
            function u(e, n) {
                for (l[e] = n,
                e = 0; e < n.length; e++)
                    o.add(n[e])
            }
            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , d = Object.prototype.hasOwnProperty
              , f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = {}
              , h = {};
            function m(e, n, t, r, a, i, o) {
                this.acceptsBooleans = 2 === n || 3 === n || 4 === n,
                this.attributeName = r,
                this.attributeNamespace = a,
                this.mustUseProperty = t,
                this.propertyName = e,
                this.type = n,
                this.sanitizeURL = i,
                this.removeEmptyString = o
            }
            var g = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                g[e] = new m(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var n = e[0];
                g[n] = new m(n,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                g[e] = new m(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                g[e] = new m(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                g[e] = new m(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                g[e] = new m(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                g[e] = new m(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                g[e] = new m(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                g[e] = new m(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var v = /[\-:]([a-z])/g;
            function y(e) {
                return e[1].toUpperCase()
            }
            function b(e, n, t, r) {
                var a = g.hasOwnProperty(n) ? g[n] : null;
                (null !== a ? 0 !== a.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (function(e, n, t, r) {
                    if (null === n || "undefined" === typeof n || function(e, n, t, r) {
                        if (null !== t && 0 === t.type)
                            return !1;
                        switch (typeof n) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, n, t, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== t)
                        switch (t.type) {
                        case 3:
                            return !n;
                        case 4:
                            return !1 === n;
                        case 5:
                            return isNaN(n);
                        case 6:
                            return isNaN(n) || 1 > n
                        }
                    return !1
                }(n, t, a, r) && (t = null),
                r || null === a ? function(e) {
                    return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0,
                    !1))
                }(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = null === t ? 3 !== a.type && "" : t : (n = a.attributeName,
                r = a.attributeNamespace,
                null === t ? e.removeAttribute(n) : (t = 3 === (a = a.type) || 4 === a && !0 === t ? "" : "" + t,
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var n = e.replace(v, y);
                g[n] = new m(n,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var n = e.replace(v, y);
                g[n] = new m(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var n = e.replace(v, y);
                g[n] = new m(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                g[e] = new m(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            g.xlinkHref = new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                g[e] = new m(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , x = Symbol.for("react.element")
              , k = Symbol.for("react.portal")
              , E = Symbol.for("react.fragment")
              , S = Symbol.for("react.strict_mode")
              , N = Symbol.for("react.profiler")
              , C = Symbol.for("react.provider")
              , j = Symbol.for("react.context")
              , I = Symbol.for("react.forward_ref")
              , T = Symbol.for("react.suspense")
              , D = Symbol.for("react.suspense_list")
              , R = Symbol.for("react.memo")
              , A = Symbol.for("react.lazy");
            Symbol.for("react.scope"),
            Symbol.for("react.debug_trace_mode");
            var _ = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
            var P = Symbol.iterator;
            function M(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = P && e[P] || e["@@iterator"]) ? e : null
            }
            var L, O = Object.assign;
            function U(e) {
                if (void 0 === L)
                    try {
                        throw Error()
                    } catch (t) {
                        var n = t.stack.trim().match(/\n( *(at )?)/);
                        L = n && n[1] || ""
                    }
                return "\n" + L + e
            }
            var z = !1;
            function F(e, n) {
                if (!e || z)
                    return "";
                z = !0;
                var t = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (n)
                        if (n = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(n.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(n, [])
                            } catch (u) {
                                var r = u
                            }
                            Reflect.construct(e, [], n)
                        } else {
                            try {
                                n.call()
                            } catch (u) {
                                r = u
                            }
                            e.call(n.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (u) {
                            r = u
                        }
                        e()
                    }
                } catch (u) {
                    if (u && r && "string" === typeof u.stack) {
                        for (var a = u.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l]; )
                            l--;
                        for (; 1 <= o && 0 <= l; o--,
                        l--)
                            if (a[o] !== i[l]) {
                                if (1 !== o || 1 !== l)
                                    do {
                                        if (o--,
                                        0 > --l || a[o] !== i[l]) {
                                            var s = "\n" + a[o].replace(" at new ", " at ");
                                            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                            s
                                        }
                                    } while (1 <= o && 0 <= l);
                                break
                            }
                    }
                } finally {
                    z = !1,
                    Error.prepareStackTrace = t
                }
                return (e = e ? e.displayName || e.name : "") ? U(e) : ""
            }
            function H(e) {
                switch (e.tag) {
                case 5:
                    return U(e.type);
                case 16:
                    return U("Lazy");
                case 13:
                    return U("Suspense");
                case 19:
                    return U("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = F(e.type, !1);
                case 11:
                    return e = F(e.type.render, !1);
                case 1:
                    return e = F(e.type, !0);
                default:
                    return ""
                }
            }
            function q(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case E:
                    return "Fragment";
                case k:
                    return "Portal";
                case N:
                    return "Profiler";
                case S:
                    return "StrictMode";
                case T:
                    return "Suspense";
                case D:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case j:
                        return (e.displayName || "Context") + ".Consumer";
                    case C:
                        return (e._context.displayName || "Context") + ".Provider";
                    case I:
                        var n = e.render;
                        return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                    case R:
                        return null !== (n = e.displayName || null) ? n : q(e.type) || "Memo";
                    case A:
                        n = e._payload,
                        e = e._init;
                        try {
                            return q(e(n))
                        } catch (t) {}
                    }
                return null
            }
            function W(e) {
                var n = e.type;
                switch (e.tag) {
                case 24:
                    return "Cache";
                case 9:
                    return (n.displayName || "Context") + ".Consumer";
                case 10:
                    return (n._context.displayName || "Context") + ".Provider";
                case 18:
                    return "DehydratedFragment";
                case 11:
                    return e = (e = n.render).displayName || e.name || "",
                    n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                case 7:
                    return "Fragment";
                case 5:
                    return n;
                case 4:
                    return "Portal";
                case 3:
                    return "Root";
                case 6:
                    return "Text";
                case 16:
                    return q(n);
                case 8:
                    return n === S ? "StrictMode" : "Mode";
                case 22:
                    return "Offscreen";
                case 12:
                    return "Profiler";
                case 21:
                    return "Scope";
                case 13:
                    return "Suspense";
                case 19:
                    return "SuspenseList";
                case 25:
                    return "TracingMarker";
                case 1:
                case 0:
                case 17:
                case 2:
                case 14:
                case 15:
                    if ("function" === typeof n)
                        return n.displayName || n.name || null;
                    if ("string" === typeof n)
                        return n
                }
                return null
            }
            function X(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                case "object":
                    return e;
                default:
                    return ""
                }
            }
            function G(e) {
                var n = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n)
            }
            function V(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var n = G(e) ? "checked" : "value"
                      , t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n)
                      , r = "" + e[n];
                    if (!e.hasOwnProperty(n) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
                        var a = t.get
                          , i = t.set;
                        return Object.defineProperty(e, n, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                i.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, n, {
                            enumerable: t.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[n]
                            }
                        }
                    }
                }(e))
            }
            function B(e) {
                if (!e)
                    return !1;
                var n = e._valueTracker;
                if (!n)
                    return !0;
                var t = n.getValue()
                  , r = "";
                return e && (r = G(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== t && (n.setValue(e),
                !0)
            }
            function $(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (n) {
                    return e.body
                }
            }
            function Q(e, n) {
                var t = n.checked;
                return O({}, n, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != t ? t : e._wrapperState.initialChecked
                })
            }
            function Y(e, n) {
                var t = null == n.defaultValue ? "" : n.defaultValue
                  , r = null != n.checked ? n.checked : n.defaultChecked;
                t = X(null != n.value ? n.value : t),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: t,
                    controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
                }
            }
            function K(e, n) {
                null != (n = n.checked) && b(e, "checked", n, !1)
            }
            function J(e, n) {
                K(e, n);
                var t = X(n.value)
                  , r = n.type;
                if (null != t)
                    "number" === r ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                n.hasOwnProperty("value") ? ee(e, n.type, t) : n.hasOwnProperty("defaultValue") && ee(e, n.type, X(n.defaultValue)),
                null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked)
            }
            function Z(e, n, t) {
                if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
                    var r = n.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== n.value && null !== n.value))
                        return;
                    n = "" + e._wrapperState.initialValue,
                    t || n === e.value || (e.value = n),
                    e.defaultValue = n
                }
                "" !== (t = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== t && (e.name = t)
            }
            function ee(e, n, t) {
                "number" === n && $(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
            }
            var ne = Array.isArray;
            function te(e, n, t, r) {
                if (e = e.options,
                n) {
                    n = {};
                    for (var a = 0; a < t.length; a++)
                        n["$" + t[a]] = !0;
                    for (t = 0; t < e.length; t++)
                        a = n.hasOwnProperty("$" + e[t].value),
                        e[t].selected !== a && (e[t].selected = a),
                        a && r && (e[t].defaultSelected = !0)
                } else {
                    for (t = "" + X(t),
                    n = null,
                    a = 0; a < e.length; a++) {
                        if (e[a].value === t)
                            return e[a].selected = !0,
                            void (r && (e[a].defaultSelected = !0));
                        null !== n || e[a].disabled || (n = e[a])
                    }
                    null !== n && (n.selected = !0)
                }
            }
            function re(e, n) {
                if (null != n.dangerouslySetInnerHTML)
                    throw Error(i(91));
                return O({}, n, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function ae(e, n) {
                var t = n.value;
                if (null == t) {
                    if (t = n.children,
                    n = n.defaultValue,
                    null != t) {
                        if (null != n)
                            throw Error(i(92));
                        if (ne(t)) {
                            if (1 < t.length)
                                throw Error(i(93));
                            t = t[0]
                        }
                        n = t
                    }
                    null == n && (n = ""),
                    t = n
                }
                e._wrapperState = {
                    initialValue: X(t)
                }
            }
            function ie(e, n) {
                var t = X(n.value)
                  , r = X(n.defaultValue);
                null != t && ((t = "" + t) !== e.value && (e.value = t),
                null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
                null != r && (e.defaultValue = "" + r)
            }
            function oe(e) {
                var n = e.textContent;
                n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n)
            }
            function le(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function se(e, n) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? le(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e
            }
            var ue, ce, de = (ce = function(e, n) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML"in e)
                    e.innerHTML = n;
                else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
                    n = ue.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; n.firstChild; )
                        e.appendChild(n.firstChild)
                }
            }
            ,
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, t, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, n)
                }
                ))
            }
            : ce);
            function fe(e, n) {
                if (n) {
                    var t = e.firstChild;
                    if (t && t === e.lastChild && 3 === t.nodeType)
                        return void (t.nodeValue = n)
                }
                e.textContent = n
            }
            var pe = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , he = ["Webkit", "ms", "Moz", "O"];
            function me(e, n, t) {
                return null == n || "boolean" === typeof n || "" === n ? "" : t || "number" !== typeof n || 0 === n || pe.hasOwnProperty(e) && pe[e] ? ("" + n).trim() : n + "px"
            }
            function ge(e, n) {
                for (var t in e = e.style,
                n)
                    if (n.hasOwnProperty(t)) {
                        var r = 0 === t.indexOf("--")
                          , a = me(t, n[t], r);
                        "float" === t && (t = "cssFloat"),
                        r ? e.setProperty(t, a) : e[t] = a
                    }
            }
            Object.keys(pe).forEach((function(e) {
                he.forEach((function(n) {
                    n = n + e.charAt(0).toUpperCase() + e.substring(1),
                    pe[n] = pe[e]
                }
                ))
            }
            ));
            var ve = O({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ye(e, n) {
                if (n) {
                    if (ve[e] && (null != n.children || null != n.dangerouslySetInnerHTML))
                        throw Error(i(137, e));
                    if (null != n.dangerouslySetInnerHTML) {
                        if (null != n.children)
                            throw Error(i(60));
                        if ("object" !== typeof n.dangerouslySetInnerHTML || !("__html"in n.dangerouslySetInnerHTML))
                            throw Error(i(61))
                    }
                    if (null != n.style && "object" !== typeof n.style)
                        throw Error(i(62))
                }
            }
            function be(e, n) {
                if (-1 === e.indexOf("-"))
                    return "string" === typeof n.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            var we = null;
            function xe(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var ke = null
              , Ee = null
              , Se = null;
            function Ne(e) {
                if (e = ba(e)) {
                    if ("function" !== typeof ke)
                        throw Error(i(280));
                    var n = e.stateNode;
                    n && (n = xa(n),
                    ke(e.stateNode, e.type, n))
                }
            }
            function Ce(e) {
                Ee ? Se ? Se.push(e) : Se = [e] : Ee = e
            }
            function je() {
                if (Ee) {
                    var e = Ee
                      , n = Se;
                    if (Se = Ee = null,
                    Ne(e),
                    n)
                        for (e = 0; e < n.length; e++)
                            Ne(n[e])
                }
            }
            function Ie(e, n) {
                return e(n)
            }
            function Te() {}
            var De = !1;
            function Re(e, n, t) {
                if (De)
                    return e(n, t);
                De = !0;
                try {
                    return Ie(e, n, t)
                } finally {
                    De = !1,
                    (null !== Ee || null !== Se) && (Te(),
                    je())
                }
            }
            function Ae(e, n) {
                var t = e.stateNode;
                if (null === t)
                    return null;
                var r = xa(t);
                if (null === r)
                    return null;
                t = r[n];
                e: switch (n) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (t && "function" !== typeof t)
                    throw Error(i(231, n, typeof t));
                return t
            }
            var _e = !1;
            if (c)
                try {
                    var Pe = {};
                    Object.defineProperty(Pe, "passive", {
                        get: function() {
                            _e = !0
                        }
                    }),
                    window.addEventListener("test", Pe, Pe),
                    window.removeEventListener("test", Pe, Pe)
                } catch (ce) {
                    _e = !1
                }
            function Me(e, n, t, r, a, i, o, l, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    n.apply(t, u)
                } catch (c) {
                    this.onError(c)
                }
            }
            var Le = !1
              , Oe = null
              , Ue = !1
              , ze = null
              , Fe = {
                onError: function(e) {
                    Le = !0,
                    Oe = e
                }
            };
            function He(e, n, t, r, a, i, o, l, s) {
                Le = !1,
                Oe = null,
                Me.apply(Fe, arguments)
            }
            function qe(e) {
                var n = e
                  , t = e;
                if (e.alternate)
                    for (; n.return; )
                        n = n.return;
                else {
                    e = n;
                    do {
                        0 !== (4098 & (n = e).flags) && (t = n.return),
                        e = n.return
                    } while (e)
                }
                return 3 === n.tag ? t : null
            }
            function We(e) {
                if (13 === e.tag) {
                    var n = e.memoizedState;
                    if (null === n && (null !== (e = e.alternate) && (n = e.memoizedState)),
                    null !== n)
                        return n.dehydrated
                }
                return null
            }
            function Xe(e) {
                if (qe(e) !== e)
                    throw Error(i(188))
            }
            function Ge(e) {
                return null !== (e = function(e) {
                    var n = e.alternate;
                    if (!n) {
                        if (null === (n = qe(e)))
                            throw Error(i(188));
                        return n !== e ? null : e
                    }
                    for (var t = e, r = n; ; ) {
                        var a = t.return;
                        if (null === a)
                            break;
                        var o = a.alternate;
                        if (null === o) {
                            if (null !== (r = a.return)) {
                                t = r;
                                continue
                            }
                            break
                        }
                        if (a.child === o.child) {
                            for (o = a.child; o; ) {
                                if (o === t)
                                    return Xe(a),
                                    e;
                                if (o === r)
                                    return Xe(a),
                                    n;
                                o = o.sibling
                            }
                            throw Error(i(188))
                        }
                        if (t.return !== r.return)
                            t = a,
                            r = o;
                        else {
                            for (var l = !1, s = a.child; s; ) {
                                if (s === t) {
                                    l = !0,
                                    t = a,
                                    r = o;
                                    break
                                }
                                if (s === r) {
                                    l = !0,
                                    r = a,
                                    t = o;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!l) {
                                for (s = o.child; s; ) {
                                    if (s === t) {
                                        l = !0,
                                        t = o,
                                        r = a;
                                        break
                                    }
                                    if (s === r) {
                                        l = !0,
                                        r = o,
                                        t = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!l)
                                    throw Error(i(189))
                            }
                        }
                        if (t.alternate !== r)
                            throw Error(i(190))
                    }
                    if (3 !== t.tag)
                        throw Error(i(188));
                    return t.stateNode.current === t ? e : n
                }(e)) ? Ve(e) : null
            }
            function Ve(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e;
                for (e = e.child; null !== e; ) {
                    var n = Ve(e);
                    if (null !== n)
                        return n;
                    e = e.sibling
                }
                return null
            }
            var Be = a.unstable_scheduleCallback
              , $e = a.unstable_cancelCallback
              , Qe = a.unstable_shouldYield
              , Ye = a.unstable_requestPaint
              , Ke = a.unstable_now
              , Je = a.unstable_getCurrentPriorityLevel
              , Ze = a.unstable_ImmediatePriority
              , en = a.unstable_UserBlockingPriority
              , nn = a.unstable_NormalPriority
              , tn = a.unstable_LowPriority
              , rn = a.unstable_IdlePriority
              , an = null
              , on = null;
            var ln = Math.clz32 ? Math.clz32 : function(e) {
                return e >>>= 0,
                0 === e ? 32 : 31 - (sn(e) / un | 0) | 0
            }
              , sn = Math.log
              , un = Math.LN2;
            var cn = 64
              , dn = 4194304;
            function fn(e) {
                switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return 4194240 & e;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    return 130023424 & e;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 1073741824;
                default:
                    return e
                }
            }
            function pn(e, n) {
                var t = e.pendingLanes;
                if (0 === t)
                    return 0;
                var r = 0
                  , a = e.suspendedLanes
                  , i = e.pingedLanes
                  , o = 268435455 & t;
                if (0 !== o) {
                    var l = o & ~a;
                    0 !== l ? r = fn(l) : 0 !== (i &= o) && (r = fn(i))
                } else
                    0 !== (o = t & ~a) ? r = fn(o) : 0 !== i && (r = fn(i));
                if (0 === r)
                    return 0;
                if (0 !== n && n !== r && 0 === (n & a) && ((a = r & -r) >= (i = n & -n) || 16 === a && 0 !== (4194240 & i)))
                    return n;
                if (0 !== (4 & r) && (r |= 16 & t),
                0 !== (n = e.entangledLanes))
                    for (e = e.entanglements,
                    n &= r; 0 < n; )
                        a = 1 << (t = 31 - ln(n)),
                        r |= e[t],
                        n &= ~a;
                return r
            }
            function hn(e, n) {
                switch (e) {
                case 1:
                case 2:
                case 4:
                    return n + 250;
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return n + 5e3;
                default:
                    return -1
                }
            }
            function mn(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function gn() {
                var e = cn;
                return 0 === (4194240 & (cn <<= 1)) && (cn = 64),
                e
            }
            function vn(e) {
                for (var n = [], t = 0; 31 > t; t++)
                    n.push(e);
                return n
            }
            function yn(e, n, t) {
                e.pendingLanes |= n,
                536870912 !== n && (e.suspendedLanes = 0,
                e.pingedLanes = 0),
                (e = e.eventTimes)[n = 31 - ln(n)] = t
            }
            function bn(e, n) {
                var t = e.entangledLanes |= n;
                for (e = e.entanglements; t; ) {
                    var r = 31 - ln(t)
                      , a = 1 << r;
                    a & n | e[r] & n && (e[r] |= n),
                    t &= ~a
                }
            }
            var wn = 0;
            function xn(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var kn, En, Sn, Nn, Cn, jn = !1, In = [], Tn = null, Dn = null, Rn = null, An = new Map, _n = new Map, Pn = [], Mn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Ln(e, n) {
                switch (e) {
                case "focusin":
                case "focusout":
                    Tn = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Dn = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Rn = null;
                    break;
                case "pointerover":
                case "pointerout":
                    An.delete(n.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    _n.delete(n.pointerId)
                }
            }
            function On(e, n, t, r, a, i) {
                return null === e || e.nativeEvent !== i ? (e = {
                    blockedOn: n,
                    domEventName: t,
                    eventSystemFlags: r,
                    nativeEvent: i,
                    targetContainers: [a]
                },
                null !== n && (null !== (n = ba(n)) && En(n)),
                e) : (e.eventSystemFlags |= r,
                n = e.targetContainers,
                null !== a && -1 === n.indexOf(a) && n.push(a),
                e)
            }
            function Un(e) {
                var n = ya(e.target);
                if (null !== n) {
                    var t = qe(n);
                    if (null !== t)
                        if (13 === (n = t.tag)) {
                            if (null !== (n = We(t)))
                                return e.blockedOn = n,
                                void Cn(e.priority, (function() {
                                    Sn(t)
                                }
                                ))
                        } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
                            return void (e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function zn(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var n = e.targetContainers; 0 < n.length; ) {
                    var t = Yn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                    if (null !== t)
                        return null !== (n = ba(t)) && En(n),
                        e.blockedOn = t,
                        !1;
                    var r = new (t = e.nativeEvent).constructor(t.type,t);
                    we = r,
                    t.target.dispatchEvent(r),
                    we = null,
                    n.shift()
                }
                return !0
            }
            function Fn(e, n, t) {
                zn(e) && t.delete(n)
            }
            function Hn() {
                jn = !1,
                null !== Tn && zn(Tn) && (Tn = null),
                null !== Dn && zn(Dn) && (Dn = null),
                null !== Rn && zn(Rn) && (Rn = null),
                An.forEach(Fn),
                _n.forEach(Fn)
            }
            function qn(e, n) {
                e.blockedOn === n && (e.blockedOn = null,
                jn || (jn = !0,
                a.unstable_scheduleCallback(a.unstable_NormalPriority, Hn)))
            }
            function Wn(e) {
                function n(n) {
                    return qn(n, e)
                }
                if (0 < In.length) {
                    qn(In[0], e);
                    for (var t = 1; t < In.length; t++) {
                        var r = In[t];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== Tn && qn(Tn, e),
                null !== Dn && qn(Dn, e),
                null !== Rn && qn(Rn, e),
                An.forEach(n),
                _n.forEach(n),
                t = 0; t < Pn.length; t++)
                    (r = Pn[t]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Pn.length && null === (t = Pn[0]).blockedOn; )
                    Un(t),
                    null === t.blockedOn && Pn.shift()
            }
            var Xn = w.ReactCurrentBatchConfig
              , Gn = !0;
            function Vn(e, n, t, r) {
                var a = wn
                  , i = Xn.transition;
                Xn.transition = null;
                try {
                    wn = 1,
                    $n(e, n, t, r)
                } finally {
                    wn = a,
                    Xn.transition = i
                }
            }
            function Bn(e, n, t, r) {
                var a = wn
                  , i = Xn.transition;
                Xn.transition = null;
                try {
                    wn = 4,
                    $n(e, n, t, r)
                } finally {
                    wn = a,
                    Xn.transition = i
                }
            }
            function $n(e, n, t, r) {
                if (Gn) {
                    var a = Yn(e, n, t, r);
                    if (null === a)
                        Xr(e, n, r, Qn, t),
                        Ln(e, r);
                    else if (function(e, n, t, r, a) {
                        switch (n) {
                        case "focusin":
                            return Tn = On(Tn, e, n, t, r, a),
                            !0;
                        case "dragenter":
                            return Dn = On(Dn, e, n, t, r, a),
                            !0;
                        case "mouseover":
                            return Rn = On(Rn, e, n, t, r, a),
                            !0;
                        case "pointerover":
                            var i = a.pointerId;
                            return An.set(i, On(An.get(i) || null, e, n, t, r, a)),
                            !0;
                        case "gotpointercapture":
                            return i = a.pointerId,
                            _n.set(i, On(_n.get(i) || null, e, n, t, r, a)),
                            !0
                        }
                        return !1
                    }(a, e, n, t, r))
                        r.stopPropagation();
                    else if (Ln(e, r),
                    4 & n && -1 < Mn.indexOf(e)) {
                        for (; null !== a; ) {
                            var i = ba(a);
                            if (null !== i && kn(i),
                            null === (i = Yn(e, n, t, r)) && Xr(e, n, r, Qn, t),
                            i === a)
                                break;
                            a = i
                        }
                        null !== a && r.stopPropagation()
                    } else
                        Xr(e, n, r, null, t)
                }
            }
            var Qn = null;
            function Yn(e, n, t, r) {
                if (Qn = null,
                null !== (e = ya(e = xe(r))))
                    if (null === (n = qe(e)))
                        e = null;
                    else if (13 === (t = n.tag)) {
                        if (null !== (e = We(n)))
                            return e;
                        e = null
                    } else if (3 === t) {
                        if (n.stateNode.current.memoizedState.isDehydrated)
                            return 3 === n.tag ? n.stateNode.containerInfo : null;
                        e = null
                    } else
                        n !== e && (e = null);
                return Qn = e,
                null
            }
            function Kn(e) {
                switch (e) {
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 1;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "toggle":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 4;
                case "message":
                    switch (Je()) {
                    case Ze:
                        return 1;
                    case en:
                        return 4;
                    case nn:
                    case tn:
                        return 16;
                    case rn:
                        return 536870912;
                    default:
                        return 16
                    }
                default:
                    return 16
                }
            }
            var Jn = null
              , Zn = null
              , et = null;
            function nt() {
                if (et)
                    return et;
                var e, n, t = Zn, r = t.length, a = "value"in Jn ? Jn.value : Jn.textContent, i = a.length;
                for (e = 0; e < r && t[e] === a[e]; e++)
                    ;
                var o = r - e;
                for (n = 1; n <= o && t[r - n] === a[i - n]; n++)
                    ;
                return et = a.slice(e, 1 < n ? 1 - n : void 0)
            }
            function tt(e) {
                var n = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : e = n,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function rt() {
                return !0
            }
            function at() {
                return !1
            }
            function it(e) {
                function n(n, t, r, a, i) {
                    for (var o in this._reactName = n,
                    this._targetInst = r,
                    this.type = t,
                    this.nativeEvent = a,
                    this.target = i,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(o) && (n = e[o],
                        this[o] = n ? n(a) : a[o]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? rt : at,
                    this.isPropagationStopped = at,
                    this
                }
                return O(n.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = rt)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = rt)
                    },
                    persist: function() {},
                    isPersistent: rt
                }),
                n
            }
            var ot, lt, st, ut = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, ct = it(ut), dt = O({}, ut, {
                view: 0,
                detail: 0
            }), ft = it(dt), pt = O({}, dt, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Nt,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== st && (st && "mousemove" === e.type ? (ot = e.screenX - st.screenX,
                    lt = e.screenY - st.screenY) : lt = ot = 0,
                    st = e),
                    ot)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : lt
                }
            }), ht = it(pt), mt = it(O({}, pt, {
                dataTransfer: 0
            })), gt = it(O({}, dt, {
                relatedTarget: 0
            })), vt = it(O({}, ut, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), yt = O({}, ut, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), bt = it(yt), wt = it(O({}, ut, {
                data: 0
            })), xt = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, kt = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Et = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function St(e) {
                var n = this.nativeEvent;
                return n.getModifierState ? n.getModifierState(e) : !!(e = Et[e]) && !!n[e]
            }
            function Nt() {
                return St
            }
            var Ct = O({}, dt, {
                key: function(e) {
                    if (e.key) {
                        var n = xt[e.key] || e.key;
                        if ("Unidentified" !== n)
                            return n
                    }
                    return "keypress" === e.type ? 13 === (e = tt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kt[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Nt,
                charCode: function(e) {
                    return "keypress" === e.type ? tt(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? tt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , jt = it(Ct)
              , It = it(O({}, pt, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , Tt = it(O({}, dt, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Nt
            }))
              , Dt = it(O({}, ut, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , Rt = O({}, pt, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , At = it(Rt)
              , _t = [9, 13, 27, 32]
              , Pt = c && "CompositionEvent"in window
              , Mt = null;
            c && "documentMode"in document && (Mt = document.documentMode);
            var Lt = c && "TextEvent"in window && !Mt
              , Ot = c && (!Pt || Mt && 8 < Mt && 11 >= Mt)
              , Ut = String.fromCharCode(32)
              , zt = !1;
            function Ft(e, n) {
                switch (e) {
                case "keyup":
                    return -1 !== _t.indexOf(n.keyCode);
                case "keydown":
                    return 229 !== n.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Ht(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var qt = !1;
            var Wt = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Xt(e) {
                var n = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === n ? !!Wt[e.type] : "textarea" === n
            }
            function Gt(e, n, t, r) {
                Ce(r),
                0 < (n = Vr(n, "onChange")).length && (t = new ct("onChange","change",null,t,r),
                e.push({
                    event: t,
                    listeners: n
                }))
            }
            var Vt = null
              , Bt = null;
            function $t(e) {
                Ur(e, 0)
            }
            function Qt(e) {
                if (B(wa(e)))
                    return e
            }
            function Yt(e, n) {
                if ("change" === e)
                    return n
            }
            var Kt = !1;
            if (c) {
                var Jt;
                if (c) {
                    var Zt = "oninput"in document;
                    if (!Zt) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"),
                        Zt = "function" === typeof er.oninput
                    }
                    Jt = Zt
                } else
                    Jt = !1;
                Kt = Jt && (!document.documentMode || 9 < document.documentMode)
            }
            function nr() {
                Vt && (Vt.detachEvent("onpropertychange", tr),
                Bt = Vt = null)
            }
            function tr(e) {
                if ("value" === e.propertyName && Qt(Bt)) {
                    var n = [];
                    Gt(n, Bt, e, xe(e)),
                    Re($t, n)
                }
            }
            function rr(e, n, t) {
                "focusin" === e ? (nr(),
                Bt = t,
                (Vt = n).attachEvent("onpropertychange", tr)) : "focusout" === e && nr()
            }
            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Qt(Bt)
            }
            function ir(e, n) {
                if ("click" === e)
                    return Qt(n)
            }
            function or(e, n) {
                if ("input" === e || "change" === e)
                    return Qt(n)
            }
            var lr = "function" === typeof Object.is ? Object.is : function(e, n) {
                return e === n && (0 !== e || 1 / e === 1 / n) || e !== e && n !== n
            }
            ;
            function sr(e, n) {
                if (lr(e, n))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof n || null === n)
                    return !1;
                var t = Object.keys(e)
                  , r = Object.keys(n);
                if (t.length !== r.length)
                    return !1;
                for (r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!d.call(n, a) || !lr(e[a], n[a]))
                        return !1
                }
                return !0
            }
            function ur(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function cr(e, n) {
                var t, r = ur(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (t = e + r.textContent.length,
                        e <= n && t >= n)
                            return {
                                node: r,
                                offset: n - e
                            };
                        e = t
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }
            function dr(e, n) {
                return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? dr(e, n.parentNode) : "contains"in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
            }
            function fr() {
                for (var e = window, n = $(); n instanceof e.HTMLIFrameElement; ) {
                    try {
                        var t = "string" === typeof n.contentWindow.location.href
                    } catch (r) {
                        t = !1
                    }
                    if (!t)
                        break;
                    n = $((e = n.contentWindow).document)
                }
                return n
            }
            function pr(e) {
                var n = e && e.nodeName && e.nodeName.toLowerCase();
                return n && ("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === n || "true" === e.contentEditable)
            }
            function hr(e) {
                var n = fr()
                  , t = e.focusedElem
                  , r = e.selectionRange;
                if (n !== t && t && t.ownerDocument && dr(t.ownerDocument.documentElement, t)) {
                    if (null !== r && pr(t))
                        if (n = r.start,
                        void 0 === (e = r.end) && (e = n),
                        "selectionStart"in t)
                            t.selectionStart = n,
                            t.selectionEnd = Math.min(e, t.value.length);
                        else if ((e = (n = t.ownerDocument || document) && n.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = t.textContent.length
                              , i = Math.min(r.start, a);
                            r = void 0 === r.end ? i : Math.min(r.end, a),
                            !e.extend && i > r && (a = r,
                            r = i,
                            i = a),
                            a = cr(t, i);
                            var o = cr(t, r);
                            a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((n = n.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            i > r ? (e.addRange(n),
                            e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset),
                            e.addRange(n)))
                        }
                    for (n = [],
                    e = t; e = e.parentNode; )
                        1 === e.nodeType && n.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                    for ("function" === typeof t.focus && t.focus(),
                    t = 0; t < n.length; t++)
                        (e = n[t]).element.scrollLeft = e.left,
                        e.element.scrollTop = e.top
                }
            }
            var mr = c && "documentMode"in document && 11 >= document.documentMode
              , gr = null
              , vr = null
              , yr = null
              , br = !1;
            function wr(e, n, t) {
                var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                br || null == gr || gr !== $(r) || ("selectionStart"in (r = gr) && pr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                yr && sr(yr, r) || (yr = r,
                0 < (r = Vr(vr, "onSelect")).length && (n = new ct("onSelect","select",null,n,t),
                e.push({
                    event: n,
                    listeners: r
                }),
                n.target = gr)))
            }
            function xr(e, n) {
                var t = {};
                return t[e.toLowerCase()] = n.toLowerCase(),
                t["Webkit" + e] = "webkit" + n,
                t["Moz" + e] = "moz" + n,
                t
            }
            var kr = {
                animationend: xr("Animation", "AnimationEnd"),
                animationiteration: xr("Animation", "AnimationIteration"),
                animationstart: xr("Animation", "AnimationStart"),
                transitionend: xr("Transition", "TransitionEnd")
            }
              , Er = {}
              , Sr = {};
            function Nr(e) {
                if (Er[e])
                    return Er[e];
                if (!kr[e])
                    return e;
                var n, t = kr[e];
                for (n in t)
                    if (t.hasOwnProperty(n) && n in Sr)
                        return Er[e] = t[n];
                return e
            }
            c && (Sr = document.createElement("div").style,
            "AnimationEvent"in window || (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
            "TransitionEvent"in window || delete kr.transitionend.transition);
            var Cr = Nr("animationend")
              , jr = Nr("animationiteration")
              , Ir = Nr("animationstart")
              , Tr = Nr("transitionend")
              , Dr = new Map
              , Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function Ar(e, n) {
                Dr.set(e, n),
                s(n, [e])
            }
            for (var _r = 0; _r < Rr.length; _r++) {
                var Pr = Rr[_r];
                Ar(Pr.toLowerCase(), "on" + (Pr[0].toUpperCase() + Pr.slice(1)))
            }
            Ar(Cr, "onAnimationEnd"),
            Ar(jr, "onAnimationIteration"),
            Ar(Ir, "onAnimationStart"),
            Ar("dblclick", "onDoubleClick"),
            Ar("focusin", "onFocus"),
            Ar("focusout", "onBlur"),
            Ar(Tr, "onTransitionEnd"),
            u("onMouseEnter", ["mouseout", "mouseover"]),
            u("onMouseLeave", ["mouseout", "mouseover"]),
            u("onPointerEnter", ["pointerout", "pointerover"]),
            u("onPointerLeave", ["pointerout", "pointerover"]),
            s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
            function Or(e, n, t) {
                var r = e.type || "unknown-event";
                e.currentTarget = t,
                function(e, n, t, r, a, o, l, s, u) {
                    if (He.apply(this, arguments),
                    Le) {
                        if (!Le)
                            throw Error(i(198));
                        var c = Oe;
                        Le = !1,
                        Oe = null,
                        Ue || (Ue = !0,
                        ze = c)
                    }
                }(r, n, void 0, e),
                e.currentTarget = null
            }
            function Ur(e, n) {
                n = 0 !== (4 & n);
                for (var t = 0; t < e.length; t++) {
                    var r = e[t]
                      , a = r.event;
                    r = r.listeners;
                    e: {
                        var i = void 0;
                        if (n)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var l = r[o]
                                  , s = l.instance
                                  , u = l.currentTarget;
                                if (l = l.listener,
                                s !== i && a.isPropagationStopped())
                                    break e;
                                Or(a, l, u),
                                i = s
                            }
                        else
                            for (o = 0; o < r.length; o++) {
                                if (s = (l = r[o]).instance,
                                u = l.currentTarget,
                                l = l.listener,
                                s !== i && a.isPropagationStopped())
                                    break e;
                                Or(a, l, u),
                                i = s
                            }
                    }
                }
                if (Ue)
                    throw e = ze,
                    Ue = !1,
                    ze = null,
                    e
            }
            function zr(e, n) {
                var t = n[ma];
                void 0 === t && (t = n[ma] = new Set);
                var r = e + "__bubble";
                t.has(r) || (Wr(n, e, 2, !1),
                t.add(r))
            }
            function Fr(e, n, t) {
                var r = 0;
                n && (r |= 4),
                Wr(t, e, r, n)
            }
            var Hr = "_reactListening" + Math.random().toString(36).slice(2);
            function qr(e) {
                if (!e[Hr]) {
                    e[Hr] = !0,
                    o.forEach((function(n) {
                        "selectionchange" !== n && (Lr.has(n) || Fr(n, !1, e),
                        Fr(n, !0, e))
                    }
                    ));
                    var n = 9 === e.nodeType ? e : e.ownerDocument;
                    null === n || n[Hr] || (n[Hr] = !0,
                    Fr("selectionchange", !1, n))
                }
            }
            function Wr(e, n, t, r) {
                switch (Kn(n)) {
                case 1:
                    var a = Vn;
                    break;
                case 4:
                    a = Bn;
                    break;
                default:
                    a = $n
                }
                t = a.bind(null, n, t, e),
                a = void 0,
                !_e || "touchstart" !== n && "touchmove" !== n && "wheel" !== n || (a = !0),
                r ? void 0 !== a ? e.addEventListener(n, t, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(n, t, !0) : void 0 !== a ? e.addEventListener(n, t, {
                    passive: a
                }) : e.addEventListener(n, t, !1)
            }
            function Xr(e, n, t, r, a) {
                var i = r;
                if (0 === (1 & n) && 0 === (2 & n) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var o = r.tag;
                        if (3 === o || 4 === o) {
                            var l = r.stateNode.containerInfo;
                            if (l === a || 8 === l.nodeType && l.parentNode === a)
                                break;
                            if (4 === o)
                                for (o = r.return; null !== o; ) {
                                    var s = o.tag;
                                    if ((3 === s || 4 === s) && ((s = o.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a))
                                        return;
                                    o = o.return
                                }
                            for (; null !== l; ) {
                                if (null === (o = ya(l)))
                                    return;
                                if (5 === (s = o.tag) || 6 === s) {
                                    r = i = o;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                Re((function() {
                    var r = i
                      , a = xe(t)
                      , o = [];
                    e: {
                        var l = Dr.get(e);
                        if (void 0 !== l) {
                            var s = ct
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === tt(t))
                                    break e;
                            case "keydown":
                            case "keyup":
                                s = jt;
                                break;
                            case "focusin":
                                u = "focus",
                                s = gt;
                                break;
                            case "focusout":
                                u = "blur",
                                s = gt;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                s = gt;
                                break;
                            case "click":
                                if (2 === t.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                s = ht;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                s = mt;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                s = Tt;
                                break;
                            case Cr:
                            case jr:
                            case Ir:
                                s = vt;
                                break;
                            case Tr:
                                s = Dt;
                                break;
                            case "scroll":
                                s = ft;
                                break;
                            case "wheel":
                                s = At;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                s = bt;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                s = It
                            }
                            var c = 0 !== (4 & n)
                              , d = !c && "scroll" === e
                              , f = c ? null !== l ? l + "Capture" : null : l;
                            c = [];
                            for (var p, h = r; null !== h; ) {
                                var m = (p = h).stateNode;
                                if (5 === p.tag && null !== m && (p = m,
                                null !== f && (null != (m = Ae(h, f)) && c.push(Gr(h, m, p)))),
                                d)
                                    break;
                                h = h.return
                            }
                            0 < c.length && (l = new s(l,u,null,t,a),
                            o.push({
                                event: l,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & n)) {
                        if (s = "mouseout" === e || "pointerout" === e,
                        (!(l = "mouseover" === e || "pointerover" === e) || t === we || !(u = t.relatedTarget || t.fromElement) || !ya(u) && !u[ha]) && (s || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window,
                        s ? (s = r,
                        null !== (u = (u = t.relatedTarget || t.toElement) ? ya(u) : null) && (u !== (d = qe(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null,
                        u = r),
                        s !== u)) {
                            if (c = ht,
                            m = "onMouseLeave",
                            f = "onMouseEnter",
                            h = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = It,
                            m = "onPointerLeave",
                            f = "onPointerEnter",
                            h = "pointer"),
                            d = null == s ? l : wa(s),
                            p = null == u ? l : wa(u),
                            (l = new c(m,h + "leave",s,t,a)).target = d,
                            l.relatedTarget = p,
                            m = null,
                            ya(a) === r && ((c = new c(f,h + "enter",u,t,a)).target = p,
                            c.relatedTarget = d,
                            m = c),
                            d = m,
                            s && u)
                                e: {
                                    for (f = u,
                                    h = 0,
                                    p = c = s; p; p = Br(p))
                                        h++;
                                    for (p = 0,
                                    m = f; m; m = Br(m))
                                        p++;
                                    for (; 0 < h - p; )
                                        c = Br(c),
                                        h--;
                                    for (; 0 < p - h; )
                                        f = Br(f),
                                        p--;
                                    for (; h--; ) {
                                        if (c === f || null !== f && c === f.alternate)
                                            break e;
                                        c = Br(c),
                                        f = Br(f)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== s && $r(o, l, s, c, !1),
                            null !== u && null !== d && $r(o, d, u, c, !0)
                        }
                        if ("select" === (s = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type)
                            var g = Yt;
                        else if (Xt(l))
                            if (Kt)
                                g = or;
                            else {
                                g = ar;
                                var v = rr
                            }
                        else
                            (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (g = ir);
                        switch (g && (g = g(e, r)) ? Gt(o, g, t, a) : (v && v(e, l, r),
                        "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && ee(l, "number", l.value)),
                        v = r ? wa(r) : window,
                        e) {
                        case "focusin":
                            (Xt(v) || "true" === v.contentEditable) && (gr = v,
                            vr = r,
                            yr = null);
                            break;
                        case "focusout":
                            yr = vr = gr = null;
                            break;
                        case "mousedown":
                            br = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            br = !1,
                            wr(o, t, a);
                            break;
                        case "selectionchange":
                            if (mr)
                                break;
                        case "keydown":
                        case "keyup":
                            wr(o, t, a)
                        }
                        var y;
                        if (Pt)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                                }
                                b = void 0
                            }
                        else
                            qt ? Ft(e, t) && (b = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (b = "onCompositionStart");
                        b && (Ot && "ko" !== t.locale && (qt || "onCompositionStart" !== b ? "onCompositionEnd" === b && qt && (y = nt()) : (Zn = "value"in (Jn = a) ? Jn.value : Jn.textContent,
                        qt = !0)),
                        0 < (v = Vr(r, b)).length && (b = new wt(b,e,null,t,a),
                        o.push({
                            event: b,
                            listeners: v
                        }),
                        y ? b.data = y : null !== (y = Ht(t)) && (b.data = y))),
                        (y = Lt ? function(e, n) {
                            switch (e) {
                            case "compositionend":
                                return Ht(n);
                            case "keypress":
                                return 32 !== n.which ? null : (zt = !0,
                                Ut);
                            case "textInput":
                                return (e = n.data) === Ut && zt ? null : e;
                            default:
                                return null
                            }
                        }(e, t) : function(e, n) {
                            if (qt)
                                return "compositionend" === e || !Pt && Ft(e, n) ? (e = nt(),
                                et = Zn = Jn = null,
                                qt = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                                    if (n.char && 1 < n.char.length)
                                        return n.char;
                                    if (n.which)
                                        return String.fromCharCode(n.which)
                                }
                                return null;
                            case "compositionend":
                                return Ot && "ko" !== n.locale ? null : n.data
                            }
                        }(e, t)) && (0 < (r = Vr(r, "onBeforeInput")).length && (a = new wt("onBeforeInput","beforeinput",null,t,a),
                        o.push({
                            event: a,
                            listeners: r
                        }),
                        a.data = y))
                    }
                    Ur(o, n)
                }
                ))
            }
            function Gr(e, n, t) {
                return {
                    instance: e,
                    listener: n,
                    currentTarget: t
                }
            }
            function Vr(e, n) {
                for (var t = n + "Capture", r = []; null !== e; ) {
                    var a = e
                      , i = a.stateNode;
                    5 === a.tag && null !== i && (a = i,
                    null != (i = Ae(e, t)) && r.unshift(Gr(e, i, a)),
                    null != (i = Ae(e, n)) && r.push(Gr(e, i, a))),
                    e = e.return
                }
                return r
            }
            function Br(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function $r(e, n, t, r, a) {
                for (var i = n._reactName, o = []; null !== t && t !== r; ) {
                    var l = t
                      , s = l.alternate
                      , u = l.stateNode;
                    if (null !== s && s === r)
                        break;
                    5 === l.tag && null !== u && (l = u,
                    a ? null != (s = Ae(t, i)) && o.unshift(Gr(t, s, l)) : a || null != (s = Ae(t, i)) && o.push(Gr(t, s, l))),
                    t = t.return
                }
                0 !== o.length && e.push({
                    event: n,
                    listeners: o
                })
            }
            var Qr = /\r\n?/g
              , Yr = /\u0000|\uFFFD/g;
            function Kr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Qr, "\n").replace(Yr, "")
            }
            function Jr(e, n, t) {
                if (n = Kr(n),
                Kr(e) !== n && t)
                    throw Error(i(425))
            }
            function Zr() {}
            var ea = null
              , na = null;
            function ta(e, n) {
                return "textarea" === e || "noscript" === e || "string" === typeof n.children || "number" === typeof n.children || "object" === typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html
            }
            var ra = "function" === typeof setTimeout ? setTimeout : void 0
              , aa = "function" === typeof clearTimeout ? clearTimeout : void 0
              , ia = "function" === typeof Promise ? Promise : void 0
              , oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function(e) {
                return ia.resolve(null).then(e).catch(la)
            }
            : ra;
            function la(e) {
                setTimeout((function() {
                    throw e
                }
                ))
            }
            function sa(e, n) {
                var t = n
                  , r = 0;
                do {
                    var a = t.nextSibling;
                    if (e.removeChild(t),
                    a && 8 === a.nodeType)
                        if ("/$" === (t = a.data)) {
                            if (0 === r)
                                return e.removeChild(a),
                                void Wn(n);
                            r--
                        } else
                            "$" !== t && "$?" !== t && "$!" !== t || r++;
                    t = a
                } while (t);
                Wn(n)
            }
            function ua(e) {
                for (; null != e; e = e.nextSibling) {
                    var n = e.nodeType;
                    if (1 === n || 3 === n)
                        break;
                    if (8 === n) {
                        if ("$" === (n = e.data) || "$!" === n || "$?" === n)
                            break;
                        if ("/$" === n)
                            return null
                    }
                }
                return e
            }
            function ca(e) {
                e = e.previousSibling;
                for (var n = 0; e; ) {
                    if (8 === e.nodeType) {
                        var t = e.data;
                        if ("$" === t || "$!" === t || "$?" === t) {
                            if (0 === n)
                                return e;
                            n--
                        } else
                            "/$" === t && n++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var da = Math.random().toString(36).slice(2)
              , fa = "__reactFiber$" + da
              , pa = "__reactProps$" + da
              , ha = "__reactContainer$" + da
              , ma = "__reactEvents$" + da
              , ga = "__reactListeners$" + da
              , va = "__reactHandles$" + da;
            function ya(e) {
                var n = e[fa];
                if (n)
                    return n;
                for (var t = e.parentNode; t; ) {
                    if (n = t[ha] || t[fa]) {
                        if (t = n.alternate,
                        null !== n.child || null !== t && null !== t.child)
                            for (e = ca(e); null !== e; ) {
                                if (t = e[fa])
                                    return t;
                                e = ca(e)
                            }
                        return n
                    }
                    t = (e = t).parentNode
                }
                return null
            }
            function ba(e) {
                return !(e = e[fa] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function wa(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(i(33))
            }
            function xa(e) {
                return e[pa] || null
            }
            var ka = []
              , Ea = -1;
            function Sa(e) {
                return {
                    current: e
                }
            }
            function Na(e) {
                0 > Ea || (e.current = ka[Ea],
                ka[Ea] = null,
                Ea--)
            }
            function Ca(e, n) {
                Ea++,
                ka[Ea] = e.current,
                e.current = n
            }
            var ja = {}
              , Ia = Sa(ja)
              , Ta = Sa(!1)
              , Da = ja;
            function Ra(e, n) {
                var t = e.type.contextTypes;
                if (!t)
                    return ja;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var a, i = {};
                for (a in t)
                    i[a] = n[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n,
                e.__reactInternalMemoizedMaskedChildContext = i),
                i
            }
            function Aa(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }
            function _a() {
                Na(Ta),
                Na(Ia)
            }
            function Pa(e, n, t) {
                if (Ia.current !== ja)
                    throw Error(i(168));
                Ca(Ia, n),
                Ca(Ta, t)
            }
            function Ma(e, n, t) {
                var r = e.stateNode;
                if (n = n.childContextTypes,
                "function" !== typeof r.getChildContext)
                    return t;
                for (var a in r = r.getChildContext())
                    if (!(a in n))
                        throw Error(i(108, W(e) || "Unknown", a));
                return O({}, t, r)
            }
            function La(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ja,
                Da = Ia.current,
                Ca(Ia, e),
                Ca(Ta, Ta.current),
                !0
            }
            function Oa(e, n, t) {
                var r = e.stateNode;
                if (!r)
                    throw Error(i(169));
                t ? (e = Ma(e, n, Da),
                r.__reactInternalMemoizedMergedChildContext = e,
                Na(Ta),
                Na(Ia),
                Ca(Ia, e)) : Na(Ta),
                Ca(Ta, t)
            }
            var Ua = null
              , za = !1
              , Fa = !1;
            function Ha(e) {
                null === Ua ? Ua = [e] : Ua.push(e)
            }
            function qa() {
                if (!Fa && null !== Ua) {
                    Fa = !0;
                    var e = 0
                      , n = wn;
                    try {
                        var t = Ua;
                        for (wn = 1; e < t.length; e++) {
                            var r = t[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        Ua = null,
                        za = !1
                    } catch (a) {
                        throw null !== Ua && (Ua = Ua.slice(e + 1)),
                        Be(Ze, qa),
                        a
                    } finally {
                        wn = n,
                        Fa = !1
                    }
                }
                return null
            }
            var Wa = []
              , Xa = 0
              , Ga = null
              , Va = 0
              , Ba = []
              , $a = 0
              , Qa = null
              , Ya = 1
              , Ka = "";
            function Ja(e, n) {
                Wa[Xa++] = Va,
                Wa[Xa++] = Ga,
                Ga = e,
                Va = n
            }
            function Za(e, n, t) {
                Ba[$a++] = Ya,
                Ba[$a++] = Ka,
                Ba[$a++] = Qa,
                Qa = e;
                var r = Ya;
                e = Ka;
                var a = 32 - ln(r) - 1;
                r &= ~(1 << a),
                t += 1;
                var i = 32 - ln(n) + a;
                if (30 < i) {
                    var o = a - a % 5;
                    i = (r & (1 << o) - 1).toString(32),
                    r >>= o,
                    a -= o,
                    Ya = 1 << 32 - ln(n) + a | t << a | r,
                    Ka = i + e
                } else
                    Ya = 1 << i | t << a | r,
                    Ka = e
            }
            function ei(e) {
                null !== e.return && (Ja(e, 1),
                Za(e, 1, 0))
            }
            function ni(e) {
                for (; e === Ga; )
                    Ga = Wa[--Xa],
                    Wa[Xa] = null,
                    Va = Wa[--Xa],
                    Wa[Xa] = null;
                for (; e === Qa; )
                    Qa = Ba[--$a],
                    Ba[$a] = null,
                    Ka = Ba[--$a],
                    Ba[$a] = null,
                    Ya = Ba[--$a],
                    Ba[$a] = null
            }
            var ti = null
              , ri = null
              , ai = !1
              , ii = null;
            function oi(e, n) {
                var t = Ru(5, null, null, 0);
                t.elementType = "DELETED",
                t.stateNode = n,
                t.return = e,
                null === (n = e.deletions) ? (e.deletions = [t],
                e.flags |= 16) : n.push(t)
            }
            function li(e, n) {
                switch (e.tag) {
                case 5:
                    var t = e.type;
                    return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && (e.stateNode = n,
                    ti = e,
                    ri = ua(n.firstChild),
                    !0);
                case 6:
                    return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && (e.stateNode = n,
                    ti = e,
                    ri = null,
                    !0);
                case 13:
                    return null !== (n = 8 !== n.nodeType ? null : n) && (t = null !== Qa ? {
                        id: Ya,
                        overflow: Ka
                    } : null,
                    e.memoizedState = {
                        dehydrated: n,
                        treeContext: t,
                        retryLane: 1073741824
                    },
                    (t = Ru(18, null, null, 0)).stateNode = n,
                    t.return = e,
                    e.child = t,
                    ti = e,
                    ri = null,
                    !0);
                default:
                    return !1
                }
            }
            function si(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }
            function ui(e) {
                if (ai) {
                    var n = ri;
                    if (n) {
                        var t = n;
                        if (!li(e, n)) {
                            if (si(e))
                                throw Error(i(418));
                            n = ua(t.nextSibling);
                            var r = ti;
                            n && li(e, n) ? oi(r, t) : (e.flags = -4097 & e.flags | 2,
                            ai = !1,
                            ti = e)
                        }
                    } else {
                        if (si(e))
                            throw Error(i(418));
                        e.flags = -4097 & e.flags | 2,
                        ai = !1,
                        ti = e
                    }
                }
            }
            function ci(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                ti = e
            }
            function di(e) {
                if (e !== ti)
                    return !1;
                if (!ai)
                    return ci(e),
                    ai = !0,
                    !1;
                var n;
                if ((n = 3 !== e.tag) && !(n = 5 !== e.tag) && (n = "head" !== (n = e.type) && "body" !== n && !ta(e.type, e.memoizedProps)),
                n && (n = ri)) {
                    if (si(e))
                        throw fi(),
                        Error(i(418));
                    for (; n; )
                        oi(e, n),
                        n = ua(n.nextSibling)
                }
                if (ci(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(i(317));
                    e: {
                        for (e = e.nextSibling,
                        n = 0; e; ) {
                            if (8 === e.nodeType) {
                                var t = e.data;
                                if ("/$" === t) {
                                    if (0 === n) {
                                        ri = ua(e.nextSibling);
                                        break e
                                    }
                                    n--
                                } else
                                    "$" !== t && "$!" !== t && "$?" !== t || n++
                            }
                            e = e.nextSibling
                        }
                        ri = null
                    }
                } else
                    ri = ti ? ua(e.stateNode.nextSibling) : null;
                return !0
            }
            function fi() {
                for (var e = ri; e; )
                    e = ua(e.nextSibling)
            }
            function pi() {
                ri = ti = null,
                ai = !1
            }
            function hi(e) {
                null === ii ? ii = [e] : ii.push(e)
            }
            var mi = w.ReactCurrentBatchConfig;
            function gi(e, n, t) {
                if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (t._owner) {
                        if (t = t._owner) {
                            if (1 !== t.tag)
                                throw Error(i(309));
                            var r = t.stateNode
                        }
                        if (!r)
                            throw Error(i(147, e));
                        var a = r
                          , o = "" + e;
                        return null !== n && null !== n.ref && "function" === typeof n.ref && n.ref._stringRef === o ? n.ref : (n = function(e) {
                            var n = a.refs;
                            null === e ? delete n[o] : n[o] = e
                        }
                        ,
                        n._stringRef = o,
                        n)
                    }
                    if ("string" !== typeof e)
                        throw Error(i(284));
                    if (!t._owner)
                        throw Error(i(290, e))
                }
                return e
            }
            function vi(e, n) {
                throw e = Object.prototype.toString.call(n),
                Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
            }
            function yi(e) {
                return (0,
                e._init)(e._payload)
            }
            function bi(e) {
                function n(n, t) {
                    if (e) {
                        var r = n.deletions;
                        null === r ? (n.deletions = [t],
                        n.flags |= 16) : r.push(t)
                    }
                }
                function t(t, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        n(t, r),
                        r = r.sibling;
                    return null
                }
                function r(e, n) {
                    for (e = new Map; null !== n; )
                        null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                        n = n.sibling;
                    return e
                }
                function a(e, n) {
                    return (e = _u(e, n)).index = 0,
                    e.sibling = null,
                    e
                }
                function o(n, t, r) {
                    return n.index = r,
                    e ? null !== (r = n.alternate) ? (r = r.index) < t ? (n.flags |= 2,
                    t) : r : (n.flags |= 2,
                    t) : (n.flags |= 1048576,
                    t)
                }
                function l(n) {
                    return e && null === n.alternate && (n.flags |= 2),
                    n
                }
                function s(e, n, t, r) {
                    return null === n || 6 !== n.tag ? ((n = Ou(t, e.mode, r)).return = e,
                    n) : ((n = a(n, t)).return = e,
                    n)
                }
                function u(e, n, t, r) {
                    var i = t.type;
                    return i === E ? d(e, n, t.props.children, r, t.key) : null !== n && (n.elementType === i || "object" === typeof i && null !== i && i.$$typeof === A && yi(i) === n.type) ? ((r = a(n, t.props)).ref = gi(e, n, t),
                    r.return = e,
                    r) : ((r = Pu(t.type, t.key, t.props, null, e.mode, r)).ref = gi(e, n, t),
                    r.return = e,
                    r)
                }
                function c(e, n, t, r) {
                    return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation ? ((n = Uu(t, e.mode, r)).return = e,
                    n) : ((n = a(n, t.children || [])).return = e,
                    n)
                }
                function d(e, n, t, r, i) {
                    return null === n || 7 !== n.tag ? ((n = Mu(t, e.mode, r, i)).return = e,
                    n) : ((n = a(n, t)).return = e,
                    n)
                }
                function f(e, n, t) {
                    if ("string" === typeof n && "" !== n || "number" === typeof n)
                        return (n = Ou("" + n, e.mode, t)).return = e,
                        n;
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case x:
                            return (t = Pu(n.type, n.key, n.props, null, e.mode, t)).ref = gi(e, null, n),
                            t.return = e,
                            t;
                        case k:
                            return (n = Uu(n, e.mode, t)).return = e,
                            n;
                        case A:
                            return f(e, (0,
                            n._init)(n._payload), t)
                        }
                        if (ne(n) || M(n))
                            return (n = Mu(n, e.mode, t, null)).return = e,
                            n;
                        vi(e, n)
                    }
                    return null
                }
                function p(e, n, t, r) {
                    var a = null !== n ? n.key : null;
                    if ("string" === typeof t && "" !== t || "number" === typeof t)
                        return null !== a ? null : s(e, n, "" + t, r);
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case x:
                            return t.key === a ? u(e, n, t, r) : null;
                        case k:
                            return t.key === a ? c(e, n, t, r) : null;
                        case A:
                            return p(e, n, (a = t._init)(t._payload), r)
                        }
                        if (ne(t) || M(t))
                            return null !== a ? null : d(e, n, t, r, null);
                        vi(e, t)
                    }
                    return null
                }
                function h(e, n, t, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r)
                        return s(n, e = e.get(t) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case x:
                            return u(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                        case k:
                            return c(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                        case A:
                            return h(e, n, t, (0,
                            r._init)(r._payload), a)
                        }
                        if (ne(r) || M(r))
                            return d(n, e = e.get(t) || null, r, a, null);
                        vi(n, r)
                    }
                    return null
                }
                function m(a, i, l, s) {
                    for (var u = null, c = null, d = i, m = i = 0, g = null; null !== d && m < l.length; m++) {
                        d.index > m ? (g = d,
                        d = null) : g = d.sibling;
                        var v = p(a, d, l[m], s);
                        if (null === v) {
                            null === d && (d = g);
                            break
                        }
                        e && d && null === v.alternate && n(a, d),
                        i = o(v, i, m),
                        null === c ? u = v : c.sibling = v,
                        c = v,
                        d = g
                    }
                    if (m === l.length)
                        return t(a, d),
                        ai && Ja(a, m),
                        u;
                    if (null === d) {
                        for (; m < l.length; m++)
                            null !== (d = f(a, l[m], s)) && (i = o(d, i, m),
                            null === c ? u = d : c.sibling = d,
                            c = d);
                        return ai && Ja(a, m),
                        u
                    }
                    for (d = r(a, d); m < l.length; m++)
                        null !== (g = h(d, a, m, l[m], s)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key),
                        i = o(g, i, m),
                        null === c ? u = g : c.sibling = g,
                        c = g);
                    return e && d.forEach((function(e) {
                        return n(a, e)
                    }
                    )),
                    ai && Ja(a, m),
                    u
                }
                function g(a, l, s, u) {
                    var c = M(s);
                    if ("function" !== typeof c)
                        throw Error(i(150));
                    if (null == (s = c.call(s)))
                        throw Error(i(151));
                    for (var d = c = null, m = l, g = l = 0, v = null, y = s.next(); null !== m && !y.done; g++,
                    y = s.next()) {
                        m.index > g ? (v = m,
                        m = null) : v = m.sibling;
                        var b = p(a, m, y.value, u);
                        if (null === b) {
                            null === m && (m = v);
                            break
                        }
                        e && m && null === b.alternate && n(a, m),
                        l = o(b, l, g),
                        null === d ? c = b : d.sibling = b,
                        d = b,
                        m = v
                    }
                    if (y.done)
                        return t(a, m),
                        ai && Ja(a, g),
                        c;
                    if (null === m) {
                        for (; !y.done; g++,
                        y = s.next())
                            null !== (y = f(a, y.value, u)) && (l = o(y, l, g),
                            null === d ? c = y : d.sibling = y,
                            d = y);
                        return ai && Ja(a, g),
                        c
                    }
                    for (m = r(a, m); !y.done; g++,
                    y = s.next())
                        null !== (y = h(m, a, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key),
                        l = o(y, l, g),
                        null === d ? c = y : d.sibling = y,
                        d = y);
                    return e && m.forEach((function(e) {
                        return n(a, e)
                    }
                    )),
                    ai && Ja(a, g),
                    c
                }
                return function e(r, i, o, s) {
                    if ("object" === typeof o && null !== o && o.type === E && null === o.key && (o = o.props.children),
                    "object" === typeof o && null !== o) {
                        switch (o.$$typeof) {
                        case x:
                            e: {
                                for (var u = o.key, c = i; null !== c; ) {
                                    if (c.key === u) {
                                        if ((u = o.type) === E) {
                                            if (7 === c.tag) {
                                                t(r, c.sibling),
                                                (i = a(c, o.props.children)).return = r,
                                                r = i;
                                                break e
                                            }
                                        } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === A && yi(u) === c.type) {
                                            t(r, c.sibling),
                                            (i = a(c, o.props)).ref = gi(r, c, o),
                                            i.return = r,
                                            r = i;
                                            break e
                                        }
                                        t(r, c);
                                        break
                                    }
                                    n(r, c),
                                    c = c.sibling
                                }
                                o.type === E ? ((i = Mu(o.props.children, r.mode, s, o.key)).return = r,
                                r = i) : ((s = Pu(o.type, o.key, o.props, null, r.mode, s)).ref = gi(r, i, o),
                                s.return = r,
                                r = s)
                            }
                            return l(r);
                        case k:
                            e: {
                                for (c = o.key; null !== i; ) {
                                    if (i.key === c) {
                                        if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                            t(r, i.sibling),
                                            (i = a(i, o.children || [])).return = r,
                                            r = i;
                                            break e
                                        }
                                        t(r, i);
                                        break
                                    }
                                    n(r, i),
                                    i = i.sibling
                                }
                                (i = Uu(o, r.mode, s)).return = r,
                                r = i
                            }
                            return l(r);
                        case A:
                            return e(r, i, (c = o._init)(o._payload), s)
                        }
                        if (ne(o))
                            return m(r, i, o, s);
                        if (M(o))
                            return g(r, i, o, s);
                        vi(r, o)
                    }
                    return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o,
                    null !== i && 6 === i.tag ? (t(r, i.sibling),
                    (i = a(i, o)).return = r,
                    r = i) : (t(r, i),
                    (i = Ou(o, r.mode, s)).return = r,
                    r = i),
                    l(r)) : t(r, i)
                }
            }
            var wi = bi(!0)
              , xi = bi(!1)
              , ki = Sa(null)
              , Ei = null
              , Si = null
              , Ni = null;
            function Ci() {
                Ni = Si = Ei = null
            }
            function ji(e) {
                var n = ki.current;
                Na(ki),
                e._currentValue = n
            }
            function Ii(e, n, t) {
                for (; null !== e; ) {
                    var r = e.alternate;
                    if ((e.childLanes & n) !== n ? (e.childLanes |= n,
                    null !== r && (r.childLanes |= n)) : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
                    e === t)
                        break;
                    e = e.return
                }
            }
            function Ti(e, n) {
                Ei = e,
                Ni = Si = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & n) && (bl = !0),
                e.firstContext = null)
            }
            function Di(e) {
                var n = e._currentValue;
                if (Ni !== e)
                    if (e = {
                        context: e,
                        memoizedValue: n,
                        next: null
                    },
                    null === Si) {
                        if (null === Ei)
                            throw Error(i(308));
                        Si = e,
                        Ei.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else
                        Si = Si.next = e;
                return n
            }
            var Ri = null;
            function Ai(e) {
                null === Ri ? Ri = [e] : Ri.push(e)
            }
            function _i(e, n, t, r) {
                var a = n.interleaved;
                return null === a ? (t.next = t,
                Ai(n)) : (t.next = a.next,
                a.next = t),
                n.interleaved = t,
                Pi(e, r)
            }
            function Pi(e, n) {
                e.lanes |= n;
                var t = e.alternate;
                for (null !== t && (t.lanes |= n),
                t = e,
                e = e.return; null !== e; )
                    e.childLanes |= n,
                    null !== (t = e.alternate) && (t.childLanes |= n),
                    t = e,
                    e = e.return;
                return 3 === t.tag ? t.stateNode : null
            }
            var Mi = !1;
            function Li(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }
            function Oi(e, n) {
                e = e.updateQueue,
                n.updateQueue === e && (n.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function Ui(e, n) {
                return {
                    eventTime: e,
                    lane: n,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function zi(e, n, t) {
                var r = e.updateQueue;
                if (null === r)
                    return null;
                if (r = r.shared,
                0 !== (2 & Is)) {
                    var a = r.pending;
                    return null === a ? n.next = n : (n.next = a.next,
                    a.next = n),
                    r.pending = n,
                    Pi(e, t)
                }
                return null === (a = r.interleaved) ? (n.next = n,
                Ai(r)) : (n.next = a.next,
                a.next = n),
                r.interleaved = n,
                Pi(e, t)
            }
            function Fi(e, n, t) {
                if (null !== (n = n.updateQueue) && (n = n.shared,
                0 !== (4194240 & t))) {
                    var r = n.lanes;
                    t |= r &= e.pendingLanes,
                    n.lanes = t,
                    bn(e, t)
                }
            }
            function Hi(e, n) {
                var t = e.updateQueue
                  , r = e.alternate;
                if (null !== r && t === (r = r.updateQueue)) {
                    var a = null
                      , i = null;
                    if (null !== (t = t.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: t.eventTime,
                                lane: t.lane,
                                tag: t.tag,
                                payload: t.payload,
                                callback: t.callback,
                                next: null
                            };
                            null === i ? a = i = o : i = i.next = o,
                            t = t.next
                        } while (null !== t);
                        null === i ? a = i = n : i = i.next = n
                    } else
                        a = i = n;
                    return t = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = t)
                }
                null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = n : e.next = n,
                t.lastBaseUpdate = n
            }
            function qi(e, n, t, r) {
                var a = e.updateQueue;
                Mi = !1;
                var i = a.firstBaseUpdate
                  , o = a.lastBaseUpdate
                  , l = a.shared.pending;
                if (null !== l) {
                    a.shared.pending = null;
                    var s = l
                      , u = s.next;
                    s.next = null,
                    null === o ? i = u : o.next = u,
                    o = s;
                    var c = e.alternate;
                    null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== o && (null === l ? c.firstBaseUpdate = u : l.next = u,
                    c.lastBaseUpdate = s))
                }
                if (null !== i) {
                    var d = a.baseState;
                    for (o = 0,
                    c = u = s = null,
                    l = i; ; ) {
                        var f = l.lane
                          , p = l.eventTime;
                        if ((r & f) === f) {
                            null !== c && (c = c.next = {
                                eventTime: p,
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            });
                            e: {
                                var h = e
                                  , m = l;
                                switch (f = n,
                                p = t,
                                m.tag) {
                                case 1:
                                    if ("function" === typeof (h = m.payload)) {
                                        d = h.call(p, d, f);
                                        break e
                                    }
                                    d = h;
                                    break e;
                                case 3:
                                    h.flags = -65537 & h.flags | 128;
                                case 0:
                                    if (null === (f = "function" === typeof (h = m.payload) ? h.call(p, d, f) : h) || void 0 === f)
                                        break e;
                                    d = O({}, d, f);
                                    break e;
                                case 2:
                                    Mi = !0
                                }
                            }
                            null !== l.callback && 0 !== l.lane && (e.flags |= 64,
                            null === (f = a.effects) ? a.effects = [l] : f.push(l))
                        } else
                            p = {
                                eventTime: p,
                                lane: f,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            },
                            null === c ? (u = c = p,
                            s = d) : c = c.next = p,
                            o |= f;
                        if (null === (l = l.next)) {
                            if (null === (l = a.shared.pending))
                                break;
                            l = (f = l).next,
                            f.next = null,
                            a.lastBaseUpdate = f,
                            a.shared.pending = null
                        }
                    }
                    if (null === c && (s = d),
                    a.baseState = s,
                    a.firstBaseUpdate = u,
                    a.lastBaseUpdate = c,
                    null !== (n = a.shared.interleaved)) {
                        a = n;
                        do {
                            o |= a.lane,
                            a = a.next
                        } while (a !== n)
                    } else
                        null === i && (a.shared.lanes = 0);
                    Ls |= o,
                    e.lanes = o,
                    e.memoizedState = d
                }
            }
            function Wi(e, n, t) {
                if (e = n.effects,
                n.effects = null,
                null !== e)
                    for (n = 0; n < e.length; n++) {
                        var r = e[n]
                          , a = r.callback;
                        if (null !== a) {
                            if (r.callback = null,
                            r = t,
                            "function" !== typeof a)
                                throw Error(i(191, a));
                            a.call(r)
                        }
                    }
            }
            var Xi = {}
              , Gi = Sa(Xi)
              , Vi = Sa(Xi)
              , Bi = Sa(Xi);
            function $i(e) {
                if (e === Xi)
                    throw Error(i(174));
                return e
            }
            function Qi(e, n) {
                switch (Ca(Bi, n),
                Ca(Vi, e),
                Ca(Gi, Xi),
                e = n.nodeType) {
                case 9:
                case 11:
                    n = (n = n.documentElement) ? n.namespaceURI : se(null, "");
                    break;
                default:
                    n = se(n = (e = 8 === e ? n.parentNode : n).namespaceURI || null, e = e.tagName)
                }
                Na(Gi),
                Ca(Gi, n)
            }
            function Yi() {
                Na(Gi),
                Na(Vi),
                Na(Bi)
            }
            function Ki(e) {
                $i(Bi.current);
                var n = $i(Gi.current)
                  , t = se(n, e.type);
                n !== t && (Ca(Vi, e),
                Ca(Gi, t))
            }
            function Ji(e) {
                Vi.current === e && (Na(Gi),
                Na(Vi))
            }
            var Zi = Sa(0);
            function eo(e) {
                for (var n = e; null !== n; ) {
                    if (13 === n.tag) {
                        var t = n.memoizedState;
                        if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data))
                            return n
                    } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
                        if (0 !== (128 & n.flags))
                            return n
                    } else if (null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === e)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === e)
                            return null;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
                return null
            }
            var no = [];
            function to() {
                for (var e = 0; e < no.length; e++)
                    no[e]._workInProgressVersionPrimary = null;
                no.length = 0
            }
            var ro = w.ReactCurrentDispatcher
              , ao = w.ReactCurrentBatchConfig
              , io = 0
              , oo = null
              , lo = null
              , so = null
              , uo = !1
              , co = !1
              , fo = 0
              , po = 0;
            function ho() {
                throw Error(i(321))
            }
            function mo(e, n) {
                if (null === n)
                    return !1;
                for (var t = 0; t < n.length && t < e.length; t++)
                    if (!lr(e[t], n[t]))
                        return !1;
                return !0
            }
            function go(e, n, t, r, a, o) {
                if (io = o,
                oo = n,
                n.memoizedState = null,
                n.updateQueue = null,
                n.lanes = 0,
                ro.current = null === e || null === e.memoizedState ? Zo : el,
                e = t(r, a),
                co) {
                    o = 0;
                    do {
                        if (co = !1,
                        fo = 0,
                        25 <= o)
                            throw Error(i(301));
                        o += 1,
                        so = lo = null,
                        n.updateQueue = null,
                        ro.current = nl,
                        e = t(r, a)
                    } while (co)
                }
                if (ro.current = Jo,
                n = null !== lo && null !== lo.next,
                io = 0,
                so = lo = oo = null,
                uo = !1,
                n)
                    throw Error(i(300));
                return e
            }
            function vo() {
                var e = 0 !== fo;
                return fo = 0,
                e
            }
            function yo() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === so ? oo.memoizedState = so = e : so = so.next = e,
                so
            }
            function bo() {
                if (null === lo) {
                    var e = oo.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = lo.next;
                var n = null === so ? oo.memoizedState : so.next;
                if (null !== n)
                    so = n,
                    lo = e;
                else {
                    if (null === e)
                        throw Error(i(310));
                    e = {
                        memoizedState: (lo = e).memoizedState,
                        baseState: lo.baseState,
                        baseQueue: lo.baseQueue,
                        queue: lo.queue,
                        next: null
                    },
                    null === so ? oo.memoizedState = so = e : so = so.next = e
                }
                return so
            }
            function wo(e, n) {
                return "function" === typeof n ? n(e) : n
            }
            function xo(e) {
                var n = bo()
                  , t = n.queue;
                if (null === t)
                    throw Error(i(311));
                t.lastRenderedReducer = e;
                var r = lo
                  , a = r.baseQueue
                  , o = t.pending;
                if (null !== o) {
                    if (null !== a) {
                        var l = a.next;
                        a.next = o.next,
                        o.next = l
                    }
                    r.baseQueue = a = o,
                    t.pending = null
                }
                if (null !== a) {
                    o = a.next,
                    r = r.baseState;
                    var s = l = null
                      , u = null
                      , c = o;
                    do {
                        var d = c.lane;
                        if ((io & d) === d)
                            null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }),
                            r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var f = {
                                lane: d,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = f,
                            l = r) : u = u.next = f,
                            oo.lanes |= d,
                            Ls |= d
                        }
                        c = c.next
                    } while (null !== c && c !== o);
                    null === u ? l = r : u.next = s,
                    lr(r, n.memoizedState) || (bl = !0),
                    n.memoizedState = r,
                    n.baseState = l,
                    n.baseQueue = u,
                    t.lastRenderedState = r
                }
                if (null !== (e = t.interleaved)) {
                    a = e;
                    do {
                        o = a.lane,
                        oo.lanes |= o,
                        Ls |= o,
                        a = a.next
                    } while (a !== e)
                } else
                    null === a && (t.lanes = 0);
                return [n.memoizedState, t.dispatch]
            }
            function ko(e) {
                var n = bo()
                  , t = n.queue;
                if (null === t)
                    throw Error(i(311));
                t.lastRenderedReducer = e;
                var r = t.dispatch
                  , a = t.pending
                  , o = n.memoizedState;
                if (null !== a) {
                    t.pending = null;
                    var l = a = a.next;
                    do {
                        o = e(o, l.action),
                        l = l.next
                    } while (l !== a);
                    lr(o, n.memoizedState) || (bl = !0),
                    n.memoizedState = o,
                    null === n.baseQueue && (n.baseState = o),
                    t.lastRenderedState = o
                }
                return [o, r]
            }
            function Eo() {}
            function So(e, n) {
                var t = oo
                  , r = bo()
                  , a = n()
                  , o = !lr(r.memoizedState, a);
                if (o && (r.memoizedState = a,
                bl = !0),
                r = r.queue,
                Lo(jo.bind(null, t, r, e), [e]),
                r.getSnapshot !== n || o || null !== so && 1 & so.memoizedState.tag) {
                    if (t.flags |= 2048,
                    Ro(9, Co.bind(null, t, r, a, n), void 0, null),
                    null === Ts)
                        throw Error(i(349));
                    0 !== (30 & io) || No(t, n, a)
                }
                return a
            }
            function No(e, n, t) {
                e.flags |= 16384,
                e = {
                    getSnapshot: n,
                    value: t
                },
                null === (n = oo.updateQueue) ? (n = {
                    lastEffect: null,
                    stores: null
                },
                oo.updateQueue = n,
                n.stores = [e]) : null === (t = n.stores) ? n.stores = [e] : t.push(e)
            }
            function Co(e, n, t, r) {
                n.value = t,
                n.getSnapshot = r,
                Io(n) && To(e)
            }
            function jo(e, n, t) {
                return t((function() {
                    Io(n) && To(e)
                }
                ))
            }
            function Io(e) {
                var n = e.getSnapshot;
                e = e.value;
                try {
                    var t = n();
                    return !lr(e, t)
                } catch (r) {
                    return !0
                }
            }
            function To(e) {
                var n = Pi(e, 1);
                null !== n && tu(n, e, 1, -1)
            }
            function Do(e) {
                var n = yo();
                return "function" === typeof e && (e = e()),
                n.memoizedState = n.baseState = e,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: wo,
                    lastRenderedState: e
                },
                n.queue = e,
                e = e.dispatch = $o.bind(null, oo, e),
                [n.memoizedState, e]
            }
            function Ro(e, n, t, r) {
                return e = {
                    tag: e,
                    create: n,
                    destroy: t,
                    deps: r,
                    next: null
                },
                null === (n = oo.updateQueue) ? (n = {
                    lastEffect: null,
                    stores: null
                },
                oo.updateQueue = n,
                n.lastEffect = e.next = e) : null === (t = n.lastEffect) ? n.lastEffect = e.next = e : (r = t.next,
                t.next = e,
                e.next = r,
                n.lastEffect = e),
                e
            }
            function Ao() {
                return bo().memoizedState
            }
            function _o(e, n, t, r) {
                var a = yo();
                oo.flags |= e,
                a.memoizedState = Ro(1 | n, t, void 0, void 0 === r ? null : r)
            }
            function Po(e, n, t, r) {
                var a = bo();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== lo) {
                    var o = lo.memoizedState;
                    if (i = o.destroy,
                    null !== r && mo(r, o.deps))
                        return void (a.memoizedState = Ro(n, t, i, r))
                }
                oo.flags |= e,
                a.memoizedState = Ro(1 | n, t, i, r)
            }
            function Mo(e, n) {
                return _o(8390656, 8, e, n)
            }
            function Lo(e, n) {
                return Po(2048, 8, e, n)
            }
            function Oo(e, n) {
                return Po(4, 2, e, n)
            }
            function Uo(e, n) {
                return Po(4, 4, e, n)
            }
            function zo(e, n) {
                return "function" === typeof n ? (e = e(),
                n(e),
                function() {
                    n(null)
                }
                ) : null !== n && void 0 !== n ? (e = e(),
                n.current = e,
                function() {
                    n.current = null
                }
                ) : void 0
            }
            function Fo(e, n, t) {
                return t = null !== t && void 0 !== t ? t.concat([e]) : null,
                Po(4, 4, zo.bind(null, n, e), t)
            }
            function Ho() {}
            function qo(e, n) {
                var t = bo();
                n = void 0 === n ? null : n;
                var r = t.memoizedState;
                return null !== r && null !== n && mo(n, r[1]) ? r[0] : (t.memoizedState = [e, n],
                e)
            }
            function Wo(e, n) {
                var t = bo();
                n = void 0 === n ? null : n;
                var r = t.memoizedState;
                return null !== r && null !== n && mo(n, r[1]) ? r[0] : (e = e(),
                t.memoizedState = [e, n],
                e)
            }
            function Xo(e, n, t) {
                return 0 === (21 & io) ? (e.baseState && (e.baseState = !1,
                bl = !0),
                e.memoizedState = t) : (lr(t, n) || (t = gn(),
                oo.lanes |= t,
                Ls |= t,
                e.baseState = !0),
                n)
            }
            function Go(e, n) {
                var t = wn;
                wn = 0 !== t && 4 > t ? t : 4,
                e(!0);
                var r = ao.transition;
                ao.transition = {};
                try {
                    e(!1),
                    n()
                } finally {
                    wn = t,
                    ao.transition = r
                }
            }
            function Vo() {
                return bo().memoizedState
            }
            function Bo(e, n, t) {
                var r = nu(e);
                if (t = {
                    lane: r,
                    action: t,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                },
                Qo(e))
                    Yo(n, t);
                else if (null !== (t = _i(e, n, t, r))) {
                    tu(t, e, r, eu()),
                    Ko(t, n, r)
                }
            }
            function $o(e, n, t) {
                var r = nu(e)
                  , a = {
                    lane: r,
                    action: t,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (Qo(e))
                    Yo(n, a);
                else {
                    var i = e.alternate;
                    if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = n.lastRenderedReducer))
                        try {
                            var o = n.lastRenderedState
                              , l = i(o, t);
                            if (a.hasEagerState = !0,
                            a.eagerState = l,
                            lr(l, o)) {
                                var s = n.interleaved;
                                return null === s ? (a.next = a,
                                Ai(n)) : (a.next = s.next,
                                s.next = a),
                                void (n.interleaved = a)
                            }
                        } catch (u) {}
                    null !== (t = _i(e, n, a, r)) && (tu(t, e, r, a = eu()),
                    Ko(t, n, r))
                }
            }
            function Qo(e) {
                var n = e.alternate;
                return e === oo || null !== n && n === oo
            }
            function Yo(e, n) {
                co = uo = !0;
                var t = e.pending;
                null === t ? n.next = n : (n.next = t.next,
                t.next = n),
                e.pending = n
            }
            function Ko(e, n, t) {
                if (0 !== (4194240 & t)) {
                    var r = n.lanes;
                    t |= r &= e.pendingLanes,
                    n.lanes = t,
                    bn(e, t)
                }
            }
            var Jo = {
                readContext: Di,
                useCallback: ho,
                useContext: ho,
                useEffect: ho,
                useImperativeHandle: ho,
                useInsertionEffect: ho,
                useLayoutEffect: ho,
                useMemo: ho,
                useReducer: ho,
                useRef: ho,
                useState: ho,
                useDebugValue: ho,
                useDeferredValue: ho,
                useTransition: ho,
                useMutableSource: ho,
                useSyncExternalStore: ho,
                useId: ho,
                unstable_isNewReconciler: !1
            }
              , Zo = {
                readContext: Di,
                useCallback: function(e, n) {
                    return yo().memoizedState = [e, void 0 === n ? null : n],
                    e
                },
                useContext: Di,
                useEffect: Mo,
                useImperativeHandle: function(e, n, t) {
                    return t = null !== t && void 0 !== t ? t.concat([e]) : null,
                    _o(4194308, 4, zo.bind(null, n, e), t)
                },
                useLayoutEffect: function(e, n) {
                    return _o(4194308, 4, e, n)
                },
                useInsertionEffect: function(e, n) {
                    return _o(4, 2, e, n)
                },
                useMemo: function(e, n) {
                    var t = yo();
                    return n = void 0 === n ? null : n,
                    e = e(),
                    t.memoizedState = [e, n],
                    e
                },
                useReducer: function(e, n, t) {
                    var r = yo();
                    return n = void 0 !== t ? t(n) : n,
                    r.memoizedState = r.baseState = n,
                    e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: n
                    },
                    r.queue = e,
                    e = e.dispatch = Bo.bind(null, oo, e),
                    [r.memoizedState, e]
                },
                useRef: function(e) {
                    return e = {
                        current: e
                    },
                    yo().memoizedState = e
                },
                useState: Do,
                useDebugValue: Ho,
                useDeferredValue: function(e) {
                    return yo().memoizedState = e
                },
                useTransition: function() {
                    var e = Do(!1)
                      , n = e[0];
                    return e = Go.bind(null, e[1]),
                    yo().memoizedState = e,
                    [n, e]
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(e, n, t) {
                    var r = oo
                      , a = yo();
                    if (ai) {
                        if (void 0 === t)
                            throw Error(i(407));
                        t = t()
                    } else {
                        if (t = n(),
                        null === Ts)
                            throw Error(i(349));
                        0 !== (30 & io) || No(r, n, t)
                    }
                    a.memoizedState = t;
                    var o = {
                        value: t,
                        getSnapshot: n
                    };
                    return a.queue = o,
                    Mo(jo.bind(null, r, o, e), [e]),
                    r.flags |= 2048,
                    Ro(9, Co.bind(null, r, o, t, n), void 0, null),
                    t
                },
                useId: function() {
                    var e = yo()
                      , n = Ts.identifierPrefix;
                    if (ai) {
                        var t = Ka;
                        n = ":" + n + "R" + (t = (Ya & ~(1 << 32 - ln(Ya) - 1)).toString(32) + t),
                        0 < (t = fo++) && (n += "H" + t.toString(32)),
                        n += ":"
                    } else
                        n = ":" + n + "r" + (t = po++).toString(32) + ":";
                    return e.memoizedState = n
                },
                unstable_isNewReconciler: !1
            }
              , el = {
                readContext: Di,
                useCallback: qo,
                useContext: Di,
                useEffect: Lo,
                useImperativeHandle: Fo,
                useInsertionEffect: Oo,
                useLayoutEffect: Uo,
                useMemo: Wo,
                useReducer: xo,
                useRef: Ao,
                useState: function() {
                    return xo(wo)
                },
                useDebugValue: Ho,
                useDeferredValue: function(e) {
                    return Xo(bo(), lo.memoizedState, e)
                },
                useTransition: function() {
                    return [xo(wo)[0], bo().memoizedState]
                },
                useMutableSource: Eo,
                useSyncExternalStore: So,
                useId: Vo,
                unstable_isNewReconciler: !1
            }
              , nl = {
                readContext: Di,
                useCallback: qo,
                useContext: Di,
                useEffect: Lo,
                useImperativeHandle: Fo,
                useInsertionEffect: Oo,
                useLayoutEffect: Uo,
                useMemo: Wo,
                useReducer: ko,
                useRef: Ao,
                useState: function() {
                    return ko(wo)
                },
                useDebugValue: Ho,
                useDeferredValue: function(e) {
                    var n = bo();
                    return null === lo ? n.memoizedState = e : Xo(n, lo.memoizedState, e)
                },
                useTransition: function() {
                    return [ko(wo)[0], bo().memoizedState]
                },
                useMutableSource: Eo,
                useSyncExternalStore: So,
                useId: Vo,
                unstable_isNewReconciler: !1
            };
            function tl(e, n) {
                if (e && e.defaultProps) {
                    for (var t in n = O({}, n),
                    e = e.defaultProps)
                        void 0 === n[t] && (n[t] = e[t]);
                    return n
                }
                return n
            }
            function rl(e, n, t, r) {
                t = null === (t = t(r, n = e.memoizedState)) || void 0 === t ? n : O({}, n, t),
                e.memoizedState = t,
                0 === e.lanes && (e.updateQueue.baseState = t)
            }
            var al = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && qe(e) === e
                },
                enqueueSetState: function(e, n, t) {
                    e = e._reactInternals;
                    var r = eu()
                      , a = nu(e)
                      , i = Ui(r, a);
                    i.payload = n,
                    void 0 !== t && null !== t && (i.callback = t),
                    null !== (n = zi(e, i, a)) && (tu(n, e, a, r),
                    Fi(n, e, a))
                },
                enqueueReplaceState: function(e, n, t) {
                    e = e._reactInternals;
                    var r = eu()
                      , a = nu(e)
                      , i = Ui(r, a);
                    i.tag = 1,
                    i.payload = n,
                    void 0 !== t && null !== t && (i.callback = t),
                    null !== (n = zi(e, i, a)) && (tu(n, e, a, r),
                    Fi(n, e, a))
                },
                enqueueForceUpdate: function(e, n) {
                    e = e._reactInternals;
                    var t = eu()
                      , r = nu(e)
                      , a = Ui(t, r);
                    a.tag = 2,
                    void 0 !== n && null !== n && (a.callback = n),
                    null !== (n = zi(e, a, r)) && (tu(n, e, r, t),
                    Fi(n, e, r))
                }
            };
            function il(e, n, t, r, a, i, o) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !n.prototype || !n.prototype.isPureReactComponent || (!sr(t, r) || !sr(a, i))
            }
            function ol(e, n, t) {
                var r = !1
                  , a = ja
                  , i = n.contextType;
                return "object" === typeof i && null !== i ? i = Di(i) : (a = Aa(n) ? Da : Ia.current,
                i = (r = null !== (r = n.contextTypes) && void 0 !== r) ? Ra(e, a) : ja),
                n = new n(t,i),
                e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null,
                n.updater = al,
                e.stateNode = n,
                n._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a,
                e.__reactInternalMemoizedMaskedChildContext = i),
                n
            }
            function ll(e, n, t, r) {
                e = n.state,
                "function" === typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r),
                "function" === typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r),
                n.state !== e && al.enqueueReplaceState(n, n.state, null)
            }
            function sl(e, n, t, r) {
                var a = e.stateNode;
                a.props = t,
                a.state = e.memoizedState,
                a.refs = {},
                Li(e);
                var i = n.contextType;
                "object" === typeof i && null !== i ? a.context = Di(i) : (i = Aa(n) ? Da : Ia.current,
                a.context = Ra(e, i)),
                a.state = e.memoizedState,
                "function" === typeof (i = n.getDerivedStateFromProps) && (rl(e, n, i, t),
                a.state = e.memoizedState),
                "function" === typeof n.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (n = a.state,
                "function" === typeof a.componentWillMount && a.componentWillMount(),
                "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
                n !== a.state && al.enqueueReplaceState(a, a.state, null),
                qi(e, t, a, r),
                a.state = e.memoizedState),
                "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }
            function ul(e, n) {
                try {
                    var t = ""
                      , r = n;
                    do {
                        t += H(r),
                        r = r.return
                    } while (r);
                    var a = t
                } catch (i) {
                    a = "\nError generating stack: " + i.message + "\n" + i.stack
                }
                return {
                    value: e,
                    source: n,
                    stack: a,
                    digest: null
                }
            }
            function cl(e, n, t) {
                return {
                    value: e,
                    source: null,
                    stack: null != t ? t : null,
                    digest: null != n ? n : null
                }
            }
            function dl(e, n) {
                try {
                    console.error(n.value)
                } catch (t) {
                    setTimeout((function() {
                        throw t
                    }
                    ))
                }
            }
            var fl = "function" === typeof WeakMap ? WeakMap : Map;
            function pl(e, n, t) {
                (t = Ui(-1, t)).tag = 3,
                t.payload = {
                    element: null
                };
                var r = n.value;
                return t.callback = function() {
                    Xs || (Xs = !0,
                    Gs = r),
                    dl(0, n)
                }
                ,
                t
            }
            function hl(e, n, t) {
                (t = Ui(-1, t)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = n.value;
                    t.payload = function() {
                        return r(a)
                    }
                    ,
                    t.callback = function() {
                        dl(0, n)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" === typeof i.componentDidCatch && (t.callback = function() {
                    dl(0, n),
                    "function" !== typeof r && (null === Vs ? Vs = new Set([this]) : Vs.add(this));
                    var e = n.stack;
                    this.componentDidCatch(n.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                t
            }
            function ml(e, n, t) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new fl;
                    var a = new Set;
                    r.set(n, a)
                } else
                    void 0 === (a = r.get(n)) && (a = new Set,
                    r.set(n, a));
                a.has(t) || (a.add(t),
                e = Nu.bind(null, e, n, t),
                n.then(e, e))
            }
            function gl(e) {
                do {
                    var n;
                    if ((n = 13 === e.tag) && (n = null === (n = e.memoizedState) || null !== n.dehydrated),
                    n)
                        return e;
                    e = e.return
                } while (null !== e);
                return null
            }
            function vl(e, n, t, r, a) {
                return 0 === (1 & e.mode) ? (e === n ? e.flags |= 65536 : (e.flags |= 128,
                t.flags |= 131072,
                t.flags &= -52805,
                1 === t.tag && (null === t.alternate ? t.tag = 17 : ((n = Ui(-1, 1)).tag = 2,
                zi(t, n, 1))),
                t.lanes |= 1),
                e) : (e.flags |= 65536,
                e.lanes = a,
                e)
            }
            var yl = w.ReactCurrentOwner
              , bl = !1;
            function wl(e, n, t, r) {
                n.child = null === e ? xi(n, null, t, r) : wi(n, e.child, t, r)
            }
            function xl(e, n, t, r, a) {
                t = t.render;
                var i = n.ref;
                return Ti(n, a),
                r = go(e, n, t, r, i, a),
                t = vo(),
                null === e || bl ? (ai && t && ei(n),
                n.flags |= 1,
                wl(e, n, r, a),
                n.child) : (n.updateQueue = e.updateQueue,
                n.flags &= -2053,
                e.lanes &= ~a,
                Xl(e, n, a))
            }
            function kl(e, n, t, r, a) {
                if (null === e) {
                    var i = t.type;
                    return "function" !== typeof i || Au(i) || void 0 !== i.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = Pu(t.type, null, r, n, n.mode, a)).ref = n.ref,
                    e.return = n,
                    n.child = e) : (n.tag = 15,
                    n.type = i,
                    El(e, n, i, r, a))
                }
                if (i = e.child,
                0 === (e.lanes & a)) {
                    var o = i.memoizedProps;
                    if ((t = null !== (t = t.compare) ? t : sr)(o, r) && e.ref === n.ref)
                        return Xl(e, n, a)
                }
                return n.flags |= 1,
                (e = _u(i, r)).ref = n.ref,
                e.return = n,
                n.child = e
            }
            function El(e, n, t, r, a) {
                if (null !== e) {
                    var i = e.memoizedProps;
                    if (sr(i, r) && e.ref === n.ref) {
                        if (bl = !1,
                        n.pendingProps = r = i,
                        0 === (e.lanes & a))
                            return n.lanes = e.lanes,
                            Xl(e, n, a);
                        0 !== (131072 & e.flags) && (bl = !0)
                    }
                }
                return Cl(e, n, t, r, a)
            }
            function Sl(e, n, t) {
                var r = n.pendingProps
                  , a = r.children
                  , i = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & n.mode))
                        n.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        Ca(_s, As),
                        As |= t;
                    else {
                        if (0 === (1073741824 & t))
                            return e = null !== i ? i.baseLanes | t : t,
                            n.lanes = n.childLanes = 1073741824,
                            n.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            },
                            n.updateQueue = null,
                            Ca(_s, As),
                            As |= e,
                            null;
                        n.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        },
                        r = null !== i ? i.baseLanes : t,
                        Ca(_s, As),
                        As |= r
                    }
                else
                    null !== i ? (r = i.baseLanes | t,
                    n.memoizedState = null) : r = t,
                    Ca(_s, As),
                    As |= r;
                return wl(e, n, a, t),
                n.child
            }
            function Nl(e, n) {
                var t = n.ref;
                (null === e && null !== t || null !== e && e.ref !== t) && (n.flags |= 512,
                n.flags |= 2097152)
            }
            function Cl(e, n, t, r, a) {
                var i = Aa(t) ? Da : Ia.current;
                return i = Ra(n, i),
                Ti(n, a),
                t = go(e, n, t, r, i, a),
                r = vo(),
                null === e || bl ? (ai && r && ei(n),
                n.flags |= 1,
                wl(e, n, t, a),
                n.child) : (n.updateQueue = e.updateQueue,
                n.flags &= -2053,
                e.lanes &= ~a,
                Xl(e, n, a))
            }
            function jl(e, n, t, r, a) {
                if (Aa(t)) {
                    var i = !0;
                    La(n)
                } else
                    i = !1;
                if (Ti(n, a),
                null === n.stateNode)
                    Wl(e, n),
                    ol(n, t, r),
                    sl(n, t, r, a),
                    r = !0;
                else if (null === e) {
                    var o = n.stateNode
                      , l = n.memoizedProps;
                    o.props = l;
                    var s = o.context
                      , u = t.contextType;
                    "object" === typeof u && null !== u ? u = Di(u) : u = Ra(n, u = Aa(t) ? Da : Ia.current);
                    var c = t.getDerivedStateFromProps
                      , d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                    d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== r || s !== u) && ll(n, o, r, u),
                    Mi = !1;
                    var f = n.memoizedState;
                    o.state = f,
                    qi(n, r, o, a),
                    s = n.memoizedState,
                    l !== r || f !== s || Ta.current || Mi ? ("function" === typeof c && (rl(n, t, c, r),
                    s = n.memoizedState),
                    (l = Mi || il(n, t, l, r, f, s, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(),
                    "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                    "function" === typeof o.componentDidMount && (n.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (n.flags |= 4194308),
                    n.memoizedProps = r,
                    n.memoizedState = s),
                    o.props = r,
                    o.state = s,
                    o.context = u,
                    r = l) : ("function" === typeof o.componentDidMount && (n.flags |= 4194308),
                    r = !1)
                } else {
                    o = n.stateNode,
                    Oi(e, n),
                    l = n.memoizedProps,
                    u = n.type === n.elementType ? l : tl(n.type, l),
                    o.props = u,
                    d = n.pendingProps,
                    f = o.context,
                    "object" === typeof (s = t.contextType) && null !== s ? s = Di(s) : s = Ra(n, s = Aa(t) ? Da : Ia.current);
                    var p = t.getDerivedStateFromProps;
                    (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== d || f !== s) && ll(n, o, r, s),
                    Mi = !1,
                    f = n.memoizedState,
                    o.state = f,
                    qi(n, r, o, a);
                    var h = n.memoizedState;
                    l !== d || f !== h || Ta.current || Mi ? ("function" === typeof p && (rl(n, t, p, r),
                    h = n.memoizedState),
                    (u = Mi || il(n, t, u, r, f, h, s) || !1) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, h, s),
                    "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate && (n.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate && (n.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 1024),
                    n.memoizedProps = r,
                    n.memoizedState = h),
                    o.props = r,
                    o.state = h,
                    o.context = s,
                    r = u) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (n.flags |= 1024),
                    r = !1)
                }
                return Il(e, n, t, r, i, a)
            }
            function Il(e, n, t, r, a, i) {
                Nl(e, n);
                var o = 0 !== (128 & n.flags);
                if (!r && !o)
                    return a && Oa(n, t, !1),
                    Xl(e, n, i);
                r = n.stateNode,
                yl.current = n;
                var l = o && "function" !== typeof t.getDerivedStateFromError ? null : r.render();
                return n.flags |= 1,
                null !== e && o ? (n.child = wi(n, e.child, null, i),
                n.child = wi(n, null, l, i)) : wl(e, n, l, i),
                n.memoizedState = r.state,
                a && Oa(n, t, !0),
                n.child
            }
            function Tl(e) {
                var n = e.stateNode;
                n.pendingContext ? Pa(0, n.pendingContext, n.pendingContext !== n.context) : n.context && Pa(0, n.context, !1),
                Qi(e, n.containerInfo)
            }
            function Dl(e, n, t, r, a) {
                return pi(),
                hi(a),
                n.flags |= 256,
                wl(e, n, t, r),
                n.child
            }
            var Rl, Al, _l, Pl, Ml = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function Ll(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }
            function Ol(e, n, t) {
                var r, a = n.pendingProps, o = Zi.current, l = !1, s = 0 !== (128 & n.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
                r ? (l = !0,
                n.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1),
                Ca(Zi, 1 & o),
                null === e)
                    return ui(n),
                    null !== (e = n.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & n.mode) ? n.lanes = 1 : "$!" === e.data ? n.lanes = 8 : n.lanes = 1073741824,
                    null) : (s = a.children,
                    e = a.fallback,
                    l ? (a = n.mode,
                    l = n.child,
                    s = {
                        mode: "hidden",
                        children: s
                    },
                    0 === (1 & a) && null !== l ? (l.childLanes = 0,
                    l.pendingProps = s) : l = Lu(s, a, 0, null),
                    e = Mu(e, a, t, null),
                    l.return = n,
                    e.return = n,
                    l.sibling = e,
                    n.child = l,
                    n.child.memoizedState = Ll(t),
                    n.memoizedState = Ml,
                    e) : Ul(n, s));
                if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
                    return function(e, n, t, r, a, o, l) {
                        if (t)
                            return 256 & n.flags ? (n.flags &= -257,
                            zl(e, n, l, r = cl(Error(i(422))))) : null !== n.memoizedState ? (n.child = e.child,
                            n.flags |= 128,
                            null) : (o = r.fallback,
                            a = n.mode,
                            r = Lu({
                                mode: "visible",
                                children: r.children
                            }, a, 0, null),
                            (o = Mu(o, a, l, null)).flags |= 2,
                            r.return = n,
                            o.return = n,
                            r.sibling = o,
                            n.child = r,
                            0 !== (1 & n.mode) && wi(n, e.child, null, l),
                            n.child.memoizedState = Ll(l),
                            n.memoizedState = Ml,
                            o);
                        if (0 === (1 & n.mode))
                            return zl(e, n, l, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset)
                                var s = r.dgst;
                            return r = s,
                            zl(e, n, l, r = cl(o = Error(i(419)), r, void 0))
                        }
                        if (s = 0 !== (l & e.childLanes),
                        bl || s) {
                            if (null !== (r = Ts)) {
                                switch (l & -l) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a,
                                Pi(e, a),
                                tu(r, e, a, -1))
                            }
                            return mu(),
                            zl(e, n, l, r = cl(Error(i(421))))
                        }
                        return "$?" === a.data ? (n.flags |= 128,
                        n.child = e.child,
                        n = ju.bind(null, e),
                        a._reactRetry = n,
                        null) : (e = o.treeContext,
                        ri = ua(a.nextSibling),
                        ti = n,
                        ai = !0,
                        ii = null,
                        null !== e && (Ba[$a++] = Ya,
                        Ba[$a++] = Ka,
                        Ba[$a++] = Qa,
                        Ya = e.id,
                        Ka = e.overflow,
                        Qa = n),
                        n = Ul(n, r.children),
                        n.flags |= 4096,
                        n)
                    }(e, n, s, a, r, o, t);
                if (l) {
                    l = a.fallback,
                    s = n.mode,
                    r = (o = e.child).sibling;
                    var u = {
                        mode: "hidden",
                        children: a.children
                    };
                    return 0 === (1 & s) && n.child !== o ? ((a = n.child).childLanes = 0,
                    a.pendingProps = u,
                    n.deletions = null) : (a = _u(o, u)).subtreeFlags = 14680064 & o.subtreeFlags,
                    null !== r ? l = _u(r, l) : (l = Mu(l, s, t, null)).flags |= 2,
                    l.return = n,
                    a.return = n,
                    a.sibling = l,
                    n.child = a,
                    a = l,
                    l = n.child,
                    s = null === (s = e.child.memoizedState) ? Ll(t) : {
                        baseLanes: s.baseLanes | t,
                        cachePool: null,
                        transitions: s.transitions
                    },
                    l.memoizedState = s,
                    l.childLanes = e.childLanes & ~t,
                    n.memoizedState = Ml,
                    a
                }
                return e = (l = e.child).sibling,
                a = _u(l, {
                    mode: "visible",
                    children: a.children
                }),
                0 === (1 & n.mode) && (a.lanes = t),
                a.return = n,
                a.sibling = null,
                null !== e && (null === (t = n.deletions) ? (n.deletions = [e],
                n.flags |= 16) : t.push(e)),
                n.child = a,
                n.memoizedState = null,
                a
            }
            function Ul(e, n) {
                return (n = Lu({
                    mode: "visible",
                    children: n
                }, e.mode, 0, null)).return = e,
                e.child = n
            }
            function zl(e, n, t, r) {
                return null !== r && hi(r),
                wi(n, e.child, null, t),
                (e = Ul(n, n.pendingProps.children)).flags |= 2,
                n.memoizedState = null,
                e
            }
            function Fl(e, n, t) {
                e.lanes |= n;
                var r = e.alternate;
                null !== r && (r.lanes |= n),
                Ii(e.return, n, t)
            }
            function Hl(e, n, t, r, a) {
                var i = e.memoizedState;
                null === i ? e.memoizedState = {
                    isBackwards: n,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: t,
                    tailMode: a
                } : (i.isBackwards = n,
                i.rendering = null,
                i.renderingStartTime = 0,
                i.last = r,
                i.tail = t,
                i.tailMode = a)
            }
            function ql(e, n, t) {
                var r = n.pendingProps
                  , a = r.revealOrder
                  , i = r.tail;
                if (wl(e, n, r.children, t),
                0 !== (2 & (r = Zi.current)))
                    r = 1 & r | 2,
                    n.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags))
                        e: for (e = n.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && Fl(e, t, n);
                            else if (19 === e.tag)
                                Fl(e, t, n);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === n)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === n)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (Ca(Zi, r),
                0 === (1 & n.mode))
                    n.memoizedState = null;
                else
                    switch (a) {
                    case "forwards":
                        for (t = n.child,
                        a = null; null !== t; )
                            null !== (e = t.alternate) && null === eo(e) && (a = t),
                            t = t.sibling;
                        null === (t = a) ? (a = n.child,
                        n.child = null) : (a = t.sibling,
                        t.sibling = null),
                        Hl(n, !1, a, t, i);
                        break;
                    case "backwards":
                        for (t = null,
                        a = n.child,
                        n.child = null; null !== a; ) {
                            if (null !== (e = a.alternate) && null === eo(e)) {
                                n.child = a;
                                break
                            }
                            e = a.sibling,
                            a.sibling = t,
                            t = a,
                            a = e
                        }
                        Hl(n, !0, t, null, i);
                        break;
                    case "together":
                        Hl(n, !1, null, null, void 0);
                        break;
                    default:
                        n.memoizedState = null
                    }
                return n.child
            }
            function Wl(e, n) {
                0 === (1 & n.mode) && null !== e && (e.alternate = null,
                n.alternate = null,
                n.flags |= 2)
            }
            function Xl(e, n, t) {
                if (null !== e && (n.dependencies = e.dependencies),
                Ls |= n.lanes,
                0 === (t & n.childLanes))
                    return null;
                if (null !== e && n.child !== e.child)
                    throw Error(i(153));
                if (null !== n.child) {
                    for (t = _u(e = n.child, e.pendingProps),
                    n.child = t,
                    t.return = n; null !== e.sibling; )
                        e = e.sibling,
                        (t = t.sibling = _u(e, e.pendingProps)).return = n;
                    t.sibling = null
                }
                return n.child
            }
            function Gl(e, n) {
                if (!ai)
                    switch (e.tailMode) {
                    case "hidden":
                        n = e.tail;
                        for (var t = null; null !== n; )
                            null !== n.alternate && (t = n),
                            n = n.sibling;
                        null === t ? e.tail = null : t.sibling = null;
                        break;
                    case "collapsed":
                        t = e.tail;
                        for (var r = null; null !== t; )
                            null !== t.alternate && (r = t),
                            t = t.sibling;
                        null === r ? n || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function Vl(e) {
                var n = null !== e.alternate && e.alternate.child === e.child
                  , t = 0
                  , r = 0;
                if (n)
                    for (var a = e.child; null !== a; )
                        t |= a.lanes | a.childLanes,
                        r |= 14680064 & a.subtreeFlags,
                        r |= 14680064 & a.flags,
                        a.return = e,
                        a = a.sibling;
                else
                    for (a = e.child; null !== a; )
                        t |= a.lanes | a.childLanes,
                        r |= a.subtreeFlags,
                        r |= a.flags,
                        a.return = e,
                        a = a.sibling;
                return e.subtreeFlags |= r,
                e.childLanes = t,
                n
            }
            function Bl(e, n, t) {
                var r = n.pendingProps;
                switch (ni(n),
                n.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Vl(n),
                    null;
                case 1:
                case 17:
                    return Aa(n.type) && _a(),
                    Vl(n),
                    null;
                case 3:
                    return r = n.stateNode,
                    Yi(),
                    Na(Ta),
                    Na(Ia),
                    to(),
                    r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (di(n) ? n.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & n.flags) || (n.flags |= 1024,
                    null !== ii && (ou(ii),
                    ii = null))),
                    Al(e, n),
                    Vl(n),
                    null;
                case 5:
                    Ji(n);
                    var a = $i(Bi.current);
                    if (t = n.type,
                    null !== e && null != n.stateNode)
                        _l(e, n, t, r, a),
                        e.ref !== n.ref && (n.flags |= 512,
                        n.flags |= 2097152);
                    else {
                        if (!r) {
                            if (null === n.stateNode)
                                throw Error(i(166));
                            return Vl(n),
                            null
                        }
                        if (e = $i(Gi.current),
                        di(n)) {
                            r = n.stateNode,
                            t = n.type;
                            var o = n.memoizedProps;
                            switch (r[fa] = n,
                            r[pa] = o,
                            e = 0 !== (1 & n.mode),
                            t) {
                            case "dialog":
                                zr("cancel", r),
                                zr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                zr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Mr.length; a++)
                                    zr(Mr[a], r);
                                break;
                            case "source":
                                zr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                zr("error", r),
                                zr("load", r);
                                break;
                            case "details":
                                zr("toggle", r);
                                break;
                            case "input":
                                Y(r, o),
                                zr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!o.multiple
                                },
                                zr("invalid", r);
                                break;
                            case "textarea":
                                ae(r, o),
                                zr("invalid", r)
                            }
                            for (var s in ye(t, o),
                            a = null,
                            o)
                                if (o.hasOwnProperty(s)) {
                                    var u = o[s];
                                    "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, u, e),
                                    a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== o.suppressHydrationWarning && Jr(r.textContent, u, e),
                                    a = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && zr("scroll", r)
                                }
                            switch (t) {
                            case "input":
                                V(r),
                                Z(r, o, !0);
                                break;
                            case "textarea":
                                V(r),
                                oe(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof o.onClick && (r.onclick = Zr)
                            }
                            r = a,
                            n.updateQueue = r,
                            null !== r && (n.flags |= 4)
                        } else {
                            s = 9 === a.nodeType ? a : a.ownerDocument,
                            "http://www.w3.org/1999/xhtml" === e && (e = le(t)),
                            "http://www.w3.org/1999/xhtml" === e ? "script" === t ? ((e = s.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(t, {
                                is: r.is
                            }) : (e = s.createElement(t),
                            "select" === t && (s = e,
                            r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, t),
                            e[fa] = n,
                            e[pa] = r,
                            Rl(e, n, !1, !1),
                            n.stateNode = e;
                            e: {
                                switch (s = be(t, r),
                                t) {
                                case "dialog":
                                    zr("cancel", e),
                                    zr("close", e),
                                    a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    zr("load", e),
                                    a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Mr.length; a++)
                                        zr(Mr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    zr("error", e),
                                    a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    zr("error", e),
                                    zr("load", e),
                                    a = r;
                                    break;
                                case "details":
                                    zr("toggle", e),
                                    a = r;
                                    break;
                                case "input":
                                    Y(e, r),
                                    a = Q(e, r),
                                    zr("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    },
                                    a = O({}, r, {
                                        value: void 0
                                    }),
                                    zr("invalid", e);
                                    break;
                                case "textarea":
                                    ae(e, r),
                                    a = re(e, r),
                                    zr("invalid", e)
                                }
                                for (o in ye(t, a),
                                u = a)
                                    if (u.hasOwnProperty(o)) {
                                        var c = u[o];
                                        "style" === o ? ge(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" === typeof c ? ("textarea" !== t || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (l.hasOwnProperty(o) ? null != c && "onScroll" === o && zr("scroll", e) : null != c && b(e, o, c, s))
                                    }
                                switch (t) {
                                case "input":
                                    V(e),
                                    Z(e, r, !1);
                                    break;
                                case "textarea":
                                    V(e),
                                    oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + X(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple,
                                    null != (o = r.value) ? te(e, !!r.multiple, o, !1) : null != r.defaultValue && te(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" === typeof a.onClick && (e.onclick = Zr)
                                }
                                switch (t) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                                }
                            }
                            r && (n.flags |= 4)
                        }
                        null !== n.ref && (n.flags |= 512,
                        n.flags |= 2097152)
                    }
                    return Vl(n),
                    null;
                case 6:
                    if (e && null != n.stateNode)
                        Pl(e, n, e.memoizedProps, r);
                    else {
                        if ("string" !== typeof r && null === n.stateNode)
                            throw Error(i(166));
                        if (t = $i(Bi.current),
                        $i(Gi.current),
                        di(n)) {
                            if (r = n.stateNode,
                            t = n.memoizedProps,
                            r[fa] = n,
                            (o = r.nodeValue !== t) && null !== (e = ti))
                                switch (e.tag) {
                                case 3:
                                    Jr(r.nodeValue, t, 0 !== (1 & e.mode));
                                    break;
                                case 5:
                                    !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, t, 0 !== (1 & e.mode))
                                }
                            o && (n.flags |= 4)
                        } else
                            (r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[fa] = n,
                            n.stateNode = r
                    }
                    return Vl(n),
                    null;
                case 13:
                    if (Na(Zi),
                    r = n.memoizedState,
                    null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                        if (ai && null !== ri && 0 !== (1 & n.mode) && 0 === (128 & n.flags))
                            fi(),
                            pi(),
                            n.flags |= 98560,
                            o = !1;
                        else if (o = di(n),
                        null !== r && null !== r.dehydrated) {
                            if (null === e) {
                                if (!o)
                                    throw Error(i(318));
                                if (!(o = null !== (o = n.memoizedState) ? o.dehydrated : null))
                                    throw Error(i(317));
                                o[fa] = n
                            } else
                                pi(),
                                0 === (128 & n.flags) && (n.memoizedState = null),
                                n.flags |= 4;
                            Vl(n),
                            o = !1
                        } else
                            null !== ii && (ou(ii),
                            ii = null),
                            o = !0;
                        if (!o)
                            return 65536 & n.flags ? n : null
                    }
                    return 0 !== (128 & n.flags) ? (n.lanes = t,
                    n) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (n.child.flags |= 8192,
                    0 !== (1 & n.mode) && (null === e || 0 !== (1 & Zi.current) ? 0 === Ps && (Ps = 3) : mu())),
                    null !== n.updateQueue && (n.flags |= 4),
                    Vl(n),
                    null);
                case 4:
                    return Yi(),
                    Al(e, n),
                    null === e && qr(n.stateNode.containerInfo),
                    Vl(n),
                    null;
                case 10:
                    return ji(n.type._context),
                    Vl(n),
                    null;
                case 19:
                    if (Na(Zi),
                    null === (o = n.memoizedState))
                        return Vl(n),
                        null;
                    if (r = 0 !== (128 & n.flags),
                    null === (s = o.rendering))
                        if (r)
                            Gl(o, !1);
                        else {
                            if (0 !== Ps || null !== e && 0 !== (128 & e.flags))
                                for (e = n.child; null !== e; ) {
                                    if (null !== (s = eo(e))) {
                                        for (n.flags |= 128,
                                        Gl(o, !1),
                                        null !== (r = s.updateQueue) && (n.updateQueue = r,
                                        n.flags |= 4),
                                        n.subtreeFlags = 0,
                                        r = t,
                                        t = n.child; null !== t; )
                                            e = r,
                                            (o = t).flags &= 14680066,
                                            null === (s = o.alternate) ? (o.childLanes = 0,
                                            o.lanes = e,
                                            o.child = null,
                                            o.subtreeFlags = 0,
                                            o.memoizedProps = null,
                                            o.memoizedState = null,
                                            o.updateQueue = null,
                                            o.dependencies = null,
                                            o.stateNode = null) : (o.childLanes = s.childLanes,
                                            o.lanes = s.lanes,
                                            o.child = s.child,
                                            o.subtreeFlags = 0,
                                            o.deletions = null,
                                            o.memoizedProps = s.memoizedProps,
                                            o.memoizedState = s.memoizedState,
                                            o.updateQueue = s.updateQueue,
                                            o.type = s.type,
                                            e = s.dependencies,
                                            o.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            t = t.sibling;
                                        return Ca(Zi, 1 & Zi.current | 2),
                                        n.child
                                    }
                                    e = e.sibling
                                }
                            null !== o.tail && Ke() > qs && (n.flags |= 128,
                            r = !0,
                            Gl(o, !1),
                            n.lanes = 4194304)
                        }
                    else {
                        if (!r)
                            if (null !== (e = eo(s))) {
                                if (n.flags |= 128,
                                r = !0,
                                null !== (t = e.updateQueue) && (n.updateQueue = t,
                                n.flags |= 4),
                                Gl(o, !0),
                                null === o.tail && "hidden" === o.tailMode && !s.alternate && !ai)
                                    return Vl(n),
                                    null
                            } else
                                2 * Ke() - o.renderingStartTime > qs && 1073741824 !== t && (n.flags |= 128,
                                r = !0,
                                Gl(o, !1),
                                n.lanes = 4194304);
                        o.isBackwards ? (s.sibling = n.child,
                        n.child = s) : (null !== (t = o.last) ? t.sibling = s : n.child = s,
                        o.last = s)
                    }
                    return null !== o.tail ? (n = o.tail,
                    o.rendering = n,
                    o.tail = n.sibling,
                    o.renderingStartTime = Ke(),
                    n.sibling = null,
                    t = Zi.current,
                    Ca(Zi, r ? 1 & t | 2 : 1 & t),
                    n) : (Vl(n),
                    null);
                case 22:
                case 23:
                    return du(),
                    r = null !== n.memoizedState,
                    null !== e && null !== e.memoizedState !== r && (n.flags |= 8192),
                    r && 0 !== (1 & n.mode) ? 0 !== (1073741824 & As) && (Vl(n),
                    6 & n.subtreeFlags && (n.flags |= 8192)) : Vl(n),
                    null;
                case 24:
                case 25:
                    return null
                }
                throw Error(i(156, n.tag))
            }
            function $l(e, n) {
                switch (ni(n),
                n.tag) {
                case 1:
                    return Aa(n.type) && _a(),
                    65536 & (e = n.flags) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 3:
                    return Yi(),
                    Na(Ta),
                    Na(Ia),
                    to(),
                    0 !== (65536 & (e = n.flags)) && 0 === (128 & e) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 5:
                    return Ji(n),
                    null;
                case 13:
                    if (Na(Zi),
                    null !== (e = n.memoizedState) && null !== e.dehydrated) {
                        if (null === n.alternate)
                            throw Error(i(340));
                        pi()
                    }
                    return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128,
                    n) : null;
                case 19:
                    return Na(Zi),
                    null;
                case 4:
                    return Yi(),
                    null;
                case 10:
                    return ji(n.type._context),
                    null;
                case 22:
                case 23:
                    return du(),
                    null;
                default:
                    return null
                }
            }
            Rl = function(e, n) {
                for (var t = n.child; null !== t; ) {
                    if (5 === t.tag || 6 === t.tag)
                        e.appendChild(t.stateNode);
                    else if (4 !== t.tag && null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === n)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === n)
                            return;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            }
            ,
            Al = function() {}
            ,
            _l = function(e, n, t, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = n.stateNode,
                    $i(Gi.current);
                    var i, o = null;
                    switch (t) {
                    case "input":
                        a = Q(e, a),
                        r = Q(e, r),
                        o = [];
                        break;
                    case "select":
                        a = O({}, a, {
                            value: void 0
                        }),
                        r = O({}, r, {
                            value: void 0
                        }),
                        o = [];
                        break;
                    case "textarea":
                        a = re(e, a),
                        r = re(e, r),
                        o = [];
                        break;
                    default:
                        "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                    }
                    for (c in ye(t, r),
                    t = null,
                    a)
                        if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                            if ("style" === c) {
                                var s = a[c];
                                for (i in s)
                                    s.hasOwnProperty(i) && (t || (t = {}),
                                    t[i] = "")
                            } else
                                "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != a ? a[c] : void 0,
                        r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                            if ("style" === c)
                                if (s) {
                                    for (i in s)
                                        !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (t || (t = {}),
                                        t[i] = "");
                                    for (i in u)
                                        u.hasOwnProperty(i) && s[i] !== u[i] && (t || (t = {}),
                                        t[i] = u[i])
                                } else
                                    t || (o || (o = []),
                                    o.push(c, t)),
                                    t = u;
                            else
                                "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0,
                                s = s ? s.__html : void 0,
                                null != u && s !== u && (o = o || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (o = o || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && zr("scroll", e),
                                o || s === u || (o = [])) : (o = o || []).push(c, u))
                    }
                    t && (o = o || []).push("style", t);
                    var c = o;
                    (n.updateQueue = c) && (n.flags |= 4)
                }
            }
            ,
            Pl = function(e, n, t, r) {
                t !== r && (n.flags |= 4)
            }
            ;
            var Ql = !1
              , Yl = !1
              , Kl = "function" === typeof WeakSet ? WeakSet : Set
              , Jl = null;
            function Zl(e, n) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t)
                        try {
                            t(null)
                        } catch (r) {
                            Su(e, n, r)
                        }
                    else
                        t.current = null
            }
            function es(e, n, t) {
                try {
                    t()
                } catch (r) {
                    Su(e, n, r)
                }
            }
            var ns = !1;
            function ts(e, n, t) {
                var r = n.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var i = a.destroy;
                            a.destroy = void 0,
                            void 0 !== i && es(n, t, i)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }
            function rs(e, n) {
                if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                    var t = n = n.next;
                    do {
                        if ((t.tag & e) === e) {
                            var r = t.create;
                            t.destroy = r()
                        }
                        t = t.next
                    } while (t !== n)
                }
            }
            function as(e) {
                var n = e.ref;
                if (null !== n) {
                    var t = e.stateNode;
                    e.tag,
                    e = t,
                    "function" === typeof n ? n(e) : n.current = e
                }
            }
            function is(e) {
                var n = e.alternate;
                null !== n && (e.alternate = null,
                is(n)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                5 === e.tag && (null !== (n = e.stateNode) && (delete n[fa],
                delete n[pa],
                delete n[ma],
                delete n[ga],
                delete n[va])),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
            }
            function os(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function ls(e) {
                e: for (; ; ) {
                    for (; null === e.sibling; ) {
                        if (null === e.return || os(e.return))
                            return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return,
                    e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
                        if (2 & e.flags)
                            continue e;
                        if (null === e.child || 4 === e.tag)
                            continue e;
                        e.child.return = e,
                        e = e.child
                    }
                    if (!(2 & e.flags))
                        return e.stateNode
                }
            }
            function ss(e, n, t) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    n ? 8 === t.nodeType ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e),
                    null !== (t = t._reactRootContainer) && void 0 !== t || null !== n.onclick || (n.onclick = Zr));
                else if (4 !== r && null !== (e = e.child))
                    for (ss(e, n, t),
                    e = e.sibling; null !== e; )
                        ss(e, n, t),
                        e = e.sibling
            }
            function us(e, n, t) {
                var r = e.tag;
                if (5 === r || 6 === r)
                    e = e.stateNode,
                    n ? t.insertBefore(e, n) : t.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (us(e, n, t),
                    e = e.sibling; null !== e; )
                        us(e, n, t),
                        e = e.sibling
            }
            var cs = null
              , ds = !1;
            function fs(e, n, t) {
                for (t = t.child; null !== t; )
                    ps(e, n, t),
                    t = t.sibling
            }
            function ps(e, n, t) {
                if (on && "function" === typeof on.onCommitFiberUnmount)
                    try {
                        on.onCommitFiberUnmount(an, t)
                    } catch (l) {}
                switch (t.tag) {
                case 5:
                    Yl || Zl(t, n);
                case 6:
                    var r = cs
                      , a = ds;
                    cs = null,
                    fs(e, n, t),
                    ds = a,
                    null !== (cs = r) && (ds ? (e = cs,
                    t = t.stateNode,
                    8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t)) : cs.removeChild(t.stateNode));
                    break;
                case 18:
                    null !== cs && (ds ? (e = cs,
                    t = t.stateNode,
                    8 === e.nodeType ? sa(e.parentNode, t) : 1 === e.nodeType && sa(e, t),
                    Wn(e)) : sa(cs, t.stateNode));
                    break;
                case 4:
                    r = cs,
                    a = ds,
                    cs = t.stateNode.containerInfo,
                    ds = !0,
                    fs(e, n, t),
                    cs = r,
                    ds = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    if (!Yl && (null !== (r = t.updateQueue) && null !== (r = r.lastEffect))) {
                        a = r = r.next;
                        do {
                            var i = a
                              , o = i.destroy;
                            i = i.tag,
                            void 0 !== o && (0 !== (2 & i) || 0 !== (4 & i)) && es(t, n, o),
                            a = a.next
                        } while (a !== r)
                    }
                    fs(e, n, t);
                    break;
                case 1:
                    if (!Yl && (Zl(t, n),
                    "function" === typeof (r = t.stateNode).componentWillUnmount))
                        try {
                            r.props = t.memoizedProps,
                            r.state = t.memoizedState,
                            r.componentWillUnmount()
                        } catch (l) {
                            Su(t, n, l)
                        }
                    fs(e, n, t);
                    break;
                case 21:
                    fs(e, n, t);
                    break;
                case 22:
                    1 & t.mode ? (Yl = (r = Yl) || null !== t.memoizedState,
                    fs(e, n, t),
                    Yl = r) : fs(e, n, t);
                    break;
                default:
                    fs(e, n, t)
                }
            }
            function hs(e) {
                var n = e.updateQueue;
                if (null !== n) {
                    e.updateQueue = null;
                    var t = e.stateNode;
                    null === t && (t = e.stateNode = new Kl),
                    n.forEach((function(n) {
                        var r = Iu.bind(null, e, n);
                        t.has(n) || (t.add(n),
                        n.then(r, r))
                    }
                    ))
                }
            }
            function ms(e, n) {
                var t = n.deletions;
                if (null !== t)
                    for (var r = 0; r < t.length; r++) {
                        var a = t[r];
                        try {
                            var o = e
                              , l = n
                              , s = l;
                            e: for (; null !== s; ) {
                                switch (s.tag) {
                                case 5:
                                    cs = s.stateNode,
                                    ds = !1;
                                    break e;
                                case 3:
                                case 4:
                                    cs = s.stateNode.containerInfo,
                                    ds = !0;
                                    break e
                                }
                                s = s.return
                            }
                            if (null === cs)
                                throw Error(i(160));
                            ps(o, l, a),
                            cs = null,
                            ds = !1;
                            var u = a.alternate;
                            null !== u && (u.return = null),
                            a.return = null
                        } catch (c) {
                            Su(a, n, c)
                        }
                    }
                if (12854 & n.subtreeFlags)
                    for (n = n.child; null !== n; )
                        gs(n, e),
                        n = n.sibling
            }
            function gs(e, n) {
                var t = e.alternate
                  , r = e.flags;
                switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    if (ms(n, e),
                    vs(e),
                    4 & r) {
                        try {
                            ts(3, e, e.return),
                            rs(3, e)
                        } catch (g) {
                            Su(e, e.return, g)
                        }
                        try {
                            ts(5, e, e.return)
                        } catch (g) {
                            Su(e, e.return, g)
                        }
                    }
                    break;
                case 1:
                    ms(n, e),
                    vs(e),
                    512 & r && null !== t && Zl(t, t.return);
                    break;
                case 5:
                    if (ms(n, e),
                    vs(e),
                    512 & r && null !== t && Zl(t, t.return),
                    32 & e.flags) {
                        var a = e.stateNode;
                        try {
                            fe(a, "")
                        } catch (g) {
                            Su(e, e.return, g)
                        }
                    }
                    if (4 & r && null != (a = e.stateNode)) {
                        var o = e.memoizedProps
                          , l = null !== t ? t.memoizedProps : o
                          , s = e.type
                          , u = e.updateQueue;
                        if (e.updateQueue = null,
                        null !== u)
                            try {
                                "input" === s && "radio" === o.type && null != o.name && K(a, o),
                                be(s, l);
                                var c = be(s, o);
                                for (l = 0; l < u.length; l += 2) {
                                    var d = u[l]
                                      , f = u[l + 1];
                                    "style" === d ? ge(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c)
                                }
                                switch (s) {
                                case "input":
                                    J(a, o);
                                    break;
                                case "textarea":
                                    ie(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var h = o.value;
                                    null != h ? te(a, !!o.multiple, h, !1) : p !== !!o.multiple && (null != o.defaultValue ? te(a, !!o.multiple, o.defaultValue, !0) : te(a, !!o.multiple, o.multiple ? [] : "", !1))
                                }
                                a[pa] = o
                            } catch (g) {
                                Su(e, e.return, g)
                            }
                    }
                    break;
                case 6:
                    if (ms(n, e),
                    vs(e),
                    4 & r) {
                        if (null === e.stateNode)
                            throw Error(i(162));
                        a = e.stateNode,
                        o = e.memoizedProps;
                        try {
                            a.nodeValue = o
                        } catch (g) {
                            Su(e, e.return, g)
                        }
                    }
                    break;
                case 3:
                    if (ms(n, e),
                    vs(e),
                    4 & r && null !== t && t.memoizedState.isDehydrated)
                        try {
                            Wn(n.containerInfo)
                        } catch (g) {
                            Su(e, e.return, g)
                        }
                    break;
                case 4:
                default:
                    ms(n, e),
                    vs(e);
                    break;
                case 13:
                    ms(n, e),
                    vs(e),
                    8192 & (a = e.child).flags && (o = null !== a.memoizedState,
                    a.stateNode.isHidden = o,
                    !o || null !== a.alternate && null !== a.alternate.memoizedState || (Hs = Ke())),
                    4 & r && hs(e);
                    break;
                case 22:
                    if (d = null !== t && null !== t.memoizedState,
                    1 & e.mode ? (Yl = (c = Yl) || d,
                    ms(n, e),
                    Yl = c) : ms(n, e),
                    vs(e),
                    8192 & r) {
                        if (c = null !== e.memoizedState,
                        (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                            for (Jl = e,
                            d = e.child; null !== d; ) {
                                for (f = Jl = d; null !== Jl; ) {
                                    switch (h = (p = Jl).child,
                                    p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ts(4, p, p.return);
                                        break;
                                    case 1:
                                        Zl(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" === typeof m.componentWillUnmount) {
                                            r = p,
                                            t = p.return;
                                            try {
                                                n = r,
                                                m.props = n.memoizedProps,
                                                m.state = n.memoizedState,
                                                m.componentWillUnmount()
                                            } catch (g) {
                                                Su(r, t, g)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Zl(p, p.return);
                                        break;
                                    case 22:
                                        if (null !== p.memoizedState) {
                                            xs(f);
                                            continue
                                        }
                                    }
                                    null !== h ? (h.return = p,
                                    Jl = h) : xs(f)
                                }
                                d = d.sibling
                            }
                        e: for (d = null,
                        f = e; ; ) {
                            if (5 === f.tag) {
                                if (null === d) {
                                    d = f;
                                    try {
                                        a = f.stateNode,
                                        c ? "function" === typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (s = f.stateNode,
                                        l = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null,
                                        s.style.display = me("display", l))
                                    } catch (g) {
                                        Su(e, e.return, g)
                                    }
                                }
                            } else if (6 === f.tag) {
                                if (null === d)
                                    try {
                                        f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                    } catch (g) {
                                        Su(e, e.return, g)
                                    }
                            } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                f.child.return = f,
                                f = f.child;
                                continue
                            }
                            if (f === e)
                                break e;
                            for (; null === f.sibling; ) {
                                if (null === f.return || f.return === e)
                                    break e;
                                d === f && (d = null),
                                f = f.return
                            }
                            d === f && (d = null),
                            f.sibling.return = f.return,
                            f = f.sibling
                        }
                    }
                    break;
                case 19:
                    ms(n, e),
                    vs(e),
                    4 & r && hs(e);
                case 21:
                }
            }
            function vs(e) {
                var n = e.flags;
                if (2 & n) {
                    try {
                        e: {
                            for (var t = e.return; null !== t; ) {
                                if (os(t)) {
                                    var r = t;
                                    break e
                                }
                                t = t.return
                            }
                            throw Error(i(160))
                        }
                        switch (r.tag) {
                        case 5:
                            var a = r.stateNode;
                            32 & r.flags && (fe(a, ""),
                            r.flags &= -33),
                            us(e, ls(e), a);
                            break;
                        case 3:
                        case 4:
                            var o = r.stateNode.containerInfo;
                            ss(e, ls(e), o);
                            break;
                        default:
                            throw Error(i(161))
                        }
                    } catch (l) {
                        Su(e, e.return, l)
                    }
                    e.flags &= -3
                }
                4096 & n && (e.flags &= -4097)
            }
            function ys(e, n, t) {
                Jl = e,
                bs(e, n, t)
            }
            function bs(e, n, t) {
                for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
                    var a = Jl
                      , i = a.child;
                    if (22 === a.tag && r) {
                        var o = null !== a.memoizedState || Ql;
                        if (!o) {
                            var l = a.alternate
                              , s = null !== l && null !== l.memoizedState || Yl;
                            l = Ql;
                            var u = Yl;
                            if (Ql = o,
                            (Yl = s) && !u)
                                for (Jl = a; null !== Jl; )
                                    s = (o = Jl).child,
                                    22 === o.tag && null !== o.memoizedState ? ks(a) : null !== s ? (s.return = o,
                                    Jl = s) : ks(a);
                            for (; null !== i; )
                                Jl = i,
                                bs(i, n, t),
                                i = i.sibling;
                            Jl = a,
                            Ql = l,
                            Yl = u
                        }
                        ws(e)
                    } else
                        0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a,
                        Jl = i) : ws(e)
                }
            }
            function ws(e) {
                for (; null !== Jl; ) {
                    var n = Jl;
                    if (0 !== (8772 & n.flags)) {
                        var t = n.alternate;
                        try {
                            if (0 !== (8772 & n.flags))
                                switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Yl || rs(5, n);
                                    break;
                                case 1:
                                    var r = n.stateNode;
                                    if (4 & n.flags && !Yl)
                                        if (null === t)
                                            r.componentDidMount();
                                        else {
                                            var a = n.elementType === n.type ? t.memoizedProps : tl(n.type, t.memoizedProps);
                                            r.componentDidUpdate(a, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var o = n.updateQueue;
                                    null !== o && Wi(n, o, r);
                                    break;
                                case 3:
                                    var l = n.updateQueue;
                                    if (null !== l) {
                                        if (t = null,
                                        null !== n.child)
                                            switch (n.child.tag) {
                                            case 5:
                                            case 1:
                                                t = n.child.stateNode
                                            }
                                        Wi(n, l, t)
                                    }
                                    break;
                                case 5:
                                    var s = n.stateNode;
                                    if (null === t && 4 & n.flags) {
                                        t = s;
                                        var u = n.memoizedProps;
                                        switch (n.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            u.autoFocus && t.focus();
                                            break;
                                        case "img":
                                            u.src && (t.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === n.memoizedState) {
                                        var c = n.alternate;
                                        if (null !== c) {
                                            var d = c.memoizedState;
                                            if (null !== d) {
                                                var f = d.dehydrated;
                                                null !== f && Wn(f)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(i(163))
                                }
                            Yl || 512 & n.flags && as(n)
                        } catch (p) {
                            Su(n, n.return, p)
                        }
                    }
                    if (n === e) {
                        Jl = null;
                        break
                    }
                    if (null !== (t = n.sibling)) {
                        t.return = n.return,
                        Jl = t;
                        break
                    }
                    Jl = n.return
                }
            }
            function xs(e) {
                for (; null !== Jl; ) {
                    var n = Jl;
                    if (n === e) {
                        Jl = null;
                        break
                    }
                    var t = n.sibling;
                    if (null !== t) {
                        t.return = n.return,
                        Jl = t;
                        break
                    }
                    Jl = n.return
                }
            }
            function ks(e) {
                for (; null !== Jl; ) {
                    var n = Jl;
                    try {
                        switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            var t = n.return;
                            try {
                                rs(4, n)
                            } catch (s) {
                                Su(n, t, s)
                            }
                            break;
                        case 1:
                            var r = n.stateNode;
                            if ("function" === typeof r.componentDidMount) {
                                var a = n.return;
                                try {
                                    r.componentDidMount()
                                } catch (s) {
                                    Su(n, a, s)
                                }
                            }
                            var i = n.return;
                            try {
                                as(n)
                            } catch (s) {
                                Su(n, i, s)
                            }
                            break;
                        case 5:
                            var o = n.return;
                            try {
                                as(n)
                            } catch (s) {
                                Su(n, o, s)
                            }
                        }
                    } catch (s) {
                        Su(n, n.return, s)
                    }
                    if (n === e) {
                        Jl = null;
                        break
                    }
                    var l = n.sibling;
                    if (null !== l) {
                        l.return = n.return,
                        Jl = l;
                        break
                    }
                    Jl = n.return
                }
            }
            var Es, Ss = Math.ceil, Ns = w.ReactCurrentDispatcher, Cs = w.ReactCurrentOwner, js = w.ReactCurrentBatchConfig, Is = 0, Ts = null, Ds = null, Rs = 0, As = 0, _s = Sa(0), Ps = 0, Ms = null, Ls = 0, Os = 0, Us = 0, zs = null, Fs = null, Hs = 0, qs = 1 / 0, Ws = null, Xs = !1, Gs = null, Vs = null, Bs = !1, $s = null, Qs = 0, Ys = 0, Ks = null, Js = -1, Zs = 0;
            function eu() {
                return 0 !== (6 & Is) ? Ke() : -1 !== Js ? Js : Js = Ke()
            }
            function nu(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Is) && 0 !== Rs ? Rs & -Rs : null !== mi.transition ? (0 === Zs && (Zs = gn()),
                Zs) : 0 !== (e = wn) ? e : e = void 0 === (e = window.event) ? 16 : Kn(e.type)
            }
            function tu(e, n, t, r) {
                if (50 < Ys)
                    throw Ys = 0,
                    Ks = null,
                    Error(i(185));
                yn(e, t, r),
                0 !== (2 & Is) && e === Ts || (e === Ts && (0 === (2 & Is) && (Os |= t),
                4 === Ps && lu(e, Rs)),
                ru(e, r),
                1 === t && 0 === Is && 0 === (1 & n.mode) && (qs = Ke() + 500,
                za && qa()))
            }
            function ru(e, n) {
                var t = e.callbackNode;
                !function(e, n) {
                    for (var t = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
                        var o = 31 - ln(i)
                          , l = 1 << o
                          , s = a[o];
                        -1 === s ? 0 !== (l & t) && 0 === (l & r) || (a[o] = hn(l, n)) : s <= n && (e.expiredLanes |= l),
                        i &= ~l
                    }
                }(e, n);
                var r = pn(e, e === Ts ? Rs : 0);
                if (0 === r)
                    null !== t && $e(t),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
                else if (n = r & -r,
                e.callbackPriority !== n) {
                    if (null != t && $e(t),
                    1 === n)
                        0 === e.tag ? function(e) {
                            za = !0,
                            Ha(e)
                        }(su.bind(null, e)) : Ha(su.bind(null, e)),
                        oa((function() {
                            0 === (6 & Is) && qa()
                        }
                        )),
                        t = null;
                    else {
                        switch (xn(r)) {
                        case 1:
                            t = Ze;
                            break;
                        case 4:
                            t = en;
                            break;
                        case 16:
                        default:
                            t = nn;
                            break;
                        case 536870912:
                            t = rn
                        }
                        t = Tu(t, au.bind(null, e))
                    }
                    e.callbackPriority = n,
                    e.callbackNode = t
                }
            }
            function au(e, n) {
                if (Js = -1,
                Zs = 0,
                0 !== (6 & Is))
                    throw Error(i(327));
                var t = e.callbackNode;
                if (ku() && e.callbackNode !== t)
                    return null;
                var r = pn(e, e === Ts ? Rs : 0);
                if (0 === r)
                    return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n)
                    n = gu(e, r);
                else {
                    n = r;
                    var a = Is;
                    Is |= 2;
                    var o = hu();
                    for (Ts === e && Rs === n || (Ws = null,
                    qs = Ke() + 500,
                    fu(e, n)); ; )
                        try {
                            yu();
                            break
                        } catch (s) {
                            pu(e, s)
                        }
                    Ci(),
                    Ns.current = o,
                    Is = a,
                    null !== Ds ? n = 0 : (Ts = null,
                    Rs = 0,
                    n = Ps)
                }
                if (0 !== n) {
                    if (2 === n && (0 !== (a = mn(e)) && (r = a,
                    n = iu(e, a))),
                    1 === n)
                        throw t = Ms,
                        fu(e, 0),
                        lu(e, r),
                        ru(e, Ke()),
                        t;
                    if (6 === n)
                        lu(e, r);
                    else {
                        if (a = e.current.alternate,
                        0 === (30 & r) && !function(e) {
                            for (var n = e; ; ) {
                                if (16384 & n.flags) {
                                    var t = n.updateQueue;
                                    if (null !== t && null !== (t = t.stores))
                                        for (var r = 0; r < t.length; r++) {
                                            var a = t[r]
                                              , i = a.getSnapshot;
                                            a = a.value;
                                            try {
                                                if (!lr(i(), a))
                                                    return !1
                                            } catch (l) {
                                                return !1
                                            }
                                        }
                                }
                                if (t = n.child,
                                16384 & n.subtreeFlags && null !== t)
                                    t.return = n,
                                    n = t;
                                else {
                                    if (n === e)
                                        break;
                                    for (; null === n.sibling; ) {
                                        if (null === n.return || n.return === e)
                                            return !0;
                                        n = n.return
                                    }
                                    n.sibling.return = n.return,
                                    n = n.sibling
                                }
                            }
                            return !0
                        }(a) && (2 === (n = gu(e, r)) && (0 !== (o = mn(e)) && (r = o,
                        n = iu(e, o))),
                        1 === n))
                            throw t = Ms,
                            fu(e, 0),
                            lu(e, r),
                            ru(e, Ke()),
                            t;
                        switch (e.finishedWork = a,
                        e.finishedLanes = r,
                        n) {
                        case 0:
                        case 1:
                            throw Error(i(345));
                        case 2:
                        case 5:
                            xu(e, Fs, Ws);
                            break;
                        case 3:
                            if (lu(e, r),
                            (130023424 & r) === r && 10 < (n = Hs + 500 - Ke())) {
                                if (0 !== pn(e, 0))
                                    break;
                                if (((a = e.suspendedLanes) & r) !== r) {
                                    eu(),
                                    e.pingedLanes |= e.suspendedLanes & a;
                                    break
                                }
                                e.timeoutHandle = ra(xu.bind(null, e, Fs, Ws), n);
                                break
                            }
                            xu(e, Fs, Ws);
                            break;
                        case 4:
                            if (lu(e, r),
                            (4194240 & r) === r)
                                break;
                            for (n = e.eventTimes,
                            a = -1; 0 < r; ) {
                                var l = 31 - ln(r);
                                o = 1 << l,
                                (l = n[l]) > a && (a = l),
                                r &= ~o
                            }
                            if (r = a,
                            10 < (r = (120 > (r = Ke() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ss(r / 1960)) - r)) {
                                e.timeoutHandle = ra(xu.bind(null, e, Fs, Ws), r);
                                break
                            }
                            xu(e, Fs, Ws);
                            break;
                        default:
                            throw Error(i(329))
                        }
                    }
                }
                return ru(e, Ke()),
                e.callbackNode === t ? au.bind(null, e) : null
            }
            function iu(e, n) {
                var t = zs;
                return e.current.memoizedState.isDehydrated && (fu(e, n).flags |= 256),
                2 !== (e = gu(e, n)) && (n = Fs,
                Fs = t,
                null !== n && ou(n)),
                e
            }
            function ou(e) {
                null === Fs ? Fs = e : Fs.push.apply(Fs, e)
            }
            function lu(e, n) {
                for (n &= ~Us,
                n &= ~Os,
                e.suspendedLanes |= n,
                e.pingedLanes &= ~n,
                e = e.expirationTimes; 0 < n; ) {
                    var t = 31 - ln(n)
                      , r = 1 << t;
                    e[t] = -1,
                    n &= ~r
                }
            }
            function su(e) {
                if (0 !== (6 & Is))
                    throw Error(i(327));
                ku();
                var n = pn(e, 0);
                if (0 === (1 & n))
                    return ru(e, Ke()),
                    null;
                var t = gu(e, n);
                if (0 !== e.tag && 2 === t) {
                    var r = mn(e);
                    0 !== r && (n = r,
                    t = iu(e, r))
                }
                if (1 === t)
                    throw t = Ms,
                    fu(e, 0),
                    lu(e, n),
                    ru(e, Ke()),
                    t;
                if (6 === t)
                    throw Error(i(345));
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = n,
                xu(e, Fs, Ws),
                ru(e, Ke()),
                null
            }
            function uu(e, n) {
                var t = Is;
                Is |= 1;
                try {
                    return e(n)
                } finally {
                    0 === (Is = t) && (qs = Ke() + 500,
                    za && qa())
                }
            }
            function cu(e) {
                null !== $s && 0 === $s.tag && 0 === (6 & Is) && ku();
                var n = Is;
                Is |= 1;
                var t = js.transition
                  , r = wn;
                try {
                    if (js.transition = null,
                    wn = 1,
                    e)
                        return e()
                } finally {
                    wn = r,
                    js.transition = t,
                    0 === (6 & (Is = n)) && qa()
                }
            }
            function du() {
                As = _s.current,
                Na(_s)
            }
            function fu(e, n) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var t = e.timeoutHandle;
                if (-1 !== t && (e.timeoutHandle = -1,
                aa(t)),
                null !== Ds)
                    for (t = Ds.return; null !== t; ) {
                        var r = t;
                        switch (ni(r),
                        r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && _a();
                            break;
                        case 3:
                            Yi(),
                            Na(Ta),
                            Na(Ia),
                            to();
                            break;
                        case 5:
                            Ji(r);
                            break;
                        case 4:
                            Yi();
                            break;
                        case 13:
                        case 19:
                            Na(Zi);
                            break;
                        case 10:
                            ji(r.type._context);
                            break;
                        case 22:
                        case 23:
                            du()
                        }
                        t = t.return
                    }
                if (Ts = e,
                Ds = e = _u(e.current, null),
                Rs = As = n,
                Ps = 0,
                Ms = null,
                Us = Os = Ls = 0,
                Fs = zs = null,
                null !== Ri) {
                    for (n = 0; n < Ri.length; n++)
                        if (null !== (r = (t = Ri[n]).interleaved)) {
                            t.interleaved = null;
                            var a = r.next
                              , i = t.pending;
                            if (null !== i) {
                                var o = i.next;
                                i.next = a,
                                r.next = o
                            }
                            t.pending = r
                        }
                    Ri = null
                }
                return e
            }
            function pu(e, n) {
                for (; ; ) {
                    var t = Ds;
                    try {
                        if (Ci(),
                        ro.current = Jo,
                        uo) {
                            for (var r = oo.memoizedState; null !== r; ) {
                                var a = r.queue;
                                null !== a && (a.pending = null),
                                r = r.next
                            }
                            uo = !1
                        }
                        if (io = 0,
                        so = lo = oo = null,
                        co = !1,
                        fo = 0,
                        Cs.current = null,
                        null === t || null === t.return) {
                            Ps = 1,
                            Ms = n,
                            Ds = null;
                            break
                        }
                        e: {
                            var o = e
                              , l = t.return
                              , s = t
                              , u = n;
                            if (n = Rs,
                            s.flags |= 32768,
                            null !== u && "object" === typeof u && "function" === typeof u.then) {
                                var c = u
                                  , d = s
                                  , f = d.tag;
                                if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                    var p = d.alternate;
                                    p ? (d.updateQueue = p.updateQueue,
                                    d.memoizedState = p.memoizedState,
                                    d.lanes = p.lanes) : (d.updateQueue = null,
                                    d.memoizedState = null)
                                }
                                var h = gl(l);
                                if (null !== h) {
                                    h.flags &= -257,
                                    vl(h, l, s, 0, n),
                                    1 & h.mode && ml(o, c, n),
                                    u = c;
                                    var m = (n = h).updateQueue;
                                    if (null === m) {
                                        var g = new Set;
                                        g.add(u),
                                        n.updateQueue = g
                                    } else
                                        m.add(u);
                                    break e
                                }
                                if (0 === (1 & n)) {
                                    ml(o, c, n),
                                    mu();
                                    break e
                                }
                                u = Error(i(426))
                            } else if (ai && 1 & s.mode) {
                                var v = gl(l);
                                if (null !== v) {
                                    0 === (65536 & v.flags) && (v.flags |= 256),
                                    vl(v, l, s, 0, n),
                                    hi(ul(u, s));
                                    break e
                                }
                            }
                            o = u = ul(u, s),
                            4 !== Ps && (Ps = 2),
                            null === zs ? zs = [o] : zs.push(o),
                            o = l;
                            do {
                                switch (o.tag) {
                                case 3:
                                    o.flags |= 65536,
                                    n &= -n,
                                    o.lanes |= n,
                                    Hi(o, pl(0, u, n));
                                    break e;
                                case 1:
                                    s = u;
                                    var y = o.type
                                      , b = o.stateNode;
                                    if (0 === (128 & o.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Vs || !Vs.has(b)))) {
                                        o.flags |= 65536,
                                        n &= -n,
                                        o.lanes |= n,
                                        Hi(o, hl(o, s, n));
                                        break e
                                    }
                                }
                                o = o.return
                            } while (null !== o)
                        }
                        wu(t)
                    } catch (w) {
                        n = w,
                        Ds === t && null !== t && (Ds = t = t.return);
                        continue
                    }
                    break
                }
            }
            function hu() {
                var e = Ns.current;
                return Ns.current = Jo,
                null === e ? Jo : e
            }
            function mu() {
                0 !== Ps && 3 !== Ps && 2 !== Ps || (Ps = 4),
                null === Ts || 0 === (268435455 & Ls) && 0 === (268435455 & Os) || lu(Ts, Rs)
            }
            function gu(e, n) {
                var t = Is;
                Is |= 2;
                var r = hu();
                for (Ts === e && Rs === n || (Ws = null,
                fu(e, n)); ; )
                    try {
                        vu();
                        break
                    } catch (a) {
                        pu(e, a)
                    }
                if (Ci(),
                Is = t,
                Ns.current = r,
                null !== Ds)
                    throw Error(i(261));
                return Ts = null,
                Rs = 0,
                Ps
            }
            function vu() {
                for (; null !== Ds; )
                    bu(Ds)
            }
            function yu() {
                for (; null !== Ds && !Qe(); )
                    bu(Ds)
            }
            function bu(e) {
                var n = Es(e.alternate, e, As);
                e.memoizedProps = e.pendingProps,
                null === n ? wu(e) : Ds = n,
                Cs.current = null
            }
            function wu(e) {
                var n = e;
                do {
                    var t = n.alternate;
                    if (e = n.return,
                    0 === (32768 & n.flags)) {
                        if (null !== (t = Bl(t, n, As)))
                            return void (Ds = t)
                    } else {
                        if (null !== (t = $l(t, n)))
                            return t.flags &= 32767,
                            void (Ds = t);
                        if (null === e)
                            return Ps = 6,
                            void (Ds = null);
                        e.flags |= 32768,
                        e.subtreeFlags = 0,
                        e.deletions = null
                    }
                    if (null !== (n = n.sibling))
                        return void (Ds = n);
                    Ds = n = e
                } while (null !== n);
                0 === Ps && (Ps = 5)
            }
            function xu(e, n, t) {
                var r = wn
                  , a = js.transition;
                try {
                    js.transition = null,
                    wn = 1,
                    function(e, n, t, r) {
                        do {
                            ku()
                        } while (null !== $s);
                        if (0 !== (6 & Is))
                            throw Error(i(327));
                        t = e.finishedWork;
                        var a = e.finishedLanes;
                        if (null === t)
                            return null;
                        if (e.finishedWork = null,
                        e.finishedLanes = 0,
                        t === e.current)
                            throw Error(i(177));
                        e.callbackNode = null,
                        e.callbackPriority = 0;
                        var o = t.lanes | t.childLanes;
                        if (function(e, n) {
                            var t = e.pendingLanes & ~n;
                            e.pendingLanes = n,
                            e.suspendedLanes = 0,
                            e.pingedLanes = 0,
                            e.expiredLanes &= n,
                            e.mutableReadLanes &= n,
                            e.entangledLanes &= n,
                            n = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < t; ) {
                                var a = 31 - ln(t)
                                  , i = 1 << a;
                                n[a] = 0,
                                r[a] = -1,
                                e[a] = -1,
                                t &= ~i
                            }
                        }(e, o),
                        e === Ts && (Ds = Ts = null,
                        Rs = 0),
                        0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags) || Bs || (Bs = !0,
                        Tu(nn, (function() {
                            return ku(),
                            null
                        }
                        ))),
                        o = 0 !== (15990 & t.flags),
                        0 !== (15990 & t.subtreeFlags) || o) {
                            o = js.transition,
                            js.transition = null;
                            var l = wn;
                            wn = 1;
                            var s = Is;
                            Is |= 4,
                            Cs.current = null,
                            function(e, n) {
                                if (ea = Gn,
                                pr(e = fr())) {
                                    if ("selectionStart"in e)
                                        var t = {
                                            start: e.selectionStart,
                                            end: e.selectionEnd
                                        };
                                    else
                                        e: {
                                            var r = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                                            if (r && 0 !== r.rangeCount) {
                                                t = r.anchorNode;
                                                var a = r.anchorOffset
                                                  , o = r.focusNode;
                                                r = r.focusOffset;
                                                try {
                                                    t.nodeType,
                                                    o.nodeType
                                                } catch (x) {
                                                    t = null;
                                                    break e
                                                }
                                                var l = 0
                                                  , s = -1
                                                  , u = -1
                                                  , c = 0
                                                  , d = 0
                                                  , f = e
                                                  , p = null;
                                                n: for (; ; ) {
                                                    for (var h; f !== t || 0 !== a && 3 !== f.nodeType || (s = l + a),
                                                    f !== o || 0 !== r && 3 !== f.nodeType || (u = l + r),
                                                    3 === f.nodeType && (l += f.nodeValue.length),
                                                    null !== (h = f.firstChild); )
                                                        p = f,
                                                        f = h;
                                                    for (; ; ) {
                                                        if (f === e)
                                                            break n;
                                                        if (p === t && ++c === a && (s = l),
                                                        p === o && ++d === r && (u = l),
                                                        null !== (h = f.nextSibling))
                                                            break;
                                                        p = (f = p).parentNode
                                                    }
                                                    f = h
                                                }
                                                t = -1 === s || -1 === u ? null : {
                                                    start: s,
                                                    end: u
                                                }
                                            } else
                                                t = null
                                        }
                                    t = t || {
                                        start: 0,
                                        end: 0
                                    }
                                } else
                                    t = null;
                                for (na = {
                                    focusedElem: e,
                                    selectionRange: t
                                },
                                Gn = !1,
                                Jl = n; null !== Jl; )
                                    if (e = (n = Jl).child,
                                    0 !== (1028 & n.subtreeFlags) && null !== e)
                                        e.return = n,
                                        Jl = e;
                                    else
                                        for (; null !== Jl; ) {
                                            n = Jl;
                                            try {
                                                var m = n.alternate;
                                                if (0 !== (1024 & n.flags))
                                                    switch (n.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (null !== m) {
                                                            var g = m.memoizedProps
                                                              , v = m.memoizedState
                                                              , y = n.stateNode
                                                              , b = y.getSnapshotBeforeUpdate(n.elementType === n.type ? g : tl(n.type, g), v);
                                                            y.__reactInternalSnapshotBeforeUpdate = b
                                                        }
                                                        break;
                                                    case 3:
                                                        var w = n.stateNode.containerInfo;
                                                        1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                        break;
                                                    default:
                                                        throw Error(i(163))
                                                    }
                                            } catch (x) {
                                                Su(n, n.return, x)
                                            }
                                            if (null !== (e = n.sibling)) {
                                                e.return = n.return,
                                                Jl = e;
                                                break
                                            }
                                            Jl = n.return
                                        }
                                m = ns,
                                ns = !1
                            }(e, t),
                            gs(t, e),
                            hr(na),
                            Gn = !!ea,
                            na = ea = null,
                            e.current = t,
                            ys(t, e, a),
                            Ye(),
                            Is = s,
                            wn = l,
                            js.transition = o
                        } else
                            e.current = t;
                        if (Bs && (Bs = !1,
                        $s = e,
                        Qs = a),
                        o = e.pendingLanes,
                        0 === o && (Vs = null),
                        function(e) {
                            if (on && "function" === typeof on.onCommitFiberRoot)
                                try {
                                    on.onCommitFiberRoot(an, e, void 0, 128 === (128 & e.current.flags))
                                } catch (n) {}
                        }(t.stateNode),
                        ru(e, Ke()),
                        null !== n)
                            for (r = e.onRecoverableError,
                            t = 0; t < n.length; t++)
                                a = n[t],
                                r(a.value, {
                                    componentStack: a.stack,
                                    digest: a.digest
                                });
                        if (Xs)
                            throw Xs = !1,
                            e = Gs,
                            Gs = null,
                            e;
                        0 !== (1 & Qs) && 0 !== e.tag && ku(),
                        o = e.pendingLanes,
                        0 !== (1 & o) ? e === Ks ? Ys++ : (Ys = 0,
                        Ks = e) : Ys = 0,
                        qa()
                    }(e, n, t, r)
                } finally {
                    js.transition = a,
                    wn = r
                }
                return null
            }
            function ku() {
                if (null !== $s) {
                    var e = xn(Qs)
                      , n = js.transition
                      , t = wn;
                    try {
                        if (js.transition = null,
                        wn = 16 > e ? 16 : e,
                        null === $s)
                            var r = !1;
                        else {
                            if (e = $s,
                            $s = null,
                            Qs = 0,
                            0 !== (6 & Is))
                                throw Error(i(331));
                            var a = Is;
                            for (Is |= 4,
                            Jl = e.current; null !== Jl; ) {
                                var o = Jl
                                  , l = o.child;
                                if (0 !== (16 & Jl.flags)) {
                                    var s = o.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for (Jl = c; null !== Jl; ) {
                                                var d = Jl;
                                                switch (d.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    ts(8, d, o)
                                                }
                                                var f = d.child;
                                                if (null !== f)
                                                    f.return = d,
                                                    Jl = f;
                                                else
                                                    for (; null !== Jl; ) {
                                                        var p = (d = Jl).sibling
                                                          , h = d.return;
                                                        if (is(d),
                                                        d === c) {
                                                            Jl = null;
                                                            break
                                                        }
                                                        if (null !== p) {
                                                            p.return = h,
                                                            Jl = p;
                                                            break
                                                        }
                                                        Jl = h
                                                    }
                                            }
                                        }
                                        var m = o.alternate;
                                        if (null !== m) {
                                            var g = m.child;
                                            if (null !== g) {
                                                m.child = null;
                                                do {
                                                    var v = g.sibling;
                                                    g.sibling = null,
                                                    g = v
                                                } while (null !== g)
                                            }
                                        }
                                        Jl = o
                                    }
                                }
                                if (0 !== (2064 & o.subtreeFlags) && null !== l)
                                    l.return = o,
                                    Jl = l;
                                else
                                    e: for (; null !== Jl; ) {
                                        if (0 !== (2048 & (o = Jl).flags))
                                            switch (o.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ts(9, o, o.return)
                                            }
                                        var y = o.sibling;
                                        if (null !== y) {
                                            y.return = o.return,
                                            Jl = y;
                                            break e
                                        }
                                        Jl = o.return
                                    }
                            }
                            var b = e.current;
                            for (Jl = b; null !== Jl; ) {
                                var w = (l = Jl).child;
                                if (0 !== (2064 & l.subtreeFlags) && null !== w)
                                    w.return = l,
                                    Jl = w;
                                else
                                    e: for (l = b; null !== Jl; ) {
                                        if (0 !== (2048 & (s = Jl).flags))
                                            try {
                                                switch (s.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rs(9, s)
                                                }
                                            } catch (k) {
                                                Su(s, s.return, k)
                                            }
                                        if (s === l) {
                                            Jl = null;
                                            break e
                                        }
                                        var x = s.sibling;
                                        if (null !== x) {
                                            x.return = s.return,
                                            Jl = x;
                                            break e
                                        }
                                        Jl = s.return
                                    }
                            }
                            if (Is = a,
                            qa(),
                            on && "function" === typeof on.onPostCommitFiberRoot)
                                try {
                                    on.onPostCommitFiberRoot(an, e)
                                } catch (k) {}
                            r = !0
                        }
                        return r
                    } finally {
                        wn = t,
                        js.transition = n
                    }
                }
                return !1
            }
            function Eu(e, n, t) {
                e = zi(e, n = pl(0, n = ul(t, n), 1), 1),
                n = eu(),
                null !== e && (yn(e, 1, n),
                ru(e, n))
            }
            function Su(e, n, t) {
                if (3 === e.tag)
                    Eu(e, e, t);
                else
                    for (; null !== n; ) {
                        if (3 === n.tag) {
                            Eu(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Vs || !Vs.has(r))) {
                                n = zi(n, e = hl(n, e = ul(t, e), 1), 1),
                                e = eu(),
                                null !== n && (yn(n, 1, e),
                                ru(n, e));
                                break
                            }
                        }
                        n = n.return
                    }
            }
            function Nu(e, n, t) {
                var r = e.pingCache;
                null !== r && r.delete(n),
                n = eu(),
                e.pingedLanes |= e.suspendedLanes & t,
                Ts === e && (Rs & t) === t && (4 === Ps || 3 === Ps && (130023424 & Rs) === Rs && 500 > Ke() - Hs ? fu(e, 0) : Us |= t),
                ru(e, n)
            }
            function Cu(e, n) {
                0 === n && (0 === (1 & e.mode) ? n = 1 : (n = dn,
                0 === (130023424 & (dn <<= 1)) && (dn = 4194304)));
                var t = eu();
                null !== (e = Pi(e, n)) && (yn(e, n, t),
                ru(e, t))
            }
            function ju(e) {
                var n = e.memoizedState
                  , t = 0;
                null !== n && (t = n.retryLane),
                Cu(e, t)
            }
            function Iu(e, n) {
                var t = 0;
                switch (e.tag) {
                case 13:
                    var r = e.stateNode
                      , a = e.memoizedState;
                    null !== a && (t = a.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                default:
                    throw Error(i(314))
                }
                null !== r && r.delete(n),
                Cu(e, t)
            }
            function Tu(e, n) {
                return Be(e, n)
            }
            function Du(e, n, t, r) {
                this.tag = e,
                this.key = t,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = n,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Ru(e, n, t, r) {
                return new Du(e,n,t,r)
            }
            function Au(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function _u(e, n) {
                var t = e.alternate;
                return null === t ? ((t = Ru(e.tag, n, e.key, e.mode)).elementType = e.elementType,
                t.type = e.type,
                t.stateNode = e.stateNode,
                t.alternate = e,
                e.alternate = t) : (t.pendingProps = n,
                t.type = e.type,
                t.flags = 0,
                t.subtreeFlags = 0,
                t.deletions = null),
                t.flags = 14680064 & e.flags,
                t.childLanes = e.childLanes,
                t.lanes = e.lanes,
                t.child = e.child,
                t.memoizedProps = e.memoizedProps,
                t.memoizedState = e.memoizedState,
                t.updateQueue = e.updateQueue,
                n = e.dependencies,
                t.dependencies = null === n ? null : {
                    lanes: n.lanes,
                    firstContext: n.firstContext
                },
                t.sibling = e.sibling,
                t.index = e.index,
                t.ref = e.ref,
                t
            }
            function Pu(e, n, t, r, a, o) {
                var l = 2;
                if (r = e,
                "function" === typeof e)
                    Au(e) && (l = 1);
                else if ("string" === typeof e)
                    l = 5;
                else
                    e: switch (e) {
                    case E:
                        return Mu(t.children, a, o, n);
                    case S:
                        l = 8,
                        a |= 8;
                        break;
                    case N:
                        return (e = Ru(12, t, n, 2 | a)).elementType = N,
                        e.lanes = o,
                        e;
                    case T:
                        return (e = Ru(13, t, n, a)).elementType = T,
                        e.lanes = o,
                        e;
                    case D:
                        return (e = Ru(19, t, n, a)).elementType = D,
                        e.lanes = o,
                        e;
                    case _:
                        return Lu(t, a, o, n);
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case C:
                                l = 10;
                                break e;
                            case j:
                                l = 9;
                                break e;
                            case I:
                                l = 11;
                                break e;
                            case R:
                                l = 14;
                                break e;
                            case A:
                                l = 16,
                                r = null;
                                break e
                            }
                        throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                return (n = Ru(l, t, n, a)).elementType = e,
                n.type = r,
                n.lanes = o,
                n
            }
            function Mu(e, n, t, r) {
                return (e = Ru(7, e, r, n)).lanes = t,
                e
            }
            function Lu(e, n, t, r) {
                return (e = Ru(22, e, r, n)).elementType = _,
                e.lanes = t,
                e.stateNode = {
                    isHidden: !1
                },
                e
            }
            function Ou(e, n, t) {
                return (e = Ru(6, e, null, n)).lanes = t,
                e
            }
            function Uu(e, n, t) {
                return (n = Ru(4, null !== e.children ? e.children : [], e.key, n)).lanes = t,
                n.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                n
            }
            function zu(e, n, t, r, a) {
                this.tag = n,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.pendingContext = this.context = null,
                this.callbackPriority = 0,
                this.eventTimes = vn(0),
                this.expirationTimes = vn(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = vn(0),
                this.identifierPrefix = r,
                this.onRecoverableError = a,
                this.mutableSourceEagerHydrationData = null
            }
            function Fu(e, n, t, r, a, i, o, l, s) {
                return e = new zu(e,n,t,l,s),
                1 === n ? (n = 1,
                !0 === i && (n |= 8)) : n = 0,
                i = Ru(3, null, null, n),
                e.current = i,
                i.stateNode = e,
                i.memoizedState = {
                    element: r,
                    isDehydrated: t,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                },
                Li(i),
                e
            }
            function Hu(e) {
                if (!e)
                    return ja;
                e: {
                    if (qe(e = e._reactInternals) !== e || 1 !== e.tag)
                        throw Error(i(170));
                    var n = e;
                    do {
                        switch (n.tag) {
                        case 3:
                            n = n.stateNode.context;
                            break e;
                        case 1:
                            if (Aa(n.type)) {
                                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                                break e
                            }
                        }
                        n = n.return
                    } while (null !== n);
                    throw Error(i(171))
                }
                if (1 === e.tag) {
                    var t = e.type;
                    if (Aa(t))
                        return Ma(e, t, n)
                }
                return n
            }
            function qu(e, n, t, r, a, i, o, l, s) {
                return (e = Fu(t, r, !0, e, 0, i, 0, l, s)).context = Hu(null),
                t = e.current,
                (i = Ui(r = eu(), a = nu(t))).callback = void 0 !== n && null !== n ? n : null,
                zi(t, i, a),
                e.current.lanes = a,
                yn(e, a, r),
                ru(e, r),
                e
            }
            function Wu(e, n, t, r) {
                var a = n.current
                  , i = eu()
                  , o = nu(a);
                return t = Hu(t),
                null === n.context ? n.context = t : n.pendingContext = t,
                (n = Ui(i, o)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (n.callback = r),
                null !== (e = zi(a, n, o)) && (tu(e, a, o, i),
                Fi(e, a, o)),
                o
            }
            function Xu(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function Gu(e, n) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var t = e.retryLane;
                    e.retryLane = 0 !== t && t < n ? t : n
                }
            }
            function Vu(e, n) {
                Gu(e, n),
                (e = e.alternate) && Gu(e, n)
            }
            Es = function(e, n, t) {
                if (null !== e)
                    if (e.memoizedProps !== n.pendingProps || Ta.current)
                        bl = !0;
                    else {
                        if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                            return bl = !1,
                            function(e, n, t) {
                                switch (n.tag) {
                                case 3:
                                    Tl(n),
                                    pi();
                                    break;
                                case 5:
                                    Ki(n);
                                    break;
                                case 1:
                                    Aa(n.type) && La(n);
                                    break;
                                case 4:
                                    Qi(n, n.stateNode.containerInfo);
                                    break;
                                case 10:
                                    var r = n.type._context
                                      , a = n.memoizedProps.value;
                                    Ca(ki, r._currentValue),
                                    r._currentValue = a;
                                    break;
                                case 13:
                                    if (null !== (r = n.memoizedState))
                                        return null !== r.dehydrated ? (Ca(Zi, 1 & Zi.current),
                                        n.flags |= 128,
                                        null) : 0 !== (t & n.child.childLanes) ? Ol(e, n, t) : (Ca(Zi, 1 & Zi.current),
                                        null !== (e = Xl(e, n, t)) ? e.sibling : null);
                                    Ca(Zi, 1 & Zi.current);
                                    break;
                                case 19:
                                    if (r = 0 !== (t & n.childLanes),
                                    0 !== (128 & e.flags)) {
                                        if (r)
                                            return ql(e, n, t);
                                        n.flags |= 128
                                    }
                                    if (null !== (a = n.memoizedState) && (a.rendering = null,
                                    a.tail = null,
                                    a.lastEffect = null),
                                    Ca(Zi, Zi.current),
                                    r)
                                        break;
                                    return null;
                                case 22:
                                case 23:
                                    return n.lanes = 0,
                                    Sl(e, n, t)
                                }
                                return Xl(e, n, t)
                            }(e, n, t);
                        bl = 0 !== (131072 & e.flags)
                    }
                else
                    bl = !1,
                    ai && 0 !== (1048576 & n.flags) && Za(n, Va, n.index);
                switch (n.lanes = 0,
                n.tag) {
                case 2:
                    var r = n.type;
                    Wl(e, n),
                    e = n.pendingProps;
                    var a = Ra(n, Ia.current);
                    Ti(n, t),
                    a = go(null, n, r, e, a, t);
                    var o = vo();
                    return n.flags |= 1,
                    "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (n.tag = 1,
                    n.memoizedState = null,
                    n.updateQueue = null,
                    Aa(r) ? (o = !0,
                    La(n)) : o = !1,
                    n.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null,
                    Li(n),
                    a.updater = al,
                    n.stateNode = a,
                    a._reactInternals = n,
                    sl(n, r, e, t),
                    n = Il(null, n, r, !0, o, t)) : (n.tag = 0,
                    ai && o && ei(n),
                    wl(null, n, a, t),
                    n = n.child),
                    n;
                case 16:
                    r = n.elementType;
                    e: {
                        switch (Wl(e, n),
                        e = n.pendingProps,
                        r = (a = r._init)(r._payload),
                        n.type = r,
                        a = n.tag = function(e) {
                            if ("function" === typeof e)
                                return Au(e) ? 1 : 0;
                            if (void 0 !== e && null !== e) {
                                if ((e = e.$$typeof) === I)
                                    return 11;
                                if (e === R)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = tl(r, e),
                        a) {
                        case 0:
                            n = Cl(null, n, r, e, t);
                            break e;
                        case 1:
                            n = jl(null, n, r, e, t);
                            break e;
                        case 11:
                            n = xl(null, n, r, e, t);
                            break e;
                        case 14:
                            n = kl(null, n, r, tl(r.type, e), t);
                            break e
                        }
                        throw Error(i(306, r, ""))
                    }
                    return n;
                case 0:
                    return r = n.type,
                    a = n.pendingProps,
                    Cl(e, n, r, a = n.elementType === r ? a : tl(r, a), t);
                case 1:
                    return r = n.type,
                    a = n.pendingProps,
                    jl(e, n, r, a = n.elementType === r ? a : tl(r, a), t);
                case 3:
                    e: {
                        if (Tl(n),
                        null === e)
                            throw Error(i(387));
                        r = n.pendingProps,
                        a = (o = n.memoizedState).element,
                        Oi(e, n),
                        qi(n, r, null, t);
                        var l = n.memoizedState;
                        if (r = l.element,
                        o.isDehydrated) {
                            if (o = {
                                element: r,
                                isDehydrated: !1,
                                cache: l.cache,
                                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                transitions: l.transitions
                            },
                            n.updateQueue.baseState = o,
                            n.memoizedState = o,
                            256 & n.flags) {
                                n = Dl(e, n, r, t, a = ul(Error(i(423)), n));
                                break e
                            }
                            if (r !== a) {
                                n = Dl(e, n, r, t, a = ul(Error(i(424)), n));
                                break e
                            }
                            for (ri = ua(n.stateNode.containerInfo.firstChild),
                            ti = n,
                            ai = !0,
                            ii = null,
                            t = xi(n, null, r, t),
                            n.child = t; t; )
                                t.flags = -3 & t.flags | 4096,
                                t = t.sibling
                        } else {
                            if (pi(),
                            r === a) {
                                n = Xl(e, n, t);
                                break e
                            }
                            wl(e, n, r, t)
                        }
                        n = n.child
                    }
                    return n;
                case 5:
                    return Ki(n),
                    null === e && ui(n),
                    r = n.type,
                    a = n.pendingProps,
                    o = null !== e ? e.memoizedProps : null,
                    l = a.children,
                    ta(r, a) ? l = null : null !== o && ta(r, o) && (n.flags |= 32),
                    Nl(e, n),
                    wl(e, n, l, t),
                    n.child;
                case 6:
                    return null === e && ui(n),
                    null;
                case 13:
                    return Ol(e, n, t);
                case 4:
                    return Qi(n, n.stateNode.containerInfo),
                    r = n.pendingProps,
                    null === e ? n.child = wi(n, null, r, t) : wl(e, n, r, t),
                    n.child;
                case 11:
                    return r = n.type,
                    a = n.pendingProps,
                    xl(e, n, r, a = n.elementType === r ? a : tl(r, a), t);
                case 7:
                    return wl(e, n, n.pendingProps, t),
                    n.child;
                case 8:
                case 12:
                    return wl(e, n, n.pendingProps.children, t),
                    n.child;
                case 10:
                    e: {
                        if (r = n.type._context,
                        a = n.pendingProps,
                        o = n.memoizedProps,
                        l = a.value,
                        Ca(ki, r._currentValue),
                        r._currentValue = l,
                        null !== o)
                            if (lr(o.value, l)) {
                                if (o.children === a.children && !Ta.current) {
                                    n = Xl(e, n, t);
                                    break e
                                }
                            } else
                                for (null !== (o = n.child) && (o.return = n); null !== o; ) {
                                    var s = o.dependencies;
                                    if (null !== s) {
                                        l = o.child;
                                        for (var u = s.firstContext; null !== u; ) {
                                            if (u.context === r) {
                                                if (1 === o.tag) {
                                                    (u = Ui(-1, t & -t)).tag = 2;
                                                    var c = o.updateQueue;
                                                    if (null !== c) {
                                                        var d = (c = c.shared).pending;
                                                        null === d ? u.next = u : (u.next = d.next,
                                                        d.next = u),
                                                        c.pending = u
                                                    }
                                                }
                                                o.lanes |= t,
                                                null !== (u = o.alternate) && (u.lanes |= t),
                                                Ii(o.return, t, n),
                                                s.lanes |= t;
                                                break
                                            }
                                            u = u.next
                                        }
                                    } else if (10 === o.tag)
                                        l = o.type === n.type ? null : o.child;
                                    else if (18 === o.tag) {
                                        if (null === (l = o.return))
                                            throw Error(i(341));
                                        l.lanes |= t,
                                        null !== (s = l.alternate) && (s.lanes |= t),
                                        Ii(l, t, n),
                                        l = o.sibling
                                    } else
                                        l = o.child;
                                    if (null !== l)
                                        l.return = o;
                                    else
                                        for (l = o; null !== l; ) {
                                            if (l === n) {
                                                l = null;
                                                break
                                            }
                                            if (null !== (o = l.sibling)) {
                                                o.return = l.return,
                                                l = o;
                                                break
                                            }
                                            l = l.return
                                        }
                                    o = l
                                }
                        wl(e, n, a.children, t),
                        n = n.child
                    }
                    return n;
                case 9:
                    return a = n.type,
                    r = n.pendingProps.children,
                    Ti(n, t),
                    r = r(a = Di(a)),
                    n.flags |= 1,
                    wl(e, n, r, t),
                    n.child;
                case 14:
                    return a = tl(r = n.type, n.pendingProps),
                    kl(e, n, r, a = tl(r.type, a), t);
                case 15:
                    return El(e, n, n.type, n.pendingProps, t);
                case 17:
                    return r = n.type,
                    a = n.pendingProps,
                    a = n.elementType === r ? a : tl(r, a),
                    Wl(e, n),
                    n.tag = 1,
                    Aa(r) ? (e = !0,
                    La(n)) : e = !1,
                    Ti(n, t),
                    ol(n, r, a),
                    sl(n, r, a, t),
                    Il(null, n, r, !0, e, t);
                case 19:
                    return ql(e, n, t);
                case 22:
                    return Sl(e, n, t)
                }
                throw Error(i(156, n.tag))
            }
            ;
            var Bu = "function" === typeof reportError ? reportError : function(e) {
                console.error(e)
            }
            ;
            function $u(e) {
                this._internalRoot = e
            }
            function Qu(e) {
                this._internalRoot = e
            }
            function Yu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }
            function Ku(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function Ju() {}
            function Zu(e, n, t, r, a) {
                var i = t._reactRootContainer;
                if (i) {
                    var o = i;
                    if ("function" === typeof a) {
                        var l = a;
                        a = function() {
                            var e = Xu(o);
                            l.call(e)
                        }
                    }
                    Wu(n, o, e, a)
                } else
                    o = function(e, n, t, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = Xu(o);
                                    i.call(e)
                                }
                            }
                            var o = qu(n, r, e, 0, null, !1, 0, "", Ju);
                            return e._reactRootContainer = o,
                            e[ha] = o.current,
                            qr(8 === e.nodeType ? e.parentNode : e),
                            cu(),
                            o
                        }
                        for (; a = e.lastChild; )
                            e.removeChild(a);
                        if ("function" === typeof r) {
                            var l = r;
                            r = function() {
                                var e = Xu(s);
                                l.call(e)
                            }
                        }
                        var s = Fu(e, 0, !1, null, 0, !1, 0, "", Ju);
                        return e._reactRootContainer = s,
                        e[ha] = s.current,
                        qr(8 === e.nodeType ? e.parentNode : e),
                        cu((function() {
                            Wu(n, s, t, r)
                        }
                        )),
                        s
                    }(t, n, e, a, r);
                return Xu(o)
            }
            Qu.prototype.render = $u.prototype.render = function(e) {
                var n = this._internalRoot;
                if (null === n)
                    throw Error(i(409));
                Wu(e, n, null, null)
            }
            ,
            Qu.prototype.unmount = $u.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var n = e.containerInfo;
                    cu((function() {
                        Wu(null, e, null, null)
                    }
                    )),
                    n[ha] = null
                }
            }
            ,
            Qu.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var n = Nn();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: n
                    };
                    for (var t = 0; t < Pn.length && 0 !== n && n < Pn[t].priority; t++)
                        ;
                    Pn.splice(t, 0, e),
                    0 === t && Un(e)
                }
            }
            ,
            kn = function(e) {
                switch (e.tag) {
                case 3:
                    var n = e.stateNode;
                    if (n.current.memoizedState.isDehydrated) {
                        var t = fn(n.pendingLanes);
                        0 !== t && (bn(n, 1 | t),
                        ru(n, Ke()),
                        0 === (6 & Is) && (qs = Ke() + 500,
                        qa()))
                    }
                    break;
                case 13:
                    cu((function() {
                        var n = Pi(e, 1);
                        if (null !== n) {
                            var t = eu();
                            tu(n, e, 1, t)
                        }
                    }
                    )),
                    Vu(e, 1)
                }
            }
            ,
            En = function(e) {
                if (13 === e.tag) {
                    var n = Pi(e, 134217728);
                    if (null !== n)
                        tu(n, e, 134217728, eu());
                    Vu(e, 134217728)
                }
            }
            ,
            Sn = function(e) {
                if (13 === e.tag) {
                    var n = nu(e)
                      , t = Pi(e, n);
                    if (null !== t)
                        tu(t, e, n, eu());
                    Vu(e, n)
                }
            }
            ,
            Nn = function() {
                return wn
            }
            ,
            Cn = function(e, n) {
                var t = wn;
                try {
                    return wn = e,
                    n()
                } finally {
                    wn = t
                }
            }
            ,
            ke = function(e, n, t) {
                switch (n) {
                case "input":
                    if (J(e, t),
                    n = t.name,
                    "radio" === t.type && null != n) {
                        for (t = e; t.parentNode; )
                            t = t.parentNode;
                        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'),
                        n = 0; n < t.length; n++) {
                            var r = t[n];
                            if (r !== e && r.form === e.form) {
                                var a = xa(r);
                                if (!a)
                                    throw Error(i(90));
                                B(r),
                                J(r, a)
                            }
                        }
                    }
                    break;
                case "textarea":
                    ie(e, t);
                    break;
                case "select":
                    null != (n = t.value) && te(e, !!t.multiple, n, !1)
                }
            }
            ,
            Ie = uu,
            Te = cu;
            var ec = {
                usingClientEntryPoint: !1,
                Events: [ba, wa, xa, Ce, je, uu]
            }
              , nc = {
                findFiberByHostInstance: ya,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom"
            }
              , tc = {
                bundleType: nc.bundleType,
                version: nc.version,
                rendererPackageName: nc.rendererPackageName,
                rendererConfig: nc.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: w.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = Ge(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!rc.isDisabled && rc.supportsFiber)
                    try {
                        an = rc.inject(tc),
                        on = rc
                    } catch (ce) {}
            }
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec,
            n.createPortal = function(e, n) {
                var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Yu(n))
                    throw Error(i(200));
                return function(e, n, t) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: k,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: n,
                        implementation: t
                    }
                }(e, n, null, t)
            }
            ,
            n.createRoot = function(e, n) {
                if (!Yu(e))
                    throw Error(i(299));
                var t = !1
                  , r = ""
                  , a = Bu;
                return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
                n = Fu(e, 1, !1, null, 0, t, 0, r, a),
                e[ha] = n.current,
                qr(8 === e.nodeType ? e.parentNode : e),
                new $u(n)
            }
            ,
            n.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var n = e._reactInternals;
                if (void 0 === n) {
                    if ("function" === typeof e.render)
                        throw Error(i(188));
                    throw e = Object.keys(e).join(","),
                    Error(i(268, e))
                }
                return e = null === (e = Ge(n)) ? null : e.stateNode
            }
            ,
            n.flushSync = function(e) {
                return cu(e)
            }
            ,
            n.hydrate = function(e, n, t) {
                if (!Ku(n))
                    throw Error(i(200));
                return Zu(null, e, n, !0, t)
            }
            ,
            n.hydrateRoot = function(e, n, t) {
                if (!Yu(e))
                    throw Error(i(405));
                var r = null != t && t.hydratedSources || null
                  , a = !1
                  , o = ""
                  , l = Bu;
                if (null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (a = !0),
                void 0 !== t.identifierPrefix && (o = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
                n = qu(n, null, e, 1, null != t ? t : null, a, 0, o, l),
                e[ha] = n.current,
                qr(e),
                r)
                    for (e = 0; e < r.length; e++)
                        a = (a = (t = r[e])._getVersion)(t._source),
                        null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a);
                return new Qu(n)
            }
            ,
            n.render = function(e, n, t) {
                if (!Ku(n))
                    throw Error(i(200));
                return Zu(null, e, n, !1, t)
            }
            ,
            n.unmountComponentAtNode = function(e) {
                if (!Ku(e))
                    throw Error(i(40));
                return !!e._reactRootContainer && (cu((function() {
                    Zu(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[ha] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            n.unstable_batchedUpdates = uu,
            n.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
                if (!Ku(t))
                    throw Error(i(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(i(38));
                return Zu(e, n, t, !1, r)
            }
            ,
            n.version = "18.3.1-next-f1338f8080-20240426"
        }
        ,
        4391: (e, n, t) => {
            "use strict";
            var r = t(7950);
            n.createRoot = r.createRoot,
            n.hydrateRoot = r.hydrateRoot
        }
        ,
        7950: (e, n, t) => {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (n) {
                        console.error(n)
                    }
            }(),
            e.exports = t(2730)
        }
        ,
        1153: (e, n, t) => {
            "use strict";
            var r = t(5043)
              , a = Symbol.for("react.element")
              , i = Symbol.for("react.fragment")
              , o = Object.prototype.hasOwnProperty
              , l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , s = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function u(e, n, t) {
                var r, i = {}, u = null, c = null;
                for (r in void 0 !== t && (u = "" + t),
                void 0 !== n.key && (u = "" + n.key),
                void 0 !== n.ref && (c = n.ref),
                n)
                    o.call(n, r) && !s.hasOwnProperty(r) && (i[r] = n[r]);
                if (e && e.defaultProps)
                    for (r in n = e.defaultProps)
                        void 0 === i[r] && (i[r] = n[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: u,
                    ref: c,
                    props: i,
                    _owner: l.current
                }
            }
            n.Fragment = i,
            n.jsx = u,
            n.jsxs = u
        }
        ,
        4202: (e, n) => {
            "use strict";
            var t = Symbol.for("react.element")
              , r = Symbol.for("react.portal")
              , a = Symbol.for("react.fragment")
              , i = Symbol.for("react.strict_mode")
              , o = Symbol.for("react.profiler")
              , l = Symbol.for("react.provider")
              , s = Symbol.for("react.context")
              , u = Symbol.for("react.forward_ref")
              , c = Symbol.for("react.suspense")
              , d = Symbol.for("react.memo")
              , f = Symbol.for("react.lazy")
              , p = Symbol.iterator;
            var h = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , m = Object.assign
              , g = {};
            function v(e, n, t) {
                this.props = e,
                this.context = n,
                this.refs = g,
                this.updater = t || h
            }
            function y() {}
            function b(e, n, t) {
                this.props = e,
                this.context = n,
                this.refs = g,
                this.updater = t || h
            }
            v.prototype.isReactComponent = {},
            v.prototype.setState = function(e, n) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, n, "setState")
            }
            ,
            v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = v.prototype;
            var w = b.prototype = new y;
            w.constructor = b,
            m(w, v.prototype),
            w.isPureReactComponent = !0;
            var x = Array.isArray
              , k = Object.prototype.hasOwnProperty
              , E = {
                current: null
            }
              , S = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function N(e, n, r) {
                var a, i = {}, o = null, l = null;
                if (null != n)
                    for (a in void 0 !== n.ref && (l = n.ref),
                    void 0 !== n.key && (o = "" + n.key),
                    n)
                        k.call(n, a) && !S.hasOwnProperty(a) && (i[a] = n[a]);
                var s = arguments.length - 2;
                if (1 === s)
                    i.children = r;
                else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++)
                        u[c] = arguments[c + 2];
                    i.children = u
                }
                if (e && e.defaultProps)
                    for (a in s = e.defaultProps)
                        void 0 === i[a] && (i[a] = s[a]);
                return {
                    $$typeof: t,
                    type: e,
                    key: o,
                    ref: l,
                    props: i,
                    _owner: E.current
                }
            }
            function C(e) {
                return "object" === typeof e && null !== e && e.$$typeof === t
            }
            var j = /\/+/g;
            function I(e, n) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var n = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return n[e]
                    }
                    ))
                }("" + e.key) : n.toString(36)
            }
            function T(e, n, a, i, o) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var s = !1;
                if (null === e)
                    s = !0;
                else
                    switch (l) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case t:
                        case r:
                            s = !0
                        }
                    }
                if (s)
                    return o = o(s = e),
                    e = "" === i ? "." + I(s, 0) : i,
                    x(o) ? (a = "",
                    null != e && (a = e.replace(j, "$&/") + "/"),
                    T(o, n, a, "", (function(e) {
                        return e
                    }
                    ))) : null != o && (C(o) && (o = function(e, n) {
                        return {
                            $$typeof: t,
                            type: e.type,
                            key: n,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, a + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + e)),
                    n.push(o)),
                    1;
                if (s = 0,
                i = "" === i ? "." : i + ":",
                x(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = i + I(l = e[u], u);
                        s += T(l, n, a, c, o)
                    }
                else if (c = function(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = p && e[p] || e["@@iterator"]) ? e : null
                }(e),
                "function" === typeof c)
                    for (e = c.call(e),
                    u = 0; !(l = e.next()).done; )
                        s += T(l = l.value, n, a, c = i + I(l, u++), o);
                else if ("object" === l)
                    throw n = String(e),
                    Error("Objects are not valid as a React child (found: " + ("[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }
            function D(e, n, t) {
                if (null == e)
                    return e;
                var r = []
                  , a = 0;
                return T(e, r, "", "", (function(e) {
                    return n.call(t, e, a++)
                }
                )),
                r
            }
            function R(e) {
                if (-1 === e._status) {
                    var n = e._result;
                    (n = n()).then((function(n) {
                        0 !== e._status && -1 !== e._status || (e._status = 1,
                        e._result = n)
                    }
                    ), (function(n) {
                        0 !== e._status && -1 !== e._status || (e._status = 2,
                        e._result = n)
                    }
                    )),
                    -1 === e._status && (e._status = 0,
                    e._result = n)
                }
                if (1 === e._status)
                    return e._result.default;
                throw e._result
            }
            var A = {
                current: null
            }
              , _ = {
                transition: null
            }
              , P = {
                ReactCurrentDispatcher: A,
                ReactCurrentBatchConfig: _,
                ReactCurrentOwner: E
            };
            function M() {
                throw Error("act(...) is not supported in production builds of React.")
            }
            n.Children = {
                map: D,
                forEach: function(e, n, t) {
                    D(e, (function() {
                        n.apply(this, arguments)
                    }
                    ), t)
                },
                count: function(e) {
                    var n = 0;
                    return D(e, (function() {
                        n++
                    }
                    )),
                    n
                },
                toArray: function(e) {
                    return D(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!C(e))
                        throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            },
            n.Component = v,
            n.Fragment = a,
            n.Profiler = o,
            n.PureComponent = b,
            n.StrictMode = i,
            n.Suspense = c,
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P,
            n.act = M,
            n.cloneElement = function(e, n, r) {
                if (null === e || void 0 === e)
                    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = m({}, e.props)
                  , i = e.key
                  , o = e.ref
                  , l = e._owner;
                if (null != n) {
                    if (void 0 !== n.ref && (o = n.ref,
                    l = E.current),
                    void 0 !== n.key && (i = "" + n.key),
                    e.type && e.type.defaultProps)
                        var s = e.type.defaultProps;
                    for (u in n)
                        k.call(n, u) && !S.hasOwnProperty(u) && (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u])
                }
                var u = arguments.length - 2;
                if (1 === u)
                    a.children = r;
                else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++)
                        s[c] = arguments[c + 2];
                    a.children = s
                }
                return {
                    $$typeof: t,
                    type: e.type,
                    key: i,
                    ref: o,
                    props: a,
                    _owner: l
                }
            }
            ,
            n.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: l,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            n.createElement = N,
            n.createFactory = function(e) {
                var n = N.bind(null, e);
                return n.type = e,
                n
            }
            ,
            n.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            n.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }
            ,
            n.isValidElement = C,
            n.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: R
                }
            }
            ,
            n.memo = function(e, n) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === n ? null : n
                }
            }
            ,
            n.startTransition = function(e) {
                var n = _.transition;
                _.transition = {};
                try {
                    e()
                } finally {
                    _.transition = n
                }
            }
            ,
            n.unstable_act = M,
            n.useCallback = function(e, n) {
                return A.current.useCallback(e, n)
            }
            ,
            n.useContext = function(e) {
                return A.current.useContext(e)
            }
            ,
            n.useDebugValue = function() {}
            ,
            n.useDeferredValue = function(e) {
                return A.current.useDeferredValue(e)
            }
            ,
            n.useEffect = function(e, n) {
                return A.current.useEffect(e, n)
            }
            ,
            n.useId = function() {
                return A.current.useId()
            }
            ,
            n.useImperativeHandle = function(e, n, t) {
                return A.current.useImperativeHandle(e, n, t)
            }
            ,
            n.useInsertionEffect = function(e, n) {
                return A.current.useInsertionEffect(e, n)
            }
            ,
            n.useLayoutEffect = function(e, n) {
                return A.current.useLayoutEffect(e, n)
            }
            ,
            n.useMemo = function(e, n) {
                return A.current.useMemo(e, n)
            }
            ,
            n.useReducer = function(e, n, t) {
                return A.current.useReducer(e, n, t)
            }
            ,
            n.useRef = function(e) {
                return A.current.useRef(e)
            }
            ,
            n.useState = function(e) {
                return A.current.useState(e)
            }
            ,
            n.useSyncExternalStore = function(e, n, t) {
                return A.current.useSyncExternalStore(e, n, t)
            }
            ,
            n.useTransition = function() {
                return A.current.useTransition()
            }
            ,
            n.version = "18.3.1"
        }
        ,
        5043: (e, n, t) => {
            "use strict";
            e.exports = t(4202)
        }
        ,
        579: (e, n, t) => {
            "use strict";
            e.exports = t(1153)
        }
        ,
        7234: (e, n) => {
            "use strict";
            function t(e, n) {
                var t = e.length;
                e.push(n);
                e: for (; 0 < t; ) {
                    var r = t - 1 >>> 1
                      , a = e[r];
                    if (!(0 < i(a, n)))
                        break e;
                    e[r] = n,
                    e[t] = a,
                    t = r
                }
            }
            function r(e) {
                return 0 === e.length ? null : e[0]
            }
            function a(e) {
                if (0 === e.length)
                    return null;
                var n = e[0]
                  , t = e.pop();
                if (t !== n) {
                    e[0] = t;
                    e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
                        var l = 2 * (r + 1) - 1
                          , s = e[l]
                          , u = l + 1
                          , c = e[u];
                        if (0 > i(s, t))
                            u < a && 0 > i(c, s) ? (e[r] = c,
                            e[u] = t,
                            r = u) : (e[r] = s,
                            e[l] = t,
                            r = l);
                        else {
                            if (!(u < a && 0 > i(c, t)))
                                break e;
                            e[r] = c,
                            e[u] = t,
                            r = u
                        }
                    }
                }
                return n
            }
            function i(e, n) {
                var t = e.sortIndex - n.sortIndex;
                return 0 !== t ? t : e.id - n.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                n.unstable_now = function() {
                    return o.now()
                }
            } else {
                var l = Date
                  , s = l.now();
                n.unstable_now = function() {
                    return l.now() - s
                }
            }
            var u = []
              , c = []
              , d = 1
              , f = null
              , p = 3
              , h = !1
              , m = !1
              , g = !1
              , v = "function" === typeof setTimeout ? setTimeout : null
              , y = "function" === typeof clearTimeout ? clearTimeout : null
              , b = "undefined" !== typeof setImmediate ? setImmediate : null;
            function w(e) {
                for (var n = r(c); null !== n; ) {
                    if (null === n.callback)
                        a(c);
                    else {
                        if (!(n.startTime <= e))
                            break;
                        a(c),
                        n.sortIndex = n.expirationTime,
                        t(u, n)
                    }
                    n = r(c)
                }
            }
            function x(e) {
                if (g = !1,
                w(e),
                !m)
                    if (null !== r(u))
                        m = !0,
                        _(k);
                    else {
                        var n = r(c);
                        null !== n && P(x, n.startTime - e)
                    }
            }
            function k(e, t) {
                m = !1,
                g && (g = !1,
                y(C),
                C = -1),
                h = !0;
                var i = p;
                try {
                    for (w(t),
                    f = r(u); null !== f && (!(f.expirationTime > t) || e && !T()); ) {
                        var o = f.callback;
                        if ("function" === typeof o) {
                            f.callback = null,
                            p = f.priorityLevel;
                            var l = o(f.expirationTime <= t);
                            t = n.unstable_now(),
                            "function" === typeof l ? f.callback = l : f === r(u) && a(u),
                            w(t)
                        } else
                            a(u);
                        f = r(u)
                    }
                    if (null !== f)
                        var s = !0;
                    else {
                        var d = r(c);
                        null !== d && P(x, d.startTime - t),
                        s = !1
                    }
                    return s
                } finally {
                    f = null,
                    p = i,
                    h = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var E, S = !1, N = null, C = -1, j = 5, I = -1;
            function T() {
                return !(n.unstable_now() - I < j)
            }
            function D() {
                if (null !== N) {
                    var e = n.unstable_now();
                    I = e;
                    var t = !0;
                    try {
                        t = N(!0, e)
                    } finally {
                        t ? E() : (S = !1,
                        N = null)
                    }
                } else
                    S = !1
            }
            if ("function" === typeof b)
                E = function() {
                    b(D)
                }
                ;
            else if ("undefined" !== typeof MessageChannel) {
                var R = new MessageChannel
                  , A = R.port2;
                R.port1.onmessage = D,
                E = function() {
                    A.postMessage(null)
                }
            } else
                E = function() {
                    v(D, 0)
                }
                ;
            function _(e) {
                N = e,
                S || (S = !0,
                E())
            }
            function P(e, t) {
                C = v((function() {
                    e(n.unstable_now())
                }
                ), t)
            }
            n.unstable_IdlePriority = 5,
            n.unstable_ImmediatePriority = 1,
            n.unstable_LowPriority = 4,
            n.unstable_NormalPriority = 3,
            n.unstable_Profiling = null,
            n.unstable_UserBlockingPriority = 2,
            n.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            n.unstable_continueExecution = function() {
                m || h || (m = !0,
                _(k))
            }
            ,
            n.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < e ? Math.floor(1e3 / e) : 5
            }
            ,
            n.unstable_getCurrentPriorityLevel = function() {
                return p
            }
            ,
            n.unstable_getFirstCallbackNode = function() {
                return r(u)
            }
            ,
            n.unstable_next = function(e) {
                switch (p) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = p
                }
                var t = p;
                p = n;
                try {
                    return e()
                } finally {
                    p = t
                }
            }
            ,
            n.unstable_pauseExecution = function() {}
            ,
            n.unstable_requestPaint = function() {}
            ,
            n.unstable_runWithPriority = function(e, n) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var t = p;
                p = e;
                try {
                    return n()
                } finally {
                    p = t
                }
            }
            ,
            n.unstable_scheduleCallback = function(e, a, i) {
                var o = n.unstable_now();
                switch ("object" === typeof i && null !== i ? i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o : i = o,
                e) {
                case 1:
                    var l = -1;
                    break;
                case 2:
                    l = 250;
                    break;
                case 5:
                    l = 1073741823;
                    break;
                case 4:
                    l = 1e4;
                    break;
                default:
                    l = 5e3
                }
                return e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: l = i + l,
                    sortIndex: -1
                },
                i > o ? (e.sortIndex = i,
                t(c, e),
                null === r(u) && e === r(c) && (g ? (y(C),
                C = -1) : g = !0,
                P(x, i - o))) : (e.sortIndex = l,
                t(u, e),
                m || h || (m = !0,
                _(k))),
                e
            }
            ,
            n.unstable_shouldYield = T,
            n.unstable_wrapCallback = function(e) {
                var n = p;
                return function() {
                    var t = p;
                    p = n;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        p = t
                    }
                }
            }
        }
        ,
        8853: (e, n, t) => {
            "use strict";
            e.exports = t(7234)
        }
        ,
        7542: (e, n, t) => {
            var r = {
                "./acrossEmail.js": [8806, 806],
                "./adminEmail.js": [2888, 888],
                "./estraussEmail.js": [1727, 727],
                "./nmanhavEmail.js": [702, 702],
                "./ovaleEmail.js": [5728, 728],
                "./rbakerEmail.js": [4020, 20]
            };
            function a(e) {
                if (!t.o(r, e))
                    return Promise.resolve().then(( () => {
                        var n = new Error("Cannot find module '" + e + "'");
                        throw n.code = "MODULE_NOT_FOUND",
                        n
                    }
                    ));
                var n = r[e]
                  , a = n[0];
                return t.e(n[1]).then(( () => t(a)))
            }
            a.keys = () => Object.keys(r),
            a.id = 7542,
            e.exports = a
        }
        ,
        3658: (e, n, t) => {
            var r = {
                "./acrossExperiments.js": [7822, 822],
                "./adminExperiments.js": [9452, 452],
                "./estraussExperiments.js": [5527, 527],
                "./nmanhavExperiments.js": [8854, 854],
                "./ovaleExperiments.js": [820, 820],
                "./rbakerExperiments.js": [5984, 984]
            };
            function a(e) {
                if (!t.o(r, e))
                    return Promise.resolve().then(( () => {
                        var n = new Error("Cannot find module '" + e + "'");
                        throw n.code = "MODULE_NOT_FOUND",
                        n
                    }
                    ));
                var n = r[e]
                  , a = n[0];
                return t.e(n[1]).then(( () => t(a)))
            }
            a.keys = () => Object.keys(r),
            a.id = 3658,
            e.exports = a
        }
        ,
        8015: (e, n, t) => {
            var r = {
                "./acrossFiles.js": [1297, 607],
                "./adminFiles.js": [7363, 363],
                "./estraussFiles.js": [1012, 12],
                "./nmanhavFiles.js": [1993, 586],
                "./ovaleFiles.js": [6567, 253],
                "./rbakerFiles.js": [3768, 878]
            };
            function a(e) {
                if (!t.o(r, e))
                    return Promise.resolve().then(( () => {
                        var n = new Error("Cannot find module '" + e + "'");
                        throw n.code = "MODULE_NOT_FOUND",
                        n
                    }
                    ));
                var n = r[e]
                  , a = n[0];
                return t.e(n[1]).then(( () => t(a)))
            }
            a.keys = () => Object.keys(r),
            a.id = 8015,
            e.exports = a
        }
    }
      , n = {};
    function t(r) {
        var a = n[r];
        if (void 0 !== a)
            return a.exports;
        var i = n[r] = {
            exports: {}
        };
        return e[r](i, i.exports, t),
        i.exports
    }
    t.m = e,
    t.d = (e, n) => {
        for (var r in n)
            t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: n[r]
            })
    }
    ,
    t.f = {},
    t.e = e => Promise.all(Object.keys(t.f).reduce(( (n, r) => (t.f[r](e, n),
    n)), [])),
    t.u = e => "static/js/" + e + "." + {
        12: "22392163",
        20: "dc36c5c2",
        253: "7a72fb04",
        363: "faa82cec",
        452: "f0c77528",
        453: "2e4230c5",
        527: "eb5e97f8",
        586: "7d56d23d",
        607: "e6e190ec",
        702: "007a4e05",
        727: "7499a685",
        728: "57010205",
        806: "01e16e3d",
        820: "015742cf",
        822: "cd8ae484",
        854: "50da599e",
        878: "dfe7d428",
        888: "b3d554c0",
        984: "1f364fc5"
    }[e] + ".chunk.js",
    t.miniCssF = e => {}
    ,
    t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n),
    ( () => {
        var e = {}
          , n = "demiurge-inc:";
        t.l = (r, a, i, o) => {
            if (e[r])
                e[r].push(a);
            else {
                var l, s;
                if (void 0 !== i)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                        var d = u[c];
                        if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == n + i) {
                            l = d;
                            break
                        }
                    }
                l || (s = !0,
                (l = document.createElement("script")).charset = "utf-8",
                l.timeout = 120,
                t.nc && l.setAttribute("nonce", t.nc),
                l.setAttribute("data-webpack", n + i),
                l.src = r),
                e[r] = [a];
                var f = (n, t) => {
                    l.onerror = l.onload = null,
                    clearTimeout(p);
                    var a = e[r];
                    if (delete e[r],
                    l.parentNode && l.parentNode.removeChild(l),
                    a && a.forEach((e => e(t))),
                    n)
                        return n(t)
                }
                  , p = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
                l.onerror = f.bind(null, l.onerror),
                l.onload = f.bind(null, l.onload),
                s && document.head.appendChild(l)
            }
        }
    }
    )(),
    t.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.p = "/",
    ( () => {
        var e = {
            792: 0
        };
        t.f.j = (n, r) => {
            var a = t.o(e, n) ? e[n] : void 0;
            if (0 !== a)
                if (a)
                    r.push(a[2]);
                else {
                    var i = new Promise(( (t, r) => a = e[n] = [t, r]));
                    r.push(a[2] = i);
                    var o = t.p + t.u(n)
                      , l = new Error;
                    t.l(o, (r => {
                        if (t.o(e, n) && (0 !== (a = e[n]) && (e[n] = void 0),
                        a)) {
                            var i = r && ("load" === r.type ? "missing" : r.type)
                              , o = r && r.target && r.target.src;
                            l.message = "Loading chunk " + n + " failed.\n(" + i + ": " + o + ")",
                            l.name = "ChunkLoadError",
                            l.type = i,
                            l.request = o,
                            a[1](l)
                        }
                    }
                    ), "chunk-" + n, n)
                }
        }
        ;
        var n = (n, r) => {
            var a, i, o = r[0], l = r[1], s = r[2], u = 0;
            if (o.some((n => 0 !== e[n]))) {
                for (a in l)
                    t.o(l, a) && (t.m[a] = l[a]);
                if (s)
                    s(t)
            }
            for (n && n(r); u < o.length; u++)
                i = o[u],
                t.o(e, i) && e[i] && e[i][0](),
                e[i] = 0
        }
          , r = self.webpackChunkdemiurge_inc = self.webpackChunkdemiurge_inc || [];
        r.forEach(n.bind(null, 0)),
        r.push = n.bind(null, r.push.bind(r))
    }
    )(),
    ( () => {
        "use strict";
        var e = t(5043)
          , n = t(4391);
        const r = t.p + "static/media/qcgheader.14190b6839b89a38c4a8.webp";
        var a = t(579);
        const i = e => {
            let {toggleSidebar: n} = e;
            return (0,
            a.jsx)("header", {
                className: "header",
                onClick: n,
                children: (0,
                a.jsx)("img", {
                    src: r,
                    alt: "Demiurge Inc. Header",
                    className: "header-image"
                })
            })
        }
          , o = e => {
            var n, t;
            let {isSidebarShrunk: r, handleNavigation: i, loggedIn: o, users: l, inputUsername: s, setInputUsername: u, setInputPassword: c, handleLogout: d, toggleSidebar: f, error: p, handleLogin: h, theme: m, toggleTheme: g, openTerminal: v} = e;
            return (0,
            a.jsxs)("div", {
                className: "sidebar " + (r ? "shrink" : ""),
                children: [(0,
                a.jsx)("div", {
                    className: "sidebar-close-overlay",
                    onClick: f
                }), (0,
                a.jsxs)("nav", {
                    onClick: e => e.stopPropagation(),
                    children: [["HOME", "NEWS", "FAQ", "CONTACT", "CAREERS", "INVESTORS", "ABOUT", "LEGAL"].map((e => (0,
                    a.jsx)("a", {
                        href: "#",
                        onClick: n => {
                            n.preventDefault(),
                            i(e.toLowerCase())
                        }
                        ,
                        children: e
                    }, e))), o && (null === (n = l[s]) || void 0 === n || null === (t = n.pages) || void 0 === t ? void 0 : t.map((e => (0,
                    a.jsx)("a", {
                        href: "#",
                        onClick: n => {
                            n.preventDefault(),
                            i(e)
                        }
                        ,
                        children: e.toUpperCase()
                    }, e))))]
                }), (0,
                a.jsx)("div", {
                    className: "login-container",
                    children: o ? (0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsxs)("p", {
                            children: ["USER: ", s]
                        }), (0,
                        a.jsx)("a", {
                            href: "#",
                            onClick: e => {
                                e.preventDefault(),
                                d()
                            }
                            ,
                            className: "logout-link",
                            children: "LOGOUT"
                        })]
                    }) : (0,
                    a.jsxs)("form", {
                        onSubmit: h,
                        children: [(0,
                        a.jsx)("input", {
                            type: "text",
                            placeholder: "Username",
                            value: s,
                            onChange: e => u(e.target.value)
                        }), (0,
                        a.jsx)("input", {
                            type: "password",
                            placeholder: "Password",
                            onChange: e => c(e.target.value)
                        }), (0,
                        a.jsx)("button", {
                            type: "submit",
                            children: "LOGIN"
                        }), p && (0,
                        a.jsx)("p", {
                            className: "error",
                            children: p
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: "theme-toggle",
                    children: (0,
                    a.jsxs)("button", {
                        disabled: !1,
                        onClick: g,
                        children: ["Switch to ", "light" === m ? "Dark" : "Light", " Mode"]
                    })
                })]
            })
        }
          , l = e => {
            var n, t;
            let {pageContent: r, activePage: i} = e;
            return (0,
            a.jsx)("div", {
                className: "main-content",
                children: (0,
                a.jsxs)("div", {
                    children: [(0,
                    a.jsx)("h2", {
                        children: (null === (n = r[i]) || void 0 === n ? void 0 : n.title) || "Page Not Found"
                    }), (null === (t = r[i]) || void 0 === t ? void 0 : t.content) || (0,
                    a.jsx)("p", {
                        children: "No content available."
                    })]
                })
            })
        }
          , s = t.p + "static/media/demiurgeLogo.b4916aab46f034fa5f73.webp";
        const u = function() {
            return (0,
            a.jsxs)("div", {
                className: "home-container",
                children: [(0,
                a.jsx)("img", {
                    src: s,
                    alt: "Demiurge Inc. Logo",
                    className: "logo"
                }), (0,
                a.jsx)("h1", {
                    children: "Welcome to DEMIURGE INC."
                }), (0,
                a.jsx)("p", {
                    children: "At DEMIURGE INC., we are pioneers in reality-warping technology, dedicated to pushing the boundaries of what is scientifically possible. Our innovative solutions are at the forefront of technological advancements, enabling new dimensions of human experience and interaction."
                }), (0,
                a.jsxs)("div", {
                    className: "features",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "feature",
                        children: [(0,
                        a.jsx)("h2", {
                            children: "Cutting-Edge Research"
                        }), (0,
                        a.jsx)("p", {
                            children: "Our team of world-renowned scientists and engineers are exploring the most advanced technologies, from quantum computing to augmented reality, to reshape the future of humanity and benefit our investors."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "feature",
                        children: [(0,
                        a.jsx)("h2", {
                            children: "Global Collaboration"
                        }), (0,
                        a.jsx)("p", {
                            children: "Partnering with leading research institutions and corporations worldwide, we are expanding the horizons of technology, science, and industry through innovative collaborations with the forefront of governments, telecommunications, aerospace, and weapons manufacturers."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "feature",
                        children: [(0,
                        a.jsx)("h2", {
                            children: "Innovative Solutions"
                        }), (0,
                        a.jsx)("p", {
                            children: "Our cutting-edge solutions address some of the most pressing challenges in multiple industries, including healthcare, defense, and entertainment, providing unparalleled benefits and opportunities. DEMIURGE INC. provides services and abilities of which no other laboratory on the planet is capable."
                        })]
                    })]
                })]
            })
        };
        const c = function() {
            const [n,t] = (0,
            e.useState)(null);
            return (0,
            a.jsx)("div", {
                className: "container",
                children: [{
                    title: "September 2024: Demiurge Inc. Unveils Next-Generation Reality Warping Technology",
                    content: "Demiurge Inc. is excited to announce the successful development of our latest reality-warping technology, set to revolutionize various industries, including entertainment, defense, and medicine. This breakthrough will allow users to manipulate and experience augmented reality with unprecedented precision and control. The new technology integrates seamlessly with existing systems, making it accessible for widespread adoption across different sectors. Early testing has shown remarkable results, with users reporting an unparalleled level of immersion and interaction."
                }, {
                    title: "August 2024: Demiurge Inc. Launches Cutting-Edge Virtual Reality Training Program",
                    content: "Demiurge Inc. has officially launched its groundbreaking Virtual Reality Training Program designed for professionals in high-risk industries such as aerospace, healthcare, and military operations. This innovative program immerses trainees in realistic, high-pressure scenarios, enabling them to develop critical skills in a controlled environment. Our advanced VR simulations are powered by proprietary technology that adapts to the user\u2019s responses, providing a personalized training experience. The program has received acclaim for its potential to revolutionize training methodologies across multiple sectors."
                }, {
                    title: "July 2024: Collaboration with Global Research Institutes",
                    content: "In July, Demiurge Inc. entered into strategic partnerships with several leading global research institutions. These collaborations aim to advance our understanding of quantum mechanics and its applications in real-world scenarios. Our joint projects are expected to yield groundbreaking results that will push the boundaries of what is scientifically possible. The collaboration also paves the way for future projects that could redefine our approach to complex scientific challenges."
                }, {
                    title: "June 2024: Expansion of Facilities",
                    content: "Demiurge Inc. has expanded its state-of-the-art facilities to accommodate the growing demand for our cutting-edge research. The new laboratories and testing grounds will allow for more comprehensive experimentation and faster development cycles, ensuring we remain at the forefront of technological innovation. This expansion also includes the addition of specialized equipment that will enable our teams to explore new areas of research. Our commitment to providing the best resources for our scientists continues to drive our success and innovation."
                }, {
                    title: "May 2024: Public Lecture Series on Multiverse Theories",
                    content: "To foster greater understanding of our work, Demiurge Inc. launched a public lecture series focused on multiverse theories and their practical applications. These lectures are led by our top scientists and are open to the public, providing a rare glimpse into the complex and fascinating world of advanced theoretical physics. Attendance has exceeded expectations, with participants expressing keen interest in the implications of multiverse research on future technology. The series has sparked widespread discussion and interest in the scientific community and beyond."
                }, {
                    title: "April 2024: Launch of the 'Future Vision' Internship Program",
                    content: "Demiurge Inc. is proud to introduce the 'Future Vision' Internship Program, offering young scientists and engineers the opportunity to work alongside our experts. This program is designed to cultivate the next generation of innovators, providing them with hands-on experience in cutting-edge research and development. Participants will have the chance to contribute to real-world projects and gain invaluable insights into the future of science and technology. The program has already attracted top talent from universities around the globe, reflecting our commitment to shaping the future of innovation."
                }, {
                    title: "March 2024: Demiurge Inc. Recognized for Ethical Innovation",
                    content: "In March 2024, Demiurge Inc. received the prestigious Ethical Innovation Award from the International Science Council. This award highlights our commitment to advancing technology while adhering to the highest ethical standards. Our dedication to responsible research practices sets us apart as a leader in the industry. We continue to prioritize ethical considerations in all our projects, ensuring that our innovations benefit society as a whole."
                }, {
                    title: "February 2024: New Research Grants Secured",
                    content: "Demiurge Inc. secured several new research grants totaling over $50 million in February 2024. These funds will support our ongoing projects in quantum computing, artificial intelligence, and next-gen material sciences. The grants will also enable us to explore new avenues of research that could have far-reaching implications for the future. We are committed to using these resources to drive innovation and achieve significant scientific breakthroughs."
                }, {
                    title: "January 2024: Demiurge Inc. Launches 'Vision 2030' Initiative",
                    content: "At the start of the year, Demiurge Inc. launched the 'Vision 2030' initiative, a long-term strategic plan aimed at positioning the company as a global leader in reality manipulation technologies. This ambitious roadmap outlines our goals for the next decade, including key milestones in research, development, and commercialization. As part of this initiative, we will be expanding our global presence and increasing our investment in emerging technologies. Our Vision 2030 plan is designed to ensure that Demiurge Inc. remains at the forefront of innovation for years to come."
                }, {
                    title: "December 2023: Record Year for Patent Filings",
                    content: "December 2023 marked a record year for Demiurge Inc. with the filing of over 120 patents. These patents cover a wide range of innovations, from advanced neural interfaces to groundbreaking AR applications. This achievement underscores our relentless pursuit of innovation and our commitment to developing cutting-edge technologies. The new patents will play a crucial role in securing our position as a leader in the tech industry and ensuring our continued growth and success."
                }, {
                    title: "November 2023: Strategic Acquisition of Quantum Dynamics Ltd.",
                    content: "In November 2023, Demiurge Inc. completed the strategic acquisition of Quantum Dynamics Ltd., a company specializing in quantum entanglement technologies. This acquisition strengthens our position in the quantum technology sector and provides us with the expertise needed to accelerate our research and development efforts. The integration of Quantum Dynamics\u2019 expertise into our operations is already yielding significant advancements in our quantum research projects. We are excited about the potential this acquisition brings to enhance our technological capabilities."
                }, {
                    title: "October 2023: Demiurge Inc. Hosts First Annual Science and Technology Symposium",
                    content: "October 2023 saw the inaugural Science and Technology Symposium hosted by Demiurge Inc. The event brought together leading scientists, engineers, and innovators from around the world to discuss the latest advancements in reality manipulation, quantum computing, and artificial intelligence. The symposium was a resounding success and is set to become an annual event. Participants shared groundbreaking ideas and collaborated on potential future projects, setting the stage for the next wave of scientific innovation."
                }].map(( (e, r) => (0,
                a.jsxs)("div", {
                    className: "news-item " + (n === r ? "open" : ""),
                    children: [(0,
                    a.jsx)("h3", {
                        className: "news-title",
                        onClick: () => (e => {
                            t(n === e ? null : e)
                        }
                        )(r),
                        children: e.title
                    }), n === r && (0,
                    a.jsx)("p", {
                        children: e.content
                    })]
                }, r)))
            })
        };
        const d = function() {
            const n = [{
                question: "What is DEMIURGE INC.?",
                answer: "DEMIURGE INC. is a cutting-edge research facility at the forefront of technological innovation, specializing in reality-warping technologies. Our mission is to challenge the limits of what is scientifically possible by exploring new dimensions of human experience and technology. Through our pioneering research, we aim to unlock the full potential of reality manipulation, pushing boundaries that were once considered purely speculative. Our work spans across various disciplines, and we are committed to advancing knowledge in ways that will fundamentally alter the future of science and technology."
            }, {
                question: "What exactly are the origins of DEMIURGE INC.?",
                answer: "While official records (i.e. IRS payroll documentation) indicate that the laboratory was founded in 1990, deeper investigations have revealed anomalies suggesting that the lab may have existed long before its formal inception. Some of our earliest research projects reference the company itself\u2014decades before it was officially known or discovered. This paradox has led to theories that DEMIURGE INC. may not have been founded in the traditional sense, but rather discovered, potentially even by itself, through its own experiments on time loops, dimensional shifts, and reality modulation. Some believe that DEMIURGE INC. created its own inception point in a self-referential loop. Whether by design or anomaly, the lab's existence has become deeply intertwined with the very phenomena it studies, and much like the multiverse, its origins remain a mystery we may never fully unravel."
            }, {
                question: "How can I participate in DEMIURGE INC.'s research projects?",
                answer: "Participation in DEMIURGE INC.\u2019s research projects is highly competitive, given the groundbreaking nature of our work. We conduct a rigorous application process to ensure that only the most qualified and committed individuals are selected. While we occasionally open applications for specific experiments, these opportunities are rare and require applicants to meet strict criteria. If you are passionate about pushing the boundaries of reality and technology, we encourage you to monitor our Careers page for openings. Successful applicants will have the chance to contribute to research that could change the world(s)."
            }, {
                question: "What kind of experiments does DEMIURGE INC. conduct?",
                answer: "At DEMIURGE INC., our experiments cover a vast range of scientific inquiries, from the practical applications of virtual and augmented reality to more speculative research such as multiverse theory and reality manipulation. Our experts specialize in temporal readjustment, asynchronicity, quantum correction, retrocausation, wave function collapse annulment, paradox resolution/'grandfathering,' dreamscape navigation, oneiric cartography, corporeal untangling, custom spacetime origami, neuromorphic enhancement, omni-resonance attunement, multiverse nexus flux alignment, thalamocortical state rewiring, temporal parallax nullification, corticoresonance synchronization, causal re-sequencing, reality synthesis, inter-spatial tethering, and so much more!"
            }, {
                question: "Is DEMIURGE INC.'s technology safe?",
                answer: "Safety is a paramount concern at DEMIURGE INC., and all of our research is conducted under the strictest ethical guidelines and safety protocols. We understand that our work involves pushing the boundaries of conventional science, which inherently comes with risks. However, we take every possible precaution to ensure that our experiments are conducted in a controlled and secure environment. Participants in our research are fully informed of any potential risks and must provide informed consent before involvement. While the nature of our work means we are often in uncharted territory, we are committed to ensuring the safety and well-being of all participants and researchers."
            }, {
                question: "Can the public visit DEMIURGE INC.'s facilities?",
                answer: "Due to the sensitive and confidential nature of our work, DEMIURGE INC.'s facilities are not open to the public. Our research involves cutting-edge technologies and proprietary methodologies that require a secure environment. However, we recognize the public's interest in our work, and to that end, we offer information on our website as well as direct inquiry through our Contact page. We remain committed to transparency and public engagement, within the bounds of our security protocols."
            }, {
                question: "Who can I contact for more information?",
                answer: "If you have any questions or need further information about DEMIURGE INC. and our research, we encourage you to reach out to us through the Contact page. Our team is dedicated to providing clear and helpful information to all inquiries. Whether you are interested in learning more about our experiments, applying for a position, or investing in our work, our team is here to assist you. We strive to respond to all messages promptly and ensure that you have the information you need to engage with DEMIURGE INC."
            }, {
                question: "Does DEMIURGE INC. collaborate with government agencies?",
                answer: (0,
                a.jsxs)("span", {
                    children: ["DEMIURGE INC. engages in collaborative research with various government agencies worldwide when it aligns with our mission to advance scientific knowledge and technological innovation. These partnerships allow us to leverage additional resources (read: COLD HARD CASH) and expertise, enabling us to explore new frontiers in our research. We maintain strict confidentiality and ethical standards in all collaborations. Some of the agencies we have interacted with include:", (0,
                    a.jsxs)("ul", {
                        children: [(0,
                        a.jsx)("li", {
                            children: "CIA (Central Intelligence Agency, USA)"
                        }), (0,
                        a.jsx)("li", {
                            children: "FBI (Federal Bureau of Investigation, USA)"
                        }), (0,
                        a.jsx)("li", {
                            children: "NSA (National Security Agency, USA)"
                        }), (0,
                        a.jsx)("li", {
                            children: "ATF (Bureau of Alcohol, Tobacco, Firearms and Explosives, USA)"
                        }), (0,
                        a.jsx)("li", {
                            children: "DIA (Defense Intelligence Agency, USA)"
                        }), (0,
                        a.jsx)("li", {
                            children: "DHS (Department of Homeland Security, USA)"
                        }), (0,
                        a.jsx)("li", {
                            children: "MI6 (Secret Intelligence Service, UK)"
                        }), (0,
                        a.jsx)("li", {
                            children: "GCHQ (Government Communications Headquarters, UK)"
                        }), (0,
                        a.jsx)("li", {
                            children: "Mossad (Institute for Intelligence and Special Operations, Israel)"
                        }), (0,
                        a.jsx)("li", {
                            children: "GRU (Main Intelligence Directorate, Russia)"
                        }), (0,
                        a.jsx)("li", {
                            children: "FSB (Federal Security Service, Russia)"
                        }), (0,
                        a.jsx)("li", {
                            children: "BND (Federal Intelligence Service, Germany)"
                        }), (0,
                        a.jsx)("li", {
                            children: "DGI (Directorate of Military Intelligence, France)"
                        }), (0,
                        a.jsx)("li", {
                            children: "DGSE (Directorate General for External Security, France)"
                        }), (0,
                        a.jsx)("li", {
                            children: "ASIS (Australian Secret Intelligence Service, Australia)"
                        }), (0,
                        a.jsx)("li", {
                            children: "CSIS (Canadian Security Intelligence Service, Canada)"
                        }), (0,
                        a.jsx)("li", {
                            children: "RAW (Research and Analysis Wing, India)"
                        }), (0,
                        a.jsx)("li", {
                            children: "CNI (National Intelligence Center, Spain)"
                        }), (0,
                        a.jsx)("li", {
                            children: "SIS (Secret Intelligence Service, New Zealand)"
                        }), (0,
                        a.jsx)("li", {
                            children: "SBU (Security Service of Ukraine, Ukraine)"
                        })]
                    }), "We conduct all collaborations with the highest level of integrity, and our commitment to transparency and ethical responsibility remains paramount in all our dealings."]
                })
            }, {
                question: "Is DEMIURGE INC. involved with weapons manufacturers?",
                answer: "DEMIURGE INC. is deeply involved and associated with the development of many cutting-edge technologies, including new and unprecedented weapons technologies. Our research has led to innovations that have captured the attention of the defense industry, and we have collaborated with dozens of weapons manufacturers over the years. While our primary focus remains on reality-warping technologies, we recognize the potential dual-use applications of our work, including in the realm of advanced weaponry. These collaborations are conducted with strict oversight to ensure that all developments are in line with ethical guidelines and contribute to global security in a responsible manner."
            }, {
                question: "What is DEMIURGE INC.'s response to the controversies surrounding missing persons involved in your experiments?",
                answer: "DEMIURGE INC. is aware of the rumors and speculation regarding missing persons allegedly connected to our research. We want to assure the public that these claims are baseless and without merit. All participants in our experiments are carefully screened, and their participation is fully voluntary and conducted under strict ethical guidelines. We have no involvement in any cases of missing persons, and we cooperate fully with law enforcement agencies to ensure transparency. Our primary focus remains on pioneering safe and responsible technological advancements that benefit humanity."
            }, {
                question: "What exactly does 'reality modulation' entail?",
                answer: "Reality modulation is a highly specialized field that allows us to manipulate the fabric of existence itself. While this may sound alarming, rest assured, our experiments are all conducted within controlled parameters (most of the time). By adjusting various constants in our known universe, we can influence everything from time perception to physical laws. For instance, reality modulation has allowed us to 'stretch' time during certain high-priority projects. Of course, any reports of missing hours, days, or even weeks for certain staff members are purely coincidental."
            }, {
                question: "Have any ethical concerns been raised about your work?",
                answer: "Ethics are a cornerstone of everything we do here at DEMIURGE INC. (according to our PR team). We strictly adhere to ethical guidelines, ensuring that all of our projects are as safe and non-invasive as possible. That being said, there have been the occasional 'hiccup' - such as when a project briefly caused local temporal distortions - but we can confidently say that most affected individuals have returned to their normal timelines with little more than a mild headache or sudden loss of memory."
            }, {
                question: "Can your research be used to create new universes?",
                answer: "In theory, yes. Our research in reality manipulation and dimensional tuning has allowed us to explore the possibility of creating entirely new universes. Of course, these universes are small and highly unstable, and any mention of rogue realities breaking free and attempting to overwrite our own are grossly exaggerated. We\u2019re currently working on methods to contain these universes safely, though we strongly advise against anyone attempting to interact with them until further notice. If you see something strange, say something."
            }, {
                question: "What happens to participants who fail experiments?",
                answer: "Failure is a part of progress. Participants who 'fail' in our experiments are not so much failures as they are part of a learning process. Of course, in the rare instances when an experiment doesn\u2019t go as planned, participants are swiftly reassigned (and occasionally re-materialized) with little to no permanent damage - aside from the occasional spatial dislocation or loss of corporeal form."
            }, {
                question: "Have there been any unusual side effects from working at DEMIURGE INC.?",
                answer: "Unusual? Well, nothing out of the ordinary for cutting-edge research in dimensional tuning and reality modulation. Some employees have reported mild side effects such as spontaneous time dilation, temporary non-existence, or waking up in alternate dimensions. But overall, morale remains high! After all, who wouldn\u2019t want to come to work knowing that they might accidentally glimpse the end of the universe or be erased from history?"
            }, {
                question: "What is the purpose of the room marked 'DO NOT ENTER' in your facility?",
                answer: "Ah, the infamous 'DO NOT ENTER' room. It's less of a place to be feared and more of a... containment area for certain experiments that went *slightly* off course. Rest assured, it's perfectly safe - as long as you DO NOT ENTER. Any rumors you may have heard about strange noises, flashing lights, or shadowy figures seen near the door are simply the result of environmental anomalies. We've handled worse, and we always find a solution. Eventually."
            }, {
                question: "Why do some staff seem to disappear from company records after certain projects?",
                answer: "We value the privacy of our staff and their involvement in sensitive projects. Occasionally, certain individuals may choose to 'step away' from the company after particularly successful or classified research. Any gaps in company records are purely administrative, and we assure you that all former staff members are accounted for - somewhere, in some dimension, existing happily ever after. Probably living on an old farm or something."
            }, {
                question: "Are there any forbidden experiments at DEMIURGE INC.?",
                answer: "Officially, no. Unofficially... let's just say that there are certain areas of study we strongly discourage. Some doors are best left unopened, and certain experiments have been placed on indefinite hold due to their 'unpredictable' nature. For instance, there was one project that \u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae\u25ae we\u2019re still studying the aftereffects. We\u2019re confident that nothing catastrophic will come of it. Probably."
            }]
              , [t,r] = (0,
            e.useState)(null);
            return (0,
            a.jsxs)("div", {
                className: "faq-page",
                children: [(0,
                a.jsx)("h1", {
                    children: "Frequently Asked Questions"
                }), n.map(( (e, n) => (0,
                a.jsxs)("div", {
                    className: "faq-item",
                    children: [(0,
                    a.jsx)("div", {
                        className: "faq-question",
                        onClick: () => (e => {
                            r(t === e ? null : e)
                        }
                        )(n),
                        children: (0,
                        a.jsx)("strong", {
                            children: e.question
                        })
                    }), t === n && (0,
                    a.jsx)("div", {
                        className: "faq-answer",
                        children: e.answer
                    })]
                }, n)))]
            })
        };
        const f = function() {
            return (0,
            a.jsxs)("div", {
                className: "contact-page",
                children: [(0,
                a.jsx)("h1", {
                    children: "Contact Us"
                }), (0,
                a.jsx)("p", {
                    children: "We appreciate your interest in DEMIURGE INC. If you have any questions, inquiries, or require further information, please do not hesitate to reach out to us through the following contact details:"
                }), (0,
                a.jsx)("h2", {
                    children: "General Inquiries"
                }), (0,
                a.jsxs)("p", {
                    children: ["Email: ", (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com?subject=DEMIURGE INC. General Inquiries",
                        title: "info@demiurge-inc.com",
                        children: "info@demiurge-inc.com"
                    })]
                }), (0,
                a.jsx)("h2", {
                    children: "Investor Relations"
                }), (0,
                a.jsxs)("p", {
                    children: ["Email: ", (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com?subject=DEMIURGE INC. Investment Inquiry&body=DEMIURGE INC.,%0A%0AI am interested in investing in your endeavors and would love more information about how I can contribute to your expansion into alternate markets.%0A%0AAmount of capital I am willing to invest:%0A%0APreferred area of investment (dimensional warfare, multiverse travel, reality manipulation, etc.):%0A%0AAny concerns about ethical practices or risks to my personal reality:%0A%0AThank you for this opportunity to partner in reshaping the boundaries of existence.%0A%0ASincerely,%0A[Your Name]",
                        title: "investors@demiurge-inc.com",
                        children: "investors@demiurge-inc.com"
                    })]
                }), (0,
                a.jsx)("h2", {
                    children: "Report Strange Event/Dimensional Anomaly"
                }), (0,
                a.jsxs)("p", {
                    children: ["Email: ", (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com?subject=DEMIURGE INC. Strange Event/Dimensional Anomaly Report&body=DEMIURGE INC.,%0A%0AI would like to report a strange event or dimensional anomaly.%0A%0AIncident Description:%0ADate and Time of Occurrence:%0ALocation of Incident (if applicable):%0ADetailed Explanation of Event:%0A%0AHas this occurred before?: [Yes/No]%0A%0AHave you ever experienced deja vu?%0A%0AAny additional information:%0A%0AThank you for investigating this matter.%0A%0ASincerely,%0A[Your Name]",
                        title: "report@demiurge-inc.com",
                        children: "report@demiurge-inc.com"
                    })]
                }), (0,
                a.jsx)("h2", {
                    children: "Missing Persons"
                }), (0,
                a.jsxs)("p", {
                    children: ["Email: ", (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com?subject=DEMIURGE INC. Missing Persons Report&body=DEMIURGE INC.,%0A%0AI would like to report a missing person who was involved in DEMIURGE INC. experimentation.%0A%0AName of the Missing Person (if still remembered):%0ALast Known Date of Contact:%0AExperiment Involved:%0ALast Known Location:%0A%0AAny unusual behavior or anomalies leading up to their disappearance:%0A%0ADo you have any theories about their current dimension or state of existence?:%0A%0AThank you for investigating this matter.%0A%0ASincerely,%0A[Your Name or Current Identity]",
                        title: "missing@demiurge-inc.com",
                        children: "missing@demiurge-inc.com"
                    })]
                }), (0,
                a.jsx)("h2", {
                    children: "Media Inquiries"
                }), (0,
                a.jsxs)("p", {
                    children: ["Email: ", (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com?subject=Media Inquiry About DEMIURGE INC.&body=DEMIURGE INC.,%0A%0AI am a member of the media and would love to learn more about your groundbreaking work. Please consider the following questions for an upcoming story:%0A%0A1. How exactly do you ensure the safety of those involved in your experiments, and what *really* happened during the Greyfield Anomaly?%0A2. Can you confirm or deny the rumors of entire teams disappearing into alternate dimensions mid-experiment?%0A3. What steps is DEMIURGE INC. taking to avoid, you know, accidentally collapsing the universe?%0A4. Should the public be concerned about the so-called 'dimensional anomalies' near your facility?%0A%0AThank you for your time.%0A%0ASincerely,%0A[Your Name, Reporter from (Media Outlet)]",
                        title: "media@demiurge-inc.com",
                        children: "media@demiurge-inc.com"
                    })]
                })]
            })
        };
        const p = function() {
            const [n,t] = (0,
            e.useState)(null)
              , r = e => {
                t(n === e ? null : e)
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "careers-page",
                children: [(0,
                a.jsx)("h1", {
                    children: "Join the Pioneers of Reality Manipulation"
                }), (0,
                a.jsx)("p", {
                    children: "DEMIURGE INC. is at the forefront of cutting-edge research in reality manipulation and entropy reversal technology. We are seeking talented individuals to join our elite team. Below are our current openings:"
                }), (0,
                a.jsx)("h2", {
                    onClick: () => r("leadScientist"),
                    className: "position-title",
                    children: "Lead Scientist in Entropy Reversal and Reality Manipulation"
                }), "leadScientist" === n && (0,
                a.jsxs)("div", {
                    className: "position-details",
                    children: [(0,
                    a.jsx)("p", {
                        children: "The ideal candidate will have a deep understanding of:"
                    }), (0,
                    a.jsxs)("ul", {
                        children: [(0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Quantum Entropy Modulation:"
                            }), " Expertise in the modulation of quantum entropy states to induce targeted reversal of thermodynamic processes."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Chrono-Synchronicity Engineering:"
                            }), " Advanced knowledge of chrono-synchronicity and its applications in the stabilization of parallel realities and time dilation phenomena."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Dimensional Flux Control:"
                            }), " Proficiency in managing dimensional fluxes to maintain stability during reality shifts and prevent cascade failures."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Entropy Singularity Extraction:"
                            }), " Experience in the extraction and harnessing of entropy singularities as a source of sustainable energy."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Multiversal Waveform Collapse:"
                            }), " Familiarity with techniques to induce or prevent waveform collapse across multiple universes for controlled reality fragmentation."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Ontological Resonance Tuning:"
                            }), " Skill in fine-tuning ontological resonances to align with desired outcomes across divergent timelines."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Reality Stabilization Protocols:"
                            }), " Development and implementation of protocols to stabilize and reinforce the integrity of reality during high-risk manipulation procedures."]
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "This role offers the opportunity to work at the cutting edge of scientific discovery, contributing to research that has the potential to reshape entire universes. DEMIURGE INC. provides a collaborative environment where innovative thinking and technical excellence are valued and rewarded."
                    })]
                }), (0,
                a.jsx)("h2", {
                    onClick: () => r("softwareEngineer"),
                    className: "position-title",
                    children: "Senior Software Engineer/Neuroscientist"
                }), "softwareEngineer" === n && (0,
                a.jsxs)("div", {
                    className: "position-details",
                    children: [(0,
                    a.jsx)("p", {
                        children: "The ideal candidate will possess expertise in:"
                    }), (0,
                    a.jsxs)("ul", {
                        children: [(0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Reality Simulation Algorithms:"
                            }), " Developing complex algorithms that simulate real-time reality manipulation scenarios."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Quantum Computing Integration:"
                            }), " Implementing software solutions that leverage quantum computing for enhanced processing power."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Augmented Reality Systems:"
                            }), " Creating and maintaining software for advanced implantable augmented reality applications used in experimental environments."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Data Security Protocols:"
                            }), " Ensuring the highest level of security for sensitive research data through advanced encryption techniques."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Cross-Disciplinary Collaboration:"
                            }), " Working closely with physicists, engineers, biologists, and other neuroscientists to develop integrated software solutions."]
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "This position is perfect for someone who thrives in a dynamic and challenging environment, where innovation and cutting-edge technology intersect. The successful candidate will play a crucial role in the development of software that supports our groundbreaking research."
                    })]
                }), (0,
                a.jsx)("h2", {
                    onClick: () => r("janitor"),
                    className: "position-title",
                    children: "Maintenance Technician"
                }), "janitor" === n && (0,
                a.jsxs)("div", {
                    className: "position-details",
                    children: [(0,
                    a.jsx)("p", {
                        children: "The ideal candidate will be responsible for:"
                    }), (0,
                    a.jsxs)("ul", {
                        children: [(0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Facility Maintenance:"
                            }), " Ensuring the cleanliness and maintenance of all laboratories, offices, and common areas within our high-tech research facility."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Hazardous Waste Disposal:"
                            }), " Safely managing and disposing of hazardous materials resulting from experimental procedures."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Equipment Cleaning:"
                            }), " Regularly cleaning and sanitizing experimental equipment to maintain a sterile environment for research activities."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Security Clearance:"
                            }), " Maintaining a high level of confidentiality and adhering to security protocols due to the sensitive nature of our work."]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("strong", {
                                children: "Attention to Detail:"
                            }), " Ensuring that even the smallest maintenance issues are addressed promptly to maintain the integrity of our research environment."]
                        })]
                    }), (0,
                    a.jsx)("p", {
                        children: "This position is critical to the smooth operation of our facility, ensuring that our scientists can focus on their groundbreaking work in a clean and safe environment."
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "apply-button-container",
                    children: (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com?subject=Application for Operative Position at DEMIURGE INC&body=Thank%20you%20for%20your%20interest%20in%20joining%20DEMIURGE%20INC.%0D%0A%0D%0A%3D%3D%3D%3D%3D%3D%3D%3D%20APPLICATION%20FORM%20%3D%3D%3D%3D%3D%3D%3D%3D%0D%0A%0D%0A---%20PERSONAL%20INFORMATION%20---%0D%0AFull%20Name:%20%0D%0AOperating%20Alias%20(if%20applicable):%20%0D%0AEmail%20Address:%20%0D%0AContact%20Number:%20%0D%0A%0D%0A---%20QUALIFICATIONS%20---%0D%0ADegree(s)%20or%20Certifications%20in%20Experimental%20Technologies%20or%20Related%20Fields:%20%0D%0ASkills%20in%20Reality%20Manipulation,%20Dimensional%20Engineering,%20or%20Quantum%20Mechanics:%20%0D%0A%0D%0A---%20EXPERIMENTAL%20EXPERIENCE%20---%0D%0APrevious%20Experiments%20and%20Projects%20Conducted%20(at%20least%203%20examples):%20%0D%0ALevel%20of%20Comfort%20with%20Multiverse%20Exploration%20and%20Kugelblitz%20Phenomena:%20%0D%0A%0D%0A---%20ADDITIONAL%20INFORMATION%20---%0D%0AHave%20you%20ever%20been%20fractionated%20during%20an%20experiment?%20(yes%20or%20no)%20If%20yes,%20please%20provide%20details:%20%0D%0AWhat%20do%20you%20hope%20to%20accomplish%20by%20joining%20our%20reality-warping%20research?%20%0D%0A%0D%0A---%20REFERENCES%20---%0D%0AList%20at%20least%20two%20scientists%20or%20interdimensional%20entities%20who%20can%20vouch%20for%20your%20capabilities:%20",
                        className: "apply-button",
                        children: "APPLY NOW"
                    })
                }), (0,
                a.jsx)("br", {}), (0,
                a.jsxs)("p", {
                    children: ["If you are ready to take the next step in your career and join a team of world-renowned experts, we want to hear from you. Please send your CV and a detailed cover letter outlining your relevant experience to ", (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com",
                        children: "careers@demiurge-inc.com"
                    }), "."]
                })]
            })
        };
        t.p,
        t.p,
        t.p,
        t.p,
        t.p;
        const h = function() {
            return (0,
            a.jsxs)("div", {
                className: "investors-page",
                children: [(0,
                a.jsx)("h1", {
                    children: "Welcome to the Future"
                }), (0,
                a.jsx)("p", {
                    children: "DEMIURGE INC. is at the cutting edge of technological innovation, pioneering reality-warping inventions that have the potential to reshape industries across the globe. As we continue to push the boundaries of what is scientifically possible, we invite visionary investors to join us in our journey towards unlocking unprecedented technological breakthroughs. Investing in DEMIURGE INC. means being part of a movement that transcends traditional industries, offering opportunities for growth in fields that are yet to be fully realized."
                }), (0,
                a.jsx)("h2", {
                    children: "Why Invest in DEMIURGE INC.?"
                }), (0,
                a.jsxs)("ul", {
                    children: [(0,
                    a.jsxs)("li", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: "Pioneering Technology:"
                        }), " Our unique position as leaders in reality-warping research ensures that we remain at the forefront of technological advancement. Our innovations have applications across numerous sectors, including healthcare, defense, economics, entertainment, and more."]
                    }), (0,
                    a.jsxs)("li", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: "Exponential Growth Potential:"
                        }), " The rapidly expanding market for advanced technologies, coupled with our proprietary research, positions DEMIURGE INC. for significant growth in a multi-billion dollar industry within the coming years."]
                    }), (0,
                    a.jsxs)("li", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: "Ethical Leadership and Responsibility:"
                        }), " We are committed to conducting our research under the strictest ethical guidelines, ensuring that our innovations benefit humanity (and our investors) as a whole."]
                    }), (0,
                    a.jsxs)("li", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: "Exclusive Access to Groundbreaking Research:"
                        }), " Investors gain insider access to our latest developments, allowing for strategic involvement in projects with potentially transformative outcomes."]
                    })]
                }), (0,
                a.jsx)("h2", {
                    children: "Investment Opportunities"
                }), (0,
                a.jsxs)("ul", {
                    children: [(0,
                    a.jsxs)("li", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: "Equity Investments:"
                        }), " Secure a stake in DEMIURGE INC.'s future by becoming an equity investor. This option is perfect for those looking to align themselves with the long-term growth of the company."]
                    }), (0,
                    a.jsxs)("li", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: "Partnerships and Collaborations:"
                        }), " We offer unique opportunities for strategic partnerships, allowing investors to collaborate directly with our research teams on specific projects."]
                    }), (0,
                    a.jsxs)("li", {
                        children: [(0,
                        a.jsx)("strong", {
                            children: "Innovation Fund:"
                        }), " Contribute to our Innovation Fund, which supports the most cutting-edge research initiatives within DEMIURGE INC. This fund is designed for investors looking to make a direct impact on the future of technology."]
                    })]
                }), (0,
                a.jsx)("h2", {
                    children: "Investor Relations Contact"
                }), (0,
                a.jsxs)("p", {
                    children: ["If you're interested in learning more about investment opportunities at DEMIURGE INC., please contact our Investor Relations team at ", (0,
                    a.jsx)("a", {
                        href: "mailto:freakbait@freakbait.com?subject=DEMIURGE INC. Investment Inquiry&body=DEMIURGE INC.,%0A%0AI am interested in investing in your endeavors and would love more information about how I can contribute to your expansion into alternate markets.%0A%0AAmount of capital I am willing to invest:%0A%0APreferred area of investment (dimensional warfare, multiverse travel, reality manipulation, etc.):%0A%0AAny concerns about ethical practices or risks to my personal reality:%0A%0AThank you for this opportunity to partner in reshaping the boundaries of existence.%0A%0ASincerely,%0A[Your Name]",
                        title: "investors@demiurge-inc.com",
                        children: "investors@demiurge-inc.com"
                    }), ". Our team is available to discuss your investment goals and provide detailed information on how you can be part of our groundbreaking work."]
                })]
            })
        }
          , m = () => {
            const [n,t] = (0,
            e.useState)(!0)
              , [r,i] = (0,
            e.useState)(!0)
              , [o,l] = (0,
            e.useState)(!0)
              , [s,u] = (0,
            e.useState)(!1)
              , [c,d] = (0,
            e.useState)(!1)
              , [f,p] = (0,
            e.useState)(!1)
              , h = () => {
                u(!s)
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "about-container",
                children: [(0,
                a.jsxs)("section", {
                    className: "about-intro",
                    children: [(0,
                    a.jsxs)("h2", {
                        onClick: () => t(!n),
                        children: [n, " About Demiurge Inc."]
                    }), n && (0,
                    a.jsx)("p", {
                        children: "Welcome to Demiurge Inc., a cutting-edge laboratory focused on reality modulation, dimensional tuning, and advanced experimentation. Our team of researchers and engineers is dedicated to exploring the boundaries of science and pushing the limits of what is possible in the multiverse."
                    })]
                }), (0,
                a.jsxs)("section", {
                    className: "about-mission-vision",
                    children: [(0,
                    a.jsxs)("h2", {
                        onClick: () => i(!r),
                        children: [r, " Our Mission"]
                    }), r && (0,
                    a.jsx)("p", {
                        children: "Our mission is to unlock the potential of multiversal exploration, transforming the impossible into the achievable. We are pioneers in reality warping and dimensional travel technologies. Our vision is to create a future where realities are no longer bound by conventional laws, allowing and enabling humanity to experience dimensions beyond imagination."
                    })]
                }), (0,
                a.jsxs)("section", {
                    className: "about-history",
                    children: [(0,
                    a.jsxs)("h2", {
                        onClick: () => l(!o),
                        children: [o, " Our History"]
                    }), o && (0,
                    a.jsxs)("div", {
                        children: [(0,
                        a.jsx)("p", {
                            children: "Our History The origins of Demiurge Inc. are as elusive as the dimensions we study. While traditional records suggest a founding date in 1990, our own research has uncovered anomalies indicating that the laboratory may have existed long before any formal establishment. Some of our earliest experiments appear to reference the company itself\u2014decades before it was known or discovered. These experiments, encoded in fragments of lost timelines, hint at a self-referential loop of creation. Demiurge Inc. was not just founded\u2014it was, in a sense, discovered\u2026 possibly even by itself. The timeline of our foundation remains uncertain, with some theorizing that Demiurge Inc. may have created its own inception point, looping back through the very multiverses we now explore. Whether a product of paradox or an artifact of dimensional manipulation, our existence is as much a mystery as the phenomena we seek to understand."
                        }), !s && (0,
                        a.jsx)("button", {
                            className: "expand-timeline-button",
                            onClick: h,
                            children: "Expand History"
                        }), s && (0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "1990 - Founding of Demiurge Inc."
                                }), ': While the official date of foundation was recorded as 1990, strange occurrences around this time suggest that the lab\u2019s inception may have been retroactively seeded into the timeline. Witnesses from the era speak of buildings materializing overnight, facilities that had "always been there," but had somehow escaped notice. From the start, Demiurge Inc. attracted minds from all disciplines, many of whom couldn\'t recall how they found the lab, as if drawn by an unseen force.']
                            }), (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "1995 - The Greyfield Anomaly"
                                }), ': The discovery of what is now known as the "Greyfield Anomaly" marked a significant turning point in the lab\u2019s research. During an experiment on quantum frequency dispersion, researchers inadvertently opened a rift that led to the Greyfield - a dimensional voidspace existing in a state of quantum flux. While initial reports suggested disaster, further study indicated that the Greyfield may hold the key to understanding interdimensional travel and the very nature of time loops and the laboratory itself.']
                            }), (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "1996 - The Reality Stabilization Project"
                                }), ": Following the Greyfield Anomaly, DEMIURGE INC. launched the Reality Stabilization Project (RSP). This initiative sought to control and harness dimensional shifts, with the ultimate goal of stabilizing entire realities. The RSP became the cornerstone of DEMIURGE INC.'s research, as the team focused on understanding the mechanisms that govern dimensional stability, preventing catastrophic collapses in newly discovered dimensions. Early efforts involved the creation of containment fields capable of isolating unstable dimensions, but as the project progressed, the team moved toward more advanced techniques of reality tethering\u2014using anchors to keep dimensions from drifting out of sync with our known universe. This allowed DEMIURGE INC. to not only explore new dimensions safely but also to intervene in unstable realities, reinforcing their structures before they could collapse."]
                            }), (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "1998 - Government Contracts"
                                }), ': DEMIURGE INC.\u2019s work in dimensional manipulation did not go unnoticed. By 1998, the company had secured multiple contracts with DARPA (the Defense Advanced Research Projects Agency), aimed at exploring the potential for military applications of dimensional tuning. These projects involved the development of technology that could theoretically "phase" objects in and out of physical dimensions, leading to the creation of highly advanced, nearly invisible defense systems. The lab\u2019s profitability soared during this period, with a substantial portion of its research being funneled into classified government programs.']
                            }), (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "2001 - Black Ops Weaponization Initiatives"
                                }), ": In the aftermath of securing high-level contracts with the U.S. government, DEMIURGE INC. began collaborating with major weapons manufacturers. The focus shifted towards the practical application of the lab\u2019s discoveries in the realm of military technology, including weapons systems that could disrupt enemy communications and destabilize dimensional fields. Projects like these were heavily classified, leading to speculation about DEMIURGE INC.\u2019s deeper involvement in covert black ops projects. High profitability followed as government agencies and private defense contractors vied for access to the lab\u2019s cutting-edge technology."]
                            }), (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "2008 - The Collapse Prevention Initiative"
                                }), ": With the ever-present threat of universal collapse, DEMIURGE INC. spearheaded the Collapse Prevention Initiative (CPI), a (then) top-secret project aimed at preventing the disintegration of known dimensions. This period also saw the rise of Dr. Orion Vale as one of the lab\u2019s leading minds, whose groundbreaking work on quantum fissures allowed for greater control over interdimensional frequency shifts."]
                            }), (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "2015 - First Contact"
                                }), ": In 2015, DEMIURGE INC. made its first confirmed contact with a parallel version of Earth. The experiments that led to this discovery remain classified, but published journal articles and news reports indicate that this event fundamentally changed the way the lab (and quantum science itself) views multiverse travel. The knowledge gained from this encounter spurred further developments in dimensional overlap studies that fundamentally shifted the course of DEMIURGE INC.'s research and experimentation yet again."]
                            }), f && (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "2021 - Jeff"
                                }), ': The elusive figure known only as "Jeff" came into prominence around 2021, though many colleagues (and all historical reports, financial documentation, memories, and photographs from staff events) suggest that he had been heading the lab since its inception. Jeff\u2019s true nature remains a closely guarded secret, though his control over DEMIURGE INC.\'s operations is unquestionable. Under his leadership, the lab has accelerated its efforts, exploring the mysteries of existence itself, and expanding its reach into the farthest realms of reality.']
                            }), (0,
                            a.jsxs)("p", {
                                children: [(0,
                                a.jsx)("b", {
                                    children: "Present Day"
                                }), ": DEMIURGE INC. stands at the forefront of multiverse exploration and manipulation. With projects spanning dimensions, the lab has become a beacon of innovation and intrigue. Yet, for all the knowledge we have gained, the greatest mystery remains: how did it all begin? Perhaps we will never know if DEMIURGE INC. was the product of human innovation, or if it has always been\u2014outside of time, waiting to be discovered once again."]
                            }), (0,
                            a.jsx)("button", {
                                className: "expand-timeline-button",
                                onClick: h,
                                children: s ? "Collapse History" : "Expand History"
                            })]
                        })]
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "hidden-icon",
                    onClick: () => {
                        p(!0)
                    }
                    ,
                    children: (0,
                    a.jsx)("span", {
                        role: "img",
                        "aria-label": "hidden eye",
                        title: "What lies behind the curtain?",
                        children: "\ud83d\udc41\ufe0f"
                    })
                }), f && (0,
                a.jsxs)("section", {
                    className: "about-jeff",
                    children: [(0,
                    a.jsxs)("h2", {
                        onClick: () => d(!c),
                        children: [c, " About Jeff"]
                    }), c && (0,
                    a.jsx)("p", {
                        children: "Jeff\u2019s presence at DEMIURGE INC. is a peculiar one. One day in 2021, he simply was - the director, the founder, the guiding force behind the lab. There was no grand announcement, no transition of power. He just appeared, and everyone accepted it as fact. \u201cOh, Jeff? He\u2019s always been here,\u201d colleagues would say, their memories filled with vivid moments of Jeff leading meetings, making key decisions, and shaping the very direction of the lab since its inception. Even the very fact that he's only known by a mononym isn't seen as strange. He's just Jeff. His face appears in photographs from company events dating back to the lab\u2019s earliest days, his name etched into official records and foundational documents, his oil portrait adorns the main investors' hall. Yet, there\u2019s an eerie sense that no one quite remembers the moment he arrived, because to us, he\u2019s always been here. It\u2019s as though his existence, fully integrated into the lab\u2019s history, was never in question. Jeff didn\u2019t rise through the ranks or establish his position as director and founder. Instead, it feels as if reality itself bent to accommodate him, seamlessly integrating him into every significant event in DEMIURGE INC.\u2019s storied past. "
                    })]
                })]
            })
        }
        ;
        const g = function() {
            return (0,
            a.jsxs)("div", {
                className: "legal-page",
                children: [(0,
                a.jsx)("h2", {
                    children: "Legal Disclaimer"
                }), (0,
                a.jsx)("p", {
                    children: "DEMIURGE INC. is not responsible for any side effects resulting from services provided. The fabric of reality is a labyrinth of uncertainties, and venturing beyond the boundaries of your native timeline or spatiotemporal universe is not without risk. In the vast expanse of the multiverse(s), unforeseen paradoxes and entangled destinies lurk, presenting unprecedented dangers beyond imagination."
                }), (0,
                a.jsx)("p", {
                    children: "Our time travel and interdimensional warping services are offered with the gravest responsibility and respect for the delicate balance of all existence. Once you step beyond the threshold, the past, present, and future intertwine, and the course of destiny may never be the same again. Choose your path wisely, for the choices you make today may echo through eternity."
                }), (0,
                a.jsx)("h3", {
                    children: "Catastrophic Reality-Warping Events"
                }), (0,
                a.jsx)("p", {
                    children: "DEMIURGE INC. acknowledges the potential for catastrophic reality-warping events, including but not limited to: reality fractures, timeline disintegration, universal implosions, dimension inversions, and multiversal collapses. By engaging in our services, you acknowledge that such events, while rare, may result in total annihilation of one or more realities, irreversible alteration of the fabric of existence, or the spontaneous creation of alternate dimensions where different laws of physics or morality may apply."
                }), (0,
                a.jsx)("p", {
                    children: "In the event of such occurrences, DEMIURGE INC. assumes no responsibility or liability for any loss of life, sanity, existence, or continuity of being. Clients and participants waive any and all rights to sue, claim damages, or seek restitution from DEMIURGE INC. or its affiliates in the aftermath of these events. Your participation in our services is entirely voluntary and undertaken at your own risk."
                }), (0,
                a.jsx)("h3", {
                    children: "Retrocausal Rehabilitation Services"
                }), (0,
                a.jsx)("p", {
                    children: "If any (non-lethal/non-reality-ending) issues arise, DEMIURGE INC. offers retro-retrocausal rehabilitation services, and retro-retro-retrocausal rehabilitation services if those are ineffective. These services are designed to mitigate the effects of time anomalies and dimensional disturbances. However, please note that outcomes may vary, and some effects may be irreversible."
                }), (0,
                a.jsx)("h3", {
                    children: "Exclusions from RealityLeak\u2122 Guarantee"
                }), (0,
                a.jsx)("p", {
                    children: 'Self-recursion, chrono-lag, existential entanglement, reality divergence, paradoxical echoes, chronotic aberration, dimensional voiding/"erasure", entropic contagion, temporal drift & pivoting, interdimensional memory dissonance, quantum anomaly bleeding/"entanglement phantoms", causality splintering, multiversal doppelgangers, fragmentation syndrome, anachronistic reality oscillation, cognitohazardous information overload, and any other quantum conundrums are not covered under the DEMIURGE INC. RealityLeak\u2122 guarantee.'
                }), (0,
                a.jsx)("h3", {
                    children: "Limitation of Liability"
                }), (0,
                a.jsx)("p", {
                    children: "By utilizing DEMIURGE INC.\u2019s services, you agree that under no circumstances shall DEMIURGE INC. or its affiliates be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if DEMIURGE INC. has been advised of the possibility of such damages) resulting from the use or the inability to use the service, unauthorized access to or alteration of your transmissions or data, statements or conduct of any third party in connection with the service, or any other matter relating to the service."
                })]
            })
        }
          , v = e => {
            let {setActivePage: n, username: t, role: r} = e;
            return (0,
            a.jsxs)("div", {
                className: "landing-container",
                children: [(0,
                a.jsxs)("h1", {
                    children: ["Welcome, ", t, "!"]
                }), (0,
                a.jsxs)("div", {
                    className: "menu",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "menu-item",
                        onClick: () => n("files"),
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: "\ud83d\udcc1"
                        }), (0,
                        a.jsx)("div", {
                            className: "label",
                            children: "FILES"
                        })]
                    }), "researcher" === r && (0,
                    a.jsxs)("div", {
                        className: "menu-item",
                        onClick: () => n("email"),
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: "\ud83d\udce7"
                        }), (0,
                        a.jsx)("div", {
                            className: "label",
                            children: "EMAIL"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "menu-item",
                        onClick: () => n("log"),
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: "\ud83e\uddea"
                        }), (0,
                        a.jsx)("div", {
                            className: "label",
                            children: "EXPERIMENTS"
                        })]
                    }), "admin" === r && (0,
                    a.jsxs)("div", {
                        className: "menu-item",
                        onClick: () => n("cctv"),
                        children: [(0,
                        a.jsx)("div", {
                            className: "icon",
                            children: "\ud83d\udcf9"
                        }), (0,
                        a.jsx)("div", {
                            className: "label",
                            children: "CCTV"
                        })]
                    })]
                })]
            })
        }
          , y = t.p + "static/media/imgicon.047a569ae29958d64657.webp";
        function b(e) {
            const n = atob(e)
              , t = new Uint8Array(n.length);
            for (let r = 0; r < n.length; r++)
                t[r] = n.charCodeAt(r);
            return new TextDecoder("utf-8").decode(t)
        }
        const w = function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                experiments: [],
                email: [],
                files: [],
                cctv: []
            }
              , t = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0
              , i = arguments.length > 4 ? arguments[4] : void 0
              , o = arguments.length > 5 ? arguments[5] : void 0
              , l = arguments.length > 6 ? arguments[6] : void 0
              , s = arguments.length > 7 ? arguments[7] : void 0
              , w = arguments.length > 9 ? arguments[9] : void 0
              , x = arguments.length > 10 ? arguments[10] : void 0;
            return {
                home: {
                    title: "Home",
                    content: (0,
                    a.jsx)(u, {})
                },
                news: {
                    title: "News",
                    content: (0,
                    a.jsx)(c, {})
                },
                faq: {
                    title: "FAQ",
                    content: (0,
                    a.jsx)(d, {})
                },
                contact: {
                    title: "Contact",
                    content: (0,
                    a.jsx)(f, {})
                },
                careers: {
                    title: "Careers",
                    content: (0,
                    a.jsx)(p, {})
                },
                investors: {
                    title: "Investors",
                    content: (0,
                    a.jsx)(h, {})
                },
                about: {
                    title: "About Us",
                    content: (0,
                    a.jsx)(m, {})
                },
                legal: {
                    title: "Legal",
                    content: (0,
                    a.jsx)(g, {})
                },
                log: {
                    title: "EXPERIMENT LOG",
                    content: (0,
                    a.jsxs)("div", {
                        className: "experiment-log",
                        children: [(0,
                        a.jsx)("button", {
                            onClick: () => e("user-landing"),
                            children: "Back to Dashboard"
                        }), (0,
                        a.jsx)("div", {
                            className: "table-wrapper",
                            children: (0,
                            a.jsxs)("table", {
                                className: "experiment-log-table",
                                children: [(0,
                                a.jsx)("thead", {
                                    children: (0,
                                    a.jsxs)("tr", {
                                        children: [(0,
                                        a.jsx)("th", {
                                            children: "ID"
                                        }), (0,
                                        a.jsx)("th", {
                                            children: "Experiment Name"
                                        }), (0,
                                        a.jsx)("th", {
                                            children: "Date"
                                        }), (0,
                                        a.jsx)("th", {
                                            children: "Status"
                                        })]
                                    })
                                }), (0,
                                a.jsx)("tbody", {
                                    children: null !== n && void 0 !== n && n.experiments && n.experiments.length > 0 ? n.experiments.map(( (e, n) => (0,
                                    a.jsxs)("tr", {
                                        onClick: () => {
                                            t(b(e.content || "No content available")),
                                            r(!0)
                                        }
                                        ,
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: [(0,
                                        a.jsx)("td", {
                                            children: e.id
                                        }), (0,
                                        a.jsx)("td", {
                                            children: e.name
                                        }), (0,
                                        a.jsx)("td", {
                                            children: e.date || "XX/XX/XXXX"
                                        }), (0,
                                        a.jsx)("td", {
                                            children: e.status || "----"
                                        })]
                                    }, n))) : (0,
                                    a.jsx)("tr", {
                                        children: (0,
                                        a.jsx)("td", {
                                            colSpan: "4",
                                            children: "No experiments available or still loading."
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                },
                files: {
                    title: "FILES",
                    content: (0,
                    a.jsxs)("div", {
                        className: "files-page",
                        children: [(0,
                        a.jsx)("button", {
                            onClick: () => e("user-landing"),
                            children: "Back to Dashboard"
                        }), (0,
                        a.jsx)("h2", {
                            children: "File Management"
                        }), (0,
                        a.jsxs)("table", {
                            className: "files-table",
                            children: [(0,
                            a.jsx)("thead", {
                                children: (0,
                                a.jsxs)("tr", {
                                    children: [(0,
                                    a.jsx)("th", {
                                        children: "File Name"
                                    }), (0,
                                    a.jsx)("th", {
                                        children: "Type"
                                    }), (0,
                                    a.jsx)("th", {
                                        children: "Size"
                                    }), (0,
                                    a.jsx)("th", {
                                        children: "Date Uploaded"
                                    }), (0,
                                    a.jsx)("th", {
                                        children: "Actions"
                                    })]
                                })
                            }), (0,
                            a.jsx)("tbody", {
                                children: null !== n && void 0 !== n && n.files && n.files.length > 0 ? n.files.map(( (e, n) => (0,
                                a.jsxs)("tr", {
                                    children: [(0,
                                    a.jsxs)("td", {
                                        children: [(0,
                                        a.jsx)("img", {
                                            src: y,
                                            alt: e.type,
                                            className: "file-icon"
                                        }), e.title]
                                    }), (0,
                                    a.jsx)("td", {
                                        children: e.type
                                    }), (0,
                                    a.jsx)("td", {
                                        children: e.size
                                    }), (0,
                                    a.jsx)("td", {
                                        children: e.uploadDate
                                    }), (0,
                                    a.jsxs)("td", {
                                        children: [(0,
                                        a.jsx)("a", {
                                            href: "#",
                                            onClick: n => {
                                                n.preventDefault(),
                                                "image" === e.type || "video" === e.type ? t(`<img src="${e.file}" alt="${e.title}" style="max-width:100%;" />`) : "pdf" === e.type ? t(`<iframe src="${e.file}" style="width:100%; height:500px;" frameborder="0"></iframe>`) : t("Unable to preview this file type."),
                                                r(!0)
                                            }
                                            ,
                                            children: "Preview"
                                        }), " |", (0,
                                        a.jsx)("a", {
                                            href: e.file,
                                            download: !0,
                                            children: "Download"
                                        })]
                                    })]
                                }, n))) : (0,
                                a.jsx)("tr", {
                                    children: (0,
                                    a.jsx)("td", {
                                        colSpan: "5",
                                        children: "No files available or still loading."
                                    })
                                })
                            })]
                        })]
                    })
                },
                email: {
                    title: "INTERNAL MESSAGING SYSTEM",
                    content: (0,
                    a.jsxs)("div", {
                        className: "email-container",
                        children: [i && (0,
                        a.jsx)("div", {
                            className: "email-back-button",
                            onClick: s,
                            children: "Back to Email List"
                        }), (0,
                        a.jsx)("div", {
                            className: "email-list",
                            style: {
                                display: i ? "none" : "block"
                            },
                            children: null !== n && void 0 !== n && n.email && n.email.length > 0 ? n.email.map(( (e, n) => (0,
                            a.jsxs)("div", {
                                className: "email-list-item",
                                onClick: () => o(e),
                                children: [(0,
                                a.jsx)("span", {
                                    className: "email-subject",
                                    children: e.name
                                }), (0,
                                a.jsx)("span", {
                                    className: "email-timestamp",
                                    children: e.timestamp || "XX:XX"
                                })]
                            }, n))) : (0,
                            a.jsx)("div", {
                                children: "No emails available or still loading."
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "email-preview " + (i ? "open" : ""),
                            children: [(0,
                            a.jsxs)("div", {
                                className: "email-preview-header",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "email-header-subject",
                                    children: (null === l || void 0 === l ? void 0 : l.name) || "Select an email"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "email-sender",
                                    children: ["From: ", (null === l || void 0 === l ? void 0 : l.sender) || "\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd"]
                                }), (0,
                                a.jsx)("div", {
                                    className: "email-timestamp",
                                    children: (null === l || void 0 === l ? void 0 : l.timestamp) || "XX/XX/XXXX XX:XX"
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "email-preview-content",
                                style: {
                                    whiteSpace: "pre-wrap"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: l ? b(l.content) : ""
                                }
                            })]
                        })]
                    })
                },
                cctv: {
                    title: "CCTV FOOTAGE",
                    content: (0,
                    a.jsxs)("div", {
                        className: "cctv-page",
                        children: [(0,
                        a.jsx)("button", {
                            onClick: () => e("user-landing"),
                            children: "Back to Dashboard"
                        }), (0,
                        a.jsx)("h2", {
                            children: "CCTV Surveillance"
                        }), "admin" === x ? (0,
                        a.jsx)("div", {
                            className: "cctv-grid",
                            children: null !== n && void 0 !== n && n.cctvImages && n.cctvImages.length > 0 ? n.cctvImages.map(( (e, n) => (0,
                            a.jsx)("img", {
                                src: e.file,
                                alt: e.title,
                                onClick: () => {
                                    t(`<img src="${e.file}" alt="${e.title}" style="max-width:100%;" />`),
                                    r(!0)
                                }
                            }, n))) : (0,
                            a.jsx)("p", {
                                children: "No CCTV footage available or still loading."
                            })
                        }) : (0,
                        a.jsx)("p", {
                            children: "You do not have permission to view CCTV footage."
                        })]
                    })
                },
                "user-landing": {
                    title: "User Dashboard",
                    content: (0,
                    a.jsx)(v, {
                        setActivePage: e,
                        username: w,
                        role: x
                    })
                }
            }
        };
        const x = function(e) {
            let {isOpen: n, onClose: t, content: r, glitch: i} = e;
            return n ? (0,
            a.jsx)("div", {
                className: "modal-overlay",
                onClick: e => {
                    e.target === e.currentTarget && t()
                }
                ,
                children: (0,
                a.jsx)("div", {
                    className: "modal-content " + (i ? "modal-glitch" : ""),
                    children: (0,
                    a.jsx)("div", {
                        className: "modal-body",
                        onClick: t,
                        children: (0,
                        a.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: r
                            }
                        })
                    })
                })
            }) : null
        }
          , k = {
            admin: {
                password: "1234",
                pages: ["log", "files", "cctv"],
                dataPath: "admin",
                fullName: "Admin",
                role: "admin"
            },
            nmanhav: {
                password: "superhyphae",
                pages: ["log", "email", "files"],
                dataPath: "nmanhav",
                fullName: "Dr. Manhav",
                role: "researcher"
            },
            estrauss: {
                password: "r4ym0nd",
                pages: ["log", "email", "files"],
                dataPath: "estrauss",
                fullName: "Dr. Strauss",
                role: "researcher"
            },
            rbaker: {
                password: "Hunter2",
                pages: ["log", "email", "files"],
                dataPath: "rbaker",
                fullName: "Dr. Baker",
                role: "researcher"
            },
            across: {
                password: "virginia23",
                pages: ["log", "email", "files"],
                dataPath: "across",
                fullName: "Dr. Cross",
                role: "researcher"
            },
            ovale: {
                password: "greyfieldghostbox",
                pages: ["log", "email", "files"],
                dataPath: "ovale",
                fullName: "Dr. Vale",
                role: "researcher"
            }
        }
          , E = (t.p,
        [{
            file: t.p + "static/media/offfline.88c581edd770e404f1a4.webp",
            title: "CCTV 1"
        }, {
            file: t.p + "static/media/offfline2.ea0739f647d13be2202f.webp",
            title: "CCTV 2"
        }, {
            file: t.p + "static/media/cctvlab3.1229714b80f8d66c48da.webp",
            title: "CCTV 3"
        }, {
            file: t.p + "static/media/cctvlab4.8f23d088f0de10b30163.webp",
            title: "CCTV 4"
        }, {
            file: t.p + "static/media/offfline3.200b77aa883aba0d85d3.webp",
            title: "CCTV 5"
        }, {
            file: t.p + "static/media/cctvlab6.64222db2119e2eefd005.webp",
            title: "CCTV 6"
        }, {
            file: t.p + "static/media/offfline4.36df5b9ef3e0e9c114ea.webp",
            title: "CCTV 7"
        }, {
            file: t.p + "static/media/cctvlab8.5a162e9845a4e5a92767.webp",
            title: "CCTV 8"
        }, {
            file: t.p + "static/media/CCTVLAB9.56e35e77b9abc9239941.webp",
            title: "CCTV 9"
        }])
          , S = () => {
            const [n,t] = (0,
            e.useState)([])
              , r = ["==================== [ DEMIURGE INC. TERMINAL ] ====================", "Boot Sequence Initiated...", "Loading Core Systems................................... [OK]", "Verifying Security Clearance........................... [OK]", "Establishing Secure Connection......................... [OK]", "System Integrity Check................................. [OK]", "[!] WARNING: External Anomalies Detected in Voidspace Monitoring Node", "Welcome to the Demiurge Laboratory Network.", "Access is restricted to authorized personnel only.", "Please ensure all security protocols are adhered to at all times.", "> AWAITING USER AUTHENTICATION...", " - Type 'help' for available commands.", "============================================================="];
            return (0,
            e.useEffect)(( () => {
                let e = !0;
                const n = a => {
                    e && a < r.length && (t((e => [...e, r[a]])),
                    setTimeout(( () => n(a + 1)), a < 5 ? 1e3 : 500))
                }
                ;
                return n(0),
                () => {
                    e = !1
                }
            }
            ), []),
            (0,
            a.jsx)("div", {
                className: "terminal",
                children: n.map(( (e, n) => (0,
                a.jsx)("p", {
                    children: e
                }, n)))
            })
        }
          , N = () => (0,
        a.jsx)("div", {
            className: "server-logs",
            children: (0,
            a.jsx)("p", {
                children: "AVAILABLE COMMANDS: view_logs, ping_devices, scan_subnets, back"
            })
        })
          , C = () => (0,
        a.jsx)("div", {
            className: "server-logs",
            children: (0,
            a.jsx)("p", {
                children: "AVAILABLE COMMANDS: view_logs, ping_devices, restore, back"
            })
        })
          , j = () => (0,
        a.jsx)("div", {
            className: "server-logs",
            children: (0,
            a.jsx)("p", {
                children: "AVAILABLE COMMANDS: view_logs, ping_devices, backup_data, check_status, back"
            })
        })
          , I = n => {
            let {serverType: t, onComplete: r} = n;
            const i = (e => {
                switch (e) {
                case "central_server":
                    return ["Pinging devices connected to the Central Server...", "Device 1: [Mainframe Node] - Response: ONLINE", "Device 2: [Research Subnet Controller] - Response: ONLINE", "Device 3: [Voidspace Monitoring Unit] - Response: ONLINE, Latency: 450ms", "Device 4: [Security Node Alpha] - Response: OFFLINE", "Device 5: [Auxiliary Data Storage] - Response: ONLINE, Data Integrity: WARNING", "Device 6: [Experiment Node 31] - Response: ONLINE", "Device 7: [Experiment Node 44] - Response: Latency Error: High response time detected (700ms)", "Device 8: [Voidspace Safety Unit] - Response: OFFLINE"];
                case "auxiliary_server":
                    return ["Pinging devices connected to the Auxiliary Server...", "Device 1: [Storage Node Alpha] - Response: ONLINE", "Device 2: [Backup Node Beta] - Response: ONLINE", "Device 3: [Experiment Node 903] - Response: Latency Error: High response time detected (900ms)", "Device 4: [Data Transfer Node] - Response: OFFLINE", "Device 5: [Auxiliary Data Storage] - Response: ONLINE, Data Integrity: WARNING", "Device 6: [Voidspace Monitoring Unit] - Response: Latency Error: 650ms, Possible interference", "Device 7: [Quantum Collapse Generator] - Response: ERROR [UNSTABLE ENERGY LEVELS DETECTED]", "Device 8: [Cross-Dimensional Tethering Node] - Response: OFFLINE, Manual reboot required", "Device 9: [Reality Stabilization Anchor] - Response: ONLINE, Stable"];
                case "DEFUNCT":
                    return ["[DEFUNCT] DEVICE(S) DISCONNECTED", "UNABLE TO PING"];
                default:
                    return []
                }
            }
            )(t)
              , [o,l] = (0,
            e.useState)(0)
              , [s,u] = (0,
            e.useState)(!1);
            return (0,
            e.useEffect)(( () => {
                if (o < i.length) {
                    const e = setTimeout(( () => {
                        l(o + 1)
                    }
                    ), 600);
                    return () => clearTimeout(e)
                }
                s || (u(!0),
                r())
            }
            ), [o, i.length, s, r]),
            (0,
            a.jsx)(a.Fragment, {
                children: i.slice(0, o).map(( (e, n) => (0,
                a.jsx)("p", {
                    children: e
                }, n)))
            })
        }
          , T = n => {
            let {target: t, onComplete: r} = n;
            const i = {
                gateway: ["Hop 1: 192.168.1.1 - INTERNAL NETWORK - Response: Stable", "Hop 2: 10.10.0.1 - RESEARCH SUBNET - Latency detected: 350ms", "Hop 3: 172.16.0.254 - VOIDSPACE NODE - Error: Unstable connection", "Hop 4: 203.0.113.10 - \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 - \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588", "Hop 5: 198.51.100.42 - INITIATING FAILSAFE"],
                controller: ["Hop 1: 192.168.2.1 - CENTRAL CONTROL SYSTEM - Response: Stable", "Hop 2: 10.20.0.5 - QCG - Error: Signal instability", "Hop 3: 172.16.1.5 - Manual override required at Security Node Alpha", "Hop 4: 203.0.113.15 - TEMPORAL SYNC NODE - Signal divergence: Reality time-stretch detected.", "Hop 5: 198.51.100.30 - CHRONO-SPATIAL GATEWAY - Warning: Unauthorized entity detection."],
                database_node: ["Hop 1: 192.168.3.1 - AUXILIARY DATA STORAGE - Response: Stable", "Hop 2: 10.30.0.12 - BACKUP NODE - Data integrity at risk: Possible corruption", "Hop 3: 172.16.2.100 - EXP DATA CLUSTER", "Hop 4: 203.0.113.55 - ACCESS DENIED: Admin privileges required", "Hop 5: 198.51.100.99 - FAILED EXP ARCHIVE - Data leak reported. Containment breach imminent."],
                admin: ["Hop 1: 192.168.4.1 - SECURITY ADMIN NODE - Response: Stable", "Hop 2: 10.40.0.30 - ADMIN OVERRIDE DETECTED - Suspicious access attempt logged", "Hop 3: 172.16.3.200 - FAILED LOGIN ATTEMPTS: 13 from user: rbaker", "Hop 4: 203.0.113.99 - ALERT: Possible insider threat flagged by Security Subnet", "Hop 5: 198.51.100.17 - VOIDSPACE SECURITY OVERRIDE - Reality tampering detected, temporal feedback loop initiated."],
                experiment_subnet: ["Hop 1: 192.168.5.1 - PRIMARY EXPERIMENT NODE - Response: Stable", "Hop 2: 10.50.0.22 - ANOMALOUS DATA NODE - Reality inversion detected. Signal scrambling...", 'Hop 3: 172.16.4.77 - PHASE SHIFT GATEWAY - Temporal anomaly reported: Entity "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588" detected.', "Hop 4: 203.0.113.88 - SUBNET FIREWALL BYPASS - Integrity breach reported, signal redirected.", "Hop 5: 198.51.100.76 - SECURE EXPERIMENT STORAGE - Warning: Data packets from Experiment 8934.omega exceed safety thresholds."],
                quantum_research: ["Hop 1: 192.168.6.1 - QUANTUM RESEARCH HUB - Response: Stable", "Hop 2: 10.60.0.14 - SUB-QUANTUM FREQUENCY NODE - Error: Reality flux detected, shutting down.", "Hop 3: 172.16.5.12 - QUANTUM ENTANGLEMENT CLUSTER - Entity feedback anomaly detected, signal collapsed.", "Hop 4: 203.0.113.22 - KUGELBLITZ PROTOCOL NODE - Failed activation, energy surge redirected.", "Hop 5: 198.51.100.44 - CONTAINMENT UNIT: VOIDMEN - Breach detected, Voidman fractions escaped."]
            }
              , [o,l] = (0,
            e.useState)(0);
            return (0,
            e.useEffect)(( () => {
                if (o < i[t].length) {
                    const e = setTimeout(( () => {
                        l(o + 1)
                    }
                    ), 1e3);
                    return () => clearTimeout(e)
                }
                r()
            }
            ), [o, t, r]),
            (0,
            a.jsx)(a.Fragment, {
                children: i[t].slice(0, o).map(( (e, n) => (0,
                a.jsx)("p", {
                    children: e
                }, n)))
            })
        }
          , D = n => {
            let {onComplete: t} = n;
            const [r,i] = (0,
            e.useState)([])
              , [o,l] = (0,
            e.useState)(0)
              , s = [{
                name: "Voidspace Subnet",
                status: "ONLINE",
                latency: Math.floor(500 * Math.random() + 100),
                warning: "Unusual data packet activity detected."
            }, {
                name: "Research Subnet",
                status: "ONLINE",
                latency: Math.floor(500 * Math.random() + 100)
            }, {
                name: "Security Subnet",
                status: "OFFLINE",
                error: "No response from security nodes."
            }, {
                name: "Auxiliary Subnet",
                status: "ONLINE",
                capacity: `${Math.floor(50 * Math.random() + 50)}% full`
            }];
            return (0,
            e.useEffect)(( () => {
                const e = setTimeout(( () => {
                    o < s.length ? (i((e => [...e, s[o]])),
                    l((e => e + 1))) : t && t()
                }
                ), 1e3);
                return () => clearTimeout(e)
            }
            ), [o, t]),
            (0,
            a.jsxs)("div", {
                children: [(0,
                a.jsx)("p", {
                    children: "Scanning subnets connected to Central Server..."
                }), r.map(( (e, n) => (0,
                a.jsxs)("div", {
                    children: [(0,
                    a.jsxs)("p", {
                        children: ["Subnet: [", e.name, "] - Response: ", e.status]
                    }), e.latency && (0,
                    a.jsxs)("p", {
                        children: ["- Latency: ", e.latency, "ms"]
                    }), e.warning && (0,
                    a.jsxs)("p", {
                        children: ["- Warning: ", e.warning]
                    }), e.error && (0,
                    a.jsxs)("p", {
                        children: ["- Error: ", e.error]
                    }), e.capacity && (0,
                    a.jsxs)("p", {
                        children: ["- Data Capacity: ", e.capacity]
                    })]
                }, n))), o >= s.length && (0,
                a.jsx)("p", {
                    children: "End of subnet scan."
                })]
            })
        }
          , R = e => {
            let {serverType: n} = e;
            const t = (0,
            a.jsxs)("div", {
                children: [(0,
                a.jsx)("p", {
                    children: "LOG 1:"
                }), (0,
                a.jsx)("p", {
                    children: "[XX/XX/XXXX XX:XX] - Warning: Voidspace Subnet experiencing signal instability."
                }), (0,
                a.jsx)("p", {
                    children: "- Experimental anomalies detected."
                }), (0,
                a.jsx)("p", {
                    children: "- Re-routing all outgoing network traffic to central firewall."
                }), (0,
                a.jsx)("p", {
                    children: "- Research team notified: Dr. Raymond Baker, Dr. Evelyn Strauss."
                }), (0,
                a.jsx)("p", {
                    children: "- Security Override: A4H-983. Access restricted to senior personnel only."
                }), (0,
                a.jsx)("br", {}), (0,
                a.jsx)("p", {
                    children: "LOG 2:"
                }), (0,
                a.jsx)("p", {
                    children: "[XX/XX/XXXX XX:XX] - Unauthorized access attempt detected on Central Server."
                }), (0,
                a.jsx)("p", {
                    children: "- Source: 192.168.1.10 (Research Subnet)"
                }), (0,
                a.jsx)("p", {
                    children: "- Failed Login Attempts: 13 (from user: rbaker)"
                }), (0,
                a.jsx)("p", {
                    children: "- Initiating lockdown of sensitive files."
                }), (0,
                a.jsx)("p", {
                    children: "- Alert sent to system administrator: nmanhav."
                }), (0,
                a.jsx)("p", {
                    children: "- Security Response Initiated: Protocol Echo-5."
                }), (0,
                a.jsx)("br", {})]
            })
              , r = (0,
            a.jsxs)("div", {
                children: [(0,
                a.jsx)("p", {
                    children: "LOG 1:"
                }), (0,
                a.jsx)("p", {
                    children: "[XX/XX/XXXX XX:XX] - Log data corrupted."
                }), (0,
                a.jsx)("p", {
                    children: "LOG 2:"
                }), (0,
                a.jsx)("p", {
                    children: '[XX/XX/XXXX XX:XX] - Partial log recovered: "...protocol failure imminent..."'
                }), (0,
                a.jsx)("p", {
                    children: "LOG 3:"
                }), (0,
                a.jsx)("p", {
                    children: "[XX/XX/XXXX XX:XX] - Data stream interrupted. Cause unknown."
                }), (0,
                a.jsx)("br", {})]
            })
              , i = (0,
            a.jsxs)("div", {
                children: [(0,
                a.jsx)("p", {
                    children: "LOG 1:"
                }), (0,
                a.jsx)("p", {
                    children: "[XX/XX/XXXX XX:XX] - Backup of Experiment 478(a) successful. Data integrity verified."
                }), (0,
                a.jsx)("p", {
                    children: "- Subject: Arctic Fungal Extremophile Discovery."
                }), (0,
                a.jsx)("p", {
                    children: "- Additional Notes: Integration of Phase Matter Transition Study by Dr. Orion Vale."
                }), (0,
                a.jsx)("br", {}), (0,
                a.jsx)("p", {
                    children: "LOG 2:"
                }), (0,
                a.jsx)("p", {
                    children: "[XX/XX/XXXX XX:XX] - Transfer initiated for voidspace anomaly data."
                }), (0,
                a.jsx)("p", {
                    children: "- Data Source: Voidspace Monitoring Unit."
                }), (0,
                a.jsx)("p", {
                    children: "- Status: Partial upload (72% complete)."
                }), (0,
                a.jsx)("p", {
                    children: "- Researcher Notification: Dr. Nicholas Manhav, Dr. Evelyn Strauss."
                }), (0,
                a.jsx)("br", {})]
            });
            return (0,
            a.jsx)("div", {
                className: "server-logs",
                children: ( () => {
                    switch (n) {
                    case "central_server":
                        return t;
                    case "DEFUNCT":
                        return r;
                    case "auxiliary_server":
                        return i;
                    default:
                        return (0,
                        a.jsx)("p", {
                            children: "No logs available for this server."
                        })
                    }
                }
                )()
            })
        }
          , A = n => {
            let {onComplete: t} = n;
            const [r,i] = (0,
            e.useState)({
                lowFrequency: 0,
                midFrequency: 0,
                highFrequency: 0
            })
              , [o,l] = (0,
            e.useState)(!1)
              , [s,u] = (0,
            e.useState)(!1)
              , [c,d] = (0,
            e.useState)(null)
              , f = 69
              , p = 420
              , h = 911
              , m = (e, n) => {
                const t = parseInt(e.target.value, 10);
                i((e => ({
                    ...e,
                    [n]: t
                })))
            }
            ;
            (0,
            e.useEffect)(( () => (( () => {
                if (r.lowFrequency === f && r.midFrequency === p && r.highFrequency === h) {
                    const e = setTimeout(( () => {
                        l(!0),
                        setTimeout(( () => {
                            u(!0),
                            "function" === typeof t && t()
                        }
                        ), 2e3)
                    }
                    ), 2e3);
                    d(e)
                } else
                    clearTimeout(c),
                    l(!1)
            }
            )(),
            () => {
                clearTimeout(c)
            }
            )), [r]);
            const g = (e, n) => {
                const t = Math.abs(e - n);
                return 0 === t ? "#0096FF" : t <= 20 ? "#7ed03b" : t <= 50 ? "#ffeb3b" : t <= 150 ? "#ffa500" : "#f44336"
            }
              , v = (e, n) => e === n;
            return s ? (0,
            a.jsx)("div", {
                className: "harmonic-success",
                children: (0,
                a.jsx)("p", {
                    className: "success-message",
                    children: "\u2714 Harmonic Frequencies Stabilized"
                })
            }) : (0,
            a.jsxs)("div", {
                className: "quantum-harmonics",
                children: [(0,
                a.jsx)("h3", {
                    children: "QUANTUM HARMONIC ADJUSTMENT"
                }), (0,
                a.jsxs)("div", {
                    className: "slider-control",
                    children: [(0,
                    a.jsxs)("label", {
                        children: ["Low Frequency: ", r.lowFrequency, " Hz"]
                    }), (0,
                    a.jsx)("input", {
                        type: "range",
                        min: "0",
                        max: "1000",
                        value: r.lowFrequency,
                        onChange: e => m(e, "lowFrequency"),
                        className: v(r.lowFrequency, f) ? "pulsing-slider" : "",
                        style: {
                            background: g(r.lowFrequency, f)
                        }
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "slider-control",
                    children: [(0,
                    a.jsxs)("label", {
                        children: ["Mid Frequency: ", r.midFrequency, " Hz"]
                    }), (0,
                    a.jsx)("input", {
                        type: "range",
                        min: "0",
                        max: "1000",
                        value: r.midFrequency,
                        onChange: e => m(e, "midFrequency"),
                        className: v(r.midFrequency, p) ? "pulsing-slider" : "",
                        style: {
                            background: g(r.midFrequency, p)
                        }
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "slider-control",
                    children: [(0,
                    a.jsxs)("label", {
                        children: ["High Frequency: ", r.highFrequency, " Hz"]
                    }), (0,
                    a.jsx)("input", {
                        type: "range",
                        min: "0",
                        max: "1000",
                        value: r.highFrequency,
                        onChange: e => m(e, "highFrequency"),
                        className: v(r.highFrequency, h) ? "pulsing-slider" : "",
                        style: {
                            background: g(r.highFrequency, h)
                        }
                    })]
                }), o ? (0,
                a.jsx)("p", {
                    className: "status success",
                    children: "EXPERIMENT STABILIZED"
                }) : (0,
                a.jsx)("p", {
                    className: "status error",
                    children: "EXPERIMENT UNSTABLE. ADJUSTMENTS REQUIRED."
                })]
            })
        }
          , _ = n => {
            let {onCompleteCommand: t, exitAdminMode: r} = n;
            const [i,o] = (0,
            e.useState)("")
              , l = (0,
            e.useRef)(null);
            (0,
            e.useEffect)(( () => {
                l.current.focus()
            }
            ), []);
            return (0,
            a.jsx)("div", {
                className: "terminal-input-wrapper",
                children: (0,
                a.jsx)("input", {
                    type: "text",
                    className: "terminal-input",
                    value: i,
                    onChange: e => o(e.target.value),
                    onKeyDown: e => {
                        "Enter" === e.key && i.trim() && ("view_admin_logs" === i ? t(["Accessing Admin Logs...", "CORRUPTED DATA"]) : "adjust_harmonics" === i ? t([(0,
                        a.jsx)(A, {
                            onComplete: () => {
                                t(["SUCCESS. HARMONIC FREQUENCIES STABILIZED."])
                            }
                        })]) : "back" === i ? r() : "clear" === i ? (t(["Terminal cleared."]),
                        setTimeout(( () => t([])), 100)) : t(["Unknown admin command."]),
                        o(""))
                    }
                    ,
                    ref: l,
                    placeholder: "Type admin command..."
                })
            })
        }
          , P = n => {
            let {hasAdminPermissions: t} = n;
            const [r,i] = (0,
            e.useState)("")
              , [o,l] = (0,
            e.useState)([{
                system: (0,
                a.jsx)(S, {})
            }])
              , [s,u] = (0,
            e.useState)("network_start")
              , [c,d] = (0,
            e.useState)([])
              , [f,p] = (0,
            e.useState)(!1)
              , h = (0,
            e.useRef)(null)
              , m = (0,
            e.useRef)(null)
              , g = (0,
            e.useRef)(null);
            (0,
            e.useEffect)(( () => {
                m.current.focus()
            }
            ), []),
            (0,
            e.useEffect)(( () => {
                g.current && g.current.scrollIntoView({
                    behavior: "smooth"
                })
            }
            ), [o]);
            const v = {
                ping_devices: () => {
                    l((e => [...e, {
                        system: (0,
                        a.jsx)(I, {
                            className: "ping",
                            serverType: s,
                            onComplete: () => l((e => [...e, {
                                system: "Ping complete"
                            }]))
                        })
                    }]))
                }
                ,
                trace: e => {
                    l((n => [...n, {
                        system: (0,
                        a.jsx)(T, {
                            target: e,
                            onComplete: () => l((n => [...n, {
                                system: `Trace to ${e} complete`
                            }]))
                        })
                    }]))
                }
                ,
                scan_subnets: () => {
                    l((e => [...e, {
                        system: (0,
                        a.jsx)(D, {
                            onComplete: () => l((e => [...e, {
                                system: "Subnet scan complete"
                            }]))
                        })
                    }]))
                }
                ,
                connect: e => {
                    let n;
                    switch (d((e => [...e, s])),
                    e) {
                    case "central_server":
                        n = (0,
                        a.jsx)(N, {});
                        break;
                    case "DEFUNCT":
                        n = (0,
                        a.jsx)(C, {});
                        break;
                    case "auxiliary_server":
                        n = (0,
                        a.jsx)(j, {});
                        break;
                    default:
                        return void l((n => [...n, {
                            system: `Error: Unable to connect to ${e}`
                        }]))
                    }
                    l((t => [...t, {
                        system: `Connecting to ${e}... CONNECTION ESTABLISHED`
                    }, {
                        system: n
                    }])),
                    u(e)
                }
                ,
                admin_login: e => {
                    "12345" === e ? (p(!0),
                    l((e => [...e, {
                        system: "Admin login successful"
                    }, {
                        system: "AVAILABLE COMMANDS: view_admin_logs, adjust_harmonics, back"
                    }]))) : l((e => [...e, {
                        system: "ACCESS DENIED."
                    }]))
                }
                ,
                view_logs: () => {
                    l((e => [...e, {
                        system: (0,
                        a.jsx)(R, {
                            serverType: s
                        })
                    }]))
                }
                ,
                backup_data: () => {
                    l((e => [...e, {
                        system: "Starting backup of auxiliary server data..."
                    }])),
                    setTimeout(( () => {
                        l((e => [...e, {
                            system: "Backup completed successfully. Data transferred to secure storage."
                        }]))
                    }
                    ), 3e3)
                }
                ,
                system_status: () => {
                    l((e => [...e, {
                        system: "Checking system status..."
                    }])),
                    setTimeout(( () => {
                        l((e => [...e, {
                            system: "> SYSTEM STATUS:"
                        }, {
                            system: " - Subnet Integrity: Nominal"
                        }, {
                            system: " - Data Link: Stable"
                        }, {
                            system: " - Quantum Collapse Generator: Operational"
                        }, {
                            system: " - Entropy Stabilizer: Online (Warning: Minor fluctuations detected)"
                        }, {
                            system: "> SECURITY LEVEL: Alpha-9"
                        }, {
                            system: " - Multi-dimensional access restricted"
                        }, {
                            system: " - Last security breach: [XX/XX/XXXX] (see log 478A)"
                        }]))
                    }
                    ), 200)
                }
                ,
                check_status: () => {
                    l((e => [...e, {
                        system: "Checking auxiliary server status..."
                    }])),
                    setTimeout(( () => {
                        l((e => [...e, {
                            system: "STATUS: ONLINE"
                        }, {
                            system: "UPTIME: 48 days, 12 hours, 36 minutes"
                        }, {
                            system: "DATA INTEGRITY: 99.7%"
                        }, {
                            system: "LAST BACKUP: 3 hours ago"
                        }]))
                    }
                    ), 1500)
                }
                ,
                restore: () => {
                    l((e => [...e, {
                        system: "Attempting to restore [DEFUNCT] server..."
                    }])),
                    setTimeout(( () => {
                        l((e => [...e, {
                            system: "Error: Insufficient permissions. Manual reboot required."
                        }]))
                    }
                    ), 2500)
                }
                ,
                back: () => {
                    if (c.length > 0) {
                        const e = c.pop();
                        l((n => [...n, {
                            system: `Returning to ${e}...`
                        }])),
                        u(e)
                    } else
                        l((e => [...e, {
                            system: "Error: No previous state to return to."
                        }]))
                }
                ,
                clear: () => {
                    l([])
                }
                ,
                help: () => {
                    const e = {
                        network_start: ["Available commands: ping_devices, trace [target], connect [server], help", "Trace options: [gateway], [controller], [database_node], [quantum_research], [experiment_subnet], [admin]", "Connect options: [central_server], [DEFUNCT], [auxiliary_server]"],
                        central_server: ["Available commands: view_logs, ping_devices, scan_subnets, back"],
                        DEFUNCT: ["Available commands: view_logs, ping_devices, restore, back"],
                        auxiliary_server: ["Available commands: view_logs, ping_devices, backup_data, check_status, back"]
                    };
                    l((n => [...n, {
                        system: e[s].map(( (e, n) => (0,
                        a.jsx)("p", {
                            children: e
                        }, n)))
                    }]))
                }
            }
              , y = e => {
                const [n,...t] = e.split(" ")
                  , r = t[0]
                  , a = v[n.toLowerCase()];
                a ? a(r) : l((e => [...e, {
                    system: `Unknown command: ${n}`
                }]))
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "console-game",
                children: [(0,
                a.jsxs)("div", {
                    className: "console-output",
                    ref: h,
                    children: [o.map(( (e, n) => e.user ? (0,
                    a.jsxs)("p", {
                        children: ["> ", e.user]
                    }, n) : (0,
                    a.jsx)("p", {
                        children: e.system
                    }, n))), (0,
                    a.jsx)("div", {
                        ref: g
                    })]
                }), f ? (0,
                a.jsx)(_, {
                    onCompleteCommand: e => {
                        l((n => [...n, ...e.map((e => ({
                            system: e
                        })))]))
                    }
                    ,
                    exitAdminMode: () => {
                        p(!1),
                        l((e => [...e, {
                            system: "Exiting Admin Mode. Returning to normal terminal."
                        }]))
                    }
                }) : (0,
                a.jsx)("div", {
                    className: "terminal-input-wrapper",
                    children: (0,
                    a.jsx)("input", {
                        type: "text",
                        className: "terminal-input",
                        value: r,
                        ref: m,
                        onChange: e => i(e.target.value),
                        onKeyPress: e => "Enter" === e.key && void (r.trim() && (l((e => [...e, {
                            user: r
                        }])),
                        y(r),
                        i(""))),
                        placeholder: "Type a command..."
                    })
                })]
            })
        }
        ;
        const M = function(n) {
            let {isOpen: t, onClose: r} = n;
            const [i,o] = (0,
            e.useState)(!1)
              , [l,s] = (0,
            e.useState)([])
              , u = (0,
            e.useRef)(null);
            (0,
            e.useEffect)(( () => {
                const e = e => {
                    s((n => [...n, e.key])),
                    l.join("").includes("00000") && (c(),
                    s([]))
                }
                ;
                return window.addEventListener("keypress", e),
                () => window.removeEventListener("keypress", e)
            }
            ), [l]);
            const c = () => {
                o(!0)
            }
            ;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "touch-area",
                    onTouchStart: () => {
                        u.current = setTimeout(( () => {
                            o(!0),
                            c()
                        }
                        ), 3e3)
                    }
                    ,
                    onTouchEnd: () => {
                        clearTimeout(u.current)
                    }
                }), t || i ? (0,
                a.jsxs)("div", {
                    className: "terminal-modal",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "terminal-header",
                        children: [(0,
                        a.jsx)("h4", {
                            children: "Console"
                        }), (0,
                        a.jsx)("button", {
                            onClick: () => {
                                o(!1),
                                r()
                            }
                            ,
                            className: "terminal-close-btn",
                            children: "\u2715"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "terminal-content",
                        children: (0,
                        a.jsx)(P, {})
                    })]
                }) : null]
            })
        };
        const L = function() {
            var n;
            const [r,s] = (0,
            e.useState)("")
              , [u,c] = (0,
            e.useState)("")
              , [d,f] = (0,
            e.useState)(!1)
              , [p,h] = (0,
            e.useState)("")
              , [m,g] = (0,
            e.useState)("home")
              , [v,y] = (0,
            e.useState)("")
              , [b,S] = (0,
            e.useState)("")
              , [N,C] = (0,
            e.useState)(!1)
              , [j,I] = (0,
            e.useState)(!0)
              , [T,D] = (0,
            e.useState)(!1)
              , [R,A] = (0,
            e.useState)({
                experiments: [],
                email: [],
                files: [],
                cctvImages: []
            })
              , [_,L] = (0,
            e.useState)(!1)
              , [O,U] = (0,
            e.useState)("")
              , [z,F] = (0,
            e.useState)(!1)
              , [H,q] = (0,
            e.useState)("light")
              , [W,X] = (0,
            e.useState)(!1)
              , [G,V] = (0,
            e.useState)(!1);
            (0,
            e.useEffect)(( () => {
                const e = localStorage.getItem("theme") || "light";
                q(e),
                document.body.className = e
            }
            ), []),
            (0,
            e.useEffect)(( () => {
                const e = localStorage.getItem("theme") || "light";
                q(e),
                document.body.className = e,
                console.log("Current theme on load:", e)
            }
            ), []);
            let B, $ = [];
            (0,
            e.useEffect)(( () => {
                const e = e => {
                    console.log("Key pressed:", e.key),
                    $.push(e.key),
                    $.length > 5 && $.shift(),
                    console.log("Current sequence:", $.join("")),
                    "00000" === $.join("") && (console.log("Success!"),
                    X(!0),
                    $ = [],
                    clearTimeout(B)),
                    clearTimeout(B),
                    B = setTimeout(( () => {
                        console.log("Timer expired. Resetting key sequence."),
                        $ = []
                    }
                    ), 3e3)
                }
                ;
                return window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            ), []),
            (0,
            e.useEffect)(( () => {
                const e = () => {
                    const n = Math.floor(15e3 * Math.random()) + 1e4
                      , t = Math.floor(500 * Math.random()) + 100;
                    setTimeout(( () => {
                        D(!0),
                        setTimeout(( () => {
                            D(!1)
                        }
                        ), t),
                        e()
                    }
                    ), n)
                }
                ;
                return N && e(),
                () => {
                    clearTimeout()
                }
            }
            ), [N]);
            const Q = () => {
                I(!j)
            }
              , [Y,K] = (0,
            e.useState)(null)
              , J = w(g, R, S, C, _, (e => {
                K(e),
                L(!0)
            }
            ), Y, ( () => {
                L(!1)
            }
            ), v, r, null === (n = k[r]) || void 0 === n ? void 0 : n.role);
            return (0,
            a.jsxs)("div", {
                className: `App ${H}`,
                children: [(0,
                a.jsx)(i, {
                    toggleSidebar: Q
                }), (0,
                a.jsx)("div", {
                    className: "menu-bar",
                    onClick: Q,
                    children: (0,
                    a.jsx)("p", {
                        children: "Menu"
                    })
                }), (0,
                a.jsx)(o, {
                    isSidebarShrunk: j,
                    handleNavigation: e => {
                        g(e),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }),
                        window.innerWidth <= 768 && I(!0)
                    }
                    ,
                    loggedIn: d,
                    users: k,
                    inputUsername: r,
                    setInputUsername: s,
                    setInputPassword: c,
                    handleLogout: () => {
                        f(!1),
                        g("home"),
                        s(""),
                        c(""),
                        A({
                            experiments: [],
                            email: []
                        })
                    }
                    ,
                    toggleSidebar: Q,
                    error: p,
                    handleLogin: e => {
                        e.preventDefault();
                        const n = k[r];
                        n && u === n.password ? (f(!0),
                        y(n.fullName),
                        U(n.role),
                        g("user-landing"),
                        (async e => {
                            try {
                                console.log(`Loading data from ./data/${e}Experiments.js`);
                                const n = await t(3658)(`./${e}Experiments.js`)
                                  , r = await t(7542)(`./${e}Email.js`)
                                  , a = await t(8015)(`./${e}Files.js`);
                                A((e => ({
                                    ...e,
                                    experiments: n.default || [],
                                    email: r.default || [],
                                    files: a.default || [],
                                    cctvImages: E
                                })))
                            } catch (p) {
                                console.error("Failed to load data for:", e, p),
                                A({
                                    experiments: [],
                                    email: [],
                                    files: []
                                })
                            }
                        }
                        )(n.dataPath),
                        h(""),
                        "admin" === r ? (V(!0),
                        console.log("Admin permissions granted.")) : V(!1),
                        window.innerWidth <= 768 && I(!0)) : h("Incorrect username or password")
                    }
                    ,
                    theme: H,
                    toggleTheme: () => {
                        const e = "light" === H ? "dark" : "light";
                        console.log("Switching to:", e),
                        q(e),
                        localStorage.setItem("theme", e),
                        document.body.className = e
                    }
                    ,
                    openConsoleModal: () => {
                        F(!0),
                        C(!0)
                    }
                    ,
                    openTerminal: () => {
                        X(!0)
                    }
                }), (0,
                a.jsx)(l, {
                    pageContent: J,
                    activePage: m
                }), (0,
                a.jsx)(x, {
                    isOpen: N,
                    onClose: () => C(!1),
                    content: b,
                    glitch: T
                }), (0,
                a.jsx)(M, {
                    isOpen: W,
                    onClose: () => {
                        X(!1)
                    }
                    ,
                    children: (0,
                    a.jsx)(P, {
                        hasAdminPermissions: G
                    })
                })]
            })
        }
          , O = e => {
            e && e instanceof Function && t.e(453).then(t.bind(t, 6453)).then((n => {
                let {getCLS: t, getFID: r, getFCP: a, getLCP: i, getTTFB: o} = n;
                t(e),
                r(e),
                a(e),
                i(e),
                o(e)
            }
            ))
        }
        ;
        n.createRoot(document.getElementById("root")).render((0,
        a.jsx)(e.StrictMode, {
            children: (0,
            a.jsx)(L, {})
        })),
        O()
    }
    )()
}
)();
//# sourceMappingURL=main.200987d8.js.map
