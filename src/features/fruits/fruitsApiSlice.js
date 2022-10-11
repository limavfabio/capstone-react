import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const fruitsApiSlice = createApi({
  reducerPath: 'fruitsApi',

  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit',
  }),

  endpoints: (builder) => ({
    getFruits: builder.query({
      query: () => '/all',
    }),

    getFruitById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetFruitsQuery, useGetFruitByIdQuery } = fruitsApiSlice;
