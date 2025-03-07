import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Data } from '../types';

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}


export const matchesApi = createApi({
  reducerPath: 'matchesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://app.ftoyd.com/fronttemp-service', 
  }),
  endpoints: (build) => ({
    getMatches: build.query<Data, {}>({
      query: () => ({ url: `/fronttemp`, method: "GET"}),
      transformResponse: async (response: Data) => {
        // for testing
        await delay(1000)
        return response
      },
    }),
  }),
})

export const { useGetMatchesQuery } = matchesApi