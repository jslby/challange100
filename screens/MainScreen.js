import React from 'react';
import { AsyncStorage, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props){
    super(props);
    this.state = {
      help: '',
      todayCount: '',
      startDay: '',
      setTimer: '',
      setCount: '',
    };
    AsyncStorage.multiGet(['help', 'todayCount', 'mountCount', 'setTimer', 'setCount'], (err, stores) => {
      stores.map((result, i, store) => {
        let key = store[i][0];
        let value = store[i][1];
        this.setState({key: value});
      });
    });
  }
  componentDidUpdate = () => {
    AsyncStorage.multiSet([
      ['todayCount', this.state.todayCount],
      ['startDay', this.state.startDay],
      ['setTimer', this.state.setTimer],
      ['setCount', this.state.setCount]
    ]);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.textDays}>День</Text>
        <Text style={styles.nowDay}>6
          <Text style={styles.allDay}>/30</Text>
        </Text>

        <Text style={styles.textCountUp}>Сегодня уже выполнено</Text>
        <Text style={styles.textCount}>70</Text>
        <Text style={styles.textCountDown}>отжиманий</Text>

        <Text style={styles.textCountUp}>Сейчас выполнил</Text>
        <TextInput
            style={styles.input}
            keyboardType = 'numeric'
        />
        <Text style={styles.textCountDown}>отжиманий</Text>

        <Text style={styles.textCountUp}>Напомнить отжаться через</Text>
        <TextInput
            style={styles.input}
            keyboardType = 'numeric'
        />
        <Text style={styles.textCountDown}>минут</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textDays: {
    fontSize: 20
  },
  nowDay: {
    fontSize: 100,
  },
  allDay: {
    fontSize: 30
  },
  textCountUp: {

  },
  input: {
    height: 30,
    width: 100,
    backgroundColor: '#ffffff'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbb35a'
  }
});
