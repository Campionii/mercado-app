import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function BemVindoScreen() {
  return (
    <ImageBackground 
      source={require('@/assets/images/bemvindo-velho.png')} // Ajuste o caminho conforme necessário
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('@/assets/images/Logo.png')} // Ajuste o caminho conforme necessário
            style={styles.logo}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Seja Bem-vindo{"\n"}ao App D'Avó</Text>
        </View>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center', // centraliza a logo horizontalmente
  },
  container: {
    flex: 1,
    paddingTop: 160,
    justifyContent: 'center', // centraliza verticalmente todos os elementos dentro do container
    alignItems: 'center', // centraliza horizontalmente todos os elementos dentro do container
  },
  logoContainer: {
    marginBottom: 10,
    alignItems: 'center', // Adicionamos margem inferior para separar a imagem dos textos
  },
  logo: {
    width: 150, // ajuste conforme necessário
    height: 150, // ajuste conforme necessário
  },
  textContainer: {
    flex: 1, // ocupa espaço disponível para que o container de texto possa ser centralizado verticalmente
    justifyContent: 'center', // centraliza verticalmente o texto
  },
  text: {
    fontSize: 32,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1d9d00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
