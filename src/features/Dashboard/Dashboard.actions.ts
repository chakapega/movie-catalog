import * as api from "./Dashboard.api";
import * as constants from "./Dashboard.constants";
import { AppThunkDispatch } from "store/types";
import { INDEX_OF_FIRST_ELEMENT } from "constants/common";
import { LanguageType } from "store/language/types";

export const getNowPlayingMovies = (activeLanguage: LanguageType) => async (dispatch: AppThunkDispatch) => {
  try {
    dispatch({ type: constants.GET_NOW_PLAYING_MOVIES_START });

    const nowPlayingMovies = await api.getNowPlayingMovies(activeLanguage);
    const fiveNowPlayingMovies = nowPlayingMovies.slice(INDEX_OF_FIRST_ELEMENT, constants.NUMBER_OF_FILMS_IN_LIST);

    dispatch({ type: constants.GET_NOW_PLAYING_MOVIES_SUCCESS, payload: fiveNowPlayingMovies });
  } catch (error) {
    dispatch({ type: constants.GET_NOW_PLAYING_MOVIES_ERROR, payload: error });
  }
};

export const getUpcomingMovies = (activeLanguage: LanguageType) => async (dispatch: AppThunkDispatch) => {
  try {
    dispatch({ type: constants.GET_UPCOMING_MOVIES_START });

    const upcomingMovies = await api.getUpcomingMovies(activeLanguage);
    const fiveUpcomingMovies = upcomingMovies.slice(INDEX_OF_FIRST_ELEMENT, constants.NUMBER_OF_FILMS_IN_LIST);

    dispatch({ type: constants.GET_UPCOMING_MOVIES_SUCCESS, payload: fiveUpcomingMovies });
  } catch (error) {
    dispatch({ type: constants.GET_UPCOMING_MOVIES_ERROR, payload: error });
  }
};

export const getPopularMovies = (activeLanguage: LanguageType) => async (dispatch: AppThunkDispatch) => {
  try {
    dispatch({ type: constants.GET_POPULAR_MOVIES_START });

    const popularMovies = await api.getPopularMovies(activeLanguage);
    const fivePopularMovies = popularMovies.slice(INDEX_OF_FIRST_ELEMENT, constants.NUMBER_OF_FILMS_IN_LIST);

    dispatch({ type: constants.GET_POPULAR_MOVIES_SUCCESS, payload: fivePopularMovies });
  } catch (error) {
    dispatch({ type: constants.GET_POPULAR_MOVIES_ERROR, payload: error });
  }
};
