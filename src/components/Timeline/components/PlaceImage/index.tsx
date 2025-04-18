import React from 'react';
import { Image, StyleSheet } from 'react-native';

type PlaceImageTimelineItem = {
  imageSource: string
}

const PlaceImageTimelineItem = ({ imageSource }: PlaceImageTimelineItem) => {
  // const { data, isLoading } = useQuery(["image", imageSource], () => fetchImage(imageSource));

  // if (isLoading) {
  //   return <ActivityIndicator size="small" color="gray" />;
  // }

  // if (!data) {
  //   return <Text>Erro ao carregar a imagem.</Text>;
  // }

  const data = imageSource;

  return (
     <Image source={{ uri: data }} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginRight: 10,
  }
});



export default PlaceImageTimelineItem;