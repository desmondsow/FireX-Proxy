/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { start: peg$parsestart },
      peg$startRuleFunction  = peg$parsestart,

      peg$c0 = function(characters) {
          return {
              type: 'text',
              value: characters
          }
        },
      peg$c1 = function(e) { return e; },
      peg$c2 = "{{",
      peg$c3 = peg$literalExpectation("{{", false),
      peg$c4 = "}}",
      peg$c5 = peg$literalExpectation("}}", false),
      peg$c6 = peg$anyExpectation(),
      peg$c7 = function(main, args) {
          return {
            type: 'expression',
            path: main,
            args: args
          }
        },
      peg$c8 = function(a) { return a; },
      peg$c9 = peg$otherExpectation("string"),
      peg$c10 = function(text) {
          return { type: 'string', value: text.join('') };
        },
      peg$c11 = function(c) { return c; },
      peg$c12 = peg$otherExpectation("escape sequence"),
      peg$c13 = "\\",
      peg$c14 = peg$literalExpectation("\\", false),
      peg$c15 = "/",
      peg$c16 = peg$literalExpectation("/", false),
      peg$c17 = "b",
      peg$c18 = peg$literalExpectation("b", false),
      peg$c19 = function() { return "\b"; },
      peg$c20 = "f",
      peg$c21 = peg$literalExpectation("f", false),
      peg$c22 = function() { return "\f"; },
      peg$c23 = "n",
      peg$c24 = peg$literalExpectation("n", false),
      peg$c25 = function() { return "\n"; },
      peg$c26 = "r",
      peg$c27 = peg$literalExpectation("r", false),
      peg$c28 = function() { return "\r"; },
      peg$c29 = "t",
      peg$c30 = peg$literalExpectation("t", false),
      peg$c31 = function() { return "\t"; },
      peg$c32 = "u",
      peg$c33 = peg$literalExpectation("u", false),
      peg$c34 = function(digits) {
             return String.fromCharCode(parseInt(digits, 16));
           },
      peg$c35 = function(sequence) { return sequence; },
      peg$c36 = /^[0-9a-zA-Z_$]/,
      peg$c37 = peg$classExpectation([["0", "9"], ["a", "z"], ["A", "Z"], "_", "$"], false, false),
      peg$c38 = peg$otherExpectation("double quote"),
      peg$c39 = "\"",
      peg$c40 = peg$literalExpectation("\"", false),
      peg$c41 = peg$otherExpectation("single quote"),
      peg$c42 = "'",
      peg$c43 = peg$literalExpectation("'", false),
      peg$c44 = /^[ -!#-[\]-\u10FFFF]/,
      peg$c45 = peg$classExpectation([[" ", "!"], ["#", "["], ["]", "\u10FF"], "F", "F"], false, false),
      peg$c46 = /^[0-9a-f]/i,
      peg$c47 = peg$classExpectation([["0", "9"], ["a", "f"]], false, true),
      peg$c48 = peg$otherExpectation("whitespace"),
      peg$c49 = /^[ \t]/,
      peg$c50 = peg$classExpectation([" ", "\t"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0, s1;

    s0 = [];
    s1 = peg$parsetext();
    if (s1 === peg$FAILED) {
      s1 = peg$parseenclosedexpression();
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parsetext();
      if (s1 === peg$FAILED) {
        s1 = peg$parseenclosedexpression();
      }
    }

    return s0;
  }

  function peg$parsetext() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$currPos;
    peg$silentFails++;
    s5 = peg$parseopen();
    peg$silentFails--;
    if (s5 === peg$FAILED) {
      s4 = void 0;
    } else {
      peg$currPos = s4;
      s4 = peg$FAILED;
    }
    if (s4 !== peg$FAILED) {
      s5 = peg$parseany();
      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseopen();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseany();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c0(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseenclosedexpression() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parseopen();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsews();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsews();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseexpression();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsews();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsews();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseclose();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c1(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseopen() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c2) {
      s0 = peg$c2;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c3); }
    }

    return s0;
  }

  function peg$parseclose() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c4) {
      s0 = peg$c4;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c5); }
    }

    return s0;
  }

  function peg$parseany() {
    var s0;

    if (input.length > peg$currPos) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }

    return s0;
  }

  function peg$parseexpression() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsevariable();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseparameter();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseparameter();
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c7(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseparameter() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseargument();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c8(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseargument() {
    var s0;

    s0 = peg$parsevariable();
    if (s0 === peg$FAILED) {
      s0 = peg$parsestring();
    }

    return s0;
  }

  function peg$parsestring() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parsedoublequote();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsedoublequote_character();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsedoublequote_character();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsedoublequote();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c10(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsesinglequote();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsesinglequote_character();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsesinglequote_character();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsesinglequote();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c10(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c9); }
    }

    return s0;
  }

  function peg$parsedoublequote_character() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parsedoublequote();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecharacter();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c11(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesinglequote_character() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parsesinglequote();
    peg$silentFails--;
    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsecharacter();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c11(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecharacter() {
    var s0;

    s0 = peg$parseunescaped();
    if (s0 === peg$FAILED) {
      s0 = peg$parseescape_sequence();
    }

    return s0;
  }

  function peg$parseescape_sequence() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseescape_character();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsedoublequote();
      if (s2 === peg$FAILED) {
        s2 = peg$parsesinglequote();
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 92) {
            s2 = peg$c13;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 47) {
              s2 = peg$c15;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s2 === peg$FAILED) {
              s2 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 98) {
                s3 = peg$c17;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c18); }
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s2;
                s3 = peg$c19();
              }
              s2 = s3;
              if (s2 === peg$FAILED) {
                s2 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 102) {
                  s3 = peg$c20;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c21); }
                }
                if (s3 !== peg$FAILED) {
                  peg$savedPos = s2;
                  s3 = peg$c22();
                }
                s2 = s3;
                if (s2 === peg$FAILED) {
                  s2 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 110) {
                    s3 = peg$c23;
                    peg$currPos++;
                  } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c24); }
                  }
                  if (s3 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c25();
                  }
                  s2 = s3;
                  if (s2 === peg$FAILED) {
                    s2 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 114) {
                      s3 = peg$c26;
                      peg$currPos++;
                    } else {
                      s3 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c27); }
                    }
                    if (s3 !== peg$FAILED) {
                      peg$savedPos = s2;
                      s3 = peg$c28();
                    }
                    s2 = s3;
                    if (s2 === peg$FAILED) {
                      s2 = peg$currPos;
                      if (input.charCodeAt(peg$currPos) === 116) {
                        s3 = peg$c29;
                        peg$currPos++;
                      } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c30); }
                      }
                      if (s3 !== peg$FAILED) {
                        peg$savedPos = s2;
                        s3 = peg$c31();
                      }
                      s2 = s3;
                      if (s2 === peg$FAILED) {
                        s2 = peg$currPos;
                        if (input.charCodeAt(peg$currPos) === 117) {
                          s3 = peg$c32;
                          peg$currPos++;
                        } else {
                          s3 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c33); }
                        }
                        if (s3 !== peg$FAILED) {
                          s4 = peg$currPos;
                          s5 = peg$currPos;
                          s6 = peg$parseHEXDIG();
                          if (s6 !== peg$FAILED) {
                            s7 = peg$parseHEXDIG();
                            if (s7 !== peg$FAILED) {
                              s8 = peg$parseHEXDIG();
                              if (s8 !== peg$FAILED) {
                                s9 = peg$parseHEXDIG();
                                if (s9 !== peg$FAILED) {
                                  s6 = [s6, s7, s8, s9];
                                  s5 = s6;
                                } else {
                                  peg$currPos = s5;
                                  s5 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s5;
                                s5 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s5;
                              s5 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                          if (s5 !== peg$FAILED) {
                            s4 = input.substring(s4, peg$currPos);
                          } else {
                            s4 = s5;
                          }
                          if (s4 !== peg$FAILED) {
                            peg$savedPos = s2;
                            s3 = peg$c34(s4);
                            s2 = s3;
                          } else {
                            peg$currPos = s2;
                            s2 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s2;
                          s2 = peg$FAILED;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c35(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }

    return s0;
  }

  function peg$parsevariable() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c36.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c37); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c36.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c37); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }

    return s0;
  }

  function peg$parseescape_character() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 92) {
      s0 = peg$c13;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c14); }
    }

    return s0;
  }

  function peg$parsedoublequote() {
    var s0, s1;

    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 34) {
      s0 = peg$c39;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c40); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c38); }
    }

    return s0;
  }

  function peg$parsesinglequote() {
    var s0, s1;

    peg$silentFails++;
    if (input.charCodeAt(peg$currPos) === 39) {
      s0 = peg$c42;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c43); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c41); }
    }

    return s0;
  }

  function peg$parseunescaped() {
    var s0;

    if (peg$c44.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c45); }
    }

    return s0;
  }

  function peg$parseHEXDIG() {
    var s0;

    if (peg$c46.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c47); }
    }

    return s0;
  }

  function peg$parsews() {
    var s0, s1;

    peg$silentFails++;
    if (peg$c49.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c50); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c48); }
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

export default peg$parse;