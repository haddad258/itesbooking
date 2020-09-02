
import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,
  Button, Alert, Image, ImageBackground, StatusBar, ScrollView
} from 'react-native';
import axios from 'axios';
import { RadioGroup, Dropdown } from '../../components';

import Addimages from '../../addimages/importimage'
import { values } from 'lodash';
var urlcnst = require('../../const/api')() + '/sib-api/common/users'
var urlusertype = require('../../const/api')() + '/sib-api/common/groups'
var typeuserid = []
var typeusername = []
export default class User extends Component<Props> {

  constructor(props) {
    super(props);
    //this.login= this.login.bind(this);
    this.registerCall = this.registerCall.bind(this);
    var { height, width } = Dimensions.get('window');
    this.state = {
      screenHeight: height, screenWidth: width,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      status: '',
      wholeResult: '',
      userLogin: '',
      idGroup: ''
    };

  }

  onClickListener = (viewId) => {
    // Alert.alert(this.state.firstName+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
    if (this.state.firstName || this.state.firstName != " ") {
      if (this.state.lastName) {
        if (this.state.email) {
          if (this.state.password) {
            if (this.state.phone) {
              this.registerCall();
            } else {
              Alert.alert("Please enter email");
            }
          } else {
            Alert.alert("Please enter email");
          }
        } else {
          Alert.alert("Please enter ");
        }
      } else {
        Alert.alert("Please enter lastname");
      }
    } else {
      Alert.alert("Please enter username");
    }

  }

  registerCall() {


    // let body= {"firstName": this.state.firstName, "lastName":this.state.lastName, "email": this.state.email,"password": this.state.password , "phone":this.state.phone,"userLogin":this.state.userLogin}
    /*   let body= {
        "email": this.state.email,
        "emailVerified": "true",
        "email_verified": "true",
        "firstName": this.state.firstName,
        
        "lastName": this.state.lastName,
        "password": this.state.password,
        "phone": parseInt(this.state.phone),
        "userLogin": this.state.userLogin,
        "userType": "ADMIN",
        "idGroup": 12,
    
      } */

    let body = {
      "email": this.state.email,
      "emailVerified": true,
      "firstName": this.state.firstName,

      "idGroup": this.state.idGroup,
      "lastName": this.state.lastName,
      "password": this.state.password,
      "phone": this.state.phone,
      "userLogin": this.state.userLogin,
      "userType": "SUPERADMIN"
    }

    /* }
      let body={
        "email": this.state.email,
        "emailVerified": true,
        "firstName": this.state.firstName,
        
        "idGroup": 136,
        "lastName": this.state.lastName,
        "password":this.state.password,
        "phone": this.state.phone,
        "userLogin": this.state.userLogin,
        "userType": "SUPERADMIN"
      } */
    axios.post(urlcnst, body)
      .then(function (response) {
        alert("the user was successfully created with booking  " + response.data.userLogin);
        //   //console.log(response.data)
      })
      .catch(function (error) {
        alert("result:" + error)
        //  //console.log(body)
      });
    /*    axios.post(url , body ) .then(function (response) {
             
               return response.json();
             }).then(function (result) {  
                // //console.log(result);
                if(!result.error){
                /*  that.setState({ status: result.error,
                                 wholeResult: result,
                              }); 
                 Alert.alert("User register successfully \n userId: "+that.state.wholeResult.user.uid);
                 //console.log(that.state.wholeResult.user.uid);
             }else{
              Alert.alert(result.error_msg);
              //console.log(result);
        }
     }).catch(function (error) {
        //console.log("-------- error ------- "+error);
        alert("result:"+error)
      });*/
  }

  render() {
    var typeroomname = ["Admin", "User", "Guest"]

    axios.get(urlusertype)
      .then(function (response) {
        typeuserid.length = 0;
        typeusername.length = 0;

        for (var i = 0; i < response.data.length; i++) {
          typeuserid.push(response.data[i].id);
          typeusername.push(response.data[i].name);
        }
      })

    return (


      <ImageBackground
        source={require('../../assets/images/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={{ width: '100%', height: '100%' }}>
        <ScrollView>
          <StatusBar
            backgroundColor="#0B7600"
            barStyle="light-content" />
          <View style={styles.container}>
            <Text style={styles.input}>Add user</Text>
            <View style={styles.inputContainer}>
              <Dropdown
                style={{ width: 350, alignSelf: 'center' }}
                placeholder={'select typeuser'}
                onSelect={(Value) => {
                  this.state.idGroup = typeuserid[Value];


                }}
                items={typeusername}



              ></Dropdown>
            </View>


            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="userLogin"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(userLogin) => this.setState({ userLogin })} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="firstName"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(firstName) => this.setState({ firstName })} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="lastName"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(lastName) => this.setState({ lastName })} />
            </View>

            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ email })} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                placeholder="Phone"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(phone) => this.setState({ phone })} />
            </View>

            <View style={styles.inputContainer}>

              <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({ password })} />
            </View>

            <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
              <Text style={styles.signUpText}>Add</Text>
            </TouchableOpacity>

          </View>
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
  input: {
    margin: 15,
    fontSize: 40,
    marginBottom: 40,
    color: 'black'
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 60,
  },
  submitButtonText: {
    color: '#FFFFFF',
    backgroundColor: '#3462FD',
    width: 350,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpText: {
    color: '#FFFFFF',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomColor: '#05C203',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    width: 350,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
})