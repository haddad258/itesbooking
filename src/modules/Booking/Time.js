//This is an example code to get DatePicker// 
import React, { Component } from 'react';
//import react in our code. 
import {View, StyleSheet} from 'react-native';
//import all the components we are going to use.
import DatePicker from 'react-native-datepicker';
//import DatePicker from the package we installed

export default class Time extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '-'+ today.getHours() ;
   ////console.log(today)
    this.state = {date: date}
  }

  render(){
    return (
      <View style={styles.container}>

        <DatePicker
          style={{width: 300}}
          androidMode="spinner"
          date={this.state.date} //initial date from state
          mode="datetime" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DDTHH:MM:SS"
          minDate="2016-01-01"
          maxDate="2050-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 38
            }
          }}
          //onDateChange={(date) => {this.setState({date: date})}}
           onDateChange={this.props.brand}
        />

      </View>
    )
  }
}
const styles = StyleSheet.create ({
 container: {
    borderBottomColor: '#05C203',
    backgroundColor: '#FFFFFF',
    borderRadius:5,
    borderBottomWidth: 1,
    width:350,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
 }
})