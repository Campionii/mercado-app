import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const BemVindoScreen = () => {
  const navigation = useNavigation();

  const goToIndexScreen = () => {
    navigation.navigate('Index');
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/bemvindo-velho.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('@/assets/images/Logo.png')} 
            style={styles.logo}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Seja Bem-vindo{"\n"}ao App D'Avó</Text>
        </View>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={goToIndexScreen}>
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
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
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

export default BemVindoScreen;
