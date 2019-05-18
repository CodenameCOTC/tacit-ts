import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});

const App: React.FC<{}> = (): React.ReactElement => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>WTF?</Text>
        </SafeAreaView>
    );
};

export default App;
