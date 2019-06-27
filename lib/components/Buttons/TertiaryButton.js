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
var res_1 = require("../../res/");
var TertiaryButtonDisplayStyle;
(function (TertiaryButtonDisplayStyle) {
    TertiaryButtonDisplayStyle[TertiaryButtonDisplayStyle["Dark"] = 0] = "Dark";
    TertiaryButtonDisplayStyle[TertiaryButtonDisplayStyle["Light"] = 1] = "Light";
})(TertiaryButtonDisplayStyle = exports.TertiaryButtonDisplayStyle || (exports.TertiaryButtonDisplayStyle = {}));
var TertiaryButton = /** @class */ (function (_super) {
    __extends(TertiaryButton, _super);
    function TertiaryButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TertiaryButton.prototype.render = function () {
        var styles = stylesFromProps(this.props);
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.props.onPress },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(react_native_1.Text, { style: [styles.title, this.props.style] }, this.props.title))));
    };
    return TertiaryButton;
}(react_1.PureComponent));
exports.default = TertiaryButton;
var stylesFromProps = function (props) {
    var isLight = props.displayStyle === TertiaryButtonDisplayStyle.Light;
    return react_native_1.StyleSheet.create({
        title: {
            color: isLight ? res_1.Colors.White : res_1.Colors.Charcoal,
            textDecorationLine: 'underline',
            fontFamily: res_1.Fonts.SharpSansMedium,
            fontSize: 14,
            textAlign: 'center',
        },
    });
};
