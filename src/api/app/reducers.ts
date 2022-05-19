import { Actions, AppState, AppTypes } from './types';
 
export function app(state: AppState, action: AppTypes): AppState {
  switch (action.type) {
    case Actions.SET_CONFIGS: {
        const inputs = action.payload;
        return {
            ...state,
            repeatNum: inputs.repeatNum,
            inputBoxes: inputs.inputBoxes,
            selectBoxes: inputs.selectBoxes,
            condBoxes: inputs.condBoxes
        };
    }
    default:
        return state;
  }
}