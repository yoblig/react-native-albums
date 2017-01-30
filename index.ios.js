// Import Library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App = () => (
    <View>
        <Header headerText={'MONEY'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);


// Create a Component

// Render it to device
