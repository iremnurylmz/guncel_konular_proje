import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const renkler = [
  { color: 'kırmızı', clue: '🍓 Çilek' },
  { color: 'yeşil', clue: '🥬 Marul' },
  { color: 'mavi', clue: '🌊 Deniz' },
  { color: 'sarı', clue: '🍌 Muz' },
  { color: 'turuncu', clue: '🍊 Portakal' },
  { color: 'mor', clue: '🍇 Üzüm' },
  { color: 'pembe', clue: '🌸 Çiçek' },
  { color: 'kahverengi', clue: '🍫 Çikolata' },
  { color: 'gri', clue: '🐘 Fil' },
  { color: 'siyah', clue: '🖤 Gece' },
  { color: 'beyaz', clue: '❄️ Kar' },
  { color: 'lacivert', clue: '🌌 Gece gökyüzü' },
  { color: 'açık mavi', clue: '🌊 Okyanus' },
  { color: 'altın', clue: '🏆 Altın kupa' },
  { color: 'gümüş', clue: ' 🏅Gümüş madalya' },
  { color: 'turkuaz', clue: '🏖️ Deniz' },
  { color: 'bej', clue: ' Kağıt' },
  { color: 'fıstık yeşili', clue: '🥒 Salatalık' },
  { color: 'bordo', clue: '🍷 Şalgam' },
  { color: 'şeftali', clue: '🍑 Şeftali' }
];

const renkKodlari: { [key: string]: string } = {
  kırmızı: 'red',
  yeşil: 'green',
  mavi: 'blue',
  sarı: 'yellow',
  turuncu: 'orange',
  mor: 'purple',
  pembe: 'pink',
  kahverengi: '#8B4513',
  gri: 'gray',
  siyah: 'black',
  beyaz: 'white',
  lacivert: '#000080',
  'açık mavi': 'lightblue',
  altın: '#FFD700',
  gümüş: '#C0C0C0',
  turkuaz: 'turquoise',
  bej: '#F5F5DC',
  'fıstık yeşili': 'palegreen',
  bordo: '#800000',
  şeftali: '#FFDAB9'
};

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * renkler.length);
  return renkler[randomIndex];
};

// Seçenekleri Karıştırma
const shuffleOptions = (correctColor: string) => {
  const colors = renkler.filter(c => c.color !== correctColor);
  const shuffled = colors.sort(() => 0.5 - Math.random()).slice(0, 2);
  const allOptions = [...shuffled, { color: correctColor }].sort(() => 0.5 - Math.random());
  return allOptions;
};

function Game() {
  const [correctColor, setCorrectColor] = useState(getRandomColor()); // Doğru renk
  const [options, setOptions] = useState(shuffleOptions(correctColor.color)); // Seçenekler
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [colorBox, setColorBox] = useState('#808080'); // Gri renk kutusu

  useEffect(() => {
    setOptions(shuffleOptions(correctColor.color)); // Seçenekleri güncelle
    setColorBox('#808080'); // Gri renk kutusu
  }, [correctColor]);

  const handleColorSelect = (selectedColor: string) => {
    if (selectedColor === correctColor.color) {
      setMessage(`🎉 Tebrikler, doğru renk! İpucu: ${correctColor.clue}`);
      setScore(score + 1);
      const newColor = getRandomColor();
      setCorrectColor(newColor); // Yeni doğru renk
      setColorBox(renkKodlari[newColor.color]); // Yeni doğru rengin kutucuk rengi
    } else {
      setMessage(`❌ Yanlış! Doğru renk: ${correctColor.color}. İpucu: ${correctColor.clue}`);
      setScore(score - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎨 Gölgelerden Tanı Oyunu</Text>
      <Text style={styles.instructions}>Renkleri tahmin et! İpucu: {correctColor.clue}</Text>

      <View style={[styles.colorBox, { backgroundColor: colorBox }]}>
        <Text style={styles.colorText}>🔲</Text>
      </View>

      <Text style={styles.message}>{message}</Text>
      <Text style={styles.score}>Puan: {score}</Text>

      <View style={styles.optionsContainer}>
        {options.map((colorObj, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton, { backgroundColor: renkKodlari[colorObj.color] }]}
            onPress={() => handleColorSelect(colorObj.color)}
          >
            <Text style={styles.optionText}>{colorObj.color.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f3f0ff', // Soluk pastel mavi
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#B2A3D1', // Pastel mor
  },
  instructions: {
    fontSize: 18,
    marginBottom: 15,
    color: '#9A9A9A', // Soluk gri
  },
  colorBox: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  message: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#4B4B4B', // Gri
  },
  score: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    color: '#8A4D76', // Pastel mor
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  optionButton: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#444',
  },
  optionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

export default Game;