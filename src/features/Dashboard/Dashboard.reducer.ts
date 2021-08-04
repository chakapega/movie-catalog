import { EMPTY_MOVIES_VALUE } from "constants/common";
import * as constants from "./Dashboard.constants";
import { DashboardStateType, DashboardActionType } from "./types";

const initialState: DashboardStateType = {
  isLoadingNowPlayingMovies: false,
  nowPlayingMovies: EMPTY_MOVIES_VALUE,
  nowPlayingMoviesError: null,
  isLoadingUpcomingMovies: false,
  upcomingMovies: EMPTY_MOVIES_VALUE,
  upcomingMoviesError: null,
  isLodaingPopularMovies: false,
  popularMovies: EMPTY_MOVIES_VALUE,
  popularMoviesError: null,
};

const dashboardReducer = (state = initialState, action: DashboardActionType) => {
  switch (action.type) {
    case constants.GET_NOW_PLAYING_MOVIES_START:
      return {
        ...state,
        isLoadingNowPlayingMovies: true,
      };
    case constants.GET_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        nowPlayingMovies: action.payload,
        isLoadingNowPlayingMovies: false,
      };
    case constants.GET_NOW_PLAYING_MOVIES_ERROR:
      return {
        ...state,
        nowPlayingMoviesError: action.payload,
        isLoadingNowPlayingMovies: false,
      };
    case constants.GET_UPCOMING_MOVIES_START:
      return {
        ...state,
        isLoadingUpcomingMovies: true,
      };
    case constants.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.payload,
        isLoadingUpcomingMovies: false,
      };
    case constants.GET_UPCOMING_MOVIES_ERROR:
      return {
        ...state,
        upcomingMoviesError: action.payload,
        isLoadingUpcomingMovies: false,
      };
    case constants.GET_POPULAR_MOVIES_START:
      return {
        ...state,
        isLoadingPopularMovies: true,
      };
    case constants.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload,
        isLoadingPopularMovies: false,
      };
    case constants.GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        popularMoviesError: action.payload,
        isLoadingPopularMovies: false,
      };
    case constants.RESET_MOVIES:
      return {
        ...state,
        nowPlayingMovies: initialState.nowPlayingMovies,
        upcomingMovies: initialState.upcomingMovies,
        popularMovies: initialState.popularMovies,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
