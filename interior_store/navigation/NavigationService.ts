import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef<any>>();
export const NavigationService = {
  navigate: (name: string, params?: any) =>
    navigationRef.current?.navigate(name, params),
};
