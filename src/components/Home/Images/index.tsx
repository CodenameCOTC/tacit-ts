import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

import { ImageInterface } from '../../../types';

interface Props {
    image: ImageInterface[];
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',
    },
});

export const Images: React.FC<Props> = ({ image }) => {
    return (
        <FlatList
            extraData={image}
            data={image}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item.urls.regular, width: 0, height: 0 }}
                    style={styles.image}
                    resizeMethod="auto"
                    resizeMode="cover"
                />
            )}
            keyExtractor={item => item.id}
        />
    );
};
