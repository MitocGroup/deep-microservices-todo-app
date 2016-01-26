'use strict';

import DeepFramework from 'deep-framework';
import Handler from './Handler';

exports.handler = function(event, context) {
  DeepFramework.KernelFromLambdaContext(context)
    .loadFromFile("_config.json", function (deepKernel) {
      new Handler(deepKernel).run(event, context);
    });
};