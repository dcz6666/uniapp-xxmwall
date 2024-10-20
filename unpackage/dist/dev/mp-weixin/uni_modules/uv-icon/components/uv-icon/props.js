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
    name: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#606266"
    },
    size: {
      type: [String, Number],
      default: "16px"
    },
    bold: {
      type: Boolean,
      default: false
    },
    index: {
      type: [String, Number],
      default: null
    },
    hoverClass: {
      type: String,
      default: ""
    },
    customPrefix: {
      type: String,
      default: "uvicon"
    },
    label: {
      type: [String, Number],
      default: ""
    },
    labelPos: {
      type: String,
      default: "right"
    },
    labelSize: {
      type: [String, Number],
      default: "15px"
    },
    labelColor: {
      type: String,
      default: "#606266"
    },
    space: {
      type: [String, Number],
      default: "3px"
    },
    imgMode: {
      type: String,
      default: "aspectFit"
    },
    width: {
      type: [String, Number],
      default: ""
    },
    height: {
      type: [String, Number],
      default: ""
    },
    top: {
      type: [String, Number],
      default: 0
    },
    stop: {
      type: Boolean,
      default: false
    }
  }, (_b = (_a = common_vendor.index.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.icon)
};
exports.props = props;
