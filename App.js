import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';

const App = () => {
  const [currentPage, setCurrentPage] = useState('GettingStarted');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFormSubmit = (page) => {
    if (page === 'Signup') {
      handlePageChange('Login');
    } else if (page === 'Login') {
      setIsAuthenticated(true);
      handlePageChange('Dashboard');
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
            <Button title="Submit" onPress={() => handleFormSubmit('Signup')} />
          </View>
        );
      case 'Login':
        return (
          <View style={styles.container}>
            <Text style={styles.loginText}>Log in to your account</Text>
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
            <Button title="Login" onPress={() => handleFormSubmit('Login')} />
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
});

export default App;
