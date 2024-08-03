/**
 * @format
 */

import {AppRegistry} from 'react-native';
// This is where all the magic happens
import AppPro from './AppPro';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);

//All the namings and configurations for the app is written in package.json