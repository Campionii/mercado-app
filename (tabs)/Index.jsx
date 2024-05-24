import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Importando imagens da pasta assets/images
import product1 from '@/assets/images/banana-nanica.png';
import product2 from '@/assets/images/sprite.png';
import product3 from '@/assets/images/cafe.png';
import product4 from '@/assets/images/acucar-cristal.png';
import product5 from '@/assets/images/arroz.png';
import product6 from '@/assets/images/torcida.png';
import product7 from '@/assets/images/queijo.png';
import product8 from '@/assets/images/pao.png';
import product9 from '@/assets/images/bobesponja-suco.png';
import product10 from '@/assets/images/carne-500g.png';
import bannerImage from '@/assets/images/promo1.png';
import logoImage from '@/assets/images/logo-davo.png';

const { width } = Dimensions.get('window');

const products = [
  { id: '1', name: 'Cacho Banana Nanica', price: 'R$ 5,99', description: '1Kg a cada 5 unidades', image: product1 },
  { id: '2', name: 'Refrigerante Limão Sprite', price: 'R$ 3,49', description: 'Lata 350ml', image: product2 },
  { id: '3', name: 'Café Tradicional Pilão', price: 'R$ 18,89', description: 'Torrado e Moído a Vácuo', image: product3 },
  { id: '4', name: 'Açúcar Cristal Orgânico', price: 'R$ 6,49', description: 'Native Claro tradicional 1Kg', image: product4 },
  { id: '5', name: 'Arroz Camil soltinho', price: 'R$ 34,59', description: 'Arroz Camil soltinho 5Kg', image: product5 },
  { id: '6', name: 'Torcida de churrasco', price: 'R$ 2,99', description: 'Salgadiho de trigo sabor churrasco', image: product6 },
  { id: '7', name: 'Queijo vigor Parmesão', price: 'R$ 20,19', description: 'Fatia parmesão 200g', image: product7 },
  { id: '8', name: 'Pão de forma Wickbold', price: 'R$ 14,29', description: 'Descrição do Produto 8', image: product8 },
  { id: '9', name: 'Suco Bob-esponja', price: 'R$ 7,99', description: 'suco bobo-esponja 220ml', image: product9 },
  { id: '10', name: 'Contra Filé Friboi 500g', price: 'R$ 34,89', description: 'Contra - Filé reserva 500g', image: product10 },
];

const banner = {
  id: 'banner',
  image: bannerImage,
};

export default function ShoppingScreen() {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = products.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredProducts(newData);
    } else {
      setFilteredProducts(products);
    }
  };

  const navigation = useNavigation();

  const handleAddToCart = (item) => {
    // Navegue para a tela de carrinho, passando o item como parâmetro
    navigation.navigate('Carrinho', { item: { ...item, quantity: 1 } });
  };


  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => {
        handleAddToCart(item);
        navigation.navigate('carrinho');
      }}>
        <FontAwesome name="cart-plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderBanner = () => (
    <View style={styles.bannerContainer}>
      <Image source={banner.image} style={styles.bannerImage} resizeMode="contain" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={22} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            value={search}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
        <View style={styles.locationContainer}>
          <FontAwesome name="map-marker" size={22} color="#000" style={styles.locationIcon} />
          <Text style={styles.locationText}>Suzano - Shopping suzano</Text>
        </View>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={renderBanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 16,
    color: '#000',
  },
  productList: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
    width: (width - 60) / 2,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  productInfo: {
    width: '100%',
    padding: 10,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    position: 'relative',
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  productDescription: {
    fontSize: 10,
    color: '#666',
    textAlign: 'left',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    color: '#888',
    textAlign: 'left',
  },
  addButton: {
    position: 'absolute',
    width: 30, // Ajuste a largura conforme necessário
    height: 30, // Ajuste a altura conforme necessário
    bottom: 10, // Ajuste a posição vertical conforme necessário
    right: 10, // Ajuste a posição horizontal conforme necessário
    backgroundColor: '#1d9d00',
    borderRadius: 5, // Use a metade da largura ou altura para obter um círculo
    justifyContent: 'center', // Centralize o conteúdo verticalmente
    alignItems: 'center', // Centralize o conteúdo horizontalmente
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  bannerImage: {
    width: '100%',
    height: 100,
  },
  cartContainer: {
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

