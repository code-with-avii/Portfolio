import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const initialState= {
 projects: [],
 skills: [],
 experiences: [],
 achievements: [],
 loading: {
 projects: false,
 skills: false,
 experiences: false,
 achievements: false,
 },
 error: null,
};

// Async Thunks
export const fetchProjects = createAsyncThunk('portfolio/fetchProjects', async () => {
 const response = await fetch(`${API_URL}/projects`);
 if (!response.ok) throw new Error('Failed to fetch projects');
 return (await response.json());
});

export const fetchSkills = createAsyncThunk('portfolio/fetchSkills', async () => {
 const response = await fetch(`${API_URL}/skills`);
 if (!response.ok) throw new Error('Failed to fetch skills');
 return (await response.json());
});

export const fetchExperiences = createAsyncThunk('portfolio/fetchExperiences', async () => {
 const response = await fetch(`${API_URL}/experience`);
 if (!response.ok) throw new Error('Failed to fetch experiences');
 return (await response.json());
});

export const fetchAchievements = createAsyncThunk('portfolio/fetchAchievements', async () => {
 const response = await fetch(`${API_URL}/achievements`);
 if (!response.ok) throw new Error('Failed to fetch achievements');
 return (await response.json());
});

export const portfolioSlice = createSlice({
 name: 'portfolio',
 initialState,
 reducers: {
 setLocalFallbackData: (state, action) => {
 state.projects = action.payload.projects;
 state.skills = action.payload.skills;
 state.experiences = action.payload.experiences;
 state.achievements = action.payload.achievements;
 }
 },
 extraReducers: (builder) => {
 builder
 // Projects
 .addCase(fetchProjects.pending, (state) => {
 state.loading.projects = true;
 })
 .addCase(fetchProjects.fulfilled, (state, action) => {
 state.loading.projects = false;
 state.projects = action.payload;
 })
 .addCase(fetchProjects.rejected, (state, action) => {
 state.loading.projects = false;
 state.error = action.error.message || 'Failed to load projects';
 })
 // Skills
 .addCase(fetchSkills.pending, (state) => {
 state.loading.skills = true;
 })
 .addCase(fetchSkills.fulfilled, (state, action) => {
 state.loading.skills = false;
 state.skills = action.payload;
 })
 .addCase(fetchSkills.rejected, (state, action) => {
 state.loading.skills = false;
 state.error = action.error.message || 'Failed to load skills';
 })
 // Experiences
 .addCase(fetchExperiences.pending, (state) => {
 state.loading.experiences = true;
 })
 .addCase(fetchExperiences.fulfilled, (state, action) => {
 state.loading.experiences = false;
 state.experiences = action.payload;
 })
 .addCase(fetchExperiences.rejected, (state, action) => {
 state.loading.experiences = false;
 state.error = action.error.message || 'Failed to load experiences';
 })
 // Achievements
 .addCase(fetchAchievements.pending, (state) => {
 state.loading.achievements = true;
 })
 .addCase(fetchAchievements.fulfilled, (state, action) => {
 state.loading.achievements = false;
 state.achievements = action.payload;
 })
 .addCase(fetchAchievements.rejected, (state, action) => {
 state.loading.achievements = false;
 state.error = action.error.message || 'Failed to load achievements';
 });
 },
});

export const { setLocalFallbackData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
