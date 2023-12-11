
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const NewsArticle = props => {

  const getArticleData = async () => {
    //request naar CMS
  }

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri: "http://unsplash.com/photos/_SgRNwAVNKw/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAyMjg4MDAxfA&force=true&w=1920"
        }}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>title goes here</Text>
        <Text style={styles.body}>article text goes here</Text>
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