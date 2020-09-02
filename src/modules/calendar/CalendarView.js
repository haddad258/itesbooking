/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import axios from 'axios'
import { colors, fonts } from '../../styles';
var urlcnst = require('../../const/bookapi')() + 'sib-api/booking/bookings/by-date/between-dates?startDate=2020-03-23T09:07:00.422Z&endDate=2020-12-29T08:16:14.132Z'


class CalendarScreen extends React.Component {
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  renderItem(item) {
    const labels =
      item.labels &&
      item.labels.map(label => (
        <View
          key={`label-${label}`}
          style={{
            padding: 5,
            backgroundColor:
              label === 'Urgent' ? colors.primary : colors.secondary,
            borderRadius: 3,
          }}
        >
          <Text style={{ color: 'white' }}>{label}</Text>
        </View>
      ));

    return (
      <View style={styles.item}>
        <View>
          <Text
            style={{
              color: '#48506B',
              fontFamily: fonts.primaryRegular,
              marginBottom: 10,
            }}
          >
           Topic Booking {item.name} :
          </Text>
          <Text style={{ color: '#9B9B00', fontFamily: fonts.primaryRegular }}>
          Room  {item.room}   reserved By  {item.user}
          </Text>
        </View>

        <View styleName="horizontal h-start">{labels}</View>
      </View>
    );
  }

  render() {
   // const { items, loadItems } = this.props;
   // //console.log("thisitems" ,items)

   const items = {};

  // axios.get("http://192.168.1.187:9880/sib-api/booking/bookings/by-date/between-dates?startDate=2020-03-23T09:07:00.422Z&endDate=2020-12-29T08:16:14.132Z")
  axios.get(urlcnst)
  .then((response) =>{
  
    
     response.data.forEach(element => {
    // //console.log(Object.keys(element)[0].topic)
     // //console.log(new Date(Object.keys(element)[0]).toISOString().split('T')[0])
   items[new Date(Object.keys(element)[0]).toISOString().split('T')[0]] = [{name: element[Object.keys(element)[0]].topic ,
    user :  element[Object.keys(element)[0]].user.userLogin ,
    time:"hello", room:  element[Object.keys(element)[0]].room.room.name   ,labels:[new Date(Object.keys(element)[0]).toISOString().split('T')[0]]}]
   
   });
  })

    return (
      <Agenda
        items={items}
        renderItem={this.renderItem}
      /*   loadItemsForMonth={loadItems}
       
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        */
        theme={{
          dotColor: colors.primaryLight,
          selectedDayBackgroundColor: colors.primaryLight,
          agendaDayTextColor: colors.primaryLight,
          agendaDayNumColor: colors.primaryLight,
          agendaTodayColor: '#4F44B6',
          backgroundColor: '#F1F1F8',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteTwo,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default CalendarScreen;
