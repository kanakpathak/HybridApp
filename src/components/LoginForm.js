import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';  
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};
  
  onButtonPress() {
    
    const {email, password} = this.state;
    this.setState({error: 'Authentication failed', loading: true });
    this.onLoginSuccess.bind(this);
    
    // const {email, password} = this.state;
    // this.setState(error: '', loading: true);
    
    // this.onLoginFail.bind(this);
    //this.onLoginSuccees.bind(this);
    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccees.bind(this))
      .catch( () => {
        firebase.auth.createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccees.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
  }
  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      email: '',
      password: '',
      loading: true
    });
  }
  onLoginSuccess() {
    this.setState(
        {
          error: '',
          email: '',
          password: '',
          loading: false,
        }
      );
  }
  
  renderButton() {
    if(this.state.loading) {
      
      return  <Spinner size='small' />;  
    }
      return (
         <Button onPress = {this.onButtonPress.bind(this)}> 
                  Log In
         </Button>
      );
            
    
  }
  render() {
      
      return(
        
          <Card>
            
            < CardSection >
              <Input 
                label = 'Email'
                placeholder = 'user@xyz.com'
                bool = {false}
                value = {this.state.email}
                onChangeText = { (text) => this.setState({email: text})}
              />
            < /CardSection >
            
            <CardSection>
              <Input 
                label = 'Password'
                placeholder = 'password'
                bool = {true}
                value = {this.state.password}
                onChangeText = {(password) => this.setState({password})}
              />
            </CardSection>
          
            <Text style = {styles.errorTextStyle}>
              {this.state.error}
            </Text>
            
            <CardSection>
              {this.renderButton()}
            </CardSection>
          
          </Card>
        
        );
    }
}

const styles = {
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;

