import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      taskDescription: "",
      date: new Date(),
      showCalendar: false,
      reminder: false,
      urgent: false,
    };

    this.setTask = this.setTask.bind(this);
  }

  resetForm() {
    this.setState({
      task: "",
      taskDescription: "",
      date: new Date(),
      showCalendar: false,
      reminder: false,
      urgent: false,
    });
  }

  addTask() {
    console.log(JSON.stringify(this.state));
  }

  // handle from form
  // setTask() {
  //   this.setState({ task: this.state.task });
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headings}> Add a Task </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name of task"
            onChangeText={(value) => this.setState({ task: value })}
            defaultValue={this.state.task}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Task description"
            onChangeText={(taskDescription) =>
              setTaskDescription(taskDescription)
            }
            defaultValue={this.state.taskDescription}
          />
        </View>
        <View style={styles.date}>
          <Button
            color="#000000"
            onPress={() =>
              this.setState({ showCalendar: !this.state.showCalendar })
            }
            title={this.state.date.toLocaleDateString("en-US")}
          />
        </View>
        {this.state.showCalendar && (
          <DateTimePicker
            value={this.state.date}
            mode={"date"}
            display="default"
            onChange={(event, selectedDate) => {
              selectedDate &&
                this.setState({ date: selectedDate, showCalendar: false });
            }}
          />
        )}
        <View style={styles.switchContainer}>
          <Text style={{ fontWeight: "bold" }}>Remind Me</Text>
          <Switch
            value={this.state.reminder}
            trackColor={{ true: "#000", false: null }}
            onValueChange={(value) => this.setState({ reminder: value })}
          />
          <Text style={{ fontWeight: "bold" }}>Mark Urgent</Text>
          <Switch
            value={this.state.urgent}
            trackColor={{ true: "#000", false: null }}
            onValueChange={(value) => this.setState({ urgent: value })}
          />
        </View>
        <Button
          onPress={() => {
            this.addTask();
            this.resetForm();
          }}
          color="#000"
          title="Add Task"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7ECEF",
  },
  headings: {
    fontWeight: "bold",
    fontSize: 36,
    margin: 12,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  switchContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  date: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
});

export default AddTask;
