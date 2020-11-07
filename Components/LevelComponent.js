import React ,{Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';


class Settings extends Component {
    static navigationOptions = {
        title: 'Settings'
    }

    render() {
        const { navigate } = this.props.navigation;
   
            return (
                <ScrollView style= {styles.myButton}>
              <TouchableOpacity onPress = {() => {/* do this */}}>
              <View justifyContent={'center'}>
              <Text> Select a Level </Text>
              </View>
                 <View style = {styles.buttonContainer}>
                 
                  <Text style = {{color: 'white'}}>Easy</Text>
                
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => {/* do this */}}>
                 <View style = {styles.buttonContainer}
                  >
                  <Text style = {{color: 'white'}}>Medium</Text>
                
              </View>
              </TouchableOpacity>
             
              <TouchableOpacity onPress = {() => {/* do this */}}>
                 <View style = {styles.buttonContainer}
                  >
                  <Text style = {{color: 'white'}}>Hard</Text>
                
              </View>
              </TouchableOpacity>
              </ScrollView>
                
            
            );   
    }
}
const styles =  {
    buttonContainer: {
     flex: 1,
     backgroundColor: '#808080',
     marginVertical: 15,
     alignItems: 'center',
     borderRadius: 30,
     padding: 25,
   },
   myButton:{
     justifyContent: 'space-around',
     backgroundColor:'#ffc547',
   }
   
 }
           
export default Settings;