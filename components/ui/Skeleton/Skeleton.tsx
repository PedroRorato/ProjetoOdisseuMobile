import { useEffect, useRef } from 'react';
import type { DimensionValue } from 'react-native';
import { Animated, StyleSheet } from "react-native";


type SkeletonProps = {
  height?: number | DimensionValue;
  width?: number | DimensionValue;
  marginBottom: number;
}

const Skeleton = ({height = 50, width = '100%', marginBottom = 10}: SkeletonProps) => {
  const opacity = useRef(new Animated.Value(0.5)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    )

    animation.start()

    return () => animation.stop() // ✅ cleanup
  }, [opacity])

  return(
    <Animated.View style={[styles.container, { height, width, opacity, marginBottom }]}/>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    backgroundColor: '#D1D3D5',
    borderRadius: 4,
  },
});

export default Skeleton;