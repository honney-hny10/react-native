import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text, Alert } from 'react-native';

const App = () => {
  const [currentPage, setCurrentPage] = useState('GettingStarted');
  const [previousPage, setPreviousPage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handlePageChange = (page) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
  };

  const gotoPreviousPage = () => {
    console.log("Back Button Pressed");
    if (previousPage) {
      setCurrentPage(previousPage);
    }
  };

  const handleFormSubmit = (page) => {
    if (page === 'Signup') {
      if (signupEmail && signupPassword) {
        setEmail(signupEmail);
        setPassword(signupPassword);
        handlePageChange('Login');
      } else {
        Alert.alert('Error', 'Please fill in all fields');
      }
    } else if (page === 'Login') {
      if (email !== signupEmail || password !== signupPassword) {
        Alert.alert('Error', 'Login and signup details do not match');
      } else {
        setIsAuthenticated(true);
        handlePageChange('Dashboard');
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    handlePageChange('GettingStarted');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'GettingStarted':
        return (
          <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to my App!</Text>
            <Button title="Sign Up" onPress={() => handlePageChange('Signup')} />
          </View>
        );
      case 'Signup':
        return (
          <View style={styles.container}>
            <Text style={styles.signupText}>Create an account</Text>
            <Text style={styles.alertText}>Please fill in all fields to create an account</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={signupEmail}
              onChangeText={setSignupEmail}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={signupPassword}
              onChangeText={setSignupPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button title="Submit" onPress={() => handleFormSubmit('Signup')} />
              </View>
              <View style={styles.buttonWrapper}>
                <Button title="Back" color="red" onPress={gotoPreviousPage} />
              </View>
            </View>
          </View>
        );
      case 'Login':
        return (
          <View style={styles.container}>
            <Text style={styles.loginText}>Log in to your account</Text>
            <Text style={styles.alertText}>Please fill in all fields to log in</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button title="Login" onPress={() => handleFormSubmit('Login')} />
              </View>

              <View style={styles.buttonWrapper}>
                <Button title="Back" color="red" onPress={gotoPreviousPage} />
              </View>
              
            </View>
          </View>
        );
      case 'Dashboard':
        return (
          <View style={styles.container}>
            <Text style={styles.dashboardText}>Welcome to the Dashboard!</Text>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        );
      default:
        return null;
    }
  };

  return renderPage();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  buttonWrapper: {
    marginHorizontal: 5,
  },
  dashboardText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  signupText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  alertText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default App;
