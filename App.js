/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  ListView,              // deprecated 
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const data = [
  {
    id: '123456', 
    title: 'Android Programming'
  }, 
  {
    id: '223344', 
    title: 'iOS Programming'
  }, 
  {
    id: '543455', 
    title: 'Web Programming'
  }
];

export default class App extends Component {

  renderSeparator = () => {
    return(
      <View style={{ 
        height:0.8, 
        width: "100%", 
        backgroundColor: "#000000" }} />
    );
  };

  // jika dipilih salah satu item 
  getListViewItem = (item) => {
    Alert.alert(item.key);
  }
  
    render() {
      return(
        <View style={styles.container}>
          {/* <FlatList data={data} 
            renderItem={({ item }) => 
            <Item title={item.title} />} /> */}

            <FlatList data={[
              { key: 'Android Programming' }, 
              { key: 'iOS Programming' }, 
              { key: 'Web Programming' }, 
              { key: 'React Native' }, 
              { key: 'Angular JS' }
            ]}
            renderItem={({item}) => 
              <Text style={styles.item} 
                onPress={this.getListViewItem.bind(this, item)}>
                {item.key} 
              </Text>} ItemSeparatorComponent={this.renderSeparator} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  item: {
    padding: 10, 
    fontSize: 18, 
    height: 44,
  },
})

function Item({ title }) {
  return(
    <View>
      <Text>{title}</Text>
    </View>
  );
}
