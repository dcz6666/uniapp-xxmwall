"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var _a, _b;
var common_vendor = require("../../../../common/vendor.js");
var props = {
  props: __spreadValues({
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: "#c0c4cc"
    },
    textSize: {
      type: [String, Number],
      default: 14
    },
    iconColor: {
      type: String,
      default: "#c0c4cc"
    },
    iconSize: {
      type: [String, Number],
      default: 90
    },
    mode: {
      type: String,
      default: "data"
    },
    width: {
      type: [String, Number],
      default: 160
    },
    height: {
      type: [String, Number],
      default: 160
    },
    show: {
      type: Boolean,
      default: true
    },
    marginTop: {
      type: [String, Number],
      default: 0
    }
  }, (_b = (_a = common_vendor.index.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.empty)
};
exports.props = props;
