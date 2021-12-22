import React from 'react';
import { ListItem } from 'react-native-elements';
import { View, Text, FlatList} from 'react-native';


function Agendas(props) {
    

    const renderAgendaItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={
                    <View>
                        <Text>
                            {item.description} 
                        </Text>
                        <Text>
                            {item.date} 
                        </Text>
                        <Text>
                            {item.reminder + " " + item.urgent}
                        </Text>
                    </View>
                }
            />
        );
    };

    return (
        <FlatList
            data={props.agendas}
            renderItem={renderAgendaItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}


export default Agendas;