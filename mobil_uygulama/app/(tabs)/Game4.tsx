import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

// Bayrak verisi
const flagsData = [
  {
    id: 1,
    image: 'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/63567/uploads/urunresimleri/buyuk/turk-bayragi-pec-tpu-5x7-4430-b.jpg',
    name: 'Türkiye',
  },
  {
    id: 2,
    image: 'https://www.denizdukkani.com/amerikan-bayragi-bayrak-ve-bayrak-diregi-lhr-1605141-36-B.jpg',
    name: 'Amerika Birleşik Devletleri',
  },
  {
    id: 3,
    image: 'https://www.bayrakreyonu.com/wp-content/uploads/almanya-bayragi-fiyati.jpg',
    name: 'Almanya',
  },
  {
    id: 4,
    image: 'https://static3.depositphotos.com/1000501/128/i/450/depositphotos_1285549-stock-photo-france-flag.jpg',
    name: 'Fransa',
  },
  {
    id: 5,
    image: 'https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg',
    name: 'İngiltere',
  },
  {
    id: 6,
    image: 'https://bayrakevi.com/image/cache/data/devlet1/italya-800x800.jpg',
    name: 'İtalya',
  },
  {
    id: 7,
    image: 'https://bayrakevi.com/image/cache/data/devlet1/ispanya-600x315.jpg',
    name: 'İspanya',
  },
  {
    id: 8,
    image: 'https://productimages.hepsiburada.net/s/94/424-600/110000036883162.jpg',
    name: 'Brezilya',
  },
  {
    id: 9,
    image: 'https://cdn03.ciceksepeti.com/cicek/kcx62643049-1/L/kanada-bayragi-5075-1.jpg',
    name: 'Kanada',
  },
  {
    id: 10,
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20221008/pngtree-flag-of-japan-vignetted-country-flag-spot-photo-image_9638898.jpg',
    name: 'Japonya',
  },
  {
    id: 11,
    image: 'https://www.offidocs.com/images/xflagpakpakistanflagpakistan.jpg.pagespeed.ic.zQN7VlI9Yv.jpg',
    name: 'Pakistan',
  },
  {
    id: 12,
    image: 'https://m.media-amazon.com/images/I/61wp7IaGyaL._UF1000,1000_QL80_.jpg',
    name: 'Güney Kore',
  },
  {
    id: 13,
    image: 'https://image.milimaj.com/i/milliyet/75/869x477/5f56b27d554280057430db0f.jpg',
    name: 'Rusya',
  },
  {
    id: 14,
    image: 'https://bayrakevi.com/image/cache/data/devlet1/katar-800x800.jpg',
    name: 'Katar',
  },
];

function Game4Screen() {
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentFlag = flagsData[currentFlagIndex];

  // Seçenekleri karıştırma fonksiyonu
  const getShuffledOptions = () => {
    // 2 yanlış seçenek seç
    const wrongFlags = flagsData.filter(flag => flag.id !== currentFlag.id);
    const shuffledWrongFlags = wrongFlags.sort(() => Math.random() - 0.5).slice(0, 2);
    
    // Seçenekleri birleştir (1 doğru + 2 yanlış)
    const options = [currentFlag, ...shuffledWrongFlags].sort(() => Math.random() - 0.5);
    
    return options;
  };

  const shuffledOptions = getShuffledOptions();

  // Bayrak adıyla eşleşip eşleşmediğini kontrol et
  const handleAnswer = (selectedName: string) => {
    if (selectedName === currentFlag.name) {
      setScore(score + 10);  // Doğru cevap, artı 10 puan
      Alert.alert('Tebrikler!', 'Doğru eşleştirme yaptınız!');
    } else {
      setScore(score - 5);  // Yanlış cevap, eksi 5 puan
      Alert.alert('Yanlış Cevap', 'Tekrar deneyin!');
    }

    // Yeni bir bayrak göster
    setCurrentFlagIndex((prevIndex) => (prevIndex + 1) % flagsData.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> </Text>

      <Text style={styles.score}>Puan: {score}</Text>

      {/* Şu anki bayrağı göster */}
      <Image source={{ uri: currentFlag.image }} style={styles.flagImage} />

      <Text style={styles.questionText}>Bu bayrağın hangi ülkeye ait olduğunu seçin:</Text>

      {/* Karıştırılmış seçenekler */}
      {shuffledOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionButton}
          onPress={() => handleAnswer(option.name)}
        >
          <Text style={styles.optionText}>{option.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe5df',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4b9cdb',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff7a5c',
  },
  flagImage: {
    width: 200,
    height: 120,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#fffbfa',
    padding: 12,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  optionText: {
    fontSize: 18,
    color: '#ffa894',
  },
});

export default Game4Screen;
