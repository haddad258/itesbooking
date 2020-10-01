
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,
  Button, Alert, Image, ImageBackground, StatusBar, ScrollView
} from 'react-native';
import axios from 'axios';
import { colors, fonts } from '../../styles';
import { RadioGroup, Dropdown } from '../../components';
import { set } from 'lodash';

var urlcnst = require('../../const/api')() + 'sib-api/common/' 
var urlbull = require('../../const/api')() + '/sib-api/common/'

export default class Common extends Component<Props> {

  constructor(props) {
    super(props);
    var { height, width } = Dimensions.get('window');
    this.state = {
      screenHeight: height, screenWidth: width,
      selectedTab: 'tabName',
      data : []
    };

  }


  setSelectedTab  = (value) => {
    this.setState( {selectedTab : value} )
    
  }

  callData =   (url, urltarget) =>{
    axios.get(url+urltarget).then(response => this.setState( {data : response.data} ))
  }

  fetchData =  (urltarget) => (
    this.callData(urlcnst, urltarget),
    this.state.data ? this.state.data.map(d => 
      <Text style={styles.title}> {d.name} </Text>
      ) : <Text style={styles.title}> No Data To fetch </Text>
  )
  render() {


    return (


      <ImageBackground
        source={require('../../assets/images/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <StatusBar
            backgroundColor="#0B7600"
            barStyle="light-content" />

             <View style={styles.row}> 
                 <TouchableOpacity style={styles.item} onPress={() => this.setSelectedTab('buildings')} >
                     <Text style={styles.title}>Buildings</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.item} onPress={() => this.setSelectedTab('zones')} >
                     <Text style={styles.title}>Zones</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.item} onPress={() => this.setSelectedTab('floors/')} >
                     <Text style={styles.title}>Floors</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.item} onPress={() => this.setSelectedTab('rooms')} >
                     <Text style={styles.title}>Rooms</Text>
                 </TouchableOpacity>
             </View>
             <ScrollView style={styles.row}>
             <Text style={styles.title}> {this.state.selectedTab} test</Text>
             {this.fetchData(this.state.selectedTab)}
             </ScrollView>
            
        </ScrollView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 70,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
})
