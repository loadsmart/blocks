"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var res_1 = require("../../res");
var IconChevron = /** @class */ (function (_super) {
    __extends(IconChevron, _super);
    function IconChevron() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconChevron.prototype.render = function () {
        var tintColor = this.props.tintColor ? this.props.tintColor : res_1.Colors.LightGray;
        return (react_1.default.createElement(react_native_1.View, { style: this.props.style },
            react_1.default.createElement(react_native_1.Image, { source: res_1.Images.Chevron, style: { tintColor: tintColor } })));
    };
    return IconChevron;
}(react_1.PureComponent));
exports.default = IconChevron;
