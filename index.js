/* eslint-env node */
'use strict';

var Funnel     = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: '@tradegecko/warehousing',

  treeForPublic: function(tree) {
    return mergeTrees([tree, new Funnel('public')], { overwrite: true });
  },
};
