import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure you have react-native-vector-icons installed
import colors from '../styles/colors';
import { getHeight, getWidth } from '../styles/dimensions';

type AppHeaderType = {
  title?: string;
  onBackPress?: () => void;
  showBackIcon?: boolean
};

const AppHeader = ({ title, showBackIcon = false, onBackPress }: AppHeaderType) => {
  return (
    <View style={[styles.container]}>
      {showBackIcon && <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
        <Icon name="arrow-back" size={getWidth(6)} color={colors.white} />
      </TouchableOpacity>}
      <Text style={[styles.title]}>{title}</Text>
      <View style={styles.placeholder} />
      {/* Placeholder to keep title centered */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: getHeight(2),
  },
  iconContainer: {
    position: 'absolute',
    left: getWidth(2),
  },
  placeholder: {
    width: getWidth(6), // Match the width of the back icon for proper centering
  },
  title: {
    fontSize: getWidth(5),
    color: colors.white,
    textAlign: 'center',
    flex: 1,
  },
});

export default AppHeader;
