import { Action } from '../../types/Action';

export enum Actions {
    SET_CONFIGS = 'SET_CONFIGS',
};

export type TConfig = {
    repeatNum: number;
    inputBoxes: number;
    selectBoxes: number;
    condBoxes: number;
}

export interface AppState {
    repeatNum: number;
    inputBoxes: number;
    selectBoxes: number;
    condBoxes: number;
};

export type SetConfigurations = Action<typeof Actions.SET_CONFIGS, TConfig>;

export type AppTypes = SetConfigurations;