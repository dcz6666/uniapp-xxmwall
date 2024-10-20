"use strict";
const fontData = [
  {
    "font_class": "arrow-down",
    "unicode": "\uE6BE"
  },
  {
    "font_class": "arrow-left",
    "unicode": "\uE6BC"
  },
  {
    "font_class": "arrow-right",
    "unicode": "\uE6BB"
  },
  {
    "font_class": "arrow-up",
    "unicode": "\uE6BD"
  },
  {
    "font_class": "auth",
    "unicode": "\uE6AB"
  },
  {
    "font_class": "auth-filled",
    "unicode": "\uE6CC"
  },
  {
    "font_class": "back",
    "unicode": "\uE6B9"
  },
  {
    "font_class": "bars",
    "unicode": "\uE627"
  },
  {
    "font_class": "calendar",
    "unicode": "\uE6A0"
  },
  {
    "font_class": "calendar-filled",
    "unicode": "\uE6C0"
  },
  {
    "font_class": "camera",
    "unicode": "\uE65A"
  },
  {
    "font_class": "camera-filled",
    "unicode": "\uE658"
  },
  {
    "font_class": "cart",
    "unicode": "\uE631"
  },
  {
    "font_class": "cart-filled",
    "unicode": "\uE6D0"
  },
  {
    "font_class": "chat",
    "unicode": "\uE65D"
  },
  {
    "font_class": "chat-filled",
    "unicode": "\uE659"
  },
  {
    "font_class": "chatboxes",
    "unicode": "\uE696"
  },
  {
    "font_class": "chatboxes-filled",
    "unicode": "\uE692"
  },
  {
    "font_class": "chatbubble",
    "unicode": "\uE697"
  },
  {
    "font_class": "chatbubble-filled",
    "unicode": "\uE694"
  },
  {
    "font_class": "checkbox",
    "unicode": "\uE62B"
  },
  {
    "font_class": "checkbox-filled",
    "unicode": "\uE62C"
  },
  {
    "font_class": "checkmarkempty",
    "unicode": "\uE65C"
  },
  {
    "font_class": "circle",
    "unicode": "\uE65B"
  },
  {
    "font_class": "circle-filled",
    "unicode": "\uE65E"
  },
  {
    "font_class": "clear",
    "unicode": "\uE66D"
  },
  {
    "font_class": "close",
    "unicode": "\uE673"
  },
  {
    "font_class": "closeempty",
    "unicode": "\uE66C"
  },
  {
    "font_class": "cloud-download",
    "unicode": "\uE647"
  },
  {
    "font_class": "cloud-download-filled",
    "unicode": "\uE646"
  },
  {
    "font_class": "cloud-upload",
    "unicode": "\uE645"
  },
  {
    "font_class": "cloud-upload-filled",
    "unicode": "\uE648"
  },
  {
    "font_class": "color",
    "unicode": "\uE6CF"
  },
  {
    "font_class": "color-filled",
    "unicode": "\uE6C9"
  },
  {
    "font_class": "compose",
    "unicode": "\uE67F"
  },
  {
    "font_class": "contact",
    "unicode": "\uE693"
  },
  {
    "font_class": "contact-filled",
    "unicode": "\uE695"
  },
  {
    "font_class": "down",
    "unicode": "\uE6B8"
  },
  {
    "font_class": "bottom",
    "unicode": "\uE6B8"
  },
  {
    "font_class": "download",
    "unicode": "\uE68D"
  },
  {
    "font_class": "download-filled",
    "unicode": "\uE681"
  },
  {
    "font_class": "email",
    "unicode": "\uE69E"
  },
  {
    "font_class": "email-filled",
    "unicode": "\uE69A"
  },
  {
    "font_class": "eye",
    "unicode": "\uE651"
  },
  {
    "font_class": "eye-filled",
    "unicode": "\uE66A"
  },
  {
    "font_class": "eye-slash",
    "unicode": "\uE6B3"
  },
  {
    "font_class": "eye-slash-filled",
    "unicode": "\uE6B4"
  },
  {
    "font_class": "fire",
    "unicode": "\uE6A1"
  },
  {
    "font_class": "fire-filled",
    "unicode": "\uE6C5"
  },
  {
    "font_class": "flag",
    "unicode": "\uE65F"
  },
  {
    "font_class": "flag-filled",
    "unicode": "\uE660"
  },
  {
    "font_class": "folder-add",
    "unicode": "\uE6A9"
  },
  {
    "font_class": "folder-add-filled",
    "unicode": "\uE6C8"
  },
  {
    "font_class": "font",
    "unicode": "\uE6A3"
  },
  {
    "font_class": "forward",
    "unicode": "\uE6BA"
  },
  {
    "font_class": "gear",
    "unicode": "\uE664"
  },
  {
    "font_class": "gear-filled",
    "unicode": "\uE661"
  },
  {
    "font_class": "gift",
    "unicode": "\uE6A4"
  },
  {
    "font_class": "gift-filled",
    "unicode": "\uE6C4"
  },
  {
    "font_class": "hand-down",
    "unicode": "\uE63D"
  },
  {
    "font_class": "hand-down-filled",
    "unicode": "\uE63C"
  },
  {
    "font_class": "hand-up",
    "unicode": "\uE63F"
  },
  {
    "font_class": "hand-up-filled",
    "unicode": "\uE63E"
  },
  {
    "font_class": "headphones",
    "unicode": "\uE630"
  },
  {
    "font_class": "heart",
    "unicode": "\uE639"
  },
  {
    "font_class": "heart-filled",
    "unicode": "\uE641"
  },
  {
    "font_class": "help",
    "unicode": "\uE679"
  },
  {
    "font_class": "help-filled",
    "unicode": "\uE674"
  },
  {
    "font_class": "home",
    "unicode": "\uE662"
  },
  {
    "font_class": "home-filled",
    "unicode": "\uE663"
  },
  {
    "font_class": "image",
    "unicode": "\uE670"
  },
  {
    "font_class": "image-filled",
    "unicode": "\uE678"
  },
  {
    "font_class": "images",
    "unicode": "\uE650"
  },
  {
    "font_class": "images-filled",
    "unicode": "\uE64B"
  },
  {
    "font_class": "info",
    "unicode": "\uE669"
  },
  {
    "font_class": "info-filled",
    "unicode": "\uE649"
  },
  {
    "font_class": "left",
    "unicode": "\uE6B7"
  },
  {
    "font_class": "link",
    "unicode": "\uE6A5"
  },
  {
    "font_class": "list",
    "unicode": "\uE644"
  },
  {
    "font_class": "location",
    "unicode": "\uE6AE"
  },
  {
    "font_class": "location-filled",
    "unicode": "\uE6AF"
  },
  {
    "font_class": "locked",
    "unicode": "\uE66B"
  },
  {
    "font_class": "locked-filled",
    "unicode": "\uE668"
  },
  {
    "font_class": "loop",
    "unicode": "\uE633"
  },
  {
    "font_class": "mail-open",
    "unicode": "\uE643"
  },
  {
    "font_class": "mail-open-filled",
    "unicode": "\uE63A"
  },
  {
    "font_class": "map",
    "unicode": "\uE667"
  },
  {
    "font_class": "map-filled",
    "unicode": "\uE666"
  },
  {
    "font_class": "map-pin",
    "unicode": "\uE6AD"
  },
  {
    "font_class": "map-pin-ellipse",
    "unicode": "\uE6AC"
  },
  {
    "font_class": "medal",
    "unicode": "\uE6A2"
  },
  {
    "font_class": "medal-filled",
    "unicode": "\uE6C3"
  },
  {
    "font_class": "mic",
    "unicode": "\uE671"
  },
  {
    "font_class": "mic-filled",
    "unicode": "\uE677"
  },
  {
    "font_class": "micoff",
    "unicode": "\uE67E"
  },
  {
    "font_class": "micoff-filled",
    "unicode": "\uE6B0"
  },
  {
    "font_class": "minus",
    "unicode": "\uE66F"
  },
  {
    "font_class": "minus-filled",
    "unicode": "\uE67D"
  },
  {
    "font_class": "more",
    "unicode": "\uE64D"
  },
  {
    "font_class": "more-filled",
    "unicode": "\uE64E"
  },
  {
    "font_class": "navigate",
    "unicode": "\uE66E"
  },
  {
    "font_class": "navigate-filled",
    "unicode": "\uE67A"
  },
  {
    "font_class": "notification",
    "unicode": "\uE6A6"
  },
  {
    "font_class": "notification-filled",
    "unicode": "\uE6C1"
  },
  {
    "font_class": "paperclip",
    "unicode": "\uE652"
  },
  {
    "font_class": "paperplane",
    "unicode": "\uE672"
  },
  {
    "font_class": "paperplane-filled",
    "unicode": "\uE675"
  },
  {
    "font_class": "person",
    "unicode": "\uE699"
  },
  {
    "font_class": "person-filled",
    "unicode": "\uE69D"
  },
  {
    "font_class": "personadd",
    "unicode": "\uE69F"
  },
  {
    "font_class": "personadd-filled",
    "unicode": "\uE698"
  },
  {
    "font_class": "personadd-filled-copy",
    "unicode": "\uE6D1"
  },
  {
    "font_class": "phone",
    "unicode": "\uE69C"
  },
  {
    "font_class": "phone-filled",
    "unicode": "\uE69B"
  },
  {
    "font_class": "plus",
    "unicode": "\uE676"
  },
  {
    "font_class": "plus-filled",
    "unicode": "\uE6C7"
  },
  {
    "font_class": "plusempty",
    "unicode": "\uE67B"
  },
  {
    "font_class": "pulldown",
    "unicode": "\uE632"
  },
  {
    "font_class": "pyq",
    "unicode": "\uE682"
  },
  {
    "font_class": "qq",
    "unicode": "\uE680"
  },
  {
    "font_class": "redo",
    "unicode": "\uE64A"
  },
  {
    "font_class": "redo-filled",
    "unicode": "\uE655"
  },
  {
    "font_class": "refresh",
    "unicode": "\uE657"
  },
  {
    "font_class": "refresh-filled",
    "unicode": "\uE656"
  },
  {
    "font_class": "refreshempty",
    "unicode": "\uE6BF"
  },
  {
    "font_class": "reload",
    "unicode": "\uE6B2"
  },
  {
    "font_class": "right",
    "unicode": "\uE6B5"
  },
  {
    "font_class": "scan",
    "unicode": "\uE62A"
  },
  {
    "font_class": "search",
    "unicode": "\uE654"
  },
  {
    "font_class": "settings",
    "unicode": "\uE653"
  },
  {
    "font_class": "settings-filled",
    "unicode": "\uE6CE"
  },
  {
    "font_class": "shop",
    "unicode": "\uE62F"
  },
  {
    "font_class": "shop-filled",
    "unicode": "\uE6CD"
  },
  {
    "font_class": "smallcircle",
    "unicode": "\uE67C"
  },
  {
    "font_class": "smallcircle-filled",
    "unicode": "\uE665"
  },
  {
    "font_class": "sound",
    "unicode": "\uE684"
  },
  {
    "font_class": "sound-filled",
    "unicode": "\uE686"
  },
  {
    "font_class": "spinner-cycle",
    "unicode": "\uE68A"
  },
  {
    "font_class": "staff",
    "unicode": "\uE6A7"
  },
  {
    "font_class": "staff-filled",
    "unicode": "\uE6CB"
  },
  {
    "font_class": "star",
    "unicode": "\uE688"
  },
  {
    "font_class": "star-filled",
    "unicode": "\uE68F"
  },
  {
    "font_class": "starhalf",
    "unicode": "\uE683"
  },
  {
    "font_class": "trash",
    "unicode": "\uE687"
  },
  {
    "font_class": "trash-filled",
    "unicode": "\uE685"
  },
  {
    "font_class": "tune",
    "unicode": "\uE6AA"
  },
  {
    "font_class": "tune-filled",
    "unicode": "\uE6CA"
  },
  {
    "font_class": "undo",
    "unicode": "\uE64F"
  },
  {
    "font_class": "undo-filled",
    "unicode": "\uE64C"
  },
  {
    "font_class": "up",
    "unicode": "\uE6B6"
  },
  {
    "font_class": "top",
    "unicode": "\uE6B6"
  },
  {
    "font_class": "upload",
    "unicode": "\uE690"
  },
  {
    "font_class": "upload-filled",
    "unicode": "\uE68E"
  },
  {
    "font_class": "videocam",
    "unicode": "\uE68C"
  },
  {
    "font_class": "videocam-filled",
    "unicode": "\uE689"
  },
  {
    "font_class": "vip",
    "unicode": "\uE6A8"
  },
  {
    "font_class": "vip-filled",
    "unicode": "\uE6C6"
  },
  {
    "font_class": "wallet",
    "unicode": "\uE6B1"
  },
  {
    "font_class": "wallet-filled",
    "unicode": "\uE6C2"
  },
  {
    "font_class": "weibo",
    "unicode": "\uE68B"
  },
  {
    "font_class": "weixin",
    "unicode": "\uE691"
  }
];
exports.fontData = fontData;
