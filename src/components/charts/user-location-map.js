import connect from "react-redux/es/connect/connect";
import React from "react";
import HC_map from 'highcharts/modules/map';
import Highcharts from 'highcharts/highcharts'
import HighchartsReact from 'highcharts-react-official';
import {chinaMap} from "../../data/china-map";
import {CommonAction} from "../../store/reducers/actions";
import {userService} from "../../services/user.service";
import moment from "moment";

HC_map(Highcharts);

function loadUserLocationMapAction(data) {
  return {
    type: CommonAction.LOAD_USER_LOCATION_MAP_DATA,
    payload: data,
  };
}

class UserLocationMapContent extends React.Component {
  state = {
    isMapHelpShown: false
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData();
  }

  showMapHelp = () => {
    this.setState({
      isMapHelpShown: true
    });
  };

  hideMapHelp = () => {
    this.setState({
      isMapHelpShown: false
    });
  };

  getChartData = () => {
    const start = moment().subtract(1, 'years').format('YYYYMMDD') + '-000001';
    const endTime = moment().format('YYYYMMDD') + '-235959';
    userService.getUserLocationMapData(start, endTime, 'day').then(data => {
      this.props.onLoadUserLocationMapData(data);
    });
  };

  render() {
    const mapOptions = {
      title: {
        text: ''
      },
      colorAxis: {
        min: 0,
        stops: [
          [0, '#EFEFFF'],
          [0.67, '#4444FF'],
          [1, '#000022']
        ]
      },
      series: [{
        mapData: chinaMap,
        name: 'China',
        data: this.props.data,
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    };
    return (
      <div className={'map'}>
        <div className={'chart-header'}>
          <div className={'chart-header-block'}></div>
          <div className={'title'}>用户地理位置分布</div>
          <div className={`help${this.state.isMapHelpShown ? ' active' : ''}`} onClick={this.showMapHelp}>
            <span className={'icon'}></span>
            <div className={'content'}>
              <b>说明</b>
              <p>根据用户IP显示用户地理位置分布</p>
            </div>
          </div>
        </div>

        <div className={'main-user-map'}>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'mapChart'}
            options={mapOptions}
          />
        </div>;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.chartData.userLocationMapData,
    startTime: state.chartConfig.userLocationMapConfig && state.chartConfig.userLocationMapConfig.startTime,
    endTime: state.chartConfig.userLocationMapConfig && state.chartConfig.userLocationMapConfig.endTime,
    unitType: state.chartConfig.userLocationMapConfig && state.chartConfig.userLocationMapConfig.unitType,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadUserLocationMapData: (data) => (
      dispatch(loadUserLocationMapAction(data))
    ),
  }
);

export const UserLocationMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLocationMapContent);
