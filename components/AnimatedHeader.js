import React from 'react';
import {
  Animated,
 
} from 'react-native';
import {styles} from '../main/styles/dasboardStyles'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


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
      outputRange: ['#e91e63', '#1DA1F2'],
      extrapolate: 'clamp'
    });
  return (
    <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
       <Text style={styles.headerText}>Animated Header</Text>
    </Animated.View>
  );
};

export default AnimatedHeader;