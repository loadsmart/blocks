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
var ButtonProps_1 = require("./ButtonProps");
var PrimaryButton = /** @class */ (function (_super) {
    __extends(PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderNormalState = function () {
            var _a = _this.props, icon = _a.icon, iconStyle = _a.iconStyle, title = _a.title;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                icon && react_1.default.createElement(react_native_1.Image, { source: icon, style: [styles.icon, iconStyle] }),
                react_1.default.createElement(react_native_1.Text, { style: styles.text }, title.toUpperCase())));
        };
        _this.renderLoadingState = function () {
            return react_1.default.createElement(react_native_1.ActivityIndicator, { color: res_1.Colors.White, style: styles.activityIndicator });
        };
        _this.onPress = function () {
            var _a = _this.props, displayState = _a.displayState, onPress = _a.onPress;
            if (displayState === ButtonProps_1.ButtonDisplayState.Normal && onPress) {
                onPress();
            }
        };
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: this.onPress.bind(this) },
            react_1.default.createElement(react_native_1.View, { style: [styles.wrapper, this.props.style] },
                this.props.displayState !== ButtonProps_1.ButtonDisplayState.Loading && this.renderNormalState(),
                this.props.displayState === ButtonProps_1.ButtonDisplayState.Loading && this.renderLoadingState())));
    };
    PrimaryButton.defaultProps = {
        displayState: ButtonProps_1.ButtonDisplayState.Normal,
    };
    return PrimaryButton;
}(react_1.PureComponent));
exports.default = PrimaryButton;
var styles = react_native_1.StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderRadius: 28,
        height: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: res_1.Colors.AlgaeGreen,
    },
    icon: {
        marginRight: 8,
    },
    text: {
        color: 'white',
        fontFamily: res_1.Fonts.SharpSansExtrabold,
        fontSize: 15,
        alignSelf: 'center',
    },
    activityIndicator: {
        alignSelf: 'center',
        position: 'absolute',
    },
});
