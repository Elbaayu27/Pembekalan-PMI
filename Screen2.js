import React from 'react';
import{ FlatList, Text, View} from 'react-native';

const Buah =[
    {nama:'Apel', id:1},{nama:'Jeruk', id:2}, {nama:'Nanas', id:3}, {nama:'Jambu', id:4},
    {nama:'Semangka', id:5},{nama:'Melon', id:6},{nama:'Strawberry', id:7},{nama:'Kiwi', id:8},{nama:'Lemon', id:9},{nama:'Pepaya', id:10},{nama:'Jambu', id:11},
    {nama:'Jambu', id:12},{nama:'Jambu', id:13},{nama:'Jambu', id:14},{nama:'Jambu', id:15},{nama:'Jambu', id:16},{nama:'Jambu', id:17},{nama:'Jambu', id:18},{nama:'Jambu', id:19},
    {nama:'Jambu', id:20},{nama:'Jambu', id:21},{nama:'Jambu', id:22},{nama:'Jambu', id:23},{nama:'Jambu', id:24},{nama:'Jambu', id:25},{nama:'Jambu', id:26},{nama:'Jambu', id:27},
    {nama:'Jambu', id:28},{nama:'Jambu', id:29},{nama:'Jambu', id:30},{nama:'Jambu', id:31},{nama:'Jambu', id:32},{nama:'Jambu', id:33}

]

const renderItem = ({ item }) => {

    return (
        <Text style={{color:'black', backgroundColor:'pink'}}>{item.nama}</Text>
    );
  };

const Screen2 = (props) => {
    return(
        <View>
            <FlatList
                data={Buah}
                renderItem={renderItem}
                keyExtractor={item => item.id}
             />
        </View>
    );
};

export default Screen2;