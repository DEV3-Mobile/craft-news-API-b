import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Platform } from 'react-native';

import NewsItem from '../components/NewsItem';

const NewsScreen = ({ navigation }) => {
  const [articles, setArticle] = useState([]);

  const getNewsArticles = async () => {
    try {
      //10.0.2.2:60628
      //http://craft-news-b.ddev.site
      let url;
      if (Platform.OS == 'android') {
        //ddev describe om port number te weten te komen
        url = "http://10.0.2.2:<vul port in>/api/news/";
      }
      else {
        url = "http://craft-news-b.ddev.site/api/news/"
      }

      const response = await fetch(url, {
        "method": "GET"
      });
      const json = await response.json();
      console.log(json.items);
      setArticle(json.items);
    } catch (error) {
      console.error(error);
    }
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
        renderItem={({ item }) => {
          if (Platform.OS == 'android') {
            item.bannerImg = item.bannerImg.replace('craft-news-b.ddev.site', '10.0.2.2:60628');
          }

          console.log(item.bannerImg);
          return <NewsItem
            id={item.id}
            title={item.title}
            intro={item.intro}
            banner={item.bannerImg}
            navigation={navigation}
            onSelectArticle={(selectedId) => { navigation.navigate('Details', { id: selectedId }) }}
          />
        }}
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