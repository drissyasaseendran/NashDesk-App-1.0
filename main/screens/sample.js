import React, { useRef } from "react";
import {Text, View, StyleSheet, Platform, Animated, ScrollView, } from 'react-native';
const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 200;
function sample ({navigation}){
    const offset = useRef(new Animated.Value(0)).current;
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
        <View style={styles.container} >
        <ScrollView
        showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset} } }]
          )}>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>


        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>


        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>

        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        <Text>shhhhhhh</Text>
        </ScrollView>

        <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
          <Text style={styles.headerText}>Animated Header</Text>
        </Animated.View>

      </View>
    );
        }
    export default sample
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",

    },
    animatedHeaderContainer: {
      position: 'absolute',
      top: (Platform.OS == 'ios') ? 20 : 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      color: 'white',
      fontSize: 22
    },
    item: {
      backgroundColor: '#ff9e80',
      margin: 8,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemText: {
      color: 'black',
      fontSize: 16
    }
    
  });