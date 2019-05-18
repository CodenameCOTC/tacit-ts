import { Navigation } from 'react-native-navigation';

import { Home } from '../../../components';
import { componentName } from '../../../constants';

export function registerScreen() {
    Navigation.registerComponent(componentName.home, () => Home);
}
