import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet} from 'react-native'
import colors from '../assets/theme/colors'


function SettingsComponent({settingsOptions}) {
  console.log("setting:", settingsOptions)

  return (
    <ScrollView style={styles.container}>
      { settingsOptions.map(({title, subTitle, onPress},index) => {
        console.log("title:", title, 'subtitle:', subTitle);
        return 
          <TouchableOpacity key={title} onPress={onPress}>
            <View style={{
                  paddingHorizontal: 20,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {subTitle && (
                  <Text style={{fontSize: 14, opacity: 0.5, paddingTop: 5}}>
                    {subTitle}
                  </Text>
                )}
            </View>
            <View style={{height: 0.5, backgroundColor: colors.grey}} />
          </TouchableOpacity>
      })}
    </ScrollView> 
  )
}

export default SettingsComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.white,
  },
  title: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title2: {
    fontSize: 17,
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.6,
    color: colors.grey,
    paddingTop: 5,
  }
})