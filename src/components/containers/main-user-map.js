import connect from "react-redux/es/connect/connect";
import React from "react";
import HC_map from 'highcharts/modules/map';
import Highcharts from 'highcharts/highcharts'
import HighchartsReact from 'highcharts-react-official';

import {chinaMap} from "../../data/china-map";

HC_map(Highcharts);

const MainUserMapContent = (props) => {
  let isMapHelpShown = false;

  const showMapHelp = () => {
    isMapHelpShown = true;
  };

  const hideMapHelp = () => {
    isMapHelpShown = false;
  };
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
      data: props.data,
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
  return <div className={'map'}>
    <div className={'chart-header'}>
      <div className={'chart-header-block'}></div>
      <div className={'title'}>用户地理位置分布</div>
      <div className={`help${isMapHelpShown ? ' active' : ''}`} onClick={showMapHelp}>
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
};

const mapStateToMainUserMapProps = (state) => {
  console.log('mapStateToMainUserMapProps get called', state);
  return {
    data: state.userLocationMapData
  };
};

const mapDispatchToMainUserMapProps = (dispatch) => (
  {
    onClick: (id) => ( ''
      // dispatch(openChartDetails(id))
    ),
  }
);

export const MainUserMap = connect(
  mapStateToMainUserMapProps,
  mapDispatchToMainUserMapProps
)(MainUserMapContent);
