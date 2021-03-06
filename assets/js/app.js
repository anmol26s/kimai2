// ------ jquery and bootstrap basics ------
// create global $ and jQuery variables
const $ = require('jquery');
global.$ = global.jQuery = $;

require('jquery-ui');
require('bootstrap-sass');
require('jquery-slimscroll');
require('bootstrap-select');

const Moment = require('moment');
global.moment = Moment;
require('daterangepicker');

// ------ for charts ------
const Chart = require('../../vendor/almasaeed2010/adminlte/plugins/chartjs/Chart.min.js');
global.Chart = Chart;

// ------ AdminLTE framework ------
require('../css/vendor.scss');
require('../../vendor/almasaeed2010/adminlte/dist/css/AdminLTE.min.css');
require('../../vendor/almasaeed2010/adminlte/dist/css/skins/_all-skins.css');
require('../css/app.scss');

global.$.AdminLTE = {};
global.$.AdminLTE.options = {};
require('../../vendor/almasaeed2010/adminlte/dist/js/app.js');

// ------ Kimai itself ------
require('./kimai.js');
require('./datatable.js');
require('./toolbar.js');
require('../images/default_avatar.png');

// ------ icheck for enhanced radio buttins and checkboxes ------
require('icheck');
require('icheck/skins/square/blue.css');
