import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

import NewsItem from '../components/NewsItem';

const NewsScreen = ({ navigation }) => {

  const articles = [
    {
      id: 1,
      title: "title goes here",
      intro: "intro goes here",
      banner: "http://unsplash.com/photos/_SgRNwAVNKw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAyMjg4MDAxfA&force=true&w=1920"
    },
    {
      id: 2,
      title: "title goes here",
      intro: "intro goes here",
      banner: "http://unsplash.com/photos/_SgRNwAVNKw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAyMjg4MDAxfA&force=true&w=1920"
    }
  ];
  const getNewsArticles = async () => {
    //request naar CMS 
  }

  useEffect(() => {
    getNewsArticles();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Craft Headlines</Text>
      <FlatList
        style={styles.list}
        data={articles}
        keyExtractor={item => item.id}//gebruik id als key voor de flatlist
        renderItem={({ item }) => (
          <NewsItem
            id={item.id}
            title={item.title}
            intro={item.intro}
            banner={item.banner}
            navigation={navigation}
            onSelectArticle={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
          />
        )}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 24,
    backgroundColor: "#F8F6F6",
  },
  list: {
    height: "90%",
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    textAlign: "center"
  }
});
export default NewsScreen;