import { Navigation } from 'react-native-navigation';

import { HomePage } from '../../../pages';
import { componentName } from '../../../constants';

export function registerScreen() {
    Navigation.registerComponent(componentName.home, () => HomePage);
}
