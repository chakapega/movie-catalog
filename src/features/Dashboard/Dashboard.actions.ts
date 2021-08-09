import { getMovies } from "./Dashboard.api";
import * as constants from "./Dashboard.constants";
import { AppThunkDispatch } from "store/types";
import { INDEX_OF_FIRST_ELEMENT } from "constants/common";
import { LanguageType } from "store/language/types";

const { nowPlaying, upcoming, popular } = constants.moviesType;

export const getNowPlayingMovies = (activeLanguage: LanguageType) => async (dispatch: AppThunkDispatch) => {
  try {
    dispatch({ type: constants.GET_NOW_PLAYING_MOVIES_START });

    const nowPlayingMovies = await getMovies(nowPlaying, activeLanguage);
    const limitedNowPlayingMovies = nowPlayingMovies.slice(INDEX_OF_FIRST_ELEMENT, constants.NUMBER_OF_FILMS_IN_LIST);

    dispatch({ type: constants.GET_NOW_PLAYING_MOVIES_SUCCESS, payload: limitedNowPlayingMovies });
  } catch (error) {
    dispatch({ type: constants.GET_NOW_PLAYING_MOVIES_ERROR, payload: error });
  }
};

export const getUpcomingMovies = (activeLanguage: LanguageType) => async (dispatch: AppThunkDispatch) => {
  try {
    dispatch({ type: constants.GET_UPCOMING_MOVIES_START });

    const upcomingMovies = await getMovies(upcoming, activeLanguage);
    const limitedUpcomingMovies = upcomingMovies.slice(INDEX_OF_FIRST_ELEMENT, constants.NUMBER_OF_FILMS_IN_LIST);

    dispatch({ type: constants.GET_UPCOMING_MOVIES_SUCCESS, payload: limitedUpcomingMovies });
  } catch (error) {
    dispatch({ type: constants.GET_UPCOMING_MOVIES_ERROR, payload: error });
  }
};

export const getPopularMovies = (activeLanguage: LanguageType) => async (dispatch: AppThunkDispatch) => {
  try {
    dispatch({ type: constants.GET_POPULAR_MOVIES_START });

    const popularMovies = await getMovies(popular, activeLanguage);
    const limitedPopularMovies = popularMovies.slice(INDEX_OF_FIRST_ELEMENT, constants.NUMBER_OF_FILMS_IN_LIST);

    dispatch({ type: constants.GET_POPULAR_MOVIES_SUCCESS, payload: limitedPopularMovies });
  } catch (error) {
    dispatch({ type: constants.GET_POPULAR_MOVIES_ERROR, payload: error });
  }
};
