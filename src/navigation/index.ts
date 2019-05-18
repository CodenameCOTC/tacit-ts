import { LayoutStack, LayoutStackChildren, Navigation } from 'react-native-navigation';

import { HomePage } from './home';

export const defaultHomeLayoutStack: LayoutStack = {
    children: [HomePage],
};

export const App = (layoutStack: LayoutStack = defaultHomeLayoutStack) => {
    Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: 'white',
            style: 'light',
        },
        topBar: {
            background: { color: 'red' },
            backButton: { color: 'white' },
            title: { color: 'white', alignment: 'center' },
        },
    });

    Navigation.setRoot({
        root: { stack: layoutStack },
    });
};
