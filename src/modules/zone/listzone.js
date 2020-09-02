/* import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import axios from 'axios'
var urlcnst = require('../../const/api')()+'sib-api/common/zones/'
var tableData=[]
export default class Listzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200],
      tableData:[]
      
    }
  }
  componentDidMount(){
    setTimeout(() => {
      
 
      this.setState({
        tableHead: [],
        widthArr: [40, 60, 80, 150, 120, 140, 160, 180, 200],
        tableData:[]
        
      })
    
    axios.get(urlcnst).then(response => response.data)
    .then((data) => {
      this.setState({ tableHead: Object.keys(data[0]) })
   //   tableData.push(Object.values(data[0]))
   

  
       
     })

     axios.get(urlcnst).then(response => response.data)
     .then((data) => {
      //console.log(urlcnst)
      data.forEach(element =>{
        this.state.tableData.push(Object.values(element))
       });  
         
      }, 2000);
      }) 
    }
  render() {
    const state = this.state;
 
const element = (data, index) => (
  <TouchableOpacity onPress={() => this._alertIndex(index)}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>button</Text>
    </View>
  </TouchableOpacity>
);
    
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  state.tableData.map((rowData, index) => (
                    
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40 }
}); */

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
var urlcnst = require('../../const/api')()+'sib-api/common/zones/with-details'

export default class Listfloors extends Component {

  constructor(props) {
    super(props);
    this.state = {
 
      tableData:[]
    }
  }

  componentDidMount(){
//console.log(urlcnst)
    axios.get(urlcnst).then(response => response.data)
    .then((data) => {
      //console.log(data)
      data.forEach(element =>{
        this.state.tableData.push(element)
       })
    }) 
    
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.tableData}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
         
          let attachment = <View/>;

          let mainContentStyle;
          if(Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = <Image style={styles.attachment} source={{uri:"https://img.icons8.com/color/70/000000/name.png"}}/>
          }
          return(
            <View style={styles.container}>
              <Image source={{uri:"https://i.ibb.co/0Myb945/zonee.png"}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.zone.name }</Text>
                    
                  </View>
                  <Text > Building: {Notification.building.name}  </Text>
          <Text> type: {Notification.name}</Text>
                  <Text style={styles.timeAgo}>
                  {Notification.zone.description}
                  </Text>
                </View>
                {attachment}
              </View>
            </View>
          );
        }}/>
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
    width:50,
    height:50,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
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
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  name:{
    fontSize:16,
    color:"#1E90FF"
  }
});  