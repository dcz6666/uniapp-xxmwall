"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "custom-nav-bar",
  props: {
    title: {
      type: String,
      default: "\u58C1\u7EB8"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: common_vendor.t(__props.title),
        c: common_vendor.p({
          type: "search",
          color: "#888",
          size: "18"
        }),
        d: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        e: common_vendor.unref(utils_system.getLeftIconLeft)() + "px",
        f: common_vendor.unref(utils_system.getNavBarHeight)() + "px"
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-043fa8b8"], ["__file", "E:/\u524D\u7AEF/uniapp/wallpaper/components/custom-nav-bar/custom-nav-bar.vue"]]);
wx.createComponent(Component);
