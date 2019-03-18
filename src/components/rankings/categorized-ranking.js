import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";

function loadCategorizedRankingAction(data) {
  return {
    type: CommonAction.LOAD_CATEGORIZED_RANKINGS,
    payload: data,
  };
}

class CategorizedRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getCategorizedRanking(this.props.keyword).then(data => {
      this.props.onLoadCategorizedRanking(data);
    });
  };

  render() {
    const results = this.props.data.slice(0, 6);
    return (
      <div className={'categorized-ranking'}>
        <div className="flex-vertical">
          <div className={'header'}>
            {this.props.label}
          </div>
          {
            results.map((r, index) => (
              <div key={index} className={'flex-1 row'}>
                <span className={'key'}>{r.keyword}</span>
                <span className={'value'}>{r.count}条</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.ranking.categorizedRanking
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadCategorizedRanking: (data) => (
      dispatch(loadCategorizedRankingAction(data))
    ),
  }
);

export const CategorizedRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorizedRankingContent);
