/**
 * @format
 */

import {AppRegistry} from 'react-native';
// This is where all the magic happens
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

//All the namings and configurations for the app is written in package.json