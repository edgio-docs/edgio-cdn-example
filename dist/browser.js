(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // <define:process>
  var init_define_process = __esm({
    "<define:process>"() {
    }
  });

  // node_modules/@layer0/prefetch/window/waitForServiceWorker.js
  var require_waitForServiceWorker = __commonJS({
    "node_modules/@layer0/prefetch/window/waitForServiceWorker.js"(exports) {
      init_define_process();
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = {label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: []}, f, y, t, g;
        return g = {next: verb(0), "throw": verb(1), "return": verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {value: op[1], done: false};
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {value: op[0] ? op[1] : void 0, done: true};
        }
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      function waitForServiceWorker() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!navigator.serviceWorker || !navigator.serviceWorker.ready) {
                  throw new Error("service worker not supported");
                }
                return [4, navigator.serviceWorker.ready];
              case 1:
                _a.sent();
                if (navigator.serviceWorker.controller) {
                  return [2, navigator.serviceWorker.controller];
                } else {
                  return [2, new Promise(function(resolve, reject) {
                    navigator.serviceWorker.addEventListener("controllerchange", function() {
                      if (navigator.serviceWorker.controller) {
                        resolve(navigator.serviceWorker.controller);
                      } else {
                        reject(new Error("service worker not supported"));
                      }
                    });
                  })];
                }
                return [2];
            }
          });
        });
      }
      exports.default = waitForServiceWorker;
    }
  });

  // node_modules/@layer0/core/constants.js
  var require_constants = __commonJS({
    "node_modules/@layer0/core/constants.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.LAYER0_CONFIG_FILE = "layer0.config.js";
      exports.LAYER0_ASSET_ALIASES_FILE = "asset-aliases.json";
      exports.LAYER0_ENV_VARIABLES = {
        config: "LAYER0_CONFIG",
        deploymentType: "LAYER0_DEPLOYMENT_TYPE",
        versionOverride: "LAYER0_VERSION_OVERRIDE"
      };
      exports.LAYER0_DEPLOYMENT_TYPE_AWS = "AWS";
      exports.LAYER0_HEADERS_PREFIX = "x-0-";
      exports.LAYER0_MAX_USER_HEADERS_ALLOWED = 70;
      exports.LAYER0_TOO_MANY_HEADERS_STATUS_CODE = 542;
      exports.LAYER0_UNCACHED_PREFETCH_STATUS = 412;
      exports.ACTIONS = {
        setHeader: "set-header",
        updateHeader: "update-header",
        removeHeader: "remove-header",
        syntheticRes: "synthetic-response",
        updatePath: "update-path",
        proxy: "proxy",
        addCookie: "add-cookie",
        updateCookie: "update-cookie",
        removeCookie: "remove-cookie"
      };
      exports.BACKENDS = {
        js: "__js__",
        static: "__static__",
        permanentStatic: "__permanent_static__",
        imageOptimizer: "__image_optimizer__"
      };
      exports.JS_BACKEND_HOSTNAME = "127.0.0.1";
      exports.HTTP_METHODS = {
        head: "head",
        get: "get",
        post: "post",
        delete: "delete",
        put: "put",
        patch: "patch",
        options: "options"
      };
      exports.HTTP_HEADERS = {
        authorization: "authorization",
        acceptEncoding: "accept-encoding",
        cacheControl: "cache-control",
        contentEncoding: "content-encoding",
        contentLength: "content-length",
        contentType: "content-type",
        cookie: "cookie",
        host: "host",
        location: "location",
        serverTiming: "server-timing",
        setCookie: "set-cookie",
        userAgent: "user-agent",
        vary: "vary",
        xForwardedFor: "x-forwarded-for",
        xRequestId: "x-request-id",
        xSwCacheControl: "x-sw-cache-control",
        x0Browser: "x-0-browser",
        x0CacheControl: "x-0-cache-control",
        x0CachingStatus: "x-0-caching-status",
        x0ClientIp: "x-0-client-ip",
        x0Components: "x-0-components",
        x0Destination: "x-0-destination",
        x0Device: "x-0-device",
        x0DeviceIsBot: "x-0-device-is-bot",
        x0GeoCity: "x-0-geo-city",
        x0GeoCountryCode: "x-0-geo-country-code",
        x0GeoLatitude: "x-0-geo-latitude",
        x0GeoLongitude: "x-0-geo-longitude",
        x0GeoPostalCode: "x-0-geo-postal-code",
        x0MatchedRoutes: "x-0-matched-routes",
        x0Protocol: "x-0-protocol",
        x0Route: "x-0-route",
        x0Status: "x-0-status",
        x0SurrogateKey: "x-0-surrogate-key",
        x0T: "x-0-t",
        x0UserT: "x-0-user-t",
        x0Vendor: "x-0-vendor",
        x0Version: "x-0-version"
      };
      exports.CACHING_STATUS = {
        ok: "ok",
        private: "private",
        method: "method",
        bodyTooBig: "body-too-big",
        code: "code",
        setCookie: "set-cookie",
        noMaxAge: "no-max-age"
      };
      exports.CACHEABLE_METHODS = new Set(["get", "head"]);
      exports.THROTTLED_QUERY_PARAM = "layer0_prefetch";
      exports.PREFETCH_QUERY_PARAM = exports.THROTTLED_QUERY_PARAM;
      exports.DEVTOOLS_PREFETCH_QUERY_PARAM = "layer0_dt_pf";
      exports.HEAD_QUERY_PARAM = "layer0_head";
      exports.POST_BODY_QUERY_PARAM = "pref_layer0_body";
      exports.METHOD_QUERY_PARAM = "pref_layer0_method";
      exports.ROUTES_FALLBACK = "fallback";
      exports.ROUTES_CATCH_GROUP = "catch";
      exports.LAYER0_IMAGE_OPTIMIZER_PATH = "/__layer0_image_optimizer";
    }
  });

  // node_modules/@layer0/prefetch/window/getHostName.js
  var require_getHostName = __commonJS({
    "node_modules/@layer0/prefetch/window/getHostName.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function getHostName() {
        return window.location.hostname;
      }
      exports.default = getHostName;
    }
  });

  // node_modules/@layer0/prefetch/window/prefetch.js
  var require_prefetch = __commonJS({
    "node_modules/@layer0/prefetch/window/prefetch.js"(exports) {
      init_define_process();
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = {label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: []}, f, y, t, g;
        return g = {next: verb(0), "throw": verb(1), "return": verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {value: op[1], done: false};
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {value: op[0] ? op[1] : void 0, done: true};
        }
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var waitForServiceWorker_1 = __importDefault(require_waitForServiceWorker());
      var constants_1 = require_constants();
      var getHostName_1 = __importDefault(require_getHostName());
      var MAX_URL_BYTES = Math.pow(2, 13);
      var prefetched = new Set();
      var defaults = {
        includeCacheMisses: false,
        cacheHost: void 0,
        spaRoutes: [],
        forcePrefetchRatio: 0
      };
      var options = defaults;
      function configure(opts) {
        options = __assign(__assign({}, defaults), opts);
      }
      exports.configure = configure;
      function prefetch(url, as, config) {
        if (as === void 0) {
          as = "fetch";
        }
        if (config === void 0) {
          config = {cors: "anonymous"};
        }
        return __awaiter(this, void 0, void 0, function() {
          var cacheUrl, link, relList;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (typeof config.cors === "undefined") {
                  config.cors = "anonymous";
                }
                cacheUrl = modifyUrl(url, config);
                if (typeof TextEncoder !== "undefined" && new TextEncoder().encode(cacheUrl).length > MAX_URL_BYTES) {
                  console.warn("URL is too many characters to prefetch and cache: " + cacheUrl);
                  return [2];
                }
                if (prefetched.has(cacheUrl)) {
                  return [2];
                }
                prefetched.add(cacheUrl);
                return [4, waitForServiceWorker_1.default()];
              case 1:
                _a.sent();
                link = document.createElement("link");
                relList = link.relList;
                link.setAttribute("href", cacheUrl);
                if (config.cors) {
                  link.setAttribute("crossorigin", config.cors);
                }
                link.setAttribute("rel", relList.supports("preload") && !relList.supports("prefetch") ? "preload" : "prefetch");
                link.setAttribute("as", as);
                document.head.append(link);
                return [2];
            }
          });
        });
      }
      exports.prefetch = prefetch;
      function modifyUrl(url, config) {
        var body = config.body, method = config.method;
        var parsed = new URL(url, window.origin);
        maybeAddHeadParam(parsed);
        if (parsed.hostname === getHostName_1.default()) {
          if (options.cacheHost) {
            var cacheHostUrl = new URL("https://" + options.cacheHost);
            parsed.hostname = cacheHostUrl.hostname;
            parsed.protocol = cacheHostUrl.protocol;
            parsed.port = cacheHostUrl.port;
          }
          appendSearchParam(parsed, constants_1.DEVTOOLS_PREFETCH_QUERY_PARAM, "1");
          maybeAddThrottleParam(parsed);
        }
        if (body) {
          appendSearchParam(parsed, constants_1.POST_BODY_QUERY_PARAM, body);
        }
        if (method) {
          appendSearchParam(parsed, constants_1.METHOD_QUERY_PARAM, method);
        }
        return parsed.toString();
      }
      function appendSearchParam(url, name, value) {
        var separator = url.search.length ? "&" : "?";
        url.search += "" + separator + encodeURIComponent(name) + "=" + encodeURIComponent(value);
      }
      function maybeAddThrottleParam(url) {
        if (!options.includeCacheMisses && shouldAcceptThrottling()) {
          appendSearchParam(url, constants_1.THROTTLED_QUERY_PARAM, "1");
        }
      }
      function shouldAcceptThrottling() {
        return !options.forcePrefetchRatio || Math.random() > options.forcePrefetchRatio;
      }
      function maybeAddHeadParam(url) {
        options.spaRoutes.some(function(routePattern) {
          if (routePattern.test(url.pathname)) {
            appendSearchParam(url, constants_1.HEAD_QUERY_PARAM, "1");
            return true;
          }
        });
      }
    }
  });

  // node_modules/@layer0/prefetch/window/getUserAgent.js
  var require_getUserAgent = __commonJS({
    "node_modules/@layer0/prefetch/window/getUserAgent.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function getUserAgent() {
        return navigator.userAgent;
      }
      exports.default = getUserAgent;
    }
  });

  // node_modules/@layer0/prefetch/window/isSafari.js
  var require_isSafari = __commonJS({
    "node_modules/@layer0/prefetch/window/isSafari.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var getUserAgent_1 = __importDefault(require_getUserAgent());
      var _isSafari = null;
      function isSafari() {
        if (_isSafari == null) {
          _isSafari = /^((?!chrome|android).)*safari/i.test(getUserAgent_1.default());
        }
        return _isSafari;
      }
      exports.isSafari = isSafari;
      function isSafariPrivateWindow() {
        if (!isSafari())
          return false;
        try {
          window.openDatabase(null, null, null, null);
          return false;
        } catch (_) {
          return true;
        }
      }
      exports.isSafariPrivateWindow = isSafariPrivateWindow;
    }
  });

  // node_modules/@layer0/prefetch/window/registerServiceWorker.js
  var require_registerServiceWorker = __commonJS({
    "node_modules/@layer0/prefetch/window/registerServiceWorker.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var isSafari_1 = require_isSafari();
      function registerServiceWorker(serviceWorkerPath) {
        if (isSafari_1.isSafariPrivateWindow()) {
          console.log("skipping service worker in Safari private window");
          unregisterServiceWorker();
          return;
        }
        if ("serviceWorker" in navigator) {
          if (document.readyState === "complete") {
            registerValidSW(serviceWorkerPath);
          } else {
            window.addEventListener("load", function() {
              registerValidSW(serviceWorkerPath);
            });
          }
        }
      }
      exports.registerServiceWorker = registerServiceWorker;
      function registerValidSW(swUrl) {
        navigator.serviceWorker.register(swUrl).then(function(registration) {
          registration.onupdatefound = function() {
            var installingWorker = registration.installing;
            if (!installingWorker)
              return;
            installingWorker.onstatechange = function() {
              console.log("[layer0 service worker] state:", installingWorker.state);
              if (installingWorker.state === "installed") {
                if (navigator.serviceWorker.controller) {
                  document.dispatchEvent(new CustomEvent("sw-update-available"));
                } else {
                  console.log("Content is cached for offline use.");
                }
              }
            };
          };
        }).catch(function(error) {
          console.error("Error during service worker registration:", error);
        });
      }
      function unregisterServiceWorker() {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.ready.then(function(registration) {
            registration.unregister();
          });
        }
      }
      exports.unregisterServiceWorker = unregisterServiceWorker;
    }
  });

  // node_modules/@layer0/prefetch/window/runWhenVisible.js
  var require_runWhenVisible = __commonJS({
    "node_modules/@layer0/prefetch/window/runWhenVisible.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function runWhenVisible(el, callback) {
        if (typeof IntersectionObserver === "undefined")
          return;
        var observer = new IntersectionObserver(function(entries) {
          if (entries[0].intersectionRatio > 0) {
            observer.disconnect();
            callback(el);
          }
        }, {
          threshold: 0.01
        });
        observer.observe(el);
      }
      exports.default = runWhenVisible;
    }
  });

  // node_modules/@layer0/prefetch/window/prefetchWhenVisible.js
  var require_prefetchWhenVisible = __commonJS({
    "node_modules/@layer0/prefetch/window/prefetchWhenVisible.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var prefetch_1 = require_prefetch();
      var runWhenVisible_1 = __importDefault(require_runWhenVisible());
      function prefetchWhenVisible(el) {
        runWhenVisible_1.default(el, function(innerEl) {
          var url = innerEl.getAttribute("href");
          if (url) {
            prefetch_1.prefetch(url);
          }
        });
      }
      exports.default = prefetchWhenVisible;
    }
  });

  // node_modules/@layer0/core/router/universalRouteUtils.js
  var require_universalRouteUtils = __commonJS({
    "node_modules/@layer0/core/router/universalRouteUtils.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var identity = (x) => x;
      function matchCriteriaRegexObjectWithRequestObject(criteriaObj, requestObj, criteriaObjKeyNameFn = identity) {
        let params = {};
        return Object.entries(criteriaObj).every(([name, regex]) => {
          const value = requestObj[criteriaObjKeyNameFn(name)];
          if (regex === null) {
            return value === void 0;
          } else if (typeof regex === "string") {
            if (typeof value === "string" && isParamMatcher(regex)) {
              const paramName = paramMatcherToParam(regex);
              params[paramName] = value;
              return true;
            }
            regex = new RegExp(`^${regex}$`, "i");
          }
          return testRegExp(regex, value);
        }) && params;
      }
      exports.matchCriteriaRegexObjectWithRequestObject = matchCriteriaRegexObjectWithRequestObject;
      function deepMatchObject(source, criteria) {
        return Object.entries(criteria).every(([key, criteriaValue]) => {
          const sourceValue = source[key];
          if (!sourceValue)
            return false;
          if (criteriaValue instanceof RegExp) {
            return testRegExp(criteriaValue, sourceValue);
          } else if (typeof criteriaValue === "object" && criteriaValue !== null) {
            return deepMatchObject(sourceValue, criteriaValue);
          } else {
            return sourceValue == criteriaValue;
          }
        });
      }
      exports.deepMatchObject = deepMatchObject;
      function isParamMatcher(value) {
        return typeof value === "string" && /^:\w+$/.test(value);
      }
      exports.isParamMatcher = isParamMatcher;
      function paramMatcherToParam(value) {
        return value.slice(1);
      }
      exports.paramMatcherToParam = paramMatcherToParam;
      function testRegExp(regexp, value) {
        if (value == null) {
          return false;
        }
        if (regexp.global) {
          regexp = new RegExp(regexp);
        }
        if (Array.isArray(value)) {
          return value.some((v) => regexp.test(v));
        } else {
          return regexp.test(value);
        }
      }
      exports.testRegExp = testRegExp;
    }
  });

  // node_modules/@layer0/core/utils/mapValues.js
  var require_mapValues = __commonJS({
    "node_modules/@layer0/core/utils/mapValues.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function mapValues(obj, callback) {
        const result = {};
        for (let [key, value] of Object.entries(obj)) {
          result[key] = callback(value, key);
        }
        return result;
      }
      exports.default = mapValues;
    }
  });

  // node_modules/@layer0/core/router/CacheManifest.js
  var require_CacheManifest = __commonJS({
    "node_modules/@layer0/core/router/CacheManifest.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var universalRouteUtils_1 = require_universalRouteUtils();
      var mapValues_1 = __importDefault(require_mapValues());
      var CacheManifest = class {
        constructor(entries) {
          this.entries = entries || [];
        }
        get cacheableEntries() {
          return this.entries.filter(CacheManifest.isEntryCacheable);
        }
        get spaRoutes() {
          return this.cacheableEntries.filter(({cacheOptions}) => cacheOptions.browser && cacheOptions.browser.spa).map(({route}) => new RegExp(route, "i"));
        }
        shouldPrefetch(url) {
          let doPrefetch = false;
          this.entries.some((entry) => {
            const matches = CacheManifest.entryMatches(entry, url);
            if (matches) {
              doPrefetch = CacheManifest.isEntryCacheable(entry) || !!entry.cacheOptions.prefetchUpstreamRequests;
              return doPrefetch || entry.returnsResponse;
            }
            return false;
          });
          return doPrefetch;
        }
        static entryMatches(entry, url) {
          return new RegExp(entry.route, "i").test(url.pathname) && universalRouteUtils_1.matchCriteriaRegexObjectWithRequestObject(mapValues_1.default(entry.query || {}, (value) => value ? new RegExp(value, "i") : null), Object.fromEntries(Array.from(url.searchParams.entries()))) && (entry.protocol ? new RegExp(entry.protocol, "i").test(url.protocol) : true);
        }
        static isEntryCacheable({cacheOptions}) {
          return !!(cacheOptions.browser && (cacheOptions.browser.serviceWorkerSeconds || 0) > 0 && cacheOptions.edge && (cacheOptions.edge.maxAgeSeconds || 0) > 0);
        }
        static fromEntries(entries) {
          return new CacheManifest(entries);
        }
        toJSON() {
          return JSON.stringify(this.entries);
        }
      };
      exports.default = CacheManifest;
    }
  });

  // node_modules/@layer0/prefetch/window/watchLinks.js
  var require_watchLinks = __commonJS({
    "node_modules/@layer0/prefetch/window/watchLinks.js"(exports) {
      init_define_process();
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __values = exports && exports.__values || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return {value: o && o[i++], done: !o};
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = {error};
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      var __spread = exports && exports.__spread || function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var prefetchWhenVisible_1 = __importDefault(require_prefetchWhenVisible());
      var CacheManifest_1 = __importDefault(require_CacheManifest());
      var observerDefaults = {
        disabled: false,
        attributes: false
      };
      var observer;
      var searchedEntries = new Set();
      function watchLinks(cacheManifest, observerOpts) {
        if (typeof MutationObserver === "undefined")
          return;
        cacheManifest.entries.forEach(function(entry) {
          return searchedEntries.add(entry);
        });
        observerOpts = __assign(__assign({}, observerDefaults), observerOpts);
        if (!observer) {
          observer = new MutationObserver(function(mutationsList) {
            var e_1, _a;
            try {
              for (var mutationsList_1 = __values(mutationsList), mutationsList_1_1 = mutationsList_1.next(); !mutationsList_1_1.done; mutationsList_1_1 = mutationsList_1.next()) {
                var mutation = mutationsList_1_1.value;
                filterByHref(mutation.addedNodes, CacheManifest_1.default.fromEntries(__spread(searchedEntries.values()))).forEach(prefetchWhenVisible_1.default);
              }
            } catch (e_1_1) {
              e_1 = {error: e_1_1};
            } finally {
              try {
                if (mutationsList_1_1 && !mutationsList_1_1.done && (_a = mutationsList_1.return))
                  _a.call(mutationsList_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          });
          if (!observerOpts.disabled) {
            observer.observe(document.body, {
              attributes: observerOpts.attributes,
              childList: true,
              subtree: true
            });
          }
        }
        filterByHref(document.querySelectorAll("a"), cacheManifest).forEach(prefetchWhenVisible_1.default);
      }
      exports.default = watchLinks;
      function filterByHref(nodes, cacheManifest) {
        var isMatchingLink = function(el) {
          var href = el.getAttribute("href");
          if (!href || el.tagName.toLowerCase() !== "a") {
            return false;
          }
          return cacheManifest.shouldPrefetch(new URL(href, window.location.href));
        };
        var results = new Set();
        Array.from(nodes).forEach(function(n) {
          if (n.nodeType === Node.ELEMENT_NODE) {
            var el = n;
            var links = __spread([el], Array.from(el.querySelectorAll("a")));
            links.filter(isMatchingLink).forEach(function(link) {
              return results.add(link);
            });
          }
        });
        return results;
      }
    }
  });

  // node_modules/@layer0/prefetch/window/loadManifest.js
  var require_loadManifest = __commonJS({
    "node_modules/@layer0/prefetch/window/loadManifest.js"(exports) {
      init_define_process();
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = {label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: []}, f, y, t, g;
        return g = {next: verb(0), "throw": verb(1), "return": verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {value: op[1], done: false};
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {value: op[0] ? op[1] : void 0, done: true};
        }
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      function loadManifest(options) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, new Promise(function(resolve) {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.async = true;
              script.onload = resolve;
              var manifestURL = "__layer0__/cache-manifest.js";
              if (options === null || options === void 0 ? void 0 : options.cacheHost) {
                manifestURL = new URL("https://" + options.cacheHost).toString() + manifestURL;
                script.src = manifestURL;
              } else {
                script.src = "/" + manifestURL;
              }
              document.getElementsByTagName("head")[0].appendChild(script);
            })];
          });
        });
      }
      exports.default = loadManifest;
    }
  });

  // node_modules/@layer0/prefetch/window/watchElements.js
  var require_watchElements = __commonJS({
    "node_modules/@layer0/prefetch/window/watchElements.js"(exports) {
      init_define_process();
      "use strict";
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = {error};
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      var __spread = exports && exports.__spread || function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      var __values = exports && exports.__values || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return {value: o && o[i++], done: !o};
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var runWhenVisible_1 = __importDefault(require_runWhenVisible());
      var observer;
      var watchConfigs = new Set();
      function watchElements(configArr) {
        if (typeof MutationObserver === "undefined")
          return;
        if (!configArr || !configArr.length)
          return;
        configArr.forEach(function(watch) {
          return watchConfigs.add(watch);
        });
        if (!observer) {
          observer = new MutationObserver(function(mutationsList) {
            var e_1, _a;
            var _loop_1 = function(mutation2) {
              ;
              __spread(watchConfigs).forEach(function(watch) {
                filterBySelector(mutation2.addedNodes, watch.selector).forEach(function(match) {
                  return runWhenVisible_1.default(match, watch.callback);
                });
              });
            };
            try {
              for (var mutationsList_1 = __values(mutationsList), mutationsList_1_1 = mutationsList_1.next(); !mutationsList_1_1.done; mutationsList_1_1 = mutationsList_1.next()) {
                var mutation = mutationsList_1_1.value;
                _loop_1(mutation);
              }
            } catch (e_1_1) {
              e_1 = {error: e_1_1};
            } finally {
              try {
                if (mutationsList_1_1 && !mutationsList_1_1.done && (_a = mutationsList_1.return))
                  _a.call(mutationsList_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          });
        }
        observer.observe(document.body, {
          subtree: true,
          childList: true
        });
        configArr.forEach(function(watch) {
          document.querySelectorAll(watch.selector).forEach(function(match) {
            var el = match;
            runWhenVisible_1.default(el, watch.callback);
          });
        });
      }
      exports.default = watchElements;
      function filterBySelector(nodes, selector) {
        var results = new Set();
        Array.from(nodes).forEach(function(n) {
          if (n.nodeType === Node.ELEMENT_NODE) {
            var el = n;
            if (el.matches(selector)) {
              results.add(el);
            } else {
              var matches = el.querySelectorAll(selector);
              matches.forEach(function(match) {
                return results.add(match);
              });
            }
          }
        });
        return results;
      }
    }
  });

  // node_modules/@layer0/prefetch/window/install.js
  var require_install = __commonJS({
    "node_modules/@layer0/prefetch/window/install.js"(exports) {
      init_define_process();
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = {label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: []}, f, y, t, g;
        return g = {next: verb(0), "throw": verb(1), "return": verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {value: op[1], done: false};
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {value: op[0] ? op[1] : void 0, done: true};
        }
      };
      var __read = exports && exports.__read || function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = {error};
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      var __spread = exports && exports.__spread || function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var prefetch_1 = require_prefetch();
      var registerServiceWorker_1 = require_registerServiceWorker();
      var watchLinks_1 = __importDefault(require_watchLinks());
      var loadManifest_1 = __importDefault(require_loadManifest());
      var watchElements_1 = __importDefault(require_watchElements());
      var CacheManifest_1 = __importDefault(require_CacheManifest());
      var defaults = {
        includeCacheMisses: false,
        cacheHost: void 0,
        forcePrefetchRatio: 0
      };
      function install2(options) {
        return __awaiter(this, void 0, void 0, function() {
          var spaRoutes, serviceWorker, prefetchURLs, watch, _a, serviceWorkerPath, observe, cacheManifest, prefetchPatterns;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                options = __assign(__assign({}, defaults), options);
                spaRoutes = [];
                serviceWorker = navigator.serviceWorker;
                if (typeof serviceWorker === "undefined") {
                  return [2];
                }
                prefetchURLs = options.prefetchURLs, watch = options.watch, _a = options.serviceWorkerPath, serviceWorkerPath = _a === void 0 ? "/service-worker.js" : _a, observe = options.observe;
                return [4, loadManifest_1.default({cacheHost: options.cacheHost})];
              case 1:
                _b.sent();
                cacheManifest = CacheManifest_1.default.fromEntries(window.__LAYER0_CACHE_MANIFEST__ || []);
                prefetchPatterns = __spread(options.prefetchPatterns || []).map(function(routeRegex) {
                  return {
                    criteriaPath: routeRegex.source,
                    route: routeRegex.source,
                    cacheOptions: {edge: {maxAgeSeconds: 1}, browser: {serviceWorkerSeconds: 1}},
                    returnsResponse: false
                  };
                });
                spaRoutes.push.apply(spaRoutes, __spread(cacheManifest.spaRoutes));
                prefetch_1.configure(__assign(__assign({}, options), {spaRoutes}));
                registerServiceWorker_1.registerServiceWorker(serviceWorkerPath);
                prefetchURLs === null || prefetchURLs === void 0 ? void 0 : prefetchURLs.forEach(function(url) {
                  return prefetch_1.prefetch(url);
                });
                watchLinks_1.default(cacheManifest, observe);
                watchLinks_1.default(CacheManifest_1.default.fromEntries(prefetchPatterns));
                watchElements_1.default(watch);
                serviceWorker.addEventListener("message", function(event) {
                  if (event.data.action === "prefetch") {
                    prefetch_1.prefetch(event.data.url, event.data.as, event.data.options);
                  }
                });
                return [2];
            }
          });
        });
      }
      exports.default = install2;
    }
  });

  // node_modules/@layer0/devtools/install.js
  var require_install2 = __commonJS({
    "node_modules/@layer0/devtools/install.js"(exports, module) {
      init_define_process();
      var LAYER0_DEVTOOLS_ASSETS_PATH = "/__layer0__/devtools/";
      var LAYER0_DEVTOOLS_MAIN_JS = LAYER0_DEVTOOLS_ASSETS_PATH + "main.js";
      var LAYER0_DEVTOOLS_MAIN_CSS = LAYER0_DEVTOOLS_ASSETS_PATH + "main.css";
      var LAYER0_DEVTOOLS_COOKIE = "layer0_devtools_enabled";
      var LAYER0_DEVTOOLS_ENV_COOKIE = "layer0_devtools_env_enabled";
      function getCookieValue(cookieName) {
        const cookieContent = document.cookie;
        if (cookieContent.indexOf(cookieName + "=") === -1) {
          return null;
        }
        return cookieContent.indexOf(cookieName + "=true") >= 0;
      }
      function isEnabled() {
        const userCookieValue = getCookieValue(LAYER0_DEVTOOLS_COOKIE);
        if (userCookieValue !== null) {
          return userCookieValue;
        }
        const envCookieValue = getCookieValue(LAYER0_DEVTOOLS_ENV_COOKIE);
        if (envCookieValue !== null) {
          return envCookieValue;
        }
        if (/127\.0\.0\.1|^localhost(:\d+)?$|moovweb-edge(-dev)?\.io$|layer0(-dev|-limelight|-limelight-dev)?(-perma)?\.link$/.test(window.location.host)) {
          return true;
        }
        return false;
      }
      module.exports = function install2() {
        if (typeof window === "undefined") {
          return;
        }
        if (!isEnabled()) {
          return;
        }
        if (document.head.querySelectorAll('script[src="' + LAYER0_DEVTOOLS_MAIN_JS + '"]').length) {
          return;
        }
        const script = document.createElement("script");
        const link = document.createElement("link");
        script.defer = true;
        script.src = LAYER0_DEVTOOLS_MAIN_JS;
        link.rel = "stylesheet";
        link.href = LAYER0_DEVTOOLS_MAIN_CSS;
        document.head.appendChild(script);
        document.head.appendChild(link);
      };
    }
  });

  // src/browser.ts
  init_define_process();
  var import_install = __toModule(require_install());
  var import_install2 = __toModule(require_install2());
  document.addEventListener("DOMContentLoaded", function() {
    (0, import_install2.default)();
    (0, import_install.default)();
  });
})();
