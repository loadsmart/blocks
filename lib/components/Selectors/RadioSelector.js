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
var Cells_1 = require("../Cells");
var RadioSelector = /** @class */ (function (_super) {
    __extends(RadioSelector, _super);
    function RadioSelector(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.state = { selectedIndex: null };
        return _this;
    }
    RadioSelector.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, { style: this.props.style }, this.props.items.map(function (item, index) {
            return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { key: index, onPress: _this.selectItemAtIndex.bind(_this, index) },
                react_1.default.createElement(react_native_1.View, null,
                    react_1.default.createElement(Cells_1.RadioSelectCell, { title: item, selected: _this.isItemSelected(index) }))));
        })));
    };
    RadioSelector.prototype.isItemSelected = function (index) {
        if (this.state.selectedIndex === null) {
            return this.props.initialSelectionIndex === index;
        }
        return this.state.selectedIndex === index;
    };
    RadioSelector.prototype.selectItemAtIndex = function (index) {
        this.setState(__assign({}, this.state, { selectedIndex: index }));
        var onSelect = this.props.onSelect;
        onSelect && onSelect(index);
    };
    return RadioSelector;
}(react_1.Component));
exports.default = RadioSelector;
