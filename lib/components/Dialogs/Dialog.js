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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var res_1 = require("../../res");
var DialogBox_1 = __importDefault(require("./DialogBox"));
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.render = function () {
        var buttonsMarginStyle = { marginTop: this.props.inputField ? 8 : 22 };
        return (react_1.default.createElement(DialogBox_1.default, __assign({}, this.props, { dialogStyle: styles.box }),
            this.props.image && react_1.default.createElement(react_native_1.Image, { source: this.props.image, style: this.props.imageStyle }),
            this.props.title && (react_1.default.createElement(react_native_1.Text, { style: [styles.title, this.props.titleStyle] }, this.props.title)),
            this.props.message && react_1.default.createElement(react_native_1.Text, { style: styles.message }, this.props.message),
            this.props.inputField && react_1.default.createElement(react_native_1.View, { style: styles.inputField }, this.props.inputField),
            this.props.buttons && (react_1.default.createElement(react_native_1.View, { style: [styles.buttons, buttonsMarginStyle] }, this.props.buttons))));
    };
    return Dialog;
}(react_1.PureComponent));
exports.Dialog = Dialog;
var styles = react_native_1.StyleSheet.create({
    box: {
        alignItems: 'center',
    },
    title: {
        marginTop: 18,
        fontFamily: res_1.Fonts.SharpSansBold,
        fontSize: 18,
        color: res_1.Colors.Charcoal,
        textAlign: 'center',
    },
    message: {
        marginTop: 12,
        fontFamily: res_1.Fonts.SharpSansSemibold,
        fontSize: 14,
        color: res_1.Colors.Charcoal,
        textAlign: 'center',
    },
    inputField: {
        width: '100%',
    },
    buttons: {
        width: '100%',
    },
});
