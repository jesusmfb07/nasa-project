import React,{FC} from 'react'
import { View ,Text,Button, StyleSheet} from 'react-native'
import { PostImage as PostImagesTypes ,RootStackParams} from '../../types'

import { useNavigation } from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PostImageNavigationProps = NativeStackNavigationProp<
RootStackParams, 
'Detail'
>;

const PostImage: FC<PostImagesTypes> = ({title,date,url,explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () =>{
    navigate('Detail', {title,date,url,explanation});

  };

  return (
   <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>
     <Text style={styles.date}>{date}</Text>
     <View style={styles.buttonContainer}> 
      <Button title='View' onPress={handleViewPress}/>
   </View>
   </View>
  )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor: 'rgba{17,39,113,255}',
        borderRadius: 15,
        marginBottom:12,
        padding: 1,
    },
    title:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 12,
    },
    date:{
      color:'#fff',
    },
    buttonContainer:{
      alignItems: 'flex-end',
    },
});
export default PostImage
