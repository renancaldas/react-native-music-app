import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

const Topics = ({ match }) => {
  return <Text style={styles.topic}>{match.params.topicId}</Text>
};

const styles = StyleSheet.create({
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default Topics;
