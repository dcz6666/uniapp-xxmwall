"use strict";
var uni_modules_uvUiTools_libs_mixin_mpMixin = require("../../../uv-ui-tools/libs/mixin/mpMixin.js");
var uni_modules_uvUiTools_libs_mixin_mixin = require("../../../uv-ui-tools/libs/mixin/mixin.js");
var uni_modules_uvEmpty_components_uvEmpty_props = require("./props.js");
var common_vendor = require("../../../../common/vendor.js");
require("../../../uv-ui-tools/libs/function/index.js");
require("../../../uv-ui-tools/libs/function/test.js");
require("../../../uv-ui-tools/libs/function/digit.js");
require("../../../uv-ui-tools/libs/util/route.js");
require("../../../uv-ui-tools/libs/function/debounce.js");
require("../../../uv-ui-tools/libs/function/throttle.js");
const _sfc_main = {
  name: "uv-empty",
  mixins: [uni_modules_uvUiTools_libs_mixin_mpMixin.mpMixin, uni_modules_uvUiTools_libs_mixin_mixin.mixin, uni_modules_uvEmpty_components_uvEmpty_props.props],
  data() {
    return {
      icons: {
        car: "\u8D2D\u7269\u8F66\u4E3A\u7A7A",
        page: "\u9875\u9762\u4E0D\u5B58\u5728",
        search: "\u6CA1\u6709\u641C\u7D22\u7ED3\u679C",
        address: "\u6CA1\u6709\u6536\u8D27\u5730\u5740",
        "wifi-off": "\u6CA1\u6709WiFi",
        order: "\u8BA2\u5355\u4E3A\u7A7A",
        coupon: "\u6CA1\u6709\u4F18\u60E0\u5238",
        favor: "\u6682\u65E0\u6536\u85CF",
        permission: "\u65E0\u6743\u9650",
        history: "\u65E0\u5386\u53F2\u8BB0\u5F55",
        news: "\u65E0\u65B0\u95FB\u5217\u8868",
        message: "\u6D88\u606F\u5217\u8868\u4E3A\u7A7A",
        list: "\u5217\u8868\u4E3A\u7A7A",
        data: "\u6570\u636E\u4E3A\u7A7A",
        comment: "\u6682\u65E0\u8BC4\u8BBA"
      }
    };
  },
  computed: {
    emptyStyle() {
      const style = {};
      style.marginTop = this.$uv.addUnit(this.marginTop);
      return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
    },
    textStyle() {
      const style = {};
      style.color = this.textColor;
      style.fontSize = this.$uv.addUnit(this.textSize);
      return style;
    },
    isImg() {
      const isBase64 = this.icon.indexOf("data:") > -1 && this.icon.indexOf("base64") > -1;
      return this.icon.indexOf("/") !== -1 || isBase64;
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../../uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: !$options.isImg
  }, !$options.isImg ? {
    c: common_vendor.p({
      name: _ctx.mode === "message" ? "chat" : `empty-${_ctx.mode}`,
      size: _ctx.iconSize,
      color: _ctx.iconColor,
      ["margin-top"]: "14"
    })
  } : {
    d: _ctx.$uv.addUnit(_ctx.width),
    e: _ctx.$uv.addUnit(_ctx.height),
    f: _ctx.icon
  }, {
    g: common_vendor.t(_ctx.text ? _ctx.text : $data.icons[_ctx.mode]),
    h: common_vendor.s($options.textStyle),
    i: common_vendor.s($options.emptyStyle)
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-099b9c0f"], ["__file", "E:/\u524D\u7AEF/uniapp/wallpaper/uni_modules/uv-empty/components/uv-empty/uv-empty.vue"]]);
wx.createComponent(Component);
