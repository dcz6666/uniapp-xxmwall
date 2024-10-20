"use strict";
var common_vendor = require("../../common/vendor.js");
var api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  _easycom_theme_item2();
}
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  _easycom_theme_item();
}
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    let classifyList = common_vendor.ref([]);
    const getClassify = async () => {
      let res = await api_apis.apiGetClassify({
        pageSize: 15
      });
      classifyList.value = res.data;
    };
    getClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(classifyList), (item, k0, i0) => {
          return {
            a: item._id,
            b: "71432b06-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-71432b06"], ["__file", "E:/\u524D\u7AEF/uniapp/wallpaper/pages/classify/classify.vue"]]);
wx.createPage(MiniProgramPage);
