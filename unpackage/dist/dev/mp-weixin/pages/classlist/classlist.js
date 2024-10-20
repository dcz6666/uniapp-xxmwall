"use strict";
var common_vendor = require("../../common/vendor.js");
var api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const noData = common_vendor.ref(false);
    const queryParams = {
      pageNum: 1,
      pageSize: 12
    };
    let pageName;
    common_vendor.onLoad((options) => {
      let { id = null, name = null, type = null } = options;
      if (type)
        queryParams.type = type;
      if (id)
        queryParams.classid = id;
      pageName = name;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("storgClassList");
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      queryParams.pageNum++;
      getClassList();
    });
    const getClassList = async () => {
      let res;
      if (queryParams.classid)
        res = await api_apis.apiGetClassList(queryParams);
      if (queryParams.type)
        res = await api_apis.apiGetHistoryList(queryParams);
      classList.value = [...classList.value, ...res.data];
      if (queryParams.pageSize > res.data.length) {
        noData.value = true;
      }
      common_vendor.index.setStorageSync("storgClassList", classList.value);
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "\u54B8\u867E\u7C73\u58C1\u7EB8-" + pageName,
        path: "/pages/classlist/classlist?id=" + queryParams.classid + "&name=" + pageName
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "\u54B8\u867E\u7C73\u58C1\u7EB8-" + pageName,
        query: "id=" + queryParams.classid + "&name=" + pageName
      };
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value.length && !noData.value
      }, !classList.value.length && !noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: item._id
          };
        }),
        d: classList.value.length || noData.value
      }, classList.value.length || noData.value ? {
        e: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-558777f4"], ["__file", "E:/\u524D\u7AEF/uniapp/wallpaper/pages/classlist/classlist.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
