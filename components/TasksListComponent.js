import React from 'react';
import { ListItem } from 'react-native-elements';
import { View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';


const Separator = () => (
    <View style={styles.separator} />
  );

function TasksListComponent(props) {
    

    const renderTaskItem = ({item}) => {
        return (
            <SafeAreaView style={styles.container}>
                <ListItem
                title={item.name}
                subtitle={
                    <View>
                        <Text>
                            {item.description} 
                        </Text>
                        <Separator />
                        <Text>
                            {item.date} 
                        </Text>
                        <Separator />
                        <Text>
                            {item.reminder + " - " + item.urgent}
                        </Text>
                        <Separator />
                    </View>
                }
            />
            </SafeAreaView>
            
        );
    };

    return (
        <FlatList
            data={props.tasks}
            renderItem={renderTaskItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}


export default TasksListComponent;

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
});