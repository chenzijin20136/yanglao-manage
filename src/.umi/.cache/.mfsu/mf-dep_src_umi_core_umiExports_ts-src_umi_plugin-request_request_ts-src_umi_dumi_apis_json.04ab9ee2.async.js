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
    var currentRouteAccessible = typeof currentRoute.unaccessible === 'boolean' ? !currentRoute.unaccessible : true; // ??????????????????????????????????????????

    if (currentRoute && currentRoute.access) {
      if (typeof currentRoute.access !== 'string') {
        throw new Error('[plugin-access]: "access" field set in "' + currentRoute.path + '" route should be a string.');
      }

      var accessProp = access[currentRoute.access]; // ?????????????????????????????????

      if (typeof accessProp === 'function') {
        currentRouteAccessible = accessProp(currentRoute);
      } else if (typeof accessProp === 'boolean') {
        // ????????????????????? copy
        currentRouteAccessible = accessProp;
      }

      currentRoute.unaccessible = !currentRouteAccessible;
    } // ???????????????


    if (currentRoute.routes || currentRoute.childRoutes) {
      var childRoutes = currentRoute.routes || currentRoute.childRoutes;

      if (!Array.isArray(childRoutes)) {
        return currentRoute;
      } // ???????????????????????????????????????????????????
      // ??????????????? ???????????????????????????????????????


      childRoutes.forEach(function (childRoute) {
        childRoute.unaccessible = !currentRouteAccessible;
      });
      var finallyChildRoute = traverseModifyRoutes(childRoutes, access); // ????????????????????????????????????????????????????????????????????????

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
    label: '??????????????',
    icon: '????????',
    title: '??????'
  },
  'az-AZ': {
    lang: 'az-AZ',
    label: 'Az??rbaycan dili',
    icon: '????????',
    title: 'Dil'
  },
  'bg-BG': {
    lang: 'bg-BG',
    label: '?????????????????? ????????',
    icon: '????????',
    title: '????????'
  },
  'bn-BD': {
    lang: 'bn-BD',
    label: '???????????????',
    icon: '????????',
    title: '????????????'
  },
  'ca-ES': {
    lang: 'ca-ES',
    label: 'Catal??',
    icon: '????????',
    title: 'llengua'
  },
  'cs-CZ': {
    lang: 'cs-CZ',
    label: '??e??tina',
    icon: '????????',
    title: 'Jazyk'
  },
  'da-DK': {
    lang: 'da-DK',
    label: 'Dansk',
    icon: '????????',
    title: 'Sprog'
  },
  'de-DE': {
    lang: 'de-DE',
    label: 'Deutsch',
    icon: '????????',
    title: 'Sprache'
  },
  'el-GR': {
    lang: 'el-GR',
    label: '????????????????',
    icon: '????????',
    title: '????????????'
  },
  'en-GB': {
    lang: 'en-GB',
    label: 'English',
    icon: '????????',
    title: 'Language'
  },
  'en-US': {
    lang: 'en-US',
    label: 'English',
    icon: '????????',
    title: 'Language'
  },
  'es-ES': {
    lang: 'es-ES',
    label: 'Espa??ol',
    icon: '????????',
    title: 'Idioma'
  },
  'et-EE': {
    lang: 'et-EE',
    label: 'Eesti',
    icon: '????????',
    title: 'Keel'
  },
  'fa-IR': {
    lang: 'fa-IR',
    label: '??????????',
    icon: '????????',
    title: '????????'
  },
  'fi-FI': {
    lang: 'fi-FI',
    label: 'Suomi',
    icon: '????????',
    title: 'Kieli'
  },
  'fr-BE': {
    lang: 'fr-BE',
    label: 'Fran??ais',
    icon: '????????',
    title: 'Langue'
  },
  'fr-FR': {
    lang: 'fr-FR',
    label: 'Fran??ais',
    icon: '????????',
    title: 'Langue'
  },
  'ga-IE': {
    lang: 'ga-IE',
    label: 'Gaeilge',
    icon: '????????',
    title: 'Teanga'
  },
  'he-IL': {
    lang: 'he-IL',
    label: '??????????',
    icon: '????????',
    title: '??????'
  },
  'hi-IN': {
    lang: 'hi-IN',
    label: '??????????????????, ???????????????',
    icon: '????????',
    title: '????????????: ??????????????????'
  },
  'hr-HR': {
    lang: 'hr-HR',
    label: 'Hrvatski jezik',
    icon: '????????',
    title: 'Jezik'
  },
  'hu-HU': {
    lang: 'hu-HU',
    label: 'Magyar',
    icon: '????????',
    title: 'Nyelv'
  },
  'hy-AM': {
    lang: 'hu-HU',
    label: '??????????????',
    icon: '????????',
    title: '??????????'
  },
  'id-ID': {
    lang: 'id-ID',
    label: 'Bahasa Indonesia',
    icon: '????????',
    title: 'Bahasa'
  },
  'it-IT': {
    lang: 'it-IT',
    label: 'Italiano',
    icon: '????????',
    title: 'Linguaggio'
  },
  'is-IS': {
    lang: 'is-IS',
    label: '??slenska',
    icon: '????????',
    title: 'Tungum??l'
  },
  'ja-JP': {
    lang: 'ja-JP',
    label: '?????????',
    icon: '????????',
    title: '??????'
  },
  'ku-IQ': {
    lang: 'ku-IQ',
    label: '??????????',
    icon: '????????',
    title: 'Ziman'
  },
  'kn-IN': {
    lang: 'zh-TW',
    label: '???????????????',
    icon: '????????',
    title: '????????????'
  },
  'ko-KR': {
    lang: 'ko-KR',
    label: '?????????',
    icon: '????????',
    title: '??????'
  },
  'lv-LV': {
    lang: 'lv-LV',
    label: 'Latvie??u valoda',
    icon: '????????',
    title: 'Kalba'
  },
  'mk-MK': {
    lang: 'mk-MK',
    label: '???????????????????? ??????????',
    icon: '????????',
    title: '??????????'
  },
  'mn-MN': {
    lang: 'mn-MN',
    label: '???????????? ??????',
    icon: '????????',
    title: '??????'
  },
  'ms-MY': {
    lang: 'ms-MY',
    label: '???????? ?????????????',
    icon: '????????',
    title: 'Bahasa'
  },
  'nb-NO': {
    lang: 'nb-NO',
    label: 'Norsk',
    icon: '????????',
    title: 'Spr??k'
  },
  'ne-NP': {
    lang: 'ne-NP',
    label: '??????????????????',
    icon: '????????',
    title: '????????????'
  },
  'nl-BE': {
    lang: 'nl-BE',
    label: 'Vlaams',
    icon: '????????',
    title: 'Taal'
  },
  'nl-NL': {
    lang: 'nl-NL',
    label: 'Vlaams',
    icon: '????????',
    title: 'Taal'
  },
  'pt-BR': {
    lang: 'pt-BR',
    label: 'Portugu??s',
    icon: '????????',
    title: 'Idiomas'
  },
  'pt-PT': {
    lang: 'pt-PT',
    label: 'Portugu??s',
    icon: '????????',
    title: 'Idiomas'
  },
  'ro-RO': {
    lang: 'ro-RO',
    label: 'Rom??n??',
    icon: '????????',
    title: 'Limba'
  },
  'ru-RU': {
    lang: 'ru-RU',
    label: '??????????????',
    icon: '????????',
    title: '????????'
  },
  'sk-SK': {
    lang: 'sk-SK',
    label: 'Sloven??ina',
    icon: '????????',
    title: 'Jazyk'
  },
  'sr-RS': {
    lang: 'sr-RS',
    label: '???????????? ??????????',
    icon: '????????',
    title: '??????????'
  },
  'sl-SI': {
    lang: 'sl-SI',
    label: 'Sloven????ina',
    icon: '????????',
    title: 'Jezik'
  },
  'sv-SE': {
    lang: 'sv-SE',
    label: 'Svenska',
    icon: '????????',
    title: 'Spr??k'
  },
  'ta-IN': {
    lang: 'ta-IN',
    label: '???????????????',
    icon: '????????',
    title: '????????????'
  },
  'th-TH': {
    lang: 'th-TH',
    label: '?????????',
    icon: '????????',
    title: '????????????'
  },
  'tr-TR': {
    lang: 'tr-TR',
    label: 'T??rk??e',
    icon: '????????',
    title: 'Dil'
  },
  'uk-UA': {
    lang: 'uk-UA',
    label: '????????????????????',
    icon: '????????',
    title: '????????'
  },
  'vi-VN': {
    lang: 'vi-VN',
    label: 'Ti???ng Vi???t',
    icon: '????????',
    title: 'Ng??n ng???'
  },
  'zh-CN': {
    lang: 'zh-CN',
    label: '????????????',
    icon: '????????',
    title: '??????'
  },
  'zh-TW': {
    lang: 'zh-TW',
    label: '????????????',
    icon: '????????',
    title: '??????'
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
 * ?????????????????????????????????
 * @param name ????????? key
 * @param messages ?????????????????????
 * @param extraLocale momentLocale, antd ?????????
 */

var addLocale = function addLocale(name, messages, extraLocales) {
  var _localeInfo$name, _name$split;

  if (!name) {
    return;
  } // ????????????


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
  }; // ??????????????? name ????????????locale ???????????????????????????????????????????????????

  if (locale === getLocale()) {
    _locale__WEBPACK_IMPORTED_MODULE_1__.event.emit(_locale__WEBPACK_IMPORTED_MODULE_1__.LANG_CHANGE_EVENT, locale);
  }
};
/**
 * ??????????????? intl ?????????????????? node ?????????
 * @param locale ???????????????????????????
 * @param changeIntl ??????????????? g_intl
 * @returns IntlShape
 */

var getIntl = function getIntl(locale, changeIntl) {
  // ??????????????? g_intl ?????????????????? setIntl ??????
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  } // ??????????????? localeInfo ???


  if (locale && localeInfo[locale]) {
    return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)(localeInfo[locale]);
  } // ?????????????????????????????????


  _Users_chenzijin_Desktop_demo_myapp_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2___default()(!locale || !!localeInfo[locale], "The current popular language does not exist, please check the locales folder!"); // ?????? zh-CN

  if (localeInfo["zh-CN"]) return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)(localeInfo["zh-CN"]); // ????????????????????????????????????

  return (0,_Users_chenzijin_Desktop_demo_myapp_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)({
    locale: "zh-CN",
    messages: {}
  });
};
/**
 * ??????????????? intl ?????????
 * @param locale ?????????key
 */

var setIntl = function setIntl(locale) {
  g_intl = getIntl(locale, true);
};
/**
 * ???????????????????????????
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
 * ???????????????????????????
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
 * ????????????
 * @param lang ????????? key
 * @param realReload ?????????????????????????????????
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
        _locale__WEBPACK_IMPORTED_MODULE_1__.event.emit(_locale__WEBPACK_IMPORTED_MODULE_1__.LANG_CHANGE_EVENT, lang); // chrome ????????????????????????????????????????????????

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
 * intl.formatMessage ????????????
 * @deprecated ????????? api ???????????????????????????????????????????????????????????? useIntl ??? injectIntl
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
 * ??????????????????
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
        // ?????? handler ???????????????????????????????????????????????????????????? data
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
    // request method ???????????????
    return requestMethodInstance;
  } // runtime ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  // ???????????? app.ts ???????????????????????????????????????????????????????????????????????????????????????????????????????????????


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
  }, requestConfig)); // ???????????????????????????
  // ?????????????????? { success: boolean, data: any }
  // ?????????????????????????????????????????????

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

              // ??????????????? errorHandler ?????????
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
  'navBar.lang': '??????',
  'layout.user.link.help': '??????',
  'layout.user.link.privacy': '??????',
  'layout.user.link.terms': '??????',
  'app.copyright.produced': '?????????????????????????????????',
  'app.preview.down.block': '??????????????????????????????',
  'app.welcome.link.fetch-blocks': '??????????????????',
  'app.welcome.link.block-list': '?????? block ?????????????????????????????????'
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
  'component.tagSelect.expand': '??????',
  'component.tagSelect.collapse': '??????',
  'component.tagSelect.all': '??????'
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
  'component.globalHeader.search': '????????????',
  'component.globalHeader.search.example1': '???????????????',
  'component.globalHeader.search.example2': '???????????????',
  'component.globalHeader.search.example3': '???????????????',
  'component.globalHeader.help': '????????????',
  'component.globalHeader.notification': '??????',
  'component.globalHeader.notification.empty': '????????????????????????',
  'component.globalHeader.message': '??????',
  'component.globalHeader.message.empty': '????????????????????????',
  'component.globalHeader.event': '??????',
  'component.globalHeader.event.empty': '????????????????????????',
  'component.noticeIcon.clear': '??????',
  'component.noticeIcon.cleared': '?????????',
  'component.noticeIcon.empty': '????????????',
  'component.noticeIcon.view-more': '????????????'
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
  'menu.welcome': '??????',
  'menu.more-blocks': '????????????',
  'menu.home': '??????',
  'menu.admin': '?????????',
  'menu.admin.sub-page': '???????????????',
  'menu.login': '??????',
  'menu.customer': '????????????',
  'menu.employee': '????????????',
  'menu.register': '??????',
  'menu.register-result': '????????????',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': '?????????',
  'menu.dashboard.monitor': '?????????',
  'menu.dashboard.workplace': '?????????',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': '?????????',
  'menu.form.basic-form': '????????????',
  'menu.form.step-form': '????????????',
  'menu.form.step-form.info': '????????????????????????????????????',
  'menu.form.step-form.confirm': '????????????????????????????????????',
  'menu.form.step-form.result': '????????????????????????',
  'menu.form.advanced-form': '????????????',
  'menu.list': '?????????',
  'menu.list.table-list': '????????????',
  'menu.list.basic-list': '????????????',
  'menu.list.card-list': '????????????',
  'menu.list.search-list': '????????????',
  'menu.list.search-list.articles': '????????????????????????',
  'menu.list.search-list.projects': '????????????????????????',
  'menu.list.search-list.applications': '????????????????????????',
  'menu.profile': '?????????',
  'menu.profile.basic': '???????????????',
  'menu.profile.advanced': '???????????????',
  'menu.result': '?????????',
  'menu.result.success': '?????????',
  'menu.result.fail': '?????????',
  'menu.exception': '?????????',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': '????????????',
  'menu.account': '?????????',
  'menu.account.center': '????????????',
  'menu.account.settings': '????????????',
  'menu.account.trigger': '????????????',
  'menu.account.logout': '????????????',
  'menu.editor': '???????????????',
  'menu.editor.flow': '???????????????',
  'menu.editor.mind': '???????????????',
  'menu.editor.koni': '???????????????'
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
  'pages.layouts.userLayout.title': 'Ant Design ?????????????????????????????? Web ????????????',
  'pages.login.accountLogin.tab': '??????????????????',
  'pages.login.accountLogin.errorMessage': '???????????????????????????(admin/ant.design)',
  'pages.login.failure': '???????????????????????????',
  'pages.login.success': '???????????????',
  'pages.login.username.placeholder': '?????????: admin or user',
  'pages.login.username.required': '????????????????????????',
  'pages.login.password.placeholder': '??????: ant.design',
  'pages.login.password.required': '?????????????????????',
  'pages.login.phoneLogin.tab': '???????????????',
  'pages.login.phoneLogin.errorMessage': '???????????????',
  'pages.login.phoneNumber.placeholder': '?????????????????????',
  'pages.login.phoneNumber.required': '????????????????????????',
  'pages.login.phoneNumber.invalid': '????????????????????????',
  'pages.login.captcha.placeholder': '?????????????????????',
  'pages.login.captcha.required': '????????????????????????',
  'pages.login.phoneLogin.getVerificationCode': '???????????????',
  'pages.getCaptchaSecondText': '??????????????????',
  'pages.login.rememberMe': '????????????',
  'pages.login.forgotPassword': '???????????? ?',
  'pages.login.submit': '??????',
  'pages.login.loginWith': '?????????????????? :',
  'pages.login.registerAccount': '????????????',
  'pages.welcome.advancedComponent': '????????????',
  'pages.welcome.link': '????????????',
  'pages.welcome.advancedLayout': '????????????',
  'pages.welcome.alertMessage': '?????????????????????????????????????????????',
  'pages.admin.subPage.title': ' ?????????????????? admin ??????????????????',
  'pages.admin.subPage.alertMessage': 'umi ui ??????????????????????????? npm run ui ???????????????',
  'pages.searchTable.createForm.newRule': '????????????',
  'pages.searchTable.updateForm.ruleConfig': '????????????',
  'pages.searchTable.updateForm.basicConfig': '????????????',
  'pages.searchTable.updateForm.ruleName.nameLabel': '????????????',
  'pages.searchTable.updateForm.ruleName.nameRules': '????????????????????????',
  'pages.searchTable.updateForm.ruleDesc.descLabel': '????????????',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': '???????????????????????????',
  'pages.searchTable.updateForm.ruleDesc.descRules': '?????????????????????????????????????????????',
  'pages.searchTable.updateForm.ruleProps.title': '??????????????????',
  'pages.searchTable.updateForm.object': '????????????',
  'pages.searchTable.updateForm.ruleProps.templateLabel': '????????????',
  'pages.searchTable.updateForm.ruleProps.typeLabel': '????????????',
  'pages.searchTable.updateForm.schedulingPeriod.title': '??????????????????',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': '????????????',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': '????????????????????????',
  'pages.searchTable.titleDesc': '??????',
  'pages.searchTable.ruleName': '????????????????????????',
  'pages.searchTable.titleCallNo': '??????????????????',
  'pages.searchTable.titleStatus': '??????',
  'pages.searchTable.nameStatus.default': '??????',
  'pages.searchTable.nameStatus.running': '?????????',
  'pages.searchTable.nameStatus.online': '?????????',
  'pages.searchTable.nameStatus.abnormal': '??????',
  'pages.searchTable.titleUpdatedAt': '??????????????????',
  'pages.searchTable.exception': '????????????????????????',
  'pages.searchTable.titleOption': '??????',
  'pages.searchTable.config': '??????',
  'pages.searchTable.subscribeAlert': '????????????',
  'pages.searchTable.title': '????????????',
  'pages.searchTable.new': '??????',
  'pages.searchTable.chosen': '?????????',
  'pages.searchTable.item': '???',
  'pages.searchTable.totalServiceCalls': '????????????????????????',
  'pages.searchTable.tenThousand': '???',
  'pages.searchTable.batchDeletion': '????????????',
  'pages.searchTable.batchApproval': '????????????'
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
  'app.pwa.offline': '????????????????????????',
  'app.pwa.serviceworker.updated': '????????????',
  'app.pwa.serviceworker.updated.hint': '???????????????????????????????????????????????????',
  'app.pwa.serviceworker.updated.ok': '??????'
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
  'app.setting.pagestyle': '??????????????????',
  'app.setting.pagestyle.dark': '??????????????????',
  'app.setting.pagestyle.light': '??????????????????',
  'app.setting.content-width': '??????????????????',
  'app.setting.content-width.fixed': '??????',
  'app.setting.content-width.fluid': '??????',
  'app.setting.themecolor': '?????????',
  'app.setting.themecolor.dust': '??????',
  'app.setting.themecolor.volcano': '??????',
  'app.setting.themecolor.sunset': '??????',
  'app.setting.themecolor.cyan': '??????',
  'app.setting.themecolor.green': '?????????',
  'app.setting.themecolor.daybreak': '?????????????????????',
  'app.setting.themecolor.geekblue': '?????????',
  'app.setting.themecolor.purple': '??????',
  'app.setting.navigationmode': '????????????',
  'app.setting.sidemenu': '??????????????????',
  'app.setting.topmenu': '??????????????????',
  'app.setting.fixedheader': '?????? Header',
  'app.setting.fixedsidebar': '??????????????????',
  'app.setting.fixedsidebar.hint': '??????????????????????????????',
  'app.setting.hideheader': '??????????????? Header',
  'app.setting.hideheader.hint': '?????? Header ????????????',
  'app.setting.othersettings': '????????????',
  'app.setting.weakmode': '????????????',
  'app.setting.copy': '????????????',
  'app.setting.copyinfo': '????????????????????? config/defaultSettings.js ?????????????????????',
  'app.setting.production.hint': '?????????????????????????????????????????????????????????????????????????????????????????????????????????'
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
  'app.settings.menuMap.basic': '????????????',
  'app.settings.menuMap.security': '????????????',
  'app.settings.menuMap.binding': '????????????',
  'app.settings.menuMap.notification': '???????????????',
  'app.settings.basic.avatar': '??????',
  'app.settings.basic.change-avatar': '????????????',
  'app.settings.basic.email': '??????',
  'app.settings.basic.email-message': '?????????????????????!',
  'app.settings.basic.nickname': '??????',
  'app.settings.basic.nickname-message': '?????????????????????!',
  'app.settings.basic.profile': '????????????',
  'app.settings.basic.profile-message': '?????????????????????!',
  'app.settings.basic.profile-placeholder': '????????????',
  'app.settings.basic.country': '??????/??????',
  'app.settings.basic.country-message': '??????????????????????????????!',
  'app.settings.basic.geographic': '????????????',
  'app.settings.basic.geographic-message': '???????????????????????????!',
  'app.settings.basic.address': '????????????',
  'app.settings.basic.address-message': '???????????????????????????!',
  'app.settings.basic.phone': '????????????',
  'app.settings.basic.phone-message': '???????????????????????????!',
  'app.settings.basic.update': '??????????????????',
  'app.settings.security.strong': '???',
  'app.settings.security.medium': '???',
  'app.settings.security.weak': '???',
  'app.settings.security.password': '????????????',
  'app.settings.security.password-description': '??????????????????',
  'app.settings.security.phone': '????????????',
  'app.settings.security.phone-description': '???????????????',
  'app.settings.security.question': '????????????',
  'app.settings.security.question-description': '???????????????????????????????????????????????????????????????',
  'app.settings.security.email': '????????????',
  'app.settings.security.email-description': '???????????????',
  'app.settings.security.mfa': 'MFA ??????',
  'app.settings.security.mfa-description': '????????? MFA ?????????????????????????????????????????????',
  'app.settings.security.modify': '??????',
  'app.settings.security.set': '??????',
  'app.settings.security.bind': '??????',
  'app.settings.binding.taobao': '????????????',
  'app.settings.binding.taobao-description': '???????????????????????????',
  'app.settings.binding.alipay': '???????????????',
  'app.settings.binding.alipay-description': '??????????????????????????????',
  'app.settings.binding.dingding': '????????????',
  'app.settings.binding.dingding-description': '???????????????????????????',
  'app.settings.binding.bind': '??????',
  'app.settings.notification.password': '????????????',
  'app.settings.notification.password-description': '???????????????????????????????????????????????????',
  'app.settings.notification.messages': '????????????',
  'app.settings.notification.messages-description': '??????????????????????????????????????????',
  'app.settings.notification.todo': '????????????',
  'app.settings.notification.todo-description': '??????????????????????????????????????????',
  'app.settings.open': '???',
  'app.settings.close': '???'
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