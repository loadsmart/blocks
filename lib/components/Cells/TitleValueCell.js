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
var Icons_1 = require("../Icons");
var TitleValueCell = /** @class */ (function (_super) {
    __extends(TitleValueCell, _super);
    function TitleValueCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleValueCell.prototype.render = function () {
        var _a = this.props, icon = _a.icon, title = _a.title, value = _a.value, hasChevron = _a.hasChevron, style = _a.style, valueStyle = _a.valueStyle;
        return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style] },
            react_1.default.createElement(react_native_1.View, { style: styles.titleWrapper },
                icon && react_1.default.createElement(react_native_1.Image, { source: icon, style: styles.icon }),
                react_1.default.createElement(react_native_1.Text, { style: styles.title }, title)),
            react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center' } },
                react_1.default.createElement(react_native_1.Text, { style: [styles.value, valueStyle] }, value),
                hasChevron && react_1.default.createElement(Icons_1.IconChevron, { style: styles.chevron }))));
    };
    return TitleValueCell;
}(react_1.PureComponent));
exports.default = TitleValueCell;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        backgroundColor: res_1.Colors.White,
        paddingHorizontal: 12,
        marginTop: 1,
        justifyContent: 'space-between',
    },
    titleWrapper: {
        flexDirection: 'row',
    },
    icon: {
        height: 20,
        width: 20,
        marginRight: 8,
        tintColor: res_1.Colors.Charcoal,
    },
    title: {
        fontFamily: res_1.Fonts.SharpSansMedium,
        fontSize: 15,
        color: res_1.Colors.Charcoal,
    },
    value: {
        fontFamily: res_1.Fonts.SharpSansMedium,
        fontSize: 15,
        color: res_1.Colors.BrownGreyThree,
        alignItems: 'center',
    },
    chevron: {
        marginLeft: 8,
    },
});
