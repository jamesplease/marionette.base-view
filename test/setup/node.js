require('simple-jsdom').install();

global.chai = require('chai');
global.sinon = require('sinon');
global.$ = global.jQuery = require('jquery');
global.chai.use(require('sinon-chai'));
global.chai.use(require('chai-jquery'));

require('babel-core/register');
require('./setup')();
