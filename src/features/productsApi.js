import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productsApi = createApi ({
    reducerPath : "productsApi",
    baseQuery : fetchBaseQuery ({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getAllProducts: builder.query ({
            query: () => "products",
        }),
    }),
});

export const { useGetAllProductsQuery } = productsApi;

