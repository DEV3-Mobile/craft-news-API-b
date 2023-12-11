import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

import NewsItem from '../components/NewsItem';

const NewsScreen = ({ navigation }) => {

  const [articles, setArticles] = useState([]);

  const getNewsArticles = async () => {
    try {
      const response = await fetch("http://news-website.ddev.site/api/news", {
        "method": "GET"
      })
      const json = await response.json();
      console.log(json);
      setArticles(json.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNewsArticles();//laad movies wanneer het scherm laadt
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
            banner={item.bannerImg}
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