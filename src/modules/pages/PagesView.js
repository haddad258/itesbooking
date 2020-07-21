import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image ,ScrollView, Settings} from 'react-native';

import { colors, fonts } from '../../styles';

const chartIcon = require('../../assets/images/pages/chart.png');
const calendarIcon = require('../../assets/images/pages/calendar.png');
const chatIcon = require('../../assets/images/pages/chat.png');
const galleryIcon = require('../../assets/images/pages/gallery.png');
const profileIcon = require('../../assets/images/pages/profile.png');
const settings = require('../../assets/images/drawer/sett.png')
const userpro =  require('../../assets/images/drawer/users.png')
const floorssett =  require('../../assets/images/drawer/floors.png')
const buildingsett = require('../../assets/images/drawer/building.png')
const zonesett = require('../../assets/images/drawer/zonesett.png')
var roomsseting = require('../../assets/images/drawer/roomsseting.png')
const listuser = require('../../assets/images/drawer/listuser.png')
const listbuilding =require('../../assets/images/drawer/listbuilding.png')

export default function PagesScreen(props) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.row}>
      {/*   <TouchableOpacity
          onPress={() => props.navigation.navigate('Charts')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={chartIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Show history</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Gallery')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ProfileBooking')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={profileIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Chat')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={chatIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Calendar')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={calendarIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {props.navigation.navigate('homeroom')}} style={styles.item}>
          <Image
            resizeMode="contain"
            source={settings}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>change default Home page </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('User')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={userpro}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>Add User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Buildings')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={buildingsett}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>Add Buildings</Text>
        </TouchableOpacity>
       
        
      </View>
      <View style={styles.row}>
      <TouchableOpacity
          onPress={() => props.navigation.navigate('Zone')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={zonesett}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>Add Zone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Floors')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={floorssett}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>Add Floors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Rooms')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={roomsseting}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}> Add Rooms</Text>
        </TouchableOpacity>
       
      
      </View>
      <View style={styles.row}>



      <TouchableOpacity
          onPress={() => props.navigation.navigate('list_user')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={listuser}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>show list user</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('list_building')}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={listbuilding}
            style={styles.itemImage}
          />
          <Text style={styles.itemTextt}>show list Building</Text>
        </TouchableOpacity>



      </View>
      <View style={styles.row}>

<TouchableOpacity
    onPress={() => props.navigation.navigate('list_floors')}
    style={styles.item}
  >
    <Image
      resizeMode="contain"
      source={floorssett}
      style={styles.itemImage}
    />
    <Text style={styles.itemTextt}>show list Floors</Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => props.navigation.navigate('list_zone')}
    style={styles.item}
  >
    <Image
      resizeMode="contain"
      source={zonesett}
      style={styles.itemImage}
    />
    <Text style={styles.itemTextt}>show list Zone</Text>
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
