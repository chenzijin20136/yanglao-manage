(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_core_umiExports_ts-src_umi_plugin-request_request_ts-src_umi_dumi_apis_json"],{

/***/ "./src/.umi/core/history.ts":
/*!**********************************!*\
  !*** ./src/.umi/core/history.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHistory": function() { return /* binding */ createHistory; },
/* harmony export */   "history": function() { return /* binding */ history; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/history-with-query/esm/history.js");
// @ts-nocheck

var options = {
  "basename": "/"
};

if (window.routerBase) {
  options.basename = window.routerBase;
} // remove initial history because of ssr


var history = ({"NODE_ENV":"development"}).__IS_SERVER ? null : (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)(options);
var createHistory = function createHistory() {
  var hotReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!hotReload) {
    history = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)(options);
  }

  return history;
};


/***/ }),

/***/ "./src/.umi/core/plugin.ts":
/*!*********************************!*\
  !*** ./src/.umi/core/plugin.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": function() { return /* binding */ plugin; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/@umijs/runtime/dist/index.esm.js");
// @ts-nocheck

var plugin = new _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.Plugin({
  validKeys: ['modifyClientRenderOpts', 'patchRoutes', 'rootContainer', 'render', 'onRouteChange', '__mfsu', 'getInitialState', 'initialStateConfig', 'locale', 'layout', 'layoutActionRef', 'request']
});


/***/ }),

/***/ "./src/.umi/core/umiExports.ts":
/*!*************************************!*\
  !*** ./src/.umi/core/umiExports.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "history": function() { return /* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_0__.history; },
/* harmony export */   "plugin": function() { return /* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_1__.plugin; },
/* harmony export */   "Access": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.Access; },
/* harmony export */   "traverseModifyRoutes": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.traverseModifyRoutes; },
/* harmony export */   "useAccess": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.useAccess; },
/* harmony export */   "__PLUGIN_INITIAL_STATE": function() { return /* reexport safe */ _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__.__PLUGIN_INITIAL_STATE; },
/* harmony export */   "FormattedDate": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedDate; },
/* harmony export */   "FormattedDateParts": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedDateParts; },
/* harmony export */   "FormattedDisplayName": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedDisplayName; },
/* harmony export */   "FormattedHTMLMessage": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedHTMLMessage; },
/* harmony export */   "FormattedList": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedList; },
/* harmony export */   "FormattedMessage": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage; },
/* harmony export */   "FormattedNumber": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedNumber; },
/* harmony export */   "FormattedNumberParts": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedNumberParts; },
/* harmony export */   "FormattedPlural": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedPlural; },
/* harmony export */   "FormattedRelativeTime": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedRelativeTime; },
/* harmony export */   "FormattedTime": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedTime; },
/* harmony export */   "FormattedTimeParts": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedTimeParts; },
/* harmony export */   "IntlContext": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.IntlContext; },
/* harmony export */   "IntlProvider": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.IntlProvider; },
/* harmony export */   "RawIntlProvider": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.RawIntlProvider; },
/* harmony export */   "addLocale": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.addLocale; },
/* harmony export */   "createIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.createIntl; },
/* harmony export */   "createIntlCache": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.createIntlCache; },
/* harmony export */   "defineMessages": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.defineMessages; },
/* harmony export */   "formatMessage": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.formatMessage; },
/* harmony export */   "getAllLocales": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getAllLocales; },
/* harmony export */   "getDirection": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getDirection; },
/* harmony export */   "getIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getIntl; },
/* harmony export */   "getLocale": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getLocale; },
/* harmony export */   "injectIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.injectIntl; },
/* harmony export */   "localeInfo": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.localeInfo; },
/* harmony export */   "setIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.setIntl; },
/* harmony export */   "setLocale": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.setLocale; },
/* harmony export */   "useIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.useIntl; },
/* harmony export */   "SelectLang": function() { return /* reexport safe */ _plugin_locale_SelectLang__WEBPACK_IMPORTED_MODULE_5__.SelectLang; },
/* harmony export */   "useModel": function() { return /* reexport safe */ _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_7__.useModel; },
/* harmony export */   "ErrorShowType": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.ErrorShowType; },
/* harmony export */   "UseRequestProvider": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.UseRequestProvider; },
/* harmony export */   "request": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.request; },
/* harmony export */   "useRequest": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.useRequest; },
/* harmony export */   "Helmet": function() { return /* reexport safe */ _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_9__.Helmet; }
/* harmony export */ });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/.umi/core/history.ts");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./src/.umi/core/plugin.ts");
/* harmony import */ var _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin-access/access */ "./src/.umi/plugin-access/access.tsx");
/* harmony import */ var _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin-initial-state/exports */ "./src/.umi/plugin-initial-state/exports.ts");
/* harmony import */ var _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugin-locale/localeExports */ "./src/.umi/plugin-locale/localeExports.ts");
/* harmony import */ var _plugin_locale_SelectLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugin-locale/SelectLang */ "./src/.umi/plugin-locale/SelectLang.tsx");
/* harmony import */ var _plugin_layout_layoutExports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugin-layout/layoutExports */ "./src/.umi/plugin-layout/layoutExports.ts");
/* harmony import */ var _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugin-model/useModel */ "./src/.umi/plugin-model/useModel.tsx");
/* harmony import */ var _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../plugin-request/request */ "./src/.umi/plugin-request/request.ts");
/* harmony import */ var _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plugin-helmet/exports */ "./src/.umi/plugin-helmet/exports.ts");
// @ts-nocheck











/***/ }),

/***/ "./src/.umi/plugin-access/access.tsx":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-access/access.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseModifyRoutes": function() { return /* reexport safe */ _runtimeUtil__WEBPACK_IMPORTED_MODULE_2__.traverseModifyRoutes; },
/* harmony export */   "useAccess": function() { return /* binding */ useAccess; },
/* harmony export */   "Access": function() { return /* binding */ Access; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/.umi/plugin-access/context.ts");
/* harmony import */ var _runtimeUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtimeUtil */ "./src/.umi/plugin-access/runtimeUtil.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
// @ts-nocheck






var useAccess = function useAccess() {
  var access = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.default);
  return access;
};
var Access = function Access(props) {
  var accessible = props.accessible,
      fallback = props.fallback,
      children = props.children;

  if ( true && typeof accessible === 'function') {
    console.warn('[plugin-access]: provided "accessible" prop is a function named "' + accessible.name + '" instead of a boolean, maybe you need check it.');
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: accessible ? children : fallback
  }, void 0, false);
};

/***/ }),

/***/ "./src/.umi/plugin-access/context.ts":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-access/context.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// @ts-nocheck

var AccessContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (AccessContext);

/***/ }),

/***/ "./src/.umi/plugin-access/runtimeUtil.ts":
/*!***********************************************!*\
  !*** ./src/.umi/plugin-access/runtimeUtil.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseModifyRoutes": function() { return /* binding */ traverseModifyRoutes; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");

// @ts-nocheck
function traverseModifyRoutes(routes, access) {
  var resultRoutes = [].concat(routes).map(function (resultRoute) {
    var routes = resultRoute.routes;

    if (routes && routes !== null && routes !== void 0 && routes.map) {
      return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, resultRoute), {}, {
        // return new route to routes.
        routes: routes === null || routes === void 0 ? void 0 : routes.map(function (route) {
          return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, route);
        })
      });
    }

    return resultRoute;
  });
  return resultRoutes.map(function (currentRoute) {
    var currentRouteAccessible = typeof currentRoute.unaccessible === 'boolean' ? !currentRoute.unaccessible : true; // 判断路由是否有权限的具体代码

    if (currentRoute && currentRoute.access) {
      if (typeof currentRoute.access !== 'string') {
        throw new Error('[plugin-access]: "access" field set in "' + currentRoute.path + '" route should be a string.');
      }

      var accessProp = access[currentRoute.access]; // 如果是方法需要执行以下

      if (typeof accessProp === 'function') {
        currentRouteAccessible = accessProp(currentRoute);
      } else if (typeof accessProp === 'boolean') {
        // 不是方法就直接 copy
        currentRouteAccessible = accessProp;
      }

      currentRoute.unaccessible = !currentRouteAccessible;
    } // 筛选子路由


    if (currentRoute.routes || currentRoute.childRoutes) {
      var childRoutes = currentRoute.routes || currentRoute.childRoutes;

      if (!Array.isArray(childRoutes)) {
        return currentRoute;
      } // 父亲没权限，理论上每个孩子都没权限
      // 可能有打平 的事情发生，所以都执行一下


      childRoutes.forEach(function (childRoute) {
        childRoute.unaccessible = !currentRouteAccessible;
      });
      var finallyChildRoute = traverseModifyRoutes(childRoutes, access); // 如果每个子节点都没有权限，那么自己也属于没有权限

      var isAllChildRoutesUnaccessible = Array.isArray(finallyChildRoute) && finallyChildRoute.every(function (route) {
        return route.unaccessible;
      });

      if (!currentRoute.unaccessible && isAllChildRoutesUnaccessible) {
        currentRoute.unaccessible = true;
      }

      if (finallyChildRoute && (finallyChildRoute === null || finallyChildRoute === void 0 ? void 0 : finallyChildRoute.length) > 0) {
        return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, currentRoute), {}, {
          routes: finallyChildRoute
        });
      }

      delete currentRoute.routes;
    }

    return currentRoute;
  });
}

/***/ }),

/***/ "./src/.umi/plugin-helmet/exports.ts":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-helmet/exports.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helmet": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
// @ts-nocheck
// @ts-ignore


/***/ }),

/***/ "./src/.umi/plugin-initial-state/exports.ts":
/*!**************************************************!*\
  !*** ./src/.umi/plugin-initial-state/exports.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__PLUGIN_INITIAL_STATE": function() { return /* binding */ __PLUGIN_INITIAL_STATE; }
/* harmony export */ });
// @ts-nocheck
// @ts-ignore
var __PLUGIN_INITIAL_STATE = 1;

/***/ }),

/***/ "./src/.umi/plugin-layout/layoutExports.ts":
/*!*************************************************!*\
  !*** ./src/.umi/plugin-layout/layoutExports.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @ts-nocheck
// avoid `export *` error
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/.umi/plugin-locale/SelectLang.tsx":
/*!***********************************************!*\
  !*** ./src/.umi/plugin-locale/SelectLang.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLang": function() { return /* binding */ SelectLang; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var antd_es_dropdown_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/dropdown/style */ "./node_modules/antd/es/dropdown/style/index.js");
/* harmony import */ var antd_es_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");






var _jsxFileName = "/Users/chenzijin/Desktop/demo/myapp/src/.umi/plugin-locale/SelectLang.tsx",
    _this = undefined;

// @ts-nocheck




var HeaderDropdown = function HeaderDropdown(_ref) {
  var cls = _ref.overlayClassName,
      restProps = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, ["overlayClassName"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(antd_es_dropdown__WEBPACK_IMPORTED_MODULE_6__.default, (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({
    overlayClassName: cls
  }, restProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

var transformArrayToObject = function transformArrayToObject(allLangUIConfig) {
  return allLangUIConfig.reduce(function (obj, item) {
    if (!item.lang) {
      return obj;
    }

    return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.default)({}, obj), {}, (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, item.lang, item));
  }, {});
};

var defaultLangUConfigMap = {
  'ar-EG': {
    lang: 'ar-EG',
    label: 'العربية',
    icon: '🇪🇬',
    title: 'لغة'
  },
  'az-AZ': {
    lang: 'az-AZ',
    label: 'Azərbaycan dili',
    icon: '🇦🇿',
    title: 'Dil'
  },
  'bg-BG': {
    lang: 'bg-BG',
    label: 'Български език',
    icon: '🇧🇬',
    title: 'език'
  },
  'bn-BD': {
    lang: 'bn-BD',
    label: 'বাংলা',
    icon: '🇧🇩',
    title: 'ভাষা'
  },
  'ca-ES': {
    lang: 'ca-ES',
    label: 'Catalá',
    icon: '🇨🇦',
    title: 'llengua'
  },
  'cs-CZ': {
    lang: 'cs-CZ',
    label: 'Čeština',
    icon: '🇨🇿',
    title: 'Jazyk'
  },
  'da-DK': {
    lang: 'da-DK',
    label: 'Dansk',
    icon: '🇩🇰',
    title: 'Sprog'
  },
  'de-DE': {
    lang: 'de-DE',
    label: 'Deutsch',
    icon: '🇩🇪',
    title: 'Sprache'
  },
  'el-GR': {
    lang: 'el-GR',
    label: 'Ελληνικά',
    icon: '🇬🇷',
    title: 'Γλώσσα'
  },
  'en-GB': {
    lang: 'en-GB',
    label: 'English',
    icon: '🇬🇧',
    title: 'Language'
  },
  'en-US': {
    lang: 'en-US',
    label: 'English',
    icon: '🇺🇸',
    title: 'Language'
  },
  'es-ES': {
    lang: 'es-ES',
    label: 'Español',
    icon: '🇪🇸',
    title: 'Idioma'
  },
  'et-EE': {
    lang: 'et-EE',
    label: 'Eesti',
    icon: '🇪🇪',
    title: 'Keel'
  },
  'fa-IR': {
    lang: 'fa-IR',
    label: 'فارسی',
    icon: '🇮🇷',
    title: 'زبان'
  },
  'fi-FI': {
    lang: 'fi-FI',
    label: 'Suomi',
    icon: '🇫🇮',
    title: 'Kieli'
  },
  'fr-BE': {
    lang: 'fr-BE',
    label: 'Français',
    icon: '🇧🇪',
    title: 'Langue'
  },
  'fr-FR': {
    lang: 'fr-FR',
    label: 'Français',
    icon: '🇫🇷',
    title: 'Langue'
  },
  'ga-IE': {
    lang: 'ga-IE',
    label: 'Gaeilge',
    icon: '🇮🇪',
    title: 'Teanga'
  },
  'he-IL': {
    lang: 'he-IL',
    label: 'עברית',
    icon: '🇮🇱',
    title: 'שפה'
  },
  'hi-IN': {
    lang: 'hi-IN',
    label: 'हिन्दी, हिंदी',
    icon: '🇮🇳',
    title: 'भाषा: हिन्दी'
  },
  'hr-HR': {
    lang: 'hr-HR',
    label: 'Hrvatski jezik',
    icon: '🇭🇷',
    title: 'Jezik'
  },
  'hu-HU': {
    lang: 'hu-HU',
    label: 'Magyar',
    icon: '🇭🇺',
    title: 'Nyelv'
  },
  'hy-AM': {
    lang: 'hu-HU',
    label: 'Հայերեն',
    icon: '🇦🇲',
    title: 'Լեզու'
  },
  'id-ID': {
    lang: 'id-ID',
    label: 'Bahasa Indonesia',
    icon: '🇮🇩',
    title: 'Bahasa'
  },
  'it-IT': {
    lang: 'it-IT',
    label: 'Italiano',
    icon: '🇮🇹',
    title: 'Linguaggio'
  },
  'is-IS': {
    lang: 'is-IS',
    label: 'Íslenska',
    icon: '🇮🇸',
    title: 'Tungumál'
  },
  'ja-JP': {
    lang: 'ja-JP',
    label: '日本語',
    icon: '🇯🇵',
    title: '言語'
  },
  'ku-IQ': {
    lang: 'ku-IQ',
    label: 'کوردی',
    icon: '🇮🇶',
    title: 'Ziman'
  },
  'kn-IN': {
    lang: 'zh-TW',
    label: 'ಕನ್ನಡ',
    icon: '🇮🇳',
    title: 'ಭಾಷೆ'
  },
  'ko-KR': {
    lang: 'ko-KR',
    label: '한국어',
    icon: '🇰🇷',
    title: '언어'
  },
  'lv-LV': {
    lang: 'lv-LV',
    label: 'Latviešu valoda',
    icon: '🇱🇮',
    title: 'Kalba'
  },
  'mk-MK': {
    lang: 'mk-MK',
    label: 'македонски јазик',
    icon: '🇲🇰',
    title: 'Јазик'
  },
  'mn-MN': {
    lang: 'mn-MN',
    label: 'Монгол хэл',
    icon: '🇲🇳',
    title: 'Хэл'
  },
  'ms-MY': {
    lang: 'ms-MY',
    label: 'بهاس ملايو‎',
    icon: '🇲🇾',
    title: 'Bahasa'
  },
  'nb-NO': {
    lang: 'nb-NO',
    label: 'Norsk',
    icon: '🇳🇴',
    title: 'Språk'
  },
  'ne-NP': {
    lang: 'ne-NP',
    label: 'नेपाली',
    icon: '🇳🇵',
    title: 'भाषा'
  },
  'nl-BE': {
    lang: 'nl-BE',
    label: 'Vlaams',
    icon: '🇧🇪',
    title: 'Taal'
  },
  'nl-NL': {
    lang: 'nl-NL',
    label: 'Vlaams',
    icon: '🇳🇱',
    title: 'Taal'
  },
  'pt-BR': {
    lang: 'pt-BR',
    label: 'Português',
    icon: '🇧🇷',
    title: 'Idiomas'
  },
  'pt-PT': {
    lang: 'pt-PT',
    label: 'Português',
    icon: '🇵🇹',
    title: 'Idiomas'
  },
  'ro-RO': {
    lang: 'ro-RO',
    label: 'Română',
    icon: '🇷🇴',
    title: 'Limba'
  },
  'ru-RU': {
    lang: 'ru-RU',
    label: 'русский',
    icon: '🇷🇺',
    title: 'язык'
  },
  'sk-SK': {
    lang: 'sk-SK',
    label: 'Slovenčina',
    icon: '🇸🇰',
    title: 'Jazyk'
  },
  'sr-RS': {
    lang: 'sr-RS',
    label: 'српски језик',
    icon: '🇸🇷',
    title: 'Језик'
  },
  'sl-SI': {
    lang: 'sl-SI',
    label: 'Slovenščina',
    icon: '🇸🇱',
    title: 'Jezik'
  },
  'sv-SE': {
    lang: 'sv-SE',
    label: 'Svenska',
    icon: '🇸🇪',
    title: 'Språk'
  },
  'ta-IN': {
    lang: 'ta-IN',
    label: 'தமிழ்',
    icon: '🇮🇳',
    title: 'மொழி'
  },
  'th-TH': {
    lang: 'th-TH',
    label: 'ไทย',
    icon: '🇹🇭',
    title: 'ภาษา'
  },
  'tr-TR': {
    lang: 'tr-TR',
    label: 'Türkçe',
    icon: '🇹🇷',
    title: 'Dil'
  },
  'uk-UA': {
    lang: 'uk-UA',
    label: 'Українська',
    icon: '🇺🇰',
    title: 'Мова'
  },
  'vi-VN': {
    lang: 'vi-VN',
    label: 'Tiếng Việt',
    icon: '🇻🇳',
    title: 'Ngôn ngữ'
  },
  'zh-CN': {
    lang: 'zh-CN',
    label: '简体中文',
    icon: '🇨🇳',
    title: '语言'
  },
  'zh-TW': {
    lang: 'zh-TW',
    label: '繁體中文',
    icon: '🇭🇰',
    title: '語言'
  }
};
var SelectLang = function SelectLang(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, false);
};

/***/ }),

/***/ "./src/.umi/plugin-locale/locale.tsx":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-locale/locale.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "event": function() { return /* binding */ event; },
/* harmony export */   "LANG_CHANGE_EVENT": function() { return /* binding */ LANG_CHANGE_EVENT; },
/* harmony export */   "_onCreate": function() { return /* binding */ _onCreate; },
/* harmony export */   "_LocaleContainer": function() { return /* binding */ _LocaleContainer; }
/* harmony export */ });
/* harmony import */ var antd_es_config_provider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/config-provider/style */ "./node_modules/antd/es/config-provider/style/index.js");
/* harmony import */ var antd_es_config_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _localeExports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localeExports */ "./src/.umi/plugin-locale/localeExports.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");




var _jsxFileName = "/Users/chenzijin/Desktop/demo/myapp/src/.umi/plugin-locale/locale.tsx",
    _this = undefined;

// @ts-nocheck




 // @ts-ignore


var event = new (events__WEBPACK_IMPORTED_MODULE_3___default())();
event.setMaxListeners(5);
var LANG_CHANGE_EVENT = Symbol('LANG_CHANGE');
function _onCreate() {
  var locale = (0,_localeExports__WEBPACK_IMPORTED_MODULE_6__.getLocale)();

  if ((moment__WEBPACK_IMPORTED_MODULE_4___default()) !== null && (moment__WEBPACK_IMPORTED_MODULE_4___default()) !== void 0 && (moment__WEBPACK_IMPORTED_MODULE_4___default().locale)) {
    var _localeInfo$locale;

    moment__WEBPACK_IMPORTED_MODULE_4___default().locale(((_localeInfo$locale = _localeExports__WEBPACK_IMPORTED_MODULE_6__.localeInfo[locale]) === null || _localeInfo$locale === void 0 ? void 0 : _localeInfo$locale.momentLocale) || '');
  }

  (0,_localeExports__WEBPACK_IMPORTED_MODULE_6__.setIntl)(locale);
}
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;
var _LocaleContainer = function _LocaleContainer(props) {
  var _localeInfo$locale3;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    return (0,_localeExports__WEBPACK_IMPORTED_MODULE_6__.getLocale)();
  }),
      _React$useState2 = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      locale = _React$useState2[0],
      setLocale = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    return (0,_localeExports__WEBPACK_IMPORTED_MODULE_6__.getIntl)(locale, true);
  }),
      _React$useState4 = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      intl = _React$useState4[0],
      setContainerIntl = _React$useState4[1];

  var handleLangChange = function handleLangChange(locale) {
    if ((moment__WEBPACK_IMPORTED_MODULE_4___default()) !== null && (moment__WEBPACK_IMPORTED_MODULE_4___default()) !== void 0 && (moment__WEBPACK_IMPORTED_MODULE_4___default().locale)) {
      var _localeInfo$locale2;

      moment__WEBPACK_IMPORTED_MODULE_4___default().locale(((_localeInfo$locale2 = _localeExports__WEBPACK_IMPORTED_MODULE_6__.localeInfo[locale]) === null || _localeInfo$locale2 === void 0 ? void 0 : _localeInfo$locale2.momentLocale) || 'en');
    }

    setLocale(locale);
    setContainerIntl((0,_localeExports__WEBPACK_IMPORTED_MODULE_6__.getIntl)(locale));
  };

  useIsomorphicLayoutEffect(function () {
    event.on(LANG_CHANGE_EVENT, handleLangChange);
    return function () {
      event.off(LANG_CHANGE_EVENT, handleLangChange);
    };
  }, []);
  var defaultAntdLocale = {};
  var direction = (0,_localeExports__WEBPACK_IMPORTED_MODULE_6__.getDirection)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(antd_es_config_provider__WEBPACK_IMPORTED_MODULE_8__.default, {
    direction: direction,
    locale: ((_localeInfo$locale3 = _localeExports__WEBPACK_IMPORTED_MODULE_6__.localeInfo[locale]) === null || _localeInfo$locale3 === void 0 ? void 0 : _localeInfo$locale3.antd) || defaultAntdLocale,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_localeExports__WEBPACK_IMPORTED_MODULE_6__.RawIntlProvider, {
      value: intl,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);
};

/***/ }),

/***/ "./src/.umi/plugin-locale/localeExports.ts":
/*!*************************************************!*\
  !*** ./src/.umi/plugin-locale/localeExports.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIntl": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl; },
/* harmony export */   "FormattedDate": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedDate; },
/* harmony export */   "FormattedDateParts": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedDateParts; },
/* harmony export */   "FormattedDisplayName": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedDisplayName; },
/* harmony export */   "FormattedHTMLMessage": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "FormattedList": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedList; },
/* harmony export */   "FormattedMessage": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "FormattedNumber": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedNumber; },
/* harmony export */   "FormattedNumberParts": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedNumberParts; },
/* harmony export */   "FormattedPlural": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "FormattedRelativeTime": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "FormattedTime": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedTime; },
/* harmony export */   "FormattedTimeParts": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedTimeParts; },
/* harmony export */   "IntlContext": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__.Context; },
/* harmony export */   "IntlProvider": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "RawIntlProvider": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__.Provider; },
/* harmony export */   "createIntlCache": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_12__.createIntlCache; },
/* harmony export */   "defineMessages": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages; },
/* harmony export */   "injectIntl": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "useIntl": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "localeInfo": function() { return /* binding */ localeInfo; },
/* harmony export */   "addLocale": function() { return /* binding */ addLocale; },
/* harmony export */   "getIntl": function() { return /* binding */ getIntl; },
/* harmony export */   "setIntl": function() { return /* binding */ setIntl; },
/* harmony export */   "getLocale": function() { return /* binding */ getLocale; },
/* harmony export */   "getDirection": function() { return /* binding */ getDirection; },
/* harmony export */   "setLocale": function() { return /* binding */ setLocale; },
/* harmony export */   "formatMessage": function() { return /* binding */ formatMessage; },
/* harmony export */   "getAllLocales": function() { return /* binding */ getAllLocales; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/provider.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/@umijs/runtime/dist/index.esm.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./src/.umi/plugin-locale/locale.tsx");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/warning/warning.js */ "./node_modules/warning/warning.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_chenzijin_Desktop_demo_myapp_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/plugin */ "./src/.umi/core/plugin.ts");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/html-message.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/message.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/createFormattedComponent.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/plural.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/relative.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/injectIntl.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/utils.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var antd_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/es/locale/zh_CN */ "./node_modules/antd/es/locale/zh_CN.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_src_locales_zh_CN_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/locales/zh-CN.ts */ "./src/locales/zh-CN.ts");

// @ts-nocheck


 // @ts-ignore





var g_intl;
var useLocalStorage = true;


var localeInfo = {
  'zh-CN': {
    messages: (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_chenzijin_Desktop_demo_myapp_src_locales_zh_CN_ts__WEBPACK_IMPORTED_MODULE_14__.default),
    locale: 'zh-CN',
    antd: (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_15__.default),
    momentLocale: 'zh-cn'
  }
};
/**
 * 增加一个新的国际化语言
 * @param name 语言的 key
 * @param messages 对应的枚举对象
 * @param extraLocale momentLocale, antd 国际化
 */

var addLocale = function addLocale(name, messages, extraLocales) {
  var _localeInfo$name, _name$split;

  if (!name) {
    return;
  } // 可以合并


  var mergeMessages = (_localeInfo$name = localeInfo[name]) !== null && _localeInfo$name !== void 0 && _localeInfo$name.messages ? Object.assign({}, localeInfo[name].messages, messages) : messages;

  var _ref = extraLocales || {},
      momentLocale = _ref.momentLocale,
      antd = _ref.antd;

  var locale = (_name$split = name.split('-')) === null || _name$split === void 0 ? void 0 : _name$split.join('-');
  localeInfo[name] = {
    messages: mergeMessages,
    locale: locale,
    momentLocale: momentLocale,
    antd: antd
  }; // 如果这是的 name 和当前的locale 相同需要重新设置一下，不然更新不了

  if (locale === getLocale()) {
    _locale__WEBPACK_IMPORTED_MODULE_1__.event.emit(_locale__WEBPACK_IMPORTED_MODULE_1__.LANG_CHANGE_EVENT, locale);
  }
};
/**
 * 获取当前的 intl 对象，可以在 node 中使用
 * @param locale 需要切换的语言类型
 * @param changeIntl 是否不使用 g_intl
 * @returns IntlShape
 */

var getIntl = function getIntl(locale, changeIntl) {
  // 如果全局的 g_intl 存在，且不是 setIntl 调用
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  } // 如果存在于 localeInfo 中


  if (locale && localeInfo[locale]) {
    return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)(localeInfo[locale]);
  } // 不存在需要一个报错提醒


  _Users_chenzijin_Desktop_demo_myapp_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2___default()(!locale || !!localeInfo[locale], "The current popular language does not exist, please check the locales folder!"); // 使用 zh-CN

  if (localeInfo["zh-CN"]) return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)(localeInfo["zh-CN"]); // 如果还没有，返回一个空的

  return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)({
    locale: "zh-CN",
    messages: {}
  });
};
/**
 * 切换全局的 intl 的设置
 * @param locale 语言的key
 */

var setIntl = function setIntl(locale) {
  g_intl = getIntl(locale, true);
};
/**
 * 获取当前选择的语言
 * @returns string
 */

var getLocale = function getLocale() {
  var runtimeLocale = _core_plugin__WEBPACK_IMPORTED_MODULE_3__.plugin.applyPlugins({
    key: 'locale',
    type: _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_16__.ApplyPluginsType.modify,
    initialValue: {}
  }); // runtime getLocale for user define

  if (typeof (runtimeLocale === null || runtimeLocale === void 0 ? void 0 : runtimeLocale.getLocale) === 'function') {
    return runtimeLocale.getLocale();
  } // please clear localStorage if you change the baseSeparator config
  // because changing will break the app


  var lang = typeof localStorage !== 'undefined' && useLocalStorage ? window.localStorage.getItem('umi_locale') : ''; // support baseNavigator, default true

  var browserLang;
  var isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('-') : '';
  return lang || browserLang || "zh-CN";
};
/**
 * 获取当前选择的方向
 * @returns string
 */

var getDirection = function getDirection() {
  var lang = getLocale(); // array with all prefixs for rtl langueges ex: ar-EG , he-IL

  var rtlLangs = ['he', 'ar', 'fa', 'ku'];
  var direction = rtlLangs.filter(function (lng) {
    return lang.startsWith(lng);
  }).length ? 'rtl' : 'ltr';
  return direction;
};
/**
 * 切换语言
 * @param lang 语言的 key
 * @param realReload 是否刷新页面，默认刷新
 * @returns string
 */

var setLocale = function setLocale(lang) {
  var realReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var localeExp = new RegExp("^([a-z]{2})-?([A-Z]{2})?$");
  var runtimeLocale = _core_plugin__WEBPACK_IMPORTED_MODULE_3__.plugin.applyPlugins({
    key: 'locale',
    type: _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_16__.ApplyPluginsType.modify,
    initialValue: {}
  });

  var updater = function updater() {
    if (lang !== undefined && !localeExp.test(lang)) {
      // for reset when lang === undefined
      throw new Error('setLocale lang format error');
    }

    if (getLocale() !== lang) {
      if (typeof window.localStorage !== 'undefined' && useLocalStorage) {
        window.localStorage.setItem('umi_locale', lang || '');
      }

      setIntl(lang);

      if (realReload) {
        window.location.reload();
      } else {
        _locale__WEBPACK_IMPORTED_MODULE_1__.event.emit(_locale__WEBPACK_IMPORTED_MODULE_1__.LANG_CHANGE_EVENT, lang); // chrome 不支持这个事件。所以人肉触发一下

        if (window.dispatchEvent) {
          var _event = new Event('languagechange');

          window.dispatchEvent(_event);
        }
      }
    }
  };

  if (typeof (runtimeLocale === null || runtimeLocale === void 0 ? void 0 : runtimeLocale.setLocale) === 'function') {
    runtimeLocale.setLocale({
      lang: lang,
      realReload: realReload,
      updater: updater
    });
    return;
  }

  updater();
};
var firstWaring = true;
/**
 * intl.formatMessage 的语法糖
 * @deprecated 使用此 api 会造成切换语言的时候无法自动刷新，请使用 useIntl 或 injectIntl
 * @param descriptor { id : string, defaultMessage : string }
 * @param values { [key:string] : string }
 * @returns string
 */

var formatMessage = function formatMessage(descriptor, values) {
  if (firstWaring) {
    _Users_chenzijin_Desktop_demo_myapp_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2___default()(false, "Using this API will cause automatic refresh when switching languages, please use useIntl or injectIntl.\n\n\u4F7F\u7528\u6B64 api \u4F1A\u9020\u6210\u5207\u6362\u8BED\u8A00\u7684\u65F6\u5019\u65E0\u6CD5\u81EA\u52A8\u5237\u65B0\uFF0C\u8BF7\u4F7F\u7528 useIntl \u6216 injectIntl\u3002\n\nhttp://j.mp/37Fkd5Q\n      ");
    firstWaring = false;
  }

  return g_intl.formatMessage(descriptor, values);
};
/**
 * 获取语言列表
 * @returns string[]
 */

var getAllLocales = function getAllLocales() {
  return Object.keys(localeInfo);
};

/***/ }),

/***/ "./src/.umi/plugin-model/helpers/constant.tsx":
/*!****************************************************!*\
  !*** ./src/.umi/plugin-model/helpers/constant.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UmiContext": function() { return /* binding */ UmiContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// @ts-nocheck

var UmiContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./src/.umi/plugin-model/useModel.tsx":
/*!********************************************!*\
  !*** ./src/.umi/plugin-model/useModel.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useModel": function() { return /* binding */ useModel; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js */ "./node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/constant */ "./src/.umi/plugin-model/helpers/constant.tsx");

// @ts-nocheck
 // @ts-ignore

 // @ts-ignore


function useModel(namespace, updater) {
  var dispatcher = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_constant__WEBPACK_IMPORTED_MODULE_3__.UmiContext);
  var updaterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(updater);
  updaterRef.current = updater;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return updaterRef.current ? updaterRef.current(dispatcher.data[namespace]) : dispatcher.data[namespace];
  }),
      _useState2 = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(state);
  stateRef.current = state;
  var isMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    isMount.current = true;
    return function () {
      isMount.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handler = function handler(e) {
      if (!isMount.current) {
        // 如果 handler 执行过程中，组件被卸载了，则强制更新全局 data
        setTimeout(function () {
          dispatcher.data[namespace] = e;
          dispatcher.update(namespace);
        });
      } else {
        if (updater && updaterRef.current) {
          var currentState = updaterRef.current(e);
          var previousState = stateRef.current;

          if (!_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2___default()(currentState, previousState)) {
            setState(currentState);
          }
        } else {
          setState(e);
        }
      }
    };

    try {
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    } catch (e) {
      dispatcher.callbacks[namespace] = new Set();
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    }

    return function () {
      dispatcher.callbacks[namespace].delete(handler);
    };
  }, [namespace]);
  return state;
}
;

/***/ }),

/***/ "./src/.umi/plugin-request/request.ts":
/*!********************************************!*\
  !*** ./src/.umi/plugin-request/request.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorShowType": function() { return /* binding */ ErrorShowType; },
/* harmony export */   "request": function() { return /* binding */ request; },
/* harmony export */   "useRequest": function() { return /* binding */ useRequest; },
/* harmony export */   "UseRequestProvider": function() { return /* reexport safe */ _Users_chenzijin_Desktop_demo_myapp_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__.UseRequestProvider; }
/* harmony export */ });
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umi_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/umi-request */ "./node_modules/umi-request/dist/index.esm.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/@umijs/runtime/dist/index.esm.js");
/* harmony import */ var _core_umiExports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/umiExports */ "./src/.umi/core/umiExports.ts");
/* harmony import */ var _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @umijs/plugin-request/lib/ui */ "./node_modules/@umijs/plugin-request/lib/ui/index.js");
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@ahooksjs/use-request */ "./node_modules/@ahooksjs/use-request/es/index.js");




// @ts-nocheck

/**
 * Base on https://github.com/umijs//Users/chenzijin/Desktop/demo/myapp/node_modules/umi-request
 */
 // @ts-ignore


 // decoupling with antd UI library, you can using `alias` modify the ui methods
// @ts-ignore




function useRequest(service) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__.default)(service, (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)({
    formatResult: function formatResult(result) {
      return result === null || result === void 0 ? void 0 : result.data;
    },
    requestMethod: function requestMethod(requestOptions) {
      if (typeof requestOptions === 'string') {
        return request(requestOptions);
      }

      if (typeof requestOptions === 'object') {
        var _url = requestOptions.url,
            rest = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(requestOptions, ["url"]);

        return request(_url, rest);
      }

      throw new Error('request options error');
    }
  }, options));
}

var ErrorShowType;

(function (ErrorShowType) {
  ErrorShowType[ErrorShowType["SILENT"] = 0] = "SILENT";
  ErrorShowType[ErrorShowType["WARN_MESSAGE"] = 1] = "WARN_MESSAGE";
  ErrorShowType[ErrorShowType["ERROR_MESSAGE"] = 2] = "ERROR_MESSAGE";
  ErrorShowType[ErrorShowType["NOTIFICATION"] = 4] = "NOTIFICATION";
  ErrorShowType[ErrorShowType["REDIRECT"] = 9] = "REDIRECT";
})(ErrorShowType || (ErrorShowType = {}));

var DEFAULT_ERROR_PAGE = '/exception';
var requestMethodInstance;

var getRequestMethod = function getRequestMethod() {
  var _requestConfig$errorC;

  if (requestMethodInstance) {
    // request method 已经示例化
    return requestMethodInstance;
  } // runtime 配置可能应为依赖顺序的问题在模块初始化的时候无法获取，所以需要封装一层在异步调用后初始化相关方法
  // 当用户的 app.ts 中依赖了该文件的情况下就该模块的初始化时间就会被提前，无法获取到运行时配置


  var requestConfig = _core_umiExports__WEBPACK_IMPORTED_MODULE_5__.plugin.applyPlugins({
    key: 'request',
    type: _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_8__.ApplyPluginsType.modify,
    initialValue: {}
  });

  var errorAdaptor = ((_requestConfig$errorC = requestConfig.errorConfig) === null || _requestConfig$errorC === void 0 ? void 0 : _requestConfig$errorC.adaptor) || function (resData) {
    return resData;
  };

  requestMethodInstance = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umi_request__WEBPACK_IMPORTED_MODULE_4__.extend)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)({
    errorHandler: function errorHandler(error) {
      var _error$request, _error$request$option, _errorInfo4;

      // @ts-ignore
      if (error !== null && error !== void 0 && (_error$request = error.request) !== null && _error$request !== void 0 && (_error$request$option = _error$request.options) !== null && _error$request$option !== void 0 && _error$request$option.skipErrorHandler) {
        throw error;
      }

      var errorInfo;

      if (error.name === 'ResponseError' && error.data && error.request) {
        var _errorInfo;

        var _ctx = {
          req: error.request,
          res: error.response
        };
        errorInfo = errorAdaptor(error.data, _ctx);
        error.message = ((_errorInfo = errorInfo) === null || _errorInfo === void 0 ? void 0 : _errorInfo.errorMessage) || error.message;
        error.data = error.data;
        error.info = errorInfo;
      }

      errorInfo = error.info;

      if (errorInfo) {
        var _errorInfo2, _errorInfo3, _requestConfig$errorC2;

        var errorMessage = (_errorInfo2 = errorInfo) === null || _errorInfo2 === void 0 ? void 0 : _errorInfo2.errorMessage;
        var errorCode = (_errorInfo3 = errorInfo) === null || _errorInfo3 === void 0 ? void 0 : _errorInfo3.errorCode;
        var errorPage = ((_requestConfig$errorC2 = requestConfig.errorConfig) === null || _requestConfig$errorC2 === void 0 ? void 0 : _requestConfig$errorC2.errorPage) || DEFAULT_ERROR_PAGE;

        switch ((_errorInfo4 = errorInfo) === null || _errorInfo4 === void 0 ? void 0 : _errorInfo4.showType) {
          case ErrorShowType.SILENT:
            // do nothing
            break;

          case ErrorShowType.WARN_MESSAGE:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.warn(errorMessage);
            break;

          case ErrorShowType.ERROR_MESSAGE:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(errorMessage);
            break;

          case ErrorShowType.NOTIFICATION:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.notification.open({
              description: errorMessage,
              message: errorCode
            });
            break;

          case ErrorShowType.REDIRECT:
            // @ts-ignore
            _core_umiExports__WEBPACK_IMPORTED_MODULE_5__.history.push({
              pathname: errorPage,
              query: {
                errorCode: errorCode,
                errorMessage: errorMessage
              }
            }); // redirect to error page

            break;

          default:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(errorMessage);
            break;
        }
      } else {
        _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(error.message || 'Request error, please retry.');
      }

      throw error;
    }
  }, requestConfig)); // 中间件统一错误处理
  // 后端返回格式 { success: boolean, data: any }
  // 按照项目具体情况修改该部分逻辑

  requestMethodInstance.use( /*#__PURE__*/function () {
    var _ref = (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(ctx, next) {
      var _req$options;

      var req, res, options, getResponse, resData, errorInfo, error;
      return _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              req = ctx.req, res = ctx.res; // @ts-ignore

              if (!((_req$options = req.options) !== null && _req$options !== void 0 && _req$options.skipErrorHandler)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              options = req.options;
              getResponse = options.getResponse;
              resData = getResponse ? res.data : res;
              errorInfo = errorAdaptor(resData, ctx);

              if (!(errorInfo.success === false)) {
                _context.next = 16;
                break;
              }

              // 抛出错误到 errorHandler 中处理
              error = new Error(errorInfo.errorMessage);
              error.name = 'BizError';
              error.data = resData;
              error.info = errorInfo;
              error.response = res;
              throw error;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()); // Add user custom middlewares

  var customMiddlewares = requestConfig.middlewares || [];
  customMiddlewares.forEach(function (mw) {
    requestMethodInstance.use(mw);
  }); // Add user custom interceptors

  var requestInterceptors = requestConfig.requestInterceptors || [];
  var responseInterceptors = requestConfig.responseInterceptors || [];
  requestInterceptors.map(function (ri) {
    requestMethodInstance.interceptors.request.use(ri);
  });
  responseInterceptors.map(function (ri) {
    requestMethodInstance.interceptors.response.use(ri);
  });
  return requestMethodInstance;
};

var request = function request(url, options) {
  var requestMethod = getRequestMethod();
  return requestMethod(url, options);
};



/***/ }),

/***/ "./src/locales/zh-CN.ts":
/*!******************************!*\
  !*** ./src/locales/zh-CN.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _zh_CN_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zh-CN/component */ "./src/locales/zh-CN/component.ts");
/* harmony import */ var _zh_CN_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh-CN/globalHeader */ "./src/locales/zh-CN/globalHeader.ts");
/* harmony import */ var _zh_CN_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zh-CN/menu */ "./src/locales/zh-CN/menu.ts");
/* harmony import */ var _zh_CN_pwa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zh-CN/pwa */ "./src/locales/zh-CN/pwa.ts");
/* harmony import */ var _zh_CN_settingDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zh-CN/settingDrawer */ "./src/locales/zh-CN/settingDrawer.ts");
/* harmony import */ var _zh_CN_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zh-CN/settings */ "./src/locales/zh-CN/settings.ts");
/* harmony import */ var _zh_CN_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zh-CN/pages */ "./src/locales/zh-CN/pages.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_chenzijin_Desktop_demo_myapp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.copyright.produced': '蚂蚁集团体验技术部出品',
  'app.preview.down.block': '下载此页面到本地项目',
  'app.welcome.link.fetch-blocks': '获取全部区块',
  'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面'
}, _zh_CN_pages__WEBPACK_IMPORTED_MODULE_7__.default), _zh_CN_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _zh_CN_menu__WEBPACK_IMPORTED_MODULE_3__.default), _zh_CN_settingDrawer__WEBPACK_IMPORTED_MODULE_5__.default), _zh_CN_settings__WEBPACK_IMPORTED_MODULE_6__.default), _zh_CN_pwa__WEBPACK_IMPORTED_MODULE_4__.default), _zh_CN_component__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./src/locales/zh-CN/component.ts":
/*!****************************************!*\
  !*** ./src/locales/zh-CN/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': '展开',
  'component.tagSelect.collapse': '收起',
  'component.tagSelect.all': '全部'
});

/***/ }),

/***/ "./src/locales/zh-CN/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/zh-CN/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': '站内搜索',
  'component.globalHeader.search.example1': '搜索提示一',
  'component.globalHeader.search.example2': '搜索提示二',
  'component.globalHeader.search.example3': '搜索提示三',
  'component.globalHeader.help': '使用文档',
  'component.globalHeader.notification': '通知',
  'component.globalHeader.notification.empty': '你已查看所有通知',
  'component.globalHeader.message': '消息',
  'component.globalHeader.message.empty': '您已读完所有消息',
  'component.globalHeader.event': '待办',
  'component.globalHeader.event.empty': '你已完成所有待办',
  'component.noticeIcon.clear': '清空',
  'component.noticeIcon.cleared': '清空了',
  'component.noticeIcon.empty': '暂无数据',
  'component.noticeIcon.view-more': '查看更多'
});

/***/ }),

/***/ "./src/locales/zh-CN/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/zh-CN/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': '欢迎',
  'menu.more-blocks': '更多区块',
  'menu.home': '首页',
  'menu.admin': '管理页',
  'menu.admin.sub-page': '二级管理页',
  'menu.login': '登录',
  'menu.customer': '客户管理',
  'menu.employee': '员工管理',
  'menu.register': '注册',
  'menu.register-result': '注册结果',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': '表单页',
  'menu.form.basic-form': '基础表单',
  'menu.form.step-form': '分步表单',
  'menu.form.step-form.info': '分步表单（填写转账信息）',
  'menu.form.step-form.confirm': '分步表单（确认转账信息）',
  'menu.form.step-form.result': '分步表单（完成）',
  'menu.form.advanced-form': '高级表单',
  'menu.list': '列表页',
  'menu.list.table-list': '查询表格',
  'menu.list.basic-list': '标准列表',
  'menu.list.card-list': '卡片列表',
  'menu.list.search-list': '搜索列表',
  'menu.list.search-list.articles': '搜索列表（文章）',
  'menu.list.search-list.projects': '搜索列表（项目）',
  'menu.list.search-list.applications': '搜索列表（应用）',
  'menu.profile': '详情页',
  'menu.profile.basic': '基础详情页',
  'menu.profile.advanced': '高级详情页',
  'menu.result': '结果页',
  'menu.result.success': '成功页',
  'menu.result.fail': '失败页',
  'menu.exception': '异常页',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': '触发错误',
  'menu.account': '个人页',
  'menu.account.center': '个人中心',
  'menu.account.settings': '个人设置',
  'menu.account.trigger': '触发报错',
  'menu.account.logout': '退出登录',
  'menu.editor': '图形编辑器',
  'menu.editor.flow': '流程编辑器',
  'menu.editor.mind': '脑图编辑器',
  'menu.editor.koni': '拓扑编辑器'
});

/***/ }),

/***/ "./src/locales/zh-CN/pages.ts":
/*!************************************!*\
  !*** ./src/locales/zh-CN/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'Ant Design 是西湖区最具影响力的 Web 设计规范',
  'pages.login.accountLogin.tab': '账户密码登录',
  'pages.login.accountLogin.errorMessage': '错误的用户名和密码(admin/ant.design)',
  'pages.login.failure': '登录失败，请重试！',
  'pages.login.success': '登录成功！',
  'pages.login.username.placeholder': '用户名: admin or user',
  'pages.login.username.required': '用户名是必填项！',
  'pages.login.password.placeholder': '密码: ant.design',
  'pages.login.password.required': '密码是必填项！',
  'pages.login.phoneLogin.tab': '手机号登录',
  'pages.login.phoneLogin.errorMessage': '验证码错误',
  'pages.login.phoneNumber.placeholder': '请输入手机号！',
  'pages.login.phoneNumber.required': '手机号是必填项！',
  'pages.login.phoneNumber.invalid': '不合法的手机号！',
  'pages.login.captcha.placeholder': '请输入验证码！',
  'pages.login.captcha.required': '验证码是必填项！',
  'pages.login.phoneLogin.getVerificationCode': '获取验证码',
  'pages.getCaptchaSecondText': '秒后重新获取',
  'pages.login.rememberMe': '自动登录',
  'pages.login.forgotPassword': '忘记密码 ?',
  'pages.login.submit': '登录',
  'pages.login.loginWith': '其他登录方式 :',
  'pages.login.registerAccount': '注册账户',
  'pages.welcome.advancedComponent': '高级表格',
  'pages.welcome.link': '欢迎使用',
  'pages.welcome.advancedLayout': '高级布局',
  'pages.welcome.alertMessage': '更快更强的重型组件，已经发布。',
  'pages.admin.subPage.title': ' 这个页面只有 admin 权限才能查看',
  'pages.admin.subPage.alertMessage': 'umi ui 现已发布，欢迎使用 npm run ui 启动体验。',
  'pages.searchTable.createForm.newRule': '新建规则',
  'pages.searchTable.updateForm.ruleConfig': '规则配置',
  'pages.searchTable.updateForm.basicConfig': '基本信息',
  'pages.searchTable.updateForm.ruleName.nameLabel': '规则名称',
  'pages.searchTable.updateForm.ruleName.nameRules': '请输入规则名称！',
  'pages.searchTable.updateForm.ruleDesc.descLabel': '规则描述',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': '请输入至少五个字符',
  'pages.searchTable.updateForm.ruleDesc.descRules': '请输入至少五个字符的规则描述！',
  'pages.searchTable.updateForm.ruleProps.title': '配置规则属性',
  'pages.searchTable.updateForm.object': '监控对象',
  'pages.searchTable.updateForm.ruleProps.templateLabel': '规则模板',
  'pages.searchTable.updateForm.ruleProps.typeLabel': '规则类型',
  'pages.searchTable.updateForm.schedulingPeriod.title': '设定调度周期',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': '开始时间',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': '请选择开始时间！',
  'pages.searchTable.titleDesc': '描述',
  'pages.searchTable.ruleName': '规则名称为必填项',
  'pages.searchTable.titleCallNo': '服务调用次数',
  'pages.searchTable.titleStatus': '状态',
  'pages.searchTable.nameStatus.default': '关闭',
  'pages.searchTable.nameStatus.running': '运行中',
  'pages.searchTable.nameStatus.online': '已上线',
  'pages.searchTable.nameStatus.abnormal': '异常',
  'pages.searchTable.titleUpdatedAt': '上次调度时间',
  'pages.searchTable.exception': '请输入异常原因！',
  'pages.searchTable.titleOption': '操作',
  'pages.searchTable.config': '配置',
  'pages.searchTable.subscribeAlert': '订阅警报',
  'pages.searchTable.title': '查询表格',
  'pages.searchTable.new': '新建',
  'pages.searchTable.chosen': '已选择',
  'pages.searchTable.item': '项',
  'pages.searchTable.totalServiceCalls': '服务调用次数总计',
  'pages.searchTable.tenThousand': '万',
  'pages.searchTable.batchDeletion': '批量删除',
  'pages.searchTable.batchApproval': '批量审批'
});

/***/ }),

/***/ "./src/locales/zh-CN/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/zh-CN/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': '当前处于离线状态',
  'app.pwa.serviceworker.updated': '有新内容',
  'app.pwa.serviceworker.updated.hint': '请点击“刷新”按钮或者手动刷新页面',
  'app.pwa.serviceworker.updated.ok': '刷新'
});

/***/ }),

/***/ "./src/locales/zh-CN/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/zh-CN/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': '整体风格设置',
  'app.setting.pagestyle.dark': '暗色菜单风格',
  'app.setting.pagestyle.light': '亮色菜单风格',
  'app.setting.content-width': '内容区域宽度',
  'app.setting.content-width.fixed': '定宽',
  'app.setting.content-width.fluid': '流式',
  'app.setting.themecolor': '主题色',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '极光绿',
  'app.setting.themecolor.daybreak': '拂晓蓝（默认）',
  'app.setting.themecolor.geekblue': '极客蓝',
  'app.setting.themecolor.purple': '酱紫',
  'app.setting.navigationmode': '导航模式',
  'app.setting.sidemenu': '侧边菜单布局',
  'app.setting.topmenu': '顶部菜单布局',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定侧边菜单',
  'app.setting.fixedsidebar.hint': '侧边菜单布局时可配置',
  'app.setting.hideheader': '下滑时隐藏 Header',
  'app.setting.hideheader.hint': '固定 Header 时可配置',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷贝设置',
  'app.setting.copyinfo': '拷贝成功，请到 config/defaultSettings.js 中替换默认配置',
  'app.setting.production.hint': '配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件'
});

/***/ }),

/***/ "./src/locales/zh-CN/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/zh-CN/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': '基本设置',
  'app.settings.menuMap.security': '安全设置',
  'app.settings.menuMap.binding': '账号绑定',
  'app.settings.menuMap.notification': '新消息通知',
  'app.settings.basic.avatar': '头像',
  'app.settings.basic.change-avatar': '更换头像',
  'app.settings.basic.email': '邮箱',
  'app.settings.basic.email-message': '请输入您的邮箱!',
  'app.settings.basic.nickname': '昵称',
  'app.settings.basic.nickname-message': '请输入您的昵称!',
  'app.settings.basic.profile': '个人简介',
  'app.settings.basic.profile-message': '请输入个人简介!',
  'app.settings.basic.profile-placeholder': '个人简介',
  'app.settings.basic.country': '国家/地区',
  'app.settings.basic.country-message': '请输入您的国家或地区!',
  'app.settings.basic.geographic': '所在省市',
  'app.settings.basic.geographic-message': '请输入您的所在省市!',
  'app.settings.basic.address': '街道地址',
  'app.settings.basic.address-message': '请输入您的街道地址!',
  'app.settings.basic.phone': '联系电话',
  'app.settings.basic.phone-message': '请输入您的联系电话!',
  'app.settings.basic.update': '更新基本信息',
  'app.settings.security.strong': '强',
  'app.settings.security.medium': '中',
  'app.settings.security.weak': '弱',
  'app.settings.security.password': '账户密码',
  'app.settings.security.password-description': '当前密码强度',
  'app.settings.security.phone': '密保手机',
  'app.settings.security.phone-description': '已绑定手机',
  'app.settings.security.question': '密保问题',
  'app.settings.security.question-description': '未设置密保问题，密保问题可有效保护账户安全',
  'app.settings.security.email': '备用邮箱',
  'app.settings.security.email-description': '已绑定邮箱',
  'app.settings.security.mfa': 'MFA 设备',
  'app.settings.security.mfa-description': '未绑定 MFA 设备，绑定后，可以进行二次确认',
  'app.settings.security.modify': '修改',
  'app.settings.security.set': '设置',
  'app.settings.security.bind': '绑定',
  'app.settings.binding.taobao': '绑定淘宝',
  'app.settings.binding.taobao-description': '当前未绑定淘宝账号',
  'app.settings.binding.alipay': '绑定支付宝',
  'app.settings.binding.alipay-description': '当前未绑定支付宝账号',
  'app.settings.binding.dingding': '绑定钉钉',
  'app.settings.binding.dingding-description': '当前未绑定钉钉账号',
  'app.settings.binding.bind': '绑定',
  'app.settings.notification.password': '账户密码',
  'app.settings.notification.password-description': '其他用户的消息将以站内信的形式通知',
  'app.settings.notification.messages': '系统消息',
  'app.settings.notification.messages-description': '系统消息将以站内信的形式通知',
  'app.settings.notification.todo': '待办任务',
  'app.settings.notification.todo-description': '待办任务将以站内信的形式通知',
  'app.settings.open': '开',
  'app.settings.close': '关'
});

/***/ }),

/***/ "./src/.umi/dumi/apis.json":
/*!*********************************!*\
  !*** ./src/.umi/dumi/apis.json ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);