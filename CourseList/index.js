/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { CourseList } from './CourseList';
import CourseList2 from './CourseList2';
import CourseList4 from './CourseList4';
import Main from './NativeComponent/Main';



AppRegistry.registerComponent(appName, () => CourseList4);
AppRegistry.registerComponent(appName, () => CourseList);
AppRegistry.registerComponent(appName, () => CourseList2);
AppRegistry.registerComponent(appName, () => Main);