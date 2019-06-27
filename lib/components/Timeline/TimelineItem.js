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
var TimelineProgress_1 = require("./TimelineProgress");
var res_1 = require("../../res");
var TimelineItem = /** @class */ (function (_super) {
    __extends(TimelineItem, _super);
    function TimelineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineItem.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, isCompleted = _a.isCompleted, isFirst = _a.isFirst, isLast = _a.isLast;
        var styles = stylesFromProps(this.props);
        return (react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
            react_1.default.createElement(TimelineProgress_1.TimelineProgress, { style: styles.progressLine, topPartVisible: isFirst !== true, bottomPartVisible: isLast !== true, topPartStyle: !isCompleted && !isActive ? TimelineProgress_1.LineStyle.Empty : TimelineProgress_1.LineStyle.Filled, markerStyle: !isCompleted && !isActive ? TimelineProgress_1.LineStyle.Empty : TimelineProgress_1.LineStyle.Filled, bottomPartStyle: isCompleted ? TimelineProgress_1.LineStyle.Filled : TimelineProgress_1.LineStyle.Empty }),
            react_1.default.createElement(react_native_1.View, { style: styles.content },
                react_1.default.createElement(react_native_1.View, { style: styles.titleWrapper },
                    react_1.default.createElement(react_native_1.Text, { style: styles.title }, this.props.title),
                    this.props.isCompleted && (react_1.default.createElement(react_native_1.Image, { source: res_1.Images.SmallCheck, style: styles.titleCheckMark }))),
                this.props.isActive && this.props.instructions && (react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, this.props.instructions)),
                this.props.isActive && this.props.body && (react_1.default.createElement(react_native_1.View, { style: styles.body }, this.props.body))),
            react_1.default.createElement(react_native_1.View, { style: styles.separator })));
    };
    return TimelineItem;
}(react_1.PureComponent));
exports.TimelineItem = TimelineItem;
var stylesFromProps = function (props) {
    return react_native_1.StyleSheet.create({
        wrapper: {
            flexDirection: 'row',
            minHeight: 50,
            backgroundColor: props.isActive === true ? res_1.Colors.White : res_1.Colors.VeryLightGray,
        },
        progressLine: {
            width: 50,
        },
        content: {
            flex: 1,
            paddingVertical: 15,
        },
        titleWrapper: {
            flexDirection: 'row',
        },
        title: {
            fontFamily: props.isActive === true ? res_1.Fonts.SharpSansBold : res_1.Fonts.SharpSansMedium,
            fontSize: 15,
            color: res_1.Colors.Charcoal,
        },
        titleActive: {
            fontFamily: res_1.Fonts.SharpSansBold,
        },
        titleCheckMark: {
            marginLeft: 8,
            marginTop: -2,
        },
        instructions: {
            fontFamily: res_1.Fonts.SharpSansMedium,
            fontSize: 15,
            color: res_1.Colors.Charcoal,
            marginTop: 8,
            marginRight: 12,
        },
        body: {
            marginTop: 8,
            marginRight: 12,
        },
        separator: {
            height: 3,
            width: '100%',
            borderTopWidth: 1,
            borderTopColor: res_1.Colors.LightGray,
            borderBottomWidth: 1,
            borderBottomColor: res_1.Colors.White,
            position: 'absolute',
            bottom: 0,
            zIndex: -1,
        },
    });
};
