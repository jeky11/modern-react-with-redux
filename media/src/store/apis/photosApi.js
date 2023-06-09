import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {faker} from '@faker-js/faker';

// DEV ONLY!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async (...args) => {
            // REMOVE FOR PRODUCTION
            await pause(100);
            return fetch(...args);
        }
    }),
    endpoints(builder) {
        return {
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => [{type: 'AlbumPhotos', id: album.id}],
                query: (album) => {
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: {
                            albumId: album.id,
                            url: faker.image.urlLoremFlickr({width: 150, height: 150})
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => [{type: 'Photo', id: photo.id}],
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: 'DELETE'
                    }
                }
            }),
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map(photo => {
                        return {type: 'Photo', id: photo.id};
                    });
                    tags.push({type: 'AlbumPhotos', id: album.id});
                    return tags;
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET'
                    };
                }
            })
        };
    }
});

export const {
    useAddPhotoMutation,
    useRemovePhotoMutation,
    useFetchPhotosQuery
} = photosApi;
export {photosApi};