import { LayoutStack, Navigation } from 'react-native-navigation';

import { HomePage } from './home';
import { colors } from '../constants';

export const defaultHomeLayoutStack: LayoutStack = {
    children: [HomePage],
};

export const App = (layoutStack: LayoutStack = defaultHomeLayoutStack) => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: colors.primaryStatusBar,
            style: 'light',
        },
        topBar: {
            background: { color: colors.primary },
            backButton: { color: colors.primaryLight },
            title: { color: colors.primaryLight, alignment: 'center' },
        },
    });

    Navigation.setRoot({
        root: { stack: layoutStack },
    });
};
