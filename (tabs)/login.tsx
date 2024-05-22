import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
        <Text style={styles.nome}>Nome bonito</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Pronto para explorar?</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
      
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    top: -200,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#00974A',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    marginTop: 180,
  },
  nome: {
    fontSize: 20,
    color: '#fff',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 150,
  },
  title: {
    fontSize: 32,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1d9d00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});