module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/@shopify/polaris/locales/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/locales/en.json ***!
  \*******************************************************/
/*! exports provided: Polaris, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"Polaris\\\":{\\\"Avatar\\\":{\\\"label\\\":\\\"Avatar\\\",\\\"labelWithInitials\\\":\\\"Avatar with initials {initials}\\\"},\\\"Autocomplete\\\":{\\\"spinnerAccessibilityLabel\\\":\\\"Loading\\\"},\\\"Badge\\\":{\\\"PROGRESS_LABELS\\\":{\\\"incomplete\\\":\\\"Incomplete\\\",\\\"partiallyComplete\\\":\\\"Partially complete\\\",\\\"complete\\\":\\\"Complete\\\"},\\\"STATUS_LABELS\\\":{\\\"info\\\":\\\"Info\\\",\\\"success\\\":\\\"Success\\\",\\\"warning\\\":\\\"Warning\\\",\\\"critical\\\":\\\"Critical\\\",\\\"attention\\\":\\\"Attention\\\",\\\"new\\\":\\\"New\\\"}},\\\"Button\\\":{\\\"spinnerAccessibilityLabel\\\":\\\"Loading\\\",\\\"connectedDisclosureAccessibilityLabel\\\":\\\"Related actions\\\"},\\\"Common\\\":{\\\"checkbox\\\":\\\"checkbox\\\",\\\"undo\\\":\\\"Undo\\\",\\\"cancel\\\":\\\"Cancel\\\",\\\"newWindowAccessibilityHint\\\":\\\"(opens a new window)\\\",\\\"clear\\\":\\\"Clear\\\",\\\"close\\\":\\\"Close\\\",\\\"submit\\\":\\\"Submit\\\",\\\"more\\\":\\\"More\\\"},\\\"ContextualSaveBar\\\":{\\\"save\\\":\\\"Save\\\",\\\"discard\\\":\\\"Discard\\\"},\\\"DataTable\\\":{\\\"sortAccessibilityLabel\\\":\\\"sort {direction} by\\\",\\\"navAccessibilityLabel\\\":\\\"Scroll table {direction} one column\\\",\\\"totalsRowHeading\\\":\\\"Totals\\\",\\\"totalRowHeading\\\":\\\"Total\\\"},\\\"DatePicker\\\":{\\\"previousMonth\\\":\\\"Show previous month, {previousMonthName} {showPreviousYear}\\\",\\\"nextMonth\\\":\\\"Show next month, {nextMonth} {nextYear}\\\",\\\"today\\\":\\\"Today \\\",\\\"months\\\":{\\\"january\\\":\\\"January\\\",\\\"february\\\":\\\"February\\\",\\\"march\\\":\\\"March\\\",\\\"april\\\":\\\"April\\\",\\\"may\\\":\\\"May\\\",\\\"june\\\":\\\"June\\\",\\\"july\\\":\\\"July\\\",\\\"august\\\":\\\"August\\\",\\\"september\\\":\\\"September\\\",\\\"october\\\":\\\"October\\\",\\\"november\\\":\\\"November\\\",\\\"december\\\":\\\"December\\\"},\\\"daysAbbreviated\\\":{\\\"monday\\\":\\\"Mo\\\",\\\"tuesday\\\":\\\"Tu\\\",\\\"wednesday\\\":\\\"We\\\",\\\"thursday\\\":\\\"Th\\\",\\\"friday\\\":\\\"Fr\\\",\\\"saturday\\\":\\\"Sa\\\",\\\"sunday\\\":\\\"Su\\\"}},\\\"DiscardConfirmationModal\\\":{\\\"title\\\":\\\"Discard all unsaved changes\\\",\\\"message\\\":\\\"If you discard changes, you’ll delete any edits you made since you last saved.\\\",\\\"primaryAction\\\":\\\"Discard changes\\\",\\\"secondaryAction\\\":\\\"Continue editing\\\"},\\\"DropZone\\\":{\\\"overlayTextFile\\\":\\\"Drop file to upload\\\",\\\"overlayTextImage\\\":\\\"Drop image to upload\\\",\\\"errorOverlayTextFile\\\":\\\"File type is not valid\\\",\\\"errorOverlayTextImage\\\":\\\"Image type is not valid\\\",\\\"FileUpload\\\":{\\\"actionTitleFile\\\":\\\"Add file\\\",\\\"actionTitleImage\\\":\\\"Add image\\\",\\\"actionHintFile\\\":\\\"or drop files to upload\\\",\\\"actionHintImage\\\":\\\"or drop images to upload\\\",\\\"label\\\":\\\"Upload file\\\"}},\\\"EmptySearchResult\\\":{\\\"altText\\\":\\\"Empty search results\\\"},\\\"Frame\\\":{\\\"skipToContent\\\":\\\"Skip to content\\\",\\\"Navigation\\\":{\\\"closeMobileNavigationLabel\\\":\\\"Close navigation\\\"}},\\\"Icon\\\":{\\\"backdropWarning\\\":\\\"The {color} icon doesn’t accept backdrops. The icon colors that have backdrops are: {colorsWithBackDrops}\\\"},\\\"ActionMenu\\\":{\\\"RollupActions\\\":{\\\"rollupButton\\\":\\\"Actions\\\"}},\\\"Filters\\\":{\\\"moreFilters\\\":\\\"More filters\\\",\\\"moreFiltersWithCount\\\":\\\"More filters ({count})\\\",\\\"filter\\\":\\\"Filter {resourceName}\\\",\\\"noFiltersApplied\\\":\\\"No filters applied\\\",\\\"cancel\\\":\\\"Cancel\\\",\\\"done\\\":\\\"Done\\\",\\\"clearAllFilters\\\":\\\"Clear all filters\\\",\\\"clear\\\":\\\"Clear\\\",\\\"clearLabel\\\":\\\"Clear {filterName}\\\"},\\\"Modal\\\":{\\\"iFrameTitle\\\":\\\"body markup\\\",\\\"modalWarning\\\":\\\"These required properties are missing from Modal: {missingProps}\\\"},\\\"Pagination\\\":{\\\"previous\\\":\\\"Previous\\\",\\\"next\\\":\\\"Next\\\",\\\"pagination\\\":\\\"Pagination\\\"},\\\"ProgressBar\\\":{\\\"negativeWarningMessage\\\":\\\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\\\",\\\"exceedWarningMessage\\\":\\\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\\\"},\\\"ResourceList\\\":{\\\"sortingLabel\\\":\\\"Sort by\\\",\\\"defaultItemSingular\\\":\\\"item\\\",\\\"defaultItemPlural\\\":\\\"items\\\",\\\"showing\\\":\\\"Showing {itemsCount} {resource}\\\",\\\"showingTotalCount\\\":\\\"Showing {itemsCount} of {totalItemsCount} {resource}\\\",\\\"loading\\\":\\\"Loading {resource}\\\",\\\"selected\\\":\\\"{selectedItemsCount} selected\\\",\\\"allItemsSelected\\\":\\\"All {itemsLength}+ {resourceNamePlural} in your store are selected.\\\",\\\"selectAllItems\\\":\\\"Select all {itemsLength}+ {resourceNamePlural} in your store\\\",\\\"emptySearchResultTitle\\\":\\\"No {resourceNamePlural} found\\\",\\\"emptySearchResultDescription\\\":\\\"Try changing the filters or search term\\\",\\\"selectButtonText\\\":\\\"Select\\\",\\\"a11yCheckboxDeselectAllSingle\\\":\\\"Deselect {resourceNameSingular}\\\",\\\"a11yCheckboxSelectAllSingle\\\":\\\"Select {resourceNameSingular}\\\",\\\"a11yCheckboxDeselectAllMultiple\\\":\\\"Deselect all {itemsLength} {resourceNamePlural}\\\",\\\"a11yCheckboxSelectAllMultiple\\\":\\\"Select all {itemsLength} {resourceNamePlural}\\\",\\\"ariaLiveSingular\\\":\\\"{itemsLength} item\\\",\\\"ariaLivePlural\\\":\\\"{itemsLength} items\\\",\\\"Item\\\":{\\\"actionsDropdownLabel\\\":\\\"Actions for {accessibilityLabel}\\\",\\\"actionsDropdown\\\":\\\"Actions dropdown\\\",\\\"viewItem\\\":\\\"View details for {itemName}\\\"},\\\"BulkActions\\\":{\\\"actionsActivatorLabel\\\":\\\"Actions\\\",\\\"moreActionsActivatorLabel\\\":\\\"More actions\\\",\\\"warningMessage\\\":\\\"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions.\\\"},\\\"FilterCreator\\\":{\\\"filterButtonLabel\\\":\\\"Filter\\\",\\\"selectFilterKeyPlaceholder\\\":\\\"Select a filter…\\\",\\\"addFilterButtonLabel\\\":\\\"Add filter\\\",\\\"showAllWhere\\\":\\\"Show all {resourceNamePlural} where:\\\"},\\\"FilterControl\\\":{\\\"textFieldLabel\\\":\\\"Search {resourceNamePlural}\\\"},\\\"FilterValueSelector\\\":{\\\"selectFilterValuePlaceholder\\\":\\\"Select a filter…\\\"},\\\"DateSelector\\\":{\\\"dateFilterLabel\\\":\\\"Select a value\\\",\\\"dateValueLabel\\\":\\\"Date\\\",\\\"dateValueError\\\":\\\"Match YYYY-MM-DD format\\\",\\\"dateValuePlaceholder\\\":\\\"YYYY-MM-DD\\\",\\\"SelectOptions\\\":{\\\"PastWeek\\\":\\\"in the last week\\\",\\\"PastMonth\\\":\\\"in the last month\\\",\\\"PastQuarter\\\":\\\"in the last 3 months\\\",\\\"PastYear\\\":\\\"in the last year\\\",\\\"ComingWeek\\\":\\\"next week\\\",\\\"ComingMonth\\\":\\\"next month\\\",\\\"ComingQuarter\\\":\\\"in the next 3 months\\\",\\\"ComingYear\\\":\\\"in the next year\\\",\\\"OnOrBefore\\\":\\\"on or before\\\",\\\"OnOrAfter\\\":\\\"on or after\\\"},\\\"FilterLabelForValue\\\":{\\\"past_week\\\":\\\"in the last week\\\",\\\"past_month\\\":\\\"in the last month\\\",\\\"past_quarter\\\":\\\"in the last 3 months\\\",\\\"past_year\\\":\\\"in the last year\\\",\\\"coming_week\\\":\\\"next week\\\",\\\"coming_month\\\":\\\"next month\\\",\\\"coming_quarter\\\":\\\"in the next 3 months\\\",\\\"coming_year\\\":\\\"in the next year\\\",\\\"on_or_before\\\":\\\"before {date}\\\",\\\"on_or_after\\\":\\\"after {date}\\\"}}},\\\"SkeletonPage\\\":{\\\"loadingLabel\\\":\\\"Page loading\\\"},\\\"Spinner\\\":{\\\"warningMessage\\\":\\\"The color {color} is not meant to be used on {size} spinners. The colors available on large spinners are: {colors}\\\"},\\\"Tabs\\\":{\\\"toggleTabsLabel\\\":\\\"More tabs\\\"},\\\"Tag\\\":{\\\"ariaLabel\\\":\\\"Remove {children}\\\"},\\\"TextField\\\":{\\\"characterCount\\\":\\\"{count} characters\\\",\\\"characterCountWithMaxLength\\\":\\\"{count} of {limit} characters used\\\"},\\\"TopBar\\\":{\\\"toggleMenuLabel\\\":\\\"Toggle menu\\\",\\\"SearchField\\\":{\\\"clearButtonLabel\\\":\\\"Clear\\\",\\\"search\\\":\\\"Search\\\"}},\\\"MediaCard\\\":{\\\"popoverButton\\\":\\\"Actions\\\"},\\\"VideoThumbnail\\\":{\\\"playButtonA11yLabel\\\":{\\\"default\\\":\\\"Play video\\\",\\\"defaultWithDuration\\\":\\\"Play video of length {duration}\\\",\\\"duration\\\":{\\\"hours\\\":{\\\"other\\\":{\\\"only\\\":\\\"{hourCount} hours\\\",\\\"andMinutes\\\":\\\"{hourCount} hours and {minuteCount} minutes\\\",\\\"andMinute\\\":\\\"{hourCount} hours and {minuteCount} minute\\\",\\\"minutesAndSeconds\\\":\\\"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds\\\",\\\"minutesAndSecond\\\":\\\"{hourCount} hours, {minuteCount} minutes, and {secondCount} second\\\",\\\"minuteAndSeconds\\\":\\\"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds\\\",\\\"minuteAndSecond\\\":\\\"{hourCount} hours, {minuteCount} minute, and {secondCount} second\\\",\\\"andSeconds\\\":\\\"{hourCount} hours and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{hourCount} hours and {secondCount} second\\\"},\\\"one\\\":{\\\"only\\\":\\\"{hourCount} hour\\\",\\\"andMinutes\\\":\\\"{hourCount} hour and {minuteCount} minutes\\\",\\\"andMinute\\\":\\\"{hourCount} hour and {minuteCount} minute\\\",\\\"minutesAndSeconds\\\":\\\"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds\\\",\\\"minutesAndSecond\\\":\\\"{hourCount} hour, {minuteCount} minutes, and {secondCount} second\\\",\\\"minuteAndSeconds\\\":\\\"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds\\\",\\\"minuteAndSecond\\\":\\\"{hourCount} hour, {minuteCount} minute, and {secondCount} second\\\",\\\"andSeconds\\\":\\\"{hourCount} hour and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{hourCount} hour and {secondCount} second\\\"}},\\\"minutes\\\":{\\\"other\\\":{\\\"only\\\":\\\"{minuteCount} minutes\\\",\\\"andSeconds\\\":\\\"{minuteCount} minutes and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{minuteCount} minutes and {secondCount} second\\\"},\\\"one\\\":{\\\"only\\\":\\\"{minuteCount} minute\\\",\\\"andSeconds\\\":\\\"{minuteCount} minute and {secondCount} seconds\\\",\\\"andSecond\\\":\\\"{minuteCount} minute and {secondCount} second\\\"}},\\\"seconds\\\":{\\\"other\\\":\\\"{secondCount} seconds\\\",\\\"one\\\":\\\"{secondCount} second\\\"}}}}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9wb2xhcmlzL2xvY2FsZXMvZW4uanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@shopify/polaris/locales/en.json\n");

/***/ }),

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9wb2xhcmlzL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@shopify/polaris/styles.css\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris/styles.css */ \"./node_modules/@shopify/polaris/styles.css\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\");\nvar _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\", 1);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nclass MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    const config = {\n      apiKey: \"6c91296bcb8e2e7e5098d3cfa217fb4f\",\n      shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('shopOrigin'),\n      forceRedirect: true\n    };\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"title\", null, \"Sample App\"), __jsx(\"meta\", {\n      charSet: \"utf-8\"\n    })), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n      config: config\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"AppProvider\"], {\n      i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6__\n    }, __jsx(Component, pageProps))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsImNvbmZpZyIsImFwaUtleSIsIkFQSV9LRVkiLCJzaG9wT3JpZ2luIiwiQ29va2llcyIsImdldCIsImZvcmNlUmVkaXJlY3QiLCJ0cmFuc2xhdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBd0I7QUFDdEJDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsZUFBRjtBQUFhQztBQUFiLFFBQTJCLEtBQUtDLEtBQXRDO0FBQ0EsVUFBTUMsTUFBTSxHQUFHO0FBQUVDLFlBQU0sRUFBRUMsa0NBQVY7QUFBbUJDLGdCQUFVLEVBQUVDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQS9CO0FBQTBEQyxtQkFBYSxFQUFFO0FBQXpFLEtBQWY7QUFFQSxXQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsTUFBQyxnREFBRCxRQUNFLGtDQURGLEVBRUU7QUFBTSxhQUFPLEVBQUM7QUFBZCxNQUZGLENBREYsRUFLRSxNQUFDLGtFQUFEO0FBQVUsWUFBTSxFQUFFTjtBQUFsQixPQUNFLE1BQUMsNERBQUQ7QUFBYSxVQUFJLEVBQUVPLDZEQUFZQTtBQUEvQixPQUNFLE1BQUMsU0FBRCxFQUFlVCxTQUFmLENBREYsQ0FERixDQUxGLENBREY7QUFhRDs7QUFsQnFCOztBQXFCVEosb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgJ0BzaG9waWZ5L3BvbGFyaXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMvbG9jYWxlcy9lbi5qc29uJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29uZmlnID0geyBhcGlLZXk6IEFQSV9LRVksIHNob3BPcmlnaW46IENvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyksIGZvcmNlUmVkaXJlY3Q6IHRydWUgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TYW1wbGUgQXBwPC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8UHJvdmlkZXIgY29uZmlnPXtjb25maWd9PlxuICAgICAgICAgIDxBcHBQcm92aWRlciBpMThuPXt0cmFuc2xhdGlvbnN9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvQXBwUHJvdmlkZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });