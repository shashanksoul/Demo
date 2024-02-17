import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import DATA from '../../res.json';
import MovieItem from '../../components/MovieItem';
import style from './styles';
import {getPopularMovies} from '../../data/api';

const HomeScreen: React.FC = () => {
  useEffect(() => {
    // getPopularMovies()
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  },[]);
  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        data={DATA.results}
        renderItem={({item}) => <MovieItem movieDetail={item} />}
      />
    </View>
  );
};

export default HomeScreen;
