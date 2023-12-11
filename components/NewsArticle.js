
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const NewsArticle = props => {
  const [article, setArticle] = useState({});

  const getArticleData = async () => {
    try {
      const url = encodeURI("http://news-website.ddev.site/api/news/" + props.articleId)
      const response = await fetch(url, {
        "method": "GET",

      })
      const json = await response.json();
      setArticle(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: article.headerImg
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.body}>{article.full}</Text>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
  },
  wrapper: {
    padding: 24
  },
  title: {
    fontSize: 24,
    color: "#D24335",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 24,
  },
  body: {
    lineHeight: 24

  }
});
export default NewsArticle;