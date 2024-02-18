import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import MovieItem from '../../components/MovieItem';
import style from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {MovieThunks} from '../../data/redux';
import {AppState} from '../../data/redux/types';
import ProgressBar from '../../components/ProgressBar';

const HomeScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const {isLoading, movies, error, currentPage, totalPages} = useSelector(
    (state: AppState) => ({
      isLoading: state.isLoading,
      movies: state.movies,
      error: state.error,
      currentPage: state.currentMoviePage,
      totalPages: state.totalPages,
    }),
  );
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(MovieThunks.getMovies(page));
  }, [dispatch, page]);

  return (
    <View style={style.container}>
      <Text>{error}</Text>
      <FlatList
        numColumns={2}
        onEndReachedThreshold={0.3}
        onEndReached={() => {
          if (currentPage && totalPages && currentPage <= totalPages) {
            setPage(prevPage => prevPage + 1);
          }
        }}
        data={movies}
        keyExtractor={(item, index) => `${item.title},${index}`}
        renderItem={({item}) => <MovieItem movieDetail={item} />}
      />
      {isLoading && <ProgressBar />}
    </View>
  );
};

export default HomeScreen;
