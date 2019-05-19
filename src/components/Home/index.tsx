/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';

import { Images } from './Images';
import { Form } from '../common';
import { ImageInterface } from '../../types';
import { request } from '../../utils';
import { colors } from '../../constants';

interface Props {
    componentId: string;
}

interface ResponseSearchImages {
    total_pages: number;
    results: ImageInterface[];
}

export const Home: React.FC<Props> = () => {
    const [searchImage, setSearchImage] = useState('');
    const [images, setImages] = useState<ImageInterface[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    async function fetchImages(params: string) {
        try {
            setIsLoading(true);
            const res = await request.get(`/search/photos?query=${params}`);
            const { results, total_pages } = res.data as ResponseSearchImages;
            setPage(page + 1);
            setTotalPages(total_pages);
            setImages(results);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.warn(e);
        }
    }

    useEffect(() => {
        fetchImages(searchImage ? searchImage : 'jakarta');
    }, [searchImage]);

    return (
        <SafeAreaView>
            <Form placeholder="Type here to search an image" value={searchImage} onChangeText={setSearchImage} />
            {isLoading && <ActivityIndicator color={colors.primary} />}
            <Images image={images} />
        </SafeAreaView>
    );
};
