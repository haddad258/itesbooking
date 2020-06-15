import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import axios from 'axios'
var urlbzone =require('../../const/api')()+ 'sib-api/common/floors'
var tableData=[]
export default class Listfloors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200],
      tableData:[]
      
    }
  }
  componentDidMount(){

 
    axios.get(urlbzone).then(response => response.data)
    .then((data) => {
      this.setState({ tableHead: Object.keys(data[0]) })
   //   tableData.push(Object.values(data[0]))
   

  
       
     })

     axios.get(urlbzone).then(response => response.data)
     .then((data) => {
      // this.setState({ tableHead: Object.keys(data[0]) })
      data.forEach(element =>{
        this.state.tableData.push(Object.values(element))
       });  
         
        
      }) 
    }
  render() {
    const state = this.state;
   
  /*   const tableData = [];
     for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
      console.log(tableData)
    } 
 */
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
});