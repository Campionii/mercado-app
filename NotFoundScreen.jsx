import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotFoundScreen = () => {
  const navigation = useNavigation();

  const handleGoToIndex = () => {
    navigation.navigate('Index');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Oops! Página não encontrada.</Text>
      <Button title="Voltar para o início" onPress={handleGoToIndex} />
    </View>
  );
};

export default NotFoundScreen;
