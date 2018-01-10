import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import SvgUri from 'react-native-svg-uri';
import {StackNavigator} from 'react-navigation';

import HelpScreen from './screens/HelpScreen';
import MainScreen from './screens/MainScreen';

const AppScreens = StackNavigator({
  Help: { screen: HelpScreen },
  Main: { screen: MainScreen },
}, {
  headerMode: 'screen',
  transitionConfig: () => ({ screenInterpolator: () => null }),
});

export default class App extends React.Component {
  render() {
    return <AppScreens/>;
  }
}
