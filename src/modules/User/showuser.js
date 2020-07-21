import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
var urlconst = require('../../const/api')()+'sib-api/common/users/login'

export default class Showuser extends Component {


     state = {
        user:{}
          };
 
     componentDidMount(){

        
        axios.post(urlconst, this.props.route.params.userinfo).then(response => response.data)
        .then((data) => {
            this.setState({user : data})
          console.log(data)
         })
    } 

  render() {
    console.log(this.state.user)
   if(this.props.route.params.userinfo.password ==="" || this.props.route.params.userinfo.loginuser ==="" || !this.state.user.id){

    
return (

  <View style={styles.container}> 
  <View style={styles.header}>
            <View style={styles.headerContent}>
  <Text style={styles.name}
  
  onPress={()=> this.props.navigation.navigate('ProfileBooking')}
  >
                user not find please try again _click here_
                </Text>
                </View>
                </View>
  </View>
)

   } else{
  
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                  
                <Text style={styles.name}>
                  Mr/Mme {this.state.user.firstName} {this.state.user.lastName}
                </Text>
                
                <Text style={styles.name}>
                  userLogin: {this.state.user.userLogin} 
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.textInfo}>
               email: {this.state.user.email}
              </Text>
          
              <Text style={styles.textInfo}>
               Phone: {this.state.user.phone}
              </Text>
              <Text style={styles.textInfo}>
               Group: {this.state.user.idGroup}
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
 