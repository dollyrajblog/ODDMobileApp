import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../../componets/CustomHeader/CustomHeader'
const FindSupplier = ({navigation}) => {
  return (
    <SafeAreaView>
      <CustomHeader navigation={navigation}
      label={"Find Supplier"}
      />
    <View>
      <Text>FindSupplier</Text>
    </View>
    </SafeAreaView>
  )
}

export default FindSupplier

const styles = StyleSheet.create({})