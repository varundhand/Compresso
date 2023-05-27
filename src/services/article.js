import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // createApi is used to define api endpoints

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }), // headers provide the api keys,etc which eventually makes the request
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`, // add the REQUIRED PARAMETERS here i.e. 'url' is a query param
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi; // useLazy allows us to fire this hook ON DEMAND
