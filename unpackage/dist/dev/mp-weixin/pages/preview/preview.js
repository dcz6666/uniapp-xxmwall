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
var common_vendor = require("../../common/vendor.js");
var utils_system = require("../../utils/system.js");
var api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(0);
    const currentInfo = common_vendor.ref(null);
    const readImgs = common_vendor.ref([]);
    const isScore = common_vendor.ref(false);
    const storgClassList = common_vendor.index.getStorageSync("storgClassList") || [];
    console.log("storgClassList", storgClassList);
    classList.value = storgClassList.map((item) => {
      return __spreadProps(__spreadValues({}, item), {
        picUrl: item.smallPicurl.replace("_small.webp", ".jpg")
      });
    });
    common_vendor.onLoad(async (e) => {
      currentId.value = e.id;
      if (e.type == "share") {
        let res = await api_apis.apiDetailWall({ id: currentId.value });
        classList.value = res.data.map((item) => {
          return __spreadProps(__spreadValues({}, item), {
            picUrl: item.smallPicurl.replace("_small.webp", ".jpg")
          });
        });
      }
      currentIndex.value = classList.value.findIndex((item) => item._id == currentId.value);
      currentInfo.value = classList.value[currentIndex.value];
      readImgsFun();
    });
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = classList.value[currentIndex.value];
      readImgsFun();
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      if (currentInfo.value.userScore) {
        isScore.value = true;
        userScore.value = currentInfo.value.userScore;
      }
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D..."
      });
      let {
        classid,
        _id: wallId
      } = currentInfo.value;
      console.log("\u8BC4\u5206\u4E86", userScore.value);
      let res = await api_apis.apiGetSetupScore({
        classid,
        wallId,
        userScore: userScore.value
      });
      common_vendor.index.hideLoading();
      if (res.errCode == 0) {
        common_vendor.index.showToast({
          title: "\u8BC4\u5206\u6210\u529F",
          icon: "none"
        });
        classList.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorageSync("storgClassList", classList.value);
        clickScoreClose();
      }
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack({
        success: () => {
        },
        fail: (err) => {
          common_vendor.index.reLaunch({
            url: "/pages/index/index"
          });
        }
      });
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "\u54B8\u867E\u7C73\u58C1\u7EB8",
        path: "/pages/preview/preview?id=" + currentId.value + "&type=share"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "\u54B8\u867E\u7C73\u58C1\u7EB8",
        query: "id=" + currentId.value + "&type=share"
      };
    });
    function readImgsFun() {
      readImgs.value.push(currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1, currentIndex.value, currentIndex.value >= classList.value.length - 1 ? 0 : currentIndex.value + 1);
      readImgs.value = [...new Set(readImgs.value)];
    }
    const clickDownload = async () => {
      try {
        common_vendor.index.showLoading({
          title: "\u4E0B\u8F7D\u4E2D..."
        });
        let {
          classid,
          _id: wallId
        } = currentInfo.value;
        let res = await api_apis.apiWriteDownload({
          classid,
          wallId
        });
        if (res.errCode != 0)
          throw res;
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picUrl,
          success: (res2) => {
            console.log("res1", res2);
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              success: (res3) => {
                console.log("res2", res3);
              },
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u70B9\u51FB\u4E0B\u8F7D",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "\u6388\u6743\u63D0\u793A",
                  content: "\u9700\u8981\u6388\u6743\u4FDD\u5B58\u76F8\u518C",
                  success: (res3) => {
                    if (res3.confirm) {
                      common_vendor.index.openSetting({
                        success: (setting) => {
                          if (setting.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "\u83B7\u53D6\u6388\u6743\u6210\u529F",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "\u83B7\u53D6\u6743\u9650\u5931\u8D25",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete: () => {
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (err) {
        common_vendor.index.hideLoading();
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: currentInfo.value
      }, currentInfo.value ? common_vendor.e({
        b: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: common_vendor.o(maskChange),
            c: item.picUrl
          } : {}, {
            d: item._id
          });
        }),
        c: currentIndex.value,
        d: common_vendor.o(swiperChange),
        e: maskState.value
      }, maskState.value ? {
        f: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        g: common_vendor.o(goBack),
        h: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        i: common_vendor.t(currentIndex.value + 1),
        j: common_vendor.t(classList.value.length),
        k: common_vendor.p({
          date: new Date(),
          format: "hh:mm"
        }),
        l: common_vendor.p({
          date: new Date(),
          format: "MM\u6708dd\u65E5"
        }),
        m: common_vendor.p({
          type: "info",
          size: "28"
        }),
        n: common_vendor.o(clickInfo),
        o: common_vendor.p({
          type: "star",
          size: "28"
        }),
        p: common_vendor.t(currentInfo.value.score),
        q: common_vendor.o(clickScore),
        r: common_vendor.p({
          type: "download",
          size: "23"
        }),
        s: common_vendor.o(clickDownload)
      } : {}, {
        t: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        v: common_vendor.o(clickInfoClose),
        w: common_vendor.t(currentInfo.value._id),
        x: common_vendor.t(currentInfo.value.nickname),
        y: common_vendor.p({
          readonly: true,
          touchable: true,
          value: currentInfo.value.score,
          size: "16"
        }),
        z: common_vendor.t(currentInfo.value.score),
        A: common_vendor.t(currentInfo.value.description),
        B: common_vendor.f(currentInfo.value.tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab
          };
        }),
        C: common_vendor.sr(infoPopup, "02adbc98-6", {
          "k": "infoPopup"
        }),
        D: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false
        }),
        E: common_vendor.t(isScore.value ? "\u8BC4\u8FC7\u5206\u4E86~" : "\u58C1\u7EB8\u8BC4\u5206~"),
        F: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        G: common_vendor.o(clickScoreClose),
        H: common_vendor.o(($event) => userScore.value = $event),
        I: common_vendor.p({
          allowHalf: true,
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3E",
          modelValue: userScore.value
        }),
        J: common_vendor.t(userScore.value),
        K: common_vendor.o(submitScore),
        L: !userScore.value || isScore.value,
        M: common_vendor.sr(scorePopup, "02adbc98-9", {
          "k": "scorePopup"
        }),
        N: common_vendor.p({
          ["is-mask-click"]: false
        })
      }) : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-02adbc98"], ["__file", "E:/\u524D\u7AEF/uniapp/wallpaper/pages/preview/preview.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
