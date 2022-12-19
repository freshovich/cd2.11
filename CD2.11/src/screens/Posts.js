import React from 'react';
import { Share, View,Text,Image,ImagBackground, ImageBackground} from 'react-native';
import Icon from "@expo/vector-icons/Entypo"
import {TouchableOpacity} from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons'; 
export default class Posts extends React.Component{
    state={
        liked:false
    }
    onLike=()=>{
        this.setState({liked:!this.state.liked})
    }
    
     onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
    render(){

        const {name,profile,photo,onPress, min, onShare} = this.props

        return(
            <View>
               <View style={{
                   flexDirection:"row",
                   paddingTop:25,
                   alignItems:"center"         
                }}>
                    <View style={{width:"20%"}}>
                            <Image
                                source={profile}
                                style={{
                                    width:45,
                                    height:45,
                                    borderRadius:20
                                }}
                                />
                    </View>
                    <View style={{
                        width:"60%"
                    }}>
                        <Text style={{
                           
                            fontSize:14,
                            color:"#095f8b"
                        }}>{name}</Text>

                        <Text style={{
                          
                            fontSize:12,
                            color:"#9ca1a2"
                        }}>
                            {min} мин назад
                        </Text>
                    </View>
                    <View style={{
                        width:"20%",
                        alignItems:"flex-end"
                    }}> 
                    <TouchableOpacity
                    onPress={onPress}
                    >
                          <MaterialIcons name="settings-backup-restore"
                            color="#095f8b"
                            size={28}
                        />
                  
                        
                         </TouchableOpacity>
                    </View>
               </View>

               <View style={{
                   flexDirection:"row",
                   width:"100%",
                   paddingTop:20
               }}>
                    <ImageBackground 
                    source={photo}
                    style={{
                        width:"100%",
                        height:220,
                    }}
                    imageStyle={{
                        borderRadius:30
                    }}
                    >
                        <View style={{
                            height:"100%",
                            flexDirection:"row",
                            alignItems:'flex-end',
                            justifyContent:"flex-end"
                        }}>


                            <TouchableOpacity
                                onPress={this.onShare}
                                style={{
                                    marginBottom:20,
                                    borderRadius:5,
                                    padding:5,
                                    backgroundColor:"#e8e8e8"
                                }}
                            >
                                <Icon name="forward"
                                color="#095f8b"
                                size={20}/>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={this.onLike}
                                style={{
                                    marginBottom:20,
                                    borderRadius:5,
                                    padding:5,
                                    backgroundColor:"#e8e8e8",
                                    marginLeft:10,
                                    marginRight:20
                                }}
                            >
                                <Icon name= {this.state.liked === true ? "heart":"heart-outlined"} 
                                color= {this.state.liked===true? "red":"#095f8b"}
                                size={20}/>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>
               </View>
            </View>
        )
    }
}