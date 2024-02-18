import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

type MovieItemProps = {
  movieDetail: any;
};

const {width} = Dimensions.get('window');
const MovieItem: React.FC<MovieItemProps> = ({movieDetail}) => {
  return (
    <View testID="movie-item" style={style.container}>
      <Image
        testID="movie-image"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`,
        }}
        style={style.image}
        resizeMode="stretch"
      />
      <Text testID="movie-title" numberOfLines={1} style={style.title}>
        {movieDetail.title}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: width / 2,
    width: width / 2 - 20,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF80',
    borderRadius: 8,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});

export default MovieItem;
