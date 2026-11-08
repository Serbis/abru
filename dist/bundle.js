/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./src/AppActor.ts":
/*!*************************!*\
  !*** ./src/AppActor.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Actor_1 = __webpack_require__(/*! ./actors/Actor */ "./src/actors/Actor.ts");
var Message_1 = __webpack_require__(/*! ./actors/Message */ "./src/actors/Message.ts");
var Props_1 = __webpack_require__(/*! ./actors/Props */ "./src/actors/Props.ts");
var AbruComponent_1 = __webpack_require__(/*! ./abru/components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var RegistrationPage_1 = __webpack_require__(/*! ./abru/exps/RegistrationPage */ "./src/abru/exps/RegistrationPage.ts");
var Div_1 = __webpack_require__(/*! ./abru/dom/Div */ "./src/abru/dom/Div.ts");
var AppActor = /** @class */ (function (_super) {
    __extends(AppActor, _super);
    function AppActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.internals = {};
        _this.id = "root";
        return _this;
    }
    AppActor.props = function () {
        return new Props_1["default"](new AppActor());
    };
    AppActor.prototype.preStart = function () {
        this.executor = this.context.system.dispatcher;
    };
    AppActor.prototype.receive = function (msg) {
        this.run();
        return true;
    };
    AppActor.prototype.run = function () {
        var top = this.context.system.actorOf(Div_1["default"].props({ id: "top" }), "top");
        top.tell(AbruComponent_1["default"].Commands.Render("root"));
        var registrationPage = this.context.system.actorOf(RegistrationPage_1["default"].props({ id: "registration_page" }), "registration_page");
        top.ask(AbruComponent_1["default"].Commands.AddComponent(registrationPage, {}))
            .onComplete(function (_) { });
        /*let start = Date.now();
        let rp = new RegistrationPage({});
        let vertical = this.context.system.actorOf(VerticalLayout.props({id: "vertical"}), "vertical");
        this.internals["vertical"] = vertical;
        vertical.ask(AbruComponent.Commands.Render(this.id))
            .flatMap((_) => {
                let VirUxnIOpE = this.context.system.actorOf(Label.props({id: "VirUxnIOpE"}), "VirUxnIOpE");
                return vertical.ask(AbruComponent.Commands.AddComponent(VirUxnIOpE, {}), this.context.self);
            })
            .flatMap((_) => {
                let teName = this.context.system.actorOf(TextEdit.props({id: "teName"}), "teName");
                this.internals["teName"] = teName;
                return vertical.ask(AbruComponent.Commands.AddComponent(teName, {}), this.context.self);
            })
            .flatMap((_) => {
                let diSqDKLkYP = this.context.system.actorOf(Label.props({id: "diSqDKLkYP"}), "diSqDKLkYP");
                return vertical.ask(AbruComponent.Commands.AddComponent(diSqDKLkYP, {}), this.context.self);
            })
            .flatMap((_) => {
                let tePassword = this.context.system.actorOf(TextEdit.props({id: "tePassword"}), "tePassword");
                this.internals["tePassword"] = tePassword;
                return vertical.ask(AbruComponent.Commands.AddComponent(tePassword, {}), this.context.self);
            })
            .flatMap((_) => {
                let horizontal = this.context.system.actorOf(HorizontalLayout.props({id: "horizontal"}), "horizontal");
                return vertical.ask(AbruComponent.Commands.AddComponent(horizontal, {}), this.context.self)
                    .flatMap((_) => {
                        this.internals["horizontal"] = horizontal;
                        return Future.async(() => 0, this.executor)
                            .flatMap((_) => {
                                let btnCancel = this.context.system.actorOf(Button.props({id: "btnCancel"}), "btnCancel");
                                this.internals["btnCancel"] = btnCancel;
                                return horizontal.ask(AbruComponent.Commands.AddComponent(btnCancel, {}), this.context.self);
                            })
                            .flatMap((_) => {
                                let btnOk = this.context.system.actorOf(Button.props({id: "btnOk"}), "btnOk");
                                this.internals["btnOk"] = btnOk;
                                return horizontal.ask(AbruComponent.Commands.AddComponent(btnOk, {}), this.context.self);
                            })

                    })
            })
            .onComplete((_) => { console.log(`Elapsed = ${Date.now() - start}`)})*/
    };
    AppActor.Commands = {
        Run: function () { return new Run(); }
    };
    return AppActor;
}(Actor_1.Actor));
exports["default"] = AppActor;
var Run = /** @class */ (function (_super) {
    __extends(Run, _super);
    function Run() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Run;
}(Message_1["default"]));
exports.Run = Run;


/***/ }),

/***/ "./src/abru/Abru.ts":
/*!**************************!*\
  !*** ./src/abru/Abru.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Abru = /** @class */ (function () {
    function Abru() {
    }
    Abru.genNewId = function () {
        return;
    };
    return Abru;
}());
exports["default"] = Abru;


/***/ }),

/***/ "./src/abru/components/AbruComponent.ts":
/*!**********************************************!*\
  !*** ./src/abru/components/AbruComponent.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Actor_1 = __webpack_require__(/*! ../../actors/Actor */ "./src/actors/Actor.ts");
var Message_1 = __webpack_require__(/*! ../../actors/Message */ "./src/actors/Message.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Subscriptions_1 = __webpack_require__(/*! ./Subscriptions */ "./src/abru/components/Subscriptions.ts");
var AbruComponent = /** @class */ (function (_super) {
    __extends(AbruComponent, _super);
    function AbruComponent(cProps) {
        var _this = _super.call(this) || this;
        _this.subscriptions = new Subscriptions_1["default"]();
        _this.internals = {};
        _this.renderParams = {};
        if (cProps["id"] == null) {
            _this.id = (Math.floor(Date.now() * Math.random())).toString();
        }
        else {
            _this.id = cProps["id"];
        }
        return _this;
    }
    AbruComponent.prototype.handleDefault = function (msg) {
        if (msg instanceof Render) {
            this.render(msg.id);
        }
        else {
            return false;
        }
        return true;
    };
    /** Handle dom event, mapped to the component event and send Event message with this event
     *  to the all subscribers
     *
     * @param {string} event component event, for example OnClick
     * @param {object} payload data from the event dom event handler
     */
    AbruComponent.prototype.handleDomEvent = function (event, payload) {
        var _this = this;
        var subs = this.subscriptions.getSubscribers(event);
        subs.forEach(function (s) { return s.tell(new Event(event, payload), _this.context.self); });
    };
    AbruComponent.prototype.render = function (parent) {
        $("#" + parent).append("<div id=\"" + this.id + "\"></div>");
    };
    ;
    AbruComponent.prototype.mounted = function () { };
    AbruComponent.Commands = {
        Render: function (id) { return new Render(id); },
        AddComponent: function (component, options) { return new AddComponent(component, options); },
        Event: function (event, payload) { return new Event(event, payload); },
        SubscribeForEvents: function (events, ref) { return new SubscribeForEvents(events, ref); }
    };
    AbruComponent.Responses = {
        Ok: function () { return new Ok(); },
    };
    return AbruComponent;
}(Actor_1.Actor));
exports["default"] = AbruComponent;
var Render = /** @class */ (function (_super) {
    __extends(Render, _super);
    function Render(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    return Render;
}(Message_1["default"]));
exports.Render = Render;
var Ok = /** @class */ (function (_super) {
    __extends(Ok, _super);
    function Ok() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ok;
}(Message_1["default"]));
exports.Ok = Ok;
var AddComponent = /** @class */ (function (_super) {
    __extends(AddComponent, _super);
    function AddComponent(component, options) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.options = options;
        return _this;
    }
    return AddComponent;
}(Message_1["default"]));
exports.AddComponent = AddComponent;
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(event, payload) {
        var _this = _super.call(this) || this;
        _this.event = event;
        _this.payload = payload;
        return _this;
    }
    return Event;
}(Message_1["default"]));
exports.Event = Event;
var SubscribeForEvents = /** @class */ (function (_super) {
    __extends(SubscribeForEvents, _super);
    function SubscribeForEvents(events, ref) {
        var _this = _super.call(this) || this;
        _this.events = events;
        _this.ref = ref;
        return _this;
    }
    return SubscribeForEvents;
}(Message_1["default"]));
exports.SubscribeForEvents = SubscribeForEvents;


/***/ }),

/***/ "./src/abru/components/Subscriptions.ts":
/*!**********************************************!*\
  !*** ./src/abru/components/Subscriptions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/** Subscriptions of a component for his events. This object allows add, delete and extract actor
 * references subscribed on various component level events.*/
var Subscriptions = /** @class */ (function () {
    function Subscriptions() {
        this.eventsGrid = [];
    }
    /** Subscribes actor to the event. If subscription exists, do nothing
     *
     * @param {string} event component level event
     * @param {ActorRef} ref subscriber
     */
    Subscriptions.prototype.subscribe = function (event, ref) {
        var entry = this.eventsGrid.find(function (v) { return v.event == event; });
        if (entry) {
            if (!entry.subscribers.find(function (v) { return v.equals(ref); })) {
                entry.subscribers.push(ref);
            }
        }
        else {
            this.eventsGrid.push(new SubscriptionEntry(event, [ref]));
        }
    };
    /** Returns subscribers list for some event
     *
     * @param {string} event
     * @return {Array<ActorRef>}
     */
    Subscriptions.prototype.getSubscribers = function (event) {
        var entry = this.eventsGrid.find(function (v) { return v.event == event; });
        if (entry) {
            return entry.subscribers;
        }
        return [];
    };
    return Subscriptions;
}());
exports["default"] = Subscriptions;
//--------------- INTERNAL API ---------------
var SubscriptionEntry = /** @class */ (function () {
    function SubscriptionEntry(events, subscribers) {
        this.subscribers = [];
        this.event = events;
        this.subscribers = subscribers;
    }
    return SubscriptionEntry;
}());


/***/ }),

/***/ "./src/abru/dom/Div.ts":
/*!*****************************!*\
  !*** ./src/abru/dom/Div.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var AbruComponent_1 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Props_1 = __webpack_require__(/*! ../../actors/Props */ "./src/actors/Props.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var AbruComponent_2 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Div.props = function (cProps) {
        return new Props_1["default"](new Div(cProps));
    };
    Div.prototype.receive = function (msg) {
        if (msg instanceof AbruComponent_1.Render) {
            this.render(msg.id);
        }
        else if (msg instanceof AbruComponent_1.AddComponent) {
            this.addComponent(msg.component);
        }
        return true;
    };
    Div.prototype.render = function (id) {
        $("#" + id).append("<div id=\"" + this.id + "\"></div>");
        this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
    };
    Div.prototype.addComponent = function (component) {
        var _this = this;
        this.pipe(function () { return component.ask(new AbruComponent_1.Render(_this.id), _this.context.self); }, this.context.sender);
    };
    Div.prototype.mounted = function () {
    };
    return Div;
}(AbruComponent_2["default"]));
exports["default"] = Div;


/***/ }),

/***/ "./src/abru/exps/RegistrationPage.ts":
/*!*******************************************!*\
  !*** ./src/abru/exps/RegistrationPage.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Props_1 = __webpack_require__(/*! ../../actors/Props */ "./src/actors/Props.ts");
var AbruComponent_1 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Future_1 = __webpack_require__(/*! ../../future/Future */ "./src/future/Future.ts");
var VerticalLayout_1 = __webpack_require__(/*! ../gui/VerticalLayout */ "./src/abru/gui/VerticalLayout.ts");
var Label_1 = __webpack_require__(/*! ../gui/Label */ "./src/abru/gui/Label.ts");
var HorizontalLayout_1 = __webpack_require__(/*! ../gui/HorizontalLayout */ "./src/abru/gui/HorizontalLayout.ts");
var Button_1 = __webpack_require__(/*! ../gui/Button */ "./src/abru/gui/Button.ts");
var TextEdit_1 = __webpack_require__(/*! ../gui/TextEdit */ "./src/abru/gui/TextEdit.ts");
var RegistrationPage = /** @class */ (function (_super) {
    __extends(RegistrationPage, _super);
    function RegistrationPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userName = "Hren";
        return _this;
        /*
    
    
        <Label text="User"/>
                    <TextEdit text=# this.userName # marginTop="10px"/>
                    <Label text="Password" marginTop="30px"/>
                    <TextEdit text="*******" marginTop="10px"/>
                    <HorizontalLayout marginTop="20px">
                        <Button text="Cancel"/>
                        <Button text="Ok" events=[OnClick, OnFocus] marginLeft="20px"/>
                    </HorizontalLayout>
         */
    }
    RegistrationPage.props = function (cProps) {
        return new Props_1["default"](new RegistrationPage(cProps));
    };
    RegistrationPage.prototype.receive = function (msg) {
        if (!this.handleDefault(msg)) {
            if (msg instanceof AbruComponent_1.Event) {
                if (this.context.sender.equals(this.internals["btnOk"])) {
                    console.log("Handled event from btnOk");
                }
            }
            else {
                console.log("AAAA");
                return false;
            }
        }
        return true;
    };
    //TODO при нескольких формах не работает event биндинг
    RegistrationPage.prototype.render = function (parent) {
        var _this = this;
        _super.prototype.render.call(this, parent);
        var profStart = Date.now();
        var refCache = {};
        var sender = this.context.sender;
        var self = this.context.self;
        var SHKgYLcHwF = this.context.system.actorOf(VerticalLayout_1["default"].props({ id: "SHKgYLcHwF" }), "SHKgYLcHwF");
        refCache["SHKgYLcHwF"] = SHKgYLcHwF;
        SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.Render(this.id))
            .flatMap(function (_) {
            var SmjKMxTXbM = _this.context.system.actorOf(Label_1["default"].props({ id: "SmjKMxTXbM", text: "User" }), "SmjKMxTXbM");
            refCache["SmjKMxTXbM"] = SmjKMxTXbM;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(SmjKMxTXbM, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var teUser = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "teUser", text: _this.userName, marginTop: "10px" }), "teUser");
            refCache["teUser"] = teUser;
            _this.internals["teUser"] = teUser;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(teUser, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var BjGgnbyIFu = _this.context.system.actorOf(Label_1["default"].props({ id: "BjGgnbyIFu", text: "Password", marginTop: "30px" }), "BjGgnbyIFu");
            refCache["BjGgnbyIFu"] = BjGgnbyIFu;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BjGgnbyIFu, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var tePassword = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "tePassword", text: "*******", marginTop: "10px" }), "tePassword");
            refCache["tePassword"] = tePassword;
            _this.internals["tePassword"] = tePassword;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(tePassword, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var aNAoofIzZa = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "aNAoofIzZa", marginTop: "20px" }), "aNAoofIzZa");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(aNAoofIzZa, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["aNAoofIzZa"] = aNAoofIzZa;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var NXKwbjfHsq = _this.context.system.actorOf(Button_1["default"].props({ id: "NXKwbjfHsq", text: "Cancel" }), "NXKwbjfHsq");
                    refCache["NXKwbjfHsq"] = NXKwbjfHsq;
                    return aNAoofIzZa.ask(AbruComponent_1["default"].Commands.AddComponent(NXKwbjfHsq, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var btnOk = _this.context.system.actorOf(Button_1["default"].props({ id: "btnOk", text: "Ok", marginLeft: "20px" }), "btnOk");
                    refCache["btnOk"] = btnOk;
                    _this.internals["btnOk"] = btnOk;
                    return aNAoofIzZa.ask(AbruComponent_1["default"].Commands.AddComponent(btnOk, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["btnOk"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var DCDFbQbXle = _this.context.system.actorOf(Label_1["default"].props({ id: "DCDFbQbXle", text: "User" }), "DCDFbQbXle");
            refCache["DCDFbQbXle"] = DCDFbQbXle;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(DCDFbQbXle, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ArWgHkUrKs = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ArWgHkUrKs", text: _this.userName, marginTop: "10px" }), "ArWgHkUrKs");
            refCache["ArWgHkUrKs"] = ArWgHkUrKs;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ArWgHkUrKs, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ZVmFhmVKQa = _this.context.system.actorOf(Label_1["default"].props({ id: "ZVmFhmVKQa", text: "Password", marginTop: "30px" }), "ZVmFhmVKQa");
            refCache["ZVmFhmVKQa"] = ZVmFhmVKQa;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZVmFhmVKQa, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var trTKzaWYbr = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "trTKzaWYbr", text: "*******", marginTop: "10px" }), "trTKzaWYbr");
            refCache["trTKzaWYbr"] = trTKzaWYbr;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(trTKzaWYbr, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var mpcIQsmVuY = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "mpcIQsmVuY", marginTop: "20px" }), "mpcIQsmVuY");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(mpcIQsmVuY, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["mpcIQsmVuY"] = mpcIQsmVuY;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var CPRsByYWiD = _this.context.system.actorOf(Button_1["default"].props({ id: "CPRsByYWiD", text: "Cancel" }), "CPRsByYWiD");
                    refCache["CPRsByYWiD"] = CPRsByYWiD;
                    return mpcIQsmVuY.ask(AbruComponent_1["default"].Commands.AddComponent(CPRsByYWiD, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var wRVJRgBful = _this.context.system.actorOf(Button_1["default"].props({ id: "wRVJRgBful", text: "Ok", marginLeft: "20px" }), "wRVJRgBful");
                    refCache["wRVJRgBful"] = wRVJRgBful;
                    return mpcIQsmVuY.ask(AbruComponent_1["default"].Commands.AddComponent(wRVJRgBful, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["wRVJRgBful"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var KSaLIBFmXY = _this.context.system.actorOf(Label_1["default"].props({ id: "KSaLIBFmXY", text: "User" }), "KSaLIBFmXY");
            refCache["KSaLIBFmXY"] = KSaLIBFmXY;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KSaLIBFmXY, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var WQVNORPOGS = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "WQVNORPOGS", text: _this.userName, marginTop: "10px" }), "WQVNORPOGS");
            refCache["WQVNORPOGS"] = WQVNORPOGS;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WQVNORPOGS, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var nLFOYVCovq = _this.context.system.actorOf(Label_1["default"].props({ id: "nLFOYVCovq", text: "Password", marginTop: "30px" }), "nLFOYVCovq");
            refCache["nLFOYVCovq"] = nLFOYVCovq;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(nLFOYVCovq, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var YWwATbVGRf = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "YWwATbVGRf", text: "*******", marginTop: "10px" }), "YWwATbVGRf");
            refCache["YWwATbVGRf"] = YWwATbVGRf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(YWwATbVGRf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var uYBwnAMSFw = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "uYBwnAMSFw", marginTop: "20px" }), "uYBwnAMSFw");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(uYBwnAMSFw, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["uYBwnAMSFw"] = uYBwnAMSFw;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var LdvvRpGNTQ = _this.context.system.actorOf(Button_1["default"].props({ id: "LdvvRpGNTQ", text: "Cancel" }), "LdvvRpGNTQ");
                    refCache["LdvvRpGNTQ"] = LdvvRpGNTQ;
                    return uYBwnAMSFw.ask(AbruComponent_1["default"].Commands.AddComponent(LdvvRpGNTQ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var tUVmYKVazO = _this.context.system.actorOf(Button_1["default"].props({ id: "tUVmYKVazO", text: "Ok", marginLeft: "20px" }), "tUVmYKVazO");
                    refCache["tUVmYKVazO"] = tUVmYKVazO;
                    return uYBwnAMSFw.ask(AbruComponent_1["default"].Commands.AddComponent(tUVmYKVazO, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["tUVmYKVazO"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var righrEAeaV = _this.context.system.actorOf(Label_1["default"].props({ id: "righrEAeaV", text: "User" }), "righrEAeaV");
            refCache["righrEAeaV"] = righrEAeaV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(righrEAeaV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var SDHVCHSnqW = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "SDHVCHSnqW", text: _this.userName, marginTop: "10px" }), "SDHVCHSnqW");
            refCache["SDHVCHSnqW"] = SDHVCHSnqW;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(SDHVCHSnqW, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var qVOwnOFfhV = _this.context.system.actorOf(Label_1["default"].props({ id: "qVOwnOFfhV", text: "Password", marginTop: "30px" }), "qVOwnOFfhV");
            refCache["qVOwnOFfhV"] = qVOwnOFfhV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qVOwnOFfhV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var jakPlhjbAm = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "jakPlhjbAm", text: "*******", marginTop: "10px" }), "jakPlhjbAm");
            refCache["jakPlhjbAm"] = jakPlhjbAm;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jakPlhjbAm, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VKWqCxCPWd = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "VKWqCxCPWd", marginTop: "20px" }), "VKWqCxCPWd");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VKWqCxCPWd, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["VKWqCxCPWd"] = VKWqCxCPWd;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var epgLmmFlpS = _this.context.system.actorOf(Button_1["default"].props({ id: "epgLmmFlpS", text: "Cancel" }), "epgLmmFlpS");
                    refCache["epgLmmFlpS"] = epgLmmFlpS;
                    return VKWqCxCPWd.ask(AbruComponent_1["default"].Commands.AddComponent(epgLmmFlpS, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var JypYaCWMBo = _this.context.system.actorOf(Button_1["default"].props({ id: "JypYaCWMBo", text: "Ok", marginLeft: "20px" }), "JypYaCWMBo");
                    refCache["JypYaCWMBo"] = JypYaCWMBo;
                    return VKWqCxCPWd.ask(AbruComponent_1["default"].Commands.AddComponent(JypYaCWMBo, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["JypYaCWMBo"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var vCBlPThUUs = _this.context.system.actorOf(Label_1["default"].props({ id: "vCBlPThUUs", text: "User" }), "vCBlPThUUs");
            refCache["vCBlPThUUs"] = vCBlPThUUs;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(vCBlPThUUs, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ymJPtqXvKl = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ymJPtqXvKl", text: _this.userName, marginTop: "10px" }), "ymJPtqXvKl");
            refCache["ymJPtqXvKl"] = ymJPtqXvKl;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ymJPtqXvKl, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ZdeyGaObXy = _this.context.system.actorOf(Label_1["default"].props({ id: "ZdeyGaObXy", text: "Password", marginTop: "30px" }), "ZdeyGaObXy");
            refCache["ZdeyGaObXy"] = ZdeyGaObXy;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZdeyGaObXy, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var mwVtWyDVnf = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "mwVtWyDVnf", text: "*******", marginTop: "10px" }), "mwVtWyDVnf");
            refCache["mwVtWyDVnf"] = mwVtWyDVnf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(mwVtWyDVnf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var PonLxWtOsM = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "PonLxWtOsM", marginTop: "20px" }), "PonLxWtOsM");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PonLxWtOsM, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["PonLxWtOsM"] = PonLxWtOsM;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var RKajMrhIPL = _this.context.system.actorOf(Button_1["default"].props({ id: "RKajMrhIPL", text: "Cancel" }), "RKajMrhIPL");
                    refCache["RKajMrhIPL"] = RKajMrhIPL;
                    return PonLxWtOsM.ask(AbruComponent_1["default"].Commands.AddComponent(RKajMrhIPL, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var JACFwTXTlz = _this.context.system.actorOf(Button_1["default"].props({ id: "JACFwTXTlz", text: "Ok", marginLeft: "20px" }), "JACFwTXTlz");
                    refCache["JACFwTXTlz"] = JACFwTXTlz;
                    return PonLxWtOsM.ask(AbruComponent_1["default"].Commands.AddComponent(JACFwTXTlz, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["JACFwTXTlz"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var boXrhyImVO = _this.context.system.actorOf(Label_1["default"].props({ id: "boXrhyImVO", text: "User" }), "boXrhyImVO");
            refCache["boXrhyImVO"] = boXrhyImVO;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(boXrhyImVO, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QmfHZlxRiP = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "QmfHZlxRiP", text: _this.userName, marginTop: "10px" }), "QmfHZlxRiP");
            refCache["QmfHZlxRiP"] = QmfHZlxRiP;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QmfHZlxRiP, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var EaTlvBGtrz = _this.context.system.actorOf(Label_1["default"].props({ id: "EaTlvBGtrz", text: "Password", marginTop: "30px" }), "EaTlvBGtrz");
            refCache["EaTlvBGtrz"] = EaTlvBGtrz;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(EaTlvBGtrz, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VKVFDycHIs = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "VKVFDycHIs", text: "*******", marginTop: "10px" }), "VKVFDycHIs");
            refCache["VKVFDycHIs"] = VKVFDycHIs;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VKVFDycHIs, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var tIxxdnFadw = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "tIxxdnFadw", marginTop: "20px" }), "tIxxdnFadw");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(tIxxdnFadw, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["tIxxdnFadw"] = tIxxdnFadw;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var GLoJnApygy = _this.context.system.actorOf(Button_1["default"].props({ id: "GLoJnApygy", text: "Cancel" }), "GLoJnApygy");
                    refCache["GLoJnApygy"] = GLoJnApygy;
                    return tIxxdnFadw.ask(AbruComponent_1["default"].Commands.AddComponent(GLoJnApygy, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var FEPAGmBFSA = _this.context.system.actorOf(Button_1["default"].props({ id: "FEPAGmBFSA", text: "Ok", marginLeft: "20px" }), "FEPAGmBFSA");
                    refCache["FEPAGmBFSA"] = FEPAGmBFSA;
                    return tIxxdnFadw.ask(AbruComponent_1["default"].Commands.AddComponent(FEPAGmBFSA, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["FEPAGmBFSA"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var HjWYSAZdTP = _this.context.system.actorOf(Label_1["default"].props({ id: "HjWYSAZdTP", text: "User" }), "HjWYSAZdTP");
            refCache["HjWYSAZdTP"] = HjWYSAZdTP;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HjWYSAZdTP, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var AWDaHRrJWo = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "AWDaHRrJWo", text: _this.userName, marginTop: "10px" }), "AWDaHRrJWo");
            refCache["AWDaHRrJWo"] = AWDaHRrJWo;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(AWDaHRrJWo, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VBOSIGXSjs = _this.context.system.actorOf(Label_1["default"].props({ id: "VBOSIGXSjs", text: "Password", marginTop: "30px" }), "VBOSIGXSjs");
            refCache["VBOSIGXSjs"] = VBOSIGXSjs;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VBOSIGXSjs, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kQqGDIrAld = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "kQqGDIrAld", text: "*******", marginTop: "10px" }), "kQqGDIrAld");
            refCache["kQqGDIrAld"] = kQqGDIrAld;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kQqGDIrAld, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var vrCUZRUtvd = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "vrCUZRUtvd", marginTop: "20px" }), "vrCUZRUtvd");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(vrCUZRUtvd, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["vrCUZRUtvd"] = vrCUZRUtvd;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var RiFEDrEGeq = _this.context.system.actorOf(Button_1["default"].props({ id: "RiFEDrEGeq", text: "Cancel" }), "RiFEDrEGeq");
                    refCache["RiFEDrEGeq"] = RiFEDrEGeq;
                    return vrCUZRUtvd.ask(AbruComponent_1["default"].Commands.AddComponent(RiFEDrEGeq, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var BruPYNWuqY = _this.context.system.actorOf(Button_1["default"].props({ id: "BruPYNWuqY", text: "Ok", marginLeft: "20px" }), "BruPYNWuqY");
                    refCache["BruPYNWuqY"] = BruPYNWuqY;
                    return vrCUZRUtvd.ask(AbruComponent_1["default"].Commands.AddComponent(BruPYNWuqY, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["BruPYNWuqY"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var VNclNNkEOO = _this.context.system.actorOf(Label_1["default"].props({ id: "VNclNNkEOO", text: "User" }), "VNclNNkEOO");
            refCache["VNclNNkEOO"] = VNclNNkEOO;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VNclNNkEOO, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var DjtTsObUly = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "DjtTsObUly", text: _this.userName, marginTop: "10px" }), "DjtTsObUly");
            refCache["DjtTsObUly"] = DjtTsObUly;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(DjtTsObUly, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var RYLskDqVlK = _this.context.system.actorOf(Label_1["default"].props({ id: "RYLskDqVlK", text: "Password", marginTop: "30px" }), "RYLskDqVlK");
            refCache["RYLskDqVlK"] = RYLskDqVlK;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(RYLskDqVlK, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var iarOyNpvgR = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "iarOyNpvgR", text: "*******", marginTop: "10px" }), "iarOyNpvgR");
            refCache["iarOyNpvgR"] = iarOyNpvgR;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(iarOyNpvgR, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var bzEbwwrEzP = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "bzEbwwrEzP", marginTop: "20px" }), "bzEbwwrEzP");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(bzEbwwrEzP, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["bzEbwwrEzP"] = bzEbwwrEzP;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var lcAZikISED = _this.context.system.actorOf(Button_1["default"].props({ id: "lcAZikISED", text: "Cancel" }), "lcAZikISED");
                    refCache["lcAZikISED"] = lcAZikISED;
                    return bzEbwwrEzP.ask(AbruComponent_1["default"].Commands.AddComponent(lcAZikISED, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var WJqeYXpqNM = _this.context.system.actorOf(Button_1["default"].props({ id: "WJqeYXpqNM", text: "Ok", marginLeft: "20px" }), "WJqeYXpqNM");
                    refCache["WJqeYXpqNM"] = WJqeYXpqNM;
                    return bzEbwwrEzP.ask(AbruComponent_1["default"].Commands.AddComponent(WJqeYXpqNM, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["WJqeYXpqNM"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var REcDxMcxPj = _this.context.system.actorOf(Label_1["default"].props({ id: "REcDxMcxPj", text: "User" }), "REcDxMcxPj");
            refCache["REcDxMcxPj"] = REcDxMcxPj;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(REcDxMcxPj, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var BfBekYOold = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "BfBekYOold", text: _this.userName, marginTop: "10px" }), "BfBekYOold");
            refCache["BfBekYOold"] = BfBekYOold;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BfBekYOold, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var cNWNXdWrzB = _this.context.system.actorOf(Label_1["default"].props({ id: "cNWNXdWrzB", text: "Password", marginTop: "30px" }), "cNWNXdWrzB");
            refCache["cNWNXdWrzB"] = cNWNXdWrzB;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(cNWNXdWrzB, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var DytGvaJRdp = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "DytGvaJRdp", text: "*******", marginTop: "10px" }), "DytGvaJRdp");
            refCache["DytGvaJRdp"] = DytGvaJRdp;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(DytGvaJRdp, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var yJmOJWoehr = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "yJmOJWoehr", marginTop: "20px" }), "yJmOJWoehr");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(yJmOJWoehr, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["yJmOJWoehr"] = yJmOJWoehr;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var fnJYREytsJ = _this.context.system.actorOf(Button_1["default"].props({ id: "fnJYREytsJ", text: "Cancel" }), "fnJYREytsJ");
                    refCache["fnJYREytsJ"] = fnJYREytsJ;
                    return yJmOJWoehr.ask(AbruComponent_1["default"].Commands.AddComponent(fnJYREytsJ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var ogWJWzZetf = _this.context.system.actorOf(Button_1["default"].props({ id: "ogWJWzZetf", text: "Ok", marginLeft: "20px" }), "ogWJWzZetf");
                    refCache["ogWJWzZetf"] = ogWJWzZetf;
                    return yJmOJWoehr.ask(AbruComponent_1["default"].Commands.AddComponent(ogWJWzZetf, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["ogWJWzZetf"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var LTANdnkMUI = _this.context.system.actorOf(Label_1["default"].props({ id: "LTANdnkMUI", text: "User" }), "LTANdnkMUI");
            refCache["LTANdnkMUI"] = LTANdnkMUI;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LTANdnkMUI, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var vgyNkosWTP = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "vgyNkosWTP", text: _this.userName, marginTop: "10px" }), "vgyNkosWTP");
            refCache["vgyNkosWTP"] = vgyNkosWTP;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(vgyNkosWTP, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var lssXFIITJu = _this.context.system.actorOf(Label_1["default"].props({ id: "lssXFIITJu", text: "Password", marginTop: "30px" }), "lssXFIITJu");
            refCache["lssXFIITJu"] = lssXFIITJu;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(lssXFIITJu, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var hJOapsRXzx = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "hJOapsRXzx", text: "*******", marginTop: "10px" }), "hJOapsRXzx");
            refCache["hJOapsRXzx"] = hJOapsRXzx;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(hJOapsRXzx, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var zwmXSFkWsE = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "zwmXSFkWsE", marginTop: "20px" }), "zwmXSFkWsE");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(zwmXSFkWsE, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["zwmXSFkWsE"] = zwmXSFkWsE;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var iypTjlcDyI = _this.context.system.actorOf(Button_1["default"].props({ id: "iypTjlcDyI", text: "Cancel" }), "iypTjlcDyI");
                    refCache["iypTjlcDyI"] = iypTjlcDyI;
                    return zwmXSFkWsE.ask(AbruComponent_1["default"].Commands.AddComponent(iypTjlcDyI, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var LgxERjPdFN = _this.context.system.actorOf(Button_1["default"].props({ id: "LgxERjPdFN", text: "Ok", marginLeft: "20px" }), "LgxERjPdFN");
                    refCache["LgxERjPdFN"] = LgxERjPdFN;
                    return zwmXSFkWsE.ask(AbruComponent_1["default"].Commands.AddComponent(LgxERjPdFN, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["LgxERjPdFN"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var StsiaNxPkI = _this.context.system.actorOf(Label_1["default"].props({ id: "StsiaNxPkI", text: "User" }), "StsiaNxPkI");
            refCache["StsiaNxPkI"] = StsiaNxPkI;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(StsiaNxPkI, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var dQKHxgnrDG = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "dQKHxgnrDG", text: _this.userName, marginTop: "10px" }), "dQKHxgnrDG");
            refCache["dQKHxgnrDG"] = dQKHxgnrDG;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(dQKHxgnrDG, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var FXeydoEnKw = _this.context.system.actorOf(Label_1["default"].props({ id: "FXeydoEnKw", text: "Password", marginTop: "30px" }), "FXeydoEnKw");
            refCache["FXeydoEnKw"] = FXeydoEnKw;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(FXeydoEnKw, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var McVHQJCqXz = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "McVHQJCqXz", text: "*******", marginTop: "10px" }), "McVHQJCqXz");
            refCache["McVHQJCqXz"] = McVHQJCqXz;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(McVHQJCqXz, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var boRUEwgbpx = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "boRUEwgbpx", marginTop: "20px" }), "boRUEwgbpx");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(boRUEwgbpx, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["boRUEwgbpx"] = boRUEwgbpx;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var vSkMpuTpHW = _this.context.system.actorOf(Button_1["default"].props({ id: "vSkMpuTpHW", text: "Cancel" }), "vSkMpuTpHW");
                    refCache["vSkMpuTpHW"] = vSkMpuTpHW;
                    return boRUEwgbpx.ask(AbruComponent_1["default"].Commands.AddComponent(vSkMpuTpHW, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var vIRKaePcNe = _this.context.system.actorOf(Button_1["default"].props({ id: "vIRKaePcNe", text: "Ok", marginLeft: "20px" }), "vIRKaePcNe");
                    refCache["vIRKaePcNe"] = vIRKaePcNe;
                    return boRUEwgbpx.ask(AbruComponent_1["default"].Commands.AddComponent(vIRKaePcNe, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["vIRKaePcNe"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var eFlSabxQhh = _this.context.system.actorOf(Label_1["default"].props({ id: "eFlSabxQhh", text: "User" }), "eFlSabxQhh");
            refCache["eFlSabxQhh"] = eFlSabxQhh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(eFlSabxQhh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var LDGfGvSTfh = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "LDGfGvSTfh", text: _this.userName, marginTop: "10px" }), "LDGfGvSTfh");
            refCache["LDGfGvSTfh"] = LDGfGvSTfh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LDGfGvSTfh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gqkBYLTCDB = _this.context.system.actorOf(Label_1["default"].props({ id: "gqkBYLTCDB", text: "Password", marginTop: "30px" }), "gqkBYLTCDB");
            refCache["gqkBYLTCDB"] = gqkBYLTCDB;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gqkBYLTCDB, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rZtKqcSHZD = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "rZtKqcSHZD", text: "*******", marginTop: "10px" }), "rZtKqcSHZD");
            refCache["rZtKqcSHZD"] = rZtKqcSHZD;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rZtKqcSHZD, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var vahieCawqH = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "vahieCawqH", marginTop: "20px" }), "vahieCawqH");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(vahieCawqH, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["vahieCawqH"] = vahieCawqH;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var CDCBzZyFmQ = _this.context.system.actorOf(Button_1["default"].props({ id: "CDCBzZyFmQ", text: "Cancel" }), "CDCBzZyFmQ");
                    refCache["CDCBzZyFmQ"] = CDCBzZyFmQ;
                    return vahieCawqH.ask(AbruComponent_1["default"].Commands.AddComponent(CDCBzZyFmQ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var tpvxlHDese = _this.context.system.actorOf(Button_1["default"].props({ id: "tpvxlHDese", text: "Ok", marginLeft: "20px" }), "tpvxlHDese");
                    refCache["tpvxlHDese"] = tpvxlHDese;
                    return vahieCawqH.ask(AbruComponent_1["default"].Commands.AddComponent(tpvxlHDese, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["tpvxlHDese"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var AUBOcYYGip = _this.context.system.actorOf(Label_1["default"].props({ id: "AUBOcYYGip", text: "User" }), "AUBOcYYGip");
            refCache["AUBOcYYGip"] = AUBOcYYGip;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(AUBOcYYGip, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var LchJsMHurf = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "LchJsMHurf", text: _this.userName, marginTop: "10px" }), "LchJsMHurf");
            refCache["LchJsMHurf"] = LchJsMHurf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LchJsMHurf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rVLUDRfFVj = _this.context.system.actorOf(Label_1["default"].props({ id: "rVLUDRfFVj", text: "Password", marginTop: "30px" }), "rVLUDRfFVj");
            refCache["rVLUDRfFVj"] = rVLUDRfFVj;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rVLUDRfFVj, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var tjShksMdwb = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "tjShksMdwb", text: "*******", marginTop: "10px" }), "tjShksMdwb");
            refCache["tjShksMdwb"] = tjShksMdwb;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(tjShksMdwb, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var dTYVWVAaud = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "dTYVWVAaud", marginTop: "20px" }), "dTYVWVAaud");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(dTYVWVAaud, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["dTYVWVAaud"] = dTYVWVAaud;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var XQERvoQjqt = _this.context.system.actorOf(Button_1["default"].props({ id: "XQERvoQjqt", text: "Cancel" }), "XQERvoQjqt");
                    refCache["XQERvoQjqt"] = XQERvoQjqt;
                    return dTYVWVAaud.ask(AbruComponent_1["default"].Commands.AddComponent(XQERvoQjqt, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var xHxyXKTBep = _this.context.system.actorOf(Button_1["default"].props({ id: "xHxyXKTBep", text: "Ok", marginLeft: "20px" }), "xHxyXKTBep");
                    refCache["xHxyXKTBep"] = xHxyXKTBep;
                    return dTYVWVAaud.ask(AbruComponent_1["default"].Commands.AddComponent(xHxyXKTBep, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["xHxyXKTBep"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var WyDHBbbslt = _this.context.system.actorOf(Label_1["default"].props({ id: "WyDHBbbslt", text: "User" }), "WyDHBbbslt");
            refCache["WyDHBbbslt"] = WyDHBbbslt;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WyDHBbbslt, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VCcFHgfPAD = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "VCcFHgfPAD", text: _this.userName, marginTop: "10px" }), "VCcFHgfPAD");
            refCache["VCcFHgfPAD"] = VCcFHgfPAD;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VCcFHgfPAD, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var FYGVxQYscF = _this.context.system.actorOf(Label_1["default"].props({ id: "FYGVxQYscF", text: "Password", marginTop: "30px" }), "FYGVxQYscF");
            refCache["FYGVxQYscF"] = FYGVxQYscF;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(FYGVxQYscF, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var pcehCtVVFl = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "pcehCtVVFl", text: "*******", marginTop: "10px" }), "pcehCtVVFl");
            refCache["pcehCtVVFl"] = pcehCtVVFl;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(pcehCtVVFl, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ROlhnpfzSp = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "ROlhnpfzSp", marginTop: "20px" }), "ROlhnpfzSp");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ROlhnpfzSp, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["ROlhnpfzSp"] = ROlhnpfzSp;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var uCxeRAdIod = _this.context.system.actorOf(Button_1["default"].props({ id: "uCxeRAdIod", text: "Cancel" }), "uCxeRAdIod");
                    refCache["uCxeRAdIod"] = uCxeRAdIod;
                    return ROlhnpfzSp.ask(AbruComponent_1["default"].Commands.AddComponent(uCxeRAdIod, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var gQxtxOUmCx = _this.context.system.actorOf(Button_1["default"].props({ id: "gQxtxOUmCx", text: "Ok", marginLeft: "20px" }), "gQxtxOUmCx");
                    refCache["gQxtxOUmCx"] = gQxtxOUmCx;
                    return ROlhnpfzSp.ask(AbruComponent_1["default"].Commands.AddComponent(gQxtxOUmCx, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["gQxtxOUmCx"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var yAPXvifTQS = _this.context.system.actorOf(Label_1["default"].props({ id: "yAPXvifTQS", text: "User" }), "yAPXvifTQS");
            refCache["yAPXvifTQS"] = yAPXvifTQS;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(yAPXvifTQS, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var YcIVZtPvmR = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "YcIVZtPvmR", text: _this.userName, marginTop: "10px" }), "YcIVZtPvmR");
            refCache["YcIVZtPvmR"] = YcIVZtPvmR;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(YcIVZtPvmR, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var SAdelGSFNO = _this.context.system.actorOf(Label_1["default"].props({ id: "SAdelGSFNO", text: "Password", marginTop: "30px" }), "SAdelGSFNO");
            refCache["SAdelGSFNO"] = SAdelGSFNO;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(SAdelGSFNO, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var HfbbpbcUpZ = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "HfbbpbcUpZ", text: "*******", marginTop: "10px" }), "HfbbpbcUpZ");
            refCache["HfbbpbcUpZ"] = HfbbpbcUpZ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HfbbpbcUpZ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var WiFtNbOgvZ = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "WiFtNbOgvZ", marginTop: "20px" }), "WiFtNbOgvZ");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WiFtNbOgvZ, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["WiFtNbOgvZ"] = WiFtNbOgvZ;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var MfjWSDVCFL = _this.context.system.actorOf(Button_1["default"].props({ id: "MfjWSDVCFL", text: "Cancel" }), "MfjWSDVCFL");
                    refCache["MfjWSDVCFL"] = MfjWSDVCFL;
                    return WiFtNbOgvZ.ask(AbruComponent_1["default"].Commands.AddComponent(MfjWSDVCFL, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var fbCqIRqNGb = _this.context.system.actorOf(Button_1["default"].props({ id: "fbCqIRqNGb", text: "Ok", marginLeft: "20px" }), "fbCqIRqNGb");
                    refCache["fbCqIRqNGb"] = fbCqIRqNGb;
                    return WiFtNbOgvZ.ask(AbruComponent_1["default"].Commands.AddComponent(fbCqIRqNGb, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["fbCqIRqNGb"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var BQnyxwffFX = _this.context.system.actorOf(Label_1["default"].props({ id: "BQnyxwffFX", text: "User" }), "BQnyxwffFX");
            refCache["BQnyxwffFX"] = BQnyxwffFX;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BQnyxwffFX, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var PEQQDxwOIf = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "PEQQDxwOIf", text: _this.userName, marginTop: "10px" }), "PEQQDxwOIf");
            refCache["PEQQDxwOIf"] = PEQQDxwOIf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PEQQDxwOIf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ILLYgmbGsr = _this.context.system.actorOf(Label_1["default"].props({ id: "ILLYgmbGsr", text: "Password", marginTop: "30px" }), "ILLYgmbGsr");
            refCache["ILLYgmbGsr"] = ILLYgmbGsr;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ILLYgmbGsr, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VmpeSXguDO = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "VmpeSXguDO", text: "*******", marginTop: "10px" }), "VmpeSXguDO");
            refCache["VmpeSXguDO"] = VmpeSXguDO;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VmpeSXguDO, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var LRrGVriujT = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "LRrGVriujT", marginTop: "20px" }), "LRrGVriujT");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LRrGVriujT, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["LRrGVriujT"] = LRrGVriujT;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var GKfUYhsjJH = _this.context.system.actorOf(Button_1["default"].props({ id: "GKfUYhsjJH", text: "Cancel" }), "GKfUYhsjJH");
                    refCache["GKfUYhsjJH"] = GKfUYhsjJH;
                    return LRrGVriujT.ask(AbruComponent_1["default"].Commands.AddComponent(GKfUYhsjJH, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var kjDLEJaQJX = _this.context.system.actorOf(Button_1["default"].props({ id: "kjDLEJaQJX", text: "Ok", marginLeft: "20px" }), "kjDLEJaQJX");
                    refCache["kjDLEJaQJX"] = kjDLEJaQJX;
                    return LRrGVriujT.ask(AbruComponent_1["default"].Commands.AddComponent(kjDLEJaQJX, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["kjDLEJaQJX"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var ILWjdVthDZ = _this.context.system.actorOf(Label_1["default"].props({ id: "ILWjdVthDZ", text: "User" }), "ILWjdVthDZ");
            refCache["ILWjdVthDZ"] = ILWjdVthDZ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ILWjdVthDZ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var dwyoVlxsAu = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "dwyoVlxsAu", text: _this.userName, marginTop: "10px" }), "dwyoVlxsAu");
            refCache["dwyoVlxsAu"] = dwyoVlxsAu;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(dwyoVlxsAu, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var prvAbkIntp = _this.context.system.actorOf(Label_1["default"].props({ id: "prvAbkIntp", text: "Password", marginTop: "30px" }), "prvAbkIntp");
            refCache["prvAbkIntp"] = prvAbkIntp;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(prvAbkIntp, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var BJdPReoAzs = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "BJdPReoAzs", text: "*******", marginTop: "10px" }), "BJdPReoAzs");
            refCache["BJdPReoAzs"] = BJdPReoAzs;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BJdPReoAzs, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ltgrHaEPTn = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "ltgrHaEPTn", marginTop: "20px" }), "ltgrHaEPTn");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ltgrHaEPTn, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["ltgrHaEPTn"] = ltgrHaEPTn;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var DBAgjQADHW = _this.context.system.actorOf(Button_1["default"].props({ id: "DBAgjQADHW", text: "Cancel" }), "DBAgjQADHW");
                    refCache["DBAgjQADHW"] = DBAgjQADHW;
                    return ltgrHaEPTn.ask(AbruComponent_1["default"].Commands.AddComponent(DBAgjQADHW, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var eFJbiuuUks = _this.context.system.actorOf(Button_1["default"].props({ id: "eFJbiuuUks", text: "Ok", marginLeft: "20px" }), "eFJbiuuUks");
                    refCache["eFJbiuuUks"] = eFJbiuuUks;
                    return ltgrHaEPTn.ask(AbruComponent_1["default"].Commands.AddComponent(eFJbiuuUks, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["eFJbiuuUks"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var wBgFHRYMUt = _this.context.system.actorOf(Label_1["default"].props({ id: "wBgFHRYMUt", text: "User" }), "wBgFHRYMUt");
            refCache["wBgFHRYMUt"] = wBgFHRYMUt;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wBgFHRYMUt, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var tMIiMkBpIC = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "tMIiMkBpIC", text: _this.userName, marginTop: "10px" }), "tMIiMkBpIC");
            refCache["tMIiMkBpIC"] = tMIiMkBpIC;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(tMIiMkBpIC, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var wXTrTwxTPd = _this.context.system.actorOf(Label_1["default"].props({ id: "wXTrTwxTPd", text: "Password", marginTop: "30px" }), "wXTrTwxTPd");
            refCache["wXTrTwxTPd"] = wXTrTwxTPd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wXTrTwxTPd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var EXXBvMzeZZ = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "EXXBvMzeZZ", text: "*******", marginTop: "10px" }), "EXXBvMzeZZ");
            refCache["EXXBvMzeZZ"] = EXXBvMzeZZ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(EXXBvMzeZZ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var fEsYIOVzpb = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "fEsYIOVzpb", marginTop: "20px" }), "fEsYIOVzpb");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(fEsYIOVzpb, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["fEsYIOVzpb"] = fEsYIOVzpb;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var cxoGONVzzw = _this.context.system.actorOf(Button_1["default"].props({ id: "cxoGONVzzw", text: "Cancel" }), "cxoGONVzzw");
                    refCache["cxoGONVzzw"] = cxoGONVzzw;
                    return fEsYIOVzpb.ask(AbruComponent_1["default"].Commands.AddComponent(cxoGONVzzw, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var zgooNXCbXr = _this.context.system.actorOf(Button_1["default"].props({ id: "zgooNXCbXr", text: "Ok", marginLeft: "20px" }), "zgooNXCbXr");
                    refCache["zgooNXCbXr"] = zgooNXCbXr;
                    return fEsYIOVzpb.ask(AbruComponent_1["default"].Commands.AddComponent(zgooNXCbXr, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["zgooNXCbXr"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var ViGAZKSEpw = _this.context.system.actorOf(Label_1["default"].props({ id: "ViGAZKSEpw", text: "User" }), "ViGAZKSEpw");
            refCache["ViGAZKSEpw"] = ViGAZKSEpw;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ViGAZKSEpw, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var yKGWmPtdIb = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "yKGWmPtdIb", text: _this.userName, marginTop: "10px" }), "yKGWmPtdIb");
            refCache["yKGWmPtdIb"] = yKGWmPtdIb;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(yKGWmPtdIb, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var fBCRRmMnYq = _this.context.system.actorOf(Label_1["default"].props({ id: "fBCRRmMnYq", text: "Password", marginTop: "30px" }), "fBCRRmMnYq");
            refCache["fBCRRmMnYq"] = fBCRRmMnYq;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(fBCRRmMnYq, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KbRDoBCOal = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "KbRDoBCOal", text: "*******", marginTop: "10px" }), "KbRDoBCOal");
            refCache["KbRDoBCOal"] = KbRDoBCOal;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KbRDoBCOal, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var PvvlZtqDRh = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "PvvlZtqDRh", marginTop: "20px" }), "PvvlZtqDRh");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PvvlZtqDRh, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["PvvlZtqDRh"] = PvvlZtqDRh;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var bTTVVyOCaS = _this.context.system.actorOf(Button_1["default"].props({ id: "bTTVVyOCaS", text: "Cancel" }), "bTTVVyOCaS");
                    refCache["bTTVVyOCaS"] = bTTVVyOCaS;
                    return PvvlZtqDRh.ask(AbruComponent_1["default"].Commands.AddComponent(bTTVVyOCaS, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var UEVoHmgrTq = _this.context.system.actorOf(Button_1["default"].props({ id: "UEVoHmgrTq", text: "Ok", marginLeft: "20px" }), "UEVoHmgrTq");
                    refCache["UEVoHmgrTq"] = UEVoHmgrTq;
                    return PvvlZtqDRh.ask(AbruComponent_1["default"].Commands.AddComponent(UEVoHmgrTq, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["UEVoHmgrTq"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var CDvMoejDqE = _this.context.system.actorOf(Label_1["default"].props({ id: "CDvMoejDqE", text: "User" }), "CDvMoejDqE");
            refCache["CDvMoejDqE"] = CDvMoejDqE;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(CDvMoejDqE, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var wjdYWYpmvr = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "wjdYWYpmvr", text: _this.userName, marginTop: "10px" }), "wjdYWYpmvr");
            refCache["wjdYWYpmvr"] = wjdYWYpmvr;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wjdYWYpmvr, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var mkwEwKxbUF = _this.context.system.actorOf(Label_1["default"].props({ id: "mkwEwKxbUF", text: "Password", marginTop: "30px" }), "mkwEwKxbUF");
            refCache["mkwEwKxbUF"] = mkwEwKxbUF;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(mkwEwKxbUF, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ofkxqFoxek = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ofkxqFoxek", text: "*******", marginTop: "10px" }), "ofkxqFoxek");
            refCache["ofkxqFoxek"] = ofkxqFoxek;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ofkxqFoxek, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VUPZSGoEaV = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "VUPZSGoEaV", marginTop: "20px" }), "VUPZSGoEaV");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VUPZSGoEaV, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["VUPZSGoEaV"] = VUPZSGoEaV;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var ofdXRGnpsW = _this.context.system.actorOf(Button_1["default"].props({ id: "ofdXRGnpsW", text: "Cancel" }), "ofdXRGnpsW");
                    refCache["ofdXRGnpsW"] = ofdXRGnpsW;
                    return VUPZSGoEaV.ask(AbruComponent_1["default"].Commands.AddComponent(ofdXRGnpsW, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var MiUmmVQrgF = _this.context.system.actorOf(Button_1["default"].props({ id: "MiUmmVQrgF", text: "Ok", marginLeft: "20px" }), "MiUmmVQrgF");
                    refCache["MiUmmVQrgF"] = MiUmmVQrgF;
                    return VUPZSGoEaV.ask(AbruComponent_1["default"].Commands.AddComponent(MiUmmVQrgF, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["MiUmmVQrgF"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var nKnknixnEh = _this.context.system.actorOf(Label_1["default"].props({ id: "nKnknixnEh", text: "User" }), "nKnknixnEh");
            refCache["nKnknixnEh"] = nKnknixnEh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(nKnknixnEh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var HKCcAjFAuf = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "HKCcAjFAuf", text: _this.userName, marginTop: "10px" }), "HKCcAjFAuf");
            refCache["HKCcAjFAuf"] = HKCcAjFAuf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HKCcAjFAuf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var BkHbKQVbVM = _this.context.system.actorOf(Label_1["default"].props({ id: "BkHbKQVbVM", text: "Password", marginTop: "30px" }), "BkHbKQVbVM");
            refCache["BkHbKQVbVM"] = BkHbKQVbVM;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BkHbKQVbVM, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var cfwwaXzBGo = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "cfwwaXzBGo", text: "*******", marginTop: "10px" }), "cfwwaXzBGo");
            refCache["cfwwaXzBGo"] = cfwwaXzBGo;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(cfwwaXzBGo, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var wnXSKfGvew = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "wnXSKfGvew", marginTop: "20px" }), "wnXSKfGvew");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wnXSKfGvew, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["wnXSKfGvew"] = wnXSKfGvew;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var JkjcJfBbky = _this.context.system.actorOf(Button_1["default"].props({ id: "JkjcJfBbky", text: "Cancel" }), "JkjcJfBbky");
                    refCache["JkjcJfBbky"] = JkjcJfBbky;
                    return wnXSKfGvew.ask(AbruComponent_1["default"].Commands.AddComponent(JkjcJfBbky, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var uVHLDBzzcb = _this.context.system.actorOf(Button_1["default"].props({ id: "uVHLDBzzcb", text: "Ok", marginLeft: "20px" }), "uVHLDBzzcb");
                    refCache["uVHLDBzzcb"] = uVHLDBzzcb;
                    return wnXSKfGvew.ask(AbruComponent_1["default"].Commands.AddComponent(uVHLDBzzcb, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["uVHLDBzzcb"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var cyvMmzncxW = _this.context.system.actorOf(Label_1["default"].props({ id: "cyvMmzncxW", text: "User" }), "cyvMmzncxW");
            refCache["cyvMmzncxW"] = cyvMmzncxW;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(cyvMmzncxW, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var EJKyCfjUWr = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "EJKyCfjUWr", text: _this.userName, marginTop: "10px" }), "EJKyCfjUWr");
            refCache["EJKyCfjUWr"] = EJKyCfjUWr;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(EJKyCfjUWr, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rZYGEPZmcC = _this.context.system.actorOf(Label_1["default"].props({ id: "rZYGEPZmcC", text: "Password", marginTop: "30px" }), "rZYGEPZmcC");
            refCache["rZYGEPZmcC"] = rZYGEPZmcC;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rZYGEPZmcC, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KGmdEwwxZF = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "KGmdEwwxZF", text: "*******", marginTop: "10px" }), "KGmdEwwxZF");
            refCache["KGmdEwwxZF"] = KGmdEwwxZF;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KGmdEwwxZF, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var CVxVmCzSec = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "CVxVmCzSec", marginTop: "20px" }), "CVxVmCzSec");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(CVxVmCzSec, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["CVxVmCzSec"] = CVxVmCzSec;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var qiNMitGMgr = _this.context.system.actorOf(Button_1["default"].props({ id: "qiNMitGMgr", text: "Cancel" }), "qiNMitGMgr");
                    refCache["qiNMitGMgr"] = qiNMitGMgr;
                    return CVxVmCzSec.ask(AbruComponent_1["default"].Commands.AddComponent(qiNMitGMgr, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var FEvvbXKDKC = _this.context.system.actorOf(Button_1["default"].props({ id: "FEvvbXKDKC", text: "Ok", marginLeft: "20px" }), "FEvvbXKDKC");
                    refCache["FEvvbXKDKC"] = FEvvbXKDKC;
                    return CVxVmCzSec.ask(AbruComponent_1["default"].Commands.AddComponent(FEvvbXKDKC, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["FEvvbXKDKC"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var QmYvgoAzMH = _this.context.system.actorOf(Label_1["default"].props({ id: "QmYvgoAzMH", text: "User" }), "QmYvgoAzMH");
            refCache["QmYvgoAzMH"] = QmYvgoAzMH;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QmYvgoAzMH, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var pIGoCcmluU = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "pIGoCcmluU", text: _this.userName, marginTop: "10px" }), "pIGoCcmluU");
            refCache["pIGoCcmluU"] = pIGoCcmluU;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(pIGoCcmluU, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QYXRYykkqP = _this.context.system.actorOf(Label_1["default"].props({ id: "QYXRYykkqP", text: "Password", marginTop: "30px" }), "QYXRYykkqP");
            refCache["QYXRYykkqP"] = QYXRYykkqP;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QYXRYykkqP, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var tsmGKBhcrR = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "tsmGKBhcrR", text: "*******", marginTop: "10px" }), "tsmGKBhcrR");
            refCache["tsmGKBhcrR"] = tsmGKBhcrR;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(tsmGKBhcrR, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ePZTgbVjZw = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "ePZTgbVjZw", marginTop: "20px" }), "ePZTgbVjZw");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ePZTgbVjZw, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["ePZTgbVjZw"] = ePZTgbVjZw;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var iqtohesVej = _this.context.system.actorOf(Button_1["default"].props({ id: "iqtohesVej", text: "Cancel" }), "iqtohesVej");
                    refCache["iqtohesVej"] = iqtohesVej;
                    return ePZTgbVjZw.ask(AbruComponent_1["default"].Commands.AddComponent(iqtohesVej, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var wyPXeSuCHg = _this.context.system.actorOf(Button_1["default"].props({ id: "wyPXeSuCHg", text: "Ok", marginLeft: "20px" }), "wyPXeSuCHg");
                    refCache["wyPXeSuCHg"] = wyPXeSuCHg;
                    return ePZTgbVjZw.ask(AbruComponent_1["default"].Commands.AddComponent(wyPXeSuCHg, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["wyPXeSuCHg"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var TdUZbcNUEn = _this.context.system.actorOf(Label_1["default"].props({ id: "TdUZbcNUEn", text: "User" }), "TdUZbcNUEn");
            refCache["TdUZbcNUEn"] = TdUZbcNUEn;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(TdUZbcNUEn, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var qUFyeugZmN = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "qUFyeugZmN", text: _this.userName, marginTop: "10px" }), "qUFyeugZmN");
            refCache["qUFyeugZmN"] = qUFyeugZmN;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qUFyeugZmN, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kNjBdfZmdS = _this.context.system.actorOf(Label_1["default"].props({ id: "kNjBdfZmdS", text: "Password", marginTop: "30px" }), "kNjBdfZmdS");
            refCache["kNjBdfZmdS"] = kNjBdfZmdS;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kNjBdfZmdS, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ulasmrXXSA = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ulasmrXXSA", text: "*******", marginTop: "10px" }), "ulasmrXXSA");
            refCache["ulasmrXXSA"] = ulasmrXXSA;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ulasmrXXSA, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var woukyVkBbu = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "woukyVkBbu", marginTop: "20px" }), "woukyVkBbu");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(woukyVkBbu, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["woukyVkBbu"] = woukyVkBbu;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var gUyGzynVnF = _this.context.system.actorOf(Button_1["default"].props({ id: "gUyGzynVnF", text: "Cancel" }), "gUyGzynVnF");
                    refCache["gUyGzynVnF"] = gUyGzynVnF;
                    return woukyVkBbu.ask(AbruComponent_1["default"].Commands.AddComponent(gUyGzynVnF, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var pxOtMeNBHY = _this.context.system.actorOf(Button_1["default"].props({ id: "pxOtMeNBHY", text: "Ok", marginLeft: "20px" }), "pxOtMeNBHY");
                    refCache["pxOtMeNBHY"] = pxOtMeNBHY;
                    return woukyVkBbu.ask(AbruComponent_1["default"].Commands.AddComponent(pxOtMeNBHY, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["pxOtMeNBHY"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var HScXIBeApr = _this.context.system.actorOf(Label_1["default"].props({ id: "HScXIBeApr", text: "User" }), "HScXIBeApr");
            refCache["HScXIBeApr"] = HScXIBeApr;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HScXIBeApr, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var xPbgETRUWv = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "xPbgETRUWv", text: _this.userName, marginTop: "10px" }), "xPbgETRUWv");
            refCache["xPbgETRUWv"] = xPbgETRUWv;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(xPbgETRUWv, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var jHuWRhKCsq = _this.context.system.actorOf(Label_1["default"].props({ id: "jHuWRhKCsq", text: "Password", marginTop: "30px" }), "jHuWRhKCsq");
            refCache["jHuWRhKCsq"] = jHuWRhKCsq;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jHuWRhKCsq, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var tkMvxZLbcv = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "tkMvxZLbcv", text: "*******", marginTop: "10px" }), "tkMvxZLbcv");
            refCache["tkMvxZLbcv"] = tkMvxZLbcv;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(tkMvxZLbcv, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var dStcVJNTEU = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "dStcVJNTEU", marginTop: "20px" }), "dStcVJNTEU");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(dStcVJNTEU, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["dStcVJNTEU"] = dStcVJNTEU;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var XuWNwUiPJw = _this.context.system.actorOf(Button_1["default"].props({ id: "XuWNwUiPJw", text: "Cancel" }), "XuWNwUiPJw");
                    refCache["XuWNwUiPJw"] = XuWNwUiPJw;
                    return dStcVJNTEU.ask(AbruComponent_1["default"].Commands.AddComponent(XuWNwUiPJw, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var JEQkZvJfeQ = _this.context.system.actorOf(Button_1["default"].props({ id: "JEQkZvJfeQ", text: "Ok", marginLeft: "20px" }), "JEQkZvJfeQ");
                    refCache["JEQkZvJfeQ"] = JEQkZvJfeQ;
                    return dStcVJNTEU.ask(AbruComponent_1["default"].Commands.AddComponent(JEQkZvJfeQ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["JEQkZvJfeQ"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var cAOGdzgMyp = _this.context.system.actorOf(Label_1["default"].props({ id: "cAOGdzgMyp", text: "User" }), "cAOGdzgMyp");
            refCache["cAOGdzgMyp"] = cAOGdzgMyp;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(cAOGdzgMyp, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var uQMButBtkG = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "uQMButBtkG", text: _this.userName, marginTop: "10px" }), "uQMButBtkG");
            refCache["uQMButBtkG"] = uQMButBtkG;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(uQMButBtkG, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var eFIlYalIeO = _this.context.system.actorOf(Label_1["default"].props({ id: "eFIlYalIeO", text: "Password", marginTop: "30px" }), "eFIlYalIeO");
            refCache["eFIlYalIeO"] = eFIlYalIeO;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(eFIlYalIeO, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rWmcTgVFpU = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "rWmcTgVFpU", text: "*******", marginTop: "10px" }), "rWmcTgVFpU");
            refCache["rWmcTgVFpU"] = rWmcTgVFpU;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rWmcTgVFpU, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var jeqvwoUAoA = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "jeqvwoUAoA", marginTop: "20px" }), "jeqvwoUAoA");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jeqvwoUAoA, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["jeqvwoUAoA"] = jeqvwoUAoA;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var igZsZCzfuv = _this.context.system.actorOf(Button_1["default"].props({ id: "igZsZCzfuv", text: "Cancel" }), "igZsZCzfuv");
                    refCache["igZsZCzfuv"] = igZsZCzfuv;
                    return jeqvwoUAoA.ask(AbruComponent_1["default"].Commands.AddComponent(igZsZCzfuv, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var cShxOFVLgD = _this.context.system.actorOf(Button_1["default"].props({ id: "cShxOFVLgD", text: "Ok", marginLeft: "20px" }), "cShxOFVLgD");
                    refCache["cShxOFVLgD"] = cShxOFVLgD;
                    return jeqvwoUAoA.ask(AbruComponent_1["default"].Commands.AddComponent(cShxOFVLgD, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["cShxOFVLgD"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var WZnguBDGZb = _this.context.system.actorOf(Label_1["default"].props({ id: "WZnguBDGZb", text: "User" }), "WZnguBDGZb");
            refCache["WZnguBDGZb"] = WZnguBDGZb;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WZnguBDGZb, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KWkZHBGXpk = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "KWkZHBGXpk", text: _this.userName, marginTop: "10px" }), "KWkZHBGXpk");
            refCache["KWkZHBGXpk"] = KWkZHBGXpk;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KWkZHBGXpk, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var jOsRWunoKV = _this.context.system.actorOf(Label_1["default"].props({ id: "jOsRWunoKV", text: "Password", marginTop: "30px" }), "jOsRWunoKV");
            refCache["jOsRWunoKV"] = jOsRWunoKV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jOsRWunoKV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var aMCtHaWXGx = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "aMCtHaWXGx", text: "*******", marginTop: "10px" }), "aMCtHaWXGx");
            refCache["aMCtHaWXGx"] = aMCtHaWXGx;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(aMCtHaWXGx, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gBQAlbzTXo = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "gBQAlbzTXo", marginTop: "20px" }), "gBQAlbzTXo");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gBQAlbzTXo, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["gBQAlbzTXo"] = gBQAlbzTXo;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var XMTbNIlood = _this.context.system.actorOf(Button_1["default"].props({ id: "XMTbNIlood", text: "Cancel" }), "XMTbNIlood");
                    refCache["XMTbNIlood"] = XMTbNIlood;
                    return gBQAlbzTXo.ask(AbruComponent_1["default"].Commands.AddComponent(XMTbNIlood, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var FsKxhHBIdW = _this.context.system.actorOf(Button_1["default"].props({ id: "FsKxhHBIdW", text: "Ok", marginLeft: "20px" }), "FsKxhHBIdW");
                    refCache["FsKxhHBIdW"] = FsKxhHBIdW;
                    return gBQAlbzTXo.ask(AbruComponent_1["default"].Commands.AddComponent(FsKxhHBIdW, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["FsKxhHBIdW"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var BeHiehSREJ = _this.context.system.actorOf(Label_1["default"].props({ id: "BeHiehSREJ", text: "User" }), "BeHiehSREJ");
            refCache["BeHiehSREJ"] = BeHiehSREJ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BeHiehSREJ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var FHvQfoivuL = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "FHvQfoivuL", text: _this.userName, marginTop: "10px" }), "FHvQfoivuL");
            refCache["FHvQfoivuL"] = FHvQfoivuL;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(FHvQfoivuL, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var IcdiXdRyTn = _this.context.system.actorOf(Label_1["default"].props({ id: "IcdiXdRyTn", text: "Password", marginTop: "30px" }), "IcdiXdRyTn");
            refCache["IcdiXdRyTn"] = IcdiXdRyTn;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(IcdiXdRyTn, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var inIqHVMGXg = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "inIqHVMGXg", text: "*******", marginTop: "10px" }), "inIqHVMGXg");
            refCache["inIqHVMGXg"] = inIqHVMGXg;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(inIqHVMGXg, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var HBgZvjJRhL = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "HBgZvjJRhL", marginTop: "20px" }), "HBgZvjJRhL");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HBgZvjJRhL, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["HBgZvjJRhL"] = HBgZvjJRhL;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var hIfqbvmUTL = _this.context.system.actorOf(Button_1["default"].props({ id: "hIfqbvmUTL", text: "Cancel" }), "hIfqbvmUTL");
                    refCache["hIfqbvmUTL"] = hIfqbvmUTL;
                    return HBgZvjJRhL.ask(AbruComponent_1["default"].Commands.AddComponent(hIfqbvmUTL, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var wXCDXttGQk = _this.context.system.actorOf(Button_1["default"].props({ id: "wXCDXttGQk", text: "Ok", marginLeft: "20px" }), "wXCDXttGQk");
                    refCache["wXCDXttGQk"] = wXCDXttGQk;
                    return HBgZvjJRhL.ask(AbruComponent_1["default"].Commands.AddComponent(wXCDXttGQk, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["wXCDXttGQk"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var ZLFNhmaBwK = _this.context.system.actorOf(Label_1["default"].props({ id: "ZLFNhmaBwK", text: "User" }), "ZLFNhmaBwK");
            refCache["ZLFNhmaBwK"] = ZLFNhmaBwK;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZLFNhmaBwK, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var SrunvxJxWV = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "SrunvxJxWV", text: _this.userName, marginTop: "10px" }), "SrunvxJxWV");
            refCache["SrunvxJxWV"] = SrunvxJxWV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(SrunvxJxWV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var xtYAOiGUPC = _this.context.system.actorOf(Label_1["default"].props({ id: "xtYAOiGUPC", text: "Password", marginTop: "30px" }), "xtYAOiGUPC");
            refCache["xtYAOiGUPC"] = xtYAOiGUPC;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(xtYAOiGUPC, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ldkLZfnnBt = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ldkLZfnnBt", text: "*******", marginTop: "10px" }), "ldkLZfnnBt");
            refCache["ldkLZfnnBt"] = ldkLZfnnBt;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ldkLZfnnBt, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var lQJXDygxGR = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "lQJXDygxGR", marginTop: "20px" }), "lQJXDygxGR");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(lQJXDygxGR, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["lQJXDygxGR"] = lQJXDygxGR;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var QhcGwRdRod = _this.context.system.actorOf(Button_1["default"].props({ id: "QhcGwRdRod", text: "Cancel" }), "QhcGwRdRod");
                    refCache["QhcGwRdRod"] = QhcGwRdRod;
                    return lQJXDygxGR.ask(AbruComponent_1["default"].Commands.AddComponent(QhcGwRdRod, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var OhvLrhbMZv = _this.context.system.actorOf(Button_1["default"].props({ id: "OhvLrhbMZv", text: "Ok", marginLeft: "20px" }), "OhvLrhbMZv");
                    refCache["OhvLrhbMZv"] = OhvLrhbMZv;
                    return lQJXDygxGR.ask(AbruComponent_1["default"].Commands.AddComponent(OhvLrhbMZv, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["OhvLrhbMZv"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var PUPvLDEJbb = _this.context.system.actorOf(Label_1["default"].props({ id: "PUPvLDEJbb", text: "User" }), "PUPvLDEJbb");
            refCache["PUPvLDEJbb"] = PUPvLDEJbb;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PUPvLDEJbb, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var bpvxINbRtM = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "bpvxINbRtM", text: _this.userName, marginTop: "10px" }), "bpvxINbRtM");
            refCache["bpvxINbRtM"] = bpvxINbRtM;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(bpvxINbRtM, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var lpouDhCeFd = _this.context.system.actorOf(Label_1["default"].props({ id: "lpouDhCeFd", text: "Password", marginTop: "30px" }), "lpouDhCeFd");
            refCache["lpouDhCeFd"] = lpouDhCeFd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(lpouDhCeFd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var RulIutaHdN = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "RulIutaHdN", text: "*******", marginTop: "10px" }), "RulIutaHdN");
            refCache["RulIutaHdN"] = RulIutaHdN;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(RulIutaHdN, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rWyMQZSknS = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "rWyMQZSknS", marginTop: "20px" }), "rWyMQZSknS");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rWyMQZSknS, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["rWyMQZSknS"] = rWyMQZSknS;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var bmlRaLwqBv = _this.context.system.actorOf(Button_1["default"].props({ id: "bmlRaLwqBv", text: "Cancel" }), "bmlRaLwqBv");
                    refCache["bmlRaLwqBv"] = bmlRaLwqBv;
                    return rWyMQZSknS.ask(AbruComponent_1["default"].Commands.AddComponent(bmlRaLwqBv, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var NCzUbKqBvQ = _this.context.system.actorOf(Button_1["default"].props({ id: "NCzUbKqBvQ", text: "Ok", marginLeft: "20px" }), "NCzUbKqBvQ");
                    refCache["NCzUbKqBvQ"] = NCzUbKqBvQ;
                    return rWyMQZSknS.ask(AbruComponent_1["default"].Commands.AddComponent(NCzUbKqBvQ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["NCzUbKqBvQ"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var bwiQKGaZMl = _this.context.system.actorOf(Label_1["default"].props({ id: "bwiQKGaZMl", text: "User" }), "bwiQKGaZMl");
            refCache["bwiQKGaZMl"] = bwiQKGaZMl;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(bwiQKGaZMl, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var GyrbIYkVco = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "GyrbIYkVco", text: _this.userName, marginTop: "10px" }), "GyrbIYkVco");
            refCache["GyrbIYkVco"] = GyrbIYkVco;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(GyrbIYkVco, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var dxnlbiDDwK = _this.context.system.actorOf(Label_1["default"].props({ id: "dxnlbiDDwK", text: "Password", marginTop: "30px" }), "dxnlbiDDwK");
            refCache["dxnlbiDDwK"] = dxnlbiDDwK;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(dxnlbiDDwK, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var lBoNTelrsg = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "lBoNTelrsg", text: "*******", marginTop: "10px" }), "lBoNTelrsg");
            refCache["lBoNTelrsg"] = lBoNTelrsg;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(lBoNTelrsg, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VTgXPrGwsz = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "VTgXPrGwsz", marginTop: "20px" }), "VTgXPrGwsz");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VTgXPrGwsz, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["VTgXPrGwsz"] = VTgXPrGwsz;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var IeEtyTObfo = _this.context.system.actorOf(Button_1["default"].props({ id: "IeEtyTObfo", text: "Cancel" }), "IeEtyTObfo");
                    refCache["IeEtyTObfo"] = IeEtyTObfo;
                    return VTgXPrGwsz.ask(AbruComponent_1["default"].Commands.AddComponent(IeEtyTObfo, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var dGuVvEuIrs = _this.context.system.actorOf(Button_1["default"].props({ id: "dGuVvEuIrs", text: "Ok", marginLeft: "20px" }), "dGuVvEuIrs");
                    refCache["dGuVvEuIrs"] = dGuVvEuIrs;
                    return VTgXPrGwsz.ask(AbruComponent_1["default"].Commands.AddComponent(dGuVvEuIrs, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["dGuVvEuIrs"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var nFSUtCWOXH = _this.context.system.actorOf(Label_1["default"].props({ id: "nFSUtCWOXH", text: "User" }), "nFSUtCWOXH");
            refCache["nFSUtCWOXH"] = nFSUtCWOXH;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(nFSUtCWOXH, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KQDdwnvPbV = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "KQDdwnvPbV", text: _this.userName, marginTop: "10px" }), "KQDdwnvPbV");
            refCache["KQDdwnvPbV"] = KQDdwnvPbV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KQDdwnvPbV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var YlIZjEYgeD = _this.context.system.actorOf(Label_1["default"].props({ id: "YlIZjEYgeD", text: "Password", marginTop: "30px" }), "YlIZjEYgeD");
            refCache["YlIZjEYgeD"] = YlIZjEYgeD;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(YlIZjEYgeD, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VvHFFCxYmc = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "VvHFFCxYmc", text: "*******", marginTop: "10px" }), "VvHFFCxYmc");
            refCache["VvHFFCxYmc"] = VvHFFCxYmc;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VvHFFCxYmc, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var LcFDLEzqno = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "LcFDLEzqno", marginTop: "20px" }), "LcFDLEzqno");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LcFDLEzqno, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["LcFDLEzqno"] = LcFDLEzqno;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var HgVgJSapUg = _this.context.system.actorOf(Button_1["default"].props({ id: "HgVgJSapUg", text: "Cancel" }), "HgVgJSapUg");
                    refCache["HgVgJSapUg"] = HgVgJSapUg;
                    return LcFDLEzqno.ask(AbruComponent_1["default"].Commands.AddComponent(HgVgJSapUg, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var PxhFwHvEfb = _this.context.system.actorOf(Button_1["default"].props({ id: "PxhFwHvEfb", text: "Ok", marginLeft: "20px" }), "PxhFwHvEfb");
                    refCache["PxhFwHvEfb"] = PxhFwHvEfb;
                    return LcFDLEzqno.ask(AbruComponent_1["default"].Commands.AddComponent(PxhFwHvEfb, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["PxhFwHvEfb"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var RAwaiEFzUB = _this.context.system.actorOf(Label_1["default"].props({ id: "RAwaiEFzUB", text: "User" }), "RAwaiEFzUB");
            refCache["RAwaiEFzUB"] = RAwaiEFzUB;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(RAwaiEFzUB, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var eseWpxjmui = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "eseWpxjmui", text: _this.userName, marginTop: "10px" }), "eseWpxjmui");
            refCache["eseWpxjmui"] = eseWpxjmui;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(eseWpxjmui, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QitpFEEGfg = _this.context.system.actorOf(Label_1["default"].props({ id: "QitpFEEGfg", text: "Password", marginTop: "30px" }), "QitpFEEGfg");
            refCache["QitpFEEGfg"] = QitpFEEGfg;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QitpFEEGfg, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var HDdjHTTWtP = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "HDdjHTTWtP", text: "*******", marginTop: "10px" }), "HDdjHTTWtP");
            refCache["HDdjHTTWtP"] = HDdjHTTWtP;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HDdjHTTWtP, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var IQDrUOSPtB = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "IQDrUOSPtB", marginTop: "20px" }), "IQDrUOSPtB");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(IQDrUOSPtB, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["IQDrUOSPtB"] = IQDrUOSPtB;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var lDtMxuoRYf = _this.context.system.actorOf(Button_1["default"].props({ id: "lDtMxuoRYf", text: "Cancel" }), "lDtMxuoRYf");
                    refCache["lDtMxuoRYf"] = lDtMxuoRYf;
                    return IQDrUOSPtB.ask(AbruComponent_1["default"].Commands.AddComponent(lDtMxuoRYf, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var IfpGnPwswh = _this.context.system.actorOf(Button_1["default"].props({ id: "IfpGnPwswh", text: "Ok", marginLeft: "20px" }), "IfpGnPwswh");
                    refCache["IfpGnPwswh"] = IfpGnPwswh;
                    return IQDrUOSPtB.ask(AbruComponent_1["default"].Commands.AddComponent(IfpGnPwswh, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["IfpGnPwswh"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var CyFHjETCtd = _this.context.system.actorOf(Label_1["default"].props({ id: "CyFHjETCtd", text: "User" }), "CyFHjETCtd");
            refCache["CyFHjETCtd"] = CyFHjETCtd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(CyFHjETCtd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var YBAhEDWDMd = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "YBAhEDWDMd", text: _this.userName, marginTop: "10px" }), "YBAhEDWDMd");
            refCache["YBAhEDWDMd"] = YBAhEDWDMd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(YBAhEDWDMd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var RsCGpFvaxK = _this.context.system.actorOf(Label_1["default"].props({ id: "RsCGpFvaxK", text: "Password", marginTop: "30px" }), "RsCGpFvaxK");
            refCache["RsCGpFvaxK"] = RsCGpFvaxK;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(RsCGpFvaxK, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kiEhpsUsRU = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "kiEhpsUsRU", text: "*******", marginTop: "10px" }), "kiEhpsUsRU");
            refCache["kiEhpsUsRU"] = kiEhpsUsRU;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kiEhpsUsRU, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var jsFijRQjMW = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "jsFijRQjMW", marginTop: "20px" }), "jsFijRQjMW");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jsFijRQjMW, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["jsFijRQjMW"] = jsFijRQjMW;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var yXrDOSdvSY = _this.context.system.actorOf(Button_1["default"].props({ id: "yXrDOSdvSY", text: "Cancel" }), "yXrDOSdvSY");
                    refCache["yXrDOSdvSY"] = yXrDOSdvSY;
                    return jsFijRQjMW.ask(AbruComponent_1["default"].Commands.AddComponent(yXrDOSdvSY, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var QgcyOCnkKk = _this.context.system.actorOf(Button_1["default"].props({ id: "QgcyOCnkKk", text: "Ok", marginLeft: "20px" }), "QgcyOCnkKk");
                    refCache["QgcyOCnkKk"] = QgcyOCnkKk;
                    return jsFijRQjMW.ask(AbruComponent_1["default"].Commands.AddComponent(QgcyOCnkKk, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["QgcyOCnkKk"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var blXRONMLYG = _this.context.system.actorOf(Label_1["default"].props({ id: "blXRONMLYG", text: "User" }), "blXRONMLYG");
            refCache["blXRONMLYG"] = blXRONMLYG;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(blXRONMLYG, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var WsaVMtLcob = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "WsaVMtLcob", text: _this.userName, marginTop: "10px" }), "WsaVMtLcob");
            refCache["WsaVMtLcob"] = WsaVMtLcob;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WsaVMtLcob, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var NPuimdKlGa = _this.context.system.actorOf(Label_1["default"].props({ id: "NPuimdKlGa", text: "Password", marginTop: "30px" }), "NPuimdKlGa");
            refCache["NPuimdKlGa"] = NPuimdKlGa;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(NPuimdKlGa, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rBQKZVwpXo = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "rBQKZVwpXo", text: "*******", marginTop: "10px" }), "rBQKZVwpXo");
            refCache["rBQKZVwpXo"] = rBQKZVwpXo;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rBQKZVwpXo, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var goyhNjRXZS = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "goyhNjRXZS", marginTop: "20px" }), "goyhNjRXZS");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(goyhNjRXZS, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["goyhNjRXZS"] = goyhNjRXZS;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var NpKTDjsKcF = _this.context.system.actorOf(Button_1["default"].props({ id: "NpKTDjsKcF", text: "Cancel" }), "NpKTDjsKcF");
                    refCache["NpKTDjsKcF"] = NpKTDjsKcF;
                    return goyhNjRXZS.ask(AbruComponent_1["default"].Commands.AddComponent(NpKTDjsKcF, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var dfELFBcTGs = _this.context.system.actorOf(Button_1["default"].props({ id: "dfELFBcTGs", text: "Ok", marginLeft: "20px" }), "dfELFBcTGs");
                    refCache["dfELFBcTGs"] = dfELFBcTGs;
                    return goyhNjRXZS.ask(AbruComponent_1["default"].Commands.AddComponent(dfELFBcTGs, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["dfELFBcTGs"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var CkDtXIasrf = _this.context.system.actorOf(Label_1["default"].props({ id: "CkDtXIasrf", text: "User" }), "CkDtXIasrf");
            refCache["CkDtXIasrf"] = CkDtXIasrf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(CkDtXIasrf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var UIWYDGmfJV = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "UIWYDGmfJV", text: _this.userName, marginTop: "10px" }), "UIWYDGmfJV");
            refCache["UIWYDGmfJV"] = UIWYDGmfJV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(UIWYDGmfJV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var LJHjdjRUMK = _this.context.system.actorOf(Label_1["default"].props({ id: "LJHjdjRUMK", text: "Password", marginTop: "30px" }), "LJHjdjRUMK");
            refCache["LJHjdjRUMK"] = LJHjdjRUMK;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LJHjdjRUMK, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var DchrtSlqoX = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "DchrtSlqoX", text: "*******", marginTop: "10px" }), "DchrtSlqoX");
            refCache["DchrtSlqoX"] = DchrtSlqoX;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(DchrtSlqoX, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var bUcuoxVgMN = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "bUcuoxVgMN", marginTop: "20px" }), "bUcuoxVgMN");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(bUcuoxVgMN, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["bUcuoxVgMN"] = bUcuoxVgMN;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var GFLWEYNeLt = _this.context.system.actorOf(Button_1["default"].props({ id: "GFLWEYNeLt", text: "Cancel" }), "GFLWEYNeLt");
                    refCache["GFLWEYNeLt"] = GFLWEYNeLt;
                    return bUcuoxVgMN.ask(AbruComponent_1["default"].Commands.AddComponent(GFLWEYNeLt, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var LkegMwercD = _this.context.system.actorOf(Button_1["default"].props({ id: "LkegMwercD", text: "Ok", marginLeft: "20px" }), "LkegMwercD");
                    refCache["LkegMwercD"] = LkegMwercD;
                    return bUcuoxVgMN.ask(AbruComponent_1["default"].Commands.AddComponent(LkegMwercD, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["LkegMwercD"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var ZAWLCwbeab = _this.context.system.actorOf(Label_1["default"].props({ id: "ZAWLCwbeab", text: "User" }), "ZAWLCwbeab");
            refCache["ZAWLCwbeab"] = ZAWLCwbeab;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZAWLCwbeab, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var wtKvkIhyiL = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "wtKvkIhyiL", text: _this.userName, marginTop: "10px" }), "wtKvkIhyiL");
            refCache["wtKvkIhyiL"] = wtKvkIhyiL;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wtKvkIhyiL, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ALagNqMlSl = _this.context.system.actorOf(Label_1["default"].props({ id: "ALagNqMlSl", text: "Password", marginTop: "30px" }), "ALagNqMlSl");
            refCache["ALagNqMlSl"] = ALagNqMlSl;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ALagNqMlSl, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var whICBkbvUd = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "whICBkbvUd", text: "*******", marginTop: "10px" }), "whICBkbvUd");
            refCache["whICBkbvUd"] = whICBkbvUd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(whICBkbvUd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var LvfmbiNlBD = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "LvfmbiNlBD", marginTop: "20px" }), "LvfmbiNlBD");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LvfmbiNlBD, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["LvfmbiNlBD"] = LvfmbiNlBD;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var bFHWUtknoq = _this.context.system.actorOf(Button_1["default"].props({ id: "bFHWUtknoq", text: "Cancel" }), "bFHWUtknoq");
                    refCache["bFHWUtknoq"] = bFHWUtknoq;
                    return LvfmbiNlBD.ask(AbruComponent_1["default"].Commands.AddComponent(bFHWUtknoq, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var lkeSqZhQLI = _this.context.system.actorOf(Button_1["default"].props({ id: "lkeSqZhQLI", text: "Ok", marginLeft: "20px" }), "lkeSqZhQLI");
                    refCache["lkeSqZhQLI"] = lkeSqZhQLI;
                    return LvfmbiNlBD.ask(AbruComponent_1["default"].Commands.AddComponent(lkeSqZhQLI, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["lkeSqZhQLI"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var qGLkOcNfJv = _this.context.system.actorOf(Label_1["default"].props({ id: "qGLkOcNfJv", text: "User" }), "qGLkOcNfJv");
            refCache["qGLkOcNfJv"] = qGLkOcNfJv;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qGLkOcNfJv, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gewQZMDtFO = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "gewQZMDtFO", text: _this.userName, marginTop: "10px" }), "gewQZMDtFO");
            refCache["gewQZMDtFO"] = gewQZMDtFO;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gewQZMDtFO, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var xlQdKOkMnh = _this.context.system.actorOf(Label_1["default"].props({ id: "xlQdKOkMnh", text: "Password", marginTop: "30px" }), "xlQdKOkMnh");
            refCache["xlQdKOkMnh"] = xlQdKOkMnh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(xlQdKOkMnh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var BHLDWQHRNX = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "BHLDWQHRNX", text: "*******", marginTop: "10px" }), "BHLDWQHRNX");
            refCache["BHLDWQHRNX"] = BHLDWQHRNX;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BHLDWQHRNX, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var yQnnZtmqEW = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "yQnnZtmqEW", marginTop: "20px" }), "yQnnZtmqEW");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(yQnnZtmqEW, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["yQnnZtmqEW"] = yQnnZtmqEW;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var OwAVJKpxrE = _this.context.system.actorOf(Button_1["default"].props({ id: "OwAVJKpxrE", text: "Cancel" }), "OwAVJKpxrE");
                    refCache["OwAVJKpxrE"] = OwAVJKpxrE;
                    return yQnnZtmqEW.ask(AbruComponent_1["default"].Commands.AddComponent(OwAVJKpxrE, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var UeCxQhWlWe = _this.context.system.actorOf(Button_1["default"].props({ id: "UeCxQhWlWe", text: "Ok", marginLeft: "20px" }), "UeCxQhWlWe");
                    refCache["UeCxQhWlWe"] = UeCxQhWlWe;
                    return yQnnZtmqEW.ask(AbruComponent_1["default"].Commands.AddComponent(UeCxQhWlWe, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["UeCxQhWlWe"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var iaGmQCMUDe = _this.context.system.actorOf(Label_1["default"].props({ id: "iaGmQCMUDe", text: "User" }), "iaGmQCMUDe");
            refCache["iaGmQCMUDe"] = iaGmQCMUDe;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(iaGmQCMUDe, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var lYnwOSbdfO = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "lYnwOSbdfO", text: _this.userName, marginTop: "10px" }), "lYnwOSbdfO");
            refCache["lYnwOSbdfO"] = lYnwOSbdfO;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(lYnwOSbdfO, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KzPewTsxUf = _this.context.system.actorOf(Label_1["default"].props({ id: "KzPewTsxUf", text: "Password", marginTop: "30px" }), "KzPewTsxUf");
            refCache["KzPewTsxUf"] = KzPewTsxUf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KzPewTsxUf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var sqCdUzwviM = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "sqCdUzwviM", text: "*******", marginTop: "10px" }), "sqCdUzwviM");
            refCache["sqCdUzwviM"] = sqCdUzwviM;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(sqCdUzwviM, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var flmqNuaAjg = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "flmqNuaAjg", marginTop: "20px" }), "flmqNuaAjg");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(flmqNuaAjg, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["flmqNuaAjg"] = flmqNuaAjg;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var yagMYrIVVx = _this.context.system.actorOf(Button_1["default"].props({ id: "yagMYrIVVx", text: "Cancel" }), "yagMYrIVVx");
                    refCache["yagMYrIVVx"] = yagMYrIVVx;
                    return flmqNuaAjg.ask(AbruComponent_1["default"].Commands.AddComponent(yagMYrIVVx, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var xnLXRJbxbN = _this.context.system.actorOf(Button_1["default"].props({ id: "xnLXRJbxbN", text: "Ok", marginLeft: "20px" }), "xnLXRJbxbN");
                    refCache["xnLXRJbxbN"] = xnLXRJbxbN;
                    return flmqNuaAjg.ask(AbruComponent_1["default"].Commands.AddComponent(xnLXRJbxbN, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["xnLXRJbxbN"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var rOWGehvyKJ = _this.context.system.actorOf(Label_1["default"].props({ id: "rOWGehvyKJ", text: "User" }), "rOWGehvyKJ");
            refCache["rOWGehvyKJ"] = rOWGehvyKJ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rOWGehvyKJ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var IvBtkTaRmj = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "IvBtkTaRmj", text: _this.userName, marginTop: "10px" }), "IvBtkTaRmj");
            refCache["IvBtkTaRmj"] = IvBtkTaRmj;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(IvBtkTaRmj, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var IaYqdCfosu = _this.context.system.actorOf(Label_1["default"].props({ id: "IaYqdCfosu", text: "Password", marginTop: "30px" }), "IaYqdCfosu");
            refCache["IaYqdCfosu"] = IaYqdCfosu;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(IaYqdCfosu, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var EPkYwTieUg = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "EPkYwTieUg", text: "*******", marginTop: "10px" }), "EPkYwTieUg");
            refCache["EPkYwTieUg"] = EPkYwTieUg;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(EPkYwTieUg, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XcyeypJWdc = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "XcyeypJWdc", marginTop: "20px" }), "XcyeypJWdc");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XcyeypJWdc, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["XcyeypJWdc"] = XcyeypJWdc;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var XWxzZWkRXV = _this.context.system.actorOf(Button_1["default"].props({ id: "XWxzZWkRXV", text: "Cancel" }), "XWxzZWkRXV");
                    refCache["XWxzZWkRXV"] = XWxzZWkRXV;
                    return XcyeypJWdc.ask(AbruComponent_1["default"].Commands.AddComponent(XWxzZWkRXV, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var RLrEUZHgcn = _this.context.system.actorOf(Button_1["default"].props({ id: "RLrEUZHgcn", text: "Ok", marginLeft: "20px" }), "RLrEUZHgcn");
                    refCache["RLrEUZHgcn"] = RLrEUZHgcn;
                    return XcyeypJWdc.ask(AbruComponent_1["default"].Commands.AddComponent(RLrEUZHgcn, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["RLrEUZHgcn"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var BTGMMagdOL = _this.context.system.actorOf(Label_1["default"].props({ id: "BTGMMagdOL", text: "User" }), "BTGMMagdOL");
            refCache["BTGMMagdOL"] = BTGMMagdOL;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BTGMMagdOL, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var buiWynErqh = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "buiWynErqh", text: _this.userName, marginTop: "10px" }), "buiWynErqh");
            refCache["buiWynErqh"] = buiWynErqh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(buiWynErqh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KnoqgUgGox = _this.context.system.actorOf(Label_1["default"].props({ id: "KnoqgUgGox", text: "Password", marginTop: "30px" }), "KnoqgUgGox");
            refCache["KnoqgUgGox"] = KnoqgUgGox;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KnoqgUgGox, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gKhJULZliL = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "gKhJULZliL", text: "*******", marginTop: "10px" }), "gKhJULZliL");
            refCache["gKhJULZliL"] = gKhJULZliL;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gKhJULZliL, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var DNTfYXcmxj = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "DNTfYXcmxj", marginTop: "20px" }), "DNTfYXcmxj");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(DNTfYXcmxj, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["DNTfYXcmxj"] = DNTfYXcmxj;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var YfSOjWEFBi = _this.context.system.actorOf(Button_1["default"].props({ id: "YfSOjWEFBi", text: "Cancel" }), "YfSOjWEFBi");
                    refCache["YfSOjWEFBi"] = YfSOjWEFBi;
                    return DNTfYXcmxj.ask(AbruComponent_1["default"].Commands.AddComponent(YfSOjWEFBi, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var wyoiEUYJux = _this.context.system.actorOf(Button_1["default"].props({ id: "wyoiEUYJux", text: "Ok", marginLeft: "20px" }), "wyoiEUYJux");
                    refCache["wyoiEUYJux"] = wyoiEUYJux;
                    return DNTfYXcmxj.ask(AbruComponent_1["default"].Commands.AddComponent(wyoiEUYJux, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["wyoiEUYJux"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var athwJkXvOr = _this.context.system.actorOf(Label_1["default"].props({ id: "athwJkXvOr", text: "User" }), "athwJkXvOr");
            refCache["athwJkXvOr"] = athwJkXvOr;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(athwJkXvOr, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var pDadfzLjXE = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "pDadfzLjXE", text: _this.userName, marginTop: "10px" }), "pDadfzLjXE");
            refCache["pDadfzLjXE"] = pDadfzLjXE;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(pDadfzLjXE, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var xzhAybrZRJ = _this.context.system.actorOf(Label_1["default"].props({ id: "xzhAybrZRJ", text: "Password", marginTop: "30px" }), "xzhAybrZRJ");
            refCache["xzhAybrZRJ"] = xzhAybrZRJ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(xzhAybrZRJ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VQwRCtqHGB = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "VQwRCtqHGB", text: "*******", marginTop: "10px" }), "VQwRCtqHGB");
            refCache["VQwRCtqHGB"] = VQwRCtqHGB;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VQwRCtqHGB, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QZmAqMNDjU = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "QZmAqMNDjU", marginTop: "20px" }), "QZmAqMNDjU");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QZmAqMNDjU, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["QZmAqMNDjU"] = QZmAqMNDjU;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var DmzFISOBgh = _this.context.system.actorOf(Button_1["default"].props({ id: "DmzFISOBgh", text: "Cancel" }), "DmzFISOBgh");
                    refCache["DmzFISOBgh"] = DmzFISOBgh;
                    return QZmAqMNDjU.ask(AbruComponent_1["default"].Commands.AddComponent(DmzFISOBgh, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var xtrmQBokfl = _this.context.system.actorOf(Button_1["default"].props({ id: "xtrmQBokfl", text: "Ok", marginLeft: "20px" }), "xtrmQBokfl");
                    refCache["xtrmQBokfl"] = xtrmQBokfl;
                    return QZmAqMNDjU.ask(AbruComponent_1["default"].Commands.AddComponent(xtrmQBokfl, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["xtrmQBokfl"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var GbRkQPTqap = _this.context.system.actorOf(Label_1["default"].props({ id: "GbRkQPTqap", text: "User" }), "GbRkQPTqap");
            refCache["GbRkQPTqap"] = GbRkQPTqap;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(GbRkQPTqap, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var xBIqzCIDSd = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "xBIqzCIDSd", text: _this.userName, marginTop: "10px" }), "xBIqzCIDSd");
            refCache["xBIqzCIDSd"] = xBIqzCIDSd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(xBIqzCIDSd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var xhzuzAqcTF = _this.context.system.actorOf(Label_1["default"].props({ id: "xhzuzAqcTF", text: "Password", marginTop: "30px" }), "xhzuzAqcTF");
            refCache["xhzuzAqcTF"] = xhzuzAqcTF;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(xhzuzAqcTF, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var dzmyXDLRSJ = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "dzmyXDLRSJ", text: "*******", marginTop: "10px" }), "dzmyXDLRSJ");
            refCache["dzmyXDLRSJ"] = dzmyXDLRSJ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(dzmyXDLRSJ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var fgDvYuuFIx = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "fgDvYuuFIx", marginTop: "20px" }), "fgDvYuuFIx");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(fgDvYuuFIx, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["fgDvYuuFIx"] = fgDvYuuFIx;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var hSvfedmEZp = _this.context.system.actorOf(Button_1["default"].props({ id: "hSvfedmEZp", text: "Cancel" }), "hSvfedmEZp");
                    refCache["hSvfedmEZp"] = hSvfedmEZp;
                    return fgDvYuuFIx.ask(AbruComponent_1["default"].Commands.AddComponent(hSvfedmEZp, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var TeJrUdVfzZ = _this.context.system.actorOf(Button_1["default"].props({ id: "TeJrUdVfzZ", text: "Ok", marginLeft: "20px" }), "TeJrUdVfzZ");
                    refCache["TeJrUdVfzZ"] = TeJrUdVfzZ;
                    return fgDvYuuFIx.ask(AbruComponent_1["default"].Commands.AddComponent(TeJrUdVfzZ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["TeJrUdVfzZ"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var qutacOrpxD = _this.context.system.actorOf(Label_1["default"].props({ id: "qutacOrpxD", text: "User" }), "qutacOrpxD");
            refCache["qutacOrpxD"] = qutacOrpxD;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qutacOrpxD, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var jmtGmJfyfl = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "jmtGmJfyfl", text: _this.userName, marginTop: "10px" }), "jmtGmJfyfl");
            refCache["jmtGmJfyfl"] = jmtGmJfyfl;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jmtGmJfyfl, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var YeBXMLSxAQ = _this.context.system.actorOf(Label_1["default"].props({ id: "YeBXMLSxAQ", text: "Password", marginTop: "30px" }), "YeBXMLSxAQ");
            refCache["YeBXMLSxAQ"] = YeBXMLSxAQ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(YeBXMLSxAQ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var guICYPXHfh = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "guICYPXHfh", text: "*******", marginTop: "10px" }), "guICYPXHfh");
            refCache["guICYPXHfh"] = guICYPXHfh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(guICYPXHfh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var NrpWcnWWAK = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "NrpWcnWWAK", marginTop: "20px" }), "NrpWcnWWAK");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(NrpWcnWWAK, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["NrpWcnWWAK"] = NrpWcnWWAK;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var zCabbhYSal = _this.context.system.actorOf(Button_1["default"].props({ id: "zCabbhYSal", text: "Cancel" }), "zCabbhYSal");
                    refCache["zCabbhYSal"] = zCabbhYSal;
                    return NrpWcnWWAK.ask(AbruComponent_1["default"].Commands.AddComponent(zCabbhYSal, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var NwoqsUbVzr = _this.context.system.actorOf(Button_1["default"].props({ id: "NwoqsUbVzr", text: "Ok", marginLeft: "20px" }), "NwoqsUbVzr");
                    refCache["NwoqsUbVzr"] = NwoqsUbVzr;
                    return NrpWcnWWAK.ask(AbruComponent_1["default"].Commands.AddComponent(NwoqsUbVzr, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["NwoqsUbVzr"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var lVTEaarqFq = _this.context.system.actorOf(Label_1["default"].props({ id: "lVTEaarqFq", text: "User" }), "lVTEaarqFq");
            refCache["lVTEaarqFq"] = lVTEaarqFq;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(lVTEaarqFq, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XtHfGtYCLa = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "XtHfGtYCLa", text: _this.userName, marginTop: "10px" }), "XtHfGtYCLa");
            refCache["XtHfGtYCLa"] = XtHfGtYCLa;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XtHfGtYCLa, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var nfijiIknhU = _this.context.system.actorOf(Label_1["default"].props({ id: "nfijiIknhU", text: "Password", marginTop: "30px" }), "nfijiIknhU");
            refCache["nfijiIknhU"] = nfijiIknhU;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(nfijiIknhU, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var jZvMkNvaPw = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "jZvMkNvaPw", text: "*******", marginTop: "10px" }), "jZvMkNvaPw");
            refCache["jZvMkNvaPw"] = jZvMkNvaPw;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jZvMkNvaPw, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gkHTnpjjHr = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "gkHTnpjjHr", marginTop: "20px" }), "gkHTnpjjHr");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gkHTnpjjHr, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["gkHTnpjjHr"] = gkHTnpjjHr;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var drrRISxqZu = _this.context.system.actorOf(Button_1["default"].props({ id: "drrRISxqZu", text: "Cancel" }), "drrRISxqZu");
                    refCache["drrRISxqZu"] = drrRISxqZu;
                    return gkHTnpjjHr.ask(AbruComponent_1["default"].Commands.AddComponent(drrRISxqZu, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var YXkmJqWPxf = _this.context.system.actorOf(Button_1["default"].props({ id: "YXkmJqWPxf", text: "Ok", marginLeft: "20px" }), "YXkmJqWPxf");
                    refCache["YXkmJqWPxf"] = YXkmJqWPxf;
                    return gkHTnpjjHr.ask(AbruComponent_1["default"].Commands.AddComponent(YXkmJqWPxf, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["YXkmJqWPxf"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var PkPeyOKUGo = _this.context.system.actorOf(Label_1["default"].props({ id: "PkPeyOKUGo", text: "User" }), "PkPeyOKUGo");
            refCache["PkPeyOKUGo"] = PkPeyOKUGo;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PkPeyOKUGo, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ZLtYDPlbTV = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ZLtYDPlbTV", text: _this.userName, marginTop: "10px" }), "ZLtYDPlbTV");
            refCache["ZLtYDPlbTV"] = ZLtYDPlbTV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZLtYDPlbTV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var hQkWFmzAtX = _this.context.system.actorOf(Label_1["default"].props({ id: "hQkWFmzAtX", text: "Password", marginTop: "30px" }), "hQkWFmzAtX");
            refCache["hQkWFmzAtX"] = hQkWFmzAtX;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(hQkWFmzAtX, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rcKIXgutEd = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "rcKIXgutEd", text: "*******", marginTop: "10px" }), "rcKIXgutEd");
            refCache["rcKIXgutEd"] = rcKIXgutEd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rcKIXgutEd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var GRSVYTScIO = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "GRSVYTScIO", marginTop: "20px" }), "GRSVYTScIO");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(GRSVYTScIO, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["GRSVYTScIO"] = GRSVYTScIO;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var SsQilWTTLS = _this.context.system.actorOf(Button_1["default"].props({ id: "SsQilWTTLS", text: "Cancel" }), "SsQilWTTLS");
                    refCache["SsQilWTTLS"] = SsQilWTTLS;
                    return GRSVYTScIO.ask(AbruComponent_1["default"].Commands.AddComponent(SsQilWTTLS, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var HJkOTFjGyA = _this.context.system.actorOf(Button_1["default"].props({ id: "HJkOTFjGyA", text: "Ok", marginLeft: "20px" }), "HJkOTFjGyA");
                    refCache["HJkOTFjGyA"] = HJkOTFjGyA;
                    return GRSVYTScIO.ask(AbruComponent_1["default"].Commands.AddComponent(HJkOTFjGyA, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["HJkOTFjGyA"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var OeIULCwLkk = _this.context.system.actorOf(Label_1["default"].props({ id: "OeIULCwLkk", text: "User" }), "OeIULCwLkk");
            refCache["OeIULCwLkk"] = OeIULCwLkk;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(OeIULCwLkk, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var SCqQfEqAPL = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "SCqQfEqAPL", text: _this.userName, marginTop: "10px" }), "SCqQfEqAPL");
            refCache["SCqQfEqAPL"] = SCqQfEqAPL;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(SCqQfEqAPL, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var sXrXTWSStZ = _this.context.system.actorOf(Label_1["default"].props({ id: "sXrXTWSStZ", text: "Password", marginTop: "30px" }), "sXrXTWSStZ");
            refCache["sXrXTWSStZ"] = sXrXTWSStZ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(sXrXTWSStZ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var oiNADnEZUL = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "oiNADnEZUL", text: "*******", marginTop: "10px" }), "oiNADnEZUL");
            refCache["oiNADnEZUL"] = oiNADnEZUL;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(oiNADnEZUL, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var pRUEbmzZvP = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "pRUEbmzZvP", marginTop: "20px" }), "pRUEbmzZvP");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(pRUEbmzZvP, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["pRUEbmzZvP"] = pRUEbmzZvP;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var qAfRkZwUCM = _this.context.system.actorOf(Button_1["default"].props({ id: "qAfRkZwUCM", text: "Cancel" }), "qAfRkZwUCM");
                    refCache["qAfRkZwUCM"] = qAfRkZwUCM;
                    return pRUEbmzZvP.ask(AbruComponent_1["default"].Commands.AddComponent(qAfRkZwUCM, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var kYpVnsdbKQ = _this.context.system.actorOf(Button_1["default"].props({ id: "kYpVnsdbKQ", text: "Ok", marginLeft: "20px" }), "kYpVnsdbKQ");
                    refCache["kYpVnsdbKQ"] = kYpVnsdbKQ;
                    return pRUEbmzZvP.ask(AbruComponent_1["default"].Commands.AddComponent(kYpVnsdbKQ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["kYpVnsdbKQ"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var juAvwxtmUt = _this.context.system.actorOf(Label_1["default"].props({ id: "juAvwxtmUt", text: "User" }), "juAvwxtmUt");
            refCache["juAvwxtmUt"] = juAvwxtmUt;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(juAvwxtmUt, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var qAeZrnFdYj = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "qAeZrnFdYj", text: _this.userName, marginTop: "10px" }), "qAeZrnFdYj");
            refCache["qAeZrnFdYj"] = qAeZrnFdYj;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qAeZrnFdYj, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VgBfoRcvYL = _this.context.system.actorOf(Label_1["default"].props({ id: "VgBfoRcvYL", text: "Password", marginTop: "30px" }), "VgBfoRcvYL");
            refCache["VgBfoRcvYL"] = VgBfoRcvYL;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VgBfoRcvYL, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var fiXYwQOlme = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "fiXYwQOlme", text: "*******", marginTop: "10px" }), "fiXYwQOlme");
            refCache["fiXYwQOlme"] = fiXYwQOlme;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(fiXYwQOlme, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var qUMTwjbRFt = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "qUMTwjbRFt", marginTop: "20px" }), "qUMTwjbRFt");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qUMTwjbRFt, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["qUMTwjbRFt"] = qUMTwjbRFt;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var wMqsecoxpw = _this.context.system.actorOf(Button_1["default"].props({ id: "wMqsecoxpw", text: "Cancel" }), "wMqsecoxpw");
                    refCache["wMqsecoxpw"] = wMqsecoxpw;
                    return qUMTwjbRFt.ask(AbruComponent_1["default"].Commands.AddComponent(wMqsecoxpw, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var ourvpxQbEI = _this.context.system.actorOf(Button_1["default"].props({ id: "ourvpxQbEI", text: "Ok", marginLeft: "20px" }), "ourvpxQbEI");
                    refCache["ourvpxQbEI"] = ourvpxQbEI;
                    return qUMTwjbRFt.ask(AbruComponent_1["default"].Commands.AddComponent(ourvpxQbEI, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["ourvpxQbEI"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var QoWHHQCTgn = _this.context.system.actorOf(Label_1["default"].props({ id: "QoWHHQCTgn", text: "User" }), "QoWHHQCTgn");
            refCache["QoWHHQCTgn"] = QoWHHQCTgn;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QoWHHQCTgn, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ZvdQJeWKnb = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ZvdQJeWKnb", text: _this.userName, marginTop: "10px" }), "ZvdQJeWKnb");
            refCache["ZvdQJeWKnb"] = ZvdQJeWKnb;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZvdQJeWKnb, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gVzJEIfehn = _this.context.system.actorOf(Label_1["default"].props({ id: "gVzJEIfehn", text: "Password", marginTop: "30px" }), "gVzJEIfehn");
            refCache["gVzJEIfehn"] = gVzJEIfehn;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gVzJEIfehn, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var vldlecEYFt = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "vldlecEYFt", text: "*******", marginTop: "10px" }), "vldlecEYFt");
            refCache["vldlecEYFt"] = vldlecEYFt;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(vldlecEYFt, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var cxaYTuVqEA = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "cxaYTuVqEA", marginTop: "20px" }), "cxaYTuVqEA");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(cxaYTuVqEA, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["cxaYTuVqEA"] = cxaYTuVqEA;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var oeTCUYKQsx = _this.context.system.actorOf(Button_1["default"].props({ id: "oeTCUYKQsx", text: "Cancel" }), "oeTCUYKQsx");
                    refCache["oeTCUYKQsx"] = oeTCUYKQsx;
                    return cxaYTuVqEA.ask(AbruComponent_1["default"].Commands.AddComponent(oeTCUYKQsx, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var cyfuKlOPXc = _this.context.system.actorOf(Button_1["default"].props({ id: "cyfuKlOPXc", text: "Ok", marginLeft: "20px" }), "cyfuKlOPXc");
                    refCache["cyfuKlOPXc"] = cyfuKlOPXc;
                    return cxaYTuVqEA.ask(AbruComponent_1["default"].Commands.AddComponent(cyfuKlOPXc, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["cyfuKlOPXc"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var sCtLBStyxk = _this.context.system.actorOf(Label_1["default"].props({ id: "sCtLBStyxk", text: "User" }), "sCtLBStyxk");
            refCache["sCtLBStyxk"] = sCtLBStyxk;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(sCtLBStyxk, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var UaqCNrHxET = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "UaqCNrHxET", text: _this.userName, marginTop: "10px" }), "UaqCNrHxET");
            refCache["UaqCNrHxET"] = UaqCNrHxET;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(UaqCNrHxET, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var GuPiHCxfVd = _this.context.system.actorOf(Label_1["default"].props({ id: "GuPiHCxfVd", text: "Password", marginTop: "30px" }), "GuPiHCxfVd");
            refCache["GuPiHCxfVd"] = GuPiHCxfVd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(GuPiHCxfVd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QnLhymDhtp = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "QnLhymDhtp", text: "*******", marginTop: "10px" }), "QnLhymDhtp");
            refCache["QnLhymDhtp"] = QnLhymDhtp;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QnLhymDhtp, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var MoweupItPv = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "MoweupItPv", marginTop: "20px" }), "MoweupItPv");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(MoweupItPv, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["MoweupItPv"] = MoweupItPv;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var DecBTaVYii = _this.context.system.actorOf(Button_1["default"].props({ id: "DecBTaVYii", text: "Cancel" }), "DecBTaVYii");
                    refCache["DecBTaVYii"] = DecBTaVYii;
                    return MoweupItPv.ask(AbruComponent_1["default"].Commands.AddComponent(DecBTaVYii, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var ZuJpfceUIQ = _this.context.system.actorOf(Button_1["default"].props({ id: "ZuJpfceUIQ", text: "Ok", marginLeft: "20px" }), "ZuJpfceUIQ");
                    refCache["ZuJpfceUIQ"] = ZuJpfceUIQ;
                    return MoweupItPv.ask(AbruComponent_1["default"].Commands.AddComponent(ZuJpfceUIQ, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["ZuJpfceUIQ"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var oGLJCeQUNg = _this.context.system.actorOf(Label_1["default"].props({ id: "oGLJCeQUNg", text: "User" }), "oGLJCeQUNg");
            refCache["oGLJCeQUNg"] = oGLJCeQUNg;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(oGLJCeQUNg, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var oMYKMyAabc = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "oMYKMyAabc", text: _this.userName, marginTop: "10px" }), "oMYKMyAabc");
            refCache["oMYKMyAabc"] = oMYKMyAabc;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(oMYKMyAabc, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kIrAdrdiHu = _this.context.system.actorOf(Label_1["default"].props({ id: "kIrAdrdiHu", text: "Password", marginTop: "30px" }), "kIrAdrdiHu");
            refCache["kIrAdrdiHu"] = kIrAdrdiHu;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kIrAdrdiHu, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var oUYnPRNcKi = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "oUYnPRNcKi", text: "*******", marginTop: "10px" }), "oUYnPRNcKi");
            refCache["oUYnPRNcKi"] = oUYnPRNcKi;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(oUYnPRNcKi, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var tzrQJFZsUY = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "tzrQJFZsUY", marginTop: "20px" }), "tzrQJFZsUY");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(tzrQJFZsUY, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["tzrQJFZsUY"] = tzrQJFZsUY;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var CbRbmjwWkq = _this.context.system.actorOf(Button_1["default"].props({ id: "CbRbmjwWkq", text: "Cancel" }), "CbRbmjwWkq");
                    refCache["CbRbmjwWkq"] = CbRbmjwWkq;
                    return tzrQJFZsUY.ask(AbruComponent_1["default"].Commands.AddComponent(CbRbmjwWkq, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var nwaHqrsyFS = _this.context.system.actorOf(Button_1["default"].props({ id: "nwaHqrsyFS", text: "Ok", marginLeft: "20px" }), "nwaHqrsyFS");
                    refCache["nwaHqrsyFS"] = nwaHqrsyFS;
                    return tzrQJFZsUY.ask(AbruComponent_1["default"].Commands.AddComponent(nwaHqrsyFS, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["nwaHqrsyFS"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var wIJJPHDJbd = _this.context.system.actorOf(Label_1["default"].props({ id: "wIJJPHDJbd", text: "User" }), "wIJJPHDJbd");
            refCache["wIJJPHDJbd"] = wIJJPHDJbd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wIJJPHDJbd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kxfGIUrFEn = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "kxfGIUrFEn", text: _this.userName, marginTop: "10px" }), "kxfGIUrFEn");
            refCache["kxfGIUrFEn"] = kxfGIUrFEn;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kxfGIUrFEn, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var PxhZQkpvoD = _this.context.system.actorOf(Label_1["default"].props({ id: "PxhZQkpvoD", text: "Password", marginTop: "30px" }), "PxhZQkpvoD");
            refCache["PxhZQkpvoD"] = PxhZQkpvoD;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PxhZQkpvoD, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var AuOATEatdh = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "AuOATEatdh", text: "*******", marginTop: "10px" }), "AuOATEatdh");
            refCache["AuOATEatdh"] = AuOATEatdh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(AuOATEatdh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QFlbmouaCB = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "QFlbmouaCB", marginTop: "20px" }), "QFlbmouaCB");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QFlbmouaCB, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["QFlbmouaCB"] = QFlbmouaCB;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var jjOVquMMUN = _this.context.system.actorOf(Button_1["default"].props({ id: "jjOVquMMUN", text: "Cancel" }), "jjOVquMMUN");
                    refCache["jjOVquMMUN"] = jjOVquMMUN;
                    return QFlbmouaCB.ask(AbruComponent_1["default"].Commands.AddComponent(jjOVquMMUN, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var pNghYcvXpd = _this.context.system.actorOf(Button_1["default"].props({ id: "pNghYcvXpd", text: "Ok", marginLeft: "20px" }), "pNghYcvXpd");
                    refCache["pNghYcvXpd"] = pNghYcvXpd;
                    return QFlbmouaCB.ask(AbruComponent_1["default"].Commands.AddComponent(pNghYcvXpd, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["pNghYcvXpd"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var pzCLxKvvVv = _this.context.system.actorOf(Label_1["default"].props({ id: "pzCLxKvvVv", text: "User" }), "pzCLxKvvVv");
            refCache["pzCLxKvvVv"] = pzCLxKvvVv;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(pzCLxKvvVv, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KSBjUwQads = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "KSBjUwQads", text: _this.userName, marginTop: "10px" }), "KSBjUwQads");
            refCache["KSBjUwQads"] = KSBjUwQads;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KSBjUwQads, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var YVlNlDCMYq = _this.context.system.actorOf(Label_1["default"].props({ id: "YVlNlDCMYq", text: "Password", marginTop: "30px" }), "YVlNlDCMYq");
            refCache["YVlNlDCMYq"] = YVlNlDCMYq;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(YVlNlDCMYq, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var JLtAYSJZdq = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "JLtAYSJZdq", text: "*******", marginTop: "10px" }), "JLtAYSJZdq");
            refCache["JLtAYSJZdq"] = JLtAYSJZdq;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(JLtAYSJZdq, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var JNUnSdOWil = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "JNUnSdOWil", marginTop: "20px" }), "JNUnSdOWil");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(JNUnSdOWil, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["JNUnSdOWil"] = JNUnSdOWil;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var SLQJkmiWAM = _this.context.system.actorOf(Button_1["default"].props({ id: "SLQJkmiWAM", text: "Cancel" }), "SLQJkmiWAM");
                    refCache["SLQJkmiWAM"] = SLQJkmiWAM;
                    return JNUnSdOWil.ask(AbruComponent_1["default"].Commands.AddComponent(SLQJkmiWAM, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var saCyZbnMeT = _this.context.system.actorOf(Button_1["default"].props({ id: "saCyZbnMeT", text: "Ok", marginLeft: "20px" }), "saCyZbnMeT");
                    refCache["saCyZbnMeT"] = saCyZbnMeT;
                    return JNUnSdOWil.ask(AbruComponent_1["default"].Commands.AddComponent(saCyZbnMeT, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["saCyZbnMeT"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var BNFjBtLeKl = _this.context.system.actorOf(Label_1["default"].props({ id: "BNFjBtLeKl", text: "User" }), "BNFjBtLeKl");
            refCache["BNFjBtLeKl"] = BNFjBtLeKl;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BNFjBtLeKl, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kuEzssqOCC = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "kuEzssqOCC", text: _this.userName, marginTop: "10px" }), "kuEzssqOCC");
            refCache["kuEzssqOCC"] = kuEzssqOCC;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kuEzssqOCC, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gnYXBslUPA = _this.context.system.actorOf(Label_1["default"].props({ id: "gnYXBslUPA", text: "Password", marginTop: "30px" }), "gnYXBslUPA");
            refCache["gnYXBslUPA"] = gnYXBslUPA;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gnYXBslUPA, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var FCQCTTRzpF = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "FCQCTTRzpF", text: "*******", marginTop: "10px" }), "FCQCTTRzpF");
            refCache["FCQCTTRzpF"] = FCQCTTRzpF;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(FCQCTTRzpF, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VRPEvugmxZ = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "VRPEvugmxZ", marginTop: "20px" }), "VRPEvugmxZ");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VRPEvugmxZ, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["VRPEvugmxZ"] = VRPEvugmxZ;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var OgbwFPHTKa = _this.context.system.actorOf(Button_1["default"].props({ id: "OgbwFPHTKa", text: "Cancel" }), "OgbwFPHTKa");
                    refCache["OgbwFPHTKa"] = OgbwFPHTKa;
                    return VRPEvugmxZ.ask(AbruComponent_1["default"].Commands.AddComponent(OgbwFPHTKa, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var AccdKALvZg = _this.context.system.actorOf(Button_1["default"].props({ id: "AccdKALvZg", text: "Ok", marginLeft: "20px" }), "AccdKALvZg");
                    refCache["AccdKALvZg"] = AccdKALvZg;
                    return VRPEvugmxZ.ask(AbruComponent_1["default"].Commands.AddComponent(AccdKALvZg, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["AccdKALvZg"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var XpUGYyLLHd = _this.context.system.actorOf(Label_1["default"].props({ id: "XpUGYyLLHd", text: "User" }), "XpUGYyLLHd");
            refCache["XpUGYyLLHd"] = XpUGYyLLHd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XpUGYyLLHd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var MPRfzesyVE = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "MPRfzesyVE", text: _this.userName, marginTop: "10px" }), "MPRfzesyVE");
            refCache["MPRfzesyVE"] = MPRfzesyVE;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(MPRfzesyVE, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var URTcQzwbZr = _this.context.system.actorOf(Label_1["default"].props({ id: "URTcQzwbZr", text: "Password", marginTop: "30px" }), "URTcQzwbZr");
            refCache["URTcQzwbZr"] = URTcQzwbZr;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(URTcQzwbZr, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ZsGovKPQAf = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ZsGovKPQAf", text: "*******", marginTop: "10px" }), "ZsGovKPQAf");
            refCache["ZsGovKPQAf"] = ZsGovKPQAf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZsGovKPQAf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var uWFFcLKRGq = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "uWFFcLKRGq", marginTop: "20px" }), "uWFFcLKRGq");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(uWFFcLKRGq, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["uWFFcLKRGq"] = uWFFcLKRGq;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var mVbuKBaaug = _this.context.system.actorOf(Button_1["default"].props({ id: "mVbuKBaaug", text: "Cancel" }), "mVbuKBaaug");
                    refCache["mVbuKBaaug"] = mVbuKBaaug;
                    return uWFFcLKRGq.ask(AbruComponent_1["default"].Commands.AddComponent(mVbuKBaaug, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var oxOBAeRPoq = _this.context.system.actorOf(Button_1["default"].props({ id: "oxOBAeRPoq", text: "Ok", marginLeft: "20px" }), "oxOBAeRPoq");
                    refCache["oxOBAeRPoq"] = oxOBAeRPoq;
                    return uWFFcLKRGq.ask(AbruComponent_1["default"].Commands.AddComponent(oxOBAeRPoq, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["oxOBAeRPoq"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var KyxxsrkLgo = _this.context.system.actorOf(Label_1["default"].props({ id: "KyxxsrkLgo", text: "User" }), "KyxxsrkLgo");
            refCache["KyxxsrkLgo"] = KyxxsrkLgo;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KyxxsrkLgo, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XElBNIjyoW = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "XElBNIjyoW", text: _this.userName, marginTop: "10px" }), "XElBNIjyoW");
            refCache["XElBNIjyoW"] = XElBNIjyoW;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XElBNIjyoW, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var pqzQSOqwaT = _this.context.system.actorOf(Label_1["default"].props({ id: "pqzQSOqwaT", text: "Password", marginTop: "30px" }), "pqzQSOqwaT");
            refCache["pqzQSOqwaT"] = pqzQSOqwaT;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(pqzQSOqwaT, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var YbxwMdNmUp = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "YbxwMdNmUp", text: "*******", marginTop: "10px" }), "YbxwMdNmUp");
            refCache["YbxwMdNmUp"] = YbxwMdNmUp;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(YbxwMdNmUp, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var wnsuMIxOjF = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "wnsuMIxOjF", marginTop: "20px" }), "wnsuMIxOjF");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wnsuMIxOjF, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["wnsuMIxOjF"] = wnsuMIxOjF;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var yQYrjBUcXR = _this.context.system.actorOf(Button_1["default"].props({ id: "yQYrjBUcXR", text: "Cancel" }), "yQYrjBUcXR");
                    refCache["yQYrjBUcXR"] = yQYrjBUcXR;
                    return wnsuMIxOjF.ask(AbruComponent_1["default"].Commands.AddComponent(yQYrjBUcXR, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var tVDSBjHtCs = _this.context.system.actorOf(Button_1["default"].props({ id: "tVDSBjHtCs", text: "Ok", marginLeft: "20px" }), "tVDSBjHtCs");
                    refCache["tVDSBjHtCs"] = tVDSBjHtCs;
                    return wnsuMIxOjF.ask(AbruComponent_1["default"].Commands.AddComponent(tVDSBjHtCs, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["tVDSBjHtCs"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var mdBkkYdDja = _this.context.system.actorOf(Label_1["default"].props({ id: "mdBkkYdDja", text: "User" }), "mdBkkYdDja");
            refCache["mdBkkYdDja"] = mdBkkYdDja;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(mdBkkYdDja, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kDrzcvTCZv = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "kDrzcvTCZv", text: _this.userName, marginTop: "10px" }), "kDrzcvTCZv");
            refCache["kDrzcvTCZv"] = kDrzcvTCZv;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kDrzcvTCZv, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var qwkrJqJmTe = _this.context.system.actorOf(Label_1["default"].props({ id: "qwkrJqJmTe", text: "Password", marginTop: "30px" }), "qwkrJqJmTe");
            refCache["qwkrJqJmTe"] = qwkrJqJmTe;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qwkrJqJmTe, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var eWzHutoVSm = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "eWzHutoVSm", text: "*******", marginTop: "10px" }), "eWzHutoVSm");
            refCache["eWzHutoVSm"] = eWzHutoVSm;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(eWzHutoVSm, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var zIYWHjXLGZ = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "zIYWHjXLGZ", marginTop: "20px" }), "zIYWHjXLGZ");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(zIYWHjXLGZ, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["zIYWHjXLGZ"] = zIYWHjXLGZ;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var ezvWysfvge = _this.context.system.actorOf(Button_1["default"].props({ id: "ezvWysfvge", text: "Cancel" }), "ezvWysfvge");
                    refCache["ezvWysfvge"] = ezvWysfvge;
                    return zIYWHjXLGZ.ask(AbruComponent_1["default"].Commands.AddComponent(ezvWysfvge, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var cFttlTqEFl = _this.context.system.actorOf(Button_1["default"].props({ id: "cFttlTqEFl", text: "Ok", marginLeft: "20px" }), "cFttlTqEFl");
                    refCache["cFttlTqEFl"] = cFttlTqEFl;
                    return zIYWHjXLGZ.ask(AbruComponent_1["default"].Commands.AddComponent(cFttlTqEFl, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["cFttlTqEFl"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var DKMaduUYsR = _this.context.system.actorOf(Label_1["default"].props({ id: "DKMaduUYsR", text: "User" }), "DKMaduUYsR");
            refCache["DKMaduUYsR"] = DKMaduUYsR;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(DKMaduUYsR, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var HBryIAfAEg = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "HBryIAfAEg", text: _this.userName, marginTop: "10px" }), "HBryIAfAEg");
            refCache["HBryIAfAEg"] = HBryIAfAEg;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HBryIAfAEg, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var oeNxBcJspx = _this.context.system.actorOf(Label_1["default"].props({ id: "oeNxBcJspx", text: "Password", marginTop: "30px" }), "oeNxBcJspx");
            refCache["oeNxBcJspx"] = oeNxBcJspx;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(oeNxBcJspx, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var qSZQJSRHaY = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "qSZQJSRHaY", text: "*******", marginTop: "10px" }), "qSZQJSRHaY");
            refCache["qSZQJSRHaY"] = qSZQJSRHaY;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(qSZQJSRHaY, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var PnETJMxYoT = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "PnETJMxYoT", marginTop: "20px" }), "PnETJMxYoT");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PnETJMxYoT, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["PnETJMxYoT"] = PnETJMxYoT;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var NDntixQZQi = _this.context.system.actorOf(Button_1["default"].props({ id: "NDntixQZQi", text: "Cancel" }), "NDntixQZQi");
                    refCache["NDntixQZQi"] = NDntixQZQi;
                    return PnETJMxYoT.ask(AbruComponent_1["default"].Commands.AddComponent(NDntixQZQi, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var qSSdAVaKmu = _this.context.system.actorOf(Button_1["default"].props({ id: "qSSdAVaKmu", text: "Ok", marginLeft: "20px" }), "qSSdAVaKmu");
                    refCache["qSSdAVaKmu"] = qSSdAVaKmu;
                    return PnETJMxYoT.ask(AbruComponent_1["default"].Commands.AddComponent(qSSdAVaKmu, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["qSSdAVaKmu"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var WwKvIecMfk = _this.context.system.actorOf(Label_1["default"].props({ id: "WwKvIecMfk", text: "User" }), "WwKvIecMfk");
            refCache["WwKvIecMfk"] = WwKvIecMfk;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WwKvIecMfk, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var UKXktJEmXA = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "UKXktJEmXA", text: _this.userName, marginTop: "10px" }), "UKXktJEmXA");
            refCache["UKXktJEmXA"] = UKXktJEmXA;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(UKXktJEmXA, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var NbsayRYMGA = _this.context.system.actorOf(Label_1["default"].props({ id: "NbsayRYMGA", text: "Password", marginTop: "30px" }), "NbsayRYMGA");
            refCache["NbsayRYMGA"] = NbsayRYMGA;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(NbsayRYMGA, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var HaLMjCvDHf = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "HaLMjCvDHf", text: "*******", marginTop: "10px" }), "HaLMjCvDHf");
            refCache["HaLMjCvDHf"] = HaLMjCvDHf;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HaLMjCvDHf, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var sqvGXUSeNC = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "sqvGXUSeNC", marginTop: "20px" }), "sqvGXUSeNC");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(sqvGXUSeNC, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["sqvGXUSeNC"] = sqvGXUSeNC;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var WPRlLGIrlM = _this.context.system.actorOf(Button_1["default"].props({ id: "WPRlLGIrlM", text: "Cancel" }), "WPRlLGIrlM");
                    refCache["WPRlLGIrlM"] = WPRlLGIrlM;
                    return sqvGXUSeNC.ask(AbruComponent_1["default"].Commands.AddComponent(WPRlLGIrlM, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var BowMmgsovv = _this.context.system.actorOf(Button_1["default"].props({ id: "BowMmgsovv", text: "Ok", marginLeft: "20px" }), "BowMmgsovv");
                    refCache["BowMmgsovv"] = BowMmgsovv;
                    return sqvGXUSeNC.ask(AbruComponent_1["default"].Commands.AddComponent(BowMmgsovv, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["BowMmgsovv"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var OGQpnTIGBx = _this.context.system.actorOf(Label_1["default"].props({ id: "OGQpnTIGBx", text: "User" }), "OGQpnTIGBx");
            refCache["OGQpnTIGBx"] = OGQpnTIGBx;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(OGQpnTIGBx, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KeXQIsigYH = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "KeXQIsigYH", text: _this.userName, marginTop: "10px" }), "KeXQIsigYH");
            refCache["KeXQIsigYH"] = KeXQIsigYH;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KeXQIsigYH, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ekqTGUMpbN = _this.context.system.actorOf(Label_1["default"].props({ id: "ekqTGUMpbN", text: "Password", marginTop: "30px" }), "ekqTGUMpbN");
            refCache["ekqTGUMpbN"] = ekqTGUMpbN;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ekqTGUMpbN, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var FmALETicTv = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "FmALETicTv", text: "*******", marginTop: "10px" }), "FmALETicTv");
            refCache["FmALETicTv"] = FmALETicTv;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(FmALETicTv, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var WbHzpYuuoP = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "WbHzpYuuoP", marginTop: "20px" }), "WbHzpYuuoP");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WbHzpYuuoP, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["WbHzpYuuoP"] = WbHzpYuuoP;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var mZALyBnNlf = _this.context.system.actorOf(Button_1["default"].props({ id: "mZALyBnNlf", text: "Cancel" }), "mZALyBnNlf");
                    refCache["mZALyBnNlf"] = mZALyBnNlf;
                    return WbHzpYuuoP.ask(AbruComponent_1["default"].Commands.AddComponent(mZALyBnNlf, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var ygBADDwAJC = _this.context.system.actorOf(Button_1["default"].props({ id: "ygBADDwAJC", text: "Ok", marginLeft: "20px" }), "ygBADDwAJC");
                    refCache["ygBADDwAJC"] = ygBADDwAJC;
                    return WbHzpYuuoP.ask(AbruComponent_1["default"].Commands.AddComponent(ygBADDwAJC, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["ygBADDwAJC"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var trMaRvBzaU = _this.context.system.actorOf(Label_1["default"].props({ id: "trMaRvBzaU", text: "User" }), "trMaRvBzaU");
            refCache["trMaRvBzaU"] = trMaRvBzaU;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(trMaRvBzaU, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var wieEoYYvbW = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "wieEoYYvbW", text: _this.userName, marginTop: "10px" }), "wieEoYYvbW");
            refCache["wieEoYYvbW"] = wieEoYYvbW;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wieEoYYvbW, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var JLjTZsDETt = _this.context.system.actorOf(Label_1["default"].props({ id: "JLjTZsDETt", text: "Password", marginTop: "30px" }), "JLjTZsDETt");
            refCache["JLjTZsDETt"] = JLjTZsDETt;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(JLjTZsDETt, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ewauhJdHTo = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ewauhJdHTo", text: "*******", marginTop: "10px" }), "ewauhJdHTo");
            refCache["ewauhJdHTo"] = ewauhJdHTo;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ewauhJdHTo, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ZMvzNDiLTl = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "ZMvzNDiLTl", marginTop: "20px" }), "ZMvzNDiLTl");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZMvzNDiLTl, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["ZMvzNDiLTl"] = ZMvzNDiLTl;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var DyzUOxUtWv = _this.context.system.actorOf(Button_1["default"].props({ id: "DyzUOxUtWv", text: "Cancel" }), "DyzUOxUtWv");
                    refCache["DyzUOxUtWv"] = DyzUOxUtWv;
                    return ZMvzNDiLTl.ask(AbruComponent_1["default"].Commands.AddComponent(DyzUOxUtWv, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var btASdxQuWz = _this.context.system.actorOf(Button_1["default"].props({ id: "btASdxQuWz", text: "Ok", marginLeft: "20px" }), "btASdxQuWz");
                    refCache["btASdxQuWz"] = btASdxQuWz;
                    return ZMvzNDiLTl.ask(AbruComponent_1["default"].Commands.AddComponent(btASdxQuWz, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["btASdxQuWz"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var AksZTpvOCH = _this.context.system.actorOf(Label_1["default"].props({ id: "AksZTpvOCH", text: "User" }), "AksZTpvOCH");
            refCache["AksZTpvOCH"] = AksZTpvOCH;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(AksZTpvOCH, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XFMoLotrhT = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "XFMoLotrhT", text: _this.userName, marginTop: "10px" }), "XFMoLotrhT");
            refCache["XFMoLotrhT"] = XFMoLotrhT;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XFMoLotrhT, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var acHcNkPkYE = _this.context.system.actorOf(Label_1["default"].props({ id: "acHcNkPkYE", text: "Password", marginTop: "30px" }), "acHcNkPkYE");
            refCache["acHcNkPkYE"] = acHcNkPkYE;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(acHcNkPkYE, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var NpLCWzHHVm = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "NpLCWzHHVm", text: "*******", marginTop: "10px" }), "NpLCWzHHVm");
            refCache["NpLCWzHHVm"] = NpLCWzHHVm;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(NpLCWzHHVm, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XRdMpGeNAH = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "XRdMpGeNAH", marginTop: "20px" }), "XRdMpGeNAH");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XRdMpGeNAH, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["XRdMpGeNAH"] = XRdMpGeNAH;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var nKWRwNQOFD = _this.context.system.actorOf(Button_1["default"].props({ id: "nKWRwNQOFD", text: "Cancel" }), "nKWRwNQOFD");
                    refCache["nKWRwNQOFD"] = nKWRwNQOFD;
                    return XRdMpGeNAH.ask(AbruComponent_1["default"].Commands.AddComponent(nKWRwNQOFD, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var mHjnZzOnlk = _this.context.system.actorOf(Button_1["default"].props({ id: "mHjnZzOnlk", text: "Ok", marginLeft: "20px" }), "mHjnZzOnlk");
                    refCache["mHjnZzOnlk"] = mHjnZzOnlk;
                    return XRdMpGeNAH.ask(AbruComponent_1["default"].Commands.AddComponent(mHjnZzOnlk, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["mHjnZzOnlk"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var dgOFvVwkwb = _this.context.system.actorOf(Label_1["default"].props({ id: "dgOFvVwkwb", text: "User" }), "dgOFvVwkwb");
            refCache["dgOFvVwkwb"] = dgOFvVwkwb;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(dgOFvVwkwb, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var lfuKjJPsNc = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "lfuKjJPsNc", text: _this.userName, marginTop: "10px" }), "lfuKjJPsNc");
            refCache["lfuKjJPsNc"] = lfuKjJPsNc;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(lfuKjJPsNc, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var NTiQEXVOZV = _this.context.system.actorOf(Label_1["default"].props({ id: "NTiQEXVOZV", text: "Password", marginTop: "30px" }), "NTiQEXVOZV");
            refCache["NTiQEXVOZV"] = NTiQEXVOZV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(NTiQEXVOZV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var LAaeJHClNn = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "LAaeJHClNn", text: "*******", marginTop: "10px" }), "LAaeJHClNn");
            refCache["LAaeJHClNn"] = LAaeJHClNn;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(LAaeJHClNn, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var fcyzzqPgfh = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "fcyzzqPgfh", marginTop: "20px" }), "fcyzzqPgfh");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(fcyzzqPgfh, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["fcyzzqPgfh"] = fcyzzqPgfh;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var OPRDeVAZfm = _this.context.system.actorOf(Button_1["default"].props({ id: "OPRDeVAZfm", text: "Cancel" }), "OPRDeVAZfm");
                    refCache["OPRDeVAZfm"] = OPRDeVAZfm;
                    return fcyzzqPgfh.ask(AbruComponent_1["default"].Commands.AddComponent(OPRDeVAZfm, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var czjTuXFRnX = _this.context.system.actorOf(Button_1["default"].props({ id: "czjTuXFRnX", text: "Ok", marginLeft: "20px" }), "czjTuXFRnX");
                    refCache["czjTuXFRnX"] = czjTuXFRnX;
                    return fcyzzqPgfh.ask(AbruComponent_1["default"].Commands.AddComponent(czjTuXFRnX, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["czjTuXFRnX"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var bwWEzStikI = _this.context.system.actorOf(Label_1["default"].props({ id: "bwWEzStikI", text: "User" }), "bwWEzStikI");
            refCache["bwWEzStikI"] = bwWEzStikI;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(bwWEzStikI, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var gWhdqsJRDx = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "gWhdqsJRDx", text: _this.userName, marginTop: "10px" }), "gWhdqsJRDx");
            refCache["gWhdqsJRDx"] = gWhdqsJRDx;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(gWhdqsJRDx, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var vwMgUoPviZ = _this.context.system.actorOf(Label_1["default"].props({ id: "vwMgUoPviZ", text: "Password", marginTop: "30px" }), "vwMgUoPviZ");
            refCache["vwMgUoPviZ"] = vwMgUoPviZ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(vwMgUoPviZ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var fYYnxqTYld = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "fYYnxqTYld", text: "*******", marginTop: "10px" }), "fYYnxqTYld");
            refCache["fYYnxqTYld"] = fYYnxqTYld;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(fYYnxqTYld, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var hSrgSxEOAt = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "hSrgSxEOAt", marginTop: "20px" }), "hSrgSxEOAt");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(hSrgSxEOAt, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["hSrgSxEOAt"] = hSrgSxEOAt;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var jqRlyrBwAg = _this.context.system.actorOf(Button_1["default"].props({ id: "jqRlyrBwAg", text: "Cancel" }), "jqRlyrBwAg");
                    refCache["jqRlyrBwAg"] = jqRlyrBwAg;
                    return hSrgSxEOAt.ask(AbruComponent_1["default"].Commands.AddComponent(jqRlyrBwAg, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var UsiIqHGNjs = _this.context.system.actorOf(Button_1["default"].props({ id: "UsiIqHGNjs", text: "Ok", marginLeft: "20px" }), "UsiIqHGNjs");
                    refCache["UsiIqHGNjs"] = UsiIqHGNjs;
                    return hSrgSxEOAt.ask(AbruComponent_1["default"].Commands.AddComponent(UsiIqHGNjs, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["UsiIqHGNjs"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var WbbzZsMtDl = _this.context.system.actorOf(Label_1["default"].props({ id: "WbbzZsMtDl", text: "User" }), "WbbzZsMtDl");
            refCache["WbbzZsMtDl"] = WbbzZsMtDl;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(WbbzZsMtDl, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var yhGRLxRNmN = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "yhGRLxRNmN", text: _this.userName, marginTop: "10px" }), "yhGRLxRNmN");
            refCache["yhGRLxRNmN"] = yhGRLxRNmN;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(yhGRLxRNmN, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var CqhXCTySVi = _this.context.system.actorOf(Label_1["default"].props({ id: "CqhXCTySVi", text: "Password", marginTop: "30px" }), "CqhXCTySVi");
            refCache["CqhXCTySVi"] = CqhXCTySVi;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(CqhXCTySVi, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var rdNNnmaUAP = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "rdNNnmaUAP", text: "*******", marginTop: "10px" }), "rdNNnmaUAP");
            refCache["rdNNnmaUAP"] = rdNNnmaUAP;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(rdNNnmaUAP, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XWQbszTVOK = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "XWQbszTVOK", marginTop: "20px" }), "XWQbszTVOK");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XWQbszTVOK, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["XWQbszTVOK"] = XWQbszTVOK;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var uBiNGTSYkL = _this.context.system.actorOf(Button_1["default"].props({ id: "uBiNGTSYkL", text: "Cancel" }), "uBiNGTSYkL");
                    refCache["uBiNGTSYkL"] = uBiNGTSYkL;
                    return XWQbszTVOK.ask(AbruComponent_1["default"].Commands.AddComponent(uBiNGTSYkL, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var ACNbFyBclv = _this.context.system.actorOf(Button_1["default"].props({ id: "ACNbFyBclv", text: "Ok", marginLeft: "20px" }), "ACNbFyBclv");
                    refCache["ACNbFyBclv"] = ACNbFyBclv;
                    return XWQbszTVOK.ask(AbruComponent_1["default"].Commands.AddComponent(ACNbFyBclv, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["ACNbFyBclv"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var IePlFZAtBz = _this.context.system.actorOf(Label_1["default"].props({ id: "IePlFZAtBz", text: "User" }), "IePlFZAtBz");
            refCache["IePlFZAtBz"] = IePlFZAtBz;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(IePlFZAtBz, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ACNNGjhUgT = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ACNNGjhUgT", text: _this.userName, marginTop: "10px" }), "ACNNGjhUgT");
            refCache["ACNNGjhUgT"] = ACNNGjhUgT;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ACNNGjhUgT, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XuweCKPmkj = _this.context.system.actorOf(Label_1["default"].props({ id: "XuweCKPmkj", text: "Password", marginTop: "30px" }), "XuweCKPmkj");
            refCache["XuweCKPmkj"] = XuweCKPmkj;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XuweCKPmkj, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XFSXgcOiYX = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "XFSXgcOiYX", text: "*******", marginTop: "10px" }), "XFSXgcOiYX");
            refCache["XFSXgcOiYX"] = XFSXgcOiYX;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XFSXgcOiYX, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var sDHETTZWnX = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "sDHETTZWnX", marginTop: "20px" }), "sDHETTZWnX");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(sDHETTZWnX, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["sDHETTZWnX"] = sDHETTZWnX;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var RUrwYoZOKR = _this.context.system.actorOf(Button_1["default"].props({ id: "RUrwYoZOKR", text: "Cancel" }), "RUrwYoZOKR");
                    refCache["RUrwYoZOKR"] = RUrwYoZOKR;
                    return sDHETTZWnX.ask(AbruComponent_1["default"].Commands.AddComponent(RUrwYoZOKR, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var DvDFdCPMVE = _this.context.system.actorOf(Button_1["default"].props({ id: "DvDFdCPMVE", text: "Ok", marginLeft: "20px" }), "DvDFdCPMVE");
                    refCache["DvDFdCPMVE"] = DvDFdCPMVE;
                    return sDHETTZWnX.ask(AbruComponent_1["default"].Commands.AddComponent(DvDFdCPMVE, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["DvDFdCPMVE"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var kQljyvoQVt = _this.context.system.actorOf(Label_1["default"].props({ id: "kQljyvoQVt", text: "User" }), "kQljyvoQVt");
            refCache["kQljyvoQVt"] = kQljyvoQVt;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kQljyvoQVt, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ryjTSAhBqN = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "ryjTSAhBqN", text: _this.userName, marginTop: "10px" }), "ryjTSAhBqN");
            refCache["ryjTSAhBqN"] = ryjTSAhBqN;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ryjTSAhBqN, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var MoxGFBrysa = _this.context.system.actorOf(Label_1["default"].props({ id: "MoxGFBrysa", text: "Password", marginTop: "30px" }), "MoxGFBrysa");
            refCache["MoxGFBrysa"] = MoxGFBrysa;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(MoxGFBrysa, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var wSrUABFGyj = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "wSrUABFGyj", text: "*******", marginTop: "10px" }), "wSrUABFGyj");
            refCache["wSrUABFGyj"] = wSrUABFGyj;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(wSrUABFGyj, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var XfJAGbfJlN = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "XfJAGbfJlN", marginTop: "20px" }), "XfJAGbfJlN");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(XfJAGbfJlN, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["XfJAGbfJlN"] = XfJAGbfJlN;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var QgFNGvgsXv = _this.context.system.actorOf(Button_1["default"].props({ id: "QgFNGvgsXv", text: "Cancel" }), "QgFNGvgsXv");
                    refCache["QgFNGvgsXv"] = QgFNGvgsXv;
                    return XfJAGbfJlN.ask(AbruComponent_1["default"].Commands.AddComponent(QgFNGvgsXv, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var OWifnKFHPH = _this.context.system.actorOf(Button_1["default"].props({ id: "OWifnKFHPH", text: "Ok", marginLeft: "20px" }), "OWifnKFHPH");
                    refCache["OWifnKFHPH"] = OWifnKFHPH;
                    return XfJAGbfJlN.ask(AbruComponent_1["default"].Commands.AddComponent(OWifnKFHPH, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["OWifnKFHPH"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var QJqaLTLnoV = _this.context.system.actorOf(Label_1["default"].props({ id: "QJqaLTLnoV", text: "User" }), "QJqaLTLnoV");
            refCache["QJqaLTLnoV"] = QJqaLTLnoV;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QJqaLTLnoV, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var mJsszfnTJH = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "mJsszfnTJH", text: _this.userName, marginTop: "10px" }), "mJsszfnTJH");
            refCache["mJsszfnTJH"] = mJsszfnTJH;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(mJsszfnTJH, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var MbAyBHvGSB = _this.context.system.actorOf(Label_1["default"].props({ id: "MbAyBHvGSB", text: "Password", marginTop: "30px" }), "MbAyBHvGSB");
            refCache["MbAyBHvGSB"] = MbAyBHvGSB;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(MbAyBHvGSB, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var cwrNFbmNDa = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "cwrNFbmNDa", text: "*******", marginTop: "10px" }), "cwrNFbmNDa");
            refCache["cwrNFbmNDa"] = cwrNFbmNDa;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(cwrNFbmNDa, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var EABAKXlSHK = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "EABAKXlSHK", marginTop: "20px" }), "EABAKXlSHK");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(EABAKXlSHK, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["EABAKXlSHK"] = EABAKXlSHK;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var btQEKgHAWA = _this.context.system.actorOf(Button_1["default"].props({ id: "btQEKgHAWA", text: "Cancel" }), "btQEKgHAWA");
                    refCache["btQEKgHAWA"] = btQEKgHAWA;
                    return EABAKXlSHK.ask(AbruComponent_1["default"].Commands.AddComponent(btQEKgHAWA, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var QWtljPFYGh = _this.context.system.actorOf(Button_1["default"].props({ id: "QWtljPFYGh", text: "Ok", marginLeft: "20px" }), "QWtljPFYGh");
                    refCache["QWtljPFYGh"] = QWtljPFYGh;
                    return EABAKXlSHK.ask(AbruComponent_1["default"].Commands.AddComponent(QWtljPFYGh, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["QWtljPFYGh"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var eHnrOlxeaF = _this.context.system.actorOf(Label_1["default"].props({ id: "eHnrOlxeaF", text: "User" }), "eHnrOlxeaF");
            refCache["eHnrOlxeaF"] = eHnrOlxeaF;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(eHnrOlxeaF, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QWbZNuHAEK = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "QWbZNuHAEK", text: _this.userName, marginTop: "10px" }), "QWbZNuHAEK");
            refCache["QWbZNuHAEK"] = QWbZNuHAEK;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QWbZNuHAEK, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KnrvcxwEgn = _this.context.system.actorOf(Label_1["default"].props({ id: "KnrvcxwEgn", text: "Password", marginTop: "30px" }), "KnrvcxwEgn");
            refCache["KnrvcxwEgn"] = KnrvcxwEgn;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KnrvcxwEgn, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VHJEPxNEGo = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "VHJEPxNEGo", text: "*******", marginTop: "10px" }), "VHJEPxNEGo");
            refCache["VHJEPxNEGo"] = VHJEPxNEGo;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VHJEPxNEGo, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var isvuyJLhwk = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "isvuyJLhwk", marginTop: "20px" }), "isvuyJLhwk");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(isvuyJLhwk, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["isvuyJLhwk"] = isvuyJLhwk;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var wjgfRMYlmr = _this.context.system.actorOf(Button_1["default"].props({ id: "wjgfRMYlmr", text: "Cancel" }), "wjgfRMYlmr");
                    refCache["wjgfRMYlmr"] = wjgfRMYlmr;
                    return isvuyJLhwk.ask(AbruComponent_1["default"].Commands.AddComponent(wjgfRMYlmr, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var yZofZJtaUc = _this.context.system.actorOf(Button_1["default"].props({ id: "yZofZJtaUc", text: "Ok", marginLeft: "20px" }), "yZofZJtaUc");
                    refCache["yZofZJtaUc"] = yZofZJtaUc;
                    return isvuyJLhwk.ask(AbruComponent_1["default"].Commands.AddComponent(yZofZJtaUc, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["yZofZJtaUc"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var JKwWuGRamx = _this.context.system.actorOf(Label_1["default"].props({ id: "JKwWuGRamx", text: "User" }), "JKwWuGRamx");
            refCache["JKwWuGRamx"] = JKwWuGRamx;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(JKwWuGRamx, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var AfklLZwXYF = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "AfklLZwXYF", text: _this.userName, marginTop: "10px" }), "AfklLZwXYF");
            refCache["AfklLZwXYF"] = AfklLZwXYF;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(AfklLZwXYF, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ZjakxAXUdv = _this.context.system.actorOf(Label_1["default"].props({ id: "ZjakxAXUdv", text: "Password", marginTop: "30px" }), "ZjakxAXUdv");
            refCache["ZjakxAXUdv"] = ZjakxAXUdv;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ZjakxAXUdv, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var sjJeFIVsdS = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "sjJeFIVsdS", text: "*******", marginTop: "10px" }), "sjJeFIVsdS");
            refCache["sjJeFIVsdS"] = sjJeFIVsdS;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(sjJeFIVsdS, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var mULhFZAujR = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "mULhFZAujR", marginTop: "20px" }), "mULhFZAujR");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(mULhFZAujR, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["mULhFZAujR"] = mULhFZAujR;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var XTFGHZDBtj = _this.context.system.actorOf(Button_1["default"].props({ id: "XTFGHZDBtj", text: "Cancel" }), "XTFGHZDBtj");
                    refCache["XTFGHZDBtj"] = XTFGHZDBtj;
                    return mULhFZAujR.ask(AbruComponent_1["default"].Commands.AddComponent(XTFGHZDBtj, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var AIZSQdVXTr = _this.context.system.actorOf(Button_1["default"].props({ id: "AIZSQdVXTr", text: "Ok", marginLeft: "20px" }), "AIZSQdVXTr");
                    refCache["AIZSQdVXTr"] = AIZSQdVXTr;
                    return mULhFZAujR.ask(AbruComponent_1["default"].Commands.AddComponent(AIZSQdVXTr, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["AIZSQdVXTr"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var QZZASsGHDy = _this.context.system.actorOf(Label_1["default"].props({ id: "QZZASsGHDy", text: "User" }), "QZZASsGHDy");
            refCache["QZZASsGHDy"] = QZZASsGHDy;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QZZASsGHDy, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var VMOvhANIkg = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "VMOvhANIkg", text: _this.userName, marginTop: "10px" }), "VMOvhANIkg");
            refCache["VMOvhANIkg"] = VMOvhANIkg;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(VMOvhANIkg, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var AcgXpZvZmc = _this.context.system.actorOf(Label_1["default"].props({ id: "AcgXpZvZmc", text: "Password", marginTop: "30px" }), "AcgXpZvZmc");
            refCache["AcgXpZvZmc"] = AcgXpZvZmc;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(AcgXpZvZmc, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var CJnmcWozIE = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "CJnmcWozIE", text: "*******", marginTop: "10px" }), "CJnmcWozIE");
            refCache["CJnmcWozIE"] = CJnmcWozIE;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(CJnmcWozIE, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ArqoCrTwvK = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "ArqoCrTwvK", marginTop: "20px" }), "ArqoCrTwvK");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ArqoCrTwvK, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["ArqoCrTwvK"] = ArqoCrTwvK;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var UjqPZytSvP = _this.context.system.actorOf(Button_1["default"].props({ id: "UjqPZytSvP", text: "Cancel" }), "UjqPZytSvP");
                    refCache["UjqPZytSvP"] = UjqPZytSvP;
                    return ArqoCrTwvK.ask(AbruComponent_1["default"].Commands.AddComponent(UjqPZytSvP, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var sQkquhmKkh = _this.context.system.actorOf(Button_1["default"].props({ id: "sQkquhmKkh", text: "Ok", marginLeft: "20px" }), "sQkquhmKkh");
                    refCache["sQkquhmKkh"] = sQkquhmKkh;
                    return ArqoCrTwvK.ask(AbruComponent_1["default"].Commands.AddComponent(sQkquhmKkh, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["sQkquhmKkh"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var HcPsCPNyEw = _this.context.system.actorOf(Label_1["default"].props({ id: "HcPsCPNyEw", text: "User" }), "HcPsCPNyEw");
            refCache["HcPsCPNyEw"] = HcPsCPNyEw;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(HcPsCPNyEw, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var OknvtrRqyu = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "OknvtrRqyu", text: _this.userName, marginTop: "10px" }), "OknvtrRqyu");
            refCache["OknvtrRqyu"] = OknvtrRqyu;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(OknvtrRqyu, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var PrpfLkaXMX = _this.context.system.actorOf(Label_1["default"].props({ id: "PrpfLkaXMX", text: "Password", marginTop: "30px" }), "PrpfLkaXMX");
            refCache["PrpfLkaXMX"] = PrpfLkaXMX;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PrpfLkaXMX, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var fBqbNkzroW = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "fBqbNkzroW", text: "*******", marginTop: "10px" }), "fBqbNkzroW");
            refCache["fBqbNkzroW"] = fBqbNkzroW;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(fBqbNkzroW, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var kupifbIGZz = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "kupifbIGZz", marginTop: "20px" }), "kupifbIGZz");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kupifbIGZz, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["kupifbIGZz"] = kupifbIGZz;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var FFAjkMuVUE = _this.context.system.actorOf(Button_1["default"].props({ id: "FFAjkMuVUE", text: "Cancel" }), "FFAjkMuVUE");
                    refCache["FFAjkMuVUE"] = FFAjkMuVUE;
                    return kupifbIGZz.ask(AbruComponent_1["default"].Commands.AddComponent(FFAjkMuVUE, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var gccqfyaPpN = _this.context.system.actorOf(Button_1["default"].props({ id: "gccqfyaPpN", text: "Ok", marginLeft: "20px" }), "gccqfyaPpN");
                    refCache["gccqfyaPpN"] = gccqfyaPpN;
                    return kupifbIGZz.ask(AbruComponent_1["default"].Commands.AddComponent(gccqfyaPpN, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["gccqfyaPpN"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var OxVenwCwGW = _this.context.system.actorOf(Label_1["default"].props({ id: "OxVenwCwGW", text: "User" }), "OxVenwCwGW");
            refCache["OxVenwCwGW"] = OxVenwCwGW;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(OxVenwCwGW, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var NeKUHEyxfd = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "NeKUHEyxfd", text: _this.userName, marginTop: "10px" }), "NeKUHEyxfd");
            refCache["NeKUHEyxfd"] = NeKUHEyxfd;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(NeKUHEyxfd, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var NjguNJRisC = _this.context.system.actorOf(Label_1["default"].props({ id: "NjguNJRisC", text: "Password", marginTop: "30px" }), "NjguNJRisC");
            refCache["NjguNJRisC"] = NjguNJRisC;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(NjguNJRisC, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var CYevVTZGFA = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "CYevVTZGFA", text: "*******", marginTop: "10px" }), "CYevVTZGFA");
            refCache["CYevVTZGFA"] = CYevVTZGFA;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(CYevVTZGFA, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var PtRYMJYuaM = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "PtRYMJYuaM", marginTop: "20px" }), "PtRYMJYuaM");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(PtRYMJYuaM, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["PtRYMJYuaM"] = PtRYMJYuaM;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var pUGCNXnXoB = _this.context.system.actorOf(Button_1["default"].props({ id: "pUGCNXnXoB", text: "Cancel" }), "pUGCNXnXoB");
                    refCache["pUGCNXnXoB"] = pUGCNXnXoB;
                    return PtRYMJYuaM.ask(AbruComponent_1["default"].Commands.AddComponent(pUGCNXnXoB, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var BxGAZWxzwA = _this.context.system.actorOf(Button_1["default"].props({ id: "BxGAZWxzwA", text: "Ok", marginLeft: "20px" }), "BxGAZWxzwA");
                    refCache["BxGAZWxzwA"] = BxGAZWxzwA;
                    return PtRYMJYuaM.ask(AbruComponent_1["default"].Commands.AddComponent(BxGAZWxzwA, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["BxGAZWxzwA"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var DwYGjOYZdZ = _this.context.system.actorOf(Label_1["default"].props({ id: "DwYGjOYZdZ", text: "User" }), "DwYGjOYZdZ");
            refCache["DwYGjOYZdZ"] = DwYGjOYZdZ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(DwYGjOYZdZ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var nvYOpmLgMh = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "nvYOpmLgMh", text: _this.userName, marginTop: "10px" }), "nvYOpmLgMh");
            refCache["nvYOpmLgMh"] = nvYOpmLgMh;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(nvYOpmLgMh, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var iojyYsMZmp = _this.context.system.actorOf(Label_1["default"].props({ id: "iojyYsMZmp", text: "Password", marginTop: "30px" }), "iojyYsMZmp");
            refCache["iojyYsMZmp"] = iojyYsMZmp;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(iojyYsMZmp, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var MPYJkFmoTe = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "MPYJkFmoTe", text: "*******", marginTop: "10px" }), "MPYJkFmoTe");
            refCache["MPYJkFmoTe"] = MPYJkFmoTe;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(MPYJkFmoTe, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var RxbSDDnoZu = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "RxbSDDnoZu", marginTop: "20px" }), "RxbSDDnoZu");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(RxbSDDnoZu, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["RxbSDDnoZu"] = RxbSDDnoZu;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var thRGyLMHDI = _this.context.system.actorOf(Button_1["default"].props({ id: "thRGyLMHDI", text: "Cancel" }), "thRGyLMHDI");
                    refCache["thRGyLMHDI"] = thRGyLMHDI;
                    return RxbSDDnoZu.ask(AbruComponent_1["default"].Commands.AddComponent(thRGyLMHDI, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var yNnEXaxIzj = _this.context.system.actorOf(Button_1["default"].props({ id: "yNnEXaxIzj", text: "Ok", marginLeft: "20px" }), "yNnEXaxIzj");
                    refCache["yNnEXaxIzj"] = yNnEXaxIzj;
                    return RxbSDDnoZu.ask(AbruComponent_1["default"].Commands.AddComponent(yNnEXaxIzj, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["yNnEXaxIzj"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var jFSkSCGQly = _this.context.system.actorOf(Label_1["default"].props({ id: "jFSkSCGQly", text: "User" }), "jFSkSCGQly");
            refCache["jFSkSCGQly"] = jFSkSCGQly;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(jFSkSCGQly, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var BFiMMobMAW = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "BFiMMobMAW", text: _this.userName, marginTop: "10px" }), "BFiMMobMAW");
            refCache["BFiMMobMAW"] = BFiMMobMAW;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(BFiMMobMAW, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var omELUQucuE = _this.context.system.actorOf(Label_1["default"].props({ id: "omELUQucuE", text: "Password", marginTop: "30px" }), "omELUQucuE");
            refCache["omELUQucuE"] = omELUQucuE;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(omELUQucuE, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var MsYZlcImZQ = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "MsYZlcImZQ", text: "*******", marginTop: "10px" }), "MsYZlcImZQ");
            refCache["MsYZlcImZQ"] = MsYZlcImZQ;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(MsYZlcImZQ, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var RAoDyIHkMt = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "RAoDyIHkMt", marginTop: "20px" }), "RAoDyIHkMt");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(RAoDyIHkMt, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["RAoDyIHkMt"] = RAoDyIHkMt;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var UKZMxokiLr = _this.context.system.actorOf(Button_1["default"].props({ id: "UKZMxokiLr", text: "Cancel" }), "UKZMxokiLr");
                    refCache["UKZMxokiLr"] = UKZMxokiLr;
                    return RAoDyIHkMt.ask(AbruComponent_1["default"].Commands.AddComponent(UKZMxokiLr, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var QKmtHkKWyh = _this.context.system.actorOf(Button_1["default"].props({ id: "QKmtHkKWyh", text: "Ok", marginLeft: "20px" }), "QKmtHkKWyh");
                    refCache["QKmtHkKWyh"] = QKmtHkKWyh;
                    return RAoDyIHkMt.ask(AbruComponent_1["default"].Commands.AddComponent(QKmtHkKWyh, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["QKmtHkKWyh"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .flatMap(function (_) {
            var kVjzLhoBHj = _this.context.system.actorOf(Label_1["default"].props({ id: "kVjzLhoBHj", text: "User" }), "kVjzLhoBHj");
            refCache["kVjzLhoBHj"] = kVjzLhoBHj;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(kVjzLhoBHj, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QQgWdalpOU = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "QQgWdalpOU", text: _this.userName, marginTop: "10px" }), "QQgWdalpOU");
            refCache["QQgWdalpOU"] = QQgWdalpOU;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QQgWdalpOU, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var ptAcNyVkKM = _this.context.system.actorOf(Label_1["default"].props({ id: "ptAcNyVkKM", text: "Password", marginTop: "30px" }), "ptAcNyVkKM");
            refCache["ptAcNyVkKM"] = ptAcNyVkKM;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(ptAcNyVkKM, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var QlQVBlweyc = _this.context.system.actorOf(TextEdit_1["default"].props({ id: "QlQVBlweyc", text: "*******", marginTop: "10px" }), "QlQVBlweyc");
            refCache["QlQVBlweyc"] = QlQVBlweyc;
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(QlQVBlweyc, {}), _this.context.self);
        })
            .flatMap(function (_) {
            var KefnusnxAA = _this.context.system.actorOf(HorizontalLayout_1["default"].props({ id: "KefnusnxAA", marginTop: "20px" }), "KefnusnxAA");
            return SHKgYLcHwF.ask(AbruComponent_1["default"].Commands.AddComponent(KefnusnxAA, {}), _this.context.self)
                .flatMap(function (_) {
                refCache["KefnusnxAA"] = KefnusnxAA;
                return Future_1["default"].async(function () { return 0; }, _this.context.system.dispatcher)
                    .flatMap(function (_) {
                    var OTKzPMXpZN = _this.context.system.actorOf(Button_1["default"].props({ id: "OTKzPMXpZN", text: "Cancel" }), "OTKzPMXpZN");
                    refCache["OTKzPMXpZN"] = OTKzPMXpZN;
                    return KefnusnxAA.ask(AbruComponent_1["default"].Commands.AddComponent(OTKzPMXpZN, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    var ouvfJIMlYU = _this.context.system.actorOf(Button_1["default"].props({ id: "ouvfJIMlYU", text: "Ok", marginLeft: "20px" }), "ouvfJIMlYU");
                    refCache["ouvfJIMlYU"] = ouvfJIMlYU;
                    return KefnusnxAA.ask(AbruComponent_1["default"].Commands.AddComponent(ouvfJIMlYU, {}), _this.context.self);
                })
                    .flatMap(function (_) {
                    return refCache["ouvfJIMlYU"].ask(AbruComponent_1["default"].Commands.SubscribeForEvents(["OnClick", "OnFocus"], self));
                });
            });
        })
            .onComplete(function (_) {
            console.log("Render time = " + (Date.now() - profStart).toString());
            sender.tell(AbruComponent_1["default"].Responses.Ok(), _this.context.self);
        });
    };
    return RegistrationPage;
}(AbruComponent_1["default"]));
exports["default"] = RegistrationPage;


/***/ }),

/***/ "./src/abru/gui/Button.ts":
/*!********************************!*\
  !*** ./src/abru/gui/Button.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var AbruComponent_1 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Props_1 = __webpack_require__(/*! ../../actors/Props */ "./src/actors/Props.ts");
var AbruComponent_2 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Option_1 = __webpack_require__(/*! ../../monads/Option */ "./src/monads/Option.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../common/StringBuilder */ "./src/common/StringBuilder.ts");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(cProps) {
        var _this = _super.call(this, cProps) || this;
        _this.text = "";
        _this.renderParams["marginLeft"] = Option_1.Option.from(cProps["marginLeft"]).getOrElse("0px");
        _this.renderParams["marginRight"] = Option_1.Option.from(cProps["marginRight"]).getOrElse("0px");
        _this.renderParams["marginTop"] = Option_1.Option.from(cProps["marginTop"]).getOrElse("0px");
        _this.renderParams["marginBottom"] = Option_1.Option.from(cProps["marginBottom"]).getOrElse("0px");
        _this.text = cProps["text"];
        return _this;
    }
    Button.props = function (cProps) {
        return new Props_1["default"](new Button(cProps));
    };
    Button.prototype.receive = function (msg) {
        if (msg instanceof AbruComponent_1.Render) {
            this.render(msg.id);
        }
        else if (msg instanceof AbruComponent_1.SubscribeForEvents) {
            this.subscribeForEvents(msg.events, msg.ref);
        }
        else {
            return false;
        }
        return true;
    };
    Button.prototype.subscribeForEvents = function (events, ref) {
        var _this = this;
        console.log("SubscribeForEvent");
        events.forEach(function (event) {
            _this.subscriptions.subscribe(event, ref);
            if (event === "OnClick")
                _this.sWrapper.click(function (e) { return _this.handleDomEvent("OnClick", e); });
        });
        this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
    };
    Button.prototype.render = function (parent) {
        var wrapperStyle = new StringBuilder_1["default"]()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";")
            .mkString();
        this.sParent = $("#" + parent);
        this.sParent.append("<div style=\"" + wrapperStyle + "\" class=\"abru-button-default\" id=\"" + this.id + "_wrapper\"><p>" + this.text + "</p></div>");
        this.sWrapper = $("#" + this.id + "_wrapper");
        this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
    };
    Button.prototype.mounted = function () {
    };
    return Button;
}(AbruComponent_2["default"]));
exports["default"] = Button;


/***/ }),

/***/ "./src/abru/gui/HorizontalLayout.ts":
/*!******************************************!*\
  !*** ./src/abru/gui/HorizontalLayout.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var AbruComponent_1 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Props_1 = __webpack_require__(/*! ../../actors/Props */ "./src/actors/Props.ts");
var AbruComponent_2 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Option_1 = __webpack_require__(/*! ../../monads/Option */ "./src/monads/Option.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../common/StringBuilder */ "./src/common/StringBuilder.ts");
var HorizontalLayout = /** @class */ (function (_super) {
    __extends(HorizontalLayout, _super);
    function HorizontalLayout(cProps) {
        var _this = _super.call(this, cProps) || this;
        _this.renderParams["marginLeft"] = Option_1.Option.from(cProps["marginLeft"]).getOrElse("0px");
        _this.renderParams["marginRight"] = Option_1.Option.from(cProps["marginRight"]).getOrElse("0px");
        _this.renderParams["marginTop"] = Option_1.Option.from(cProps["marginTop"]).getOrElse("0px");
        _this.renderParams["marginBottom"] = Option_1.Option.from(cProps["marginBottom"]).getOrElse("0px");
        return _this;
    }
    HorizontalLayout.props = function (cProps) {
        return new Props_1["default"](new HorizontalLayout(cProps));
    };
    HorizontalLayout.prototype.receive = function (msg) {
        if (msg instanceof AbruComponent_1.Render) {
            this.render(msg.id);
        }
        else if (msg instanceof AbruComponent_1.AddComponent) {
            this.addComponent(msg.component);
        }
        else {
            return false;
        }
        return true;
    };
    HorizontalLayout.prototype.render = function (id) {
        var wrapperStyle = new StringBuilder_1["default"]()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";")
            .mkString();
        $("#" + id).append("<div style=\"display: flex; " + wrapperStyle + "\" id=\"" + this.id + "\"></div>");
        this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
    };
    HorizontalLayout.prototype.addComponent = function (component) {
        var _this = this;
        this.pipe(function () { return component.ask(new AbruComponent_1.Render(_this.id), _this.context.self); }, this.context.sender);
    };
    HorizontalLayout.prototype.mounted = function () {
    };
    return HorizontalLayout;
}(AbruComponent_2["default"]));
exports["default"] = HorizontalLayout;


/***/ }),

/***/ "./src/abru/gui/Label.ts":
/*!*******************************!*\
  !*** ./src/abru/gui/Label.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var AbruComponent_1 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Props_1 = __webpack_require__(/*! ../../actors/Props */ "./src/actors/Props.ts");
var AbruComponent_2 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Option_1 = __webpack_require__(/*! ../../monads/Option */ "./src/monads/Option.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../common/StringBuilder */ "./src/common/StringBuilder.ts");
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(cProps) {
        var _this = _super.call(this, cProps) || this;
        _this.text = "";
        _this.renderParams["marginLeft"] = Option_1.Option.from(cProps["marginLeft"]).getOrElse("0px");
        _this.renderParams["marginRight"] = Option_1.Option.from(cProps["marginRight"]).getOrElse("0px");
        _this.renderParams["marginTop"] = Option_1.Option.from(cProps["marginTop"]).getOrElse("0px");
        _this.renderParams["marginBottom"] = Option_1.Option.from(cProps["marginBottom"]).getOrElse("0px");
        _this.text = cProps["text"];
        return _this;
    }
    Label.props = function (cProps) {
        return new Props_1["default"](new Label(cProps));
    };
    Label.prototype.receive = function (msg) {
        if (msg instanceof AbruComponent_1.Render) {
            this.render(msg.id);
        }
        else {
            return false;
        }
        return true;
    };
    Label.prototype.render = function (id) {
        var wrapperStyle = new StringBuilder_1["default"]()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";")
            .mkString();
        $("#" + id).append("<p id=\"" + this.id + "\" style=\"" + wrapperStyle + "\" class=\"abru-label-default\"\">" + this.text + "</p>");
        this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
    };
    Label.prototype.mounted = function () {
    };
    return Label;
}(AbruComponent_2["default"]));
exports["default"] = Label;


/***/ }),

/***/ "./src/abru/gui/TextEdit.ts":
/*!**********************************!*\
  !*** ./src/abru/gui/TextEdit.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var AbruComponent_1 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Props_1 = __webpack_require__(/*! ../../actors/Props */ "./src/actors/Props.ts");
var AbruComponent_2 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Option_1 = __webpack_require__(/*! ../../monads/Option */ "./src/monads/Option.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../common/StringBuilder */ "./src/common/StringBuilder.ts");
var TextEdit = /** @class */ (function (_super) {
    __extends(TextEdit, _super);
    function TextEdit(cProps) {
        var _this = _super.call(this, cProps) || this;
        _this.text = "";
        _this.renderParams["marginLeft"] = Option_1.Option.from(cProps["marginLeft"]).getOrElse("0px");
        _this.renderParams["marginRight"] = Option_1.Option.from(cProps["marginRight"]).getOrElse("0px");
        _this.renderParams["marginTop"] = Option_1.Option.from(cProps["marginTop"]).getOrElse("0px");
        _this.renderParams["marginBottom"] = Option_1.Option.from(cProps["marginBottom"]).getOrElse("0px");
        _this.text = Option_1.Option.from(cProps["text"]).getOrElse("").get();
        return _this;
    }
    TextEdit.props = function (cProps) {
        return new Props_1["default"](new TextEdit(cProps));
    };
    TextEdit.prototype.receive = function (msg) {
        if (msg instanceof AbruComponent_1.Render) {
            this.render(msg.id);
        }
        else {
            return false;
        }
        return true;
    };
    TextEdit.prototype.render = function (parent) {
        var wrapperStyle = new StringBuilder_1["default"]()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";")
            .mkString();
        var sParent = $("#" + parent);
        sParent.append("<div id=\"" + this.id + "_wrapper\" style=\"" + wrapperStyle + "\"><input class=\"abru-text_edit-default\" id=\"" + this.id + "_input\" value=\"" + this.text + "\"/></div>");
        var sWrapper = $("#" + this.id + "_wrapper");
        var sInput = $("#" + this.id + "_input");
        sWrapper.height(sInput.height() + 5 + "px");
        this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
    };
    TextEdit.prototype.mounted = function () {
    };
    return TextEdit;
}(AbruComponent_2["default"]));
exports["default"] = TextEdit;


/***/ }),

/***/ "./src/abru/gui/VerticalLayout.ts":
/*!****************************************!*\
  !*** ./src/abru/gui/VerticalLayout.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var AbruComponent_1 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Props_1 = __webpack_require__(/*! ../../actors/Props */ "./src/actors/Props.ts");
var AbruComponent_2 = __webpack_require__(/*! ../components/AbruComponent */ "./src/abru/components/AbruComponent.ts");
var Option_1 = __webpack_require__(/*! ../../monads/Option */ "./src/monads/Option.ts");
var StringBuilder_1 = __webpack_require__(/*! ../../common/StringBuilder */ "./src/common/StringBuilder.ts");
var VerticalLayout = /** @class */ (function (_super) {
    __extends(VerticalLayout, _super);
    function VerticalLayout(cProps) {
        var _this = _super.call(this, cProps) || this;
        _this.renderParams["marginLeft"] = Option_1.Option.from(cProps["marginLeft"]).getOrElse("0px");
        _this.renderParams["marginRight"] = Option_1.Option.from(cProps["marginRight"]).getOrElse("0px");
        _this.renderParams["marginTop"] = Option_1.Option.from(cProps["marginTop"]).getOrElse("0px");
        _this.renderParams["marginBottom"] = Option_1.Option.from(cProps["marginBottom"]).getOrElse("0px");
        return _this;
    }
    VerticalLayout.props = function (cProps) {
        return new Props_1["default"](new VerticalLayout(cProps));
    };
    VerticalLayout.prototype.receive = function (msg) {
        if (msg instanceof AbruComponent_1.Render) {
            this.render(msg.id);
        }
        else if (msg instanceof AbruComponent_1.SubscribeForEvents) {
            console.log("VerticalLayout - SubscribeForEvent");
            this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
        }
        else if (msg instanceof AbruComponent_1.AddComponent) {
            this.addComponent(msg.component);
        }
        else {
            return false;
        }
        return true;
    };
    VerticalLayout.prototype.render = function (id) {
        var wrapperStyle = new StringBuilder_1["default"]()
            .put("margin: ")
            .put(this.renderParams["marginTop"].get()).put(" ")
            .put(this.renderParams["marginRight"].get()).put(" ")
            .put(this.renderParams["marginBottom"].get()).put(" ")
            .put(this.renderParams["marginLeft"].get()).put(";")
            .mkString();
        $("#" + id).append("<div id=\"" + this.id + "\" style=\"" + wrapperStyle + "\"></div>");
        this.context.sender.tell(AbruComponent_2["default"].Responses.Ok(), this.context.self);
    };
    VerticalLayout.prototype.addComponent = function (component) {
        var _this = this;
        this.pipe(function () { return component.ask(new AbruComponent_1.Render(_this.id), _this.context.self); }, this.context.sender);
    };
    VerticalLayout.prototype.mounted = function () {
    };
    return VerticalLayout;
}(AbruComponent_2["default"]));
exports["default"] = VerticalLayout;


/***/ }),

/***/ "./src/actors/Actor.ts":
/*!*****************************!*\
  !*** ./src/actors/Actor.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var ActorContext_1 = __webpack_require__(/*! ./ActorContext */ "./src/actors/ActorContext.ts");
var Message_1 = __webpack_require__(/*! ./Message */ "./src/actors/Message.ts");
var Timers_1 = __webpack_require__(/*! ./Timers */ "./src/actors/Timers.ts");
/** Superclass actor Any class that assumes participation in the logic of communication in the
 *  actor system must implement this class. */
var Actor = /** @class */ (function () {
    function Actor() {
        /** Current actor context */
        this.context = new ActorContext_1["default"]();
    }
    /** Return timers scheduler */
    Actor.prototype.timers = function () {
        if (!this._timers)
            this._timers = new Timers_1["default"]();
        return this._timers;
    };
    /** Actor start hook. This method calls after full initialization of the actor before removing
     *  the flag of the actor stop (which is set initially when creating the actor cell). In fact,
     *  after exiting this method, the cell of the actor allows receiving incoming messages. At
     *  this stage, the context of the actor is fully initialized and can be used. */
    Actor.prototype.preStart = function () { };
    /** Actor stop hook. This method is called after the actor is completely stopped, which implies
     *  stopping the cell, mailbox and removing all scheduled tasks. In practice, this is the last
     *  point of the application code, in which the object of the actor is available to interact with
     *  its state. */
    Actor.prototype.postStop = function () { };
    Actor.prototype.pipe = function (f, to) {
        var sender = this.context.sender;
        f().onComplete(function (v) {
            if (v.isSuccess()) {
                to.tell(v.get(), sender);
            }
        });
    };
    return Actor;
}());
exports.Actor = Actor;
/**  Stops actor. When a message is sent to some actor directly, it is put in the mailbox as a
 *   regular message. After it has been processed, the actor will be stopped, and all messages in
 *   the mailbox after the PoisonPill will be drain to the DeadLetter. This message is also used
 *   implicitly when calling context.system.stop. In general terms, this operation prohibits the
 *   reception of new messages by the actor, clears the mailbox and puts the PoisonPill in it.
 *   After that, the actor will process it and self-destruct. Because the message is processed by
 *   an internal handler, it never reaches the receive method.*/
var PoisonPill = /** @class */ (function (_super) {
    __extends(PoisonPill, _super);
    function PoisonPill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PoisonPill;
}(Message_1["default"]));
exports.PoisonPill = PoisonPill;


/***/ }),

/***/ "./src/actors/ActorCell.ts":
/*!*********************************!*\
  !*** ./src/actors/ActorCell.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Envelope_1 = __webpack_require__(/*! ./Envelope */ "./src/actors/Envelope.ts");
var ActorRef_1 = __webpack_require__(/*! ./ActorRef */ "./src/actors/ActorRef.ts");
/** This object is essentially the actor itself. It encapsulate in self actor object, mailbox and
 *  dispatcher. Contains references to the actor system and other elements of the system. */
var ActorCell = /** @class */ (function () {
    function ActorCell(path, actor, system, dispatcher, mailbox) {
        /** Stop flag. See the start method description for more details */
        this.stopped = true;
        this.path = path;
        this.actor = actor;
        this.mailbox = mailbox;
        this.dispatcher = dispatcher;
        this.system = system;
    }
    /** Starts the actor. Creates him context, run preStart hook and permits message receiving
     *  through dropping the stopped flag. */
    ActorCell.prototype.start = function () {
        if (this.actor) { // Because it may be a synthetic actor, such as DeadLetters
            this.actor.context.self = new ActorRef_1["default"](this);
            this.actor.context.sender = this.system.deadLetters;
            this.actor.context.system = this.system;
            this.actor.preStart();
        }
        this.stopped = false;
    };
    /** Stops the actor. Prohibits receiving new messages and calls the postStop hook. */
    ActorCell.prototype.stop = function () {
        this.stopped = true;
        this.actor.postStop();
    };
    /** Suspends the actor. Prohibits receiving new messages */
    ActorCell.prototype.suspend = function () {
        this.suspended = true;
    };
    /** Sends the message to the actor. Creates new envelope with the message and indicates to
     *  dispatcher to schedule execution of this envelope. Message sends to the actors may be done,
     *  only if flags suspended and stopped will be dropped. Otherwise, the message will be dropped
     *  to deadLetter.*/
    ActorCell.prototype.send = function (msg, self) {
        if (this.stopped || this.suspended) {
            this.system.deadLetters.tell(msg, self);
        }
        else {
            var envelope = new Envelope_1["default"](self, msg);
            this.dispatcher.dispatch(this, envelope);
        }
    };
    /** Performs action identical to the send method do, but with ignoring state of the stopping flags. */
    ActorCell.prototype.forceSend = function (msg, self) {
        var envelope = new Envelope_1["default"](self, msg);
        this.dispatcher.dispatch(this, envelope);
    };
    return ActorCell;
}());
exports["default"] = ActorCell;


/***/ }),

/***/ "./src/actors/ActorContext.ts":
/*!************************************!*\
  !*** ./src/actors/ActorContext.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/** This object is used to describe the environment of the actor when processing the
 *  message.*/
var ActorContext = /** @class */ (function () {
    function ActorContext() {
    }
    return ActorContext;
}());
exports["default"] = ActorContext;


/***/ }),

/***/ "./src/actors/ActorPath.ts":
/*!*********************************!*\
  !*** ./src/actors/ActorPath.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/** Actor path representation inside the actors system */
var ActorPath = /** @class */ (function () {
    function ActorPath(name) {
        this.name = name;
    }
    ActorPath.prototype.toString = function () {
        return "/" + this.name;
    };
    return ActorPath;
}());
exports["default"] = ActorPath;


/***/ }),

/***/ "./src/actors/ActorRef.ts":
/*!********************************!*\
  !*** ./src/actors/ActorRef.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Actor_1 = __webpack_require__(/*! ./Actor */ "./src/actors/Actor.ts");
var Message_1 = __webpack_require__(/*! ./Message */ "./src/actors/Message.ts");
var Props_1 = __webpack_require__(/*! ./Props */ "./src/actors/Props.ts");
var CompletablePromise_1 = __webpack_require__(/*! ../future/CompletablePromise */ "./src/future/CompletablePromise.ts");
var Duration_1 = __webpack_require__(/*! ../async/Duration */ "./src/async/Duration.ts");
var Errors_1 = __webpack_require__(/*! ./Errors */ "./src/actors/Errors.ts");
var Object_1 = __webpack_require__(/*! ../common/Object */ "./src/common/Object.ts");
/** Reference to instance of some actor. It is an interface for interacting with the internal
 *  logic of the actor cell. */
var ActorRef = /** @class */ (function (_super) {
    __extends(ActorRef, _super);
    /** Creates a new reference. This method should never be invoked by application code.
     *
     * @param {ActorCell} cell owned actor cell
     */
    function ActorRef(cell) {
        var _this = _super.call(this) || this;
        _this.cell = cell;
        return _this;
    }
    /** Send a message to some actor on the principle of send and forget.
     *
     * @param msg message for send
     * @param {ActorRef} self self reference. If the sender value is null, then the recipient in
     *        the context.sender field will also be null.
     */
    ActorRef.prototype.tell = function (msg, self) {
        if (self === void 0) { self = null; }
        this.cell.send(msg, self);
    };
    /** Send a message to some actor and get a reply message from him. The result of this call
     *  will be a future, which will be filled in with the message received in response or it will
     *  fail if the actor does not send a response within the specified timeout.
     *
     *  Explanation of the internal logic of this method. This method creates a CompletablePromise
     *  and AskActor service actor. All the parameters passed to this method, as well as the
     *  promise created earlier, are transferred to the actor constructor. Future from Promise is
     *  sent as the result of a method call. After the start, AskActor sends a message to the
     *  target actor and starts a timeout timer. If the target actor responds before the timeout,
     *  the promise is filled with the received message. If a timeout message arrives, the promise
     *  fails with an AskTimeoutError error. In both lines of development of events, the work of the
     *  AskActor actor after receiving the message is completed.
     *
     * @param msg message for send
     * @param {ActorRef} self self actor reference
     * @param {Duration} timeout receive response timeout
     * @return {Future<any>} future with expected message or failure if timeout was reached
     */
    ActorRef.prototype.ask = function (msg, self, timeout) {
        if (self === void 0) { self = null; }
        if (timeout === void 0) { timeout = Duration_1.Duration.fromSeconds(3); }
        var p = new CompletablePromise_1["default"]();
        //FIXME self is not mey by used, because sender of this message is the AskActor!
        var fut = p.future;
        this.cell.system.actorOf(new Props_1["default"](new AskActor(msg, this, self, p, timeout)));
        return fut;
    };
    /** Return actor path
     *
     * @return {ActorPath} actor path
     */
    ActorRef.prototype.path = function () {
        return this.cell.path;
    };
    ActorRef.prototype.toString = function () {
        return this.path().toString();
    };
    ActorRef.prototype.equals = function (obj) {
        return this.path().toString() == obj.path().toString();
    };
    return ActorRef;
}(Object_1["default"]));
exports["default"] = ActorRef;
/** See ActorRef.tell method for comments */
var AskActor = /** @class */ (function (_super) {
    __extends(AskActor, _super);
    function AskActor(msg, to, from, p, timeout) {
        var _this = _super.call(this) || this;
        _this.p = p;
        _this.timeout = timeout;
        _this.msg = msg;
        _this.to = to;
        _this.from = from;
        return _this;
    }
    /** Send message and start timeout timer */
    AskActor.prototype.preStart = function () {
        this.to.tell(this.msg, this.context.self);
        this.timers().startSingleTimer(0, new AskActorTimeout(), this.context.self, this.timeout);
    };
    /** Receive message, if it is a message from the target actor - complete promise, else fail promise with
     *  AskTimeoutError */
    AskActor.prototype.receive = function (msg) {
        if (msg instanceof AskActorTimeout) {
            var from = "outside";
            if (this.from)
                from = this.from.path().toString();
            var to = this.to.path().toString();
            var timeout = this.timeout.toString();
            this.p.failure(new Errors_1.AskTimeoutError("Ask operation timeout from actor '" + from + "' to '" + to + "' after " + timeout));
        }
        else {
            this.p.success(msg);
        }
        this.context.system.stop(this.context.self);
        return true;
    };
    return AskActor;
}(Actor_1.Actor));
var AskActorTimeout = /** @class */ (function (_super) {
    __extends(AskActorTimeout, _super);
    function AskActorTimeout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AskActorTimeout;
}(Message_1["default"]));


/***/ }),

/***/ "./src/actors/ActorSystem.ts":
/*!***********************************!*\
  !*** ./src/actors/ActorSystem.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Actor_1 = __webpack_require__(/*! ./Actor */ "./src/actors/Actor.ts");
var ActorRef_1 = __webpack_require__(/*! ./ActorRef */ "./src/actors/ActorRef.ts");
var ActorCell_1 = __webpack_require__(/*! ./ActorCell */ "./src/actors/ActorCell.ts");
var DefaultDispatcher_1 = __webpack_require__(/*! ./DefaultDispatcher */ "./src/actors/DefaultDispatcher.ts");
var UnboundMailbox_1 = __webpack_require__(/*! ./UnboundMailbox */ "./src/actors/UnboundMailbox.ts");
var DeadLetters_1 = __webpack_require__(/*! ./DeadLetters */ "./src/actors/DeadLetters.ts");
var ActorPath_1 = __webpack_require__(/*! ./ActorPath */ "./src/actors/ActorPath.ts");
var ActorSystem = /** @class */ (function () {
    function ActorSystem() {
        // Async
        this.nids = 0;
        this.deadLettersMailbox = new DeadLetters_1["default"]();
        this.dispatcher = new DefaultDispatcher_1["default"]();
        var deadLettersCell = new ActorCell_1["default"](new ActorPath_1["default"]("deadLetters"), null, this, this.dispatcher, this.deadLettersMailbox);
        deadLettersCell.start();
        this.deadLetters = new ActorRef_1["default"](deadLettersCell);
    }
    ActorSystem.prototype.actorOf = function (props, name) {
        if (name === void 0) { name = null; }
        var mailbox = new UnboundMailbox_1["default"]();
        var aName = "";
        if (name) {
            aName = name;
        }
        else {
            aName = this.nids.toString();
            this.nids++;
        }
        var path = new ActorPath_1["default"](aName);
        var cell = new ActorCell_1["default"](path, props.actor, this, this.dispatcher, mailbox);
        cell.start();
        return new ActorRef_1["default"](cell);
    };
    ActorSystem.prototype.stop = function (ref) {
        // Attention, identical code exists in the PoisonPill handler
        ref.cell.suspend();
        ref.cell.actor.timers().cancelAll();
        ref.cell.mailbox.cleanUp(ref, this.deadLetters);
        ref.cell.forceSend(new Actor_1.PoisonPill(), null);
    };
    ActorSystem.prototype.run = function () {
        this.dispatcher.run();
    };
    return ActorSystem;
}());
exports["default"] = ActorSystem;


/***/ }),

/***/ "./src/actors/DeadLetters.ts":
/*!***********************************!*\
  !*** ./src/actors/DeadLetters.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Mailbox_1 = __webpack_require__(/*! ./Mailbox */ "./src/actors/Mailbox.ts");
var DeadLetters = /** @class */ (function (_super) {
    __extends(DeadLetters, _super);
    function DeadLetters() {
        var _this = _super.call(this) || this;
        _this.isPlanned = true; // It's always planned to prevent it's execution
        return _this;
    }
    DeadLetters.prototype.dequeue = function () {
        return undefined;
    };
    DeadLetters.prototype.enqueue = function (envelope) {
        var actorName = "outside";
        if (envelope.sender)
            actorName = envelope.sender.path().toString();
        console.log("DeadLetter receive some message = " + envelope.msg.toString() + " from '" + actorName + "'}");
    };
    DeadLetters.prototype.cleanUp = function (sender, deadLetters) { };
    DeadLetters.prototype.hasMessages = function () {
        return false;
    };
    return DeadLetters;
}(Mailbox_1["default"]));
exports["default"] = DeadLetters;


/***/ }),

/***/ "./src/actors/DefaultDispatcher.ts":
/*!*****************************************!*\
  !*** ./src/actors/DefaultDispatcher.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Actor_1 = __webpack_require__(/*! ./Actor */ "./src/actors/Actor.ts");
var ActorRef_1 = __webpack_require__(/*! ./ActorRef */ "./src/actors/ActorRef.ts");
var DefaultDispatcher = /** @class */ (function () {
    function DefaultDispatcher() {
        this.queue = [];
    }
    // Кладет конвертик в ящик и планирует его ящик на выполнение если он не был заранее кем-то запланирован
    DefaultDispatcher.prototype.dispatch = function (cell, envelope) {
        var _this = this;
        cell.mailbox.enqueue(envelope);
        if (!cell.mailbox.isPlanned) {
            this.registerForExecution(function () { return _this.invoke(cell); });
        }
    };
    // Это функция вызывает как таск в event-loop. Она занимается непосредственным
    // процессирование сообщений из ящика
    DefaultDispatcher.prototype.invoke = function (cell) {
        if (cell.mailbox.hasMessages()) { // Because it may be cleaned after planning if actor was stopped
            var envelope = cell.mailbox.dequeue();
            if (envelope.sender)
                cell.actor.context.sender = envelope.sender;
            else //If not sender, set deadLetters as sender
                cell.actor.context.sender = cell.system.deadLetters;
            var handled = this.internalReceive(envelope, cell);
            if (!handled) {
                var handled2 = cell.actor.receive(envelope.msg);
                if (!handled2) {
                    cell.system.deadLetters.tell(envelope.msg, envelope.sender);
                }
            }
        }
        cell.mailbox.isPlanned = false;
    };
    DefaultDispatcher.prototype.internalReceive = function (envelope, cell) {
        var msg = envelope.msg;
        if (msg instanceof Actor_1.PoisonPill) {
            cell.suspend();
            cell.actor.timers().cancelAll();
            cell.mailbox.cleanUp(new ActorRef_1["default"](cell), cell.system.deadLetters);
            cell.stop();
        }
        else {
            return false;
        }
        return true;
    };
    // Тут происходит главный event-loop
    DefaultDispatcher.prototype.run = function () {
        var _this = this;
        var startTime = Date.now();
        while (this.queue.length > 0) {
            this.queue.pop()();
            if (Date.now() > startTime + 100)
                break;
        }
        setTimeout(function () { return _this.run(); }, 0);
    };
    DefaultDispatcher.prototype.registerForExecution = function (f) {
        this.queue.push(f);
    };
    return DefaultDispatcher;
}());
exports["default"] = DefaultDispatcher;


/***/ }),

/***/ "./src/actors/Envelope.ts":
/*!********************************!*\
  !*** ./src/actors/Envelope.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Envelope = /** @class */ (function () {
    function Envelope(sender, msg) {
        this.sender = sender;
        this.msg = msg;
    }
    return Envelope;
}());
exports["default"] = Envelope;


/***/ }),

/***/ "./src/actors/Errors.ts":
/*!******************************!*\
  !*** ./src/actors/Errors.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var AskTimeoutError = /** @class */ (function (_super) {
    __extends(AskTimeoutError, _super);
    function AskTimeoutError(message) {
        return _super.call(this, message) || this;
    }
    return AskTimeoutError;
}(Error));
exports.AskTimeoutError = AskTimeoutError;


/***/ }),

/***/ "./src/actors/Mailbox.ts":
/*!*******************************!*\
  !*** ./src/actors/Mailbox.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Mailbox = /** @class */ (function () {
    function Mailbox() {
    }
    return Mailbox;
}());
exports["default"] = Mailbox;


/***/ }),

/***/ "./src/actors/Message.ts":
/*!*******************************!*\
  !*** ./src/actors/Message.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Object_1 = __webpack_require__(/*! ../common/Object */ "./src/common/Object.ts");
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.equals = function (obj) {
        return JSON.stringify(this) === JSON.stringify(obj);
    };
    return Message;
}(Object_1["default"]));
exports["default"] = Message;


/***/ }),

/***/ "./src/actors/Props.ts":
/*!*****************************!*\
  !*** ./src/actors/Props.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Props = /** @class */ (function () {
    function Props(actor) {
        this.mailbox = "default";
        this.dispatcher = "default";
        this.actor = actor;
    }
    return Props;
}());
exports["default"] = Props;


/***/ }),

/***/ "./src/actors/Timers.ts":
/*!******************************!*\
  !*** ./src/actors/Timers.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Realization of actor's tamers. This mechanism is designed to create a timer for sending messages
 * to yourself or to another actor after a specified time interval, with or without a periodicity.
 */
var Timers = /** @class */ (function () {
    function Timers() {
        this.singleTasks = [];
        this.periodicTasks = [];
    }
    /** Start single timer
     *
     * @param key timer id
     * @param {Message} msg message for send
     * @param {ActorRef} self self reference
     * @param {Duration} timeout duration between sends
     */
    Timers.prototype.startSingleTimer = function (key, msg, self, timeout) {
        var _this = this;
        var found = this.singleTasks.find(function (v) { return v.key === key; });
        if (found) {
            clearTimeout(found.id);
        }
        var id = setTimeout(function () {
            _this.periodicTasks = _this.periodicTasks.filter(function (v) { return v.key != key; });
            self.tell(msg, self);
        }, timeout.toMilliseconds());
        if (found) {
            found.id = id;
        }
        else {
            this.singleTasks.push(new TimerTask(key, id));
        }
    };
    /** Start periodic timer
     *
     * @param key timer id
     * @param {Message} msg message for send
     * @param {ActorRef} self self reference
     * @param {Duration} interval duration between sends
     */
    Timers.prototype.startPeriodicTimer = function (key, msg, self, interval) {
        var found = this.periodicTasks.find(function (v) { return v.key === key; });
        if (found) {
            clearInterval(found.id);
        }
        var id = setInterval(function () { return self.tell(msg, self); }, interval.toMilliseconds());
        if (found) {
            found.id = id;
        }
        else {
            this.periodicTasks.push(new TimerTask(key, id));
        }
    };
    /** Return true if timer with specified id is exist or false instead
     *
     * @param key timer id
     * @return {boolean} result
     */
    Timers.prototype.isTimerActive = function (key) {
        return this.periodicTasks.find(function (v) { return v.key === key; }) != null;
    };
    /** Cancel timer with specified id
     *
     * @param key timer id
     */
    Timers.prototype.cancel = function (key) {
        var foundPeriodic = this.periodicTasks.find(function (v) { return v.key === key; });
        var foundSingle = this.singleTasks.find(function (v) { return v.key === key; });
        if (foundPeriodic) {
            clearInterval(foundPeriodic.id);
            this.periodicTasks = this.periodicTasks.filter(function (v) { return v.key != key; });
        }
        if (foundSingle) {
            clearTimeout(foundSingle.id);
            this.singleTasks = this.singleTasks.filter(function (v) { return v.key != key; });
        }
    };
    /** Cancel all timers */
    Timers.prototype.cancelAll = function () {
        this.singleTasks.forEach(function (v) { return clearTimeout(v.id); });
        this.periodicTasks.forEach(function (v) { return clearInterval(v.id); });
        this.singleTasks = [];
        this.periodicTasks = [];
    };
    return Timers;
}());
exports["default"] = Timers;
var TimerTask = /** @class */ (function () {
    function TimerTask(key, id) {
        this.key = key;
        this.id = id;
    }
    return TimerTask;
}());


/***/ }),

/***/ "./src/actors/UnboundMailbox.ts":
/*!**************************************!*\
  !*** ./src/actors/UnboundMailbox.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Mailbox_1 = __webpack_require__(/*! ./Mailbox */ "./src/actors/Mailbox.ts");
var UnboundMailbox = /** @class */ (function (_super) {
    __extends(UnboundMailbox, _super);
    function UnboundMailbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queue = [];
        return _this;
    }
    UnboundMailbox.prototype.enqueue = function (envelope) {
        this.queue.push(envelope);
    };
    UnboundMailbox.prototype.dequeue = function () {
        return this.queue.shift();
    };
    UnboundMailbox.prototype.cleanUp = function (sender, deadLetters) {
        while (true) {
            if (this.queue.length > 0) {
                deadLetters.tell(this.queue.shift().msg, sender);
            }
            else {
                break;
            }
        }
        this.queue = [];
    };
    UnboundMailbox.prototype.hasMessages = function () {
        return this.queue.length > 0;
    };
    return UnboundMailbox;
}(Mailbox_1["default"]));
exports["default"] = UnboundMailbox;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ActorSystem_1 = __webpack_require__(/*! ./actors/ActorSystem */ "./src/actors/ActorSystem.ts");
var Abru_1 = __webpack_require__(/*! ./abru/Abru */ "./src/abru/Abru.ts");
var AppActor_1 = __webpack_require__(/*! ./AppActor */ "./src/AppActor.ts");
var system = new ActorSystem_1["default"]();
//let fooActor = system.actorOf(FooActor.props("xxx"));
//system.actorOf(BooActor.props("yyy", fooActor));
Abru_1["default"].system = system;
document.addEventListener("DOMContentLoaded", function () {
    var executor = system.dispatcher;
    /*this.context = {};
    this.context.system = system;
    this.id = "root";
    this.internals = {};

    let ast = new AstNode("VerticalLayout", {id: "vertical"}, [
        new AstNode("HorizontalLayout", {id: "horizontal"}, [
            new AstNode("Button", {id: "btnCancel", text: "Cancel"}, []),
            new AstNode("Button", {id: "btnOk", text: "OK"}, []),
        ]),
        new AstNode("Label", {text: "Name"}, []),
        new AstNode("TextEdit", {id: "teName"}, []),
        new AstNode("Label", {text: "Name"}, []),
        new AstNode("TextEdit", {id: "tePassword"}, []),

    ]);
    ast.root = true;*/
    system.actorOf(AppActor_1["default"].props(), "AppActor").tell(AppActor_1["default"].Commands.Run());
    /*let foo = system.actorOf(FooActor.props("x"), "foo");
    foo.ask(FooActor.commands.Ping("xxx"))
        .onComplete((v) => {
            if (v.isSuccess()) {
                console.log(`Got answer = ${v.get().toString()}`)
            } else {
                console.log(`Error = ${v.failed().get().message}`);
            }
        })*/
    /*let foo = system.actorOf(FooActor.props("x"), "foo");
    foo.tell(FooActor.commands.Ping("aaa"));
    foo.tell(FooActor.commands.Ping("bbb"));
    foo.tell(new PoisonPill());
    foo.tell(FooActor.commands.Ping("ccc"));
    foo.tell(FooActor.commands.Ping("ddd"));
    foo.tell(FooActor.commands.Ping("eee"));*/
    //setTimeout(() => {
    //    foo.tell(BooActor.commands.Pong("zzz"));
    //}, 4000)
    /*Future.async(() => 100, executor)
        .map(v => {
            console.log(`map1 = ${v}`);
            return v + 100;
        })
        .flatMap(v => {
            console.log(`flatMap1 = ${v}`);
            return Future.async(() => `stringed value = ${v}`, executor)
                .map((v) => {
                    throw new Error("Ooooops!");
                    return v + " zzz";
                });
        })
        .map(v => {
            console.log(`map2 = ${v}`);
            return v + " xxx";
        })
        .onComplete((v) => {
            if (v.isSuccess()) {
                console.log(`onComplete:success = ${v.get()}`)
            } else {
                console.log(`onComplete:failed = ${v.failed().get()}`)
            }

        });*/
    /*console.log("Pre start code");
    p.success(100);
    console.log("First complete is ok");
    p.success(100);*/
    /*let p = FutureOld.Promise<number>(executor)
        .map((v) => {
            throw new Error("Error from map");
            console.log(`map1 v = ${v}`);
            return v + 100;
        })
        .onSuccess((v: number) => {
            console.log("onSuccess");
            console.log(`Result = ${v}`)
        })
        .onFailed((e) => {
            console.log("onFailed");
            console.log(`Error = ${e.message}`)
        });



    console.log("Some before execution code...");
    p.success(99);*/
    /*new Future<number>(() => {
        console.log("calc");
        return 99;
    }, executor)
        .map((v) => {
            console.log(`map1 v = ${v}`);
            return v + 100;
        })
        .map((v) => {
            console.log(`map2 v = ${v}`);
            return v + 100;
        })
        .map((v) => {
            throw new Error("My error");
            console.log(`map3 v = ${v}`);
            return v + 100;
        })
        .map((v) => {
            console.log(`map4 v = ${v}`);
            return v + 100;
        })
        .onFailed((e) => {
            console.log("onFailed");
            console.log(`Error = ${e.message}`)
        })
        .onSuccess((v) => {
            console.log("onSuccess");
            console.log(`Result = ${v}`)
        })


        .run();*/
    /*let top = system.actorOf(Div.props({id: "top"}), "top");
    top.tell(new Render("root"));

    let registrationPage = system.actorOf(RegistrationPage.props({id: "registration_page"}), "registration_page");
    top.tell(new AddComponent(registrationPage));*/
    /*let horizontal = system.actorOf(HorizontalLayout.props(), "horizontal");
    let plainA = system.actorOf(PlainLayout.props(), "plainA");
    let plainB = system.actorOf(PlainLayout.props(), "plainB");
    let plainC = system.actorOf(PlainLayout.props(), "plainC");
    let labelA = system.actorOf(Label.props("A"), "labelA");
    let labelB = system.actorOf(Label.props("B"), "labelB");
    let labelC = system.actorOf(Label.props("C"), "labelC");


    top.tell(new Render("root"));
    top.ask(new AddComponent(horizontal))
        .map((_) => {
            horizontal.ask(HorizontalLayout.AddComponent(plainA, 33, null))
                .map((_) => {
                    plainA.tell(PlainLayout.AddComponent(labelA));
                });
            horizontal.ask(HorizontalLayout.AddComponent(plainB, 33, null))
                .map((_) => {
                    plainB.tell(PlainLayout.AddComponent(labelB));
                });
            horizontal.ask(HorizontalLayout.AddComponent(plainC, 33, null))
                .map((_) => {
                    plainC.tell(PlainLayout.AddComponent(labelC));
                });
        });*/
    //plainA.tell(PlainLayout.AddComponent(labelA));
    //plainB.tell(PlainLayout.AddComponent(labelB));
    //plainC.tell(PlainLayout.AddComponent(labelC));
    // let div0 = system.actorOf(Div.props("div-L0"));
    // let div1 = system.actorOf(Div.props("div-L1.0"));
    // let div2 = system.actorOf(Div.props("div-L1.1"));
    //div0.tell(AbruMessages.Render("root"));
    //div0.tell(AbruMessages.AddComponent(div1));
    //div0.tell(AbruMessages.AddComponent(div2));
});
/*setTimeout(() => {
    let probe = new TestProbe(system);
    let target = system.actorOf(FooActor.props("xxx"));

    probe.send(target, FooActor.commands.Ping("xxx"));
    probe.expectMsg(BooActor.commands.Pong("xxx"), 1000).then(
        v => console.log(`Test result is '${v}'`),
        r => console.log(`Timeout`)
    )
}, 1000);*/
system.run();


/***/ }),

/***/ "./src/async/Duration.ts":
/*!*******************************!*\
  !*** ./src/async/Duration.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/** Representation of some time period. This class allows free conversion of one time unit
 *  to another. */
var Duration = /** @class */ (function () {
    function Duration(nano, unit) {
        this.unit = TimeUnit.Nanosecond;
        this.nano = nano;
        this.unit = unit;
    }
    Duration.fromNanoseonds = function (count) {
        return new Duration(count * 1000, TimeUnit.Nanosecond);
    };
    Duration.fromMicroseonds = function (count) {
        return new Duration(count * 1000, TimeUnit.Microsecond);
    };
    Duration.fromMillisecondss = function (count) {
        return new Duration(count * 1000000, TimeUnit.Millisecond);
    };
    Duration.fromSeconds = function (count) {
        return new Duration(count * 1000000000, TimeUnit.Second);
    };
    Duration.fromMinutes = function (count) {
        return new Duration(count * 1000000000000, TimeUnit.Minute);
    };
    Duration.fromHours = function (count) {
        return new Duration(count * 1000000000000000, TimeUnit.Hour);
    };
    Duration.prototype.toNanoseconds = function () {
        return this.nano;
    };
    Duration.prototype.toMicroseonds = function () {
        return this.nano / 1000;
    };
    Duration.prototype.toMilliseconds = function () {
        return this.nano / 1000000;
    };
    Duration.prototype.toSeconds = function () {
        return this.nano / 1000000000;
    };
    Duration.prototype.toMinutes = function () {
        return this.nano / 1000000000000;
    };
    Duration.prototype.toHours = function () {
        return this.nano / 1000000000000000;
    };
    Duration.prototype.toString = function () {
        if (this.unit == TimeUnit.Nanosecond)
            return this.nano + " nanosecond";
        else if (this.unit == TimeUnit.Microsecond)
            return this.nano / 1000 + " mikrosecond";
        else if (this.unit == TimeUnit.Millisecond)
            return this.nano / 1000000 + " millisecond";
        else if (this.unit == TimeUnit.Second)
            return this.nano / 1000000000 + " second";
        else if (this.unit == TimeUnit.Minute)
            return this.nano / 1000000000000 + " minute";
        else if (this.unit == TimeUnit.Hour)
            return this.nano / 1000000000000000 + " hour";
        else
            return this.nano / 1000 + "unknown";
    };
    return Duration;
}());
exports.Duration = Duration;
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["Nanosecond"] = 0] = "Nanosecond";
    TimeUnit[TimeUnit["Microsecond"] = 1] = "Microsecond";
    TimeUnit[TimeUnit["Millisecond"] = 2] = "Millisecond";
    TimeUnit[TimeUnit["Second"] = 3] = "Second";
    TimeUnit[TimeUnit["Minute"] = 4] = "Minute";
    TimeUnit[TimeUnit["Hour"] = 5] = "Hour";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));


/***/ }),

/***/ "./src/common/Object.ts":
/*!******************************!*\
  !*** ./src/common/Object.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Object = /** @class */ (function () {
    function Object() {
    }
    Object.prototype.toString = function () {
        var str = this.constructor.name + " { ";
        for (var property in this) {
            if (this.hasOwnProperty(property)) {
                str = "" + str + property + ": " + this[property].toString() + ", ";
            }
        }
        str = str.slice(0, str.length - 1) + " }";
        return str;
    };
    return Object;
}());
exports["default"] = Object;


/***/ }),

/***/ "./src/common/StringBuilder.ts":
/*!*************************************!*\
  !*** ./src/common/StringBuilder.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var StringBuilder = /** @class */ (function () {
    function StringBuilder(str) {
        if (str === void 0) { str = ""; }
        this.elems = [];
        this.elems.push(str);
    }
    StringBuilder.prototype.put = function (str) {
        this.elems.push(str);
        return this;
    };
    StringBuilder.prototype.mkString = function () {
        return this.elems.join("");
    };
    return StringBuilder;
}());
exports["default"] = StringBuilder;


/***/ }),

/***/ "./src/future/AsyncPromise.ts":
/*!************************************!*\
  !*** ./src/future/AsyncPromise.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Promise_1 = __webpack_require__(/*! ./Promise */ "./src/future/Promise.ts");
var Try_1 = __webpack_require__(/*! ../monads/Try */ "./src/monads/Try.ts");
var Future_1 = __webpack_require__(/*! ./Future */ "./src/future/Future.ts");
/** This type of promise is designed to be filled by the function executed on the executor. For
 *  this reason, the call to the transferred function is asynchronous with all the cautions that
 *  follow from it.
 *
 *  Example:
 *
 *  let p = new AsyncPromise<number>(() => 1000, executor);
 *  let fut = p.future;
 *
 *  // Next callback will be called after executor processed passed function and complete the future
 *  fut.onComplete((v) => {
 *      log("Ok, result is given")
 *  })
 *
 **/
var AsyncPromise = /** @class */ (function (_super) {
    __extends(AsyncPromise, _super);
    function AsyncPromise(f, executor) {
        var _this = _super.call(this) || this;
        _this.future = new Future_1["default"]();
        executor.registerForExecution(function () {
            var result = Try_1["default"].doWork(function () { return f(); });
            _this.complete(result);
        });
        return _this;
    }
    AsyncPromise.prototype.tryComplete = function (result) {
        if (!this.future.isCompleted()) {
            this.future.complete(result);
            return true;
        }
        else {
            return false;
        }
    };
    return AsyncPromise;
}(Promise_1["default"]));
exports["default"] = AsyncPromise;


/***/ }),

/***/ "./src/future/CompletablePromise.ts":
/*!******************************************!*\
  !*** ./src/future/CompletablePromise.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Promise_1 = __webpack_require__(/*! ./Promise */ "./src/future/Promise.ts");
var Future_1 = __webpack_require__(/*! ./Future */ "./src/future/Future.ts");
/** This type of promise is intended to be filled by the application code, which should call the
 *  success or failure methods on it. After that, the transferred value will be placed in the
 *  future.
 *
 *  Example:
 *
 *  let p = new CompletablePromise<number>();
 *  let fut = p.future;
 *  fut.onComplete((v) => {
 *      log("Ok, result is given")
 *  })
 *
 *  // p now may go away, say to another function, actor or other future, where it will be completed
 *
 *  p.success(1000);
 *
 **/
var CompletablePromise = /** @class */ (function (_super) {
    __extends(CompletablePromise, _super);
    function CompletablePromise() {
        var _this = _super.call(this) || this;
        _this.future = new Future_1["default"]();
        return _this;
    }
    CompletablePromise.prototype.tryComplete = function (result) {
        if (!this.future.isCompleted()) {
            this.future.complete(result);
            return true;
        }
        else {
            return false;
        }
    };
    return CompletablePromise;
}(Promise_1["default"]));
exports["default"] = CompletablePromise;


/***/ }),

/***/ "./src/future/Future.ts":
/*!******************************!*\
  !*** ./src/future/Future.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Try_1 = __webpack_require__(/*! ../monads/Try */ "./src/monads/Try.ts");
var Option_1 = __webpack_require__(/*! ../monads/Option */ "./src/monads/Option.ts");
var CompletablePromise_1 = __webpack_require__(/*! ./CompletablePromise */ "./src/future/CompletablePromise.ts");
var AsyncPromise_1 = __webpack_require__(/*! ./AsyncPromise */ "./src/future/AsyncPromise.ts");
/**
 * A container for the result of completing some promise. It should be read as - a container for
 * the result that will be sometime later. It is possible to attach various functional combinators
 * to this container, which will be executed immediately after receiving the result from the promise.
 */
var Future = /** @class */ (function () {
    function Future() {
        /** The value of futures. Prior to filling by promise is set to none. After filling, it accepts
         *  Тry type, which contains either the result of performing some calculation
         *  (calculated in a promise) or an error that occurred during this calculation. */
        this.value0 = new Option_1.None();
    }
    /** Syntactic sugar for creating of AsyncPromise and extracting it's future */
    Future.async = function (f, executor) {
        var p = new AsyncPromise_1["default"](f, executor);
        return p.future;
    };
    /** Return current future value */
    Future.prototype.value = function () {
        return this.value0;
    };
    /** Return current completion state */
    Future.prototype.isCompleted = function () {
        return this.value0.isDefined();
    };
    /** Fills the value of the futures. This function is called from the promise of which the
     *  future belongs and it should never be called by the application code, otherwise it will
     *  lead to a breakdown of the future execution logic. */
    Future.prototype.complete = function (result) {
        this.value0 = new Option_1.Some(result);
        if (this.next) {
            this.next(result);
        }
    };
    /** Callback that will be called upon completion of the future. Pass the value of the future
     *  as function argument.
     *
     *  Example:
     *
     *  f.onComplete((v) => {
     *      if (v.isSuccess()) {
     *          console.log(`onComplete:success = ${v.get()}`)
     *      } else {
     *          console.log(`onComplete:failed = ${v.failed().get()}`)
     *      }
     *  })
     *
     **/
    Future.prototype.onComplete = function (f) {
        this.next = function (v) { return f(v); };
        if (this.value0.isDefined()) {
            this.next(this.value0.get());
        }
    };
    /** Callback that will be called upon completion of the future. Create and return new future,
     *  witch value is the result of function f applied to the this future value
     *
     *  Example:
     *
     *  f.map(v => {
     *       return v + 100;
     *  })
     *
     **/
    Future.prototype.map = function (f) {
        var p = new CompletablePromise_1["default"]();
        this.next = function (v) {
            if (v.isSuccess()) {
                var result = Try_1["default"].doWork(function () { return f(v.get()); });
                p.complete(result);
            }
            else {
                p.complete(v);
            }
        };
        return p.future;
    };
    /** Callback that will be called upon completion of the future. Create and return new future,
     *  witch value is the result of completion of the future returned by the function f
     *
     *  Example:
     *
     *  f.flatMap(v => {
     *       return Future.async(() => v + 1000);
     *  })
     *  .map(v => { // This map is over result of the inner future
     *       return v + 100;
     *  })
     *
     **/
    Future.prototype.flatMap = function (f) {
        var p = new CompletablePromise_1["default"]();
        var fut = p.future;
        this.next = function (v) {
            if (v.isSuccess()) {
                var result = Try_1["default"].doWork(function () { return f(v.get()); });
                if (result.isSuccess()) {
                    var nextFut = result.get();
                    nextFut.onComplete(function (v) {
                        p.complete(v);
                    });
                }
                else {
                    p.complete(result);
                }
            }
            else {
                p.complete(v);
            }
        };
        return fut;
    };
    return Future;
}());
exports["default"] = Future;


/***/ }),

/***/ "./src/future/Promise.ts":
/*!*******************************!*\
  !*** ./src/future/Promise.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Try_1 = __webpack_require__(/*! ../monads/Try */ "./src/monads/Try.ts");
/**
 * This class package implements the concept of future / promise in its classic presentation.
 * According to it, the future is a synchronous container for the result, and a promise is some function
 * that fills the future. At the same time, the properties of this function are not initially defined,
 * therefore this base class is presented in the form of abstract interfaces. The concrete implementation
 * of the promise determines how the function will be executed - synchronous, asynchronously or otherwise.
 * For more detailed descriptions of what specific promise does as well as the logic of the future, see
 * the corresponding implementations.
 */
var Promise = /** @class */ (function () {
    function Promise() {
    }
    Promise.prototype.complete = function (result) {
        if (this.tryComplete(result)) {
            return this;
        }
        else {
            throw new Error("Promise already completed.");
        }
    };
    Promise.prototype.success = function (value) {
        return this.complete(new Try_1.Success(value));
    };
    Promise.prototype.trySuccess = function (value) {
        return this.tryComplete(new Try_1.Success(value));
    };
    Promise.prototype.failure = function (cause) {
        return this.complete(new Try_1.Failure(cause));
    };
    Promise.prototype.tryFailure = function (cause) {
        return this.tryComplete(new Try_1.Failure(cause));
    };
    return Promise;
}());
exports["default"] = Promise;


/***/ }),

/***/ "./src/monads/Option.ts":
/*!******************************!*\
  !*** ./src/monads/Option.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Option = /** @class */ (function () {
    function Option() {
        this.value = null;
    }
    Option.from = function (v) {
        if (v == null) {
            return new None();
        }
        else {
            return new Some(v);
        }
    };
    Option.prototype.isEmpty = function () {
        return this.value == null;
    };
    Option.prototype.isDefined = function () {
        return this.value != null;
    };
    Option.prototype.get = function () {
        return this.value;
    };
    Option.prototype.getOrElse = function (other) {
        if (this.value == null) {
            return new Some(other);
        }
        else {
            return this;
        }
    };
    return Option;
}());
exports.Option = Option;
var Some = /** @class */ (function (_super) {
    __extends(Some, _super);
    function Some(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    return Some;
}(Option));
exports.Some = Some;
var None = /** @class */ (function (_super) {
    __extends(None, _super);
    function None() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return None;
}(Option));
exports.None = None;


/***/ }),

/***/ "./src/monads/Try.ts":
/*!***************************!*\
  !*** ./src/monads/Try.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.__esModule = true;
var Try = /** @class */ (function () {
    function Try() {
    }
    Try.doWork = function (f) {
        try {
            var r = f();
            return new Success(r);
        }
        catch (e) {
            return new Failure(e);
        }
    };
    return Try;
}());
exports["default"] = Try;
var Success = /** @class */ (function (_super) {
    __extends(Success, _super);
    function Success(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    Success.prototype.isFailure = function () {
        return false;
    };
    Success.prototype.isSuccess = function () {
        return true;
    };
    Success.prototype.get = function () {
        return this.value;
    };
    Success.prototype.failed = function () {
        throw new Error("Try to get failed on success instance");
    };
    return Success;
}(Try));
exports.Success = Success;
var Failure = /** @class */ (function (_super) {
    __extends(Failure, _super);
    function Failure(error) {
        var _this = _super.call(this) || this;
        _this.error = error;
        return _this;
    }
    Failure.prototype.isFailure = function () {
        return true;
    };
    Failure.prototype.isSuccess = function () {
        return false;
    };
    Failure.prototype.get = function () {
        throw new Error("Try to get value from failed instance");
    };
    Failure.prototype.failed = function () {
        return new Success(this.error);
    };
    return Failure;
}(Try));
exports.Failure = Failure;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map