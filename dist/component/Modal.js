"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../component/Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  if (!props.show) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-btn",
    onClick: props.onClose
  }, "x"), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-message"
  }, props.message)));
}

var _default = Modal;
exports.default = _default;