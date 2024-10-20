"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_uvUiTools_libs_function_index = require("../function/index.js");
class Router {
  constructor() {
    this.config = {
      type: "navigateTo",
      url: "",
      delta: 1,
      params: {},
      animationType: "pop-in",
      animationDuration: 300,
      intercept: false,
      events: {}
    };
    this.route = this.route.bind(this);
  }
  addRootPath(url) {
    return url[0] === "/" ? url : `/${url}`;
  }
  mixinParam(url, params) {
    url = url && this.addRootPath(url);
    let query = "";
    if (/.*\/.*\?.*=.*/.test(url)) {
      query = uni_modules_uvUiTools_libs_function_index.queryParams(params, false);
      return url += `&${query}`;
    }
    query = uni_modules_uvUiTools_libs_function_index.queryParams(params);
    return url += query;
  }
  async route(options = {}, params = {}) {
    let mergeConfig = {};
    if (typeof options === "string") {
      mergeConfig.url = this.mixinParam(options, params);
      mergeConfig.type = "navigateTo";
    } else {
      mergeConfig = uni_modules_uvUiTools_libs_function_index.deepMerge(this.config, options);
      mergeConfig.url = this.mixinParam(options.url, options.params);
    }
    if (mergeConfig.url === uni_modules_uvUiTools_libs_function_index.page())
      return;
    if (params.intercept) {
      mergeConfig.intercept = params.intercept;
    }
    mergeConfig.params = params;
    mergeConfig = uni_modules_uvUiTools_libs_function_index.deepMerge(this.config, mergeConfig);
    if (typeof mergeConfig.intercept === "function") {
      const isNext = await new Promise((resolve, reject) => {
        mergeConfig.intercept(mergeConfig, resolve);
      });
      isNext && this.openPage(mergeConfig);
    } else {
      this.openPage(mergeConfig);
    }
  }
  openPage(config) {
    const {
      url,
      type,
      delta,
      animationType,
      animationDuration,
      events
    } = config;
    if (config.type == "navigateTo" || config.type == "to") {
      common_vendor.index.navigateTo({
        url,
        animationType,
        animationDuration,
        events
      });
    }
    if (config.type == "redirectTo" || config.type == "redirect") {
      common_vendor.index.redirectTo({
        url
      });
    }
    if (config.type == "switchTab" || config.type == "tab") {
      common_vendor.index.switchTab({
        url
      });
    }
    if (config.type == "reLaunch" || config.type == "launch") {
      common_vendor.index.reLaunch({
        url
      });
    }
    if (config.type == "navigateBack" || config.type == "back") {
      common_vendor.index.navigateBack({
        delta
      });
    }
  }
}
var route = new Router().route;
exports.route = route;
