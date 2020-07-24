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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nclass ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"Query\"], {\n      query: GET_PRODUCTS_BY_ID,\n      variables: {\n        ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get('ids')\n      }\n    }, ({\n      data,\n      loading,\n      error\n    }) => {\n      if (loading) return __jsx(\"div\", null, \"Loading\\u2026\");\n      if (error) return __jsx(\"div\", null, error.message);\n      console.log(data);\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(\"p\", null, \"stuff here\"));\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListWithProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcz8zZDY1Il0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQS9COztBQTZCQSxNQUFNQyx3QkFBTixTQUF1Q0MsNENBQUssQ0FBQ0MsU0FBN0MsQ0FBdUQ7QUFDckRDLFFBQU0sR0FBRztBQUNQLFdBQ0UsTUFBQyxrREFBRDtBQUFPLFdBQUssRUFBRUwsa0JBQWQ7QUFBa0MsZUFBUyxFQUFFO0FBQUVNLFdBQUcsRUFBRUMsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVY7QUFBUDtBQUE3QyxPQUNHLENBQUM7QUFBRUMsVUFBRjtBQUFRQyxhQUFSO0FBQWlCQztBQUFqQixLQUFELEtBQThCO0FBQzdCLFVBQUlELE9BQUosRUFBYSxPQUFPLG1DQUFQO0FBQ2IsVUFBSUMsS0FBSixFQUFXLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0MsT0FBWixDQUFQO0FBQ1hDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0EsYUFDRSxNQUFDLHFEQUFELFFBQ0UsOEJBREYsQ0FERjtBQUtELEtBVkgsQ0FERjtBQWNEOztBQWhCb0Q7O0FBbUJ4Q1AsdUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcblxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaGFuZGxlXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxuICAgICAgICBpZFxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0gdmFyaWFibGVzPXt7IGlkczogc3RvcmUuZ2V0KCdpZHMnKSB9fT5cbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxwPnN0dWZmIGhlcmU8L3A+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ResourceList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      open: false\n    });\n\n    _defineProperty(this, \"handleSelection\", resources => {\n      const idsFromResources = resources.selection.map(product => product.id);\n      this.setState({\n        open: false\n      });\n      store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromResources);\n    });\n  }\n\n  render() {\n    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select products',\n        onAction: () => this.setState({\n          open: true\n        })\n      }\n    }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: this.state.open,\n      onSelection: resources => this.handleSelection(resources),\n      onCancel: () => this.setState({\n        open: false\n      })\n    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n      heading: \"Discount your products temporarily\",\n      action: {\n        content: 'Select products',\n        onAction: () => this.setState({\n          open: true\n        })\n      },\n      image: img\n    }, __jsx(\"p\", null, \"Sample app using React and Next.js\"))), __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImltZyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJyZW5kZXIiLCJjb250ZW50Iiwib25BY3Rpb24iLCJzdGF0ZSIsImhhbmRsZVNlbGVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUcsbUVBQVo7O0FBRUEsTUFBTUMsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1DQUMxQjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUQwQjs7QUFBQSw2Q0FnQ2ZDLFNBQUQsSUFBZTtBQUMvQixZQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF5QkMsT0FBRCxJQUFhQSxPQUFPLENBQUNDLEVBQTdDLENBQXpCO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUVQLFlBQUksRUFBRTtBQUFSLE9BQWQ7QUFDQVEscURBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBaUJQLGdCQUFqQjtBQUNELEtBcENpQztBQUFBOztBQUVsQ1EsUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLHFEQUFELFFBQ0UsTUFBQyx1REFBRCxRQUNFLE1BQUMsa0VBQUQ7QUFDRSxXQUFLLEVBQUMsWUFEUjtBQUVFLG1CQUFhLEVBQUU7QUFDYkMsZUFBTyxFQUFFLGlCQURJO0FBRWJDLGdCQUFRLEVBQUUsTUFBTSxLQUFLTCxRQUFMLENBQWM7QUFBRVAsY0FBSSxFQUFFO0FBQVIsU0FBZDtBQUZIO0FBRmpCLE1BREYsRUFRRSxNQUFDLHdFQUFEO0FBQ0Usa0JBQVksRUFBQyxTQURmO0FBRUUsa0JBQVksRUFBRSxLQUZoQjtBQUdFLFVBQUksRUFBRSxLQUFLYSxLQUFMLENBQVdiLElBSG5CO0FBSUUsaUJBQVcsRUFBR0MsU0FBRCxJQUFlLEtBQUthLGVBQUwsQ0FBcUJiLFNBQXJCLENBSjlCO0FBS0UsY0FBUSxFQUFFLE1BQU0sS0FBS00sUUFBTCxDQUFjO0FBQUVQLFlBQUksRUFBRTtBQUFSLE9BQWQ7QUFMbEIsTUFSRixFQWVFLE1BQUMsMkRBQUQ7QUFDRSxhQUFPLEVBQUMsb0NBRFY7QUFFRSxZQUFNLEVBQUU7QUFBRVcsZUFBTyxFQUFFLGlCQUFYO0FBQThCQyxnQkFBUSxFQUFFLE1BQU0sS0FBS0wsUUFBTCxDQUFjO0FBQUVQLGNBQUksRUFBRTtBQUFSLFNBQWQ7QUFBOUMsT0FGVjtBQUdFLFdBQUssRUFBRUo7QUFIVCxPQUtFLHNEQUxGLENBZkYsQ0FERixFQXdCRSxNQUFDLGdFQUFELE9BeEJGLENBREY7QUE0QkQ7O0FBL0JpQzs7QUF1Q3JCQyxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0LCBQYWdlLCBFbXB0eVN0YXRlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0JztcblxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICAgIHRpdGxlPSdTYW1wbGUgQXBwJ1xuICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgICAgcmVzb3VyY2VUeXBlPSdQcm9kdWN0J1xuICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICBoZWFkaW5nPSdEaXNjb3VudCB5b3VyIHByb2R1Y3RzIHRlbXBvcmFyaWx5J1xuICAgICAgICAgICAgYWN0aW9uPXt7IGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLCBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSkgfX1cbiAgICAgICAgICAgIGltYWdlPXtpbWd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+U2FtcGxlIGFwcCB1c2luZyBSZWFjdCBhbmQgTmV4dC5qczwvcD5cbiAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgc3RvcmUuc2V0KCdpZHMnLCBpZHNGcm9tUmVzb3VyY2VzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/a/Desktop/shopify-orders-to-sheets/pages/index.js */"./pages/index.js");


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

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });