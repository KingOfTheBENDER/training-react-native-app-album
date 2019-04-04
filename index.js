
//добавить библиотеку для помощи в создании компонента
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'
//создать компонент
const App=()=>(
    <View style={{flex:1}}>
        <Header headerText={'Альбомы'} />
        <AlbumList />
    </View>
);


//показать на устройстве

AppRegistry.registerComponent('reactmob',()=>App);
