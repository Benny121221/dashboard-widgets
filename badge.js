"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("./badge.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Badge = function Badge(props) {
  var size = props.size !== undefined ? props.size : 120;
  var type = props.type !== undefined ? props.type.toUpperCase() : "HOLLOW";
  var numberFormatted = props.number.toString();
  var number = props.number;
  var fontSize = '3em';
  var topOffset = '-100px';
  var leftOffset = '30px';

  if (number > 0) {
    if (number < 10 && numberFormatted.length < 2) {
      numberFormatted = number + '.0';
    } else if (number < 100) {} else {
      fontSize = '2.3em';
      topOffset = '-90px';
    }
  } else {
    leftOffset = '25px';
  }

  if (type.toUpperCase() == "HOLLOW") {
    return /*#__PURE__*/React.createElement("div", {
      className: "circle-container"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "circle-svg",
      height: size,
      width: size,
      style: {
        stroke: props.stroke
      }
    }, /*#__PURE__*/React.createElement("circle", {
      className: "circle",
      strokeWidth: "10",
      fill: "transparent",
      r: "45",
      cx: "60",
      cy: "60"
    })), /*#__PURE__*/React.createElement("span", {
      className: "circle-number",
      style: {
        fontSize: fontSize,
        top: topOffset,
        left: leftOffset
      }
    }, numberFormatted), /*#__PURE__*/React.createElement("div", {
      className: "badge-subtitle"
    }, props.subtitle));
  }
};

var _default = Badge;
exports.default = _default;