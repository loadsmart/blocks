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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var res_1 = require("../../res/");
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.state = {
            focused: false,
        };
        return _this;
    }
    TextInput.prototype.render = function () {
        var borderStyle = this.state.focused
            ? { borderColor: res_1.Colors.AlgaeGreen }
            : { borderColor: res_1.Colors.White };
        return (react_1.default.createElement(react_native_1.TextInput, __assign({}, this.props, { style: [styles.textInput, this.props.style, borderStyle], onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this) })));
    };
    TextInput.prototype.onFocus = function () {
        this.setState(function (_) { return ({
            focused: true,
        }); });
    };
    TextInput.prototype.onBlur = function () {
        this.setState(function (_) { return ({
            focused: false,
        }); });
    };
    return TextInput;
}(react_1.Component));
exports.default = TextInput;
var styles = react_native_1.StyleSheet.create({
    textInput: {
        height: 52,
        backgroundColor: res_1.Colors.White,
        borderRadius: 26,
        paddingHorizontal: 28,
        fontFamily: res_1.Fonts.SharpSansSemibold,
        fontSize: 16,
        color: res_1.Colors.Charcoal,
        borderWidth: 2,
    },
});
