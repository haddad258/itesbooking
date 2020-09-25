/* import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios'
var urlconst = require('../../const/bookapi')() + 'sib-api/booking/bookings/with-details/all-rooms'

export default class Homerooms extends Component {

  constructor(props) {
    super(props);
    this.state = {
   
      tableData: []
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title)
  }

  openhomeroom = room => {
    this.props.navigation.navigate('Home', {
      room
    })
  };
  componentDidMount() {


    axios.get(urlconst).then(response => response.data)
      .then((data) => {

        //console.log(urlconst)
        data.forEach(element => {
          this.state.tableData.push(element)
        })


      });

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.tableData}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={[styles.card, { backgroundColor: "#87CEEB" }]} onPress={() => { this.openhomeroom(item) }}>
                  <Image style={styles.cardImage} source={{ uri: "https://img.icons8.com/office/70/000000/home-page.png" }} />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={[styles.title, { color: item.color }]}>{item.room.room.name}</Text>
                  </View>
                </View>
              </View>
            )
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
  listContainer: {
    alignItems: 'center'
  },
 
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center'
  },
  title: {
    fontSize: 24,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});       */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import axios from 'axios'
var urlcnst =  require('../../const/bookapi')() + 'sib-api/booking/bookings/with-details/all-rooms'


export default class Homerooms extends Component {

  constructor(props) {
    super(props);
    this.state = {

      tableData: []
    }
  }

  componentDidMount() {

    axios.get(urlcnst)
      .then((response) => {


        this.setState({tableData:response.data})
        
      })

  }
  openhomeroom = room => {
    this.props.navigation.navigate('Home', {
      room
    })
  };

  render() {
    //console.log(this.state.tableData)
    return (
      <FlatList
        style={styles.root}
        data={this.state.tableData}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator} />
          )
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(item) => {
          
          const Notification = item.item;
          let attachment = <View />;

          let mainContentStyle;
          if (Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = <Image style={styles.attachment} source={{ uri: "https://img.icons8.com/color/70/000000/name.png" }} />
          }
          return (
            <TouchableOpacity style={[styles.card, { backgroundColor: "#87CEEB" }]} onPress={() => { this.openhomeroom(Notification.room.room.id) }}>
            <View style={styles.container}>
              <Image source={{ uri: "https://img.icons8.com/office/70/000000/home-page.png" }} style={styles.avatar} />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.room.room.name}</Text>

                  </View>
                  <Text >Location: {Notification.room.building.name}-{Notification.room.floor.name} </Text>
                  <Text>Type room: {Notification.room.room.name}</Text>
                  <Text style={styles.timeAgo}>
                    {Notification.room.room.description} with capactity {Notification.room.room.capacity} person
                  </Text>
                </View>
                {attachment}
              </View>
            </View>
            </TouchableOpacity>
          );
          
        }} />
    );
    
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969"
  },
  name: {
    fontSize: 16,
    color: "#1E90FF"
  }
});  