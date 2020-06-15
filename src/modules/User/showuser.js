import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
const API_URL = 'http://197.27.92.203:9970/sib-api/common/users/';

export default class Showuser extends Component {


     state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        phone: '',
          };
 
     componentDidMount(){

        const url = `${API_URL}`;
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({ id: data[0].id })
            this.setState({ firstName: data[0].firstName })
            this.setState({ lastName: data[0].lastName })
            this.setState({ email: data[0].email })
            this.setState({ phone: data[0].phone })
            this.setState({ password: data[0].password })
          console.log(data)
         })
    } 

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                <Text style={styles.name}>
                  Mr/Mme {this.state.firstName} {this.state.lastName}
                </Text>
                <Text style={styles.name}>
                  id: {this.state.id} 
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.textInfo}>
               email: {this.state.email}
              </Text>
          
              <Text style={styles.textInfo}>
               Phone: {this.state.phone}
              </Text>
            
              <Text style={styles.textInfo}>
                Reservation 
              </Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1E90FF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  }
});
 