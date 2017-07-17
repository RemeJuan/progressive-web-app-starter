import { connect } from 'react-redux';
import HomeComponent from './components/Home';

import {
  toDoIncrement,
  toDoDecrement,
} from './actions';

const mapStateToProps = ({ countReducer }) => ({
  count: countReducer.count,
});

const mapDispatchToProps = dispatch => ({
  increase() {
    dispatch(toDoIncrement());
  },
  decrease() {
    dispatch(toDoDecrement());
  },
});

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);

export default HomePage;
