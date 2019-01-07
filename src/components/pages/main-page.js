import React from 'react';
import Typography from "@material-ui/core/Typography";
import SimpleLineChart from "../presentation/main-real-time-chart";
import RankingList from "../presentation/ranking-list";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

function MainPage(props) {
  const { classes } = props;

  return (
    <div className="main">
      <div className={classes.appBarSpacer} />
      <Typography variant="h4" gutterBottom component="h2">
        Orders
      </Typography>
      <Typography component="div" className={classes.chartContainer}>
        <SimpleLineChart />
      </Typography>
      <Typography variant="h4" gutterBottom component="h2">
        Products
      </Typography>
      <div className={classes.tableContainer}>
        <RankingList />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
