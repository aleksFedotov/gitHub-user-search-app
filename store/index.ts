import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import { GitHubData } from '../pages/index';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

interface InitialState {
  error: boolean;
  data: GitHubData | null;
}

const initialState: InitialState = {
  error: false,
  data: null,
};

const gitHubSlice = createSlice({
  name: 'gitHub',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },

    setData(state, action: PayloadAction<GitHubData>) {
      state.data = action.payload;
    },
  },
});

const githubAction = gitHubSlice.actions;

export const getGitHubData = (query: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(githubAction.setError(false));
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);

      const resData = await res.json();
      if (!res.ok) {
        throw new Error();
      }

      const {
        id,
        name,
        login,
        avatar_url,
        followers,
        following,
        public_repos,
        created_at,
        bio,
        blog,
        company,
        location,
        twitter_username,
      }: GitHubData = resData;

      const data = {
        id,
        name,
        login,
        avatar_url,
        followers,
        following,
        public_repos,
        created_at,
        bio,
        blog,
        company,
        location,
        twitter_username,
        isInitialLoad: false,
      };

      dispatch(githubAction.setData(data));
    } catch (error) {
      dispatch(githubAction.setError(true));
    }
  };
};

export const store = configureStore({
  reducer: { github: gitHubSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
