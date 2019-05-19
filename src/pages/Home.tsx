import React from 'react';
import { Home } from '../components';
import { Options } from 'react-native-navigation';

interface Props {
    componentId: string;
}

export class HomePage extends React.PureComponent<Props, {}> {
    static options: Options = {
        topBar: {
            title: { text: 'Tacit' },
        },
    };

    render() {
        return <Home componentId={this.props.componentId} />;
    }
}
