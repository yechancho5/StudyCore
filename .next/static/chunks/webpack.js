/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/webpack/" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("static/webpack/" + __webpack_require__.h() + ".webpack.hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("487e3693252e0ef0")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "_N_E:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = __webpack_require__.tu(url);
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: (script) => (script),
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	(() => {
/******/ 		__webpack_require__.ts = (script) => (__webpack_require__.tt().createScript(script));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				const hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				const cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : () => {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"webpack": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate_N_E"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	
/******/ })()

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJpZ25vcmVMaXN0IjpbMF0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZXMiOlsid2VicGFjay1pbnRlcm5hbDovL25leHRqcy93ZWJwYWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgc291cmNlIHdhcyBnZW5lcmF0ZWQgYnkgTmV4dC5qcyBiYXNlZCBvZmYgb2YgdGhlIGdlbmVyYXRlZCBXZWJwYWNrIHJ1bnRpbWUuXG4vLyBUaGUgbWFwcGluZ3MgYXJlIGluY29ycmVjdC5cbi8vIFRvIGdldCB0aGUgY29ycmVjdCBsaW5lL2NvbHVtbiBtYXBwaW5ncywgdHVybiBvZmYgc291cmNlbWFwcyBpbiB5b3VyIGRlYnVnZ2VyLlxuXG4vKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG4vKioqKioqLyBcdFx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuLyoqKioqKi8gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbi8qKioqKiovIFx0XHR9IGZpbmFsbHkge1xuLyoqKioqKi8gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0dmFyIGRlZmVycmVkID0gW107XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuLyoqKioqKi8gXHRcdFx0aWYoY2h1bmtJZHMpIHtcbi8qKioqKiovIFx0XHRcdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuLyoqKioqKi8gXHRcdFx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuLyoqKioqKi8gXHRcdFx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuLyoqKioqKi8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG4vKioqKioqLyBcdFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG4vKioqKioqLyBcdFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZihmdWxmaWxsZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuLyoqKioqKi8gXHRcdFx0XHRcdHZhciByID0gZm4oKTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gcmVzdWx0O1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuLyoqKioqKi8gXHRcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuLyoqKioqKi8gXHRcdFx0XHQoKSA9PiAobW9kdWxlKTtcbi8qKioqKiovIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcbi8qKioqKiovIFx0XHRcdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIFwic3RhdGljL3dlYnBhY2svXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJzdGF0aWMvd2VicGFjay9cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIud2VicGFjay5ob3QtdXBkYXRlLmpzb25cIik7XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2ggKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ODdlMzY5MzI1MmUwZWYwXCIpXG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG4vKioqKioqLyBcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbi8qKioqKiovIFx0XHRcdH0gY2F0Y2ggKGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH0pKCk7XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKVxuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0dmFyIGluUHJvZ3Jlc3MgPSB7fTtcbi8qKioqKiovIFx0XHR2YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIl9OX0U6XCI7XG4vKioqKioqLyBcdFx0Ly8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuLyoqKioqKi8gXHRcdFx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcbi8qKioqKiovIFx0XHRcdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4vKioqKioqLyBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpZighc2NyaXB0KSB7XG4vKioqKioqLyBcdFx0XHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuLyoqKioqKi8gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbi8qKioqKiovIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnR1KHVybCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG4vKioqKioqLyBcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuLyoqKioqKi8gXHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4vKioqKioqLyBcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG4vKioqKioqLyBcdFx0XHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG4vKioqKioqLyBcdFx0XHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4vKioqKioqLyBcdFx0XHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuLyoqKioqKi8gXHRcdFx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuLyoqKioqKi8gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuLyoqKioqKi8gXHRcdFx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcbi8qKioqKiovIFx0XHRcdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUucGF0aHMgPSBbXTtcbi8qKioqKiovIFx0XHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBtb2R1bGU7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS90cnVzdGVkIHR5cGVzIHBvbGljeSAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdHZhciBwb2xpY3k7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy50dCA9ICgpID0+IHtcbi8qKioqKiovIFx0XHRcdC8vIENyZWF0ZSBUcnVzdGVkIFR5cGUgcG9saWN5IGlmIFRydXN0ZWQgVHlwZXMgYXJlIGF2YWlsYWJsZSBhbmQgdGhlIHBvbGljeSBkb2Vzbid0IGV4aXN0IHlldC5cbi8qKioqKiovIFx0XHRcdGlmIChwb2xpY3kgPT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0XHRwb2xpY3kgPSB7XG4vKioqKioqLyBcdFx0XHRcdFx0Y3JlYXRlU2NyaXB0OiAoc2NyaXB0KSA9PiAoc2NyaXB0KSxcbi8qKioqKiovIFx0XHRcdFx0XHRjcmVhdGVTY3JpcHRVUkw6ICh1cmwpID0+ICh1cmwpXG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdGlmICh0eXBlb2YgdHJ1c3RlZFR5cGVzICE9PSBcInVuZGVmaW5lZFwiICYmIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRwb2xpY3kgPSB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KFwibmV4dGpzI2J1bmRsZXJcIiwgcG9saWN5KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHBvbGljeTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL3RydXN0ZWQgdHlwZXMgc2NyaXB0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy50cyA9IChzY3JpcHQpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLnR0KCkuY3JlYXRlU2NyaXB0KHNjcmlwdCkpO1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL3RydXN0ZWQgdHlwZXMgc2NyaXB0IHVybCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18udHUgPSAodXJsKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy50dCgpLmNyZWF0ZVNjcmlwdFVSTCh1cmwpKTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4vKioqKioqLyBcdFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFBhcmVudHMgPSBbXTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBzdGF0dXNcbi8qKioqKiovIFx0XHR2YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuLyoqKioqKi8gXHRcdHZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbi8qKioqKiovIFx0XHR2YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBUaGUgdXBkYXRlIGluZm9cbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG4vKioqKioqLyBcdFx0dmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuLyoqKioqKi8gXHRcdFx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuLyoqKioqKi8gXHRcdFx0dmFyIHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKG9wdGlvbnMucmVxdWlyZSwgb3B0aW9ucy5pZCk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG4vKioqKioqLyBcdFx0XHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuLyoqKioqKi8gXHRcdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XG4vKioqKioqLyBcdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbi8qKioqKiovIFx0XHR9KTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkgPSB7fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuLyoqKioqKi8gXHRcdFx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKG5hbWUpIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0Zm9yICh2YXIgbmFtZSBpbiByZXF1aXJlKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gdHJhY2tCbG9ja2luZ1Byb21pc2UocmVxdWlyZS5lKGNodW5rSWQsIGZldGNoUHJpb3JpdHkpKTtcbi8qKioqKiovIFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gZm47XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcbi8qKioqKiovIFx0XHRcdHZhciBfbWFpbiA9IGN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQ7XG4vKioqKioqLyBcdFx0XHR2YXIgaG90ID0ge1xuLyoqKioqKi8gXHRcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4vKioqKioqLyBcdFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4vKioqKioqLyBcdFx0XHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuLyoqKioqKi8gXHRcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuLyoqKioqKi8gXHRcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbi8qKioqKiovIFx0XHRcdFx0X21haW46IF9tYWluLFxuLyoqKioqKi8gXHRcdFx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50UGFyZW50cyA9IG1lLnBhcmVudHMuc2xpY2UoKTtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuLyoqKioqKi8gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHQvLyBNb2R1bGUgQVBJXG4vKioqKioqLyBcdFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbi8qKioqKiovIFx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcbi8qKioqKiovIFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHNldFN0YXR1cyhcInJlYWR5XCIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuLyoqKioqKi8gXHRcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4vKioqKioqLyBcdFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbi8qKioqKiovIFx0XHRcdFx0c3RhdHVzOiBmdW5jdGlvbiAobCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4vKioqKioqLyBcdFx0XHRcdH0sXG4vKioqKioqLyBcdFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChpZHggPj0gMCkgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHR9LFxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHQvLyBpbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4vKioqKioqLyBcdFx0XHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRcdHJldHVybiBob3Q7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG4vKioqKioqLyBcdFx0XHR2YXIgcmVzdWx0cyA9IFtdO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4vKioqKioqLyBcdFx0XHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiB1bmJsb2NrKCkge1xuLyoqKioqKi8gXHRcdFx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bGlzdFtpXSgpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcbi8qKioqKiovIFx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuLyoqKioqKi8gXHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuLyoqKioqKi8gXHRcdFx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuLyoqKioqKi8gXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuLyoqKioqKi8gXHRcdFx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcbi8qKioqKiovIFx0XHRcdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0XHRcdGRlZmF1bHQ6XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbi8qKioqKiovIFx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmVzb2x2ZShmbigpKTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4vKioqKioqLyBcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG4vKioqKioqLyBcdFx0XHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcbi8qKioqKiovIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmICghdXBkYXRlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGtleVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9LCBbXSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFwiKVwiXG4vKioqKioqLyBcdFx0XHRcdFx0KTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuLyoqKioqKi8gXHRcdFx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHIuZXJyb3I7XG4vKioqKioqLyBcdFx0XHRcdH0pXG4vKioqKioqLyBcdFx0XHRcdC5maWx0ZXIoQm9vbGVhbik7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHRocm93IGVycm9yc1swXTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcbi8qKioqKiovIFx0XHRcdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcbi8qKioqKiovIFx0XHRcdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHZhciBlcnJvcjtcbi8qKioqKiovIFx0XHRcdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAobW9kdWxlcykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcbi8qKioqKiovIFx0XHRcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbi8qKioqKiovIFx0XHRcdFx0aWYgKGVycm9yKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4vKioqKioqLyBcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4vKioqKioqLyBcdFx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG4vKioqKioqLyBcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL19uZXh0L1wiO1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL3JlYWN0IHJlZnJlc2ggKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5pKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goKG9wdGlvbnMpID0+IHtcbi8qKioqKiovIFx0XHRcdGNvbnN0IG9yaWdpbmFsRmFjdG9yeSA9IG9wdGlvbnMuZmFjdG9yeTtcbi8qKioqKiovIFx0XHRcdG9wdGlvbnMuZmFjdG9yeSA9IChtb2R1bGVPYmplY3QsIG1vZHVsZUV4cG9ydHMsIHdlYnBhY2tSZXF1aXJlKSA9PiB7XG4vKioqKioqLyBcdFx0XHRcdGNvbnN0IGhhc1JlZnJlc2ggPSB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhIXNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kO1xuLyoqKioqKi8gXHRcdFx0XHRjb25zdCBjbGVhbnVwID0gaGFzUmVmcmVzaCA/IHNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kKG1vZHVsZU9iamVjdC5pZCkgOiAoKSA9PiB7fTtcbi8qKioqKiovIFx0XHRcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdFx0XHRvcmlnaW5hbEZhY3RvcnkuY2FsbCh0aGlzLCBtb2R1bGVPYmplY3QsIG1vZHVsZUV4cG9ydHMsIHdlYnBhY2tSZXF1aXJlKTtcbi8qKioqKiovIFx0XHRcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdFx0XHRjbGVhbnVwKCk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9KVxuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBub29wIGZucyB0byBwcmV2ZW50IHJ1bnRpbWUgZXJyb3JzIGR1cmluZyBpbml0aWFsaXphdGlvblxuLyoqKioqKi8gXHRpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbi8qKioqKiovIFx0XHRzZWxmLiRSZWZyZXNoUmVnJCA9IGZ1bmN0aW9uICgpIHt9O1xuLyoqKioqKi8gXHRcdHNlbGYuJFJlZnJlc2hTaWckID0gZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICh0eXBlKSB7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiB0eXBlO1xuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIG5vIGJhc2VVUklcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLyoqKioqKi8gXHRcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLyoqKioqKi8gXHRcdC8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuLyoqKioqKi8gXHRcdHZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuLyoqKioqKi8gXHRcdFx0XCJ3ZWJwYWNrXCI6IDBcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdC8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0Ly8gbm8gcHJlZmV0Y2hpbmdcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBubyBwcmVsb2FkZWRcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbi8qKioqKiovIFx0XHR2YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG4vKioqKioqLyBcdFx0ZnVuY3Rpb24gbG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcbi8qKioqKiovIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vKioqKioqLyBcdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHJlc29sdmU7XG4vKioqKioqLyBcdFx0XHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG4vKioqKioqLyBcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuLyoqKioqKi8gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4vKioqKioqLyBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG4vKioqKioqLyBcdFx0XHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRzZWxmW1wid2VicGFja0hvdFVwZGF0ZV9OX0VcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuLyoqKioqKi8gXHRcdFx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuLyoqKioqKi8gXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZTtcbi8qKioqKiovIFx0XHR2YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG4vKioqKioqLyBcdFx0dmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuLyoqKioqKi8gXHRcdGZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG4vKioqKioqLyBcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuLyoqKioqKi8gXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWQ6IGlkXG4vKioqKioqLyBcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0IW1vZHVsZSB8fFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuLyoqKioqKi8gXHRcdFx0XHRcdClcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuLyoqKioqKi8gXHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuLyoqKioqKi8gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbi8qKioqKiovIFx0XHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbi8qKioqKiovIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuLyoqKioqKi8gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdGNvbnNvbGUud2Fybihcbi8qKioqKiovIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuLyoqKioqKi8gXHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gbmV3TW9kdWxlRmFjdG9yeVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0PyBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHQ6IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRicmVhaztcbi8qKioqKiovIFx0XHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0YnJlYWs7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGJyZWFrO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVmYXVsdDpcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJldHVybiB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG4vKioqKioqLyBcdFx0XHRcdFx0XHR9O1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoZG9BcHBseSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4vKioqKioqLyBcdFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4vKioqKioqLyBcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuLyoqKioqKi8gXHRcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcbi8qKioqKiovIFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0aWYgKFxuLyoqKioqKi8gXHRcdFx0XHRcdG1vZHVsZSAmJlxuLyoqKioqKi8gXHRcdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcbi8qKioqKiovIFx0XHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4vKioqKioqLyBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbi8qKioqKiovIFx0XHRcdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG4vKioqKioqLyBcdFx0XHRcdCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcbi8qKioqKiovIFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIHtcbi8qKioqKiovIFx0XHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGlkeDtcbi8qKioqKiovIFx0XHRcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbi8qKioqKiovIFx0XHRcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBkYXRhID0ge307XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4vKioqKioqLyBcdFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbi8qKioqKiovIFx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFxuLyoqKioqKi8gXHRcdFx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4vKioqKioqLyBcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3k7XG4vKioqKioqLyBcdFx0XHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fSxcbi8qKioqKiovIFx0XHRcdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuLyoqKioqKi8gXHRcdFx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0XHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbi8qKioqKiovIFx0XHRcdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuLyoqKioqKi8gXHRcdFx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0dHJ5IHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIxKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjEpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuLyoqKioqKi8gXHRcdFx0XHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRcdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9O1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcbi8qKioqKiovIFx0XHRcdGlmICghY3VycmVudFVwZGF0ZSkge1xuLyoqKioqKi8gXHRcdFx0XHRjdXJyZW50VXBkYXRlID0ge307XG4vKioqKioqLyBcdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG4vKioqKioqLyBcdFx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG4vKioqKioqLyBcdFx0XHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcbi8qKioqKiovIFx0XHRcdGNodW5rSWRzLFxuLyoqKioqKi8gXHRcdFx0cmVtb3ZlZENodW5rcyxcbi8qKioqKiovIFx0XHRcdHJlbW92ZWRNb2R1bGVzLFxuLyoqKioqKi8gXHRcdFx0cHJvbWlzZXMsXG4vKioqKioqLyBcdFx0XHRhcHBseUhhbmRsZXJzLFxuLyoqKioqKi8gXHRcdFx0dXBkYXRlZE1vZHVsZXNMaXN0XG4vKioqKioqLyBcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcbi8qKioqKiovIFx0XHRcdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4vKioqKioqLyBcdFx0XHRcdG9ialtrZXldID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdHJldHVybiBvYmo7XG4vKioqKioqLyBcdFx0XHR9LCB7fSk7XG4vKioqKioqLyBcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuLyoqKioqKi8gXHRcdFx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuLyoqKioqKi8gXHRcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcbi8qKioqKiovIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuLyoqKioqKi8gXHRcdFx0XHQpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0fSBlbHNlIHtcbi8qKioqKiovIFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuLyoqKioqKi8gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRpZiAoXG4vKioqKioqLyBcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG4vKioqKioqLyBcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcbi8qKioqKiovIFx0XHRcdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG4vKioqKioqLyBcdFx0XHRcdFx0KSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcbi8qKioqKiovIFx0XHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRcdH07XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuLyoqKioqKi8gXHRcdFx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4vKioqKioqLyBcdFx0XHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuLyoqKioqKi8gXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcbi8qKioqKiovIFx0XHRcbi8qKioqKiovIFx0XHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbi8qKioqKiovIFx0XHR2YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcbi8qKioqKiovIFx0XHRcdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG4vKioqKioqLyBcdFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbi8qKioqKiovIFx0XHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuLyoqKioqKi8gXHRcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcbi8qKioqKiovIFx0XHRcdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG4vKioqKioqLyBcdFx0XHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuLyoqKioqKi8gXHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbi8qKioqKiovIFx0XHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4vKioqKioqLyBcdFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0XG4vKioqKioqLyBcdFx0dmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfTl9FXCJdID0gc2VsZltcIndlYnBhY2tDaHVua19OX0VcIl0gfHwgW107XG4vKioqKioqLyBcdFx0Y2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG4vKioqKioqLyBcdFx0Y2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbm9uY2UgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkO1xuLyoqKioqKi8gXHR9KSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8qKioqKiovIFx0XG4vKioqKioqLyB9KSgpXG4iXX0=
;