import { useReducer } from 'react';
 
import { defaultState } from '../../provider/app';
import { app } from './reducers';
import { Actions, AppState, AppTypes, TConfig } from './types';
 
const initialState: AppState = defaultState.store;
 
export type AppDispatch = React.Dispatch<AppTypes>;
 
 
export const useApp = (): [AppState, React.Dispatch<AppTypes>] => {
  const [state, dispatch] = useReducer(app, initialState);
  return [state, dispatch];
};
 
export const setConfig = async (data: TConfig, dispatch: React.Dispatch<AppTypes>): Promise<void> => {
  dispatch({ type: Actions.SET_CONFIGS, payload: data });
};