// third-party
import { combineReducers } from 'redux';

// project-imports
import zipcodereducer from './zipcode'
import snackbar from './snackbar';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  snackbar,
  zipcodereducer,
});

export default reducers;
