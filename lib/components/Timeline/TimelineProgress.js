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
var lineWidth = 4;
var topPartHeight = 16;
var markerDiameter = 16;
var LineStyle;
(function (LineStyle) {
    LineStyle[LineStyle["Empty"] = 0] = "Empty";
    LineStyle[LineStyle["Filled"] = 1] = "Filled";
})(LineStyle = exports.LineStyle || (exports.LineStyle = {}));
var TimelineProgress = /** @class */ (function (_super) {
    __extends(TimelineProgress, _super);
    function TimelineProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineProgress.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: [styles.container, this.props.style] },
            react_1.default.createElement(react_native_1.View, { accessibilityLabel: 'progress top line', style: [
                    styles.topPart,
                    {
                        backgroundColor: this.lineStyleToColor(this.props.topPartStyle),
                        opacity: this.props.topPartVisible ? 1 : 0,
                    },
                ] }),
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.marker,
                    { backgroundColor: this.lineStyleToColor(this.props.markerStyle) },
                ] }),
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.bottomPart,
                    {
                        backgroundColor: this.lineStyleToColor(this.props.bottomPartStyle),
                        opacity: this.props.bottomPartVisible ? 1 : 0,
                    },
                ] })));
    };
    TimelineProgress.prototype.lineStyleToColor = function (style) {
        return style === LineStyle.Empty ? res_1.Colors.LightGray : res_1.Colors.AlgaeGreen;
    };
    TimelineProgress.defaultProps = {
        topPartStyle: LineStyle.Filled,
        topPartVisible: true,
        markerStyle: LineStyle.Filled,
        bottomPartStyle: LineStyle.Filled,
        bottomPartVisible: true,
    };
    return TimelineProgress;
}(react_1.PureComponent));
exports.TimelineProgress = TimelineProgress;
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 2 * topPartHeight + markerDiameter,
    },
    topPart: {
        height: 16,
        width: lineWidth,
        zIndex: 3,
    },
    marker: {
        height: markerDiameter,
        width: markerDiameter,
        borderRadius: markerDiameter / 2.0,
        zIndex: 2,
    },
    bottomPart: {
        flex: 2,
        width: lineWidth,
        zIndex: 1,
    },
});
