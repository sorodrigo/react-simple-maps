"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markers = function (_Component) {
  _inherits(Markers, _Component);

  function Markers() {
    _classCallCheck(this, Markers);

    return _possibleConstructorReturn(this, (Markers.__proto__ || Object.getPrototypeOf(Markers)).apply(this, arguments));
  }

  _createClass(Markers, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          projection = _props.projection,
          style = _props.style,
          zoom = _props.zoom,
          width = _props.width,
          height = _props.height;

      return _react2.default.createElement(
        "g",
        { className: "rsm-markers", style: style },
        !children ? null : children.length === undefined ? _react2.default.cloneElement(children, {
          projection: projection,
          zoom: zoom,
          width: width,
          height: height
        }) : children.map(function (child, i) {
          return !child ? null : _react2.default.cloneElement(child, {
            key: child.key || "marker-" + i,
            projection: projection,
            zoom: zoom,
            width: width,
            height: height
          });
        })
      );
    }
  }]);

  return Markers;
}(_react.Component);

Markers.defaultProps = {
  componentIdentifier: "Markers"
};

exports.default = Markers;