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
var Radios_1 = require("../Radios");
var RadioSelectCell = /** @class */ (function (_super) {
    __extends(RadioSelectCell, _super);
    function RadioSelectCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioSelectCell.prototype.render = function () {
        var _a = this.props, selected = _a.selected, title = _a.title;
        var extraTitleStyle = {
            fontFamily: selected ? res_1.Fonts.SharpSansBold : res_1.Fonts.SharpSansMedium,
        };
        return (react_1.default.createElement(react_native_1.View, { style: [styles.container, this.props.style] },
            react_1.default.createElement(Radios_1.Radio, { selected: selected === true, style: styles.radio }),
            react_1.default.createElement(react_native_1.Text, { style: [styles.title, extraTitleStyle] }, title)));
    };
    return RadioSelectCell;
}(react_1.Component));
exports.default = RadioSelectCell;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        backgroundColor: res_1.Colors.DarkGrey,
        paddingHorizontal: 16,
    },
    radio: {
        marginRight: 20,
    },
    title: {
        color: res_1.Colors.White,
    },
});
