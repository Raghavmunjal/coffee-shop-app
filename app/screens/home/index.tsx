import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { primaryBlackHex } from '../../constants/colors'
import styles from './styles'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
          <View>
            <Text>HomE sCREEN</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen