import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const animals = [
  { name: 'Kediler', image: 'https://www.petsepetimde.com/class/INNOVAEditor/assets/yavvrucat2.jpg', sound: 'Miyav', habitat: 'Evcil hayvan', fact: 'Kediler, genellikle yalnız yaşarlar ve oldukça bağımsızdırlar.' },
  { name: 'Köpekler', image: 'https://drahmetakcay.com/wp-content/uploads/2021/03/Alerji-Yapmayan-Kopek-Irklari-Kopek-Alerjisi-Asisi.jpg', sound: 'Hav', habitat: 'Evcil hayvan', fact: 'Köpekler, insanların en eski arkadaşlarından biridir ve farklı türleri vardır.' },
  { name: 'İnekler', image: 'https://farmow.com/article-image/1599056561.jpg', sound: 'Möö', habitat: 'Çiftlik', fact: 'İnekler, sütün kaynağı olarak bilinir ve geniş alanlarda otlamayı severler.' },
  { name: 'Koyunlar', image: 'https://d2941uvtj8higz.cloudfront.net/uploads/2023/3/U5pWY6jwHLSnL1v0Dc4Xds3egvQDzHS2pSqoEmlW.jpg', sound: 'Mee', habitat: 'Çiftlik', fact: 'Koyunlar, tüylerinden yün elde edilir ve sürüler halinde yaşarlar.' },
  { name: 'Atlar', image: 'https://cdn.alemfm.com/Documents/alem_fm/images/2015/12/01/fed34402-abcc-47f8-b3f0-38945ed83af2.jpg', sound: 'Hınn', habitat: 'Çiftlik ve vahşi doğa', fact: 'Atlar, binicilik için yaygın olarak kullanılan büyük ve güçlü hayvanlardır.' },
  { name: 'Tavuklar', image: 'https://veteriner.cc/wp-content/uploads/2024/06/Tavuklar-nasil-beslenir.jpg', sound: 'Gıdgıdak', habitat: 'Çiftlik', fact: 'Tavuklar, genellikle yumurtladıkları için bilinirler ve sürüler halinde yaşarlar.' },
  { name: 'Öküzler', image: 'https://www.kumescim.com/assets/img/blog/3116926699.jpg', sound: 'Möö', habitat: 'Çiftlik', fact: 'Öküzler, iş gücü olarak kullanılır ve genellikle çok güçlüdürler.' },
  { name: 'Aslan', image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2022/08/09/thumbs_b_c_237e90e304b3acbecf8faad84f1580ac.jpg', sound: 'Hav', habitat: 'Vahşi Doğa', fact: 'Aslanlar, yırtıcı hayvanlardır ve sürüler halinde yaşarlar.' },
  { name: 'Zebra', image: 'https://www.bursahayvanatbahcesi.com/wp-content/uploads/2010/09/zebra-e1433337237225.jpg', sound: 'İiik', habitat: 'Vahşi Doğa', fact: 'Zebralar, Afrikalı otçul hayvanlardır ve benekli desenleriyle tanınır.' },
  { name: 'Fil', image: 'https://www.ekoiq.com/wp-content/uploads/2022/08/insan-mudahalesi-ve-iklim-krizi-fil-neslini-tehdit-ediyor.jpg', sound: 'Truuumppp', habitat: 'Vahşi Doğa', fact: 'Filler, büyük memelilerdir ve genellikle ormanlarda veya savanlarda yaşarlar.' },
  { name: 'Penguen', image: 'https://img-s2.onedio.com/id-57cd2a1b901eb15c50ea4cc7/rev-0/w-600/h-400/f-jpg/s-c47efd63730e1ee7720839c0c27af9080854ca17.jpg', sound: 'Cıv cıv', habitat: 'Vahşi Doğa', fact: 'Penguenler, soğuk iklimleri sever ve çoğunlukla Antarktika’da yaşarlar.' },
];

function Game3() {
  const [selectedAnimal, setSelectedAnimal] = useState(animals[Math.floor(Math.random() * animals.length)]);
  const [message, setMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const checkCategory = (category: string) => {
    if (category === selectedAnimal.habitat) {
      setMessage('Tebrikler! Doğru kategoriye yerleştirdiniz.');
      // Yeni bir hayvan seç ve mesajı sıfırla
      setSelectedAnimal(animals[Math.floor(Math.random() * animals.length)]);
    } else {
      setMessage('Yanlış! Oyuna yeniden başlıyoruz.');
      // Yanlış cevaptan sonra oyunu sıfırlamak için yeni bir hayvan seç
      setSelectedAnimal(animals[Math.floor(Math.random() * animals.length)]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hayvanları Kategorilere Ayır!</Text>
      <Text style={styles.instructions}>Doğru kategoriye hayvanı yerleştir!</Text>

      <Image source={{ uri: selectedAnimal.image }} style={styles.image} />
      <Text style={styles.animalFact}>İpucu: {selectedAnimal.fact}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => checkCategory('Evcil hayvan')}>
          <Text style={styles.buttonText}>Evcil Hayvan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => checkCategory('Çiftlik')}>
          <Text style={styles.buttonText}>Çiftlik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => checkCategory('Vahşi Doğa')}>
          <Text style={styles.buttonText}>Vahşi Doğa</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#d8f3dc', // pastel yeşil arka plan
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  animalFact: {
    fontSize: 16,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#40916c', // daha koyu pastel yeşil buton
    padding: 10,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});


export default Game3;
