import connect from "react-redux/es/connect/connect";
import React from "react";
import {StatsAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";

function loadDataAction(data) {
  return {
    type: StatsAction.LOAD_AVERAGE_SEARCH,
    payload: data,
  };
}

class DataUsageRecordContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    dataService.getDataUsageRecord().then(results => {
      this.props.onLoadDataUsageRecord(results);
    });
  };

  render() {
    return (
      <div>
        <div className={'title'}>数据使用情况</div>
        <div className={'stats'}>
          <div className={'stat'}>
            <div className={'title'}>阅读数</div>
            <div className={'value'}>{this.props.data.read || 0}</div>
          </div>
          <div className={'stat'}>
            <div className={'title'}>点赞数</div>
            <div className={'value'}>{this.props.data.liked || 0}</div>
          </div>
          <div className={'stat'}>
            <div className={'title'}>转发数</div>
            <div className={'value'}>{this.props.data.forwarded || 0}</div>
          </div>
          <div className={'stat'}>
            <div className={'title'}>评论数</div>
            <div className={'value'}>{this.props.data.commented || 0}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.dataUsageRecord};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadDataUsageRecord: (data) => (
      dispatch(loadDataAction(data))
    ),
  }
);

export const DataUsageRecord = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataUsageRecordContent);
