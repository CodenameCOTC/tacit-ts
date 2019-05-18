import { Navigation } from 'react-native-navigation';

import { registerScreen } from './src/utils';
import { App } from './src/navigation';

registerScreen();

Navigation.events().registerAppLaunchedListener(() => {
    App();
});
