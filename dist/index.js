"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useCountdown(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$intervalTime = options.intervalTime,
      intervalTime = _options$intervalTime === void 0 ? 1000 : _options$intervalTime,
      _options$now = options.now,
      now = _options$now === void 0 ? function () {
    return Date.now();
  } : _options$now;

  var _useState = (0, _react.useState)(function () {
    return new Date(date()) - new Date(now());
  }),
      _useState2 = _slicedToArray(_useState, 2),
      timeLeft = _useState2[0],
      setTimeLeft = _useState2[1];

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      setTimeLeft(function (current) {
        if (current <= 0) {
          clearInterval(interval);
          return 0;
        }

        return current - intervalTime;
      });
    }, intervalTime);
    return function () {
      return clearInterval(interval);
    };
  }, [intervalTime]);
  return timeLeft;
}

var _default = useCountdown;
exports["default"] = _default;