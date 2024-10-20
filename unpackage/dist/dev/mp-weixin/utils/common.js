"use strict";
require("../common/vendor.js");
function compareTimestamp(timestamp) {
  const currentTime = new Date().getTime();
  const timeDiff = currentTime - timestamp;
  if (timeDiff < 6e4) {
    return "1\u5206\u949F\u5185";
  } else if (timeDiff < 36e5) {
    return Math.floor(timeDiff / 6e4) + "\u5206\u949F";
  } else if (timeDiff < 864e5) {
    return Math.floor(timeDiff / 36e5) + "\u5C0F\u65F6";
  } else if (timeDiff < 2592e6) {
    return Math.floor(timeDiff / 864e5) + "\u5929";
  } else if (timeDiff < 7776e6) {
    return Math.floor(timeDiff / 2592e6) + "\u6708";
  } else {
    return null;
  }
}
exports.compareTimestamp = compareTimestamp;
