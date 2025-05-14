import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Game1: undefined;
  Game2: undefined;
  Game3: undefined;
  Game4: undefined;
  Game5: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Hoşgeldin mesajı için state
  const [showWelcome, setShowWelcome] = useState(true);

  // Dakika seçimi ve sayaç için state
  const [timeLeft, setTimeLeft] = useState(0);
  const [isModalVisible, setModalVisible] = useState(true); // Dakika seçim modali
  const [selectedMinutes, setSelectedMinutes] = useState(5); // Varsayılan dakika

  // Dakika seçimini değiştir
  const selectMinutes = (minutes: number) => {
    setSelectedMinutes(minutes);
    setTimeLeft(minutes);
    setModalVisible(false); // Modalı kapat
  };

  useEffect(() => {
    // Hoşgeldin mesajı için 3 saniye bekle
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    // Dakika sayacını başlat
    const countdown = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(countdown); // Zaman bittiğinde sayacı durdur
        navigation.goBack(); // Uygulamadan çıkmak için
      }
    }, 60000); // Her dakika başı geri sayımı yap

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [timeLeft, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {showWelcome && <Text style={styles.welcomeText}>Hoşgeldiniz!</Text>}

      <Text style={styles.title}>Hadi Oyun Seçelim</Text>

      {/* Dakika Seçimi Modalı */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Kaç Dakika Oynamak İstersiniz?</Text>
            {[30, 40, 50, 60].map((minutes) => (
              <TouchableOpacity
                key={minutes}
                style={styles.modalButton}
                onPress={() => selectMinutes(minutes)}
              >
                <Text style={styles.modalButtonText}>{minutes} Dakika</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      {/* Dakika geri sayımı */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Kalan Süre: {timeLeft} dakika</Text>
      </View>

      <View style={styles.gamesContainer}>
        <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('Game1')}>
          <Image
            source={{ uri: 'https://www.okhool.com/image/cache/catalog/okhool-egitim-blog/ritmik-sayma-tablosu-ritmik-saymalar-550x550w.jpg' }}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Sayıyı Tahmin Edelim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('Game2')}>
          <Image
            source={{ uri: 'https://ticarihayatcom.teimg.com/crop/1280x720/ticarihayat-com/uploads/2024/03/renkler-ve-anlamlari.jpg' }}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Renklerle Oynayalım</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('Game3')}>
          <Image
            source={{ uri: 'https://st.depositphotos.com/3285271/4489/v/450/depositphotos_44894223-stock-illustration-animals.jpg' }}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Hayvanları Tanıyalım</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('Game4')}>
          <Image
            source={{ uri: 'https://img.pixers.pics/pho_wat(s3:700/FO/63/25/05/02/700_FO63250502_092ec79387fea5661d46847a734af7ac.jpg,690,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,470,650,jpg)/duvar-resimleri-216-bayraklar-butun-dunya.jpg.jpg' }}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Bayrakları Tanıyalım</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameButton} onPress={() => navigation.navigate('Game5')}>
          <Image
            source={{ uri: 'https://annedirhersey.com/wp-content/uploads/2020/05/20200501_231718-scaled.jpg' }}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Örüntüyü Tamamlayalım</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#dff9ff',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#005f75',
  },
  welcomeText: {
    fontSize: 24,
    color: '#005f75',
    marginBottom: 20,
  },
  timeContainer: {
    position: 'absolute',
    top: 70,  // Sayaç yukarı kaydırıldı
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#005f75',
  },
  timeText: {
    fontSize: 18,
    color: '#005f75',
  },
  gamesContainer: {
    marginTop: 100,  // Oyunlar biraz daha aşağıya kaydırıldı
    width: '100%',
    alignItems: 'center',
  },
  gameButton: {
    alignItems: 'center',
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '90%',
    backgroundColor: '#f0fcff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 18,
    color: '#0089a8',
  },
  // Modal Stil
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  modalButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#0089a8',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
