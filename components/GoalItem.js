import {StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import React from 'react';

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={.8} onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create ({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10,
  },
});
