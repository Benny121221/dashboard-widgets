"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./badge.css");
var Badge = function (props) {
    var size = props.size !== undefined ? props.size : 120;
    var type = props.type !== undefined ? props.type.toUpperCase() : "HOLLOW";
    var numberFormatted = props.number.toString();
    var number = props.number;
    var fontSize = '3em';
    var topOffset = '-100px';
    var leftOffset = '30px';
    var subtitleOffset = '-3.6em';
    if (Math.abs(number) >= 10) {
        number = Math.round(number);
        numberFormatted = number.toString();
    }
    if (number >= 0) {
        if (number < 10 && !numberFormatted.includes('.')) {
            numberFormatted = number + '.0';
        }
        else if (number < 100) {
            leftOffset = '35px';
        }
        else {
            if (number < 1000) {
                fontSize = '2.3em';
                subtitleOffset = '-3em';
                topOffset = '-2.5em';
            }
            else {
                fontSize = '2em';
                subtitleOffset = '-2.5em';
                leftOffset = '25px';
                topOffset = '-2.7em';
            }
        }
    }
    else {
        leftOffset = '25px';
        if (number > -10 && !numberFormatted.includes('.')) {
            numberFormatted = number + '.0';
            leftOffset = '18px';
        }
        else if (number > -100) {
            leftOffset = '18px';
        }
        else if (number > -1000) {
            fontSize = '2.4em';
            topOffset = '-2.4em';
            leftOffset = '20px';
            subtitleOffset = '-3em';
        }
        else {
            fontSize = '1.9em';
            topOffset = '-2.8em';
            leftOffset = '20px';
            subtitleOffset = '-2.4em';
        }
    }
    return (React.createElement("div", { className: "circle-container" },
        React.createElement("svg", { className: "circle-svg", height: size, width: size, style: { stroke: props.stroke } },
            React.createElement("circle", { className: "circle", strokeWidth: "10", fill: type.toUpperCase() == "HOLLOW" ? "transparent" : props.stroke, r: "45", cx: "60", cy: "60" })),
        React.createElement("span", { className: "circle-number", style: { fontSize: fontSize, top: topOffset, left: leftOffset } }, numberFormatted),
        React.createElement("div", { className: "badge-subtitle", style: { top: subtitleOffset } }, props.subtitle)));
};
exports.default = Badge;
