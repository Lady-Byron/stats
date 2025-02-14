/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('justoverclock/stats', function () {
  console.log('[justoverclock/stats] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/components/EditModal/EditModal.tsx":
/*!******************************************************!*\
  !*** ./src/forum/components/EditModal/EditModal.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);




var EditModal = /*#__PURE__*/function (_Modal) {
  function EditModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Modal.call.apply(_Modal, [this].concat(args)) || this;
    _this.value = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_2___default()('');
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditModal, _Modal);
  var _proto = EditModal.prototype;
  _proto.className = function className() {
    return 'stat-modal-edit';
  };
  _proto.title = function title() {
    return "" + this.attrs.baseStat.attributes.name;
  };
  _proto.content = function content() {
    var _this2 = this;
    var statName = this.attrs.baseStat.attributes.name;
    var username = this.attrs.user.displayName();
    return m("div", {
      className: "edit-stat-modal-container"
    }, m("h3", null, "Set \"", statName, "\" for ", username), m("input", {
      className: "FormControl",
      name: statName,
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('justoverclock-stats.forum.editStatInputPlaceholder'),
      type: "text",
      oninput: function oninput(e) {
        return _this2.value(e.target.value);
      }
    }), m("button", {
      onclick: function onclick(e) {
        e.preventDefault();
        _this2.attrs.editUserStat(_this2.attrs.stat.id, _this2.value());
        _this2.hide();
      },
      className: "Button Button--primary"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('justoverclock-stats.forum.save')));
  };
  return EditModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/SingleUserStat.tsx":
/*!*************************************************!*\
  !*** ./src/forum/components/SingleUserStat.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SingleUserStat)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);



var SingleUserStat = /*#__PURE__*/function (_Component) {
  function SingleUserStat() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SingleUserStat, _Component);
  var _proto = SingleUserStat.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.view = function view(vnode) {
    var _this = this;
    return m("div", {
      className: "stat",
      onclick: function onclick() {
        _this.attrs.onclick ? _this.attrs.onclick() : null;
      }
    }, m("div", {
      className: "stat-value"
    }, m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
      text: this.attrs.name
    }, m("img", {
      src: this.attrs.img,
      alt: this.attrs.alt
    })), m("p", {
      className: "stat-desc"
    }, this.attrs.name), m("p", {
      "class": "statvalue"
    }, this.attrs.value)));
  };
  return SingleUserStat;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/StatsModal/StatsModal.tsx":
/*!********************************************************!*\
  !*** ./src/forum/components/StatsModal/StatsModal.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatsModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserStats */ "./src/forum/components/UserStats.tsx");

// @ts-nocheck


var StatsModal = /*#__PURE__*/function (_Modal) {
  function StatsModal() {
    return _Modal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StatsModal, _Modal);
  var _proto = StatsModal.prototype;
  _proto.className = function className() {
    return 'stats-modal';
  };
  _proto.title = function title() {
    return "";
  };
  _proto.content = function content() {
    return m("div", {
      className: "edit-stat-modal-container"
    }, m(_UserStats__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: this.attrs.user
    }));
  };
  return StatsModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/UserStats.tsx":
/*!********************************************!*\
  !*** ./src/forum/components/UserStats.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserStats)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditModal_EditModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditModal/EditModal */ "./src/forum/components/EditModal/EditModal.tsx");
/* harmony import */ var _SingleUserStat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleUserStat */ "./src/forum/components/SingleUserStat.tsx");

// @ts-nocheck




var UserStats = /*#__PURE__*/function (_Component) {
  function UserStats() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.userStat = null;
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserStats, _Component);
  var _proto = UserStats.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.userStat = null;
    this.getUserStat();
  };
  _proto.view = function view(vnode) {
    var _data$attributes$mone,
      _data$attributes$stor,
      _data$attributes,
      _this2 = this;
    if (!this.userStat) {
      return m("div", null);
    }
    var data = this.attrs.user.data;
    var moneyName = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-stats.forum.moneyName');
    var storiesName = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-stats.forum.storyCount');
    var userMoney = (_data$attributes$mone = data.attributes.money) != null ? _data$attributes$mone : 0;
    var userStoriesCount = (_data$attributes$stor = data.attributes.storyCount) != null ? _data$attributes$stor : 0;
    var moneyImg = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') + "/assets/extensions/justoverclock-stats/money1.png";
    var storiesImg = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('baseUrl') + "/assets/extensions/justoverclock-stats/storiespng.png";
    var canEditStats = (_data$attributes = data.attributes) == null ? void 0 : _data$attributes.canEditStats;
    return m("div", {
      className: "show-stats-wrapper"
    }, m("div", {
      className: "user-stats-fe show-stats-container"
    }, m(_SingleUserStat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: moneyName,
      img: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('justoverclock-stats.moneyImg') || moneyImg,
      alt: moneyName,
      value: userMoney
    }), m(_SingleUserStat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: storiesName,
      img: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('justoverclock-stats.storiesImg') || storiesImg,
      alt: storiesName,
      value: userStoriesCount
    }), this.userStat.data && this.userStat.data.map(function (stat) {
      var baseStat = _this2.userStat && _this2.userStat.included.find(function (baseStat) {
        return baseStat.id.toString() === stat.attributes.baseStatId.toString();
      });
      var imgPath = baseStat ? baseStat.attributes.img : "";
      return m(_SingleUserStat__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: baseStat == null ? void 0 : baseStat.attributes.name,
        img: imgPath,
        alt: baseStat == null ? void 0 : baseStat.attributes.name,
        value: stat.attributes.value,
        onclick: function onclick() {
          canEditStats ? _this2.openEditModal(stat, baseStat, _this2.attrs.user) : null;
        }
      });
    })));
  };
  _proto.openEditModal = function openEditModal(stat, baseStat, user) {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show(_EditModal_EditModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      stat: stat,
      baseStat: baseStat,
      user: user,
      editUserStat: this.editUserStat.bind(this)
    });
  };
  _proto.editUserStat = function editUserStat(id, newValue) {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'PATCH',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + "/user-stats/" + id,
      body: {
        data: {
          attributes: {
            value: Number(newValue)
          }
        }
      }
    }).then(function () {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().alerts.show({
        type: 'success'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('justoverclock-stats.forum.successStatEdited'));
    });
  };
  _proto.getUserStat = function getUserStat() {
    var _this3 = this;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'GET',
      url: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + "/user-stats/" + this.attrs.user.data.id
    }).then(function (res) {
      _this3.userStat = res;
      m.redraw();
    });
  };
  return UserStats;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/UserStatsPopover.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/UserStatsPopover.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserStatsPopover)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StatsModal_StatsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatsModal/StatsModal */ "./src/forum/components/StatsModal/StatsModal.tsx");

// @ts-nocheck



var UserStatsPopover = /*#__PURE__*/function (_Component) {
  function UserStatsPopover() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserStatsPopover, _Component);
  var _proto = UserStatsPopover.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
  };
  _proto.openModal = function openModal() {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show(_StatsModal_StatsModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: this.attrs.user
    });
  };
  _proto.view = function view(vnode) {
    var _this = this;
    return m("div", {
      className: "stats-btn-popover"
    }, m("div", {
      className: "stats-svg",
      onclick: function onclick() {
        return _this.openModal();
      }
    }, m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      id: "statistic"
    }, m("path", {
      fill: "#4D698E",
      d: "M29,10V22a5.021,5.021,0,0,1-.3,1.7,5.084,5.084,0,0,1-1.99,2.51A5,5,0,0,1,24,27H8a5,5,0,0,1-5-5V10a5,5,0,0,1,.79-2.71A5.084,5.084,0,0,1,6.3,5.3,5.021,5.021,0,0,1,8,5H24A5,5,0,0,1,29,10Z"
    }), m("path", {
      fill: "#4D698E",
      d: "M29,10V22a5.021,5.021,0,0,1-.3,1.7A4.788,4.788,0,0,1,27,24H11a5,5,0,0,1-5-5V7a4.788,4.788,0,0,1,.3-1.7A5.021,5.021,0,0,1,8,5H24A5,5,0,0,1,29,10Z"
    }), m("path", {
      fill: "#4D698E",
      d: "M24,27H8a5.006,5.006,0,0,1-5-5V10A5.006,5.006,0,0,1,8,5H24a5.006,5.006,0,0,1,5,5V22A5.006,5.006,0,0,1,24,27ZM8,7a3,3,0,0,0-3,3V22a3,3,0,0,0,3,3H24a3,3,0,0,0,3-3V10a3,3,0,0,0-3-3Z"
    }), m("path", {
      fill: "#fff",
      d: "M16 22.5A1.5 1.5 0 0114.5 21V11a1.5 1.5 0 013 0V21A1.5 1.5 0 0116 22.5zM10 22.5A1.5 1.5 0 018.5 21V15a1.5 1.5 0 013 0v6A1.5 1.5 0 0110 22.5zM22 22.5A1.5 1.5 0 0120.5 21V13a1.5 1.5 0 013 0v8A1.5 1.5 0 0122 22.5z"
    }))));
  };
  return UserStatsPopover;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.tsx":
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UserStatsPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UserStatsPopover */ "./src/forum/components/UserStatsPopover.tsx");
// @ts-nocheck




flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('justoverclock/stats', function () {
  /*extend(UserCard.prototype, 'view', function (vdom){
    if (vdom.children && vdom.children.splice) {
      vdom.children.splice(1,0, <UserStats user={this.attrs.user} />)
    }
  })*/
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'view', function (vnode) {
    var avatarNode = vnode.children[0].children[0].children[1].children;
    console.log(avatarNode);
    avatarNode.push(m(_components_UserStatsPopover__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: this.attrs.user
    }));
  });
});

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map