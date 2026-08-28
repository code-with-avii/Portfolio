import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3500/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
    getSkills: builder.query({
      query: () => "/skills",
    }),
    getExperiences: builder.query({
      query: () => "/experience",
    }),
    getAchievements: builder.query({
      query: () => "/achievements",
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetSkillsQuery,
  useGetExperiencesQuery,
  useGetAchievementsQuery,
} = apiSlice;
