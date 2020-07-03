
    import React, {Component} from 'react';
    import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
    Button,Alert,Image,ImageBackground,StatusBar ,ScrollView} from 'react-native';
    import axios from 'axios';
    
    import {  RadioGroup, Dropdown } from '../../components';
    
    import Addimages from '../../addimages/importimage'
    var urlcnst = require('../../const/api')() +'/sib-api/common/zones/types'
   
    
    
    var selectbuildingid =[]
    var selectbuildingname = []
    var selectzoneid =[]
    var selectzonename =[]
    export default class Typezone extends Component<Props> {
    
    constructor(props) {
       super(props);
        //this.login= this.login.bind(this);
        this.registerCall = this.registerCall.bind(this);
        var {height, width} = Dimensions.get('window');
        this.state = {screenHeight: height, screenWidth: width,
                     
                   
                     gpsLocation: '',
                     name:'',
                     state:'',
                     postalCode:'',
                     type:'',                
                     status: '',
                     wholeResult: '',
                    };
    
       }
    
    onClickListener = (viewId) => {
            // Alert.alert(this.state.idBuilding+" "+this.state.idZone+" "+this.state.gpsLocation , "View_id "+viewId);
        
          this.registerCall();
      
     
            }
     registerCall(){
      
      
      
      let body= { "description":this.state.description,"name":this.state.name }
      axios.post(urlcnst,body )
       .then(function (response) {
         alert("the type Zone was successfully created with id " + response.data);
         console.log("this.reponse")
       })
       .catch(function (error) {
         alert("result:"+error)
       }); 
       
      
    /*   axios.post(urlcnst , body ) .then(function (response) {
            
              return response.json();
            }).then(function (result) {  
               // console.log(result);
               if(!result.error){
                that.setState({ status: result.error,
                                wholeResult: result,
                             });
                Alert.alert("User register successfully \n userId: "+that.state.wholeResult.user.uid);
                console.log(that.state.wholeResult.user.uid);
            }else{
             Alert.alert(result.error_msg);
             console.log(result);
       }
    }).catch(function (error) {
       console.log("-------- error ------- "+error);
       alert("result:"+error)
     });*/
    } 
     
    render() {
      
 
    
      return (
        
    
         <ImageBackground
           source={require('../../assets/images/background.png')}
           imageStyle={{resizeMode: 'stretch'}}
           style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <StatusBar
           backgroundColor="#0B7600"
           barStyle="light-content"/>
    
       <View style={styles.container}>
    
       <Text style={styles.input}>Add Type Zone</Text>
    
      
    
          
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
         placeholder="Name"
         keyboardType="Name"
         underlineColorAndroid='transparent'
         onChangeText={(name) => this.setState({name})}/>
       </View>
       <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
         placeholder="description"
         keyboardType="description"
         underlineColorAndroid='transparent'
         onChangeText={(description) => this.setState({description})}/>
       </View>
  
   
    
       
       <TouchableOpacity style={styles.submitButtonText} onPress={() => this.onClickListener('sign_up')}>
         <Text style={styles.signUpText}>Add </Text>
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
        marginBottom : 40,
        color : 'black'
      },
      submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 60,
     },
     submitButtonText:{
       color: '#FFFFFF',
       backgroundColor: '#3462FD',
       width:350,
       height:45,
       borderRadius:10,
       justifyContent: 'center',
       alignItems: 'center'
     },
     signUpText:{
       color: '#FFFFFF',
       alignItems: 'center'
     },
     signUpTextt:{
      color: 'red',
      alignItems: 'center'
    },
     inputContainer: {
       borderBottomColor: '#05C203',
       backgroundColor: '#FFFFFF',
       borderRadius:5,
       borderBottomWidth: 1,
       width:350,
       height:45,
       marginBottom:20,
       flexDirection: 'row',
       alignItems:'center'
     },
     inputs:{
       height:45,
       marginLeft:16,
       borderBottomColor: '#FFFFFF',
       flex:1,
      },
    })