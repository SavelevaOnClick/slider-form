import React from 'react';
import {NavigationState, ParamListBase} from '@react-navigation/native';
import {StackActions} from '@react-navigation/routers';
import {NavigationContainerRef} from '@react-navigation/core';
import { store } from '../store';
import {setCurrentRouteName} from '@reducers/additional';

const dispatchRouteName = (routeName: string) => store?.dispatch(setCurrentRouteName(routeName))

let currentRouteName: string | undefined = '';

export const navigationRef: React.RefObject<NavigationContainerRef<ParamListBase>> =
  React.createRef();

export const onStateChange: TOnStateChange = state => {
  currentRouteName = navigationRef?.current?.getCurrentRoute()?.name
  dispatchRouteName(currentRouteName || '')
};

export function navigate(name: string, params?: any) {
	navigationRef?.current?.navigate(name, params);
}
export function goBack() {
  navigationRef?.current?.goBack();
}
export function reset(name: string, params?: any) {
  navigationRef?.current?.reset({routes: [{name, params}]});
}
export function resetSeveral(routes: any) {
  navigationRef?.current?.reset({routes});
}
export function push(name: string, params?: any) {
  navigationRef?.current?.dispatch(StackActions.push(name, params));
}
export function replace(name: string, params?: any) {
  navigationRef?.current?.dispatch(StackActions.replace(name, params));
}
export function pop(index: number) {
  navigationRef?.current?.dispatch(StackActions.pop(index));
}
export function popToTop() {
  navigationRef?.current?.dispatch(StackActions.popToTop());
}

type TOnStateChange =
  | ((state: NavigationState | undefined) => void)
  | undefined;
