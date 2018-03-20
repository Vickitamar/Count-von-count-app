import React, { Component } from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

class Counter extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        
        // setup our state
        this.state = {
            counter: 0,
            history: [],
            
            
            
        };
        //bind
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


increment() {
  const currentHistory = this.state.history;
  const timestamp = Date.now();
  const dateofOperation = moment(timestamp).calendar();
  const updated = this.state.counter + 1;
  currentHistory.unshift(dateofOperation + " " + "incremented from " + this.state.counter  + " to " + updated);
    this.setState({
      counter: updated,
      history: currentHistory,
	});

}


decrement() {
    const currentHistory = this.state.history;
    const timestamp = Date.now();
    const dateofOperation = moment(timestamp).calendar();
    const updated = this.state.counter - 1;
    currentHistory.unshift(dateofOperation + " decremented from " + this.state.counter + " to " + updated);
   this.setState({
      counter: updated,
      history: currentHistory,
    });
   if (updated <= 0) {
      this.setState({
        disabled: true,
      })
    }
}   


render() {
  const isDecDisabled = this.state.counter === 0;
  const isIncDisabled = this.state.counter === 10;

	return (
        <View style={styles.container}>
            
            <View style={styles.buttonContainer}>
                <TouchableHighlight disabled={isDecDisabled}style={[styles.buttons, isDecDisabled ? styles.counterButtonDisabled : null]} onPress={ this.decrement } disabled={isDecDisabled}><Text style={styles.label}>-</Text></TouchableHighlight>
                <Text style={styles.state}>{this.state.counter}</Text>
                <TouchableHighlight disabled={isIncDisabled} style={[styles.buttons, isIncDisabled ? styles.counterButtonDisabled : null]}onPress={ this.increment }><Text style={styles.label}>+</Text></TouchableHighlight>
            </View>
         <Text style={styles.history}>History</Text>
         <ScrollView> 
         {this.state.history.map((item, i)=><Text key={i}>{item.toString()}</Text>)}
         </ScrollView>
            </View>
         


        
       
    )
};

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
   },
  header: {
    color: '#5a2961',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
  },
  image: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttons: {
    backgroundColor: '#5a2961',
    height: 50,
    width: 50,
    marginHorizontal: 50,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonDisabled: {
    backgroundColor: '#999',
  },
  label: {
    color: 'white',
    fontSize: 30,
  },
  state: {
    marginTop: 15,
    padding: 15,
    fontSize: 30,
  },
  history: {
    color: '#5a2961',
    fontWeight: 'bold',
    fontSize: 20,
  }
});


export default Counter;