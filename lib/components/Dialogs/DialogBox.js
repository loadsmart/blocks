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
var DialogBox = /** @class */ (function (_super) {
    __extends(DialogBox, _super);
    function DialogBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogBox.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.Modal, __assign({}, this.props, { animationType: 'fade', transparent: true }),
            react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this.props.onPressOutside },
                react_1.default.createElement(react_native_1.View, { style: styles.modal },
                    react_1.default.createElement(react_native_1.TouchableWithoutFeedback, null,
                        react_1.default.createElement(react_native_1.View, { style: [styles.box, this.props.dialogStyle] }, this.props.children))))));
    };
    return DialogBox;
}(react_1.PureComponent));
exports.default = DialogBox;
var styles = react_native_1.StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000C',
    },
    box: {
        width: 286,
        paddingHorizontal: 23,
        paddingVertical: 30,
        backgroundColor: '#EEE',
        borderRadius: 3,
    },
});
