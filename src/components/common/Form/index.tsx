import React from 'react';
import { View, TextInput, TextInputProps, Text, StyleSheet } from 'react-native';

import { colors } from '../../../constants';

interface FormInterface {
    error?: string;
}

type Props = FormInterface & TextInputProps;

const base = StyleSheet.create({
    form: {
        width: '100%',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.primary,
    },
});

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    form: {
        ...base.form,
    },
    formError: {
        ...base.form,
        borderWidth: 1.5,
        borderColor: colors.primaryError,
    },
    textError: {
        padding: 3,
        fontSize: 12,
        color: colors.primaryError,
    },
});

export const Form: React.FC<Props> = props => {
    const { error } = props;
    return (
        <View style={styles.container}>
            <TextInput {...props} style={error ? styles.formError : styles.form} />
            {error && <Text style={styles.textError}>{error}</Text>}
        </View>
    );
};
