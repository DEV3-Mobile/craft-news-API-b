import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NewsItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArticle(props.id)}>
      <View style={styles.newsItem}>
        <Image
          style={styles.banner}
          source={{
            uri: props.banner
          }}
        />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.intro}>{props.intro}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  newsItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
  },
  banner: {
    height: 100
  },
  title: {
    fontWeight: "bold",
    color: "#D24335",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 12,
    textTransform: "uppercase"
  },
  intro: {
    marginBottom: 8
  }
});
export default NewsItem;