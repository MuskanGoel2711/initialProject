import { combineReducers } from 'redux';
import AuthSlice from './config/AuthSlice';
// import heartSlice from './config/heartSlice';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeSlice from './config/ThemeSlice';

const rootReducer = combineReducers({
  AuthSlice,
  ThemeSlice
  // heartSlice
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const rootReducer = (state: any, action: any) => {
//   return RootReducer(state, action);
// };

export default persistedReducer;