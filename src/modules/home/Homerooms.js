import React, { Component } from 'react';
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
      data: [
        { id: 1, title: "You", color: "#FF4500", image: "https://img.icons8.com/color/70/000000/name.png" },
        { id: 2, title: "Home", color: "#87CEEB", image: "https://img.icons8.com/office/70/000000/home-page.png" },
        { id: 3, title: "Love", color: "#4682B4", image: "https://img.icons8.com/color/70/000000/two-hearts.png" },
        { id: 4, title: "Family", color: "#6A5ACD", image: "https://img.icons8.com/color/70/000000/family.png" },
        { id: 5, title: "Friends", color: "#FF69B4", image: "https://img.icons8.com/color/70/000000/groups.png" },
        { id: 6, title: "School", color: "#00BFFF", image: "https://img.icons8.com/color/70/000000/classroom.png" },
        { id: 7, title: "Things", color: "#00FFFF", image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
        { id: 8, title: "World", color: "#20B2AA", image: "https://img.icons8.com/dusk/70/000000/globe-earth.png" },
        { id: 9, title: "Remember", color: "#191970", image: "https://img.icons8.com/color/70/000000/to-do.png" },
        { id: 10, title: "Game", color: "#008080", image: "https://img.icons8.com/color/70/000000/basketball.png" },
      ],
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

        console.log(urlconst)
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
  /******** card **************/
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
});      