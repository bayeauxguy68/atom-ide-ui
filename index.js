/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @noflow
 */
'use strict';

/* eslint
  comma-dangle: [1, always-multiline],
  prefer-object-spread/prefer-object-spread: 0,
  rulesdir/no-commonjs: 0,
  */

const {__DEV__} = require('./modules/nuclide-node-transpiler/lib/env');
if (__DEV__) {
  require('./modules/nuclide-node-transpiler');
}

// Bypass the 'index-entry' script.
module.exports = require('./modules/atom-ide-ui/index');
