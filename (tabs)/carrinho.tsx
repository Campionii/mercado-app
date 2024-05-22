import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const ShoppingCartApp: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products] = useState<Product[]>([
    { id: 1, name: 'Banana Nanica 5 Unidades', price: 5.99 },
    { id: 2, name: 'Sprite 350ml 1 Unidade', price: 3.99 },
    { id: 3, name: 'Café Pilão torrado', price: 18.89 },
    { id: 4, name: 'Açúcar Cristal Orgânico 1Kg', price: 6.49 },
    { id: 5, name: 'Salgadinho Churrasco Torcida 100g', price: 1.99 },
    { id: 6, name: 'Arroz Camil tipo 1 1Kg', price: 18.89 },
    { id: 7, name: 'Queijo Vigor Parmesao Fatia 200G', price: 29.90 },
    { id: 8, name: 'Pão Do Forno Wickbold Aus. 500G', price: 18.89 },
    { id: 9, name: 'Leite Fermentado Elegê 160G', price: 1.99 },
    { id: 10, name: 'Contra Filé Bovino 500G', price: 11.95 },
  ]);
  const [cartVisible, setCartVisible] = useState<boolean>(true);

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart
      .map(item => {
        if (item.product.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const handleFinalizePurchase = () => {
    console.log('Finalizar Compra');
  };

  const handleCalculatePurchase = () => {
    console.log('Calcular Compra');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/calculadora-davo.png')}
          style={styles.logo}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar..."
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <ScrollView>
        {searchTerm !== '' && (
          <>
            <Text style={styles.sectionHeader}>Produtos</Text>
            {products
              .filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map(product => (
                <View key={product.id} style={styles.productContainer}>
                  <Text>{product.name} - R${product.price.toFixed(2)}</Text>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleAddToCart(product)}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </>
        )}
      </ScrollView>
      {cartVisible && (
        <View>
          <Text style={styles.sectionHeader}>Carrinho</Text>
          <ScrollView>
            {cart.map(item => (
              <View key={item.product.id} style={styles.cartItem}>
                <View style={styles.cartItemDetails}>
                  <Text>{item.product.name}</Text>
                  <Text style={styles.itemPrice}>
                    Preço: R${(item.product.price * item.quantity).toFixed(2)} ({item.quantity})
                  </Text>
                </View>
                <View style={styles.cartItemButtons}>
                  <TouchableOpacity onPress={() => handleRemoveFromCart(item.product.id)}>
                    <Text style={styles.menos}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => handleAddToCart(item.product)}>
                    <Text style={styles.cartButton}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.total}>
            Total: R$
            {cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)}
          </Text>
        </View>
      )}

      <TouchableOpacity style={styles.toggleButton} onPress
        ={() => toggleCartVisibility()}>
        <Text style={styles.toggleButtonText}>
          {cartVisible ? 'Esconder Carrinho' : 'Mostrar Carrinho'}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.finalizar} onPress={handleFinalizePurchase}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.calcular} onPress={handleCalculatePurchase}>
          <Text style={styles.buttonText}>Calcular Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    padding: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },

  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#1d9d00',
    padding: 15,
    width: 40,
    height: 50,
    borderRadius: 3,
  },
  finalizar: {
    backgroundColor: '#1d9d00',
    padding: 7,
    borderRadius: 3,
  },
  calcular: {
    backgroundColor: '#FF0000',
    padding: 7,
    borderRadius: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  cartItemDetails: {
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    color: 'gray',
  },
  cartItemButtons: {
    flexDirection: 'row',
    alignItems: 'center', // Centraliza os botões verticalmente
  },
  cartButton: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#1d9d00',
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 10,
    height: 30,
    width: 30,
    textAlign: 'center',
    lineHeight: 22,
    
  },

  menos: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 3,
    marginHorizontal: 10,
    height: 30,
    width: 30,
    textAlign: 'center',
    lineHeight: 22,
    
  },

  quantity: {
    fontSize: 25,
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    backgroundColor: '#1d9d00',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  toggleButtonText: {
    color: 'white',
  },
});

export default ShoppingCartApp;
