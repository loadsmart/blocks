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
var index_1 = require("../../res/index");
var BannerProps_1 = require("./BannerProps");
var AlertBanner = /** @class */ (function (_super) {
    __extends(AlertBanner, _super);
    function AlertBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertBanner.prototype.render = function () {
        var styles = stylesFromProps(this.props);
        return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this.props.onPress },
            react_1.default.createElement(react_native_1.View, { style: [styles.wrapper, this.props.style] },
                react_1.default.createElement(react_native_1.Image, { source: index_1.Images.Warning }),
                this.props.message && (react_1.default.createElement(react_native_1.Text, { style: styles.text, numberOfLines: 2 }, this.props.message)))));
    };
    return AlertBanner;
}(react_1.PureComponent));
exports.default = AlertBanner;
var stylesFromProps = function (props) {
    return react_native_1.StyleSheet.create({
        wrapper: {
            flexDirection: 'row',
            height: 55,
            alignItems: 'center',
            backgroundColor: props.displayStyle === BannerProps_1.BannerDisplayStyle.Error ? index_1.Colors.CoralPink : index_1.Colors.OrangePeel,
            paddingHorizontal: 15,
        },
        text: {
            fontFamily: index_1.Fonts.SharpSansSemibold,
            fontSize: 14,
            color: index_1.Colors.White,
            marginLeft: 12,
        },
    });
};
