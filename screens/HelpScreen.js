import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Image, Button } from 'react-native';
import Swiper from 'react-native-swiper';
import SvgUri from 'react-native-svg-uri';
import Spinner from 'react-native-loading-spinner-overlay';

export default class HelpScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this.state = {
      help: 'yes',
    };
    AsyncStorage.getItem('help', (err, result) => {
      this.setState({
        'help': result,
      });
      if(result == 'no'){
        this.props.navigation.navigate('Main');
      }
    });
  }
  disableHelp = () => {
    this.setState({'help': 'no'});
    this.props.navigation.navigate('Main');
  }
  componentDidMount = () => {
    if(this.state.help == 'no'){
      this.props.navigation.navigate('Main');

    }
  }
  componentDidUpdate = () => {
    AsyncStorage.setItem('help', this.state.help);
  }
  render() {
    return (
      <Swiper style={styles.wrapper} loop={false} showsPagination={false} ref={(swiper) => {this._swiper = swiper}}>
        <View style={styles.slide1}>
          <View style={styles.inner}>
            <SvgUri  width="200" height="200" source={require('../assets/pers2.svg')}/>
            <Text style={styles.header}>Привет!</Text>
            <Text style={styles.text}>Я бросаю тебе вызов на уничтожение отжиманий. Уверен что справишься?!</Text>
          </View>
          <View style={styles.button}><Text style={styles.buttonInside} onPress={() => this._swiper.scrollBy(1)}>Конечно!</Text></View>
        </View>
        <View style={styles.slide2}>
          <View style={styles.inner}>
            <SvgUri  width="200" height="200" source={require('../assets/pers4.svg')}/>
            <Text style={styles.whiteText}>Каждый день ты должен выполнять ровно сто отжиманий на протяжении тридцати дней.</Text>
            <Text style={styles.whiteText}>Количество подходов не ограничено.</Text>
          </View>
          <View style={styles.button}><Text style={styles.buttonInside} onPress={() => this._swiper.scrollBy(1)}>Все понятно!</Text></View>
        </View>
        <View style={styles.slide3}>
          <View style={styles.inner}>
            <SvgUri  width="200" height="200" source={require('../assets/pers3.svg')}/>
            <Text style={styles.whiteText}>Я буду следить за тобой!</Text>
            <Text style={styles.whiteText}>Начнем?</Text>
          </View>
          <View style={styles.button}><Text onPress={this.disableHelp} style={styles.buttonInside}>Начнем!</Text></View>
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdf289'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5978'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374d7c',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#333',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 25
  },
  whiteText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25
  },
  text: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 25
  },
  button: {
    flex: 0.1,
    backgroundColor: '#89BE5C',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInside: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  }
});
