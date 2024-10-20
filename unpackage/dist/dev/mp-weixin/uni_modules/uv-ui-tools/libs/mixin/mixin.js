"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uvUiTools_libs_function_index = require("../function/index.js");
var uni_modules_uvUiTools_libs_function_test = require("../function/test.js");
var uni_modules_uvUiTools_libs_util_route = require("../util/route.js");
var uni_modules_uvUiTools_libs_function_debounce = require("../function/debounce.js");
var uni_modules_uvUiTools_libs_function_throttle = require("../function/throttle.js");
var mixin = {
  props: {
    customStyle: {
      type: [Object, String],
      default: () => ({})
    },
    customClass: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    linkType: {
      type: String,
      default: "navigateTo"
    }
  },
  data() {
    return {};
  },
  onLoad() {
    this.$uv.getRect = this.$uvGetRect;
  },
  created() {
    this.$uv.getRect = this.$uvGetRect;
  },
  computed: {
    $uv() {
      var _a, _b, _c;
      return __spreadProps(__spreadValues({}, uni_modules_uvUiTools_libs_function_index.index), {
        test: uni_modules_uvUiTools_libs_function_test.test,
        route: uni_modules_uvUiTools_libs_util_route.route,
        debounce: uni_modules_uvUiTools_libs_function_debounce.debounce,
        throttle: uni_modules_uvUiTools_libs_function_throttle.throttle,
        unit: (_c = (_b = (_a = common_vendor.index) == null ? void 0 : _a.$uv) == null ? void 0 : _b.config) == null ? void 0 : _c.unit
      });
    },
    bem() {
      return function(name, fixed, change) {
        const prefix = `uv-${name}--`;
        const classes = {};
        if (fixed) {
          fixed.map((item) => {
            classes[prefix + this[item]] = true;
          });
        }
        if (change) {
          change.map((item) => {
            this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
      };
    }
  },
  methods: {
    openPage(urlKey = "url") {
      const url = this[urlKey];
      if (url) {
        common_vendor.index[this.linkType]({
          url
        });
      }
    },
    $uvGetRect(selector, all) {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData(parentName = "") {
      if (!this.parent)
        this.parent = {};
      this.parent = this.$uv.$parent.call(this, parentName);
      if (this.parent.children) {
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        Object.keys(this.parentData).map((key) => {
          this.parentData[key] = this.parent[key];
        });
      }
    },
    preventEvent(e) {
      e && typeof e.stopPropagation === "function" && e.stopPropagation();
    },
    noop(e) {
      this.preventEvent(e);
    }
  },
  onReachBottom() {
    common_vendor.index.$emit("uvOnReachBottom");
  },
  beforeDestroy() {
    if (this.parent && uni_modules_uvUiTools_libs_function_test.array(this.parent.children)) {
      const childrenList = this.parent.children;
      childrenList.map((child, index) => {
        if (child === this) {
          childrenList.splice(index, 1);
        }
      });
    }
  },
  unmounted() {
    if (this.parent && uni_modules_uvUiTools_libs_function_test.array(this.parent.children)) {
      const childrenList = this.parent.children;
      childrenList.map((child, index) => {
        if (child === this) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
exports.mixin = mixin;
