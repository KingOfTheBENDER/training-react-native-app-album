import React from 'react';
import {Text, View, Image, Linking} from  'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail= ({album})=>{
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{uri:album.thumbnail_image}}
                    />
                </View>
                <View style={styles.textContainerStyle}>
                    <Text style={styles.textStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={styles.mainImage}
                    source={{uri:album.image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(album.url)}>
                    Купить сейчас
                </Button>
            </CardSection>
        </Card>
    );
};

const styles={
  textContainerStyle:{
      flexDirection:'column',
      justifyContent:'space-around'
  },
  textStyle:{
    fontSize:18
  },
  thumbnailStyle:{
      width:50,
      height:50
  },
  thumbnailContainerStyle:{
      justifyContent:'center',
      alignItems:'center',
      marginLeft:10,
      marginRight:10
  },
  mainImage:{
      height:300,
      flex:1,
      width: null,
  }
};

export default AlbumDetail;