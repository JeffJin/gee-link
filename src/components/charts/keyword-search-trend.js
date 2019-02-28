import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {CommonAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";

function loadDataAction(data) {
  return {
    type: CommonAction.LOAD_KEYWORD_SEARCH_TREND,
    payload: data,
  };
}

class KeywordSearchTrendContent extends React.Component {
  state = {
    selectedTimeRange: 'month'
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData(this.props.keyword);
  }

  getChartData = (keyword) => {
    dataService.getKeywordSearchTrend(keyword, this.state.selectedTimeRange).then(data => {
      this.props.onLoadData(data);
    });
  };

  render() {
    const config = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b>'
      },
      series: [{
        name: 'Population',
        data: this.props.data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    };

    return (
      <div className={'keyword-search-trend'}>
        <div className={'box-header'}>
          <div className={'box-header-block'}></div>
          <div className={'title'}>关键词搜索趋势图</div>
          <div className={'tooltip'}></div>
          <div className={'select'}>
            <select disabled defaultValue={'month'}>
              <option value="day">近24小时</option>
              <option value="week">近一周</option>
              <option value="month">近一个月</option>
              <option value="year">近一年</option>
            </select>
          </div>
        </div>

        <HighchartsReact
          highcharts={Highcharts}
          options={config}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.chartData.keywordSearchTrend};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadData: (data) => (
      dispatch(loadDataAction(data))
    ),
  }
);

export const KeywordSearchTrend = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeywordSearchTrendContent);
