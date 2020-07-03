import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image ,ScrollView} from 'react-native';

import { colors, fonts } from '../styles';

const chartIcon = require('../../assets/images/pages/chart.png');
const calendarIcon = require('../../assets/images/pages/calendar.png');
const chatIcon = require('../../assets/images/pages/chat.png');
const galleryIcon = require('../../assets/images/pages/gallery.png');
const profileIcon = require('../../assets/images/pages/profile.png');
// const settings = require('../assets/images/pages/sett.png')
const typeofexample = require('../assets/images/pages/type.png')

export default function Typecompement(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      
       
       
     
        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('type_building')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={typeofexample}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}> Add Type Building</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('type_zone')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={typeofexample}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>Add Type zone</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('typefloors')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={typeofexample}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>Add Type floors</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => props.navigation.navigate('Type_rooms')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={typeofexample}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>Add Type room</Text>
        </TouchableOpacity>

        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },itemTextt: {
    color: "black",
    fontFamily: fonts.primary,
  }
});
