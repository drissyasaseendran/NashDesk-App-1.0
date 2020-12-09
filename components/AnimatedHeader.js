import React from 'react';

import {styles} from '../main/styles/dasboardStyles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {  Text, View, Animated, } from 'react-native';

const AnimatedHeader = ({ offset }) => {

  const HEADER_MIN_HEIGHT = 50;
  const HEADER_MAX_HEIGHT = 200;
  const headerHeight = offset.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });

  const headerBackgroundColor = offset.interpolate(
    {
      inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
      outputRange: ['#0187CA', '#0187CA'],
      extrapolate: 'clamp'
    });
  return (
    <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
    <Text style={styles.headerText}>Animated Header</Text>
    <View style={styles.Animatedcontainer}>
    <View style={styles.first} />

  </View>
 </Animated.View>
  );
};

export default AnimatedHeader;