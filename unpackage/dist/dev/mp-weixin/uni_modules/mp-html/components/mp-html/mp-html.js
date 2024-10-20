"use strict";
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_mpHtml_components_mpHtml_parser = require("./parser.js");
const node = () => "./node/node.js";
const plugins = [];
const _sfc_main = {
  name: "mp-html",
  data() {
    return {
      nodes: []
    };
  },
  props: {
    containerStyle: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    copyLink: {
      type: [Boolean, String],
      default: true
    },
    domain: String,
    errorImg: {
      type: String,
      default: ""
    },
    lazyLoad: {
      type: [Boolean, String],
      default: false
    },
    loadingImg: {
      type: String,
      default: ""
    },
    pauseVideo: {
      type: [Boolean, String],
      default: true
    },
    previewImg: {
      type: [Boolean, String],
      default: true
    },
    scrollTable: [Boolean, String],
    selectable: [Boolean, String],
    setTitle: {
      type: [Boolean, String],
      default: true
    },
    showImgMenu: {
      type: [Boolean, String],
      default: true
    },
    tagStyle: Object,
    useAnchor: [Boolean, Number]
  },
  emits: ["load", "ready", "imgtap", "linktap", "play", "error"],
  components: {
    node
  },
  watch: {
    content(content) {
      this.setContent(content);
    }
  },
  created() {
    this.plugins = [];
    for (let i = plugins.length; i--; ) {
      this.plugins.push(new plugins[i](this));
    }
  },
  mounted() {
    if (this.content && !this.nodes.length) {
      this.setContent(this.content);
    }
  },
  beforeDestroy() {
    this._hook("onDetached");
  },
  methods: {
    in(page, selector, scrollTop) {
      if (page && selector && scrollTop) {
        this._in = {
          page,
          selector,
          scrollTop
        };
      }
    },
    navigateTo(id, offset) {
      return new Promise((resolve, reject) => {
        if (!this.useAnchor) {
          reject(Error("Anchor is disabled"));
          return;
        }
        offset = offset || parseInt(this.useAnchor) || 0;
        let deep = " ";
        deep = ">>>";
        const selector = common_vendor.index.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "._root") + (id ? `${deep}#${id}` : "")).boundingClientRect();
        if (this._in) {
          selector.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect();
        } else {
          selector.selectViewport().scrollOffset();
        }
        selector.exec((res) => {
          if (!res[0]) {
            reject(Error("Label not found"));
            return;
          }
          const scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;
          if (this._in) {
            this._in.page[this._in.scrollTop] = scrollTop;
          } else {
            common_vendor.index.pageScrollTo({
              scrollTop,
              duration: 300
            });
          }
          resolve();
        });
      });
    },
    getText(nodes) {
      let text = "";
      (function traversal(nodes2) {
        for (let i = 0; i < nodes2.length; i++) {
          const node2 = nodes2[i];
          if (node2.type === "text") {
            text += node2.text.replace(/&amp;/g, "&");
          } else if (node2.name === "br") {
            text += "\n";
          } else {
            const isBlock = node2.name === "p" || node2.name === "div" || node2.name === "tr" || node2.name === "li" || node2.name[0] === "h" && node2.name[1] > "0" && node2.name[1] < "7";
            if (isBlock && text && text[text.length - 1] !== "\n") {
              text += "\n";
            }
            if (node2.children) {
              traversal(node2.children);
            }
            if (isBlock && text[text.length - 1] !== "\n") {
              text += "\n";
            } else if (node2.name === "td" || node2.name === "th") {
              text += "	";
            }
          }
        }
      })(nodes || this.nodes);
      return text;
    },
    getRect() {
      return new Promise((resolve, reject) => {
        common_vendor.index.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res) => res[0] ? resolve(res[0]) : reject(Error("Root label not found")));
      });
    },
    pauseMedia() {
      for (let i = (this._videos || []).length; i--; ) {
        this._videos[i].pause();
      }
    },
    setPlaybackRate(rate) {
      this.playbackRate = rate;
      for (let i = (this._videos || []).length; i--; ) {
        this._videos[i].playbackRate(rate);
      }
    },
    setContent(content, append) {
      if (!append || !this.imgList) {
        this.imgList = [];
      }
      const nodes = new uni_modules_mpHtml_components_mpHtml_parser.Parser(this).parse(content);
      this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
      this._videos = [];
      this.$nextTick(() => {
        this._hook("onLoad");
        this.$emit("load");
      });
      if (this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
        let height = 0;
        const callback = (rect) => {
          if (!rect || !rect.height)
            rect = {};
          if (rect.height === height) {
            this.$emit("ready", rect);
          } else {
            height = rect.height;
            setTimeout(() => {
              this.getRect().then(callback).catch(callback);
            }, 350);
          }
        };
        this.getRect().then(callback).catch(callback);
      } else {
        if (!this.imgList._unloadimgs) {
          this.getRect().then((rect) => {
            this.$emit("ready", rect);
          }).catch(() => {
            this.$emit("ready", {});
          });
        }
      }
    },
    _hook(name) {
      for (let i = plugins.length; i--; ) {
        if (this.plugins[i][name]) {
          this.plugins[i][name]();
        }
      }
    }
  }
};
if (!Array) {
  const _component_node = common_vendor.resolveComponent("node");
  _component_node();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.nodes[0]
  }, !$data.nodes[0] ? {} : {
    b: common_vendor.p({
      childs: $data.nodes,
      opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.selectable],
      name: "span"
    })
  }, {
    c: common_vendor.n(($props.selectable ? "_select " : "") + "_root"),
    d: common_vendor.s($props.containerStyle)
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/\u524D\u7AEF/uniapp/wallpaper/uni_modules/mp-html/components/mp-html/mp-html.vue"]]);
wx.createComponent(Component);
