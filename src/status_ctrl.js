import 'app/plugins/panel/graph/legend';
import 'app/plugins/panel/graph/series_overrides_ctrl';

import angular from 'angular';
import moment from 'moment';
import kbn from 'app/core/utils/kbn';
import _ from 'lodash';
import TimeSeries from 'app/core/time_series2';
import * as fileExport from 'app/core/utils/file_export';
import {MetricsPanelCtrl} from 'app/plugins/sdk';

export class StatusPluginCtrl extends MetricsPanelCtrl {
  /** @ngInject */
  constructor($scope, $injector, $log, annotationsSrv) {
    super($scope, $injector);

    this.log = $log.log;

    /** Bind events to functions **/
    this.events.on('render', this.onRender.bind(this));
    this.events.on('refresh', this.postRefresh.bind(this));
    this.events.on('data-error', this.onDataError.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-snapshot-load', this.onDataReceived.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  }

  postRefresh() {
    this.log("refresh");
    this.measurements = _.filter(this.panel.targets, function(target) {
      return target.alias && !target.hide;
    });
  }

  onInitEditMode() {
    this.log(this);
    this.addEditorTab('Options', 'public/plugins/status-panel/editor.html', 2);

    this.log(this.panel.targets);
  }

  setUnitFormat() {
    this.log("setUnitFormat");

  }

  onDataError() {
    this.log("onDataError");

  }

  changeSeriesColor(series, color) {
    this.log("changeSeriesColor");

  }

  onRender() {
    this.log("onRender");

  }

  parseSeries() {
    this.log("parseSeries");

  }

  onDataReceived(dataList) {
    this.log("onDataReceived");
    this.log(dataList);
    this.series = dataList.map(this.seriesHandler.bind(this));
    this.log(this.series);
  }

  seriesHandler(seriesData) {
    this.log("seriesHandler");
    this.log(seriesData);

    var series = new TimeSeries({
      datapoints: seriesData.datapoints,
      alias: seriesData.target
    });

    this.log(series);

    series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
    return series;
  }

  getDecimalsForValue(value) {
    this.log("getDecimalsForValue");

  }

  formatValue(value) {
    this.log("formatValue");

  }

  link(scope, elem, attrs, ctrl) {
    this.log("link");

  }
}

StatusPluginCtrl.templateUrl = 'module.html';
