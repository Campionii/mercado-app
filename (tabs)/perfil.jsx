import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const menuItems = [
  { icon: 'cart-outline', title: 'Histórico de Compras', screen: 'PurchaseHistory' },
  { icon: 'notifications-outline', title: 'Notificações', screen: 'Notifications' },
  { icon: 'card-outline', title: 'Formas de Pagamento', screen: 'PaymentMethods' },
  { icon: 'gift-outline', title: 'Clube Davó', screen: 'ClubDavo' },
  { icon: 'pricetags-outline', title: 'Cupons Davó', screen: 'Coupons' },
  { icon: 'document-text-outline', title: 'Termos e Condições', screen: 'TermsAndConditions' },
];

export default function UserAccountScreen({ navigation }) {
  const handleMenuPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Image
        source={require('@/assets/images/logo-davo.png')}
        style={styles.marketLogo}
      />
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/avatar.png')}
          style={styles.userPhoto}
        />
        <ThemedText type="title" style={styles.userName}>Nome Bacana</ThemedText>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Ionicons name="log-out-outline" size={24} color="#000" style={styles.logoutIcon} />
          <ThemedText style={styles.logoutText}>Sair da conta</ThemedText>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
      <View style={styles.separatorLarge} />
      {menuItems.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => handleMenuPress(item.screen)}>
            <View style={styles.itemContainer}>
              <Ionicons name={item.icon} size={24} style={styles.icon} />
              <ThemedText style={styles.itemText}>{item.title}</ThemedText>
              <Ionicons name="chevron-forward" size={24} style={styles.chevronIcon} />
            </View>
          </TouchableOpacity>
          {index !== menuItems.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  marketLogo: {
    width: 55,
    height: 50,
    alignSelf: 'center',
    marginVertical: 40,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20, // Ajustado para um espaço um pouco maior
  },
  userPhoto: {
    width: 85,
    height: 85,
    borderRadius: 40,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    color: '#000',
    flex: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    marginRight: 5,
  },
  logoutText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#d9534f',
  },
  separator: {
    height: 1,
    backgroundColor: '#D0D0D0',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  separatorLarge: {
    height: 1,
    backgroundColor: '#D0D0D0',
    marginHorizontal: 20,
    marginVertical: 40, // Ajustado para um espaço maior
  },
  spacer: {
    height: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  chevronIcon: {
    marginLeft: 10,
  },
});