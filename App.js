import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native-web";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentState) => [
      ...currentState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const endGoalHandler = () => {
    setShowModal(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((oldState) => oldState.filter((ele) => ele.id !== id));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="add new goal"
          color="#5e0acc"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={showModal}
          close={endGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
