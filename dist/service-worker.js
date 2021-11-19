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
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
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
  var env, define_process_default;
  var init_define_process = __esm({
    "<define:process>"() {
      env = {NODE_ENV: "development"};
      define_process_default = {env};
    }
  });

  // node_modules/workbox-core/_version.js
  var init_version = __esm({
    "node_modules/workbox-core/_version.js"() {
      init_define_process();
      "use strict";
      try {
        self["workbox:core:5.1.4"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-core/_private/logger.js
  var logger;
  var init_logger = __esm({
    "node_modules/workbox-core/_private/logger.js"() {
      init_define_process();
      init_version();
      logger = define_process_default.env.NODE_ENV === "production" ? null : (() => {
        if (!("__WB_DISABLE_DEV_LOGS" in self)) {
          self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
          debug: `#7f8c8d`,
          log: `#2ecc71`,
          warn: `#f39c12`,
          error: `#c0392b`,
          groupCollapsed: `#3498db`,
          groupEnd: null
        };
        const print = function(method, args) {
          if (self.__WB_DISABLE_DEV_LOGS) {
            return;
          }
          if (method === "groupCollapsed") {
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
              console[method](...args);
              return;
            }
          }
          const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`
          ];
          const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
          console[method](...logPrefix, ...args);
          if (method === "groupCollapsed") {
            inGroup = true;
          }
          if (method === "groupEnd") {
            inGroup = false;
          }
        };
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
          const method = key;
          api[method] = (...args) => {
            print(method, args);
          };
        }
        return api;
      })();
    }
  });

  // node_modules/workbox-core/models/messages/messages.js
  var messages;
  var init_messages = __esm({
    "node_modules/workbox-core/models/messages/messages.js"() {
      init_define_process();
      init_version();
      messages = {
        "invalid-value": ({paramName, validValueDescription, value}) => {
          if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
          }
          return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
        },
        "not-an-array": ({moduleName, className, funcName, paramName}) => {
          if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
          }
          return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
        },
        "incorrect-type": ({expectedType, paramName, moduleName, className, funcName}) => {
          if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
          }
          return `The parameter '${paramName}' passed into '${moduleName}.${className ? className + "." : ""}${funcName}()' must be of type ${expectedType}.`;
        },
        "incorrect-class": ({expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem}) => {
          if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
          }
          if (isReturnValueProblem) {
            return `The return value from '${moduleName}.${className ? className + "." : ""}${funcName}()' must be an instance of class ${expectedClass.name}.`;
          }
          return `The parameter '${paramName}' passed into '${moduleName}.${className ? className + "." : ""}${funcName}()' must be an instance of class ${expectedClass.name}.`;
        },
        "missing-a-method": ({expectedMethod, paramName, moduleName, className, funcName}) => {
          if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
          }
          return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
        },
        "add-to-cache-list-unexpected-type": ({entry}) => {
          return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
        },
        "add-to-cache-list-conflicting-entries": ({firstEntry, secondEntry}) => {
          if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
          }
          return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry._entryId} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
        },
        "plugin-error-request-will-fetch": ({thrownError}) => {
          if (!thrownError) {
            throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
          }
          return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownError.message}'.`;
        },
        "invalid-cache-name": ({cacheNameId, value}) => {
          if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
          }
          return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
        },
        "unregister-route-but-not-found-with-method": ({method}) => {
          if (!method) {
            throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
          }
          return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
        },
        "unregister-route-route-not-registered": () => {
          return `The route you're trying to unregister was not previously registered.`;
        },
        "queue-replay-failed": ({name}) => {
          return `Replaying the background sync queue '${name}' failed.`;
        },
        "duplicate-queue-name": ({name}) => {
          return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
        },
        "expired-test-without-max-age": ({methodName, paramName}) => {
          return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
        },
        "unsupported-route-type": ({moduleName, className, funcName, paramName}) => {
          return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
        },
        "not-array-of-class": ({value, expectedClass, moduleName, className, funcName, paramName}) => {
          return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
        },
        "max-entries-or-age-required": ({moduleName, className, funcName}) => {
          return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
        },
        "statuses-or-headers-required": ({moduleName, className, funcName}) => {
          return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
        },
        "invalid-string": ({moduleName, funcName, paramName}) => {
          if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
          }
          return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
        },
        "channel-name-required": () => {
          return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
        },
        "invalid-responses-are-same-args": () => {
          return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
        },
        "expire-custom-caches-only": () => {
          return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
        },
        "unit-must-be-bytes": ({normalizedRangeHeader}) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
          }
          return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "single-range-only": ({normalizedRangeHeader}) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
          }
          return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "invalid-range-values": ({normalizedRangeHeader}) => {
          if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
          }
          return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
        },
        "no-range-header": () => {
          return `No Range header was found in the Request provided.`;
        },
        "range-not-satisfiable": ({size, start, end}) => {
          return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
        },
        "attempt-to-cache-non-get-request": ({url, method}) => {
          return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
        },
        "cache-put-with-no-response": ({url}) => {
          return `There was an attempt to cache '${url}' but the response was not defined.`;
        },
        "no-response": ({url, error}) => {
          let message = `The strategy could not generate a response for '${url}'.`;
          if (error) {
            message += ` The underlying error is ${error}.`;
          }
          return message;
        },
        "bad-precaching-response": ({url, status}) => {
          return `The precaching request for '${url}' failed with an HTTP status of ${status}.`;
        },
        "non-precached-url": ({url}) => {
          return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
        },
        "add-to-cache-list-conflicting-integrities": ({url}) => {
          return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
        },
        "missing-precache-entry": ({cacheName, url}) => {
          return `Unable to find a precached response in ${cacheName} for ${url}.`;
        }
      };
    }
  });

  // node_modules/workbox-core/models/messages/messageGenerator.js
  var fallback, generatorFunction, messageGenerator;
  var init_messageGenerator = __esm({
    "node_modules/workbox-core/models/messages/messageGenerator.js"() {
      init_define_process();
      init_messages();
      init_version();
      fallback = (code, ...args) => {
        let msg = code;
        if (args.length > 0) {
          msg += ` :: ${JSON.stringify(args)}`;
        }
        return msg;
      };
      generatorFunction = (code, details = {}) => {
        const message = messages[code];
        if (!message) {
          throw new Error(`Unable to find message for code '${code}'.`);
        }
        return message(details);
      };
      messageGenerator = define_process_default.env.NODE_ENV === "production" ? fallback : generatorFunction;
    }
  });

  // node_modules/workbox-core/_private/WorkboxError.js
  var WorkboxError;
  var init_WorkboxError = __esm({
    "node_modules/workbox-core/_private/WorkboxError.js"() {
      init_define_process();
      init_messageGenerator();
      init_version();
      WorkboxError = class extends Error {
        constructor(errorCode, details) {
          const message = messageGenerator(errorCode, details);
          super(message);
          this.name = errorCode;
          this.details = details;
        }
      };
    }
  });

  // node_modules/workbox-core/_private/assert.js
  var isArray, hasMethod, isType, isInstance, isOneOf, isArrayOfClass, finalAssertExports;
  var init_assert = __esm({
    "node_modules/workbox-core/_private/assert.js"() {
      init_define_process();
      init_WorkboxError();
      init_version();
      isArray = (value, details) => {
        if (!Array.isArray(value)) {
          throw new WorkboxError("not-an-array", details);
        }
      };
      hasMethod = (object, expectedMethod, details) => {
        const type = typeof object[expectedMethod];
        if (type !== "function") {
          details["expectedMethod"] = expectedMethod;
          throw new WorkboxError("missing-a-method", details);
        }
      };
      isType = (object, expectedType, details) => {
        if (typeof object !== expectedType) {
          details["expectedType"] = expectedType;
          throw new WorkboxError("incorrect-type", details);
        }
      };
      isInstance = (object, expectedClass, details) => {
        if (!(object instanceof expectedClass)) {
          details["expectedClass"] = expectedClass;
          throw new WorkboxError("incorrect-class", details);
        }
      };
      isOneOf = (value, validValues, details) => {
        if (!validValues.includes(value)) {
          details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
          throw new WorkboxError("invalid-value", details);
        }
      };
      isArrayOfClass = (value, expectedClass, details) => {
        const error = new WorkboxError("not-array-of-class", details);
        if (!Array.isArray(value)) {
          throw error;
        }
        for (const item of value) {
          if (!(item instanceof expectedClass)) {
            throw error;
          }
        }
      };
      finalAssertExports = define_process_default.env.NODE_ENV === "production" ? null : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass
      };
    }
  });

  // node_modules/workbox-core/models/quotaErrorCallbacks.js
  var quotaErrorCallbacks;
  var init_quotaErrorCallbacks = __esm({
    "node_modules/workbox-core/models/quotaErrorCallbacks.js"() {
      init_define_process();
      init_version();
      quotaErrorCallbacks = new Set();
    }
  });

  // node_modules/workbox-core/registerQuotaErrorCallback.js
  function registerQuotaErrorCallback(callback) {
    if (define_process_default.env.NODE_ENV !== "production") {
      finalAssertExports.isType(callback, "function", {
        moduleName: "workbox-core",
        funcName: "register",
        paramName: "callback"
      });
    }
    quotaErrorCallbacks.add(callback);
    if (define_process_default.env.NODE_ENV !== "production") {
      logger.log("Registered a callback to respond to quota errors.", callback);
    }
  }
  var init_registerQuotaErrorCallback = __esm({
    "node_modules/workbox-core/registerQuotaErrorCallback.js"() {
      init_define_process();
      init_logger();
      init_assert();
      init_quotaErrorCallbacks();
      init_version();
    }
  });

  // node_modules/workbox-core/_private/cacheNames.js
  var _cacheNameDetails, _createCacheName, eachCacheNameDetail, cacheNames;
  var init_cacheNames = __esm({
    "node_modules/workbox-core/_private/cacheNames.js"() {
      init_define_process();
      init_version();
      _cacheNameDetails = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: typeof registration !== "undefined" ? registration.scope : ""
      };
      _createCacheName = (cacheName) => {
        return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
      };
      eachCacheNameDetail = (fn) => {
        for (const key of Object.keys(_cacheNameDetails)) {
          fn(key);
        }
      };
      cacheNames = {
        updateDetails: (details) => {
          eachCacheNameDetail((key) => {
            if (typeof details[key] === "string") {
              _cacheNameDetails[key] = details[key];
            }
          });
        },
        getGoogleAnalyticsName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
        },
        getPrecacheName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.precache);
        },
        getPrefix: () => {
          return _cacheNameDetails.prefix;
        },
        getRuntimeName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.runtime);
        },
        getSuffix: () => {
          return _cacheNameDetails.suffix;
        }
      };
    }
  });

  // node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  async function executeQuotaErrorCallbacks() {
    if (define_process_default.env.NODE_ENV !== "production") {
      logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (define_process_default.env.NODE_ENV !== "production") {
        logger.log(callback, "is complete.");
      }
    }
    if (define_process_default.env.NODE_ENV !== "production") {
      logger.log("Finished running callbacks.");
    }
  }
  var init_executeQuotaErrorCallbacks = __esm({
    "node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js"() {
      init_define_process();
      init_logger();
      init_quotaErrorCallbacks();
      init_version();
    }
  });

  // node_modules/workbox-core/_private/getFriendlyURL.js
  var getFriendlyURL;
  var init_getFriendlyURL = __esm({
    "node_modules/workbox-core/_private/getFriendlyURL.js"() {
      init_define_process();
      init_version();
      getFriendlyURL = (url) => {
        const urlObj = new URL(String(url), location.href);
        return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
      };
    }
  });

  // node_modules/workbox-core/utils/pluginUtils.js
  var pluginUtils;
  var init_pluginUtils = __esm({
    "node_modules/workbox-core/utils/pluginUtils.js"() {
      init_define_process();
      init_version();
      pluginUtils = {
        filter: (plugins, callbackName) => {
          return plugins.filter((plugin) => callbackName in plugin);
        }
      };
    }
  });

  // node_modules/workbox-core/_private/cacheWrapper.js
  var _getEffectiveRequest, _isResponseSafeToCache, matchWrapper, putWrapper, cacheWrapper;
  var init_cacheWrapper = __esm({
    "node_modules/workbox-core/_private/cacheWrapper.js"() {
      init_define_process();
      init_assert();
      init_executeQuotaErrorCallbacks();
      init_getFriendlyURL();
      init_logger();
      init_pluginUtils();
      init_WorkboxError();
      init_version();
      _getEffectiveRequest = async ({request, mode, plugins = []}) => {
        const cacheKeyWillBeUsedPlugins = pluginUtils.filter(plugins, "cacheKeyWillBeUsed");
        let effectiveRequest = request;
        for (const plugin of cacheKeyWillBeUsedPlugins) {
          effectiveRequest = await plugin["cacheKeyWillBeUsed"].call(plugin, {mode, request: effectiveRequest});
          if (typeof effectiveRequest === "string") {
            effectiveRequest = new Request(effectiveRequest);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(effectiveRequest, Request, {
              moduleName: "Plugin",
              funcName: "cacheKeyWillBeUsed",
              isReturnValueProblem: true
            });
          }
        }
        return effectiveRequest;
      };
      _isResponseSafeToCache = async ({request, response, event, plugins = []}) => {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const plugin of plugins) {
          if ("cacheWillUpdate" in plugin) {
            pluginsUsed = true;
            const pluginMethod = plugin["cacheWillUpdate"];
            responseToCache = await pluginMethod.call(plugin, {
              request,
              response: responseToCache,
              event
            });
            if (define_process_default.env.NODE_ENV !== "production") {
              if (responseToCache) {
                finalAssertExports.isInstance(responseToCache, Response, {
                  moduleName: "Plugin",
                  funcName: "cacheWillUpdate",
                  isReturnValueProblem: true
                });
              }
            }
            if (!responseToCache) {
              break;
            }
          }
        }
        if (!pluginsUsed) {
          if (define_process_default.env.NODE_ENV !== "production") {
            if (responseToCache) {
              if (responseToCache.status !== 200) {
                if (responseToCache.status === 0) {
                  logger.warn(`The response for '${request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
                } else {
                  logger.debug(`The response for '${request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
                }
              }
            }
          }
          responseToCache = responseToCache && responseToCache.status === 200 ? responseToCache : void 0;
        }
        return responseToCache ? responseToCache : null;
      };
      matchWrapper = async ({cacheName, request, event, matchOptions, plugins = []}) => {
        const cache = await self.caches.open(cacheName);
        const effectiveRequest = await _getEffectiveRequest({
          plugins,
          request,
          mode: "read"
        });
        let cachedResponse = await cache.match(effectiveRequest, matchOptions);
        if (define_process_default.env.NODE_ENV !== "production") {
          if (cachedResponse) {
            logger.debug(`Found a cached response in '${cacheName}'.`);
          } else {
            logger.debug(`No cached response found in '${cacheName}'.`);
          }
        }
        for (const plugin of plugins) {
          if ("cachedResponseWillBeUsed" in plugin) {
            const pluginMethod = plugin["cachedResponseWillBeUsed"];
            cachedResponse = await pluginMethod.call(plugin, {
              cacheName,
              event,
              matchOptions,
              cachedResponse,
              request: effectiveRequest
            });
            if (define_process_default.env.NODE_ENV !== "production") {
              if (cachedResponse) {
                finalAssertExports.isInstance(cachedResponse, Response, {
                  moduleName: "Plugin",
                  funcName: "cachedResponseWillBeUsed",
                  isReturnValueProblem: true
                });
              }
            }
          }
        }
        return cachedResponse;
      };
      putWrapper = async ({cacheName, request, response, event, plugins = [], matchOptions}) => {
        if (define_process_default.env.NODE_ENV !== "production") {
          if (request.method && request.method !== "GET") {
            throw new WorkboxError("attempt-to-cache-non-get-request", {
              url: getFriendlyURL(request.url),
              method: request.method
            });
          }
        }
        const effectiveRequest = await _getEffectiveRequest({
          plugins,
          request,
          mode: "write"
        });
        if (!response) {
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
          }
          throw new WorkboxError("cache-put-with-no-response", {
            url: getFriendlyURL(effectiveRequest.url)
          });
        }
        const responseToCache = await _isResponseSafeToCache({
          event,
          plugins,
          response,
          request: effectiveRequest
        });
        if (!responseToCache) {
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
          }
          return;
        }
        const cache = await self.caches.open(cacheName);
        const updatePlugins = pluginUtils.filter(plugins, "cacheDidUpdate");
        const oldResponse = updatePlugins.length > 0 ? await matchWrapper({cacheName, matchOptions, request: effectiveRequest}) : null;
        if (define_process_default.env.NODE_ENV !== "production") {
          logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
        }
        try {
          await cache.put(effectiveRequest, responseToCache);
        } catch (error) {
          if (error.name === "QuotaExceededError") {
            await executeQuotaErrorCallbacks();
          }
          throw error;
        }
        for (const plugin of updatePlugins) {
          await plugin["cacheDidUpdate"].call(plugin, {
            cacheName,
            event,
            oldResponse,
            newResponse: responseToCache,
            request: effectiveRequest
          });
        }
      };
      cacheWrapper = {
        put: putWrapper,
        match: matchWrapper
      };
    }
  });

  // node_modules/workbox-core/_private/dontWaitFor.js
  function dontWaitFor(promise) {
    promise.then(() => {
    });
  }
  var init_dontWaitFor = __esm({
    "node_modules/workbox-core/_private/dontWaitFor.js"() {
      init_define_process();
      init_version();
    }
  });

  // node_modules/workbox-core/_private/DBWrapper.js
  var DBWrapper, methodsToWrap;
  var init_DBWrapper = __esm({
    "node_modules/workbox-core/_private/DBWrapper.js"() {
      init_define_process();
      init_version();
      DBWrapper = class {
        constructor(name, version, {onupgradeneeded, onversionchange} = {}) {
          this._db = null;
          this._name = name;
          this._version = version;
          this._onupgradeneeded = onupgradeneeded;
          this._onversionchange = onversionchange || (() => this.close());
        }
        get db() {
          return this._db;
        }
        async open() {
          if (this._db)
            return;
          this._db = await new Promise((resolve, reject) => {
            let openRequestTimedOut = false;
            setTimeout(() => {
              openRequestTimedOut = true;
              reject(new Error("The open request was blocked and timed out"));
            }, this.OPEN_TIMEOUT);
            const openRequest = indexedDB.open(this._name, this._version);
            openRequest.onerror = () => reject(openRequest.error);
            openRequest.onupgradeneeded = (evt) => {
              if (openRequestTimedOut) {
                openRequest.transaction.abort();
                openRequest.result.close();
              } else if (typeof this._onupgradeneeded === "function") {
                this._onupgradeneeded(evt);
              }
            };
            openRequest.onsuccess = () => {
              const db = openRequest.result;
              if (openRequestTimedOut) {
                db.close();
              } else {
                db.onversionchange = this._onversionchange.bind(this);
                resolve(db);
              }
            };
          });
          return this;
        }
        async getKey(storeName, query) {
          return (await this.getAllKeys(storeName, query, 1))[0];
        }
        async getAll(storeName, query, count) {
          return await this.getAllMatching(storeName, {query, count});
        }
        async getAllKeys(storeName, query, count) {
          const entries = await this.getAllMatching(storeName, {query, count, includeKeys: true});
          return entries.map((entry) => entry.key);
        }
        async getAllMatching(storeName, {
          index,
          query = null,
          direction = "next",
          count,
          includeKeys = false
        } = {}) {
          return await this.transaction([storeName], "readonly", (txn, done) => {
            const store = txn.objectStore(storeName);
            const target = index ? store.index(index) : store;
            const results = [];
            const request = target.openCursor(query, direction);
            request.onsuccess = () => {
              const cursor = request.result;
              if (cursor) {
                results.push(includeKeys ? cursor : cursor.value);
                if (count && results.length >= count) {
                  done(results);
                } else {
                  cursor.continue();
                }
              } else {
                done(results);
              }
            };
          });
        }
        async transaction(storeNames, type, callback) {
          await this.open();
          return await new Promise((resolve, reject) => {
            const txn = this._db.transaction(storeNames, type);
            txn.onabort = () => reject(txn.error);
            txn.oncomplete = () => resolve();
            callback(txn, (value) => resolve(value));
          });
        }
        async _call(method, storeName, type, ...args) {
          const callback = (txn, done) => {
            const objStore = txn.objectStore(storeName);
            const request = objStore[method].apply(objStore, args);
            request.onsuccess = () => done(request.result);
          };
          return await this.transaction([storeName], type, callback);
        }
        close() {
          if (this._db) {
            this._db.close();
            this._db = null;
          }
        }
      };
      DBWrapper.prototype.OPEN_TIMEOUT = 2e3;
      methodsToWrap = {
        readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
        readwrite: ["add", "put", "clear", "delete"]
      };
      for (const [mode, methods] of Object.entries(methodsToWrap)) {
        for (const method of methods) {
          if (method in IDBObjectStore.prototype) {
            DBWrapper.prototype[method] = async function(storeName, ...args) {
              return await this._call(method, storeName, mode, ...args);
            };
          }
        }
      }
    }
  });

  // node_modules/workbox-core/_private/deleteDatabase.js
  var deleteDatabase;
  var init_deleteDatabase = __esm({
    "node_modules/workbox-core/_private/deleteDatabase.js"() {
      init_define_process();
      init_version();
      deleteDatabase = async (name) => {
        await new Promise((resolve, reject) => {
          const request = indexedDB.deleteDatabase(name);
          request.onerror = () => {
            reject(request.error);
          };
          request.onblocked = () => {
            reject(new Error("Delete blocked"));
          };
          request.onsuccess = () => {
            resolve();
          };
        });
      };
    }
  });

  // node_modules/workbox-core/_private/fetchWrapper.js
  var wrappedFetch, fetchWrapper;
  var init_fetchWrapper = __esm({
    "node_modules/workbox-core/_private/fetchWrapper.js"() {
      init_define_process();
      init_WorkboxError();
      init_logger();
      init_assert();
      init_getFriendlyURL();
      init_pluginUtils();
      init_version();
      wrappedFetch = async ({request, fetchOptions, event, plugins = []}) => {
        if (typeof request === "string") {
          request = new Request(request);
        }
        if (event instanceof FetchEvent && event.preloadResponse) {
          const possiblePreloadResponse = await event.preloadResponse;
          if (possiblePreloadResponse) {
            if (define_process_default.env.NODE_ENV !== "production") {
              logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
            }
            return possiblePreloadResponse;
          }
        }
        if (define_process_default.env.NODE_ENV !== "production") {
          finalAssertExports.isInstance(request, Request, {
            paramName: "request",
            expectedClass: Request,
            moduleName: "workbox-core",
            className: "fetchWrapper",
            funcName: "wrappedFetch"
          });
        }
        const failedFetchPlugins = pluginUtils.filter(plugins, "fetchDidFail");
        const originalRequest = failedFetchPlugins.length > 0 ? request.clone() : null;
        try {
          for (const plugin of plugins) {
            if ("requestWillFetch" in plugin) {
              const pluginMethod = plugin["requestWillFetch"];
              const requestClone = request.clone();
              request = await pluginMethod.call(plugin, {
                request: requestClone,
                event
              });
              if (define_process_default.env.NODE_ENV !== "production") {
                if (request) {
                  finalAssertExports.isInstance(request, Request, {
                    moduleName: "Plugin",
                    funcName: "cachedResponseWillBeUsed",
                    isReturnValueProblem: true
                  });
                }
              }
            }
          }
        } catch (err) {
          throw new WorkboxError("plugin-error-request-will-fetch", {
            thrownError: err
          });
        }
        const pluginFilteredRequest = request.clone();
        try {
          let fetchResponse;
          if (request.mode === "navigate") {
            fetchResponse = await fetch(request);
          } else {
            fetchResponse = await fetch(request, fetchOptions);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
          }
          for (const plugin of plugins) {
            if ("fetchDidSucceed" in plugin) {
              fetchResponse = await plugin["fetchDidSucceed"].call(plugin, {
                event,
                request: pluginFilteredRequest,
                response: fetchResponse
              });
              if (define_process_default.env.NODE_ENV !== "production") {
                if (fetchResponse) {
                  finalAssertExports.isInstance(fetchResponse, Response, {
                    moduleName: "Plugin",
                    funcName: "fetchDidSucceed",
                    isReturnValueProblem: true
                  });
                }
              }
            }
          }
          return fetchResponse;
        } catch (error) {
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.error(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
          }
          for (const plugin of failedFetchPlugins) {
            await plugin["fetchDidFail"].call(plugin, {
              error,
              event,
              originalRequest: originalRequest.clone(),
              request: pluginFilteredRequest.clone()
            });
          }
          throw error;
        }
      };
      fetchWrapper = {
        fetch: wrappedFetch
      };
    }
  });

  // node_modules/workbox-routing/_version.js
  var init_version2 = __esm({
    "node_modules/workbox-routing/_version.js"() {
      init_define_process();
      "use strict";
      try {
        self["workbox:routing:5.1.4"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-routing/utils/constants.js
  var defaultMethod, validMethods;
  var init_constants = __esm({
    "node_modules/workbox-routing/utils/constants.js"() {
      init_define_process();
      init_version2();
      defaultMethod = "GET";
      validMethods = [
        "DELETE",
        "GET",
        "HEAD",
        "PATCH",
        "POST",
        "PUT"
      ];
    }
  });

  // node_modules/workbox-routing/utils/normalizeHandler.js
  var normalizeHandler;
  var init_normalizeHandler = __esm({
    "node_modules/workbox-routing/utils/normalizeHandler.js"() {
      init_define_process();
      init_assert();
      init_version2();
      normalizeHandler = (handler) => {
        if (handler && typeof handler === "object") {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.hasMethod(handler, "handle", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "handler"
            });
          }
          return handler;
        } else {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isType(handler, "function", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "handler"
            });
          }
          return {handle: handler};
        }
      };
    }
  });

  // node_modules/workbox-routing/Route.js
  var Route;
  var init_Route = __esm({
    "node_modules/workbox-routing/Route.js"() {
      init_define_process();
      init_assert();
      init_constants();
      init_normalizeHandler();
      init_version2();
      Route = class {
        constructor(match, handler, method = defaultMethod) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isType(match, "function", {
              moduleName: "workbox-routing",
              className: "Route",
              funcName: "constructor",
              paramName: "match"
            });
            if (method) {
              finalAssertExports.isOneOf(method, validMethods, {paramName: "method"});
            }
          }
          this.handler = normalizeHandler(handler);
          this.match = match;
          this.method = method;
        }
      };
    }
  });

  // node_modules/workbox-routing/NavigationRoute.js
  var NavigationRoute;
  var init_NavigationRoute = __esm({
    "node_modules/workbox-routing/NavigationRoute.js"() {
      init_define_process();
      init_assert();
      init_logger();
      init_Route();
      init_version2();
      NavigationRoute = class extends Route {
        constructor(handler, {allowlist = [/./], denylist = []} = {}) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isArrayOfClass(allowlist, RegExp, {
              moduleName: "workbox-routing",
              className: "NavigationRoute",
              funcName: "constructor",
              paramName: "options.allowlist"
            });
            finalAssertExports.isArrayOfClass(denylist, RegExp, {
              moduleName: "workbox-routing",
              className: "NavigationRoute",
              funcName: "constructor",
              paramName: "options.denylist"
            });
          }
          super((options) => this._match(options), handler);
          this._allowlist = allowlist;
          this._denylist = denylist;
        }
        _match({url, request}) {
          if (request && request.mode !== "navigate") {
            return false;
          }
          const pathnameAndSearch = url.pathname + url.search;
          for (const regExp of this._denylist) {
            if (regExp.test(pathnameAndSearch)) {
              if (define_process_default.env.NODE_ENV !== "production") {
                logger.log(`The navigation route ${pathnameAndSearch} is not being used, since the URL matches this denylist pattern: ${regExp}`);
              }
              return false;
            }
          }
          if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (define_process_default.env.NODE_ENV !== "production") {
              logger.debug(`The navigation route ${pathnameAndSearch} is being used.`);
            }
            return true;
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.log(`The navigation route ${pathnameAndSearch} is not being used, since the URL being navigated to doesn't match the allowlist.`);
          }
          return false;
        }
      };
    }
  });

  // node_modules/workbox-routing/RegExpRoute.js
  var RegExpRoute;
  var init_RegExpRoute = __esm({
    "node_modules/workbox-routing/RegExpRoute.js"() {
      init_define_process();
      init_assert();
      init_logger();
      init_Route();
      init_version2();
      RegExpRoute = class extends Route {
        constructor(regExp, handler, method) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(regExp, RegExp, {
              moduleName: "workbox-routing",
              className: "RegExpRoute",
              funcName: "constructor",
              paramName: "pattern"
            });
          }
          const match = ({url}) => {
            const result = regExp.exec(url.href);
            if (!result) {
              return;
            }
            if (url.origin !== location.origin && result.index !== 0) {
              if (define_process_default.env.NODE_ENV !== "production") {
                logger.debug(`The regular expression '${regExp}' only partially matched against the cross-origin URL '${url}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
              }
              return;
            }
            return result.slice(1);
          };
          super(match, handler, method);
        }
      };
    }
  });

  // node_modules/workbox-routing/Router.js
  var Router;
  var init_Router = __esm({
    "node_modules/workbox-routing/Router.js"() {
      init_define_process();
      init_assert();
      init_logger();
      init_WorkboxError();
      init_getFriendlyURL();
      init_normalizeHandler();
      init_version2();
      Router = class {
        constructor() {
          this._routes = new Map();
        }
        get routes() {
          return this._routes;
        }
        addFetchListener() {
          self.addEventListener("fetch", (event) => {
            const {request} = event;
            const responsePromise = this.handleRequest({request, event});
            if (responsePromise) {
              event.respondWith(responsePromise);
            }
          });
        }
        addCacheListener() {
          self.addEventListener("message", (event) => {
            if (event.data && event.data.type === "CACHE_URLS") {
              const {payload} = event.data;
              if (define_process_default.env.NODE_ENV !== "production") {
                logger.debug(`Caching URLs from the window`, payload.urlsToCache);
              }
              const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                if (typeof entry === "string") {
                  entry = [entry];
                }
                const request = new Request(...entry);
                return this.handleRequest({request});
              }));
              event.waitUntil(requestPromises);
              if (event.ports && event.ports[0]) {
                requestPromises.then(() => event.ports[0].postMessage(true));
              }
            }
          });
        }
        handleRequest({request, event}) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "handleRequest",
              paramName: "options.request"
            });
          }
          const url = new URL(request.url, location.href);
          if (!url.protocol.startsWith("http")) {
            if (define_process_default.env.NODE_ENV !== "production") {
              logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
          }
          const {params, route} = this.findMatchingRoute({url, request, event});
          let handler = route && route.handler;
          const debugMessages = [];
          if (define_process_default.env.NODE_ENV !== "production") {
            if (handler) {
              debugMessages.push([
                `Found a route to handle this request:`,
                route
              ]);
              if (params) {
                debugMessages.push([
                  `Passing the following params to the route's handler:`,
                  params
                ]);
              }
            }
          }
          if (!handler && this._defaultHandler) {
            if (define_process_default.env.NODE_ENV !== "production") {
              debugMessages.push(`Failed to find a matching route. Falling back to the default handler.`);
            }
            handler = this._defaultHandler;
          }
          if (!handler) {
            if (define_process_default.env.NODE_ENV !== "production") {
              logger.debug(`No route found for: ${getFriendlyURL(url)}`);
            }
            return;
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
            debugMessages.forEach((msg) => {
              if (Array.isArray(msg)) {
                logger.log(...msg);
              } else {
                logger.log(msg);
              }
            });
            logger.groupEnd();
          }
          let responsePromise;
          try {
            responsePromise = handler.handle({url, request, event, params});
          } catch (err) {
            responsePromise = Promise.reject(err);
          }
          if (responsePromise instanceof Promise && this._catchHandler) {
            responsePromise = responsePromise.catch((err) => {
              if (define_process_default.env.NODE_ENV !== "production") {
                logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to Catch Handler.`);
                logger.error(`Error thrown by:`, route);
                logger.error(err);
                logger.groupEnd();
              }
              return this._catchHandler.handle({url, request, event});
            });
          }
          return responsePromise;
        }
        findMatchingRoute({url, request, event}) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(url, URL, {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "findMatchingRoute",
              paramName: "options.url"
            });
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "findMatchingRoute",
              paramName: "options.request"
            });
          }
          const routes = this._routes.get(request.method) || [];
          for (const route of routes) {
            let params;
            const matchResult = route.match({url, request, event});
            if (matchResult) {
              params = matchResult;
              if (Array.isArray(matchResult) && matchResult.length === 0) {
                params = void 0;
              } else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
                params = void 0;
              } else if (typeof matchResult === "boolean") {
                params = void 0;
              }
              return {route, params};
            }
          }
          return {};
        }
        setDefaultHandler(handler) {
          this._defaultHandler = normalizeHandler(handler);
        }
        setCatchHandler(handler) {
          this._catchHandler = normalizeHandler(handler);
        }
        registerRoute(route) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isType(route, "object", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.hasMethod(route, "match", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.isType(route.handler, "object", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route"
            });
            finalAssertExports.hasMethod(route.handler, "handle", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route.handler"
            });
            finalAssertExports.isType(route.method, "string", {
              moduleName: "workbox-routing",
              className: "Router",
              funcName: "registerRoute",
              paramName: "route.method"
            });
          }
          if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
          }
          this._routes.get(route.method).push(route);
        }
        unregisterRoute(route) {
          if (!this._routes.has(route.method)) {
            throw new WorkboxError("unregister-route-but-not-found-with-method", {
              method: route.method
            });
          }
          const routeIndex = this._routes.get(route.method).indexOf(route);
          if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
          } else {
            throw new WorkboxError("unregister-route-route-not-registered");
          }
        }
      };
    }
  });

  // node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  var defaultRouter, getOrCreateDefaultRouter;
  var init_getOrCreateDefaultRouter = __esm({
    "node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js"() {
      init_define_process();
      init_Router();
      init_version2();
      getOrCreateDefaultRouter = () => {
        if (!defaultRouter) {
          defaultRouter = new Router();
          defaultRouter.addFetchListener();
          defaultRouter.addCacheListener();
        }
        return defaultRouter;
      };
    }
  });

  // node_modules/workbox-routing/registerRoute.js
  function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (define_process_default.env.NODE_ENV !== "production") {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
        }
      }
      const matchCallback = ({url}) => {
        if (define_process_default.env.NODE_ENV !== "production") {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(`${capture} only partially matches the cross-origin URL ${url}. This route will only handle cross-origin requests if they match the entire URL.`);
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }
  var init_registerRoute = __esm({
    "node_modules/workbox-routing/registerRoute.js"() {
      init_define_process();
      init_logger();
      init_WorkboxError();
      init_Route();
      init_RegExpRoute();
      init_getOrCreateDefaultRouter();
      init_version2();
    }
  });

  // node_modules/workbox-routing/setCatchHandler.js
  function setCatchHandler(handler) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setCatchHandler(handler);
  }
  var init_setCatchHandler = __esm({
    "node_modules/workbox-routing/setCatchHandler.js"() {
      init_define_process();
      init_getOrCreateDefaultRouter();
      init_version2();
    }
  });

  // node_modules/workbox-routing/setDefaultHandler.js
  function setDefaultHandler(handler) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setDefaultHandler(handler);
  }
  var init_setDefaultHandler = __esm({
    "node_modules/workbox-routing/setDefaultHandler.js"() {
      init_define_process();
      init_getOrCreateDefaultRouter();
      init_version2();
    }
  });

  // node_modules/workbox-routing/index.js
  var workbox_routing_exports = {};
  __export(workbox_routing_exports, {
    NavigationRoute: () => NavigationRoute,
    RegExpRoute: () => RegExpRoute,
    Route: () => Route,
    Router: () => Router,
    registerRoute: () => registerRoute,
    setCatchHandler: () => setCatchHandler,
    setDefaultHandler: () => setDefaultHandler
  });
  var init_workbox_routing = __esm({
    "node_modules/workbox-routing/index.js"() {
      init_define_process();
      init_NavigationRoute();
      init_RegExpRoute();
      init_registerRoute();
      init_Route();
      init_Router();
      init_setCatchHandler();
      init_setDefaultHandler();
      init_version2();
    }
  });

  // node_modules/workbox-strategies/_version.js
  var init_version3 = __esm({
    "node_modules/workbox-strategies/_version.js"() {
      init_define_process();
      "use strict";
      try {
        self["workbox:strategies:5.1.4"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-strategies/utils/messages.js
  var messages2;
  var init_messages2 = __esm({
    "node_modules/workbox-strategies/utils/messages.js"() {
      init_define_process();
      init_logger();
      init_getFriendlyURL();
      init_version3();
      messages2 = {
        strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
        printFinalResponse: (response) => {
          if (response) {
            logger.groupCollapsed(`View the final response here.`);
            logger.log(response || "[No response returned]");
            logger.groupEnd();
          }
        }
      };
    }
  });

  // node_modules/workbox-strategies/CacheFirst.js
  var CacheFirst;
  var init_CacheFirst = __esm({
    "node_modules/workbox-strategies/CacheFirst.js"() {
      init_define_process();
      init_assert();
      init_cacheNames();
      init_cacheWrapper();
      init_fetchWrapper();
      init_getFriendlyURL();
      init_logger();
      init_WorkboxError();
      init_messages2();
      init_version3();
      CacheFirst = class {
        constructor(options = {}) {
          this._cacheName = cacheNames.getRuntimeName(options.cacheName);
          this._plugins = options.plugins || [];
          this._fetchOptions = options.fetchOptions;
          this._matchOptions = options.matchOptions;
        }
        async handle({event, request}) {
          const logs = [];
          if (typeof request === "string") {
            request = new Request(request);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: "CacheFirst",
              funcName: "makeRequest",
              paramName: "request"
            });
          }
          let response = await cacheWrapper.match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins
          });
          let error;
          if (!response) {
            if (define_process_default.env.NODE_ENV !== "production") {
              logs.push(`No response found in the '${this._cacheName}' cache. Will respond with a network request.`);
            }
            try {
              response = await this._getFromNetwork(request, event);
            } catch (err) {
              error = err;
            }
            if (define_process_default.env.NODE_ENV !== "production") {
              if (response) {
                logs.push(`Got response from network.`);
              } else {
                logs.push(`Unable to get a response from the network.`);
              }
            }
          } else {
            if (define_process_default.env.NODE_ENV !== "production") {
              logs.push(`Found a cached response in the '${this._cacheName}' cache.`);
            }
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.groupCollapsed(messages2.strategyStart("CacheFirst", request));
            for (const log of logs) {
              logger.log(log);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", {url: request.url, error});
          }
          return response;
        }
        async _getFromNetwork(request, event) {
          const response = await fetchWrapper.fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins
          });
          const responseClone = response.clone();
          const cachePutPromise = cacheWrapper.put({
            cacheName: this._cacheName,
            request,
            response: responseClone,
            event,
            plugins: this._plugins
          });
          if (event) {
            try {
              event.waitUntil(cachePutPromise);
            } catch (error) {
              if (define_process_default.env.NODE_ENV !== "production") {
                logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
              }
            }
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/CacheOnly.js
  var CacheOnly;
  var init_CacheOnly = __esm({
    "node_modules/workbox-strategies/CacheOnly.js"() {
      init_define_process();
      init_assert();
      init_cacheNames();
      init_cacheWrapper();
      init_logger();
      init_WorkboxError();
      init_messages2();
      init_version3();
      CacheOnly = class {
        constructor(options = {}) {
          this._cacheName = cacheNames.getRuntimeName(options.cacheName);
          this._plugins = options.plugins || [];
          this._matchOptions = options.matchOptions;
        }
        async handle({event, request}) {
          if (typeof request === "string") {
            request = new Request(request);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: "CacheOnly",
              funcName: "makeRequest",
              paramName: "request"
            });
          }
          const response = await cacheWrapper.match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins
          });
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.groupCollapsed(messages2.strategyStart("CacheOnly", request));
            if (response) {
              logger.log(`Found a cached response in the '${this._cacheName}' cache.`);
              messages2.printFinalResponse(response);
            } else {
              logger.log(`No response found in the '${this._cacheName}' cache.`);
            }
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", {url: request.url});
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  var cacheOkAndOpaquePlugin;
  var init_cacheOkAndOpaquePlugin = __esm({
    "node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js"() {
      init_define_process();
      init_version3();
      cacheOkAndOpaquePlugin = {
        cacheWillUpdate: async ({response}) => {
          if (response.status === 200 || response.status === 0) {
            return response;
          }
          return null;
        }
      };
    }
  });

  // node_modules/workbox-strategies/NetworkFirst.js
  var NetworkFirst;
  var init_NetworkFirst = __esm({
    "node_modules/workbox-strategies/NetworkFirst.js"() {
      init_define_process();
      init_assert();
      init_cacheNames();
      init_cacheWrapper();
      init_fetchWrapper();
      init_getFriendlyURL();
      init_logger();
      init_WorkboxError();
      init_messages2();
      init_cacheOkAndOpaquePlugin();
      init_version3();
      NetworkFirst = class {
        constructor(options = {}) {
          this._cacheName = cacheNames.getRuntimeName(options.cacheName);
          if (options.plugins) {
            const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ? options.plugins : [cacheOkAndOpaquePlugin, ...options.plugins];
          } else {
            this._plugins = [cacheOkAndOpaquePlugin];
          }
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
          if (define_process_default.env.NODE_ENV !== "production") {
            if (this._networkTimeoutSeconds) {
              finalAssertExports.isType(this._networkTimeoutSeconds, "number", {
                moduleName: "workbox-strategies",
                className: "NetworkFirst",
                funcName: "constructor",
                paramName: "networkTimeoutSeconds"
              });
            }
          }
          this._fetchOptions = options.fetchOptions;
          this._matchOptions = options.matchOptions;
        }
        async handle({event, request}) {
          const logs = [];
          if (typeof request === "string") {
            request = new Request(request);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: "NetworkFirst",
              funcName: "handle",
              paramName: "makeRequest"
            });
          }
          const promises = [];
          let timeoutId;
          if (this._networkTimeoutSeconds) {
            const {id, promise} = this._getTimeoutPromise({request, event, logs});
            timeoutId = id;
            promises.push(promise);
          }
          const networkPromise = this._getNetworkPromise({timeoutId, request, event, logs});
          promises.push(networkPromise);
          let response = await Promise.race(promises);
          if (!response) {
            response = await networkPromise;
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.groupCollapsed(messages2.strategyStart("NetworkFirst", request));
            for (const log of logs) {
              logger.log(log);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", {url: request.url});
          }
          return response;
        }
        _getTimeoutPromise({request, logs, event}) {
          let timeoutId;
          const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
              if (define_process_default.env.NODE_ENV !== "production") {
                logs.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`);
              }
              resolve(await this._respondFromCache({request, event}));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
          });
          return {
            promise: timeoutPromise,
            id: timeoutId
          };
        }
        async _getNetworkPromise({timeoutId, request, logs, event}) {
          let error;
          let response;
          try {
            response = await fetchWrapper.fetch({
              request,
              event,
              fetchOptions: this._fetchOptions,
              plugins: this._plugins
            });
          } catch (err) {
            error = err;
          }
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            if (response) {
              logs.push(`Got response from network.`);
            } else {
              logs.push(`Unable to get a response from the network. Will respond with a cached response.`);
            }
          }
          if (error || !response) {
            response = await this._respondFromCache({request, event});
            if (define_process_default.env.NODE_ENV !== "production") {
              if (response) {
                logs.push(`Found a cached response in the '${this._cacheName}' cache.`);
              } else {
                logs.push(`No response found in the '${this._cacheName}' cache.`);
              }
            }
          } else {
            const responseClone = response.clone();
            const cachePut = cacheWrapper.put({
              cacheName: this._cacheName,
              request,
              response: responseClone,
              event,
              plugins: this._plugins
            });
            if (event) {
              try {
                event.waitUntil(cachePut);
              } catch (err) {
                if (define_process_default.env.NODE_ENV !== "production") {
                  logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
                }
              }
            }
          }
          return response;
        }
        _respondFromCache({event, request}) {
          return cacheWrapper.match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins
          });
        }
      };
    }
  });

  // node_modules/workbox-strategies/NetworkOnly.js
  var NetworkOnly;
  var init_NetworkOnly = __esm({
    "node_modules/workbox-strategies/NetworkOnly.js"() {
      init_define_process();
      init_assert();
      init_fetchWrapper();
      init_logger();
      init_WorkboxError();
      init_messages2();
      init_version3();
      NetworkOnly = class {
        constructor(options = {}) {
          this._plugins = options.plugins || [];
          this._fetchOptions = options.fetchOptions;
        }
        async handle({event, request}) {
          if (typeof request === "string") {
            request = new Request(request);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: "NetworkOnly",
              funcName: "handle",
              paramName: "request"
            });
          }
          let error;
          let response;
          try {
            response = await fetchWrapper.fetch({
              request,
              event,
              fetchOptions: this._fetchOptions,
              plugins: this._plugins
            });
          } catch (err) {
            error = err;
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.groupCollapsed(messages2.strategyStart("NetworkOnly", request));
            if (response) {
              logger.log(`Got response from network.`);
            } else {
              logger.log(`Unable to get a response from the network.`);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", {url: request.url, error});
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/StaleWhileRevalidate.js
  var StaleWhileRevalidate;
  var init_StaleWhileRevalidate = __esm({
    "node_modules/workbox-strategies/StaleWhileRevalidate.js"() {
      init_define_process();
      init_assert();
      init_cacheNames();
      init_cacheWrapper();
      init_fetchWrapper();
      init_getFriendlyURL();
      init_logger();
      init_WorkboxError();
      init_messages2();
      init_cacheOkAndOpaquePlugin();
      init_version3();
      StaleWhileRevalidate = class {
        constructor(options = {}) {
          this._cacheName = cacheNames.getRuntimeName(options.cacheName);
          this._plugins = options.plugins || [];
          if (options.plugins) {
            const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
            this._plugins = isUsingCacheWillUpdate ? options.plugins : [cacheOkAndOpaquePlugin, ...options.plugins];
          } else {
            this._plugins = [cacheOkAndOpaquePlugin];
          }
          this._fetchOptions = options.fetchOptions;
          this._matchOptions = options.matchOptions;
        }
        async handle({event, request}) {
          const logs = [];
          if (typeof request === "string") {
            request = new Request(request);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(request, Request, {
              moduleName: "workbox-strategies",
              className: "StaleWhileRevalidate",
              funcName: "handle",
              paramName: "request"
            });
          }
          const fetchAndCachePromise = this._getFromNetwork({request, event});
          let response = await cacheWrapper.match({
            cacheName: this._cacheName,
            request,
            event,
            matchOptions: this._matchOptions,
            plugins: this._plugins
          });
          let error;
          if (response) {
            if (define_process_default.env.NODE_ENV !== "production") {
              logs.push(`Found a cached response in the '${this._cacheName}' cache. Will update with the network response in the background.`);
            }
            if (event) {
              try {
                event.waitUntil(fetchAndCachePromise);
              } catch (error2) {
                if (define_process_default.env.NODE_ENV !== "production") {
                  logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
                }
              }
            }
          } else {
            if (define_process_default.env.NODE_ENV !== "production") {
              logs.push(`No response found in the '${this._cacheName}' cache. Will wait for the network response.`);
            }
            try {
              response = await fetchAndCachePromise;
            } catch (err) {
              error = err;
            }
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            logger.groupCollapsed(messages2.strategyStart("StaleWhileRevalidate", request));
            for (const log of logs) {
              logger.log(log);
            }
            messages2.printFinalResponse(response);
            logger.groupEnd();
          }
          if (!response) {
            throw new WorkboxError("no-response", {url: request.url, error});
          }
          return response;
        }
        async _getFromNetwork({request, event}) {
          const response = await fetchWrapper.fetch({
            request,
            event,
            fetchOptions: this._fetchOptions,
            plugins: this._plugins
          });
          const cachePutPromise = cacheWrapper.put({
            cacheName: this._cacheName,
            request,
            response: response.clone(),
            event,
            plugins: this._plugins
          });
          if (event) {
            try {
              event.waitUntil(cachePutPromise);
            } catch (error) {
              if (define_process_default.env.NODE_ENV !== "production") {
                logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
              }
            }
          }
          return response;
        }
      };
    }
  });

  // node_modules/workbox-strategies/index.js
  var workbox_strategies_exports = {};
  __export(workbox_strategies_exports, {
    CacheFirst: () => CacheFirst,
    CacheOnly: () => CacheOnly,
    NetworkFirst: () => NetworkFirst,
    NetworkOnly: () => NetworkOnly,
    StaleWhileRevalidate: () => StaleWhileRevalidate
  });
  var init_workbox_strategies = __esm({
    "node_modules/workbox-strategies/index.js"() {
      init_define_process();
      init_CacheFirst();
      init_CacheOnly();
      init_NetworkFirst();
      init_NetworkOnly();
      init_StaleWhileRevalidate();
      init_version3();
    }
  });

  // node_modules/workbox-expiration/_version.js
  var init_version4 = __esm({
    "node_modules/workbox-expiration/_version.js"() {
      init_define_process();
      "use strict";
      try {
        self["workbox:expiration:5.1.4"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-expiration/models/CacheTimestampsModel.js
  var DB_NAME, OBJECT_STORE_NAME, normalizeURL, CacheTimestampsModel;
  var init_CacheTimestampsModel = __esm({
    "node_modules/workbox-expiration/models/CacheTimestampsModel.js"() {
      init_define_process();
      init_DBWrapper();
      init_deleteDatabase();
      init_version4();
      DB_NAME = "workbox-expiration";
      OBJECT_STORE_NAME = "cache-entries";
      normalizeURL = (unNormalizedUrl) => {
        const url = new URL(unNormalizedUrl, location.href);
        url.hash = "";
        return url.href;
      };
      CacheTimestampsModel = class {
        constructor(cacheName) {
          this._cacheName = cacheName;
          this._db = new DBWrapper(DB_NAME, 1, {
            onupgradeneeded: (event) => this._handleUpgrade(event)
          });
        }
        _handleUpgrade(event) {
          const db = event.target.result;
          const objStore = db.createObjectStore(OBJECT_STORE_NAME, {keyPath: "id"});
          objStore.createIndex("cacheName", "cacheName", {unique: false});
          objStore.createIndex("timestamp", "timestamp", {unique: false});
          deleteDatabase(this._cacheName);
        }
        async setTimestamp(url, timestamp) {
          url = normalizeURL(url);
          const entry = {
            url,
            timestamp,
            cacheName: this._cacheName,
            id: this._getId(url)
          };
          await this._db.put(OBJECT_STORE_NAME, entry);
        }
        async getTimestamp(url) {
          const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
          return entry.timestamp;
        }
        async expireEntries(minTimestamp, maxCount) {
          const entriesToDelete = await this._db.transaction(OBJECT_STORE_NAME, "readwrite", (txn, done) => {
            const store = txn.objectStore(OBJECT_STORE_NAME);
            const request = store.index("timestamp").openCursor(null, "prev");
            const entriesToDelete2 = [];
            let entriesNotDeletedCount = 0;
            request.onsuccess = () => {
              const cursor = request.result;
              if (cursor) {
                const result = cursor.value;
                if (result.cacheName === this._cacheName) {
                  if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
                    entriesToDelete2.push(cursor.value);
                  } else {
                    entriesNotDeletedCount++;
                  }
                }
                cursor.continue();
              } else {
                done(entriesToDelete2);
              }
            };
          });
          const urlsDeleted = [];
          for (const entry of entriesToDelete) {
            await this._db.delete(OBJECT_STORE_NAME, entry.id);
            urlsDeleted.push(entry.url);
          }
          return urlsDeleted;
        }
        _getId(url) {
          return this._cacheName + "|" + normalizeURL(url);
        }
      };
    }
  });

  // node_modules/workbox-expiration/CacheExpiration.js
  var CacheExpiration;
  var init_CacheExpiration = __esm({
    "node_modules/workbox-expiration/CacheExpiration.js"() {
      init_define_process();
      init_assert();
      init_dontWaitFor();
      init_logger();
      init_WorkboxError();
      init_CacheTimestampsModel();
      init_version4();
      CacheExpiration = class {
        constructor(cacheName, config = {}) {
          this._isRunning = false;
          this._rerunRequested = false;
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isType(cacheName, "string", {
              moduleName: "workbox-expiration",
              className: "CacheExpiration",
              funcName: "constructor",
              paramName: "cacheName"
            });
            if (!(config.maxEntries || config.maxAgeSeconds)) {
              throw new WorkboxError("max-entries-or-age-required", {
                moduleName: "workbox-expiration",
                className: "CacheExpiration",
                funcName: "constructor"
              });
            }
            if (config.maxEntries) {
              finalAssertExports.isType(config.maxEntries, "number", {
                moduleName: "workbox-expiration",
                className: "CacheExpiration",
                funcName: "constructor",
                paramName: "config.maxEntries"
              });
            }
            if (config.maxAgeSeconds) {
              finalAssertExports.isType(config.maxAgeSeconds, "number", {
                moduleName: "workbox-expiration",
                className: "CacheExpiration",
                funcName: "constructor",
                paramName: "config.maxAgeSeconds"
              });
            }
          }
          this._maxEntries = config.maxEntries;
          this._maxAgeSeconds = config.maxAgeSeconds;
          this._cacheName = cacheName;
          this._timestampModel = new CacheTimestampsModel(cacheName);
        }
        async expireEntries() {
          if (this._isRunning) {
            this._rerunRequested = true;
            return;
          }
          this._isRunning = true;
          const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
          const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
          const cache = await self.caches.open(this._cacheName);
          for (const url of urlsExpired) {
            await cache.delete(url);
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            if (urlsExpired.length > 0) {
              logger.groupCollapsed(`Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`);
              logger.log(`Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`);
              urlsExpired.forEach((url) => logger.log(`    ${url}`));
              logger.groupEnd();
            } else {
              logger.debug(`Cache expiration ran and found no entries to remove.`);
            }
          }
          this._isRunning = false;
          if (this._rerunRequested) {
            this._rerunRequested = false;
            dontWaitFor(this.expireEntries());
          }
        }
        async updateTimestamp(url) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isType(url, "string", {
              moduleName: "workbox-expiration",
              className: "CacheExpiration",
              funcName: "updateTimestamp",
              paramName: "url"
            });
          }
          await this._timestampModel.setTimestamp(url, Date.now());
        }
        async isURLExpired(url) {
          if (!this._maxAgeSeconds) {
            if (define_process_default.env.NODE_ENV !== "production") {
              throw new WorkboxError(`expired-test-without-max-age`, {
                methodName: "isURLExpired",
                paramName: "maxAgeSeconds"
              });
            }
            return false;
          } else {
            const timestamp = await this._timestampModel.getTimestamp(url);
            const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
            return timestamp < expireOlderThan;
          }
        }
        async delete() {
          this._rerunRequested = false;
          await this._timestampModel.expireEntries(Infinity);
        }
      };
    }
  });

  // node_modules/workbox-expiration/ExpirationPlugin.js
  var ExpirationPlugin;
  var init_ExpirationPlugin = __esm({
    "node_modules/workbox-expiration/ExpirationPlugin.js"() {
      init_define_process();
      init_assert();
      init_cacheNames();
      init_dontWaitFor();
      init_getFriendlyURL();
      init_logger();
      init_registerQuotaErrorCallback();
      init_WorkboxError();
      init_CacheExpiration();
      init_version4();
      ExpirationPlugin = class {
        constructor(config = {}) {
          this.cachedResponseWillBeUsed = async ({event, request, cacheName, cachedResponse}) => {
            if (!cachedResponse) {
              return null;
            }
            const isFresh = this._isResponseDateFresh(cachedResponse);
            const cacheExpiration = this._getCacheExpiration(cacheName);
            dontWaitFor(cacheExpiration.expireEntries());
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
              try {
                event.waitUntil(updateTimestampDone);
              } catch (error) {
                if (define_process_default.env.NODE_ENV !== "production") {
                  if ("request" in event) {
                    logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`);
                  }
                }
              }
            }
            return isFresh ? cachedResponse : null;
          };
          this.cacheDidUpdate = async ({cacheName, request}) => {
            if (define_process_default.env.NODE_ENV !== "production") {
              finalAssertExports.isType(cacheName, "string", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "cacheDidUpdate",
                paramName: "cacheName"
              });
              finalAssertExports.isInstance(request, Request, {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "cacheDidUpdate",
                paramName: "request"
              });
            }
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
          };
          if (define_process_default.env.NODE_ENV !== "production") {
            if (!(config.maxEntries || config.maxAgeSeconds)) {
              throw new WorkboxError("max-entries-or-age-required", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "constructor"
              });
            }
            if (config.maxEntries) {
              finalAssertExports.isType(config.maxEntries, "number", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "constructor",
                paramName: "config.maxEntries"
              });
            }
            if (config.maxAgeSeconds) {
              finalAssertExports.isType(config.maxAgeSeconds, "number", {
                moduleName: "workbox-expiration",
                className: "Plugin",
                funcName: "constructor",
                paramName: "config.maxAgeSeconds"
              });
            }
          }
          this._config = config;
          this._maxAgeSeconds = config.maxAgeSeconds;
          this._cacheExpirations = new Map();
          if (config.purgeOnQuotaError) {
            registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
          }
        }
        _getCacheExpiration(cacheName) {
          if (cacheName === cacheNames.getRuntimeName()) {
            throw new WorkboxError("expire-custom-caches-only");
          }
          let cacheExpiration = this._cacheExpirations.get(cacheName);
          if (!cacheExpiration) {
            cacheExpiration = new CacheExpiration(cacheName, this._config);
            this._cacheExpirations.set(cacheName, cacheExpiration);
          }
          return cacheExpiration;
        }
        _isResponseDateFresh(cachedResponse) {
          if (!this._maxAgeSeconds) {
            return true;
          }
          const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
          if (dateHeaderTimestamp === null) {
            return true;
          }
          const now = Date.now();
          return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
        }
        _getDateHeaderTimestamp(cachedResponse) {
          if (!cachedResponse.headers.has("date")) {
            return null;
          }
          const dateHeader = cachedResponse.headers.get("date");
          const parsedDate = new Date(dateHeader);
          const headerTime = parsedDate.getTime();
          if (isNaN(headerTime)) {
            return null;
          }
          return headerTime;
        }
        async deleteCacheAndMetadata() {
          for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
            await self.caches.delete(cacheName);
            await cacheExpiration.delete();
          }
          this._cacheExpirations = new Map();
        }
      };
    }
  });

  // node_modules/workbox-expiration/index.js
  var workbox_expiration_exports = {};
  __export(workbox_expiration_exports, {
    CacheExpiration: () => CacheExpiration,
    ExpirationPlugin: () => ExpirationPlugin
  });
  var init_workbox_expiration = __esm({
    "node_modules/workbox-expiration/index.js"() {
      init_define_process();
      init_CacheExpiration();
      init_ExpirationPlugin();
      init_version4();
    }
  });

  // node_modules/workbox-cacheable-response/_version.js
  var init_version5 = __esm({
    "node_modules/workbox-cacheable-response/_version.js"() {
      init_define_process();
      "use strict";
      try {
        self["workbox:cacheable-response:5.1.4"] && _();
      } catch (e) {
      }
    }
  });

  // node_modules/workbox-cacheable-response/CacheableResponse.js
  var CacheableResponse;
  var init_CacheableResponse = __esm({
    "node_modules/workbox-cacheable-response/CacheableResponse.js"() {
      init_define_process();
      init_assert();
      init_WorkboxError();
      init_getFriendlyURL();
      init_logger();
      init_version5();
      CacheableResponse = class {
        constructor(config = {}) {
          if (define_process_default.env.NODE_ENV !== "production") {
            if (!(config.statuses || config.headers)) {
              throw new WorkboxError("statuses-or-headers-required", {
                moduleName: "workbox-cacheable-response",
                className: "CacheableResponse",
                funcName: "constructor"
              });
            }
            if (config.statuses) {
              finalAssertExports.isArray(config.statuses, {
                moduleName: "workbox-cacheable-response",
                className: "CacheableResponse",
                funcName: "constructor",
                paramName: "config.statuses"
              });
            }
            if (config.headers) {
              finalAssertExports.isType(config.headers, "object", {
                moduleName: "workbox-cacheable-response",
                className: "CacheableResponse",
                funcName: "constructor",
                paramName: "config.headers"
              });
            }
          }
          this._statuses = config.statuses;
          this._headers = config.headers;
        }
        isResponseCacheable(response) {
          if (define_process_default.env.NODE_ENV !== "production") {
            finalAssertExports.isInstance(response, Response, {
              moduleName: "workbox-cacheable-response",
              className: "CacheableResponse",
              funcName: "isResponseCacheable",
              paramName: "response"
            });
          }
          let cacheable = true;
          if (this._statuses) {
            cacheable = this._statuses.includes(response.status);
          }
          if (this._headers && cacheable) {
            cacheable = Object.keys(this._headers).some((headerName) => {
              return response.headers.get(headerName) === this._headers[headerName];
            });
          }
          if (define_process_default.env.NODE_ENV !== "production") {
            if (!cacheable) {
              logger.groupCollapsed(`The request for '${getFriendlyURL(response.url)}' returned a response that does not meet the criteria for being cached.`);
              logger.groupCollapsed(`View cacheability criteria here.`);
              logger.log(`Cacheable statuses: ` + JSON.stringify(this._statuses));
              logger.log(`Cacheable headers: ` + JSON.stringify(this._headers, null, 2));
              logger.groupEnd();
              const logFriendlyHeaders = {};
              response.headers.forEach((value, key) => {
                logFriendlyHeaders[key] = value;
              });
              logger.groupCollapsed(`View response status and headers here.`);
              logger.log(`Response status: ` + response.status);
              logger.log(`Response headers: ` + JSON.stringify(logFriendlyHeaders, null, 2));
              logger.groupEnd();
              logger.groupCollapsed(`View full response details here.`);
              logger.log(response.headers);
              logger.log(response);
              logger.groupEnd();
              logger.groupEnd();
            }
          }
          return cacheable;
        }
      };
    }
  });

  // node_modules/workbox-cacheable-response/CacheableResponsePlugin.js
  var CacheableResponsePlugin;
  var init_CacheableResponsePlugin = __esm({
    "node_modules/workbox-cacheable-response/CacheableResponsePlugin.js"() {
      init_define_process();
      init_CacheableResponse();
      init_version5();
      CacheableResponsePlugin = class {
        constructor(config) {
          this.cacheWillUpdate = async ({response}) => {
            if (this._cacheableResponse.isResponseCacheable(response)) {
              return response;
            }
            return null;
          };
          this._cacheableResponse = new CacheableResponse(config);
        }
      };
    }
  });

  // node_modules/workbox-cacheable-response/index.js
  var workbox_cacheable_response_exports = {};
  __export(workbox_cacheable_response_exports, {
    CacheableResponse: () => CacheableResponse,
    CacheableResponsePlugin: () => CacheableResponsePlugin
  });
  var init_workbox_cacheable_response = __esm({
    "node_modules/workbox-cacheable-response/index.js"() {
      init_define_process();
      init_CacheableResponse();
      init_CacheableResponsePlugin();
      init_version5();
    }
  });

  // node_modules/@layer0/prefetch/constants.js
  var require_constants = __commonJS({
    "node_modules/@layer0/prefetch/constants.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      exports.CACHE_NAME = define_process_default.env.LAYER0_PREFETCH_CACHE_NAME || "prefetch";
      exports.BACKEND_REQUESTS_RESPONSE_HEADER_NAME = "x-0-upstream-requests";
      exports.PREFETCH_HEADER_VALUE = define_process_default.env.LAYER0_PREFETCH_HEADER_VALUE || "1";
    }
  });

  // node_modules/@layer0/prefetch/sw/log.js
  var require_log = __commonJS({
    "node_modules/@layer0/prefetch/sw/log.js"(exports) {
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
      Object.defineProperty(exports, "__esModule", {value: true});
      function log() {
        var message = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          message[_i] = arguments[_i];
        }
        if (define_process_default.env.NODE_ENV !== "production") {
          console.log.apply(console, __spread([
            "%c@layer0/prefetch",
            "background: #43a047; color: #ffffff; font-weight:bold; padding: 3px 5px; border-radius: 5px"
          ], message));
        }
      }
      exports.default = log;
    }
  });

  // node_modules/@layer0/core/constants.js
  var require_constants2 = __commonJS({
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

  // node_modules/@layer0/prefetch/sw/messageBrowser.js
  var require_messageBrowser = __commonJS({
    "node_modules/@layer0/prefetch/sw/messageBrowser.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      function messageBrowser(message, _a) {
        var _b = (_a === void 0 ? {} : _a).broadcast, broadcast = _b === void 0 ? false : _b;
        return self.clients.matchAll({type: "window"}).then(function(clients) {
          var targetClients = clients;
          if (!broadcast && clients.length) {
            targetClients = [clients[0]];
          }
          targetClients.forEach(function(client) {
            return client.postMessage(message);
          });
        });
      }
      exports.default = messageBrowser;
    }
  });

  // node_modules/@layer0/prefetch/sw/prefetch.js
  var require_prefetch = __commonJS({
    "node_modules/@layer0/prefetch/sw/prefetch.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var messageBrowser_1 = __importDefault(require_messageBrowser());
      function prefetch2(url, as, options) {
        if (as === void 0) {
          as = "fetch";
        }
        if (options === void 0) {
          options = {cors: "anonymous"};
        }
        return messageBrowser_1.default({action: "prefetch", url, as, options});
      }
      exports.prefetch = prefetch2;
    }
  });

  // node_modules/@layer0/prefetch/sw/PrefetchPlugin.js
  var require_PrefetchPlugin = __commonJS({
    "node_modules/@layer0/prefetch/sw/PrefetchPlugin.js"(exports) {
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
        var _2 = {label: 0, sent: function() {
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
          while (_2)
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
                  _2.label++;
                  return {value: op[1], done: false};
                case 5:
                  _2.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t[1]) {
                    _2.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _2.label < t[2]) {
                    _2.label = t[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
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
      var constants_1 = require_constants2();
      var constants_2 = require_constants();
      var log_1 = __importDefault(require_log());
      var prefetch_1 = require_prefetch();
      var origin = new URL(self.origin);
      function isPrefetchRequest(request) {
        return new URL(request.url).searchParams.has(constants_1.DEVTOOLS_PREFETCH_QUERY_PARAM);
      }
      exports.isPrefetchRequest = isPrefetchRequest;
      function normalizeRequestUrlForCache(request, _a) {
        var cacheHost = (_a === void 0 ? {} : _a).cacheHost;
        return __awaiter(this, void 0, void 0, function() {
          var url, method, body, bodyParam;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                request = request.clone();
                url = new URL(request.url);
                if (cacheHost && url.hostname == cacheHost.hostname) {
                  url.host = origin.host;
                  url.protocol = origin.protocol;
                }
                method = request.method.toLowerCase();
                if (!(method !== "get"))
                  return [3, 2];
                return [4, request.text()];
              case 1:
                body = _b.sent();
                bodyParam = url.searchParams.get(constants_1.POST_BODY_QUERY_PARAM);
                if (!bodyParam && body) {
                  url.searchParams.set(constants_1.POST_BODY_QUERY_PARAM, encodeURIComponent(body));
                }
                url.searchParams.set(constants_1.METHOD_QUERY_PARAM, request.method.toLowerCase());
                _b.label = 2;
              case 2:
                url.searchParams.delete(constants_1.THROTTLED_QUERY_PARAM);
                url.searchParams.delete(constants_1.DEVTOOLS_PREFETCH_QUERY_PARAM);
                decodeQueryParams(url);
                return [2, url.toString()];
            }
          });
        });
      }
      exports.normalizeRequestUrlForCache = normalizeRequestUrlForCache;
      var PrefetchPlugin = function() {
        function PrefetchPlugin2(_a) {
          var incrementRead = _a.incrementRead, incrementWrite = _a.incrementWrite, cacheHost = _a.cacheHost, prefetchUpstreamRequests = _a.prefetchUpstreamRequests;
          this.incrementRead = incrementRead;
          this.incrementWrite = incrementWrite;
          this.cacheHost = cacheHost;
          this.prefetchUpstreamRequests = prefetchUpstreamRequests;
        }
        PrefetchPlugin2.prototype.requestWillFetch = function(_a) {
          var request = _a.request;
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
              return [2, request.clone()];
            });
          });
        };
        PrefetchPlugin2.prototype.cacheKeyWillBeUsed = function(_a) {
          var request = _a.request, mode = _a.mode;
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
              if (!isPrefetchRequest(request)) {
                if (mode === "read") {
                  this.incrementRead();
                } else {
                  this.incrementWrite();
                }
              }
              return [2, normalizeRequestUrlForCache(request, {cacheHost: this.cacheHost})];
            });
          });
        };
        PrefetchPlugin2.prototype.cacheWillUpdate = function(_a) {
          var response = _a.response, request = _a.request;
          return __awaiter(this, void 0, void 0, function() {
            var backendRequests, urlsToPrefetch;
            return __generator(this, function(_b) {
              if (this.prefetchUpstreamRequests) {
                backendRequests = response.headers.get(constants_2.BACKEND_REQUESTS_RESPONSE_HEADER_NAME);
                if (backendRequests) {
                  urlsToPrefetch = backendRequests.split(";");
                  urlsToPrefetch.forEach(function(url) {
                    if (url)
                      prefetch_1.prefetch(url);
                  });
                }
                return [2, null];
              }
              if (response.redirected) {
                log_1.default(response.url + " was not added to the cache because it was a redirect.");
                return [2, null];
              } else {
                log_1.default(response.url + " was added to the cache with key " + request.url + ".");
                return [2, response];
              }
              return [2];
            });
          });
        };
        return PrefetchPlugin2;
      }();
      exports.default = PrefetchPlugin;
      function decodeQueryParams(url) {
        var maybeDecode = function(val) {
          try {
            return decodeURIComponent(val);
          } catch (e) {
            return val;
          }
        };
        url.searchParams.forEach(function(param, key) {
          url.searchParams.set(maybeDecode(key), maybeDecode(param));
        });
      }
    }
  });

  // node_modules/@layer0/prefetch/sw/DevtoolsPlugin.js
  var require_DevtoolsPlugin = __commonJS({
    "node_modules/@layer0/prefetch/sw/DevtoolsPlugin.js"(exports) {
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
        var _2 = {label: 0, sent: function() {
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
          while (_2)
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
                  _2.label++;
                  return {value: op[1], done: false};
                case 5:
                  _2.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t[1]) {
                    _2.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _2.label < t[2]) {
                    _2.label = t[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
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
      var PrefetchPlugin_1 = require_PrefetchPlugin();
      var CURRENT_REQUEST_MAP_CLEANUP_DELAY = 12e4;
      var DevtoolsPlugin = function() {
        function DevtoolsPlugin2(_a) {
          var onResponse = _a.onResponse, routeConfig = _a.routeConfig, isEnabledFn = _a.isEnabledFn;
          this.currentRequests = {};
          this.onResponse = onResponse;
          this.routeConfig = routeConfig;
          this.isEnabledFn = isEnabledFn;
        }
        DevtoolsPlugin2.prototype.saveRequestMetadata = function(request, metadata) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function() {
            var normalizedUrl;
            var _this = this;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  return [4, PrefetchPlugin_1.normalizeRequestUrlForCache(request)];
                case 1:
                  normalizedUrl = _c.sent();
                  if ((_a = this.currentRequests[normalizedUrl]) === null || _a === void 0 ? void 0 : _a.cleanupTimeout) {
                    clearTimeout(this.currentRequests[normalizedUrl].cleanupTimeout);
                  }
                  this.currentRequests[normalizedUrl] = {
                    metadata: __assign(__assign({}, (_b = this.currentRequests[normalizedUrl]) === null || _b === void 0 ? void 0 : _b.metadata), metadata),
                    cleanupTimeout: setTimeout(function() {
                      delete _this.currentRequests[normalizedUrl];
                    }, CURRENT_REQUEST_MAP_CLEANUP_DELAY)
                  };
                  return [2];
              }
            });
          });
        };
        DevtoolsPlugin2.prototype.getRequestMetadata = function(request) {
          var _a;
          return __awaiter(this, void 0, void 0, function() {
            var normalizedUrl;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  return [4, PrefetchPlugin_1.normalizeRequestUrlForCache(request)];
                case 1:
                  normalizedUrl = _b.sent();
                  return [2, ((_a = this.currentRequests[normalizedUrl]) === null || _a === void 0 ? void 0 : _a.metadata) || {}];
              }
            });
          });
        };
        DevtoolsPlugin2.prototype.requestWillFetch = function(_a) {
          var request = _a.request;
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  if (!this.isEnabledFn()) {
                    return [2, request];
                  }
                  return [4, this.saveRequestMetadata(request, {requestStart: Date.now()})];
                case 1:
                  _b.sent();
                  return [2, request];
              }
            });
          });
        };
        DevtoolsPlugin2.prototype.cacheKeyWillBeUsed = function(_a) {
          var request = _a.request, mode = _a.mode;
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  if (!this.isEnabledFn()) {
                    return [2, request];
                  }
                  if (!(mode === "read"))
                    return [3, 2];
                  return [4, this.saveRequestMetadata(request, {
                    isPrefetch: PrefetchPlugin_1.isPrefetchRequest(request)
                  })];
                case 1:
                  _b.sent();
                  _b.label = 2;
                case 2:
                  return [2, request];
              }
            });
          });
        };
        DevtoolsPlugin2.prototype.cachedResponseWillBeUsed = function(_a) {
          var request = _a.request, response = _a.cachedResponse;
          return __awaiter(this, void 0, void 0, function() {
            var isPrefetch;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  if (!this.isEnabledFn()) {
                    return [2, response];
                  }
                  if (!response)
                    return [2, response];
                  return [
                    4,
                    this.getRequestMetadata(request)
                  ];
                case 1:
                  isPrefetch = _b.sent().isPrefetch;
                  this.onResponse({
                    browserCache: "hit",
                    ttfb: 0,
                    prefetch: isPrefetch,
                    request,
                    response,
                    routeConfig: this.routeConfig
                  });
                  return [2, response];
              }
            });
          });
        };
        DevtoolsPlugin2.prototype.fetchDidSucceed = function(_a) {
          var request = _a.request, response = _a.response;
          return __awaiter(this, void 0, void 0, function() {
            var requestStart, ttfb;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  if (!this.isEnabledFn()) {
                    return [2, response];
                  }
                  return [4, this.getRequestMetadata(request)];
                case 1:
                  requestStart = _b.sent().requestStart;
                  ttfb = requestStart && Date.now() - requestStart;
                  this.onResponse({
                    browserCache: "miss",
                    ttfb,
                    prefetch: PrefetchPlugin_1.isPrefetchRequest(request),
                    request,
                    response,
                    routeConfig: this.routeConfig
                  });
                  return [2, response];
              }
            });
          });
        };
        return DevtoolsPlugin2;
      }();
      exports.default = DevtoolsPlugin;
    }
  });

  // node_modules/@layer0/core/router/GroupConfig.js
  var require_GroupConfig = __commonJS({
    "node_modules/@layer0/core/router/GroupConfig.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var GroupConfig = class {
        constructor(name) {
          this.name = name;
        }
        byPattern(pattern) {
          this.pattern = pattern;
        }
        toJSON() {
          if (!this.pattern) {
            throw new Error("byPattern is required for group " + this.name);
          }
          return {
            groupedValue: this.name,
            matchRegex: this.pattern.source
          };
        }
      };
      exports.default = GroupConfig;
    }
  });

  // node_modules/@layer0/core/router/Groups.js
  var require_Groups = __commonJS({
    "node_modules/@layer0/core/router/Groups.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var GroupConfig_1 = __importDefault(require_GroupConfig());
      var Groups = class {
        constructor() {
          this.groups = [];
          this.name = null;
        }
        group(name) {
          const group = new GroupConfig_1.default(name);
          this.groups.push(group);
          return group;
        }
        toJSON() {
          return this.groups.map((p) => p.toJSON());
        }
      };
      exports.default = Groups;
    }
  });

  // node_modules/cookie/index.js
  var require_cookie = __commonJS({
    "node_modules/cookie/index.js"(exports) {
      init_define_process();
      "use strict";
      exports.parse = parse;
      exports.serialize = serialize;
      var decode = decodeURIComponent;
      var encode = encodeURIComponent;
      var pairSplitRegExp = /; */;
      var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function parse(str, options) {
        if (typeof str !== "string") {
          throw new TypeError("argument str must be a string");
        }
        var obj = {};
        var opt = options || {};
        var pairs = str.split(pairSplitRegExp);
        var dec = opt.decode || decode;
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i];
          var eq_idx = pair.indexOf("=");
          if (eq_idx < 0) {
            continue;
          }
          var key = pair.substr(0, eq_idx).trim();
          var val = pair.substr(++eq_idx, pair.length).trim();
          if (val[0] == '"') {
            val = val.slice(1, -1);
          }
          if (obj[key] == void 0) {
            obj[key] = tryDecode(val, dec);
          }
        }
        return obj;
      }
      function serialize(name, val, options) {
        var opt = options || {};
        var enc = opt.encode || encode;
        if (typeof enc !== "function") {
          throw new TypeError("option encode is invalid");
        }
        if (!fieldContentRegExp.test(name)) {
          throw new TypeError("argument name is invalid");
        }
        var value = enc(val);
        if (value && !fieldContentRegExp.test(value)) {
          throw new TypeError("argument val is invalid");
        }
        var str = name + "=" + value;
        if (opt.maxAge != null) {
          var maxAge = opt.maxAge - 0;
          if (isNaN(maxAge) || !isFinite(maxAge)) {
            throw new TypeError("option maxAge is invalid");
          }
          str += "; Max-Age=" + Math.floor(maxAge);
        }
        if (opt.domain) {
          if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError("option domain is invalid");
          }
          str += "; Domain=" + opt.domain;
        }
        if (opt.path) {
          if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError("option path is invalid");
          }
          str += "; Path=" + opt.path;
        }
        if (opt.expires) {
          if (typeof opt.expires.toUTCString !== "function") {
            throw new TypeError("option expires is invalid");
          }
          str += "; Expires=" + opt.expires.toUTCString();
        }
        if (opt.httpOnly) {
          str += "; HttpOnly";
        }
        if (opt.secure) {
          str += "; Secure";
        }
        if (opt.sameSite) {
          var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
          switch (sameSite) {
            case true:
              str += "; SameSite=Strict";
              break;
            case "lax":
              str += "; SameSite=Lax";
              break;
            case "strict":
              str += "; SameSite=Strict";
              break;
            case "none":
              str += "; SameSite=None";
              break;
            default:
              throw new TypeError("option sameSite is invalid");
          }
        }
        return str;
      }
      function tryDecode(str, decode2) {
        try {
          return decode2(str);
        } catch (e) {
          return str;
        }
      }
    }
  });

  // node_modules/@layer0/core/router/CustomCacheKey.js
  var require_CustomCacheKey = __commonJS({
    "node_modules/@layer0/core/router/CustomCacheKey.js"(exports) {
      init_define_process();
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : {"default": mod};
      };
      Object.defineProperty(exports, "__esModule", {value: true});
      var Groups_1 = __importDefault(require_Groups());
      var cookie_1 = require_cookie();
      exports.CUSTOM_CACHE_KEY_ACTIONS = {
        blacklistAll: "blacklist-all-query-parameters",
        blacklistSome: "blacklist-some-query-parameters",
        whitelistSome: "whitelist-some-query-parameters",
        addValue: "add-value",
        removeMethod: "remove-method",
        removeBody: "remove-body"
      };
      var CustomCacheKey = class {
        constructor() {
          this.config = [];
          this.actions = [];
        }
        clone() {
          const newKey = new CustomCacheKey();
          newKey.actions = this.actions;
          newKey.config = this.config;
          return newKey;
        }
        excludeAllQueryParameters() {
          this.config.push({action: exports.CUSTOM_CACHE_KEY_ACTIONS.blacklistAll});
          this.actions.push((key, srcRequest) => {
            key.query = {};
          });
          return this;
        }
        excludeQueryParameters(...names) {
          this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.blacklistSome,
            names
          });
          this.actions.push((key, srcRequest) => {
            for (let name of names) {
              delete key.query[name];
            }
          });
          return this;
        }
        excludeAllQueryParametersExcept(...names) {
          this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.whitelistSome,
            names
          });
          this.actions.push((key, srcRequest) => {
            const toKeep = new Set(names);
            for (let name in key.query) {
              if (!toKeep.has(name)) {
                delete key.query[name];
              }
            }
          });
          return this;
        }
        addHeader(name, createGroups) {
          this.actions.push((key, srcRequest) => {
            let values = srcRequest.headers[name];
            if (!Array.isArray(values)) {
              values = [values];
            }
            if (createGroups) {
              key.headers[name] = this.createGroupedValue(createGroups, values);
            } else {
              key.headers[name] = values;
            }
          });
          return this.addValue(`\${req:${name}}`, createGroups);
        }
        removeMethod() {
          this.actions.push((key, srcRequest) => {
            key.method = void 0;
          });
          this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.removeMethod
          });
          return this;
        }
        removeBody() {
          this.actions.push((key, srcRequest) => {
            key.body = void 0;
          });
          this.config.push({
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.removeBody
          });
          return this;
        }
        createGroupedValue(createGroups, srcValues) {
          const groups = new Groups_1.default();
          const result = [];
          createGroups(groups);
          const matchingGroup = this.findMatchingGroup(groups, srcValues);
          if (matchingGroup) {
            result.push(matchingGroup);
          } else {
            result.push(...srcValues);
          }
          return result;
        }
        findMatchingGroup(groups, srcValues) {
          var _a;
          for (let group of groups.groups) {
            for (let value of srcValues) {
              if ((_a = group.pattern) === null || _a === void 0 ? void 0 : _a.test(value)) {
                return group.name;
              }
            }
          }
        }
        addDevice() {
          return this.addHeader("x-0-device");
        }
        addVendor() {
          return this.addHeader("x-0-vendor");
        }
        addIsBot() {
          return this.addHeader("x-0-device-is-bot");
        }
        addBrowser() {
          return this.addHeader("x-0-browser");
        }
        addCookie(name, createGroups) {
          this.actions.push((key, srcRequest) => {
            let cookieHeader = srcRequest.headers.cookie || "";
            if (Array.isArray(cookieHeader)) {
              cookieHeader = cookieHeader.join(";");
            }
            const cookie = cookie_1.parse(cookieHeader);
            const value = cookie[name];
            if (createGroups) {
              key.cookies[name] = this.createGroupedValue(createGroups, [value]);
            } else {
              key.cookies[name] = value;
            }
          });
          return this.addValue(`\${req:cookie:${name}}`, createGroups);
        }
        addValue(value, createGroups) {
          const action = {
            action: exports.CUSTOM_CACHE_KEY_ACTIONS.addValue,
            value
          };
          if (createGroups != null) {
            const groups = new Groups_1.default();
            createGroups(groups);
            action.groups = groups.toJSON();
          }
          this.config.push(action);
          return this;
        }
        getActions() {
          return this.actions;
        }
        toJSON() {
          return this.config;
        }
      };
      exports.default = CustomCacheKey;
    }
  });

  // node_modules/@layer0/prefetch/sw/CustomCacheKeyPlugin.js
  var require_CustomCacheKeyPlugin = __commonJS({
    "node_modules/@layer0/prefetch/sw/CustomCacheKeyPlugin.js"(exports) {
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
        var _2 = {label: 0, sent: function() {
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
          while (_2)
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
                  _2.label++;
                  return {value: op[1], done: false};
                case 5:
                  _2.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t[1]) {
                    _2.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _2.label < t[2]) {
                    _2.label = t[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
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
      var CustomCacheKey_1 = require_CustomCacheKey();
      var constants_1 = require_constants2();
      var CustomCacheKeyPlugin = function() {
        function CustomCacheKeyPlugin2(urls, config) {
          this.route = urls;
          this.config = config;
        }
        CustomCacheKeyPlugin2.prototype.urlMatches = function(url) {
          return this.route.test(url);
        };
        CustomCacheKeyPlugin2.prototype.cacheKeyWillBeUsed = function(_a) {
          var request = _a.request;
          return __awaiter(this, void 0, void 0, function() {
            var url, url_1;
            var _this = this;
            return __generator(this, function(_b) {
              url = new URL(request.url);
              if (this.urlMatches(url.pathname)) {
                url_1 = new URL(request.url);
                this.config.forEach(function(conf) {
                  return _this.handleKeyConfig(url_1, conf);
                });
                return [2, url_1.toString()];
              }
              return [2, request];
            });
          });
        };
        CustomCacheKeyPlugin2.prototype.handleKeyConfig = function(url, config) {
          var deleteKeys = [];
          switch (config.action) {
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.blacklistAll:
              url.searchParams.forEach(function(value, key) {
                deleteKeys.push(key);
              });
              break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.blacklistSome:
              url.searchParams.forEach(function(value, key) {
                if (config.names && config.names.includes(key)) {
                  deleteKeys.push(key);
                }
              });
              break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.whitelistSome:
              url.searchParams.forEach(function(value, key) {
                if (config.names && !config.names.includes(key)) {
                  deleteKeys.push(key);
                }
              });
              break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.removeBody:
              url.searchParams.delete(constants_1.POST_BODY_QUERY_PARAM);
              break;
            case CustomCacheKey_1.CUSTOM_CACHE_KEY_ACTIONS.removeMethod:
              url.searchParams.delete(constants_1.METHOD_QUERY_PARAM);
              break;
          }
          deleteKeys.forEach(function(key) {
            return url.searchParams.delete(key);
          });
        };
        return CustomCacheKeyPlugin2;
      }();
      exports.default = CustomCacheKeyPlugin;
    }
  });

  // node_modules/@layer0/prefetch/sw/ChangeMethodPlugin.js
  var require_ChangeMethodPlugin = __commonJS({
    "node_modules/@layer0/prefetch/sw/ChangeMethodPlugin.js"(exports) {
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
        var _2 = {label: 0, sent: function() {
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
          while (_2)
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
                  _2.label++;
                  return {value: op[1], done: false};
                case 5:
                  _2.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t[1]) {
                    _2.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _2.label < t[2]) {
                    _2.label = t[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
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
      var constants_1 = require_constants2();
      var ChangeMethodPlugin = function() {
        function ChangeMethodPlugin2(urls) {
          this.urls = urls;
        }
        ChangeMethodPlugin2.prototype.urlMatches = function(url) {
          return this.urls.some(function(testUrl) {
            return testUrl.test(url);
          });
        };
        ChangeMethodPlugin2.prototype.cacheKeyWillBeUsed = function(_a) {
          var request = _a.request;
          return __awaiter(this, void 0, void 0, function() {
            var url, body, bodyParam;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  url = new URL(request.url);
                  if (!this.urlMatches(url.pathname))
                    return [3, 2];
                  return [4, request.clone().text()];
                case 1:
                  body = _b.sent();
                  bodyParam = url.searchParams.get(constants_1.POST_BODY_QUERY_PARAM);
                  if (!bodyParam && body) {
                    url.searchParams.set(constants_1.POST_BODY_QUERY_PARAM, encodeURIComponent(body));
                  }
                  _b.label = 2;
                case 2:
                  return [2, url.toString()];
              }
            });
          });
        };
        ChangeMethodPlugin2.prototype.requestWillFetch = function(_a) {
          var request = _a.request;
          return __awaiter(this, void 0, void 0, function() {
            var url, headers, body;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  url = new URL(request.url);
                  if (!(this.urlMatches(url.pathname) && request.method.toUpperCase() !== "GET"))
                    return [3, 2];
                  headers = new Headers(request.headers);
                  return [4, request.clone().text()];
                case 1:
                  body = _b.sent();
                  url.searchParams.set(constants_1.POST_BODY_QUERY_PARAM, body);
                  return [2, new Request(url.toString(), {
                    method: "get",
                    headers,
                    redirect: request.redirect
                  })];
                case 2:
                  return [2, request];
              }
            });
          });
        };
        return ChangeMethodPlugin2;
      }();
      exports.default = ChangeMethodPlugin;
    }
  });

  // node_modules/@layer0/prefetch/sw/Prefetcher.js
  var require_Prefetcher = __commonJS({
    "node_modules/@layer0/prefetch/sw/Prefetcher.js"(exports) {
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
        var _2 = {label: 0, sent: function() {
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
          while (_2)
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
                  _2.label++;
                  return {value: op[1], done: false};
                case 5:
                  _2.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _2.ops.pop();
                  _2.trys.pop();
                  continue;
                default:
                  if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _2 = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _2.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _2.label < t[1]) {
                    _2.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _2.label < t[2]) {
                    _2.label = t[2];
                    _2.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _2.ops.pop();
                  _2.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _2);
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
      var workbox_routing_1 = (init_workbox_routing(), workbox_routing_exports);
      var workbox_strategies_1 = (init_workbox_strategies(), workbox_strategies_exports);
      var workbox_expiration_1 = (init_workbox_expiration(), workbox_expiration_exports);
      var workbox_cacheable_response_1 = (init_workbox_cacheable_response(), workbox_cacheable_response_exports);
      var constants_1 = require_constants();
      var log_1 = __importDefault(require_log());
      var PrefetchPlugin_1 = __importDefault(require_PrefetchPlugin());
      var DevtoolsPlugin_1 = __importDefault(require_DevtoolsPlugin());
      var messageBrowser_1 = __importDefault(require_messageBrowser());
      var CustomCacheKeyPlugin_1 = __importDefault(require_CustomCacheKeyPlugin());
      var ChangeMethodPlugin_1 = __importDefault(require_ChangeMethodPlugin());
      var Stats = function() {
        function Stats2() {
          this.hits = 0;
          this.misses = 0;
        }
        return Stats2;
      }();
      exports.Stats = Stats;
      var BUFFER_DELAY_MS = 1e4;
      var Prefetcher2 = function() {
        function Prefetcher3(config) {
          if (config === void 0) {
            config = {plugins: []};
          }
          this.devtoolsEnabled = false;
          this.bufferedDevtoolMessages = [];
          this.config = config;
          var manifestURL = "__layer0__/cache-manifest.js";
          this.cacheOrigins = [self.origin];
          if (config.cacheHost) {
            this.cacheHost = new URL("https://" + config.cacheHost);
            this.cacheOrigins.push(this.cacheHost.origin);
            manifestURL = this.cacheHost.toString() + manifestURL;
          }
          importScripts(manifestURL);
          this.cacheableResponsePlugin = new workbox_cacheable_response_1.CacheableResponsePlugin({
            statuses: [200, 301, 302]
          });
          this.stats = new Stats();
          this.initStats();
          this.initDevtoolsHandshakeListener();
        }
        Prefetcher3.prototype.getRouteConfigsFromManifest = function() {
          var manifest = self.__LAYER0_CACHE_MANIFEST__;
          return manifest.map(function(_a) {
            var criteriaPath = _a.criteriaPath, route = _a.route, cacheOptions = _a.cacheOptions, method = _a.method, returnsResponse = _a.returnsResponse;
            var _b, _c, _d;
            var maxAgeSeconds = (_b = cacheOptions.browser) === null || _b === void 0 ? void 0 : _b.serviceWorkerSeconds;
            var edgeMaxAgeSeconds = (_c = cacheOptions.edge) === null || _c === void 0 ? void 0 : _c.maxAgeSeconds;
            return {
              criteriaPath,
              pattern: route,
              method,
              maxAgeSeconds,
              edgeMaxAgeSeconds,
              returnsResponse,
              isPartialPathRoute: true,
              key: cacheOptions.key,
              convertToGet: (_d = cacheOptions.browser) === null || _d === void 0 ? void 0 : _d.convertToGet,
              prefetchUpstreamRequests: cacheOptions.prefetchUpstreamRequests
            };
          });
        };
        Prefetcher3.prototype.registerDevtoolsRoutes = function() {
          var e_1, _a;
          try {
            for (var _b = __values(this.getRouteConfigsFromManifest()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var routeConfig = _c.value;
              if (!routeConfig.maxAgeSeconds && !routeConfig.returnsResponse) {
                this.createDevtoolsRoute(routeConfig);
              }
            }
          } catch (e_1_1) {
            e_1 = {error: e_1_1};
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          this.createDevtoolsRoute();
        };
        Prefetcher3.prototype.route = function() {
          var e_2, _a;
          try {
            for (var _b = __values(this.getRouteConfigsFromManifest()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var routeConfig = _c.value;
              if (routeConfig.maxAgeSeconds && routeConfig.maxAgeSeconds > 0 || routeConfig.prefetchUpstreamRequests) {
                this.createRoute(routeConfig);
              } else if (routeConfig.returnsResponse) {
                var method = (routeConfig.method || "get").toUpperCase();
                workbox_routing_1.registerRoute(this.shouldIntercept(new RegExp(routeConfig.pattern, "i"), routeConfig.isPartialPathRoute), new workbox_strategies_1.NetworkOnly({
                  plugins: [this.createDevtoolsPlugin(routeConfig)]
                }), method);
              }
            }
          } catch (e_2_1) {
            e_2 = {error: e_2_1};
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
          return this;
        };
        Prefetcher3.prototype.cache = function(pattern, maxAgeSeconds) {
          if (maxAgeSeconds === void 0) {
            maxAgeSeconds = 60 * 60 * 24;
          }
          this.createRoute({pattern: pattern.source, maxAgeSeconds, isPartialPathRoute: false});
          return this;
        };
        Prefetcher3.prototype.initStats = function() {
          var _this = this;
          self.addEventListener("message", function(e) {
            if (e.data.action === "get-stats") {
              messageBrowser_1.default({
                type: "stats",
                stats: _this.stats
              });
            }
          });
        };
        Prefetcher3.prototype.initDevtoolsHandshakeListener = function() {
          var _this = this;
          self.addEventListener("message", function(e) {
            return __awaiter(_this, void 0, void 0, function() {
              var ackMessage;
              return __generator(this, function(_a) {
                if (e.data.action === "layer0-devtools-install") {
                  if (!this.devtoolsEnabled) {
                    this.registerDevtoolsRoutes();
                    this.devtoolsEnabled = true;
                    this.sendToAllClients({
                      type: "layer0-devtools-ack-installed"
                    });
                  }
                }
                if (e.data.action === "layer0-devtools-syn") {
                  if (this.devtoolsEnabled) {
                    ackMessage = {
                      type: "layer0-devtools-ack",
                      bufferedDevtoolMessages: this.bufferedDevtoolMessages
                    };
                    this.sendToAllClients(ackMessage);
                  }
                }
                if (e.data.action === "layer0-devtools-clear-cache") {
                  caches.keys().then(function(cacheNames3) {
                    return cacheNames3.forEach(function(name) {
                      return caches.delete(name);
                    });
                  });
                }
                return [2];
              });
            });
          });
        };
        Prefetcher3.prototype.sendToAllClients = function(data) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              messageBrowser_1.default(data, {broadcast: true});
              return [2];
            });
          });
        };
        Prefetcher3.prototype.addDevtoolsRequestMessageToBuffer = function(message) {
          var _this = this;
          this.bufferedDevtoolMessages.push(message);
          this.trimDevtoolsRequestMessageBuffer();
          if (this.clearDevtoolsRequestMessageTimeout) {
            clearTimeout(this.clearDevtoolsRequestMessageTimeout);
          }
          this.clearDevtoolsRequestMessageTimeout = setTimeout(function() {
            _this.bufferedDevtoolMessages = [];
          }, BUFFER_DELAY_MS);
        };
        Prefetcher3.prototype.trimDevtoolsRequestMessageBuffer = function() {
          var sliceIndex = 0;
          var sliceMinimumTimestamp = Date.now() - BUFFER_DELAY_MS;
          while (this.bufferedDevtoolMessages[sliceIndex] && this.bufferedDevtoolMessages[sliceIndex].timestamp < sliceMinimumTimestamp) {
            sliceIndex++;
          }
          this.bufferedDevtoolMessages = this.bufferedDevtoolMessages.slice(sliceIndex);
        };
        Prefetcher3.prototype.shouldIntercept = function(pattern, isPartialPathRoute, _a) {
          var _this = this;
          var _b = (_a === void 0 ? {} : _a).skipAssets, skipAssets = _b === void 0 ? false : _b;
          return function(_a2) {
            var url = _a2.url, request = _a2.request;
            if (skipAssets && request.destination && !["document", "empty"].includes(request.destination)) {
              return false;
            }
            if (isPartialPathRoute) {
              return _this.cacheOrigins.includes(url.origin) && pattern.test(url.pathname);
            } else {
              return pattern.test(url.toString());
            }
          };
        };
        Prefetcher3.prototype.createDevtoolsPlugin = function(routeConfig) {
          var _this = this;
          return new DevtoolsPlugin_1.default({
            onResponse: this.onResponse.bind(this),
            isEnabledFn: function() {
              return _this.devtoolsEnabled;
            },
            routeConfig
          });
        };
        Prefetcher3.prototype.createDevtoolsRoute = function(routeConfig) {
          var method, routeMatcher;
          if (routeConfig) {
            var pattern = routeConfig.pattern, isPartialPathRoute = routeConfig.isPartialPathRoute;
            var patternRegexp = new RegExp(pattern, "i");
            routeMatcher = this.shouldIntercept(patternRegexp, isPartialPathRoute, {skipAssets: true});
            method = (routeConfig.method || "get").toUpperCase();
          } else {
            routeMatcher = this.shouldIntercept(/^.*$/, true, {skipAssets: true});
            method = "GET";
          }
          workbox_routing_1.registerRoute(routeMatcher, new workbox_strategies_1.NetworkOnly({
            plugins: [this.createDevtoolsPlugin(routeConfig)]
          }), method);
        };
        Prefetcher3.prototype.createRoute = function(routeConfig) {
          var pattern = routeConfig.pattern, optMethod = routeConfig.method, maxAgeSeconds = routeConfig.maxAgeSeconds, isPartialPathRoute = routeConfig.isPartialPathRoute, key = routeConfig.key, convertToGet = routeConfig.convertToGet;
          var method = (optMethod || "get").toLowerCase();
          log_1.default("[route] " + method + " " + pattern + ", maxAgeSeconds: " + maxAgeSeconds);
          var patternRegexp = new RegExp(pattern, "i");
          if (method !== "get") {
            this.createRoute(__assign(__assign({}, routeConfig), {method: "get"}));
          }
          var prefetchPlugin = new PrefetchPlugin_1.default({
            incrementRead: this.incrementRead.bind(this),
            incrementWrite: this.incrementWrite.bind(this),
            cacheHost: this.cacheHost,
            prefetchUpstreamRequests: routeConfig.prefetchUpstreamRequests
          });
          var plugins = __spread([
            this.cacheableResponsePlugin,
            new workbox_expiration_1.ExpirationPlugin({
              maxAgeSeconds
            }),
            this.createDevtoolsPlugin(routeConfig),
            prefetchPlugin
          ], this.config.plugins || []);
          if (key) {
            plugins.push(new CustomCacheKeyPlugin_1.default(patternRegexp, key));
          }
          if (convertToGet) {
            plugins.splice(plugins.indexOf(prefetchPlugin), 0, new ChangeMethodPlugin_1.default([patternRegexp]));
          }
          workbox_routing_1.registerRoute(this.shouldIntercept(patternRegexp, isPartialPathRoute), new workbox_strategies_1.CacheFirst({
            cacheName: constants_1.CACHE_NAME,
            matchOptions: {
              ignoreVary: true
            },
            plugins
          }), method.toUpperCase());
        };
        Prefetcher3.prototype.incrementRead = function() {
          this.stats.hits++;
        };
        Prefetcher3.prototype.incrementWrite = function() {
          this.stats.misses++;
          this.stats.hits--;
        };
        Prefetcher3.prototype.onResponse = function(_a) {
          var request = _a.request, response = _a.response, ttfb = _a.ttfb, prefetch2 = _a.prefetch, browserCache = _a.browserCache, routeConfig = _a.routeConfig;
          return __awaiter(this, void 0, void 0, function() {
            var headers, devToolMessage;
            return __generator(this, function(_b) {
              headers = {};
              response.headers.forEach(function(value, key) {
                headers[key] = value;
              });
              devToolMessage = {
                type: "layer0-devtools-request",
                timestamp: Date.now(),
                request: {
                  method: request.method,
                  url: request.url,
                  prefetch: prefetch2
                },
                response: {
                  ttfb,
                  status: response.status,
                  headers
                },
                browserCache,
                routeConfig
              };
              this.sendToAllClients(devToolMessage);
              this.addDevtoolsRequestMessageToBuffer(devToolMessage);
              return [2];
            });
          });
        };
        return Prefetcher3;
      }();
      exports.default = Prefetcher2;
    }
  });

  // node_modules/@layer0/prefetch/sw/index.js
  var require_sw = __commonJS({
    "node_modules/@layer0/prefetch/sw/index.js"(exports) {
      init_define_process();
      "use strict";
      Object.defineProperty(exports, "__esModule", {value: true});
      var Prefetcher_1 = require_Prefetcher();
      exports.Prefetcher = Prefetcher_1.default;
      var prefetch_1 = require_prefetch();
      exports.prefetch = prefetch_1.prefetch;
    }
  });

  // src/service-worker.ts
  init_define_process();

  // node_modules/workbox-core/index.js
  init_define_process();
  init_registerQuotaErrorCallback();

  // node_modules/workbox-core/_private.js
  init_define_process();
  init_assert();
  init_cacheNames();
  init_cacheWrapper();

  // node_modules/workbox-core/_private/canConstructReadableStream.js
  init_define_process();
  init_version();

  // node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
  init_define_process();
  init_version();

  // node_modules/workbox-core/_private.js
  init_dontWaitFor();
  init_DBWrapper();

  // node_modules/workbox-core/_private/Deferred.js
  init_define_process();
  init_version();

  // node_modules/workbox-core/_private.js
  init_deleteDatabase();
  init_executeQuotaErrorCallbacks();
  init_fetchWrapper();
  init_getFriendlyURL();
  init_logger();

  // node_modules/workbox-core/_private/resultingClientExists.js
  init_define_process();

  // node_modules/workbox-core/_private/timeout.js
  init_define_process();
  init_version();

  // node_modules/workbox-core/_private/resultingClientExists.js
  init_version();

  // node_modules/workbox-core/_private.js
  init_WorkboxError();
  init_version();

  // node_modules/workbox-core/cacheNames.js
  init_define_process();
  init_cacheNames();
  init_version();

  // node_modules/workbox-core/copyResponse.js
  init_define_process();
  init_version();

  // node_modules/workbox-core/clientsClaim.js
  init_define_process();
  init_version();
  function clientsClaim() {
    self.addEventListener("activate", () => self.clients.claim());
  }

  // node_modules/workbox-core/setCacheNameDetails.js
  init_define_process();
  init_assert();
  init_cacheNames();
  init_WorkboxError();
  init_version();

  // node_modules/workbox-core/skipWaiting.js
  init_define_process();
  init_version();
  function skipWaiting() {
    self.addEventListener("install", () => self.skipWaiting());
  }

  // node_modules/workbox-core/index.js
  init_version();

  // node_modules/workbox-core/types.js
  init_define_process();
  init_version();

  // src/service-worker.ts
  var import_sw = __toModule(require_sw());
  skipWaiting();
  clientsClaim();
  new import_sw.Prefetcher({
    plugins: []
  }).route();
})();
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
