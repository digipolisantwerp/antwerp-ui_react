import React, { Component, useState, useEffect, cloneElement, createElement } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import InputMask from 'react-input-mask';
import Moment from 'moment';
import ReactModal from 'react-modal';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty(_classNames, '' + typeClasses[type], !!type), _defineProperty(_classNames, '' + sizeClasses[size], !!size), _defineProperty(_classNames, 'has-icon', !!icon), _defineProperty(_classNames, 'has-icon-left', !!iconLeft), _defineProperty(_classNames, 'has-icon-right', !!iconRight), _defineProperty(_classNames, 'a-button-negative', !!negative), _defineProperty(_classNames, 'a-button-outline', !!outline), _defineProperty(_classNames, 'a-button-transparent', !!transparent), _defineProperty(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon, { name: icon }) : null, iconLeft ? React.createElement(Icon, { name: iconLeft }) : null, iconRight ? React.createElement(Icon, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var _createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var typeClasses$1 = {
  success: 'm-alert--success',
  warning: 'm-alert--warning',
  danger: 'm-alert--danger'
};

var Alert = function (_Component) {
  _inherits$1(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: true,
      closed: false
    }, _this.handleClose = function (e) {
      var onClose = _this.props.onClose;

      e.preventDefault();
      onClose && onClose();
      _this.setState({ closed: true });
    }, _temp), _possibleConstructorReturn$1(_this, _ret);
  }

  _createClass$1(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          title = _props.title,
          children = _props.children,
          closable = _props.closable,
          _props$ariaLabelClose = _props.ariaLabelClose,
          ariaLabelClose = _props$ariaLabelClose === undefined ? 'Sluiten' : _props$ariaLabelClose,
          className = _props.className,
          qa = _props.qa;
      var closed = this.state.closed;

      var alertClass = classNames('m-alert', _defineProperty$1({}, '' + typeClasses$1[type], !!type), className);

      var closeButton = closable ? React.createElement(Button, { type: type, icon: 'close', onClick: this.handleClose, className: 'm-alert__close a-button-transparent', 'aria-label': ariaLabelClose }) : null;

      return React.createElement('div', null, !closed ? React.createElement('div', { className: alertClass, 'data-qa': qa }, closeButton, title && React.createElement('h5', { className: 'u-margin-bottom-xs' }, title), children) : React.createElement('div', null));
    }
  }]);

  return Alert;
}(Component);

var _createClass$2 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MultipleSelectionMode = function () {
    function MultipleSelectionMode(component) {
        _classCallCheck$2(this, MultipleSelectionMode);

        this.component = component;
    }

    _createClass$2(MultipleSelectionMode, [{
        key: 'handleDefaultValue',
        value: function handleDefaultValue(defaultValues) {
            var _this = this;

            if (!defaultValues || !defaultValues.length) {
                return;
            }

            if (!Array.isArray(defaultValues)) {
                defaultValues = [defaultValues];
            }
            var selection = defaultValues.map(function (defaultValue) {
                return (_this.component.state.results || []).find(function (item) {
                    return item.value === defaultValue;
                });
            });

            if (!selection || !selection.length) {
                return;
            }

            this.component.setState({
                selection: selection
            });

            if (this.component.inputField) {
                this.component.inputField.value = '';
            }
        }
    }, {
        key: 'select',
        value: function select(item) {
            if (this.component.state.selection.findIndex(function (s) {
                return s.value === item.value;
            }) > -1) return;

            var selection = this.component.state.selection;
            selection.push(item);
            this.component.setState({
                selection: selection
            });
            this.component.props.onSelection && this.component.props.onSelection(selection.map(function (i) {
                return i.value;
            }));
            if (this.component.inputField) this.component.inputField.value = '';
            this.component.closePane();
        }
    }, {
        key: 'unselect',
        value: function unselect(item) {
            var selection = this.component.state.selection;
            var index = selection.findIndex(function (s) {
                return s.value === item.value;
            });
            if (index === -1) return;

            selection.splice(index, 1);
            this.component.setState({
                selection: selection
            });
            this.component.props.onSelection && this.component.props.onSelection(selection.map(function (i) {
                return i.value;
            }));

            if (this.component.searchMode) this.component.searchMode.reset();
        }
    }, {
        key: 'getSelection',
        value: function getSelection() {
            return this.component.state.selection;
        }
    }]);

    return MultipleSelectionMode;
}();

var _createClass$1$1 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck$1$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var SingleSelectionMode = function () {
    function SingleSelectionMode(component) {
        _classCallCheck$1$1(this, SingleSelectionMode);

        this.selectedItem = null;

        this.component = component;
    }

    _createClass$1$1(SingleSelectionMode, [{
        key: "handleDefaultValue",
        value: function handleDefaultValue(defaultValue) {
            if (!defaultValue) {
                return;
            }

            var item = (this.component.state.results || []).find(function (result) {
                return result.value === (Array.isArray(defaultValue) ? defaultValue[0] : defaultValue);
            });
            if (!item) {
                return;
            }

            if (this.component.inputField) {
                this.component.inputField.value = item.label;
            }
        }
    }, {
        key: "select",
        value: function select(item) {
            this.selectedItem = item;
            this.component.props.onSelection && this.component.props.onSelection(item.value);
            if (this.component.inputField) this.component.inputField.value = item.label;
            this.component.closePane();
        }
    }, {
        key: "getSelection",
        value: function getSelection() {
            return this.selectedItem ? [this.selectedItem] : [];
        }
    }]);

    return SingleSelectionMode;
}();

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};

var TagList = function TagList(_ref) {
    var children = _ref.children;

    return React.createElement("ul", { className: "o-tag-list" }, children);
};

var Icon$1 = function Icon(_ref) {
    var name = _ref.name,
        style = _ref.style,
        className = _ref.className,
        ariaLabel = _ref.ariaLabel,
        onClick = _ref.onClick,
        qa = _ref.qa;

    var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

    return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$2$1 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _defineProperty$2(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck$2$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$2(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$1(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$1(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$1 = {
    tiny: 'a-button--tiny',
    small: 'a-button--small',
    large: 'a-button--large'
};
var typeClasses$2 = {
    primary: '',
    secondary: 'a-button--secondary',
    success: 'a-button--success',
    warning: 'a-button--warning',
    danger: 'a-button--danger',
    transparent: 'a-button--transparent',
    default: 'a-button--default'
};

var Button$1 = function (_Component) {
    _inherits$2(Button, _Component);

    function Button() {
        _classCallCheck$2$1(this, Button);

        return _possibleConstructorReturn$2(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass$2$1(Button, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                id = _props.id,
                negative = _props.negative,
                outline = _props.outline,
                transparent = _props.transparent,
                className = _props.className,
                children = _props.children,
                icon = _props.icon,
                iconLeft = _props.iconLeft,
                iconRight = _props.iconRight,
                onClick = _props.onClick,
                _props$title = _props.title,
                title = _props$title === undefined ? '' : _props$title,
                _props$ariaLabel = _props.ariaLabel,
                ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
                _props$alt = _props.alt,
                alt = _props$alt === undefined ? '' : _props$alt,
                type = _props.type,
                size = _props.size,
                _props$block = _props.block,
                block = _props$block === undefined ? false : _props$block,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style,
                _props$disabled = _props.disabled,
                disabled = _props$disabled === undefined ? false : _props$disabled,
                htmlType = _props.htmlType,
                qa = _props.qa;

            var btnClass = classNames(className, (_classNames = {
                'a-button': !outline && !negative && !(type === 'default' && !!transparent)
            }, _defineProperty$2(_classNames, '' + typeClasses$2[type], !!type), _defineProperty$2(_classNames, '' + sizeClasses$1[size], !!size), _defineProperty$2(_classNames, 'has-icon', !!icon), _defineProperty$2(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$2(_classNames, 'has-icon-right', !!iconRight), _defineProperty$2(_classNames, 'a-button-negative', !!negative), _defineProperty$2(_classNames, 'a-button-outline', !!outline), _defineProperty$2(_classNames, 'a-button-transparent', !!transparent), _defineProperty$2(_classNames, 'a-button--block', block), _classNames));

            return React.createElement('button', {
                id: id,
                className: btnClass,
                title: title || '',
                onClick: onClick,
                style: style,
                alt: alt,
                disabled: disabled,
                type: htmlType,
                'aria-label': ariaLabel,
                'data-qa': qa }, icon ? React.createElement(Icon$1, { name: icon }) : null, iconLeft ? React.createElement(Icon$1, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$1, { name: iconRight }) : null, children);
        }
    }]);

    return Button;
}(Component);

var _createClass$1$1$1 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck$1$1$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$1$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$1(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$1(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TagListItem = function (_Component) {
    _inherits$1$1(TagListItem, _Component);

    function TagListItem() {
        _classCallCheck$1$1$1(this, TagListItem);

        return _possibleConstructorReturn$1$1(this, (TagListItem.__proto__ || Object.getPrototypeOf(TagListItem)).apply(this, arguments));
    }

    _createClass$1$1$1(TagListItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                _props$closable = _props.closable,
                closable = _props$closable === undefined ? false : _props$closable,
                _props$icon = _props.icon,
                icon = _props$icon === undefined ? '' : _props$icon,
                _props$buttonClass = _props.buttonClass,
                onClick = _props.onClick,
                ariaLabelIcon = _props.ariaLabelIcon,
                _props$ariaLabelClose = _props.ariaLabelClose,
                ariaLabelClose = _props$ariaLabelClose === undefined ? 'Sluiten' : _props$ariaLabelClose,
                qa = _props.qa;

            return React.createElement('li', { className: 'm-tag', 'data-qa': qa }, icon && React.createElement(Button$1, { size: 'small', icon: icon, ariaLabel: ariaLabelIcon }), React.createElement('span', { className: 'm-tag__label' }, value), closable && React.createElement(Button$1, { transparent: true, size: 'small', type: 'danger', icon: 'close', ariaLabel: ariaLabelClose, onClick: onClick }));
        }
    }]);

    return TagListItem;
}(Component);

var _createClass$3 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var SyncSearchMode = function () {
    function SyncSearchMode(component) {
        _classCallCheck$3(this, SyncSearchMode);

        this.component = component;
    }

    _createClass$3(SyncSearchMode, [{
        key: "initialize",
        value: function initialize() {
            this.component.selectionMode.handleDefaultValue(this.component.props.defaultValue);
            return Promise.resolve();
        }
    }, {
        key: "search",
        value: function search(value) {
            if (!value) {
                return Promise.resolve(this.component.props.items);
            }

            var items = this.component.props.items;
            // Remove already selected items
            var selection = this.component.selectionMode.getSelection();
            items = items.filter(function (item) {
                return !selection.find(function (s) {
                    return s.value === item.value;
                });
            });

            // Find matches in remaining items
            var matches = items.filter(function (item) {
                return item.label.toLowerCase().includes(value.toLowerCase());
            });
            return Promise.resolve(matches);
        }
    }, {
        key: "reset",
        value: function reset() {
            var items = this.component.props.items;
            var selection = this.component.state.selection || [];
            items = items.filter(function (item) {
                return !selection.find(function (s) {
                    return s.value === item.value;
                });
            });
            this.component.setState({
                results: items
            });
        }
    }]);

    return SyncSearchMode;
}();

var _createClass$4 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }return arr2;
    } else {
        return Array.from(arr);
    }
}

function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var AsyncSearchMode = function () {
    function AsyncSearchMode(component) {
        _classCallCheck$4(this, AsyncSearchMode);

        this.component = component;
    }

    _createClass$4(AsyncSearchMode, [{
        key: "initialize",
        value: function initialize() {
            var _this = this;

            if (this.component.state.defaultValue && this.component.state.defaultValue.length > 0) {
                var defaultValues = Array.isArray(this.component.state.defaultValue) ? [].concat(_toConsumableArray(this.component.state.defaultValue)) : [this.component.state.defaultValue];
                return Promise.all(defaultValues.map(function (v) {
                    return _this.search(v);
                })).then(function (results) {
                    if (!results.length) {
                        return;
                    }

                    results = results.reduce(function (acc, searchResultValues) {
                        return [].concat(_toConsumableArray(acc), _toConsumableArray(searchResultValues.filter(function (r) {
                            return !!r;
                        })));
                    }, []);

                    _this.component.setState({
                        results: results
                    });
                    _this.component.selectionMode.handleDefaultValue(defaultValues);
                });
            }
        }
    }, {
        key: "search",
        value: function search(value) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                try {
                    _this2.component.setState({
                        isLoading: true
                    });
                    _this2.component.props.asyncItems(value, function (results) {
                        resolve(results);
                        _this2.component.setState({
                            isLoading: false
                        });
                    });
                } catch (e) {
                    _this2.component.setState({
                        isLoading: false
                    });
                    reject(e);
                }
            });
        }
    }, {
        key: "reset",
        value: function reset() {
            // Do nothing
        }
    }]);

    return AsyncSearchMode;
}();

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return _extendStatics(d, b);
};

function __extends(d, b) {
    _extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/new Error();
            /*@__PURE__*/console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    }
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () {
        throw err;
    }, 0);
}

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
    closed: true,
    next: function next(value) {},
    error: function error(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        } else {
            hostReportError(err);
        }
    },
    complete: function complete() {}
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/function () {
    return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
    };
}();

var _typeof$1$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof$1$1(x)) === 'object';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
}();
var UnsubscriptionError = UnsubscriptionErrorImpl;

var _typeof$2 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};
var Subscription = /*@__PURE__*/function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this,
            _parentOrParents = _a._parentOrParents,
            _ctorUnsubscribe = _a._ctorUnsubscribe,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            } catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    } catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        } else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown === 'undefined' ? 'undefined' : _typeof$2(teardown)) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                } else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                } else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                {
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
                }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        } else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        } else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription());
    return Subscription;
}();
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
    }, []);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/function () {
    return typeof Symbol === 'function' ? /*@__PURE__*/Symbol('rxSubscriber') : '@@rxSubscriber_' + /*@__PURE__*/Math.random();
}();

var _typeof$3 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};
var Subscriber = /*@__PURE__*/function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if ((typeof destinationOrNext === 'undefined' ? 'undefined' : _typeof$3(destinationOrNext)) === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    } else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () {
        return this;
    };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription);
var SafeSubscriber = /*@__PURE__*/function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            } else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                } else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function wrappedComplete() {
                    return _this._complete.call(_this._context);
                };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            } else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        } catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            } else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            } else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber);

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
    while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        } else if (destination && destination instanceof Subscriber) {
            observer = destination;
        } else {
            observer = null;
        }
    }
    return true;
}

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/function () {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}

/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) {
            return fn(prev);
        }, input);
    };
}

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable = /*@__PURE__*/function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        } else {
            sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            } else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) {
                return value = x;
            }, function (err) {
                return reject(err);
            }, function () {
                return resolve(value);
            });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
}();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription);

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber = /*@__PURE__*/function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber);
var Subject = /*@__PURE__*/function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        } else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        } else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable);
var AnonymousSubject = /*@__PURE__*/function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        } else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject);

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action = /*@__PURE__*/function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        return this;
    };
    return Action;
}(Subscription);

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction = /*@__PURE__*/function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action);

var Scheduler = /*@__PURE__*/function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () {
        return Date.now();
    };
    return Scheduler;
}();

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler = /*@__PURE__*/function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            } else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        } else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler);

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function subscribeToArray(array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var asyncScheduler = /*@__PURE__*/new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}();
var MapSubscriber = /*@__PURE__*/function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber);

/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
var subscribeToPromise = function subscribeToPromise(promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) {
            return subscriber.error(err);
        }).then(null, hostReportError);
        return subscriber;
    };
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/getSymbolIterator();

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
var subscribeToIterable = function subscribeToIterable(iterable) {
    return function (subscriber) {
        var iterator$1 = iterable[iterator]();
        do {
            var item = void 0;
            try {
                item = iterator$1.next();
            } catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator$1.return === 'function') {
            subscriber.add(function () {
                if (iterator$1.return) {
                    iterator$1.return();
                }
            });
        }
        return subscriber;
    };
};

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
var subscribeToObservable = function subscribeToObservable(obj) {
    return function (subscriber) {
        var obs = obj[observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        } else {
            return obs.subscribe(subscriber);
        }
    };
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = function isArrayLike(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = function subscribeTo(result) {
    if (!!result && typeof result[observable] === 'function') {
        return subscribeToObservable(result);
    } else if (isArrayLike(result)) {
        return subscribeToArray(result);
    } else if (isPromise(result)) {
        return subscribeToPromise(result);
    } else if (!!result && typeof result[iterator] === 'function') {
        return subscribeToIterable(result);
    } else {
        var value = isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};

/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */
var SimpleInnerSubscriber = /*@__PURE__*/function (_super) {
    __extends(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(Subscriber);
var SimpleOuterSubscriber = /*@__PURE__*/function (_super) {
    __extends(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function () {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(Subscriber);
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    return subscribeTo(result)(innerSubscriber);
}

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map(function (args) {
            return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
    }
    return new Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            } else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function unsubscribe() {
            return source_1.removeEventListener(eventName, handler, options);
        };
    } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function unsubscribe() {
            return source_2.off(eventName, handler);
        };
    } else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function unsubscribe() {
            return source_3.removeListener(eventName, handler);
        };
    } else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    } else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}();
var FilterSubscriber = /*@__PURE__*/function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber);

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = async;
    }
    return function (source) {
        return source.lift(new DebounceTimeOperator(dueTime, scheduler));
    };
}
var DebounceTimeOperator = /*@__PURE__*/function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}();
var DebounceTimeSubscriber = /*@__PURE__*/function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber);
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}

/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */
function takeUntil(notifier) {
    return function (source) {
        return source.lift(new TakeUntilOperator(notifier));
    };
}
var TakeUntilOperator = /*@__PURE__*/function () {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function (subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = innerSubscribe(this.notifier, new SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}();
var TakeUntilSubscriber = /*@__PURE__*/function (_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function () {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function () {};
    return TakeUntilSubscriber;
}(SimpleOuterSubscriber);

/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}();
var TapSubscriber = /*@__PURE__*/function (_super) {
    __extends(TapSubscriber, _super);
    function TapSubscriber(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = noop;
        _this._tapError = noop;
        _this._tapComplete = noop;
        _this._tapError = error || noop;
        _this._tapComplete = complete || noop;
        if (isFunction(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        } else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || noop;
            _this._tapError = observerOrNext.error || noop;
            _this._tapComplete = observerOrNext.complete || noop;
        }
        return _this;
    }
    TapSubscriber.prototype._next = function (value) {
        try {
            this._tapNext.call(this._context, value);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber.prototype._error = function (err) {
        try {
            this._tapError.call(this._context, err);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber.prototype._complete = function () {
        try {
            this._tapComplete.call(this._context);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber;
}(Subscriber);

var InputLabel = function InputLabel(props) {
    var style = props.style,
        htmlFor = props.htmlFor,
        children = props.children,
        inline = props.inline,
        qa = props.qa;

    var labelClass = classNames('a-input__label', {
        'a-input__label--inline': !!inline
    });
    return React.createElement('label', { className: labelClass, htmlFor: htmlFor, style: style, 'data-qa': qa }, children);
};

var Icon$1$1 = function Icon(_ref) {
    var name = _ref.name,
        style = _ref.style,
        className = _ref.className,
        ariaLabel = _ref.ariaLabel,
        onClick = _ref.onClick,
        qa = _ref.qa;

    var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

    return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var Icon$2 = function Icon(_ref) {
    var name = _ref.name,
        style = _ref.style,
        className = _ref.className,
        ariaLabel = _ref.ariaLabel,
        onClick = _ref.onClick,
        qa = _ref.qa;

    var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

    return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass$5 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _defineProperty$1$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

function _classCallCheck$5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$2$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var stateClasses = {
    success: 'has-success',
    warning: 'has-warning',
    error: 'has-error'
};

var TextField = function (_Component) {
    _inherits$2$1(TextField, _Component);

    function TextField() {
        _classCallCheck$5(this, TextField);

        return _possibleConstructorReturn$2$1(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
    }

    _createClass$5(TextField, [{
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                id = _props.id,
                label = _props.label,
                description = _props.description,
                required = _props.required,
                mask = _props.mask,
                state = _props.state,
                autoComplete = _props.autoComplete,
                disabled = _props.disabled,
                iconright = _props.iconright,
                iconleft = _props.iconleft,
                loading = _props.loading,
                qa = _props.qa,
                _props$type = _props.type,
                type = _props$type === undefined ? 'text' : _props$type,
                size = _props.size,
                errorDescription = _props.errorDescription,
                className = _props.className,
                addonleft = _props.addonleft,
                addonright = _props.addonright,
                extraProps = _objectWithoutProperties(_props, ['id', 'label', 'description', 'required', 'mask', 'state', 'autoComplete', 'disabled', 'iconright', 'iconleft', 'loading', 'qa', 'type', 'size', 'errorDescription', 'className', 'addonleft', 'addonright']);

            var inputClass = classNames('a-input', (_classNames = {
                'has-icon-right': iconright || loading,
                'has-icon-left': iconleft,
                'has-addon': !!addonleft || !!addonright,
                'is-required': !!required
            }, _defineProperty$1$1(_classNames, '' + stateClasses[state], !!state), _defineProperty$1$1(_classNames, 'a-input--' + size, !!size), _classNames), className);

            return React.createElement('div', { className: inputClass, 'data-qa': qa }, label && React.createElement(InputLabel, { htmlFor: id }, label), React.createElement('div', { className: 'a-input__wrapper' }, addonleft ? React.createElement('div', { className: 'a-input__addon' }, addonleft) : null, iconleft ? React.createElement(Icon$2, { name: iconleft }) : null, mask ? React.createElement(InputMask, this.props) : React.createElement('input', _extends({ id: id, type: type, autoComplete: autoComplete, disabled: disabled,
                ref: function (_ref) {
                    function ref(_x) {
                        return _ref.apply(this, arguments);
                    }

                    ref.toString = function () {
                        return _ref.toString();
                    };

                    return ref;
                }(function (ref) {
                    return _this2.props.inputRef && _this2.props.inputRef(ref);
                }) }, extraProps)), iconright ? React.createElement(Icon$2, { name: iconright }) : null, loading ? React.createElement(Icon$2, { name: 'spinner', className: 'a-spinner a-spinner--sm' }) : null, addonright ? React.createElement('div', { className: 'a-input__addon' }, addonright) : null), description ? React.createElement('small', null, description) : null, errorDescription && React.createElement('small', { className: 'u-text-danger' }, errorDescription));
        }
    }]);

    return TextField;
}(Component);

var _createClass$6 = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _defineProperty$2$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

function _classCallCheck$6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$3(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'Enter'];

var Autocomplete = function (_Component) {
    _inherits$3(Autocomplete, _Component);

    function Autocomplete() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck$6(this, Autocomplete);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, (_ref = Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call.apply(_ref, [this].concat(args))), _this), _this.autocompleteRef = React.createRef(), _this.state = {
            open: _this.props.open || false,
            results: _this.props.items || [],
            cursor: 0,
            selection: [],
            defaultValue: _this.props.defaultValue || ''
        }, _this.selectionMode = _this.props.multipleSelect ? new MultipleSelectionMode(_this) : new SingleSelectionMode(_this), _this.searchMode = _this.props.asyncItems ? new AsyncSearchMode(_this) : new SyncSearchMode(_this), _this.destroy$ = new Subject(), _this.scrollToItem = function () {
            var domNode = ReactDOM.findDOMNode(_this['item_' + _this.state.cursor]);
            domNode.scrollIntoView(false);
        }, _this.handleOutsideClick = function (e) {
            var area = ReactDOM.findDOMNode(_this.autocompleteRef.current);
            if (area && !area.contains(e.target)) {
                _this.closePane();
            }
        }, _this.renderItems = function (item, index) {
            var liClasses = classNames({
                'm-selectable-list__item': true,
                'm-selectable-list__item--active': _this.state.cursor === index
            });
            return React.createElement('li', { key: item.value, 'data-value': item.value, 'data-label': item.label, className: liClasses,
                onClick: function onClick() {
                    return _this.selectOption(item);
                }, onKeyPress: function onKeyPress(e) {
                    return e.key === 'Enter' ? _this.selectOption(item) : null;
                }, ref: function ref(item) {
                    _this['item_' + index] = item;
                }, tabIndex: '0' }, item.label);
        }, _temp), _possibleConstructorReturn$3(_this, _ret);
    }

    _createClass$6(Autocomplete, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var change$ = fromEvent(this.inputField, 'keydown').pipe(takeUntil(this.destroy$), filter(function (e) {
                return !ARROW_KEYS.some(function (k) {
                    return k === e.key;
                });
            }), debounceTime(200), map(function () {
                return _this2.inputField.value;
            }), tap(function (value) {
                if (!_this2.state.open && value && value.length > 0) {
                    _this2.openPane();
                }
                _this2.props.onChange && _this2.props.onChange(value);
                _this2.search(value);
            }));

            document.addEventListener('click', this.handleOutsideClick, false);

            var handleArrowKeys$ = fromEvent(this.inputField, 'keydown').pipe(filter(function (e) {
                return ARROW_KEYS.some(function (k) {
                    return e.key === k;
                });
            }), takeUntil(this.destroy$), tap(function (e) {
                e.preventDefault();
                var _state = _this2.state,
                    results = _state.results,
                    cursor = _state.cursor;

                if (e.key === "ArrowDown" && cursor < results.length - 1) {
                    _this2.setState({
                        open: true,
                        cursor: cursor + 1
                    }, function () {
                        _this2.scrollToItem();
                    });
                }
                if (e.key === "ArrowUp" && cursor > 0) {
                    _this2.setState({
                        open: true,
                        cursor: cursor - 1
                    }, function () {
                        _this2.scrollToItem();
                    });
                }
                if (e.key === "Enter") {
                    if (cursor === 0) {
                        _this2.handleNewEntry(_this2.inputField.value);
                    }

                    _this2.selectOption(results[cursor - 1]);
                }
            }));

            // Start the show!
            this.searchMode.initialize();

            handleArrowKeys$.subscribe();
            change$.subscribe();
        }
    }, {
        key: 'closePane',
        value: function closePane() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'openPane',
        value: function openPane() {
            this.setState({
                open: true
            });
            this.search(this.inputField.value);
        }
    }, {
        key: 'search',
        value: function search(value) {
            var _this3 = this;

            this.searchMode.search(value).then(function (results) {
                _this3.setState({
                    results: results,
                    cursor: _this3.props.allowNewEntry ? 0 : 1
                });
            });
        }
    }, {
        key: 'handleNewEntry',
        value: function handleNewEntry(label) {
            var _this4 = this;

            if (!this.props.onNewEntry) {
                return this.selectionMode.select({ label: label, value: label });
            }

            this.props.onNewEntry(label, function (newItem) {
                _this4.selectionMode.select(newItem);
            });
        }
    }, {
        key: 'selectOption',
        value: function selectOption(item) {
            if (!!item) this.selectionMode.select(item);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.handleOutsideClick, false);
            this.destroy$.next();
            this.destroy$.complete();
        }
    }, {
        key: 'getInput',
        value: function getInput() {
            var _this5 = this;

            return React.createElement('input', { id: this.props.id,
                type: 'text',
                autoComplete: 'off',
                disabled: this.props.disabled,
                ref: function ref(_ref2) {
                    return _this5.inputField = _ref2;
                },
                'data-qa': this.props.qa,
                onFocus: function onFocus() {
                    return _this5.openPane();
                },
                placeholder: this.props.placeholder || '',
                required: !!this.props.required
            });
        }
    }, {
        key: 'focusOnInput',
        value: function focusOnInput() {
            if (!this.inputField) return;

            this.inputField.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this6 = this;

            var _props = this.props,
                noResults = _props.noResults,
                loading = _props.loading,
                state = _props.state,
                qa = _props.qa,
                allowNewEntry = _props.allowNewEntry,
                newEntryText = _props.newEntryText;
            var _state2 = this.state,
                results = _state2.results,
                open = _state2.open,
                isLoading = _state2.isLoading;

            var flyoutClasses = classNames('m-flyout', 'm-flyout--full', 'm-autocomplete', {
                'is-open': open,
                'is-multiple-select': !!this.props.multipleSelect,
                'm-flyout--left': !this.props.direction || this.props.direction === "left",
                'm-flyout--right': this.props.direction === "right"
            });

            var inputClass = classNames('a-input', (_classNames = {
                'has-icon-right': this.props.loading || this.state.isLoading,
                'has-icon-left': this.props.showSearchIcon
            }, _defineProperty$2$1(_classNames, '' + stateClasses[state], !!state), _defineProperty$2$1(_classNames, 'is-required', !!this.props.required), _classNames));

            var wrapperClasses = classNames('a-input__wrapper', {
                'has-focus': !!this.inputField && this.inputField === document.activeElement && !!this.props.multipleSelect
            });

            var newEntryClasses = classNames({
                'm-selectable-list__item': true,
                'm-selectable-list__item--active': this.state.cursor === 0
            });

            return React.createElement('div', null, React.createElement('div', { className: flyoutClasses, ref: this.autocompleteRef }, React.createElement('div', { className: inputClass, 'data-qa': qa }, React.createElement(InputLabel, { htmlFor: this.props.id }, this.props.label), React.createElement('div', { className: wrapperClasses, onClick: function onClick() {
                    return _this6.focusOnInput();
                } }, this.props.multipleSelect && React.createElement(TagList, null, this.state.selection.filter(function (s) {
                return !!s;
            }).map(function (s) {
                return React.createElement(TagListItem, { closable: true, onClick: function onClick() {
                        return _this6.selectionMode.unselect(s);
                    }, key: s.value,
                    value: s.label });
            }), React.createElement('li', { className: 'm-tag has-input' }, this.props.multipleSelect && this.getInput())), !this.props.multipleSelect && this.getInput(), this.props.showSearchIcon && React.createElement(Icon$1$1, { name: 'search' }), (loading || isLoading) && React.createElement(Icon$1$1, { name: 'spinner', className: 'a-spinner a-spinner--sm' }))), React.createElement(FlyoutContent, { hasPadding: false }, results.length === 0 && !allowNewEntry || results.length === 0 && allowNewEntry && this.inputField && !this.inputField.value ? React.createElement('p', { className: 'u-margin-xs u-text-light u-text-center' }, noResults || "Geen resultaten") : React.createElement('ul', { className: 'm-selectable-list m-selectable-list--no-border' }, allowNewEntry && this.inputField && this.inputField.value && React.createElement('li', { className: newEntryClasses, onClick: function onClick() {
                    return _this6.handleNewEntry(_this6.inputField.value);
                },
                onKeyPress: function onKeyPress(e) {
                    return e.key === 'Enter' ? _this6.selectOption(item) : null;
                },
                ref: function ref(item) {
                    _this6['item_' + 0] = item;
                }, tabIndex: '0' }, newEntryText || "Maak een nieuw item voor:", ' ', this.inputField.value), results.map(function (item, index) {
                return _this6.renderItems(item, index + 1);
            })))));
        }
    }]);

    return Autocomplete;
}(Component);

var Icon$3 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var sizeClasses$2 = {
  small: 'a-avatar--small',
  medium: 'a-avatar--medium',
  large: 'a-avatar--large'
};

var IconWrapper = function IconWrapper(_ref) {
  var icon = _ref.icon;
  return React.createElement('span', { className: 'a-avatar__icon' }, React.createElement(Icon$3, { name: icon }));
};
var LetterWrapper = function LetterWrapper(_ref2) {
  var letter = _ref2.letter;
  return React.createElement('span', { className: 'a-avatar__letter' }, letter);
};

var Avatar = function Avatar(props) {
  var size = props.size,
      icon = props.icon,
      children = props.children,
      style = props.style,
      letter = props.letter,
      image = props.image,
      _props$alt = props.alt,
      alt = _props$alt === undefined ? '' : _props$alt,
      className = props.className,
      qa = props.qa,
      _props$ariaLabel = props.ariaLabel,
      ariaLabel = _props$ariaLabel === undefined ? 'Gebruiker icoon' : _props$ariaLabel;

  var avatarClass = classNames('a-avatar', _defineProperty$3({}, '' + sizeClasses$2[size], !!size), className);

  return React.createElement('div', { className: avatarClass, style: style, 'data-qa': qa }, icon && React.createElement(IconWrapper, { icon: icon }), letter && React.createElement(LetterWrapper, { letter: letter }), image && React.createElement('img', { src: image, alt: alt }), children, React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var typeClasses$3 = {
  primary: 'a-badge--primary',
  secondary: 'a-badge--secondary',
  success: 'a-badge--success',
  warning: 'a-badge--warning',
  danger: 'a-badge--danger'
};

var Badge = function Badge(props) {
  var type = props.type,
      className = props.className,
      _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style,
      children = props.children,
      ariaLabel = props.ariaLabel,
      qa = props.qa;

  var badgeClass = classNames('a-badge', className, _defineProperty$4({}, '' + typeClasses$3[type], !!type));

  return React.createElement('span', { className: badgeClass, title: ariaLabel, 'aria-label': ariaLabel, style: style, 'data-qa': qa }, children);
};

var Icon$4 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$7 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$4(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$3 = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$4 = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$2 = function (_Component) {
  _inherits$4(Button, _Component);

  function Button() {
    _classCallCheck$7(this, Button);

    return _possibleConstructorReturn$4(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$7(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$5(_classNames, '' + typeClasses$4[type], !!type), _defineProperty$5(_classNames, '' + sizeClasses$3[size], !!size), _defineProperty$5(_classNames, 'has-icon', !!icon), _defineProperty$5(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$5(_classNames, 'has-icon-right', !!iconRight), _defineProperty$5(_classNames, 'a-button-negative', !!negative), _defineProperty$5(_classNames, 'a-button-outline', !!outline), _defineProperty$5(_classNames, 'a-button-transparent', !!transparent), _defineProperty$5(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$4, { name: icon }) : null, iconLeft ? React.createElement(Icon$4, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$4, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var ButtonGroup = function ButtonGroup(props) {
  var children = props.children,
      style = props.style,
      _props$direction = props.direction,
      direction = _props$direction === undefined ? 'horizontal' : _props$direction,
      qa = props.qa;

  var className = classNames('m-button-group', {
    'm-button-group--vertical': direction === 'vertical'
  });

  return React.createElement('div', { className: className, style: style, 'data-qa': qa }, children);
};

var viewTypeMap = {
  days: 'dagen',
  months: 'maanden',
  years: 'jaren'
};

var mapViewType = function mapViewType(viewType) {
  return viewTypeMap[viewType];
};

var mapNav = function mapNav(direction, viewType, value) {
  var multi = '';
  var viewTypeDisplay = '';
  var valueDisplay = '';
  var directionDisplay = direction > 0 ? 'volgend' : 'vorig';

  switch (viewType) {
    case 'months':
      viewTypeDisplay = 'jaar';
      valueDisplay = value.clone().add(direction, 'years').format('YYYY');
      break;
    case 'years':
      multi = 'e';
      viewTypeDisplay = 'periode van 12 jaar';
      var years = yearsOfMonth(value.clone().add(12 * direction, 'years'));
      valueDisplay = years[0] + '-' + years.slice(-1);
      break;
    default:
      multi = 'e';
      viewTypeDisplay = 'maand';
      valueDisplay = value.clone().add(direction, 'months').format('MMMM YYYY');
  }

  return 'Ga naar ' + directionDisplay + multi + ' ' + viewTypeDisplay + ', ' + valueDisplay;
};

var aria = {
  mapViewType: mapViewType,
  mapNav: mapNav
};

function rotateArrayByPosition(data, d) {
  var temp = data.splice(0);
  for (var i = 0; i < d - 1; i++) {
    var first = temp.shift();
    temp.push(first);
  }
  return temp;
}

function daysOfMonth(displayedMonth) {
  var _i = void 0,
      d = void 0;
  var results = [];
  var startOfMonth = displayedMonth.startOf('months');
  var startDayOfWeek = startOfMonth.clone().startOf('isoWeek');
  var startAt = -startOfMonth.diff(startDayOfWeek, 'days');

  var endAt = Math.ceil((displayedMonth.daysInMonth() - startAt) / 7) * 7 + startAt - 1;
  for (d = _i = startAt; startAt <= endAt ? _i <= endAt : _i >= endAt; d = startAt <= endAt ? ++_i : --_i) {
    results.push(displayedMonth.clone().add(d, 'days'));
  }

  return results;
}

function weekEnum(daysOfMonth) {
  var results = [];

  for (var _i = 0, _ref = daysOfMonth.length / 7; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--) {
    results.push(_i);
  }
  return results;
}

function isDateFromNextMonth(date, displayedMonth) {
  return date.year() > displayedMonth.year() || date.year() === displayedMonth.year() && date.month() > displayedMonth.month();
}

function isDateFromPrevMonth(date, displayedMonth) {
  return date.year() < displayedMonth.year() || date.year() === displayedMonth.year() && date.month() < displayedMonth.month();
}

function yearsOfMonth(displayedMonth) {
  var amountOfYearsBack = -11;
  var results = [];

  for (var year = amountOfYearsBack; year < 0; year++) {
    results.push(displayedMonth.clone().add(year, 'years').format('YYYY'));
  }
  results.push(displayedMonth.clone().format('YYYY'));

  return results;
}

function nextItemInArray(element, array) {
  var i = array.findIndex(function (k) {
    return k == element;
  });
  i = i + 1;
  i = i % array.length;
  return array[i];
}

var Icon$5 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$8 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$5(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$4 = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$5 = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$3 = function (_Component) {
  _inherits$5(Button, _Component);

  function Button() {
    _classCallCheck$8(this, Button);

    return _possibleConstructorReturn$5(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$8(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$6(_classNames, '' + typeClasses$5[type], !!type), _defineProperty$6(_classNames, '' + sizeClasses$4[size], !!size), _defineProperty$6(_classNames, 'has-icon', !!icon), _defineProperty$6(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$6(_classNames, 'has-icon-right', !!iconRight), _defineProperty$6(_classNames, 'a-button-negative', !!negative), _defineProperty$6(_classNames, 'a-button-outline', !!outline), _defineProperty$6(_classNames, 'a-button-transparent', !!transparent), _defineProperty$6(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$5, { name: icon }) : null, iconLeft ? React.createElement(Icon$5, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$5, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var _createClass$1$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$1$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Nav = function (_Component) {
  _inherits$1$2(Nav, _Component);

  function Nav() {
    _classCallCheck$1$2(this, Nav);

    return _possibleConstructorReturn$1$2(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass$1$2(Nav, [{
    key: 'renderNav',
    value: function renderNav() {
      var _props = this.props,
          viewType = _props.viewType,
          displayedPeriod = _props.displayedPeriod;

      switch (viewType) {
        case 'months':
          return displayedPeriod.format('YYYY');
        case 'years':
          return this.renderYearsNav(displayedPeriod);
        default:
          return displayedPeriod.format('MMMM YYYY');
      }
    }
  }, {
    key: 'renderYearsNav',
    value: function renderYearsNav(displayedMonth) {
      var years = yearsOfMonth(displayedMonth);
      return years[0] + '-' + years.slice(-1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onClickPrevious = _props2.onClickPrevious,
          onClickViewType = _props2.onClickViewType,
          onClickNext = _props2.onClickNext,
          viewType = _props2.viewType,
          displayedPeriod = _props2.displayedPeriod,
          _props2$ariaLabelPrev = _props2.ariaLabelPrevious,
          ariaLabelPrevious = _props2$ariaLabelPrev === undefined ? function (viewType, value) {
        return aria.mapNav(-1, viewType, value);
      } : _props2$ariaLabelPrev,
          _props2$ariaLabelNext = _props2.ariaLabelNext,
          ariaLabelNext = _props2$ariaLabelNext === undefined ? function (viewType, value) {
        return aria.mapNav(1, viewType, value);
      } : _props2$ariaLabelNext;

      return React.createElement(React.Fragment, null, React.createElement(Button$3, {
        htmlType: 'button',
        onClick: onClickPrevious,
        className: 'a-button has-icon',
        icon: 'angle-left',
        ariaLabel: ariaLabelPrevious(viewType, displayedPeriod)
      }), React.createElement(Button$3, { htmlType: 'button', onClick: onClickViewType, className: 'm-datepicker__title a-button u-text-capitalize' }, this.renderNav()), React.createElement(Button$3, {
        htmlType: 'button',
        onClick: onClickNext,
        className: 'a-button has-icon',
        icon: 'angle-right',
        ariaLabel: ariaLabelNext(viewType, displayedPeriod)
      }));
    }
  }]);

  return Nav;
}(Component);

var _createClass$2$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$2$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$2$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Rows = function (_Component) {
  _inherits$2$2(Rows, _Component);

  function Rows() {
    _classCallCheck$2$2(this, Rows);

    return _possibleConstructorReturn$2$2(this, (Rows.__proto__ || Object.getPrototypeOf(Rows)).apply(this, arguments));
  }

  _createClass$2$2(Rows, [{
    key: "generateRows",
    value: function generateRows() {
      var _props = this.props,
          list = _props.list,
          rowLength = _props.rowLength,
          onClick = _props.onClick;

      return list.map(function (content, index) {
        return React.createElement("td", { key: index }, React.createElement("button", { className: "u-text-capitalize", tabIndex: index, value: content, onClick: onClick, type: "button" }, content.replace(/\./g, ' ')));
      }).reduce(function (r, element, index) {
        // create element groups with size 4, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6],x ...]
        index % rowLength === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
      }, []).map(function (rowContent, index) {
        // surround every group with a tr
        return React.createElement("tr", { key: index }, rowContent);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.generateRows();
    }
  }]);

  return Rows;
}(Component);

var _createClass$3$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$3$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$3$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$3$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Day = function (_Component) {
  _inherits$3$1(Day, _Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$3$1(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$3$1(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnClick = function (day) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          selectDay = _this$props.selectDay;

      if (disabled) return;
      selectDay(day);
    }, _temp), _possibleConstructorReturn$3$1(_this, _ret);
  }

  _createClass$3$1(Day, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          activeDate = _props.activeDate,
          day = _props.day,
          selected = _props.selected,
          disabled = _props.disabled,
          dayNextMonth = _props.dayNextMonth,
          dayPrevMonth = _props.dayPrevMonth,
          dayActiveClassName = _props.dayActiveClassName,
          selectedClassName = _props.selectedClassName,
          dayDisabledClassName = _props.dayDisabledClassName,
          dayFromOtherMonthClassName = _props.dayFromOtherMonthClassName,
          ariaLabelButtonDateFormat = _props.ariaLabelButtonDateFormat;

      var buttonClasses = [];

      if (day.isSame(Moment(), 'day')) {
        buttonClasses.push(selectedClassName);
      }

      if (day.isSame(activeDate, 'day')) {
        buttonClasses.push(dayActiveClassName);
      }

      if (disabled) {
        buttonClasses.push(dayDisabledClassName);
      }

      if (selected) {
        buttonClasses.push(dayActiveClassName);
      }

      if (dayPrevMonth || dayNextMonth) {
        buttonClasses.push(dayFromOtherMonthClassName);
      }

      return React.createElement('td', null, React.createElement('button', {
        tabIndex: disabled ? '-1' : '0',
        type: 'button',
        onClick: this.handleOnClick.bind(this, day),
        className: buttonClasses.join(' '),
        'aria-label': day.format(ariaLabelButtonDateFormat)
      }, day.date()));
    }
  }]);

  return Day;
}(Component);

Day.defaultProps = {
  dayClassName: '',
  dayActiveClassName: 'is-selected',
  selectedClassName: 'is-current',
  dayDisabledClassName: 'is-unavailable',
  dayFromOtherMonthClassName: 'is-faded',
  ariaLabelButtonDateFormat: 'dddd D MMMM YYYY'
};

var _createClass$4$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$4$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$4$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$4$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Body = function (_Component) {
  _inherits$4$1(Body, _Component);

  function Body() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$4$1(this, Body);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$4$1(this, (_ref = Body.__proto__ || Object.getPrototypeOf(Body)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnClick = function (type, event) {
      var value = event.target.value;
      var newDisplayedPeriod = null;
      var displayedPeriod = _this.props.displayedPeriod;

      if (type === 'days') {
        newDisplayedPeriod = Moment(displayedPeriod.format('YYYY') + value, "YYYY MMM");
      } else if (type === 'months') {
        newDisplayedPeriod = Moment(displayedPeriod.format('MM') + value, "MM YYYY");
      }

      var goToViewType = _this.props.goToViewType;

      goToViewType(type, newDisplayedPeriod);
    }, _temp), _possibleConstructorReturn$4$1(_this, _ret);
  }

  _createClass$4$1(Body, [{
    key: 'renderBody',
    value: function renderBody(displayedPeriod) {
      var viewType = this.props.viewType;

      switch (viewType) {
        case 'months':
          return this.renderListMonths();
        case "years":
          return this.renderListYears(displayedPeriod);
        default:
          return this.renderWeeks(displayedPeriod);
      }
    }
  }, {
    key: 'renderWeeks',
    value: function renderWeeks(displayMonth) {
      var _this2 = this;

      var _daysOfMonth = daysOfMonth(displayMonth);
      var _weekEnum = weekEnum(_daysOfMonth);
      return _weekEnum.map(function (week, key) {
        return React.createElement('tr', { key: key }, _this2.renderDay(_daysOfMonth, week));
      });
    }
  }, {
    key: 'renderListMonths',
    value: function renderListMonths() {
      var months = Moment.monthsShort();
      return React.createElement(Rows, { list: months, rowLength: 4, onClick: this.handleOnClick.bind(this, 'days') });
    }
  }, {
    key: 'renderListYears',
    value: function renderListYears(displayMonth) {
      var years = yearsOfMonth(displayMonth);
      return React.createElement(Rows, { list: years, rowLength: 4, onClick: this.handleOnClick.bind(this, 'months') });
    }
  }, {
    key: 'renderDay',
    value: function renderDay(_daysOfMonth, week) {
      var _this3 = this;

      var days = [0, 1, 2, 3, 4, 5, 6];
      var _props = this.props,
          activeDate = _props.activeDate,
          displayedPeriod = _props.displayedPeriod,
          selectedDates = _props.selectedDates,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          format = _props.format,
          noWeekends = _props.noWeekends,
          selectDay = _props.selectDay,
          ariaLabelButtonDateFormat = _props.ariaLabelButtonDateFormat;

      return days.map(function (day, key) {
        var date = _daysOfMonth[week * 7 + day];
        var disabled = void 0;
        var selected = false;

        if (minDate && maxDate) {
          disabled = date.isBefore(minDate, 'day') || date.isAfter(maxDate, 'day');
        } else if (minDate) {
          disabled = date.isBefore(minDate, 'day');
        } else if (maxDate) {
          disabled = date.isAfter(maxDate, 'day');
        }

        if (noWeekends) {
          disabled = date.day() === 6 || date.day() === 0;
        }

        var dayNextMonth = isDateFromNextMonth(date, displayedPeriod);
        var dayPrevMonth = isDateFromPrevMonth(date, displayedPeriod);

        selectedDates.forEach(function (selectedDate) {
          if (date.isSame(Moment(selectedDate, format), 'day')) {
            selected = true;
            dayPrevMonth = false;
            dayNextMonth = false;
          }
        });

        return React.createElement(Day, {
          key: key,
          day: date,
          selectDay: selectDay.bind(_this3, date),
          disabled: disabled,
          selected: selected,
          dayPrevMonth: dayPrevMonth,
          dayNextMonth: dayNextMonth,
          activeDate: activeDate,
          ariaLabelButtonDateFormat: ariaLabelButtonDateFormat });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var displayedPeriod = this.props.displayedPeriod;

      return this.renderBody(displayedPeriod);
    }
  }]);

  return Body;
}(Component);

Body.defaultProps = {
  selectedDates: []
};

var _createClass$5$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$5$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$5$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$5$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Head = function (_Component) {
  _inherits$5$1(Head, _Component);

  function Head() {
    _classCallCheck$5$1(this, Head);

    return _possibleConstructorReturn$5$1(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass$5$1(Head, [{
    key: 'renderHeader',
    value: function renderHeader() {
      var viewType = this.props.viewType;

      switch (viewType) {
        case 'months':
          return null;
        case 'years':
          return null;
        default:
          return this.renderNameOfDays();
      }
    }
  }, {
    key: 'renderNameOfDays',
    value: function renderNameOfDays() {
      // True parameter to sort weekdays by locale
      var nameOfDays = Moment.weekdaysMin(true);
      var longNameDays = Moment.weekdays(true);
      var orderedLongNameDays = rotateArrayByPosition(longNameDays, 2);

      return React.createElement('tr', { className: 'm-datepicker__days' }, nameOfDays.map(function (day, i) {
        return React.createElement('th', { key: i, className: 'u-text-capitalize', 'aria-label': orderedLongNameDays[i] }, day);
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderHeader();
    }
  }]);

  return Head;
}(Component);

var _createClass$6$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$6$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$6(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Calendar = function (_Component) {
  _inherits$6(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$6$1(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$6(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayedPeriod: _this.props.activeDate ? Moment(_this.props.activeDate, _this.props.format) : Moment(),
      viewType: 'days',
      views: ['days', 'months', 'years']
    }, _temp), _possibleConstructorReturn$6(_this, _ret);
  }

  _createClass$6$1(Calendar, [{
    key: 'changeViewType',
    value: function changeViewType() {
      var _state = this.state,
          viewType = _state.viewType,
          views = _state.views;

      var switchTo = nextItemInArray(viewType, views);
      this.goToViewType(switchTo);
    }
  }, {
    key: 'goToViewType',
    value: function goToViewType(switchTo) {
      var displayedPeriod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      this.setState({
        viewType: switchTo,
        displayedPeriod: displayedPeriod || this.state.displayedPeriod
      });
    }
  }, {
    key: 'moveDisplayedPeriod',
    value: function moveDisplayedPeriod(delta) {
      var _state2 = this.state,
          viewType = _state2.viewType,
          displayedPeriod = _state2.displayedPeriod;

      var period = viewType === 'days' ? 'months' : 'years';
      var diffTime = viewType === 'years' ? delta * 12 : delta;

      this.setState({
        displayedPeriod: displayedPeriod.clone().add(diffTime, period)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectDay = _props.selectDay,
          activeDate = _props.activeDate,
          selectedDates = _props.selectedDates,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          format = _props.format,
          noWeekends = _props.noWeekends,
          ariaLabelPrevious = _props.ariaLabelPrevious,
          ariaLabelNext = _props.ariaLabelNext,
          _props$ariaLabelDateP = _props.ariaLabelDatePicker,
          ariaLabelDatePicker = _props$ariaLabelDateP === undefined ? function (viewType) {
        return 'Datumkiezer ' + aria.mapViewType(viewType);
      } : _props$ariaLabelDateP,
          ariaLabelButtonDateFormat = _props.ariaLabelButtonDateFormat;
      var _state3 = this.state,
          viewType = _state3.viewType,
          displayedPeriod = _state3.displayedPeriod;

      return React.createElement(React.Fragment, null, React.createElement('div', {
        className: 'm-datepicker__nav',
        role: 'application',
        'aria-label': '' + ariaLabelDatePicker(viewType),
        'aria-hidden': 'false'
      }, React.createElement(Nav, {
        viewType: viewType,
        displayedPeriod: displayedPeriod,
        onClickPrevious: this.moveDisplayedPeriod.bind(this, -1),
        onClickViewType: this.changeViewType.bind(this),
        onClickNext: this.moveDisplayedPeriod.bind(this, 1),
        ariaLabelPrevious: ariaLabelPrevious,
        ariaLabelNext: ariaLabelNext
      })), React.createElement('table', null, React.createElement('thead', null, React.createElement(Head, { displayedPeriod: displayedPeriod, viewType: viewType })), React.createElement('tbody', { className: 'm-datepicker__calendar' }, React.createElement(Body, {
        viewType: viewType,
        displayedPeriod: displayedPeriod,
        selectDay: selectDay.bind(this),
        selectedDates: selectedDates,
        minDate: minDate,
        maxDate: maxDate,
        format: format,
        noWeekends: noWeekends,
        activeDate: activeDate,
        ariaLabelButtonDateFormat: ariaLabelButtonDateFormat,
        goToViewType: this.goToViewType.bind(this)
      }))));
    }
  }]);

  return Calendar;
}(Component);

var _this = undefined;

var DatePicker = function DatePicker(_ref) {
  var clickOnDate = _ref.clickOnDate,
      format = _ref.format,
      locale = _ref.locale,
      activeDate = _ref.activeDate,
      selectedDates = _ref.selectedDates,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      noWeekends = _ref.noWeekends,
      ariaLabelPrevious = _ref.ariaLabelPrevious,
      ariaLabelNext = _ref.ariaLabelNext,
      ariaLabelDatePicker = _ref.ariaLabelDatePicker,
      ariaLabelButtonDateFormat = _ref.ariaLabelButtonDateFormat,
      qa = _ref.qa;
  return React.createElement(Calendar, {
    selectDay: clickOnDate.bind(_this),
    format: format,
    locale: locale,
    activeDate: activeDate,
    selectedDates: selectedDates,
    minDate: minDate,
    maxDate: maxDate,
    noWeekends: noWeekends,
    ariaLabelPrevious: ariaLabelPrevious,
    ariaLabelNext: ariaLabelNext,
    ariaLabelDatePicker: ariaLabelDatePicker,
    ariaLabelButtonDateFormat: ariaLabelButtonDateFormat,
    qa: qa
  });
};

var _createClass$7$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$7$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$7(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Calendar$1 = function (_Component) {
  _inherits$7(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck$7$1(this, Calendar);

    var _this = _possibleConstructorReturn$7(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    var _this$props = _this.props,
        activeDate = _this$props.activeDate,
        format = _this$props.format,
        locale = _this$props.locale;

    Moment.locale(locale ? locale : 'nl');

    _this.state = {
      activeDate: activeDate ? Moment(activeDate, format) : ''
    };
    return _this;
  }

  _createClass$7$1(Calendar, [{
    key: 'changeDate',
    value: function changeDate(day) {
      var _props = this.props,
          onChange = _props.onChange,
          format = _props.format;

      if (onChange) onChange(Moment(day).format(format));

      this.setState({
        activeDate: day
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          format = _props2.format,
          locale = _props2.locale,
          selectedDates = _props2.selectedDates,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          noWeekends = _props2.noWeekends,
          ariaLabelPrevious = _props2.ariaLabelPrevious,
          ariaLabelNext = _props2.ariaLabelNext,
          ariaLabelDatePicker = _props2.ariaLabelDatePicker,
          ariaLabelButtonDateFormat = _props2.ariaLabelButtonDateFormat,
          qa = _props2.qa;
      var activeDate = this.state.activeDate;

      return React.createElement('div', { className: 'm-datepicker is-open', 'data-qa': qa }, React.createElement(DatePicker, {
        format: format,
        locale: locale,
        activeDate: activeDate,
        selectedDates: selectedDates,
        minDate: Moment(minDate, format),
        maxDate: Moment(maxDate, format),
        noWeekends: noWeekends,
        ariaLabelPrevious: ariaLabelPrevious,
        ariaLabelNext: ariaLabelNext,
        ariaLabelDatePicker: ariaLabelDatePicker,
        ariaLabelButtonDateFormat: ariaLabelButtonDateFormat,
        qa: qa,
        clickOnDate: this.changeDate.bind(this)
      }));
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.activeDate) {
        return {
          activeDate: Moment(nextProps.activeDate, nextProps.format)
        };
      }

      return null;
    }
  }]);

  return Calendar;
}(Component);

Calendar$1.defaultProps = {
  format: 'DD/MM/YYYY',
  noWeekends: false
};

var _createClass$9 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$8(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Card = function (_Component) {
  _inherits$8(Card, _Component);

  function Card() {
    _classCallCheck$9(this, Card);

    return _possibleConstructorReturn$8(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass$9(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          qa = _props.qa;

      var cardClass = classNames('m-card', className);

      return React.createElement('div', { className: cardClass, style: style, 'data-qa': qa }, children);
    }
  }]);

  return Card;
}(Component);

var Contact = function Contact(props) {
  var name = props.name,
      avatar = props.avatar,
      style = props.style,
      info = props.info,
      qa = props.qa;

  return React.createElement("div", { className: "m-contact", style: style, "data-qa": qa }, avatar, React.createElement("div", { className: "m-contact__info" }, React.createElement("p", { className: "u-text-bold" }, name), info && React.createElement("p", { className: "small" }, info)));
};

var CardHeader = function CardHeader(props) {
  var title = props.title,
      actions = props.actions,
      avatar = props.avatar;

  var cardHeader = React.createElement('div', { className: 'm-card__header', style: { display: 'flex' } }, React.createElement(Contact, {
    avatar: avatar,
    name: title,
    style: { flex: 1, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' } }), React.createElement('div', { style: { float: 'right', textAlign: 'right' } }, actions));

  return title || actions ? cardHeader : null;
};

var CardBody = function CardBody(props) {
  var children = props.children,
      style = props.style;

  return React.createElement("div", { className: "m-card__body", style: style }, children);
};

var CardTitle = function CardTitle(props) {
  var children = props.children,
      style = props.style;

  return React.createElement("h5", { className: "u-margin-bottom-xs", style: style }, children);
};

var CardDescription = function CardDescription(props) {
  var children = props.children,
      style = props.style;

  return React.createElement('p', { style: style }, children);
};

var CardActions = function CardActions(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React.createElement('div', { className: classNames('pull-right u-margin-bottom-xs', className) }, children);
};

CardActions.defaultProps = {
  className: ''
};

var Icon$6 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var CardIcon = function CardIcon(_ref) {
  var icon = _ref.icon,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel;
  return React.createElement('div', { className: classNames('pull-left u-margin-right u-margin-bottom', className) }, React.createElement(Icon$6, { name: icon, className: 'fa-lg u-text-light', ariaLabel: ariaLabel }));
};

CardIcon.defaultProps = {
  icon: '',
  className: '',
  ariaLabel: ''
};

var CardImage = function CardImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className;
  return React.createElement('div', { className: classNames('pull-left u-margin-right', className) }, React.createElement('div', { className: 'a-avatar a-avatar--small' }, React.createElement('img', { src: src, alt: alt })));
};

CardImage.defaultProps = {
  className: '',
  alt: 'Default Alt'
};

var Contact$1 = function Contact(props) {
  var name = props.name,
      avatar = props.avatar,
      style = props.style,
      info = props.info,
      qa = props.qa;

  return React.createElement("div", { className: "m-contact", style: style, "data-qa": qa }, avatar, React.createElement("div", { className: "m-contact__info" }, React.createElement("p", { className: "u-text-bold" }, name), info && React.createElement("p", { className: "small" }, info)));
};

var Content = function Content(props) {
  var className = props.className,
      children = props.children,
      qa = props.qa;

  var contentClass = classNames('u-wrapper', className);
  return React.createElement('div', { className: contentClass }, React.createElement('div', { className: 'u-container', 'data-qa': qa }, children));
};

var FlyoutContent$1 = function FlyoutContent(props) {
  var hasPadding = props.hasPadding,
      children = props.children,
      qa = props.qa;

  var classes = classNames('m-flyout__content', {
    'has-padding': !!hasPadding
  });

  return React.createElement('div', { className: classes, 'data-qa': qa }, children);
};

var _createClass$a = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$9(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var flyoutSizes = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  full: 'full'
};

var Flyout = function (_Component) {
  _inherits$9(Flyout, _Component);

  function Flyout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$a(this, Flyout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$9(this, (_ref = Flyout.__proto__ || Object.getPrototypeOf(Flyout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: _this.props.open
    }, _this.flyoutRef = React.createRef(), _this.toggleIsOpen = function () {
      var onStateChange = _this.props.onStateChange;

      if (!_this.state.isOpen) {
        document.addEventListener('click', _this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', _this.handleOutsideClick, false);
      }
      _this.setState({ isOpen: !_this.state.isOpen });
      onStateChange(_this.state.isOpen);
    }, _this.closeFlyout = function () {
      var onStateChange = _this.props.onStateChange;

      if (!_this.state.isOpen) {
        document.addEventListener('click', _this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', _this.handleOutsideClick, false);
      }
      _this.setState({ isOpen: false });
      onStateChange(false);
    }, _this.handleOutsideClick = function (e) {
      var area = ReactDOM.findDOMNode(_this.flyoutRef.current);
      if (area && !area.contains(e.target)) {
        _this.closeFlyout();
      }
    }, _this.getClassNames = function () {
      return classNames(_this.props.className, 'm-flyout', 'm-flyout--' + _this.props.direction, _defineProperty$7({
        'is-open': _this.state.isOpen,
        'm-flyout--scrollable': _this.props.scrollable
      }, 'm-flyout--' + flyoutSizes[_this.props.size], !!flyoutSizes[_this.props.size]));
    }, _temp), _possibleConstructorReturn$9(_this, _ret);
  }

  _createClass$a(Flyout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isOpen = this.state.isOpen;

      if (isOpen) {
        document.addEventListener('click', this.handleOutsideClick, false);
      }

      this.props.triggerClose(this.closeFlyout);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.open !== prevProps.open) {
        this.setState({ isOpen: !prevProps.open });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          trigger = _props.trigger,
          hasPadding = _props.hasPadding,
          children = _props.children,
          qa = _props.qa;
      var open = this.state.open;

      var flyoutClass = this.getClassNames();
      return trigger && React.createElement('div', { className: flyoutClass, ref: this.flyoutRef, 'aria-haspopup': 'true', 'aria-expanded': open, 'data-qa': qa }, React.createElement('div', { onClick: this.toggleIsOpen }, this.props.trigger), React.createElement(FlyoutContent$1, { hasPadding: hasPadding }, children));
    }
  }]);

  return Flyout;
}(Component);

Flyout.defaultProps = {
  direction: 'left',
  size: 'medium',
  hasPadding: false,
  open: false,
  onStateChange: function onStateChange() {},
  triggerClose: function triggerClose() {},
  scrollable: false
};

var Icon$7 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$b = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$b(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$a(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$a(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$5 = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$6 = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$4 = function (_Component) {
  _inherits$a(Button, _Component);

  function Button() {
    _classCallCheck$b(this, Button);

    return _possibleConstructorReturn$a(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$b(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$8(_classNames, '' + typeClasses$6[type], !!type), _defineProperty$8(_classNames, '' + sizeClasses$5[size], !!size), _defineProperty$8(_classNames, 'has-icon', !!icon), _defineProperty$8(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$8(_classNames, 'has-icon-right', !!iconRight), _defineProperty$8(_classNames, 'a-button-negative', !!negative), _defineProperty$8(_classNames, 'a-button-outline', !!outline), _defineProperty$8(_classNames, 'a-button-transparent', !!transparent), _defineProperty$8(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$7, { name: icon }) : null, iconLeft ? React.createElement(Icon$7, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$7, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var FlyoutContent$2 = function FlyoutContent(props) {
  var hasPadding = props.hasPadding,
      children = props.children,
      qa = props.qa;

  var classes = classNames('m-flyout__content', {
    'has-padding': !!hasPadding
  });

  return React.createElement('div', { className: classes, 'data-qa': qa }, children);
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass$1$3 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _objectWithoutProperties$1(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _defineProperty$1$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$1$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$3(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var flyoutSizes$1 = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  full: 'full'
};

var FlyoutButton = function (_Component) {
  _inherits$1$3(FlyoutButton, _Component);

  function FlyoutButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1$3(this, FlyoutButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1$3(this, (_ref = FlyoutButton.__proto__ || Object.getPrototypeOf(FlyoutButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.handleClick = function (event) {
      if (_this.containerRef && !_this.containerRef.contains(event.target)) {
        _this.close();
      }
    }, _this.close = function () {
      return _this.setState({ isOpen: false });
    }, _this.toggleIsOpen = function () {
      return _this.setState({ isOpen: !_this.state.isOpen });
    }, _this.componentDidMount = function () {
      return document.addEventListener('mousedown', _this.handleClick);
    }, _this.componentWillUnMount = function () {
      return document.removeEventListener('mousedown', _this.handleClick);
    }, _this.getClassNames = function () {
      return classNames('m-flyout', 'm-flyout--' + _this.props.flyoutDirection, _defineProperty$1$2({
        'is-open': _this.state.isOpen
      }, 'm-flyout--' + flyoutSizes$1[_this.props.flyoutSize], !!flyoutSizes$1[_this.props.flyoutSize]));
    }, _temp), _possibleConstructorReturn$1$3(_this, _ret);
  }

  _createClass$1$3(FlyoutButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          flyoutHasPadding = _props.flyoutHasPadding,
          children = _props.children,
          qa = _props.qa,
          buttonProps = _objectWithoutProperties$1(_props, ['label', 'flyoutHasPadding', 'children', 'qa']);

      var isOpen = this.state.isOpen;

      var flyoutClass = this.getClassNames();
      return React.createElement('div', { className: flyoutClass, ref: function ref(_ref2) {
          _this2.containerRef = _ref2;
        }, 'aria-haspopup': 'true', 'aria-expanded': isOpen, 'data-qa': qa }, React.createElement(Button$4, _extends$1({}, buttonProps, { onClick: this.toggleIsOpen }), label), React.createElement(FlyoutContent$2, { hasPadding: flyoutHasPadding }, this.props.children));
    }
  }]);

  return FlyoutButton;
}(Component);

FlyoutButton.defaultProps = {
  label: '',
  flyoutDirection: 'left',
  flyoutSize: 'medium',
  flyoutHasPadding: false,
  icon: false
};

var Icon$8 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var Footer = function Footer(props) {
  var style = props.style,
      children = props.children,
      qa = props.qa,
      _props$ariaLabel = props.ariaLabel,
      ariaLabel = _props$ariaLabel === undefined ? "Ga naar boven" : _props$ariaLabel;

  var scrollToTop = function scrollToTop() {
    window.scrollTo(0, 0);
  };

  return React.createElement('footer', { className: 'o-footer', style: style, 'data-qa': qa }, React.createElement('span', { className: 'o-footer__label' }, children || '© stad Antwerpen'), React.createElement('a', { onClick: function onClick() {
      return scrollToTop();
    }, href: '#', className: 'o-footer__button a-button a-button--secondary has-icon', 'aria-label': ariaLabel }, React.createElement(Icon$8, { name: 'arrow-up' })));
};

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

var Form = function Form(props) {
  var children = props.children,
      style = props.style,
      onSubmit = props.onSubmit;

  return React.createElement("form", { className: "a-form", style: style, onSubmit: onSubmit }, children);
};

var Fieldset = function Fieldset(props) {
  var legend = props.legend,
      children = props.children,
      style = props.style,
      qa = props.qa;

  return React.createElement('fieldset', { style: style, 'data-qa': qa }, React.createElement('legend', null, legend), children);
};

var InputLabel$1 = function InputLabel(props) {
  var style = props.style,
      htmlFor = props.htmlFor,
      children = props.children,
      inline = props.inline,
      qa = props.qa;

  var labelClass = classNames('a-input__label', {
    'a-input__label--inline': !!inline
  });
  return React.createElement('label', { className: labelClass, htmlFor: htmlFor, style: style, 'data-qa': qa }, children);
};

var Icon$9 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass$c = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _objectWithoutProperties$2(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck$c(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$b(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$b(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var stateClasses$1 = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error'
};

var TextField$1 = function (_Component) {
  _inherits$b(TextField, _Component);

  function TextField() {
    _classCallCheck$c(this, TextField);

    return _possibleConstructorReturn$b(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass$c(TextField, [{
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          id = _props.id,
          label = _props.label,
          description = _props.description,
          required = _props.required,
          mask = _props.mask,
          state = _props.state,
          autoComplete = _props.autoComplete,
          disabled = _props.disabled,
          iconright = _props.iconright,
          iconleft = _props.iconleft,
          loading = _props.loading,
          qa = _props.qa,
          _props$type = _props.type,
          type = _props$type === undefined ? 'text' : _props$type,
          size = _props.size,
          errorDescription = _props.errorDescription,
          className = _props.className,
          addonleft = _props.addonleft,
          addonright = _props.addonright,
          extraProps = _objectWithoutProperties$2(_props, ['id', 'label', 'description', 'required', 'mask', 'state', 'autoComplete', 'disabled', 'iconright', 'iconleft', 'loading', 'qa', 'type', 'size', 'errorDescription', 'className', 'addonleft', 'addonright']);

      var inputClass = classNames('a-input', (_classNames = {
        'has-icon-right': iconright || loading,
        'has-icon-left': iconleft,
        'has-addon': !!addonleft || !!addonright,
        'is-required': !!required
      }, _defineProperty$9(_classNames, '' + stateClasses$1[state], !!state), _defineProperty$9(_classNames, 'a-input--' + size, !!size), _classNames), className);

      return React.createElement('div', { className: inputClass, 'data-qa': qa }, label && React.createElement(InputLabel$1, { htmlFor: id }, label), React.createElement('div', { className: 'a-input__wrapper' }, addonleft ? React.createElement('div', { className: 'a-input__addon' }, addonleft) : null, iconleft ? React.createElement(Icon$9, { name: iconleft }) : null, mask ? React.createElement(InputMask, this.props) : React.createElement('input', _extends$2({ id: id, type: type, autoComplete: autoComplete, disabled: disabled,
        ref: function (_ref) {
          function ref(_x) {
            return _ref.apply(this, arguments);
          }

          ref.toString = function () {
            return _ref.toString();
          };

          return ref;
        }(function (ref) {
          return _this2.props.inputRef && _this2.props.inputRef(ref);
        }) }, extraProps)), iconright ? React.createElement(Icon$9, { name: iconright }) : null, loading ? React.createElement(Icon$9, { name: 'spinner', className: 'a-spinner a-spinner--sm' }) : null, addonright ? React.createElement('div', { className: 'a-input__addon' }, addonright) : null), description ? React.createElement('small', null, description) : null, errorDescription && React.createElement('small', { className: 'u-text-danger' }, errorDescription));
    }
  }]);

  return TextField;
}(Component);

var _extends$1$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass$1$4 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$1$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$4(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Checkbox = function (_Component) {
  _inherits$1$4(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1$4(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1$4(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    }, _temp), _possibleConstructorReturn$1$4(_this, _ret);
  }

  _createClass$1$4(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          label = _props.label,
          name = _props.name,
          required = _props.required,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          qa = _props.qa;

      var inputClass = classNames('a-input');

      var requiredLabel = !!required ? React.createElement('span', { className: 'u-text-danger' }, ' *') : null;

      return React.createElement('div', { className: inputClass, 'data-qa': qa }, React.createElement('div', { className: 'a-input__checkbox' }, React.createElement('input', _extends$1$1({
        type: 'checkbox',
        id: id,
        name: name,
        onChange: this.handleChange,
        'aria-checked': this.props.checked,
        checked: this.props.checked,
        disabled: disabled
      }, this.props.handler)), React.createElement(InputLabel$1, { htmlFor: id }, label, requiredLabel)));
    }
  }]);

  return Checkbox;
}(Component);

var Option = function Option(props) {
  var value = props.value,
      disabled = props.disabled,
      children = props.children;

  return React.createElement('option', { value: value, disabled: disabled }, children);
};

function _defineProperty$1$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var spinnerSizes = {
  small: 'sm',
  large: 'lg'
};

var Spinner = function Spinner(props) {
  var size = props.size,
      style = props.style,
      className = props.className,
      _props$ariaLabel = props.ariaLabel,
      ariaLabel = _props$ariaLabel === undefined ? "Wordt geladen" : _props$ariaLabel,
      qa = props.qa;

  var spinnerClass = classNames('a-spinner', className, _defineProperty$1$3({}, 'a-spinner--' + spinnerSizes[size], !!size));

  return React.createElement('div', { className: spinnerClass, style: style, role: 'status', 'aria-label': ariaLabel, 'data-qa': qa });
};

var _createClass$2$3 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$2$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$2$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$2$3(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var stateClasses$1$1 = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error'
};

var Select = function (_Component) {
  _inherits$2$3(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$2$3(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2$3(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: _this.props.value || '' }, _temp), _possibleConstructorReturn$2$3(_this, _ret);
  }

  _createClass$2$3(Select, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = e.currentTarget.value;
      this.setState({ value: value });

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          id = _props.id,
          label = _props.label,
          name = _props.name,
          inline = _props.inline,
          className = _props.className,
          state = _props.state,
          style = _props.style,
          required = _props.required,
          disabled = _props.disabled,
          placeholder = _props.placeholder,
          options = _props.options,
          onChange = _props.onChange,
          value = _props.value,
          loading = _props.loading,
          qa = _props.qa,
          size = _props.size;

      var selectClass = classNames('a-input', 'has-icon-right', (_classNames = {
        'a-input--inline': !!inline
      }, _defineProperty$2$2(_classNames, '' + stateClasses$1$1[state], !!state), _defineProperty$2$2(_classNames, 'is-required', !!required), _defineProperty$2$2(_classNames, 'a-input--' + size, !!size), _classNames), className);
      var wrapperClass = classNames('a-input__wrapper', {
        'a-input__wrapper--inline': !!inline
      });
      return React.createElement('div', { className: selectClass, name: name, 'data-qa': qa }, label && React.createElement(InputLabel$1, { inline: inline, htmlFor: id }, label), React.createElement('div', { className: wrapperClass }, React.createElement('select', { id: id, name: name, onChange: function onChange(e) {
          return _this2.onChange(e);
        }, defaultValue: this.state.value, disabled: disabled }, placeholder && React.createElement('option', { value: '', disabled: true }, placeholder), options.map(function (option) {
        return React.createElement(Option, {
          value: option.value,
          key: option.value,
          id: option.value,
          name: name,
          disabled: option.disabled }, option.label);
      })), loading ? React.createElement(Spinner, { size: 'small', className: 'fa' }) : React.createElement(Icon$9, { name: 'angle-down', span: true })));
    }
  }]);

  return Select;
}(Component);

function _defineProperty$3$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var stateClasses$2 = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error'
};

var Textarea = function Textarea(props) {
  var _classNames;

  var id = props.id,
      label = props.label,
      value = props.value,
      name = props.name,
      disabled = props.disabled,
      placeholder = props.placeholder,
      className = props.className,
      style = props.style,
      required = props.required,
      onChange = props.onChange,
      onBlur = props.onBlur,
      state = props.state,
      qa = props.qa,
      size = props.size,
      onInvalidCapture = props.onInvalidCapture;

  var textareaClass = classNames('a-input', (_classNames = {
    'is-required': !!required
  }, _defineProperty$3$1(_classNames, '' + stateClasses$2[state], !!state), _defineProperty$3$1(_classNames, 'a-input--' + size, !!size), _classNames), className);

  return React.createElement('div', { className: textareaClass, style: style, 'data-qa': qa }, label && React.createElement(InputLabel$1, { htmlFor: id }, label), React.createElement('textarea', { id: id, placeholder: placeholder, name: name, value: value, onChange: onChange, onBlur: onBlur, disabled: disabled, required: required, onInvalidCapture: onInvalidCapture }));
};

var Radio = function Radio(props) {
  var id = props.id,
      name = props.name,
      value = props.value,
      checked = props.checked,
      children = props.children,
      disabled = props.disabled,
      required = props.required,
      qa = props.qa;

  var radioClass = classNames('a-input__radio');
  return React.createElement('div', { className: radioClass, 'data-qa': qa }, React.createElement('input', { type: 'radio', value: value, id: id, name: name, defaultChecked: checked, disabled: disabled, required: required }), React.createElement('label', { htmlFor: id }, children));
};

var RadioGroup = function RadioGroup(props) {
  var id = props.id,
      name = props.name,
      label = props.label,
      value = props.value,
      className = props.className,
      description = props.description,
      style = props.style,
      required = props.required,
      onChange = props.onChange,
      inline = props.inline,
      options = props.options,
      qa = props.qa;

  var radioGroupClass = classNames('a-input', className, {
    'is-required': !!required
  });
  return React.createElement('div', { className: radioGroupClass, style: style, onChange: onChange, 'data-qa': qa }, label && React.createElement(InputLabel$1, { inline: inline }, label), React.createElement('div', { className: 'a-input__wrapper' }, options.map(function (option) {
    return React.createElement(Radio, {
      value: option.value,
      key: option.key || name + '_' + option.value,
      id: option.key || name + '_' + option.value,
      name: name,
      disabled: option.disabled,
      checked: value === option.value,
      required: required }, option.label);
  })), description ? React.createElement('small', null, description) : null);
};

var _typeof$4 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};

var viewTypeMap$1 = {
  days: 'dagen',
  months: 'maanden',
  years: 'jaren'
};

var mapViewType$1 = function mapViewType(viewType) {
  return viewTypeMap$1[viewType];
};

var mapNav$1 = function mapNav(direction, viewType, value) {
  var multi = '';
  var viewTypeDisplay = '';
  var valueDisplay = '';
  var directionDisplay = direction > 0 ? 'volgend' : 'vorig';

  switch (viewType) {
    case 'months':
      viewTypeDisplay = 'jaar';
      valueDisplay = value.clone().add(direction, 'years').format('YYYY');
      break;
    case 'years':
      multi = 'e';
      viewTypeDisplay = 'periode van 12 jaar';
      var years = yearsOfMonth$1(value.clone().add(12 * direction, 'years'));
      valueDisplay = years[0] + '-' + years.slice(-1);
      break;
    default:
      multi = 'e';
      viewTypeDisplay = 'maand';
      valueDisplay = value.clone().add(direction, 'months').format('MMMM YYYY');
  }

  return 'Ga naar ' + directionDisplay + multi + ' ' + viewTypeDisplay + ', ' + valueDisplay;
};

var aria$1 = {
  mapViewType: mapViewType$1,
  mapNav: mapNav$1
};

function rotateArrayByPosition$1(data, d) {
  var temp = data.splice(0);
  for (var i = 0; i < d - 1; i++) {
    var first = temp.shift();
    temp.push(first);
  }
  return temp;
}

function daysOfMonth$1(displayedMonth) {
  var _i = void 0,
      d = void 0;
  var results = [];
  var startOfMonth = displayedMonth.startOf('months');
  var startDayOfWeek = startOfMonth.clone().startOf('isoWeek');
  var startAt = -startOfMonth.diff(startDayOfWeek, 'days');

  var endAt = Math.ceil((displayedMonth.daysInMonth() - startAt) / 7) * 7 + startAt - 1;
  for (d = _i = startAt; startAt <= endAt ? _i <= endAt : _i >= endAt; d = startAt <= endAt ? ++_i : --_i) {
    results.push(displayedMonth.clone().add(d, 'days'));
  }

  return results;
}

function weekEnum$1(daysOfMonth) {
  var results = [];

  for (var _i = 0, _ref = daysOfMonth.length / 7; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--) {
    results.push(_i);
  }
  return results;
}

function isDateFromNextMonth$1(date, displayedMonth) {
  return date.year() > displayedMonth.year() || date.year() === displayedMonth.year() && date.month() > displayedMonth.month();
}

function isDateFromPrevMonth$1(date, displayedMonth) {
  return date.year() < displayedMonth.year() || date.year() === displayedMonth.year() && date.month() < displayedMonth.month();
}

function yearsOfMonth$1(displayedMonth) {
  var amountOfYearsBack = -11;
  var results = [];

  for (var year = amountOfYearsBack; year < 0; year++) {
    results.push(displayedMonth.clone().add(year, 'years').format('YYYY'));
  }
  results.push(displayedMonth.clone().format('YYYY'));

  return results;
}

function nextItemInArray$1(element, array) {
  var i = array.findIndex(function (k) {
    return k == element;
  });
  i = i + 1;
  i = i % array.length;
  return array[i];
}

var Icon$1$2 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$3$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$4$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$3$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$3$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$3$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$6 = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$7 = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$5 = function (_Component) {
  _inherits$3$2(Button, _Component);

  function Button() {
    _classCallCheck$3$2(this, Button);

    return _possibleConstructorReturn$3$2(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$3$2(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$4$1(_classNames, '' + typeClasses$7[type], !!type), _defineProperty$4$1(_classNames, '' + sizeClasses$6[size], !!size), _defineProperty$4$1(_classNames, 'has-icon', !!icon), _defineProperty$4$1(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$4$1(_classNames, 'has-icon-right', !!iconRight), _defineProperty$4$1(_classNames, 'a-button-negative', !!negative), _defineProperty$4$1(_classNames, 'a-button-outline', !!outline), _defineProperty$4$1(_classNames, 'a-button-transparent', !!transparent), _defineProperty$4$1(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$1$2, { name: icon }) : null, iconLeft ? React.createElement(Icon$1$2, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$1$2, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var _createClass$1$1$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$1$1$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$1$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$1$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Nav$1 = function (_Component) {
  _inherits$1$1$1(Nav, _Component);

  function Nav() {
    _classCallCheck$1$1$2(this, Nav);

    return _possibleConstructorReturn$1$1$1(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass$1$1$2(Nav, [{
    key: 'renderNav',
    value: function renderNav() {
      var _props = this.props,
          viewType = _props.viewType,
          displayedPeriod = _props.displayedPeriod;

      switch (viewType) {
        case 'months':
          return displayedPeriod.format('YYYY');
        case 'years':
          return this.renderYearsNav(displayedPeriod);
        default:
          return displayedPeriod.format('MMMM YYYY');
      }
    }
  }, {
    key: 'renderYearsNav',
    value: function renderYearsNav(displayedMonth) {
      var years = yearsOfMonth$1(displayedMonth);
      return years[0] + '-' + years.slice(-1);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          onClickPrevious = _props2.onClickPrevious,
          onClickViewType = _props2.onClickViewType,
          onClickNext = _props2.onClickNext,
          viewType = _props2.viewType,
          displayedPeriod = _props2.displayedPeriod,
          _props2$ariaLabelPrev = _props2.ariaLabelPrevious,
          ariaLabelPrevious = _props2$ariaLabelPrev === undefined ? function (viewType, value) {
        return aria$1.mapNav(-1, viewType, value);
      } : _props2$ariaLabelPrev,
          _props2$ariaLabelNext = _props2.ariaLabelNext,
          ariaLabelNext = _props2$ariaLabelNext === undefined ? function (viewType, value) {
        return aria$1.mapNav(1, viewType, value);
      } : _props2$ariaLabelNext;

      return React.createElement(React.Fragment, null, React.createElement(Button$5, {
        htmlType: 'button',
        onClick: onClickPrevious,
        className: 'a-button has-icon',
        icon: 'angle-left',
        ariaLabel: ariaLabelPrevious(viewType, displayedPeriod)
      }), React.createElement(Button$5, { htmlType: 'button', onClick: onClickViewType, className: 'm-datepicker__title a-button u-text-capitalize' }, this.renderNav()), React.createElement(Button$5, {
        htmlType: 'button',
        onClick: onClickNext,
        className: 'a-button has-icon',
        icon: 'angle-right',
        ariaLabel: ariaLabelNext(viewType, displayedPeriod)
      }));
    }
  }]);

  return Nav;
}(Component);

var _createClass$2$1$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$2$1$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$2$1$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2$1$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Rows$1 = function (_Component) {
  _inherits$2$1$1(Rows, _Component);

  function Rows() {
    _classCallCheck$2$1$1(this, Rows);

    return _possibleConstructorReturn$2$1$1(this, (Rows.__proto__ || Object.getPrototypeOf(Rows)).apply(this, arguments));
  }

  _createClass$2$1$1(Rows, [{
    key: "generateRows",
    value: function generateRows() {
      var _props = this.props,
          list = _props.list,
          rowLength = _props.rowLength,
          onClick = _props.onClick;

      return list.map(function (content, index) {
        return React.createElement("td", { key: index }, React.createElement("button", { className: "u-text-capitalize", tabIndex: index, value: content, onClick: onClick, type: "button" }, content.replace(/\./g, ' ')));
      }).reduce(function (r, element, index) {
        // create element groups with size 4, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6],x ...]
        index % rowLength === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
      }, []).map(function (rowContent, index) {
        // surround every group with a tr
        return React.createElement("tr", { key: index }, rowContent);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.generateRows();
    }
  }]);

  return Rows;
}(Component);

var _createClass$3$1$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$3$1$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$3$1$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$3$1$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Day$1 = function (_Component) {
  _inherits$3$1$1(Day, _Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$3$1$1(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$3$1$1(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnClick = function (day) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          selectDay = _this$props.selectDay;

      if (disabled) return;
      selectDay(day);
    }, _temp), _possibleConstructorReturn$3$1$1(_this, _ret);
  }

  _createClass$3$1$1(Day, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          activeDate = _props.activeDate,
          day = _props.day,
          selected = _props.selected,
          disabled = _props.disabled,
          dayNextMonth = _props.dayNextMonth,
          dayPrevMonth = _props.dayPrevMonth,
          dayActiveClassName = _props.dayActiveClassName,
          selectedClassName = _props.selectedClassName,
          dayDisabledClassName = _props.dayDisabledClassName,
          dayFromOtherMonthClassName = _props.dayFromOtherMonthClassName,
          ariaLabelButtonDateFormat = _props.ariaLabelButtonDateFormat;

      var buttonClasses = [];

      if (day.isSame(Moment(), 'day')) {
        buttonClasses.push(selectedClassName);
      }

      if (day.isSame(activeDate, 'day')) {
        buttonClasses.push(dayActiveClassName);
      }

      if (disabled) {
        buttonClasses.push(dayDisabledClassName);
      }

      if (selected) {
        buttonClasses.push(dayActiveClassName);
      }

      if (dayPrevMonth || dayNextMonth) {
        buttonClasses.push(dayFromOtherMonthClassName);
      }

      return React.createElement('td', null, React.createElement('button', {
        tabIndex: disabled ? '-1' : '0',
        type: 'button',
        onClick: this.handleOnClick.bind(this, day),
        className: buttonClasses.join(' '),
        'aria-label': day.format(ariaLabelButtonDateFormat)
      }, day.date()));
    }
  }]);

  return Day;
}(Component);

Day$1.defaultProps = {
  dayClassName: '',
  dayActiveClassName: 'is-selected',
  selectedClassName: 'is-current',
  dayDisabledClassName: 'is-unavailable',
  dayFromOtherMonthClassName: 'is-faded',
  ariaLabelButtonDateFormat: 'dddd D MMMM YYYY'
};

var _createClass$4$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$4$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$4$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$4$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Body$1 = function (_Component) {
  _inherits$4$2(Body, _Component);

  function Body() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$4$2(this, Body);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$4$2(this, (_ref = Body.__proto__ || Object.getPrototypeOf(Body)).call.apply(_ref, [this].concat(args))), _this), _this.handleOnClick = function (type, event) {
      var value = event.target.value;
      var newDisplayedPeriod = null;
      var displayedPeriod = _this.props.displayedPeriod;

      if (type === 'days') {
        newDisplayedPeriod = Moment(displayedPeriod.format('YYYY') + value, "YYYY MMM");
      } else if (type === 'months') {
        newDisplayedPeriod = Moment(displayedPeriod.format('MM') + value, "MM YYYY");
      }

      var goToViewType = _this.props.goToViewType;

      goToViewType(type, newDisplayedPeriod);
    }, _temp), _possibleConstructorReturn$4$2(_this, _ret);
  }

  _createClass$4$2(Body, [{
    key: 'renderBody',
    value: function renderBody(displayedPeriod) {
      var viewType = this.props.viewType;

      switch (viewType) {
        case 'months':
          return this.renderListMonths();
        case "years":
          return this.renderListYears(displayedPeriod);
        default:
          return this.renderWeeks(displayedPeriod);
      }
    }
  }, {
    key: 'renderWeeks',
    value: function renderWeeks(displayMonth) {
      var _this2 = this;

      var _daysOfMonth = daysOfMonth$1(displayMonth);
      var _weekEnum = weekEnum$1(_daysOfMonth);
      return _weekEnum.map(function (week, key) {
        return React.createElement('tr', { key: key }, _this2.renderDay(_daysOfMonth, week));
      });
    }
  }, {
    key: 'renderListMonths',
    value: function renderListMonths() {
      var months = Moment.monthsShort();
      return React.createElement(Rows$1, { list: months, rowLength: 4, onClick: this.handleOnClick.bind(this, 'days') });
    }
  }, {
    key: 'renderListYears',
    value: function renderListYears(displayMonth) {
      var years = yearsOfMonth$1(displayMonth);
      return React.createElement(Rows$1, { list: years, rowLength: 4, onClick: this.handleOnClick.bind(this, 'months') });
    }
  }, {
    key: 'renderDay',
    value: function renderDay(_daysOfMonth, week) {
      var _this3 = this;

      var days = [0, 1, 2, 3, 4, 5, 6];
      var _props = this.props,
          activeDate = _props.activeDate,
          displayedPeriod = _props.displayedPeriod,
          selectedDates = _props.selectedDates,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          format = _props.format,
          noWeekends = _props.noWeekends,
          selectDay = _props.selectDay,
          ariaLabelButtonDateFormat = _props.ariaLabelButtonDateFormat;

      return days.map(function (day, key) {
        var date = _daysOfMonth[week * 7 + day];
        var disabled = void 0;
        var selected = false;

        if (minDate && maxDate) {
          disabled = date.isBefore(minDate, 'day') || date.isAfter(maxDate, 'day');
        } else if (minDate) {
          disabled = date.isBefore(minDate, 'day');
        } else if (maxDate) {
          disabled = date.isAfter(maxDate, 'day');
        }

        if (noWeekends) {
          disabled = date.day() === 6 || date.day() === 0;
        }

        var dayNextMonth = isDateFromNextMonth$1(date, displayedPeriod);
        var dayPrevMonth = isDateFromPrevMonth$1(date, displayedPeriod);

        selectedDates.forEach(function (selectedDate) {
          if (date.isSame(Moment(selectedDate, format), 'day')) {
            selected = true;
            dayPrevMonth = false;
            dayNextMonth = false;
          }
        });

        return React.createElement(Day$1, {
          key: key,
          day: date,
          selectDay: selectDay.bind(_this3, date),
          disabled: disabled,
          selected: selected,
          dayPrevMonth: dayPrevMonth,
          dayNextMonth: dayNextMonth,
          activeDate: activeDate,
          ariaLabelButtonDateFormat: ariaLabelButtonDateFormat });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var displayedPeriod = this.props.displayedPeriod;

      return this.renderBody(displayedPeriod);
    }
  }]);

  return Body;
}(Component);

Body$1.defaultProps = {
  selectedDates: []
};

var _createClass$5$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$5$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$5$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$5$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Head$1 = function (_Component) {
  _inherits$5$2(Head, _Component);

  function Head() {
    _classCallCheck$5$2(this, Head);

    return _possibleConstructorReturn$5$2(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass$5$2(Head, [{
    key: 'renderHeader',
    value: function renderHeader() {
      var viewType = this.props.viewType;

      switch (viewType) {
        case 'months':
          return null;
        case 'years':
          return null;
        default:
          return this.renderNameOfDays();
      }
    }
  }, {
    key: 'renderNameOfDays',
    value: function renderNameOfDays() {
      // True parameter to sort weekdays by locale
      var nameOfDays = Moment.weekdaysMin(true);
      var longNameDays = Moment.weekdays(true);
      var orderedLongNameDays = rotateArrayByPosition$1(longNameDays, 2);

      return React.createElement('tr', { className: 'm-datepicker__days' }, nameOfDays.map(function (day, i) {
        return React.createElement('th', { key: i, className: 'u-text-capitalize', 'aria-label': orderedLongNameDays[i] }, day);
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderHeader();
    }
  }]);

  return Head;
}(Component);

var _createClass$6$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$6$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$6$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$6$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Calendar$2 = function (_Component) {
  _inherits$6$1(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$6$2(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$6$1(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayedPeriod: _this.props.activeDate ? Moment(_this.props.activeDate, _this.props.format) : Moment(),
      viewType: 'days',
      views: ['days', 'months', 'years']
    }, _temp), _possibleConstructorReturn$6$1(_this, _ret);
  }

  _createClass$6$2(Calendar, [{
    key: 'changeViewType',
    value: function changeViewType() {
      var _state = this.state,
          viewType = _state.viewType,
          views = _state.views;

      var switchTo = nextItemInArray$1(viewType, views);
      this.goToViewType(switchTo);
    }
  }, {
    key: 'goToViewType',
    value: function goToViewType(switchTo) {
      var displayedPeriod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      this.setState({
        viewType: switchTo,
        displayedPeriod: displayedPeriod || this.state.displayedPeriod
      });
    }
  }, {
    key: 'moveDisplayedPeriod',
    value: function moveDisplayedPeriod(delta) {
      var _state2 = this.state,
          viewType = _state2.viewType,
          displayedPeriod = _state2.displayedPeriod;

      var period = viewType === 'days' ? 'months' : 'years';
      var diffTime = viewType === 'years' ? delta * 12 : delta;

      this.setState({
        displayedPeriod: displayedPeriod.clone().add(diffTime, period)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectDay = _props.selectDay,
          activeDate = _props.activeDate,
          selectedDates = _props.selectedDates,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          format = _props.format,
          noWeekends = _props.noWeekends,
          ariaLabelPrevious = _props.ariaLabelPrevious,
          ariaLabelNext = _props.ariaLabelNext,
          _props$ariaLabelDateP = _props.ariaLabelDatePicker,
          ariaLabelDatePicker = _props$ariaLabelDateP === undefined ? function (viewType) {
        return 'Datumkiezer ' + aria$1.mapViewType(viewType);
      } : _props$ariaLabelDateP,
          ariaLabelButtonDateFormat = _props.ariaLabelButtonDateFormat;
      var _state3 = this.state,
          viewType = _state3.viewType,
          displayedPeriod = _state3.displayedPeriod;

      return React.createElement(React.Fragment, null, React.createElement('div', {
        className: 'm-datepicker__nav',
        role: 'application',
        'aria-label': '' + ariaLabelDatePicker(viewType),
        'aria-hidden': 'false'
      }, React.createElement(Nav$1, {
        viewType: viewType,
        displayedPeriod: displayedPeriod,
        onClickPrevious: this.moveDisplayedPeriod.bind(this, -1),
        onClickViewType: this.changeViewType.bind(this),
        onClickNext: this.moveDisplayedPeriod.bind(this, 1),
        ariaLabelPrevious: ariaLabelPrevious,
        ariaLabelNext: ariaLabelNext
      })), React.createElement('table', null, React.createElement('thead', null, React.createElement(Head$1, { displayedPeriod: displayedPeriod, viewType: viewType })), React.createElement('tbody', { className: 'm-datepicker__calendar' }, React.createElement(Body$1, {
        viewType: viewType,
        displayedPeriod: displayedPeriod,
        selectDay: selectDay.bind(this),
        selectedDates: selectedDates,
        minDate: minDate,
        maxDate: maxDate,
        format: format,
        noWeekends: noWeekends,
        activeDate: activeDate,
        ariaLabelButtonDateFormat: ariaLabelButtonDateFormat,
        goToViewType: this.goToViewType.bind(this)
      }))));
    }
  }]);

  return Calendar;
}(Component);

var _this$1 = undefined;

var DatePicker$1 = function DatePicker(_ref) {
  var clickOnDate = _ref.clickOnDate,
      format = _ref.format,
      locale = _ref.locale,
      activeDate = _ref.activeDate,
      selectedDates = _ref.selectedDates,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      noWeekends = _ref.noWeekends,
      ariaLabelPrevious = _ref.ariaLabelPrevious,
      ariaLabelNext = _ref.ariaLabelNext,
      ariaLabelDatePicker = _ref.ariaLabelDatePicker,
      ariaLabelButtonDateFormat = _ref.ariaLabelButtonDateFormat,
      qa = _ref.qa;
  return React.createElement(Calendar$2, {
    selectDay: clickOnDate.bind(_this$1),
    format: format,
    locale: locale,
    activeDate: activeDate,
    selectedDates: selectedDates,
    minDate: minDate,
    maxDate: maxDate,
    noWeekends: noWeekends,
    ariaLabelPrevious: ariaLabelPrevious,
    ariaLabelNext: ariaLabelNext,
    ariaLabelDatePicker: ariaLabelDatePicker,
    ariaLabelButtonDateFormat: ariaLabelButtonDateFormat,
    qa: qa
  });
};

var _createClass$7$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$7$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$7$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$4(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$7$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$4(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Calendar$1$1 = function (_Component) {
  _inherits$7$1(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck$7$2(this, Calendar);

    var _this = _possibleConstructorReturn$7$1(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    var _this$props = _this.props,
        activeDate = _this$props.activeDate,
        format = _this$props.format,
        locale = _this$props.locale;

    Moment.locale(locale ? locale : 'nl');

    _this.state = {
      activeDate: activeDate ? Moment(activeDate, format) : ''
    };
    return _this;
  }

  _createClass$7$2(Calendar, [{
    key: 'changeDate',
    value: function changeDate(day) {
      var _props = this.props,
          onChange = _props.onChange,
          format = _props.format;

      if (onChange) onChange(Moment(day).format(format));

      this.setState({
        activeDate: day
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          format = _props2.format,
          locale = _props2.locale,
          selectedDates = _props2.selectedDates,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          noWeekends = _props2.noWeekends,
          ariaLabelPrevious = _props2.ariaLabelPrevious,
          ariaLabelNext = _props2.ariaLabelNext,
          ariaLabelDatePicker = _props2.ariaLabelDatePicker,
          ariaLabelButtonDateFormat = _props2.ariaLabelButtonDateFormat,
          qa = _props2.qa;
      var activeDate = this.state.activeDate;

      return React.createElement('div', { className: 'm-datepicker is-open', 'data-qa': qa }, React.createElement(DatePicker$1, {
        format: format,
        locale: locale,
        activeDate: activeDate,
        selectedDates: selectedDates,
        minDate: Moment(minDate, format),
        maxDate: Moment(maxDate, format),
        noWeekends: noWeekends,
        ariaLabelPrevious: ariaLabelPrevious,
        ariaLabelNext: ariaLabelNext,
        ariaLabelDatePicker: ariaLabelDatePicker,
        ariaLabelButtonDateFormat: ariaLabelButtonDateFormat,
        qa: qa,
        clickOnDate: this.changeDate.bind(this)
      }));
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.activeDate) {
        return {
          activeDate: Moment(nextProps.activeDate, nextProps.format)
        };
      }

      return null;
    }
  }]);

  return Calendar;
}(Component);

Calendar$1$1.defaultProps = {
  format: 'DD/MM/YYYY',
  noWeekends: false
};

var _extends$2$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass$8$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$5$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$8$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$8$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$8$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var stateClasses$3 = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error'
};

var Datepicker = function (_Component) {
  _inherits$8$1(Datepicker, _Component);

  function Datepicker(props) {
    _classCallCheck$8$1(this, Datepicker);

    var _this = _possibleConstructorReturn$8$1(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, props));

    _this.handleClickOutside = function (e) {
      if (_this.datepicker && _this.datepicker.contains(e.target)) {
        return;
      }

      _this.setState({ open: false });
    };

    var open = _this.props.open;

    _this.state = {
      input: '',
      open: open || false
    };
    return _this;
  }

  _createClass$8$1(Datepicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        document.addEventListener('mousedown', this.handleClickOutside.bind(this));
        document.addEventListener('touchstart', this.handleClickOutside.bind(this));
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
        document.removeEventListener('touchstart', this.handleClickOutside.bind(this));
      }
    }
  }, {
    key: 'onClickInput',
    value: function onClickInput() {
      if (this.props.readOnly) {
        this.toggleCalendar();
      }
    }
  }, {
    key: 'resetDate',
    value: function resetDate() {
      this.setState({
        input: '',
        activeDate: null
      });
    }
  }, {
    key: 'changeDate',
    value: function changeDate(date) {
      var _props = this.props,
          onChange = _props.onChange,
          format = _props.format,
          autoClose = _props.autoClose;

      var momentDate = Moment(date, format, true);
      var isValid = momentDate.isValid();
      if (onChange) onChange(date, isValid);

      this.setState(function () {
        var updateDate = {};
        if (isValid) {
          updateDate = {
            activeDate: momentDate
          };
        }

        return _extends$2$1({}, updateDate, {
          input: date,
          open: !autoClose || false
        });
      });
    }
  }, {
    key: 'toggleCalendar',
    value: function toggleCalendar() {
      if (!this.props.disabled) {
        this.setState({
          open: !this.state.open
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          label = _props2.label,
          id = _props2.id,
          state = _props2.state,
          description = _props2.description,
          mask = _props2.mask,
          required = _props2.required,
          disabled = _props2.disabled,
          readOnly = _props2.readOnly,
          name = _props2.name,
          format = _props2.format,
          _props2$locale = _props2.locale,
          locale = _props2$locale === undefined ? 'nl' : _props2$locale,
          selectedDates = _props2.selectedDates,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          noWeekends = _props2.noWeekends,
          onBlur = _props2.onBlur,
          qa = _props2.qa,
          size = _props2.size;
      var _state = this.state,
          input = _state.input,
          activeDate = _state.activeDate,
          open = _state.open;

      var datepickerWrapperClass = classNames('a-input', 'has-icon-right', (_classNames = {
        'is-required': !!required
      }, _defineProperty$5$1(_classNames, '' + stateClasses$3[state], !!state), _defineProperty$5$1(_classNames, 'a-input--' + size, !!size), _classNames));

      var datepickerClass = classNames('m-datepicker', 'm-datepicker--fixed', {
        'is-open': open
      });

      return React.createElement('div', { className: datepickerWrapperClass, ref: function ref(node) {
          return _this2.datepicker = node;
        }, 'data-qa': qa }, label && React.createElement(InputLabel$1, { htmlFor: id }, label), React.createElement('div', { className: 'a-input__wrapper' }, React.createElement(TextField$1, {
        mask: mask,
        name: name,
        id: id,
        value: input,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        onClick: function onClick() {
          return _this2.onClickInput();
        },
        onChange: function onChange(e) {
          return _this2.changeDate(e.target.value);
        },
        onBlur: onBlur }), React.createElement(Icon$9, { name: 'calendar', className: 'is-clickable', onClick: this.toggleCalendar.bind(this) }), open && React.createElement('div', { className: datepickerClass, 'aria-hidden': 'false' }, React.createElement('div', { className: 'm-datepicker is-open' }, React.createElement(Calendar$1$1, {
        locale: locale,
        format: format,
        activeDate: activeDate,
        selectedDates: selectedDates,
        minDate: minDate,
        maxDate: maxDate,
        noWeekends: noWeekends,
        onChange: this.changeDate.bind(this)
      })))), description && React.createElement('small', null, description));
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      // Reset input value
      if (props.activeDate === '') {
        return {
          activeDate: null,
          input: props.activeDate
        };
      }

      if (props.activeDate) {
        var momentDate = Moment(props.activeDate, props.format, true);
        if (momentDate.isValid()) {
          return {
            activeDate: momentDate,
            input: props.activeDate
          };
        }
      }

      return null;
    }
  }]);

  return Datepicker;
}(Component);

Datepicker.defaultProps = {
  required: false,
  format: 'DD/MM/YYYY',
  autoClose: true,
  noWeekends: false,
  readOnly: false,
  disabled: false
};

var countryCodes = [{
  "value": "+1",
  "label": "+1"
}, {
  "value": "+20",
  "label": "+20"
}, {
  "value": "+211",
  "label": "+211"
}, {
  "value": "+212",
  "label": "+212"
}, {
  "value": "+213",
  "label": "+213"
}, {
  "value": "+216",
  "label": "+216"
}, {
  "value": "+218",
  "label": "+218"
}, {
  "value": "+220",
  "label": "+220"
}, {
  "value": "+221",
  "label": "+221"
}, {
  "value": "+222",
  "label": "+222"
}, {
  "value": "+223",
  "label": "+223"
}, {
  "value": "+224",
  "label": "+224"
}, {
  "value": "+225",
  "label": "+225"
}, {
  "value": "+226",
  "label": "+226"
}, {
  "value": "+227",
  "label": "+227"
}, {
  "value": "+228",
  "label": "+228"
}, {
  "value": "+229",
  "label": "+229"
}, {
  "value": "+230",
  "label": "+230"
}, {
  "value": "+231",
  "label": "+231"
}, {
  "value": "+232",
  "label": "+232"
}, {
  "value": "+233",
  "label": "+233"
}, {
  "value": "+234",
  "label": "+234"
}, {
  "value": "+235",
  "label": "+235"
}, {
  "value": "+236",
  "label": "+236"
}, {
  "value": "+237",
  "label": "+237"
}, {
  "value": "+238",
  "label": "+238"
}, {
  "value": "+239",
  "label": "+239"
}, {
  "value": "+240",
  "label": "+240"
}, {
  "value": "+241",
  "label": "+241"
}, {
  "value": "+242",
  "label": "+242"
}, {
  "value": "+243",
  "label": "+243"
}, {
  "value": "+244",
  "label": "+244"
}, {
  "value": "+245",
  "label": "+245"
}, {
  "value": "+246",
  "label": "+246"
}, {
  "value": "+248",
  "label": "+248"
}, {
  "value": "+249",
  "label": "+249"
}, {
  "value": "+250",
  "label": "+250"
}, {
  "value": "+251",
  "label": "+251"
}, {
  "value": "+252",
  "label": "+252"
}, {
  "value": "+253",
  "label": "+253"
}, {
  "value": "+254",
  "label": "+254"
}, {
  "value": "+255",
  "label": "+255"
}, {
  "value": "+256",
  "label": "+256"
}, {
  "value": "+257",
  "label": "+257"
}, {
  "value": "+258",
  "label": "+258"
}, {
  "value": "+260",
  "label": "+260"
}, {
  "value": "+261",
  "label": "+261"
}, {
  "value": "+262",
  "label": "+262"
}, {
  "value": "+263",
  "label": "+263"
}, {
  "value": "+264",
  "label": "+264"
}, {
  "value": "+265",
  "label": "+265"
}, {
  "value": "+266",
  "label": "+266"
}, {
  "value": "+267",
  "label": "+267"
}, {
  "value": "+268",
  "label": "+268"
}, {
  "value": "+269",
  "label": "+269"
}, {
  "value": "+27",
  "label": "+27"
}, {
  "value": "+290",
  "label": "+290"
}, {
  "value": "+291",
  "label": "+291"
}, {
  "value": "+297",
  "label": "+297"
}, {
  "value": "+298",
  "label": "+298"
}, {
  "value": "+299",
  "label": "+299"
}, {
  "value": "+30",
  "label": "+30"
}, {
  "value": "+31",
  "label": "+31"
}, {
  "value": "+32",
  "label": "+32"
}, {
  "value": "+33",
  "label": "+33"
}, {
  "value": "+34",
  "label": "+34"
}, {
  "value": "+350",
  "label": "+350"
}, {
  "value": "+351",
  "label": "+351"
}, {
  "value": "+352",
  "label": "+352"
}, {
  "value": "+353",
  "label": "+353"
}, {
  "value": "+354",
  "label": "+354"
}, {
  "value": "+355",
  "label": "+355"
}, {
  "value": "+356",
  "label": "+356"
}, {
  "value": "+357",
  "label": "+357"
}, {
  "value": "+358",
  "label": "+358"
}, {
  "value": "+358-18",
  "label": "+358-18"
}, {
  "value": "+359",
  "label": "+359"
}, {
  "value": "+36",
  "label": "+36"
}, {
  "value": "+370",
  "label": "+370"
}, {
  "value": "+371",
  "label": "+371"
}, {
  "value": "+372",
  "label": "+372"
}, {
  "value": "+373",
  "label": "+373"
}, {
  "value": "+374",
  "label": "+374"
}, {
  "value": "+375",
  "label": "+375"
}, {
  "value": "+376",
  "label": "+376"
}, {
  "value": "+377",
  "label": "+377"
}, {
  "value": "+378",
  "label": "+378"
}, {
  "value": "+379",
  "label": "+379"
}, {
  "value": "+380",
  "label": "+380"
}, {
  "value": "+381",
  "label": "+381"
}, {
  "value": "+382",
  "label": "+382"
}, {
  "value": "+385",
  "label": "+385"
}, {
  "value": "+386",
  "label": "+386"
}, {
  "value": "+387",
  "label": "+387"
}, {
  "value": "+389",
  "label": "+389"
}, {
  "value": "+39",
  "label": "+39"
}, {
  "value": "+40",
  "label": "+40"
}, {
  "value": "+41",
  "label": "+41"
}, {
  "value": "+420",
  "label": "+420"
}, {
  "value": "+421",
  "label": "+421"
}, {
  "value": "+423",
  "label": "+423"
}, {
  "value": "+43",
  "label": "+43"
}, {
  "value": "+44",
  "label": "+44"
}, {
  "value": "+44-1481",
  "label": "+44-1481"
}, {
  "value": "+44-1534",
  "label": "+44-1534"
}, {
  "value": "+44-1624",
  "label": "+44-1624"
}, {
  "value": "+45",
  "label": "+45"
}, {
  "value": "+46",
  "label": "+46"
}, {
  "value": "+47",
  "label": "+47"
}, {
  "value": "+48",
  "label": "+48"
}, {
  "value": "+49",
  "label": "+49"
}, {
  "value": "+500",
  "label": "+500"
}, {
  "value": "+501",
  "label": "+501"
}, {
  "value": "+502",
  "label": "+502"
}, {
  "value": "+503",
  "label": "+503"
}, {
  "value": "+504",
  "label": "+504"
}, {
  "value": "+505",
  "label": "+505"
}, {
  "value": "+506",
  "label": "+506"
}, {
  "value": "+507",
  "label": "+507"
}, {
  "value": "+508",
  "label": "+508"
}, {
  "value": "+509",
  "label": "+509"
}, {
  "value": "+51",
  "label": "+51"
}, {
  "value": "+52",
  "label": "+52"
}, {
  "value": "+53",
  "label": "+53"
}, {
  "value": "+54",
  "label": "+54"
}, {
  "value": "+55",
  "label": "+55"
}, {
  "value": "+56",
  "label": "+56"
}, {
  "value": "+57",
  "label": "+57"
}, {
  "value": "+58",
  "label": "+58"
}, {
  "value": "+590",
  "label": "+590"
}, {
  "value": "+591",
  "label": "+591"
}, {
  "value": "+592",
  "label": "+592"
}, {
  "value": "+593",
  "label": "+593"
}, {
  "value": "+594",
  "label": "+594"
}, {
  "value": "+595",
  "label": "+595"
}, {
  "value": "+596",
  "label": "+596"
}, {
  "value": "+597",
  "label": "+597"
}, {
  "value": "+598",
  "label": "+598"
}, {
  "value": "+599",
  "label": "+599"
}, {
  "value": "+60",
  "label": "+60"
}, {
  "value": "+61",
  "label": "+61"
}, {
  "value": "+62",
  "label": "+62"
}, {
  "value": "+63",
  "label": "+63"
}, {
  "value": "+64",
  "label": "+64"
}, {
  "value": "+65",
  "label": "+65"
}, {
  "value": "+66",
  "label": "+66"
}, {
  "value": "+670",
  "label": "+670"
}, {
  "value": "+672",
  "label": "+672"
}, {
  "value": "+673",
  "label": "+673"
}, {
  "value": "+674",
  "label": "+674"
}, {
  "value": "+675",
  "label": "+675"
}, {
  "value": "+676",
  "label": "+676"
}, {
  "value": "+677",
  "label": "+677"
}, {
  "value": "+678",
  "label": "+678"
}, {
  "value": "+679",
  "label": "+679"
}, {
  "value": "+680",
  "label": "+680"
}, {
  "value": "+681",
  "label": "+681"
}, {
  "value": "+682",
  "label": "+682"
}, {
  "value": "+683",
  "label": "+683"
}, {
  "value": "+685",
  "label": "+685"
}, {
  "value": "+686",
  "label": "+686"
}, {
  "value": "+687",
  "label": "+687"
}, {
  "value": "+688",
  "label": "+688"
}, {
  "value": "+689",
  "label": "+689"
}, {
  "value": "+690",
  "label": "+690"
}, {
  "value": "+691",
  "label": "+691"
}, {
  "value": "+692",
  "label": "+692"
}, {
  "value": "+7",
  "label": "+7"
}, {
  "value": "+81",
  "label": "+81"
}, {
  "value": "+82",
  "label": "+82"
}, {
  "value": "+84",
  "label": "+84"
}, {
  "value": "+850",
  "label": "+850"
}, {
  "value": "+852",
  "label": "+852"
}, {
  "value": "+853",
  "label": "+853"
}, {
  "value": "+855",
  "label": "+855"
}, {
  "value": "+856",
  "label": "+856"
}, {
  "value": "+86",
  "label": "+86"
}, {
  "value": "+870",
  "label": "+870"
}, {
  "value": "+880",
  "label": "+880"
}, {
  "value": "+886",
  "label": "+886"
}, {
  "value": "+90",
  "label": "+90"
}, {
  "value": "+91",
  "label": "+91"
}, {
  "value": "+92",
  "label": "+92"
}, {
  "value": "+93",
  "label": "+93"
}, {
  "value": "+94",
  "label": "+94"
}, {
  "value": "+95",
  "label": "+95"
}, {
  "value": "+960",
  "label": "+960"
}, {
  "value": "+961",
  "label": "+961"
}, {
  "value": "+962",
  "label": "+962"
}, {
  "value": "+963",
  "label": "+963"
}, {
  "value": "+964",
  "label": "+964"
}, {
  "value": "+965",
  "label": "+965"
}, {
  "value": "+966",
  "label": "+966"
}, {
  "value": "+967",
  "label": "+967"
}, {
  "value": "+968",
  "label": "+968"
}, {
  "value": "+970",
  "label": "+970"
}, {
  "value": "+971",
  "label": "+971"
}, {
  "value": "+972",
  "label": "+972"
}, {
  "value": "+973",
  "label": "+973"
}, {
  "value": "+974",
  "label": "+974"
}, {
  "value": "+975",
  "label": "+975"
}, {
  "value": "+976",
  "label": "+976"
}, {
  "value": "+977",
  "label": "+977"
}, {
  "value": "+98",
  "label": "+98"
}, {
  "value": "+992",
  "label": "+992"
}, {
  "value": "+993",
  "label": "+993"
}, {
  "value": "+994",
  "label": "+994"
}, {
  "value": "+995",
  "label": "+995"
}, {
  "value": "+996",
  "label": "+996"
}, {
  "value": "+998",
  "label": "+998"
}];

___$insertStyle(".a-input-telephone .a-input__wrapper {\n  display: flex;\n}\n.a-input-telephone .a-input__wrapper .a-input-telephone__number {\n  flex: 1;\n}\n.a-input-telephone .a-input__wrapper .a-input-telephone__number input:not([class*=a-button]):not([type=checkbox]):not([type=radio]) {\n  border-left: none;\n}\n.a-input-telephone .a-input__wrapper .a-input-telephone__area-code select:focus,\n.a-input-telephone .a-input__wrapper input:not([class*=a-button]):not([type=checkbox]):not([type=radio]).a-input-telephone__number:focus {\n  z-index: 1;\n}\n\n.a-input.has-success .a-input-telephone__area-code .a-input__wrapper:before, .a-input.has-warning .a-input-telephone__area-code .a-input__wrapper:before, .a-input.has-error .a-input-telephone__area-code .a-input__wrapper:before {\n  content: none;\n}");

var _extends$3 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _typeof$1$2 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};

function _defineProperty$6$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _objectWithoutProperties$1$1(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var stateClasses$4 = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error'
};

var TelephoneNumber = function TelephoneNumber(props) {
  var id = props.id,
      label = props.label,
      value = props.value,
      name = props.name,
      placeholder = props.placeholder,
      qa = props.qa,
      className = props.className,
      style = props.style,
      required = props.required,
      state = props.state,
      loading = props.loading,
      onChange = props.onChange,
      _props$defaultAreaCod = props.defaultAreaCode,
      description = props.description,
      errorDescription = props.errorDescription,
      extraProps = _objectWithoutProperties$1$1(props, ['id', 'label', 'value', 'name', 'placeholder', 'qa', 'className', 'style', 'required', 'state', 'loading', 'onChange', 'defaultAreaCode', 'description', 'errorDescription']);

  var valueIsValidObject = function valueIsValidObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof$1$2(value)) === 'object' && value !== null;
  };
  var valueIsEqualToInternalValue = function valueIsEqualToInternalValue(val, internalVal) {
    return val.areaCode === internalVal.areaCode && val.number === internalVal.number;
  };

  var _useState = useState(valueIsValidObject(value) ? value : {
    areaCode: internalValue && internalValue.areaCode ? internalValue.areaCode : '+32',
    number: internalValue && internalValue.number ? internalValue.number : ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  useEffect(function () {
    if (!valueIsValidObject(value) || !valueIsEqualToInternalValue(value, internalValue)) {
      onChange(internalValue);
    }
  }, [internalValue]);
  useEffect(function () {
    if (valueIsValidObject(value) && !valueIsEqualToInternalValue(value, internalValue)) {
      setInternalValue(value);
    }
  }, [value]);

  var updateNumber = function updateNumber(e) {
    setInternalValue(_extends$3({}, internalValue, {
      number: e.target.value
    }));
  };

  var updateAreaCode = function updateAreaCode(e) {
    setInternalValue(_extends$3({}, internalValue, {
      areaCode: e.target.value
    }));
  };

  var options = countryCodes;

  var telephoneNumberClass = classNames('a-input', 'a-input-telephone', _defineProperty$6$1({
    'is-required': !!required
  }, '' + stateClasses$4[state], !!state), className);

  return React.createElement('div', { className: telephoneNumberClass, style: style, 'data-qa': qa }, label && React.createElement(InputLabel$1, { htmlFor: id }, label), React.createElement('div', { className: 'a-input__wrapper' }, React.createElement(Select, _extends$3({
    className: 'a-input-telephone__area-code',
    id: id + '-areacode',
    name: name + '-areacode',
    required: required,
    onChange: updateAreaCode,
    value: internalValue.areaCode,
    options: options
  }, extraProps)), React.createElement(TextField$1, _extends$3({
    className: 'a-input-telephone__number',
    id: id,
    placeholder: placeholder,
    name: name,
    required: required,
    loading: loading,
    onChange: updateNumber,
    value: internalValue.number
  }, extraProps))), description ? React.createElement('small', null, description) : null, errorDescription && React.createElement('small', { className: 'u-text-danger' }, errorDescription));
};

function ___$insertStyle$1(css) {
	if (!css) {
		return;
	}
	if (typeof window === 'undefined') {
		return;
	}

	var style = document.createElement('style');

	style.setAttribute('type', 'text/css');
	style.innerHTML = css;
	document.head.appendChild(style);
	return css;
}

var ENV_IDENTIFIERS = {
	dev: '-o.',
	acc: '-a.',
	local: 'local'
};

function getEnvironment() {
	if (typeof window === 'undefined') {
		return process.env.NODE_ENV;
	}

	var currentUrl = window.location.href;

	var env = Object.keys(ENV_IDENTIFIERS).find(function (key) {
		return currentUrl.includes(ENV_IDENTIFIERS[key]);
	});

	return env || 'prod';
}

function getAstadUrl() {
	switch (getEnvironment().toLowerCase()) {
		case 'local':
			return 'https://www.dev.dcs.antwerpen.be';
		case 'dev':
			return 'https://www.dev.dcs.antwerpen.be';
		case 'acc':
			return 'https://www.acc.dcs.antwerpen.be';
		default:
			return 'https://www.antwerpen.be';
	}
}

function getShoppingCartUrl() {
	switch (getEnvironment().toLowerCase()) {
		case 'local':
			return 'https://winkelmand-o.antwerpen.be';
		case 'dev':
			return 'https://winkelmand-o.antwerpen.be';
		case 'acc':
			return 'https://winkelmand-a.antwerpen.be';
		default:
			return 'https://winkelmand.antwerpen.be';
	}
}

function getEloketUrl() {
	switch (getEnvironment().toLowerCase()) {
		case 'local':
			return 'https://eloket-o.antwerpen.be';
		case 'dev':
			return 'https://eloket-o.antwerpen.be';
		case 'acc':
			return 'https://eloket-a.antwerpen.be';
		default:
			return 'https://eloket.antwerpen.be';
	}
}

var Environment = {
	getEnvironment: getEnvironment,
	getAstadUrl: getAstadUrl,
	getShoppingCartUrl: getShoppingCartUrl,
	getEloketUrl: getEloketUrl
};

___$insertStyle$1(".local-header {\n  background-color: #15F4EE;\n}\n\n.dev-header {\n  background-color: #ADFF2F;\n}\n\n.acc-header {\n  background-color: #FF69B4;\n}");

function _defineProperty$a(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}return obj;
}

var Header = function Header(props) {
	var children = props.children,
	    style = props.style,
	    className = props.className,
	    logoUrl = props.logoUrl,
	    logoSrc = props.logoSrc,
	    logoAlt = props.logoAlt,
	    type = props.type,
	    qa = props.qa;

	var env = Environment.getEnvironment();

	var headerClass = classNames('o-header', className, _defineProperty$a({}, env + '-header', type === 'antwerpen'));
	return React.createElement('header', { className: headerClass, style: style, 'data-qa': qa }, React.createElement('a', { href: logoUrl, className: 'o-header__logo' }, React.createElement('img', { src: logoSrc, alt: logoAlt })), children);
};

Header.defaultProps = {
	logoUrl: '/',
	logoSrc: 'https://cdn.antwerpen.be/core_branding_scss/4.3.1/assets/images/a-logo.svg',
	logoAlt: 'Officieel logo Antwerpen.'
};

var styles = {
  overflow: 'auto'
};

var Hero = function Hero(props) {
  var children = props.children;

  return React.createElement('div', { className: 'u-wrapper u-bg-light', style: styles }, React.createElement('div', { className: 'u-container' }, React.createElement('div', { className: 'u-text-center u-margin-lg' }, children)));
};

var Icon$a = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var typeClasses$8 = {
  primary: 'a-label--primary',
  secondary: 'a-label--secondary',
  success: 'a-label--success',
  warning: 'a-label--warning',
  danger: 'a-label--danger'
};

var Label = function Label(props) {
  var type = props.type,
      className = props.className,
      _props$style = props.style,
      style = _props$style === undefined ? {} : _props$style,
      children = props.children,
      qa = props.qa;

  var labelClass = classNames('a-label', className, _defineProperty$b({}, '' + typeClasses$8[type], !!type));

  return React.createElement('span', { className: labelClass, style: style, 'data-qa': qa }, children);
};

var _createClass$d = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$d(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$c(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$c(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Steps = function (_Component) {
  _inherits$c(Steps, _Component);

  function Steps() {
    _classCallCheck$d(this, Steps);

    return _possibleConstructorReturn$c(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
  }

  _createClass$d(Steps, [{
    key: "renderStep",
    value: function renderStep(child, i) {
      return cloneElement(child, {
        completed: i < this.props.current,
        active: i === this.props.current
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          qa = _props.qa;

      return React.createElement("div", { className: className, "data-qa": qa }, React.createElement("ol", { className: "m-step-indicator" }, this.props.children.map(function (child, i) {
        return _this2.renderStep(child, i);
      })));
    }
  }]);

  return Steps;
}(Component);

var _createClass$1$5 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$1$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$5(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Step = function (_Component) {
  _inherits$1$5(Step, _Component);

  function Step() {
    _classCallCheck$1$5(this, Step);

    return _possibleConstructorReturn$1$5(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
  }

  _createClass$1$5(Step, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          active = _props.active,
          completed = _props.completed,
          _props$ariaLabelCurre = _props.ariaLabelCurrent,
          ariaLabelCurrent = _props$ariaLabelCurre === undefined ? "Huidige:" : _props$ariaLabelCurre,
          _props$ariaLabelCompl = _props.ariaLabelCompleted,
          ariaLabelCompleted = _props$ariaLabelCompl === undefined ? "Compleet:" : _props$ariaLabelCompl;

      var stepClass = classNames({
        'is-active': !!active,
        'is-completed': !!completed
      });

      return React.createElement('li', { className: stepClass }, !!completed ? React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabelCompleted) : '', !!active ? React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabelCurrent) : '', React.createElement('span', { className: 'm-step-indicator__label' }, title));
    }
  }]);

  return Step;
}(Component);

var InputLabel$2 = function InputLabel(props) {
  var style = props.style,
      htmlFor = props.htmlFor,
      children = props.children,
      inline = props.inline,
      qa = props.qa;

  var labelClass = classNames('a-input__label', {
    'a-input__label--inline': !!inline
  });
  return React.createElement('label', { className: labelClass, htmlFor: htmlFor, style: style, 'data-qa': qa }, children);
};

var Bar = function Bar(_ref) {
  var start = _ref.start,
      end = _ref.end,
      getPositionFromValue = _ref.getPositionFromValue,
      range = _ref.range;
  return React.createElement('div', {
    className: 'm-range-slider__bar',
    style: {
      left: range && getPositionFromValue(start) + 'px',
      width: range ? getPositionFromValue(end - start) + 'px' : getPositionFromValue(start) + 'px'
    } });
};

var _extends$4 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass$e = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$e(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$d(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$d(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Handle = function (_Component) {
  _inherits$d(Handle, _Component);

  function Handle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$e(this, Handle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$d(this, (_ref = Handle.__proto__ || Object.getPrototypeOf(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      limit: 480,
      grab: 5
    }, _this.handleNoop = function (e) {
      e.stopPropagation();
      e.preventDefault();
    }, _this.handleStart = function () {
      document.addEventListener('mousemove', _this.handleDrag);
      document.addEventListener('mouseup', _this.handleEnd);
    }, _this.handleDrag = function (e) {
      _this.handleNoop(e);
      var onChange = _this.props.onChange;

      if (!onChange) return;

      var value = _this.position(e);
      onChange && onChange(value);
    }, _this.handleEnd = function (e) {
      document.removeEventListener('mousemove', _this.handleDrag);
      document.removeEventListener('mouseup', _this.handleEnd);

      var onDragEnd = _this.props.onDragEnd;

      if (!onDragEnd) return;
      var value = _this.position(e);
      onDragEnd && onDragEnd(value);
    }, _this.position = function (e) {
      var grab = _this.state.grab;
      var direction = _this.props.direction;

      var clientCoordinateStyle = 'clientX';
      var coordinate = !e.touches ? e[clientCoordinateStyle] : e.touches[0][clientCoordinateStyle];

      var pos = coordinate - direction - grab;
      return _this.getValueFromPosition(pos);
    }, _this.getValueFromPosition = function (pos) {
      var limit = _this.state.limit;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;

      var percentage = clamp(pos, 0, limit) / (limit || 1);
      var baseVal = step * Math.round(percentage * (max - min) / step);

      var value = baseVal + min;

      if (value >= max) value = max;
      if (value <= min) value = min;

      return value;
    }, _this.handleKeyPress = function (e) {
      if (e.defaultPrevented) {
        return;
      }

      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          step = _this$props2.step,
          min = _this$props2.min,
          max = _this$props2.max,
          value = _this$props2.value;

      if (!onChange) {
        return;
      }

      var newValue = value;
      var key = e.keyCode;

      switch (key) {
        case 39: // right
        case 38:
          // up
          newValue = value + step;
          e.preventDefault();
          break;
        case 37: // left
        case 40:
          // down
          newValue = value - step;
          e.preventDefault();
          break;
        case 35:
          // end
          newValue = max;
          e.preventDefault();
          break;
        case 36:
          // home
          newValue = min;
          e.preventDefault();
          break;
      }

      // Make sure the slider doesn't get out of bounds
      if (newValue < min || newValue > max) {
        return;
      }
      onChange(newValue);
    }, _this.onFocus = function () {
      document.addEventListener('keydown', _this.handleKeyPress);
      _this.setState({ isFocus: true });
    }, _this.onBlur = function () {
      document.removeEventListener('keydown', _this.handleKeyPress);
      _this.setState({ isFocus: false });
    }, _temp), _possibleConstructorReturn$d(_this, _ret);
  }

  _createClass$e(Handle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          handleNoop = _props.handleNoop,
          getPositionFromValue = _props.getPositionFromValue,
          unit = _props.unit,
          fixed = _props.fixed,
          tooltips = _props.tooltips,
          onDragEnd = _props.onDragEnd,
          min = _props.min,
          max = _props.max,
          label = _props.label;

      var fixedValue = value.toFixed(fixed);
      var valueNow = fixedValue.replace(/[.]/, ',') + ' ' + unit;

      return React.createElement('div', {
        className: 'm-range-slider__handle',
        tabIndex: '0',
        onMouseDown: this.handleStart,
        onTouchEnd: handleNoop,
        onTouchMove: this.handleDrag,
        onDragExit: onDragEnd,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        role: 'slider',
        'aria-orientation': 'horizontal',
        'aria-valuemax': max,
        'aria-valuemin': min,
        'aria-valuenow': fixedValue,
        'aria-label': label,
        style: {
          left: getPositionFromValue(value) + 'px'
        }
      }, tooltips ? React.createElement('div', { className: 'm-range-slider__tooltip a-tooltip a-tooltip--primary a-tooltip--top' }, React.createElement('p', null, fixedValue.replace(/[.]/, ','), unit)) : React.createElement('span', { className: 'm-range-slider__value' }, fixedValue.replace(/[.]/, ','), unit));
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var sliderPos = props.sliderPos;

      var handlePos = 30; // Fills the bar up correctly on the right side

      return _extends$4({}, state, {
        limit: sliderPos - handlePos
      });
    }
  }]);

  return Handle;
}(Component);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

var _createClass$1$6 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$1$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$6(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Slider = function (_Component) {
  _inherits$1$6(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1$6(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1$6(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      limit: 0,
      start: _this.props.start,
      end: _this.props.end
    }, _this.onDragEnd = function () {
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end;
      var onDragEnd = _this.props.onDragEnd;

      if (!onDragEnd) return;
      onDragEnd && onDragEnd(start, end);
    }, _this.updateStart = function (start) {
      var end = _this.state.end;
      var minRange = _this.props.minRange;

      if (end - start < minRange) {
        end = start + minRange;
      }

      _this.onChange(start, end);
    }, _this.updateEnd = function (end) {
      var start = _this.state.start;
      var minRange = _this.props.minRange;

      if (end - start < minRange) {
        start = end - minRange;
      }

      _this.onChange(start, end);
    }, _this.handleUpdate = function () {
      var sliderPos = _this.slider['offsetWidth'];
      var handlePos = 30; // Fills the bar up correctly on the right side

      var node = _this.slider;
      var direction = node.getBoundingClientRect()['left'];

      _this.setState({
        limit: sliderPos - handlePos,
        sliderPos: sliderPos,
        direction: direction
      });
    }, _this.handleNoop = function (e) {
      e.stopPropagation();
      e.preventDefault();
    }, _this.onChange = function (start, end) {
      var onChange = _this.props.onChange;

      _this.setState({
        start: start,
        end: end
      });

      if (!onChange) return;
      onChange(start, end);
    }, _this.getPositionFromValue = function (value) {
      var limit = _this.state.limit;
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max;

      var diffMaxMin = max - min;
      var diffValMin = value - min;
      var percentage = diffValMin / diffMaxMin;

      return Math.round(percentage * limit);
    }, _temp), _possibleConstructorReturn$1$6(_this, _ret);
  }

  _createClass$1$6(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleUpdate);
      this.handleUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          label = _props.label,
          min = _props.min,
          max = _props.max,
          step = _props.step,
          unit = _props.unit,
          minRange = _props.minRange,
          tooltips = _props.tooltips,
          range = _props.range,
          fixed = _props.fixed,
          qa = _props.qa;
      var _state = this.state,
          sliderPos = _state.sliderPos,
          direction = _state.direction,
          start = _state.start,
          end = _state.end;

      return React.createElement('div', { id: id, 'data-qa': qa }, label && React.createElement(InputLabel$2, { htmlFor: id }, label), React.createElement('div', {
        className: 'm-range-slider',
        ref: function ref(s) {
          _this2.slider = s;
        }
      }, React.createElement('div', { className: 'm-range-slider__inner' }, React.createElement(Bar, {
        start: start,
        end: end,
        getPositionFromValue: this.getPositionFromValue,
        range: range
      }), React.createElement(Handle, {
        value: start,
        onChange: this.updateStart,
        min: min,
        max: max - minRange,
        step: step,
        unit: unit,
        fixed: fixed,
        label: label,
        handleNoop: this.handleNoop,
        sliderPos: sliderPos,
        direction: direction,
        getPositionFromValue: this.getPositionFromValue,
        tooltips: tooltips,
        onDragEnd: this.onDragEnd
      }), range && React.createElement(Handle, {
        value: end,
        onChange: this.updateEnd,
        min: min + minRange,
        max: max,
        step: step,
        unit: unit,
        fixed: fixed,
        label: label,
        handleNoop: this.handleNoop,
        sliderPos: sliderPos,
        direction: direction,
        getPositionFromValue: this.getPositionFromValue,
        tooltips: tooltips,
        onDragEnd: this.onDragEnd
      }))));
    }
  }]);

  return Slider;
}(Component);

Slider.defaultProps = {
  start: 0,
  end: 100,
  min: 0,
  max: 100,
  step: 1,
  unit: '%',
  minRange: 0,
  fixed: 0,
  tooltips: false,
  range: false
};

function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var spinnerSizes$1 = {
  small: 'sm',
  large: 'lg'
};

var Spinner$1 = function Spinner(props) {
  var size = props.size,
      style = props.style,
      className = props.className,
      _props$ariaLabel = props.ariaLabel,
      ariaLabel = _props$ariaLabel === undefined ? "Wordt geladen" : _props$ariaLabel,
      qa = props.qa;

  var spinnerClass = classNames('a-spinner', className, _defineProperty$c({}, 'a-spinner--' + spinnerSizes$1[size], !!size));

  return React.createElement('div', { className: spinnerClass, style: style, role: 'status', 'aria-label': ariaLabel, 'data-qa': qa });
};

function _objectWithoutProperties$3(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var Link = function Link(_ref) {
  var component = _ref.component,
      children = _ref.children,
      props = _objectWithoutProperties$3(_ref, ['component', 'children']);

  return createElement(component, props, children);
};

Link.defaultProps = { component: 'a' };

var _createClass$f = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$f(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$e(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$e(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Breadcrumbs = function (_React$Component) {
  _inherits$e(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    _classCallCheck$f(this, Breadcrumbs);

    return _possibleConstructorReturn$e(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).apply(this, arguments));
  }

  _createClass$f(Breadcrumbs, [{
    key: 'onClick',
    value: function onClick(event, item) {
      event.preventDefault();
      item.onClick();
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          linkProps = _props.linkProps;

      return items.map(function (item, index) {
        return React.createElement('li', { key: item.name }, index >= items.length - 1 || !item.target && !item.onClick ? item.name : React.createElement(Link, linkProps({
          href: item.target || '#',
          onClick: item.onClick ? function (event) {
            return _this2.onClick(event, item);
          } : null
        }), item.name));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          items = _props2.items,
          qa = _props2.qa;

      return items && items.length > 0 && React.createElement('ul', { className: 'm-breadcrumbs', 'data-qa': qa }, this.renderItems());
    }
  }]);

  return Breadcrumbs;
}(React.Component);

Breadcrumbs.defaultProps = {
  linkProps: function linkProps(src) {
    return src;
  }
};

var InputLabel$3 = function InputLabel(props) {
  var style = props.style,
      htmlFor = props.htmlFor,
      children = props.children,
      inline = props.inline,
      qa = props.qa;

  var labelClass = classNames('a-input__label', {
    'a-input__label--inline': !!inline
  });
  return React.createElement('label', { className: labelClass, htmlFor: htmlFor, style: style, 'data-qa': qa }, children);
};

var _createClass$g = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$g(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$f(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$f(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Switch = function (_Component) {
  _inherits$f(Switch, _Component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$g(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$f(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checked: _this.props.checked || false
    }, _temp), _possibleConstructorReturn$f(_this, _ret);
  }

  _createClass$g(Switch, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // If we change the checked property, change our state
      if (prevProps.checked !== this.props.checked) {
        this.setState({
          checked: this.props.checked || false
        });
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      this.setState({ checked: !this.state.checked });

      if (this.props.onClick && typeof this.props.onClick === 'function') {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          label = _props.label,
          name = _props.name,
          labelTrue = _props.labelTrue,
          labelFalse = _props.labelFalse,
          required = _props.required,
          disabled = _props.disabled,
          qa = _props.qa;

      var containerClass = classNames('a-input', { 'is-required': !!required });

      var switchWrapperClass = classNames('a-switch', { 'disabled': disabled });

      return React.createElement('div', { className: containerClass, 'data-qa': qa }, label && React.createElement(InputLabel$3, null, label), React.createElement('div', { className: switchWrapperClass }, labelFalse && React.createElement('label', { className: 'a-switch__label' }, labelFalse), React.createElement('div', { className: 'a-switch__toggle' }, React.createElement('input', {
        type: 'checkbox',
        name: name,
        id: id,
        role: 'switch',
        'aria-checked': this.state.checked,
        defaultChecked: this.state.checked,
        disabled: disabled,
        onChange: function onChange(event) {
          return _this2.onClick(event);
        }
      }), React.createElement('label', { htmlFor: id }, React.createElement('span', { className: 'u-screen-reader-only' }, 'Toggle "', label, '"'))), labelTrue && React.createElement('label', { className: 'a-switch__label' }, labelTrue)));
    }
  }]);

  return Switch;
}(Component);

function _objectWithoutProperties$4(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var Link$1 = function Link(_ref) {
  var component = _ref.component,
      children = _ref.children,
      props = _objectWithoutProperties$4(_ref, ['component', 'children']);

  return createElement(component, props, children);
};

Link$1.defaultProps = { component: 'a' };

var _extends$5 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass$h = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$h(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$g(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$g(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Tabs = function (_React$Component) {
  _inherits$g(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck$h(this, Tabs);

    return _possibleConstructorReturn$g(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass$h(Tabs, [{
    key: 'renderItems',
    value: function renderItems() {
      var _props = this.props,
          items = _props.items,
          linkProps = _props.linkProps,
          ariaLabelActive = _props.ariaLabelActive;

      return items.map(function (item) {
        return React.createElement('li', { key: item.name }, React.createElement(Link$1, _extends$5({
          className: classNames({ 'is-active': item.active, 'is-disabled': item.disabled })
        }, linkProps({ href: item.target })), item.active ? React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabelActive) : '', item.name));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          align = _props2.align,
          items = _props2.items,
          qa = _props2.qa;

      var tabClasses = classNames('m-nav-tabs', {
        'm-nav-tabs--left': align === 'left',
        'm-nav-tabs--right': align === 'right'
      });

      return items && items.length > 0 && React.createElement('ul', { className: tabClasses, 'data-qa': qa }, this.renderItems());
    }
  }]);

  return Tabs;
}(React.Component);

Tabs.defaultProps = {
  align: 'left',
  linkProps: function linkProps(src) {
    return src;
  },
  ariaLabelActive: 'Actief:'
};

var TagList$1 = function TagList(_ref) {
  var children = _ref.children;

  return React.createElement("ul", { className: "o-tag-list" }, children);
};

var Icon$b = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$i = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$i(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$h(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$h(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$7 = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$9 = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$6 = function (_Component) {
  _inherits$h(Button, _Component);

  function Button() {
    _classCallCheck$i(this, Button);

    return _possibleConstructorReturn$h(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$i(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$d(_classNames, '' + typeClasses$9[type], !!type), _defineProperty$d(_classNames, '' + sizeClasses$7[size], !!size), _defineProperty$d(_classNames, 'has-icon', !!icon), _defineProperty$d(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$d(_classNames, 'has-icon-right', !!iconRight), _defineProperty$d(_classNames, 'a-button-negative', !!negative), _defineProperty$d(_classNames, 'a-button-outline', !!outline), _defineProperty$d(_classNames, 'a-button-transparent', !!transparent), _defineProperty$d(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$b, { name: icon }) : null, iconLeft ? React.createElement(Icon$b, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$b, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var _createClass$1$7 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$1$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$7(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TagListItem$1 = function (_Component) {
  _inherits$1$7(TagListItem, _Component);

  function TagListItem() {
    _classCallCheck$1$7(this, TagListItem);

    return _possibleConstructorReturn$1$7(this, (TagListItem.__proto__ || Object.getPrototypeOf(TagListItem)).apply(this, arguments));
  }

  _createClass$1$7(TagListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          _props$closable = _props.closable,
          closable = _props$closable === undefined ? false : _props$closable,
          _props$icon = _props.icon,
          icon = _props$icon === undefined ? '' : _props$icon,
          _props$buttonClass = _props.buttonClass,
          onClick = _props.onClick,
          ariaLabelIcon = _props.ariaLabelIcon,
          _props$ariaLabelClose = _props.ariaLabelClose,
          ariaLabelClose = _props$ariaLabelClose === undefined ? 'Sluiten' : _props$ariaLabelClose,
          qa = _props.qa;

      return React.createElement('li', { className: 'm-tag', 'data-qa': qa }, icon && React.createElement(Button$6, { size: 'small', icon: icon, ariaLabel: ariaLabelIcon }), React.createElement('span', { className: 'm-tag__label' }, value), closable && React.createElement(Button$6, { transparent: true, size: 'small', type: 'danger', icon: 'close', ariaLabel: ariaLabelClose, onClick: onClick }));
    }
  }]);

  return TagListItem;
}(Component);

var Icon$c = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$j = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$j(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$i(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$i(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var sizeClasses$8 = {
  tiny: 'a-toggle--tiny',
  small: 'a-toggle--small',
  large: 'a-toggle--large'
};

var sizeBtnClasses = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};

var Toggle = function (_Component) {
  _inherits$i(Toggle, _Component);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$j(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$i(this, (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      checked: _this.props.checked || false
    }, _this.handleChange = function (e) {
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn$i(_this, _ret);
  }

  _createClass$j(Toggle, [{
    key: 'render',
    value: function render() {
      var _classNames2, _classNames3;

      var _props = this.props,
          id = _props.id,
          name = _props.name,
          size = _props.size,
          checkedLabel = _props.checkedLabel,
          checkedIcon = _props.checkedIcon,
          checkedButtonClass = _props.checkedButtonClass,
          uncheckedLabel = _props.uncheckedLabel,
          uncheckedIcon = _props.uncheckedIcon,
          uncheckedButtonClass = _props.uncheckedButtonClass,
          showLabels = _props.showLabels,
          qa = _props.qa;

      var toggleClass = classNames('a-toggle has-icon', _defineProperty$e({}, '' + sizeClasses$8[size], !!size));

      var checkedClasses = classNames('a-toggle__on a-button', showLabels ? 'has-icon-left' : 'has-icon', (_classNames2 = {}, _defineProperty$e(_classNames2, '' + checkedButtonClass, checkedButtonClass), _defineProperty$e(_classNames2, '' + sizeBtnClasses[size], !!size), _classNames2));

      var uncheckedClasses = classNames('a-toggle__off a-button', showLabels ? 'has-icon-left' : 'has-icon', (_classNames3 = {}, _defineProperty$e(_classNames3, '' + uncheckedButtonClass, uncheckedButtonClass), _defineProperty$e(_classNames3, '' + sizeBtnClasses[size], !!size), _classNames3));

      return React.createElement('div', { className: toggleClass, 'data-qa': qa }, React.createElement('input', {
        className: 'a-toggle__checkbox',
        id: id,
        name: name,
        'aria-checked': this.props.checked,
        defaultChecked: this.props.checked,
        type: 'checkbox',
        role: 'switch',
        onChange: this.handleChange
      }), React.createElement('div', { className: 'a-toggle__labels' }, React.createElement('label', { htmlFor: id, className: checkedClasses }, React.createElement(Icon$c, { name: checkedIcon, ariaLabel: showLabels ? '' : checkedLabel }), showLabels && React.createElement('span', null, checkedLabel)), React.createElement('label', { htmlFor: id, className: uncheckedClasses }, React.createElement(Icon$c, { name: uncheckedIcon, ariaLabel: showLabels ? '' : uncheckedLabel }), showLabels && React.createElement('span', null, uncheckedLabel))));
    }
  }]);

  return Toggle;
}(Component);

Toggle.defaultProps = {
  id: 'toggle-normal',
  checked: false,
  checkedLabel: '',
  checkedIcon: 'fa-bars',
  checkedButtonClass: '',
  showLabels: true,
  uncheckedLabel: '',
  uncheckedIcon: 'fa-close',
  uncheckedButtonClass: 'a-button--danger'
};

function ___$insertStyle$2(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

var Icon$d = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

function _defineProperty$f(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var sizeClasses$9 = {
  small: 'a-avatar--small',
  medium: 'a-avatar--medium',
  large: 'a-avatar--large'
};

var IconWrapper$1 = function IconWrapper(_ref) {
  var icon = _ref.icon;
  return React.createElement('span', { className: 'a-avatar__icon' }, React.createElement(Icon$d, { name: icon }));
};
var LetterWrapper$1 = function LetterWrapper(_ref2) {
  var letter = _ref2.letter;
  return React.createElement('span', { className: 'a-avatar__letter' }, letter);
};

var Avatar$1 = function Avatar(props) {
  var size = props.size,
      icon = props.icon,
      children = props.children,
      style = props.style,
      letter = props.letter,
      image = props.image,
      _props$alt = props.alt,
      alt = _props$alt === undefined ? '' : _props$alt,
      className = props.className,
      qa = props.qa,
      _props$ariaLabel = props.ariaLabel,
      ariaLabel = _props$ariaLabel === undefined ? 'Gebruiker icoon' : _props$ariaLabel;

  var avatarClass = classNames('a-avatar', _defineProperty$f({}, '' + sizeClasses$9[size], !!size), className);

  return React.createElement('div', { className: avatarClass, style: style, 'data-qa': qa }, icon && React.createElement(IconWrapper$1, { icon: icon }), letter && React.createElement(LetterWrapper$1, { letter: letter }), image && React.createElement('img', { src: image, alt: alt }), children, React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$k = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$1$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$k(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$j(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$j(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$1$1 = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$a = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$7 = function (_Component) {
  _inherits$j(Button, _Component);

  function Button() {
    _classCallCheck$k(this, Button);

    return _possibleConstructorReturn$j(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$k(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$1$4(_classNames, '' + typeClasses$a[type], !!type), _defineProperty$1$4(_classNames, '' + sizeClasses$1$1[size], !!size), _defineProperty$1$4(_classNames, 'has-icon', !!icon), _defineProperty$1$4(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$1$4(_classNames, 'has-icon-right', !!iconRight), _defineProperty$1$4(_classNames, 'a-button-negative', !!negative), _defineProperty$1$4(_classNames, 'a-button-outline', !!outline), _defineProperty$1$4(_classNames, 'a-button-transparent', !!transparent), _defineProperty$1$4(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$d, { name: icon }) : null, iconLeft ? React.createElement(Icon$d, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$d, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var FlyoutContent$3 = function FlyoutContent(props) {
  var hasPadding = props.hasPadding,
      children = props.children,
      qa = props.qa;

  var classes = classNames('m-flyout__content', {
    'has-padding': !!hasPadding
  });

  return React.createElement('div', { className: classes, 'data-qa': qa }, children);
};

var _createClass$1$8 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$2$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$1$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$8(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var flyoutSizes$2 = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  full: 'full'
};

var Flyout$1 = function (_Component) {
  _inherits$1$8(Flyout, _Component);

  function Flyout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1$8(this, Flyout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1$8(this, (_ref = Flyout.__proto__ || Object.getPrototypeOf(Flyout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: _this.props.open
    }, _this.flyoutRef = React.createRef(), _this.toggleIsOpen = function () {
      var onStateChange = _this.props.onStateChange;

      if (!_this.state.isOpen) {
        document.addEventListener('click', _this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', _this.handleOutsideClick, false);
      }
      _this.setState({ isOpen: !_this.state.isOpen });
      onStateChange(_this.state.isOpen);
    }, _this.closeFlyout = function () {
      var onStateChange = _this.props.onStateChange;

      if (!_this.state.isOpen) {
        document.addEventListener('click', _this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', _this.handleOutsideClick, false);
      }
      _this.setState({ isOpen: false });
      onStateChange(false);
    }, _this.handleOutsideClick = function (e) {
      var area = ReactDOM.findDOMNode(_this.flyoutRef.current);
      if (area && !area.contains(e.target)) {
        _this.closeFlyout();
      }
    }, _this.getClassNames = function () {
      return classNames(_this.props.className, 'm-flyout', 'm-flyout--' + _this.props.direction, _defineProperty$2$3({
        'is-open': _this.state.isOpen,
        'm-flyout--scrollable': _this.props.scrollable
      }, 'm-flyout--' + flyoutSizes$2[_this.props.size], !!flyoutSizes$2[_this.props.size]));
    }, _temp), _possibleConstructorReturn$1$8(_this, _ret);
  }

  _createClass$1$8(Flyout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isOpen = this.state.isOpen;

      if (isOpen) {
        document.addEventListener('click', this.handleOutsideClick, false);
      }

      this.props.triggerClose(this.closeFlyout);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.open !== prevProps.open) {
        this.setState({ isOpen: !prevProps.open });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          trigger = _props.trigger,
          hasPadding = _props.hasPadding,
          children = _props.children,
          qa = _props.qa;
      var open = this.state.open;

      var flyoutClass = this.getClassNames();
      return trigger && React.createElement('div', { className: flyoutClass, ref: this.flyoutRef, 'aria-haspopup': 'true', 'aria-expanded': open, 'data-qa': qa }, React.createElement('div', { onClick: this.toggleIsOpen }, this.props.trigger), React.createElement(FlyoutContent$3, { hasPadding: hasPadding }, children));
    }
  }]);

  return Flyout;
}(Component);

Flyout$1.defaultProps = {
  direction: 'left',
  size: 'medium',
  hasPadding: false,
  open: false,
  onStateChange: function onStateChange() {},
  triggerClose: function triggerClose() {},
  scrollable: false
};

var ENV_IDENTIFIERS$1 = {
  dev: '-o.',
  acc: '-a.',
  local: 'local'
};

function getEnvironment$1() {
  if (typeof window === 'undefined') {
    return process.env.NODE_ENV;
  }

  var currentUrl = window.location.href;

  var env = Object.keys(ENV_IDENTIFIERS$1).find(function (key) {
    return currentUrl.includes(ENV_IDENTIFIERS$1[key]);
  });

  return env || 'prod';
}

function getAstadUrl$1() {
  switch (getEnvironment$1().toLowerCase()) {
    case 'local':
      return 'https://www.dev.dcs.antwerpen.be';
    case 'dev':
      return 'https://www.dev.dcs.antwerpen.be';
    case 'acc':
      return 'https://www.acc.dcs.antwerpen.be';
    default:
      return 'https://www.antwerpen.be';
  }
}

function getShoppingCartUrl$1() {
  switch (getEnvironment$1().toLowerCase()) {
    case 'local':
      return 'https://winkelmand-o.antwerpen.be';
    case 'dev':
      return 'https://winkelmand-o.antwerpen.be';
    case 'acc':
      return 'https://winkelmand-a.antwerpen.be';
    default:
      return 'https://winkelmand.antwerpen.be';
  }
}

function getEloketUrl$1() {
  switch (getEnvironment$1().toLowerCase()) {
    case 'local':
      return 'https://eloket-o.antwerpen.be';
    case 'dev':
      return 'https://eloket-o.antwerpen.be';
    case 'acc':
      return 'https://eloket-a.antwerpen.be';
    default:
      return 'https://eloket.antwerpen.be';
  }
}

var Environment$1 = {
  getEnvironment: getEnvironment$1,
  getAstadUrl: getAstadUrl$1,
  getShoppingCartUrl: getShoppingCartUrl$1,
  getEloketUrl: getEloketUrl$1
};

var notificationsUrl = function notificationsUrl() {
  return Environment$1.getAstadUrl() + '/nl/voorkeuren/notificaties';
};
var aProfileUrl = function aProfileUrl() {
  return Environment$1.getAstadUrl() + '/nl/voorkeuren/profiel';
};
var favoritesUrl = function favoritesUrl() {
  return Environment$1.getAstadUrl() + '/nl/overzicht';
};
var linkingUrl = function linkingUrl() {
  return Environment$1.getAstadUrl() + '/nl/voorkeuren/koppelingen';
};
var myEloketUrl = function myEloketUrl() {
  return Environment$1.getEloketUrl() + '/nl/eloket/mijnloket/context/burger/aanvragen';
};

var UserNavigation = function UserNavigation(props) {
  var children = props.children,
      _props$notificationsC = props.notificationsCount,
      notificationsCount = _props$notificationsC === undefined ? '' : _props$notificationsC;

  return React.createElement('ul', { className: 'm-nav-list m-nav-list--left' }, React.createElement('li', null, React.createElement('a', { href: notificationsUrl(), title: 'Notificaties', alt: 'Klik hier om uw notificaties te bekijken.' }, 'Notificaties', notificationsCount > 0 && React.createElement('span', null, ' (', notificationsCount, ')'))), React.createElement('li', null, React.createElement('a', { href: aProfileUrl(), title: 'A-profiel beheren', alt: 'Hier krijgt u toegang tot uw A-profiel en uw persoonlijke instellingen.' }, 'A-profiel beheren')), React.createElement('li', null, React.createElement('a', { href: favoritesUrl(), title: 'Favorieten', alt: 'Klik hier om uw favorieten te bekijken.' }, 'Favorieten')), React.createElement('li', null, React.createElement('a', { href: linkingUrl(), title: 'Koppelingen', alt: 'Klik hier om uw eID, A-kaart en meer te koppelen.' }, 'Koppelingen')), React.createElement('li', null, React.createElement('a', { href: myEloketUrl(), title: 'Mijn e-loket', alt: 'Mijn e-loket' }, 'Mijn e-loket')), children);
};

___$insertStyle$2(".m-user-menu-flyout {\n  display: inline-block;\n  position: relative;\n}\n.m-user-menu-flyout .a-avatar-wrapper {\n  align-items: center;\n  display: flex;\n}\n.m-user-menu-flyout .a-button__avatar {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n.m-user-menu-flyout .a-badge {\n  bottom: -0.5625rem;\n  left: 1.5rem;\n  position: absolute;\n  transform: translateX(-50%);\n  z-index: 10;\n}");

var _createClass$2$4 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$2$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$2$4(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var UserMenu = function (_Component) {
  _inherits$2$4(UserMenu, _Component);

  function UserMenu() {
    _classCallCheck$2$4(this, UserMenu);

    return _possibleConstructorReturn$2$4(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).apply(this, arguments));
  }

  _createClass$2$4(UserMenu, [{
    key: 'onLogin',
    value: function onLogin() {
      var _props = this.props,
          loginUrl = _props.loginUrl,
          onClickLogin = _props.onClickLogin;

      if (onClickLogin) {
        return onClickLogin();
      }

      window.location.href = loginUrl;
    }
  }, {
    key: 'onLogout',
    value: function onLogout() {
      var _props2 = this.props,
          logoutUrl = _props2.logoutUrl,
          onClickLogout = _props2.onClickLogout;

      if (onClickLogout) {
        return onClickLogout();
      }

      window.location.href = logoutUrl;
    }
  }, {
    key: 'renderAvatar',
    value: function renderAvatar() {
      var avatarUrl = this.props.user.avatarUrl;

      return React.createElement(Avatar$1, {
        image: avatarUrl,
        icon: avatarUrl ? null : 'user',
        alt: 'avatar',
        width: '48',
        height: '48',
        style: { marginLeft: '-1.5rem', marginRight: '1.5rem' }
      });
    }
  }, {
    key: 'renderBadge',
    value: function renderBadge() {
      var notificationsCount = this.props.notificationsCount;

      return React.createElement('a', {
        className: 'a-badge a-badge--warning',
        href: notificationsUrl() }, notificationsCount, React.createElement('span', { className: 'u-screen-reader-only', 'data-translate': '' }, ' notificaties'));
    }
  }, {
    key: 'renderLoggedInButton',
    value: function renderLoggedInButton() {
      var _props$user = this.props.user,
          firstName = _props$user.firstName,
          lastName = _props$user.lastName;

      return React.createElement(Button$7, { className: 'a-button-negative a-button__avatar o-header__button' }, React.createElement('div', { className: 'a-avatar-wrapper' }, this.renderAvatar(), React.createElement('p', null, firstName, '\xA0', lastName)));
    }
  }, {
    key: 'renderProfile',
    value: function renderProfile() {
      var _props$user2 = this.props.user,
          firstName = _props$user2.firstName,
          lastName = _props$user2.lastName,
          avatarUrl = _props$user2.avatarUrl;

      return React.createElement('div', { className: 'u-text-center u-margin-top' }, React.createElement(Avatar$1, {
        image: avatarUrl,
        icon: avatarUrl ? null : 'user',
        alt: 'avatar',
        width: '48',
        height: '48'
      }), React.createElement('p', { className: 'u-margin-top-xs u-margin-bottom h5' }, firstName + ' ' + lastName));
    }
  }, {
    key: 'renderLoggedIn',
    value: function renderLoggedIn() {
      var _this2 = this;

      var _props3 = this.props,
          children = _props3.children,
          flyoutSize = _props3.flyoutSize,
          notificationsCount = _props3.notificationsCount,
          ariaLogout = _props3.ariaLogout;

      return React.createElement('div', { className: 'm-user-menu-flyout' }, notificationsCount > 0 && this.renderBadge(), React.createElement(Flyout$1, {
        trigger: this.renderLoggedInButton(),
        direction: 'right',
        hasPadding: false,
        size: flyoutSize }, React.createElement('div', { className: 'u-margin' }, this.renderProfile(), !this.props.hideExternalLinks && React.createElement(UserNavigation, { notificationsCount: notificationsCount, children: children }), React.createElement(Button$7, {
        className: 'u-margin-top',
        onClick: function onClick(e) {
          return _this2.onLogout();
        },
        block: true,
        type: 'danger',
        iconLeft: 'power-off' }, ariaLogout))));
    }
  }, {
    key: 'renderLoggedOut',
    value: function renderLoggedOut() {
      var _this3 = this;

      var _props4 = this.props,
          children = _props4.children,
          flyoutSize = _props4.flyoutSize,
          notificationsCount = _props4.notificationsCount,
          ariaLogin = _props4.ariaLogin;

      return React.createElement(Button$7, {
        className: 'a-button-negative o-header__button',
        onClick: function onClick(e) {
          return _this3.onLogin();
        },
        iconLeft: 'user' }, ariaLogin);
    }
  }, {
    key: 'render',
    value: function render() {
      var qa = this.props.qa;

      return React.createElement('div', { style: { textAlign: this.props.direction }, 'data-qa': qa }, this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut());
    }
  }]);

  return UserMenu;
}(Component);

UserMenu.defaultProps = {
  direction: 'right',
  flyoutSize: 'small',
  notificationsCount: 0,
  ariaLogin: 'Aanmelden',
  ariaLogout: 'Afmelden'
};

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      qa = _ref.qa;
  return React.createElement("div", { className: "m-accordion", "data-qa": qa }, children);
};

Accordion.defaultProps = {
  children: null
};

var _createClass$l = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$l(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$k(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$k(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var AccordionTab = function (_React$Component) {
  _inherits$k(AccordionTab, _React$Component);

  function AccordionTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$l(this, AccordionTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$k(this, (_ref = AccordionTab.__proto__ || Object.getPrototypeOf(AccordionTab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: _this.props.open
    }, _temp), _possibleConstructorReturn$k(_this, _ret);
  }

  _createClass$l(AccordionTab, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.open !== prevProps.open) {
        this.setState({ isOpen: this.props.open });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(e) {
      if (this.props.toggle) return this.props.toggle(e);
      var isOpen = this.state.isOpen;

      this.setState({
        isOpen: !isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          qa = _props.qa;
      var isOpen = this.state.isOpen;

      return React.createElement('div', {
        role: 'button',
        tabIndex: '0',
        'data-qa': qa,
        onKeyPress: function onKeyPress(e) {
          return _this2.toggle(e);
        },
        onClick: function onClick(e) {
          return _this2.toggle(e);
        },
        className: classNames('m-accordion__tab', { 'is-open': isOpen })
      }, children);
    }
  }]);

  return AccordionTab;
}(React.Component);

AccordionTab.defaultProps = {
  open: false
};

var AccordionTabContent = function AccordionTabContent(_ref) {
  var children = _ref.children,
      qa = _ref.qa;
  return React.createElement("div", { className: "m-accordion__content", "data-qa": qa }, React.createElement("div", { className: "u-margin" }, children));
};

var AccordionTabHeader = function AccordionTabHeader(_ref) {
  var children = _ref.children,
      qa = _ref.qa;
  return React.createElement("div", { className: "m-accordion__header", "data-qa": qa }, children);
};

function _objectWithoutProperties$5(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

var Link$2 = function Link(_ref) {
    var component = _ref.component,
        children = _ref.children,
        props = _objectWithoutProperties$5(_ref, ['component', 'children']);

    return createElement(component, props, children);
};

Link$2.defaultProps = { component: 'a' };

var Icon$e = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$m = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$g(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$m(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$l(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$l(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$a = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$b = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$8 = function (_Component) {
  _inherits$l(Button, _Component);

  function Button() {
    _classCallCheck$m(this, Button);

    return _possibleConstructorReturn$l(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$m(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$g(_classNames, '' + typeClasses$b[type], !!type), _defineProperty$g(_classNames, '' + sizeClasses$a[size], !!size), _defineProperty$g(_classNames, 'has-icon', !!icon), _defineProperty$g(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$g(_classNames, 'has-icon-right', !!iconRight), _defineProperty$g(_classNames, 'a-button-negative', !!negative), _defineProperty$g(_classNames, 'a-button-outline', !!outline), _defineProperty$g(_classNames, 'a-button-transparent', !!transparent), _defineProperty$g(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$e, { name: icon }) : null, iconLeft ? React.createElement(Icon$e, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$e, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

var _extends$6 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass$1$9 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$1$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1$9(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var sizes = {
  normal: '',
  large: 'm-modal--large'
};

var Modal = function (_React$Component) {
  _inherits$1$9(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck$1$9(this, Modal);

    var _this = _possibleConstructorReturn$1$9(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      showModal: false
    };

    _this.handleToggleModal = _this.handleToggleModal.bind(_this);
    _this.handleConfirm = _this.handleConfirm.bind(_this);
    _this.handleDeny = _this.handleDeny.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);

    var appElement = props.appElement,
        ariaHideApp = props.ariaHideApp;

    if (!Modal.appElement && ariaHideApp) {
      Modal.appElement = appElement;

      ReactModal.setAppElement(appElement);
    }
    return _this;
  }

  _createClass$1$9(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var openOnInit = this.props.openOnInit;

      this.handleToggleModal(!!openOnInit);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var showModal = this.state.showModal;
      var onAfterOpen = this.props.onAfterOpen;

      if (showModal) {
        Promise.resolve(onAfterOpen());
      }
    }
  }, {
    key: 'handleToggleModal',
    value: function handleToggleModal(show) {
      var showModal = this.state.showModal;

      this.setState({
        showModal: show !== undefined ? show : !showModal
      });
    }
  }, {
    key: 'handleConfirm',
    value: function handleConfirm() {
      var _this2 = this;

      var onConfirm = this.props.onConfirm;

      Promise.resolve(onConfirm()).then(function () {
        return _this2.handleToggleModal(false);
      });
    }
  }, {
    key: 'handleDeny',
    value: function handleDeny() {
      var _this3 = this;

      var onDeny = this.props.onDeny;

      Promise.resolve(onDeny()).then(function () {
        return _this3.handleToggleModal(false);
      });
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose() {
      var _this4 = this;

      var onRequestClose = this.props.onRequestClose;

      Promise.resolve(onRequestClose()).then(function () {
        return _this4.handleToggleModal(false);
      });
    }
  }, {
    key: 'addProps',
    value: function addProps(Comp, props) {
      return React.createElement(Comp.type, _extends$6({}, Comp.props, props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var showModal = this.state.showModal;
      var _props = this.props,
          appElement = _props.appElement,
          children = _props.children,
          onRequestClose = _props.onRequestClose,
          title = _props.title,
          hasCloseButton = _props.hasCloseButton,
          confirmText = _props.confirmText,
          denyText = _props.denyText,
          className = _props.className,
          overlayClassName = _props.overlayClassName,
          triggerElm = _props.triggerElm,
          triggerText = _props.triggerText,
          size = _props.size,
          ariaHideApp = _props.ariaHideApp,
          onConfirm = _props.onConfirm,
          onDeny = _props.onDeny,
          onAfterOpen = _props.onAfterOpen,
          openOnInit = _props.openOnInit,
          qa = _props.qa;

      var modalTrigger = triggerElm ? this.addProps(triggerElm, {
        onClick: function onClick() {
          return _this5.handleToggleModal(true);
        }
      }) : React.createElement(Button$8, { type: 'primary', onClick: function onClick() {
          return _this5.handleToggleModal(true);
        } }, triggerText);

      var sizeClass = sizes[size];

      return React.createElement('div', null, modalTrigger, React.createElement(ReactModal, {
        bodyOpenClassName: 'u-modal-open',
        htmlOpenClassName: 'u-modal-open',
        isOpen: showModal,
        onRequestClose: this.handleRequestClose,
        role: 'dialog',
        'aria-modal': 'true',
        className: classNames('m-modal', sizeClass, className),
        overlayClassName: classNames('m-overlay', 'is-active', overlayClassName),
        'data-qa': qa,
        ariaHideApp: ariaHideApp,
        onConfirm: onConfirm,
        onDeny: onDeny,
        onAfterOpen: onAfterOpen,
        openOnInit: openOnInit
      }, React.createElement('div', { className: 'm-modal__content' }, (title || hasCloseButton) && React.createElement('div', { className: 'm-modal__header u-margin-bottom-xs' }, title && React.createElement('h6', null, title), hasCloseButton && React.createElement(Button$8, { className: 'm-modal__close', icon: 'times', type: 'default', transparent: true, onClick: function onClick() {
          return _this5.handleRequestClose();
        } })), children && React.createElement('div', { className: 'u-margin-bottom' }, children), (confirmText || denyText) && React.createElement('div', { className: 'm-modal__footer' }, confirmText && React.createElement(Button$8, { className: 'm-modal__confirm', onClick: this.handleConfirm }, confirmText), denyText && React.createElement(Button$8, { className: 'm-modal__deny', outline: true, onClick: this.handleDeny }, denyText)))));
    }
  }]);

  return Modal;
}(React.Component);

Modal.defaultProps = {
  appElement: '#root',
  ariaHideApp: true,

  hasCloseButton: true,
  title: '',

  confirmText: 'Yes',
  denyText: 'No',
  triggerElm: null,
  triggerText: 'Open',

  className: '',
  overlayClassName: '',
  size: 'normal',

  onConfirm: function onConfirm() {},
  onDeny: function onDeny() {},
  onRequestClose: function onRequestClose() {},
  onAfterOpen: function onAfterOpen() {},

  openOnInit: false
};

function ___$insertStyle$3(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

var ContentBlock = function ContentBlock(_ref) {
  var children = _ref.children,
      _ref$xs = _ref.xs,
      xs = _ref$xs === undefined ? 12 : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === undefined ? 4 : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === undefined ? 4 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === undefined ? 4 : _ref$lg;

  return React.createElement('div', { className: 'col-xs-' + xs + ' col-sm-' + sm + ' col-md-' + md + ' col-lg-' + lg }, children);
};

var NavBlock = function NavBlock(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      children = _ref.children;

  return React.createElement('div', null, React.createElement('h5', { className: 'u-margin-top-xs u-margin-bottom-xs' }, title), React.createElement('ul', { className: 'a-list a-list--lined has-icon-right' }, children));
};

var _typeof$5 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};

var Icon$f = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var _createClass$n = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _defineProperty$h(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck$n(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$m(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof$5(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$m(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof$5(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var sizeClasses$b = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large'
};
var typeClasses$c = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent',
  default: 'a-button--default'
};

var Button$9 = function (_Component) {
  _inherits$m(Button, _Component);

  function Button() {
    _classCallCheck$n(this, Button);

    return _possibleConstructorReturn$m(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass$n(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          id = _props.id,
          negative = _props.negative,
          outline = _props.outline,
          transparent = _props.transparent,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          iconLeft = _props.iconLeft,
          iconRight = _props.iconRight,
          onClick = _props.onClick,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$ariaLabel = _props.ariaLabel,
          ariaLabel = _props$ariaLabel === undefined ? '' : _props$ariaLabel,
          _props$alt = _props.alt,
          alt = _props$alt === undefined ? '' : _props$alt,
          type = _props.type,
          size = _props.size,
          _props$block = _props.block,
          block = _props$block === undefined ? false : _props$block,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          htmlType = _props.htmlType,
          qa = _props.qa;

      var btnClass = classNames(className, (_classNames = {
        'a-button': !outline && !negative && !(type === 'default' && !!transparent)
      }, _defineProperty$h(_classNames, '' + typeClasses$c[type], !!type), _defineProperty$h(_classNames, '' + sizeClasses$b[size], !!size), _defineProperty$h(_classNames, 'has-icon', !!icon), _defineProperty$h(_classNames, 'has-icon-left', !!iconLeft), _defineProperty$h(_classNames, 'has-icon-right', !!iconRight), _defineProperty$h(_classNames, 'a-button-negative', !!negative), _defineProperty$h(_classNames, 'a-button-outline', !!outline), _defineProperty$h(_classNames, 'a-button-transparent', !!transparent), _defineProperty$h(_classNames, 'a-button--block', block), _classNames));

      return React.createElement('button', {
        id: id,
        className: btnClass,
        title: title || '',
        onClick: onClick,
        style: style,
        alt: alt,
        disabled: disabled,
        type: htmlType,
        'aria-label': ariaLabel,
        'data-qa': qa }, icon ? React.createElement(Icon$f, { name: icon }) : null, iconLeft ? React.createElement(Icon$f, { name: iconLeft }) : null, iconRight ? React.createElement(Icon$f, { name: iconRight }) : null, children);
    }
  }]);

  return Button;
}(Component);

function redirect(url) {
  window.location.href = url;
}

var ButtonBlock = function ButtonBlock(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$buttonTitle = _ref.buttonTitle,
      buttonTitle = _ref$buttonTitle === undefined ? '' : _ref$buttonTitle,
      _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? '' : _ref$icon,
      children = _ref.children;

  return React.createElement('div', { className: 'u-margin-bottom' }, React.createElement('h5', { className: 'u-margin-top-xs u-margin-bottom' }, title), React.createElement(Button$9, { type: 'primary', role: 'link', title: buttonTitle, onClick: function onClick() {
      return redirect(url);
    }, iconLeft: icon }, children));
};

var Icon$1$3 = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

var generateSocialLinkFor = function generateSocialLinkFor(_ref) {
  var name = _ref.name,
      handle = _ref.handle;

  if (handle === '') {
    return null;
  }
  return React.createElement('a', {
    href: handle,
    className: 'a-button a-button--' + name + ' has-icon u-margin-right-xs',
    target: '_blank',
    title: name,
    'aria-label': name,
    rel: 'external noopener noreferrer' }, React.createElement(Icon$1$3, { name: name }));
};

var SocialBlock = function SocialBlock(_ref2) {
  var title = _ref2.title,
      _ref2$facebook = _ref2.facebook,
      facebook = _ref2$facebook === undefined ? '' : _ref2$facebook,
      _ref2$twitter = _ref2.twitter,
      twitter = _ref2$twitter === undefined ? '' : _ref2$twitter,
      _ref2$instagram = _ref2.instagram,
      instagram = _ref2$instagram === undefined ? '' : _ref2$instagram,
      _ref2$linkedIn = _ref2.linkedIn,
      linkedIn = _ref2$linkedIn === undefined ? '' : _ref2$linkedIn;

  return React.createElement(React.Fragment, null, React.createElement('h5', { className: 'u-margin-bottom-xs' }, title), React.createElement('div', null, generateSocialLinkFor({ name: 'facebook', handle: facebook }), generateSocialLinkFor({ name: 'twitter', handle: twitter }), generateSocialLinkFor({ name: 'instagram', handle: instagram }), generateSocialLinkFor({ name: 'linkedin', handle: linkedIn })));
};

var ENV_IDENTIFIERS$2 = {
  dev: '-o.',
  acc: '-a.',
  local: 'local'
};

function getEnvironment$2() {
  if (typeof window === 'undefined') {
    return process.env.NODE_ENV;
  }

  var currentUrl = window.location.href;

  var env = Object.keys(ENV_IDENTIFIERS$2).find(function (key) {
    return currentUrl.includes(ENV_IDENTIFIERS$2[key]);
  });

  return env || 'prod';
}

function getAstadUrl$2() {
  switch (getEnvironment$2().toLowerCase()) {
    case 'local':
      return 'https://www.dev.dcs.antwerpen.be';
    case 'dev':
      return 'https://www.dev.dcs.antwerpen.be';
    case 'acc':
      return 'https://www.acc.dcs.antwerpen.be';
    default:
      return 'https://www.antwerpen.be';
  }
}

function getShoppingCartUrl$2() {
  switch (getEnvironment$2().toLowerCase()) {
    case 'local':
      return 'https://winkelmand-o.antwerpen.be';
    case 'dev':
      return 'https://winkelmand-o.antwerpen.be';
    case 'acc':
      return 'https://winkelmand-a.antwerpen.be';
    default:
      return 'https://winkelmand.antwerpen.be';
  }
}

function getEloketUrl$2() {
  switch (getEnvironment$2().toLowerCase()) {
    case 'local':
      return 'https://eloket-o.antwerpen.be';
    case 'dev':
      return 'https://eloket-o.antwerpen.be';
    case 'acc':
      return 'https://eloket-a.antwerpen.be';
    default:
      return 'https://eloket.antwerpen.be';
  }
}

var Environment$2 = {
  getEnvironment: getEnvironment$2,
  getAstadUrl: getAstadUrl$2,
  getShoppingCartUrl: getShoppingCartUrl$2,
  getEloketUrl: getEloketUrl$2
};

var AstadSubFooter = function AstadSubFooter() {
  return React.createElement(React.Fragment, null, React.createElement(ContentBlock, { xs: 12, sm: 4, md: 4 }, React.createElement(NavBlock, { title: 'Snel zelf regelen' }, React.createElement('li', null, React.createElement('a', { title: 'Vraag een document aan', href: Environment$2.getEloketUrl() + '/nl/eloket/overzicht' }, 'Documenten aanvragen ', React.createElement(Icon$1$3, { name: 'chevron-right' }))), React.createElement('li', null, React.createElement('a', { title: 'Meld een sluikstort', href: Environment$2.getEloketUrl() + '/nl/eloket/sluikstort' }, 'Sluikstort melden ', React.createElement(Icon$1$3, { name: 'chevron-right' }))), React.createElement('li', null, React.createElement('a', { title: 'Geef een adreswijziging door', href: Environment$2.getEloketUrl() + '/nl/eloket/aangifte-adreswijziging-nieuw' }, 'Adreswijziging doorgeven ', React.createElement(Icon$1$3, { name: 'chevron-right' }))), React.createElement('li', null, React.createElement('a', { title: 'Regel een parkeerverbod', href: Environment$2.getEloketUrl() + '/nl/e-loket/parkeerverbod' }, 'Parkeerverbod aanvragen ', React.createElement(Icon$1$3, { name: 'chevron-right' }))))), React.createElement(ContentBlock, { xs: 12, sm: 4, md: 4 }, React.createElement(NavBlock, { title: 'Dienstverlening' }, React.createElement('li', null, React.createElement('a', { title: 'Naar het e-loket', href: Environment$2.getEloketUrl() + '/nl/eloket/overzicht/' }, 'E-loket ', React.createElement(Icon$1$3, { name: 'chevron-right' }))), React.createElement('li', null, React.createElement('a', { title: 'Maak een afspraak', href: Environment$2.getEloketUrl() + '/nl/e-loket/afspraak-maken' }, 'Afspraak ', React.createElement(Icon$1$3, { name: 'chevron-right' }))), React.createElement('li', null, React.createElement('a', { title: 'Maak een melding', href: Environment$2.getEloketUrl() + '/nl/melden' }, 'Melding maken ', React.createElement(Icon$1$3, { name: 'chevron-right' }))), React.createElement('li', null, React.createElement('a', { title: 'Naar openingsuren', href: Environment$2.getAstadUrl() + '/nl/overzicht/adressen-en-openingsuren/stadsloketten' }, 'Openingsuren ', React.createElement(Icon$1$3, { name: 'chevron-right' }))))), React.createElement(ContentBlock, { xs: 12, sm: 4, md: 4 }, React.createElement(ButtonBlock, {
    title: 'Contact met stad Antwerpen',
    icon: 'envelope-o',
    buttonTitle: 'Overzicht contactmogelijkheden stad Antwerpen',
    url: Environment$2.getAstadUrl() + '/info/5360f244b1a8a76a088b45c4/contacteer-stad-antwerpen-voor-meer-info' }, 'Contacteer ons'), React.createElement(ButtonBlock, {
    title: 'Schrijf u in op onze nieuwsbrief',
    buttonTitle: 'Schrijf u in op de antwerpen.be-nieuwsbrief',
    url: Environment$2.getAstadUrl() + '/info/56cda8a3aba8a7f8158b4778' }, 'Antwerpen.be - nieuwsbrief'), React.createElement(SocialBlock, {
    title: 'Vind ons op',
    facebook: 'https://www.facebook.com/stad.antwerpen',
    twitter: 'https://twitter.com/Stad_Antwerpen',
    instagram: 'https://www.instagram.com/stad_antwerpen',
    linkedIn: 'https://www.linkedin.com/company/stad-antwerpen'
  })));
};

var StandardSubFooter = function StandardSubFooter(_ref) {
  var type = _ref.type;

  switch (type) {
    case 'antwerpen':
      return React.createElement(AstadSubFooter, null);
    default:
      return React.createElement(AstadSubFooter, null);
  }
};

___$insertStyle$3(".aui-footer {\n  flex: 1 0 auto;\n  width: 100%;\n  height: 100%;\n  background: #282020;\n  padding-top: 3rem;\n  padding-bottom: 2rem;\n}\n.aui-footer .a-list li {\n  padding: 0;\n}\n.aui-footer .a-list li a {\n  display: block;\n  padding: 1rem;\n}\n.aui-footer .a-list li a .fa {\n  font-size: 0.75rem;\n  float: right;\n}\n.aui-footer .a-list li a:hover {\n  background: rgba(255, 255, 255, 0.1);\n  text-decoration: none;\n}\n.aui-footer .a-list li a:hover .fa {\n  -ms-transform: scale(1.35) translateX(-3px);\n  transform: scale(1.35) translateX(-3px);\n}\n.aui-footer a {\n  color: #f3f3f3;\n}\n.aui-footer h3, .aui-footer h5 {\n  color: white;\n}");

var SubFooter = function SubFooter(_ref) {
  var type = _ref.type,
      children = _ref.children,
      qa = _ref.qa;

  if (type) {
    return React.createElement(StandardSubFooter, { type: type, 'data-qa': qa });
  }

  return React.createElement('div', { className: 'aui-footer', 'data-qa': qa }, React.createElement('div', { className: 'u-container' }, React.createElement('div', { className: 'row u-margin-bottom-xs' }, children)));
};

function ___$insertStyle$4(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

function _objectWithoutProperties$6(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var Link$3 = function Link(_ref) {
  var component = _ref.component,
      children = _ref.children,
      props = _objectWithoutProperties$6(_ref, ['component', 'children']);

  return createElement(component, props, children);
};

Link$3.defaultProps = { component: 'a' };

var Icon$g = function Icon(_ref) {
  var name = _ref.name,
      style = _ref.style,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      onClick = _ref.onClick,
      qa = _ref.qa;

  var iconClass = classNames(className, 'fa fa-' + name + ' ' + name);

  return React.createElement(React.Fragment, null, React.createElement('span', { className: iconClass, style: style, 'data-qa': qa, 'aria-hidden': 'true', onClick: onClick }), ariaLabel && React.createElement('span', { className: 'u-screen-reader-only' }, ariaLabel));
};

___$insertStyle$4(".pagination-box {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n\n.pagination-button {\n  padding: 0 !important;\n  line-height: auto;\n  width: 100%;\n}");

var _createClass$o = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck$o(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$n(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$n(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Pagination = function (_Component) {
  _inherits$n(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck$o(this, Pagination);

    var _this = _possibleConstructorReturn$n(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.onPrev = function (e) {
      e.preventDefault();
      var currentPage = _this.state.currentPage;

      if (currentPage > 1) {
        _this.onChange(currentPage - 1);
      }
      return false;
    };

    _this.onNext = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          currentPage = _this$state.currentPage,
          totalPages = _this$state.totalPages;

      if (currentPage < totalPages) {
        _this.onChange(currentPage + 1);
      }
      return false;
    };

    _this.state = _this.setValues();
    return _this;
  }

  _createClass$o(Pagination, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.currentPage !== this.props.currentPage || prevProps.itemsPerPage !== this.props.itemsPerPage || prevProps.totalValues !== this.props.totalValues) {
        this.setState(this.setValues);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(i, e) {
      if (e) {
        e.preventDefault();
      }
      var onUpdate = this.props.onUpdate;

      var parsedValue = parseInt(i, 10); // input from numbers array is a string
      if (parsedValue && onUpdate) {
        onUpdate(parsedValue);
      }

      return false;
    }
  }, {
    key: 'setValues',
    value: function setValues() {
      var _props = this.props,
          totalValues = _props.totalValues,
          itemsPerPage = _props.itemsPerPage,
          currentPage = _props.currentPage;

      var _currentPage = 0;
      var _numbers = 0;
      var _totalPages = 0;

      if (totalValues && itemsPerPage) {
        _currentPage = Number(currentPage);

        _totalPages = Math.ceil(totalValues / itemsPerPage);

        var generateNumbers = Array(_totalPages).fill('').map(function (e, i) {
          return String(i + 1);
        });

        if (generateNumbers.length < 8) {
          return {
            numbers: generateNumbers,
            totalPages: _totalPages,
            currentPage: _currentPage
          };
        }

        if (_currentPage < 5) {
          _numbers = generateNumbers.slice(0, 5);
        } else if (_currentPage > _totalPages - 4) {
          _numbers = generateNumbers.slice(_totalPages - 5);
        } else {
          _numbers = generateNumbers.slice(_currentPage - 2, _currentPage + 1);
        }

        // First page
        if (_numbers.indexOf('1') === -1) {
          _numbers.unshift('1');
        }

        // Last Page
        if (_numbers.indexOf(String(_totalPages)) === -1) {
          _numbers.push(String(_totalPages));
        }

        // Add dots at the beginning
        if (_numbers.indexOf('2') === -1) {
          _numbers.splice(1, 0, '...');
        }

        // Add dots at the end
        if (_numbers.indexOf(String(_totalPages - 1)) === -1) {
          _numbers.splice(_numbers.length - 1, 0, '...');
        }
      }

      return {
        numbers: _numbers,
        totalPages: _totalPages,
        currentPage: _currentPage
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          styling = _props2.styling,
          display = _props2.display,
          _props2$ariaLabel = _props2.ariaLabel,
          ariaLabel = _props2$ariaLabel === undefined ? 'Paginering' : _props2$ariaLabel,
          _props2$ariaLabelNext = _props2.ariaLabelNextPage,
          ariaLabelNextPage = _props2$ariaLabelNext === undefined ? 'Volgende pagina' : _props2$ariaLabelNext,
          _props2$ariaLabelPrev = _props2.ariaLabelPreviousPage,
          ariaLabelPreviousPage = _props2$ariaLabelPrev === undefined ? 'Vorige pagina' : _props2$ariaLabelPrev,
          _props2$ariaLabelPage = _props2.ariaLabelPage,
          ariaLabelPage = _props2$ariaLabelPage === undefined ? 'Pagina' : _props2$ariaLabelPage,
          qa = _props2.qa;
      // we render this, so it must be capitalized

      var _state = this.state,
          numbers = _state.numbers,
          currentPage = _state.currentPage,
          totalPages = _state.totalPages;

      var paginationClasses = classNames('m-pagination', styling);
      var previousDisabledClasses = classNames('pagination-button', 'pagination-prev-page', {
        'is-disabled': currentPage <= 1
      });
      var nextDisabledClasses = classNames('pagination-button', 'pagination-next-page', {
        'is-disabled': currentPage >= totalPages
      });

      if (totalPages < 1) {
        return null;
      }

      return React.createElement('nav', { role: 'navigation', 'aria-label': ariaLabel, 'data-qa': qa }, React.createElement('ul', { className: paginationClasses }, React.createElement('li', { className: 'm-pagination__prev pagination-button', key: 'pagination__prev' }, React.createElement(Link$3, {
        className: previousDisabledClasses,
        href: currentPage > 1 ? '#' : null,
        onClick: function onClick(e) {
          return _this2.onPrev(e);
        },
        'aria-label': ariaLabelPreviousPage
      }, React.createElement(Icon$g, { name: 'angle-left', ariaLabel: ariaLabelPreviousPage }))), display === 'text' && React.createElement('li', { className: 'm-pagination__label', key: 'pagination__label' }, currentPage + ' - ' + totalPages), display === 'numbers' && numbers.map(function (number, i) {
        if (number === '...') {
          return React.createElement('li', { key: i }, '...');
        } else {
          return React.createElement('li', { key: i }, React.createElement(Link$3, {
            className: classNames({ 'is-active': number === '' + currentPage }, 'pagination-button', 'pagination-button-' + i),
            href: '#',
            onClick: function onClick(e) {
              return _this2.onChange(number, e);
            },
            'aria-label': ariaLabelPage + ' ' + number,
            'aria-current': number === '' + currentPage ? 'page' : null
          }, number));
        }
      }), React.createElement('li', { className: 'm-pagination__next pagination-button', key: 'pagination__next' }, React.createElement(Link$3, {
        className: nextDisabledClasses,
        href: currentPage < totalPages ? '#' : null,
        onClick: function onClick(e) {
          return _this2.onNext(e);
        },
        'aria-label': ariaLabelNextPage
      }, React.createElement(Icon$g, { name: 'angle-right', ariaLabel: ariaLabelNextPage })))));
    }
  }]);

  return Pagination;
}(Component);

Pagination.defaultProps = {
  currentPage: 1,
  styling: 'basic',
  display: 'numbers'
};

var ENV_IDENTIFIERS$3 = {
	dev: '-o.',
	acc: '-a.',
	local: 'local'
};

function getEnvironment$3() {
	if (typeof window === 'undefined') {
		return process.env.NODE_ENV;
	}

	var currentUrl = window.location.href;

	var env = Object.keys(ENV_IDENTIFIERS$3).find(function (key) {
		return currentUrl.includes(ENV_IDENTIFIERS$3[key]);
	});

	return env || 'prod';
}

function getAstadUrl$3() {
	switch (getEnvironment$3().toLowerCase()) {
		case 'local':
			return 'https://www.dev.dcs.antwerpen.be';
		case 'dev':
			return 'https://www.dev.dcs.antwerpen.be';
		case 'acc':
			return 'https://www.acc.dcs.antwerpen.be';
		default:
			return 'https://www.antwerpen.be';
	}
}

function getShoppingCartUrl$3() {
	switch (getEnvironment$3().toLowerCase()) {
		case 'local':
			return 'https://winkelmand-o.antwerpen.be';
		case 'dev':
			return 'https://winkelmand-o.antwerpen.be';
		case 'acc':
			return 'https://winkelmand-a.antwerpen.be';
		default:
			return 'https://winkelmand.antwerpen.be';
	}
}

function getEloketUrl$3() {
	switch (getEnvironment$3().toLowerCase()) {
		case 'local':
			return 'https://eloket-o.antwerpen.be';
		case 'dev':
			return 'https://eloket-o.antwerpen.be';
		case 'acc':
			return 'https://eloket-a.antwerpen.be';
		default:
			return 'https://eloket.antwerpen.be';
	}
}

var Environment$3 = {
	getEnvironment: getEnvironment$3,
	getAstadUrl: getAstadUrl$3,
	getShoppingCartUrl: getShoppingCartUrl$3,
	getEloketUrl: getEloketUrl$3
};

export { Accordion, AccordionTab, AccordionTabContent, AccordionTabHeader, Alert, Autocomplete, Avatar, Badge, Breadcrumbs, Button$2 as Button, ButtonBlock, ButtonGroup, Calendar$1 as Calendar, Card, CardActions, CardBody, CardDescription, CardHeader, CardIcon, CardImage, CardTitle, Checkbox, Contact$1 as Contact, Content, ContentBlock, Datepicker, Environment$3 as Environment, Fieldset, Flyout, FlyoutButton, Footer, Form, Header, Hero, Icon$a as Icon, InputLabel$1 as InputLabel, Label, Link$2 as Link, Modal, NavBlock, Pagination, RadioGroup, Select, Slider, SocialBlock, Spinner$1 as Spinner, Step, Steps, SubFooter, Switch, Tabs, TagList$1 as TagList, TagListItem$1 as TagListItem, TelephoneNumber, TextField$1 as TextField, Textarea, Toggle, UserMenu };
