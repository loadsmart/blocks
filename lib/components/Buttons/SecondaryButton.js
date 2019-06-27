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
var ButtonProps_1 = require("./ButtonProps");
var react_native_1 = require("react-native");
var res_1 = require("../../res/");
var SecondaryButton = /** @class */ (function (_super) {
    __extends(SecondaryButton, _super);
    function SecondaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderNormalState = function () {
            var styles = stylesFromProps(_this.props);
            return (react_1.default.createElement(react_1.default.Fragment, null,
                _this.props.icon && (react_1.default.createElement(react_native_1.Image, { source: _this.props.icon, style: [styles.icon, _this.props.iconStyle] })),
                react_1.default.createElement(react_native_1.Text, { style: styles.text }, _this.props.title.toUpperCase())));
        };
        _this.renderLoadingState = function () {
            var styles = stylesFromProps(_this.props);
            return react_1.default.createElement(react_native_1.ActivityIndicator, { color: res_1.Colors.Charcoal, style: styles.activityIndicator });
        };
        _this.onPress = function () {
            var _a = _this.props, displayState = _a.displayState, onPress = _a.onPress;
            if (displayState === ButtonProps_1.ButtonDisplayState.Normal && onPress) {
                onPress();
            }
        };
        return _this;
    }
    SecondaryButton.prototype.render = function () {
        var styles = stylesFromProps(this.props);
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onPress.bind(this), style: [styles.wrapper, this.props.style] },
            this.props.displayState !== ButtonProps_1.ButtonDisplayState.Loading && this.renderNormalState(),
            this.props.displayState === ButtonProps_1.ButtonDisplayState.Loading && this.renderLoadingState()));
    };
    SecondaryButton.defaultProps = {
        displayState: ButtonProps_1.ButtonDisplayState.Normal,
    };
    return SecondaryButton;
}(react_1.PureComponent));
exports.default = SecondaryButton;
var stylesFromProps = function (props) {
    return react_native_1.StyleSheet.create({
        wrapper: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: res_1.Colors.Charcoal,
            borderRadius: props.buttonHeight ? props.buttonHeight / 2.0 : ButtonProps_1.ButtonHeight.Regular / 2.0,
            paddingHorizontal: 8,
            height: props.buttonHeight ? props.buttonHeight : ButtonProps_1.ButtonHeight.Regular,
        },
        icon: {
            marginRight: 4,
        },
        text: {
            fontFamily: res_1.Fonts.SharpSansBold,
            fontSize: 12,
            marginLeft: 4,
            color: res_1.Colors.Charcoal,
        },
        activityIndicator: {
            alignSelf: 'center',
            position: 'absolute',
        },
    });
};
