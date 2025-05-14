import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Game1Screen() {
  const [randomNumber, setRandomNumber] = React.useState<number | null>(null);
  const [userGuess, setUserGuess] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [gameStarted, setGameStarted] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);
  const [guesses, setGuesses] = React.useState<number[]>([]);

  const startGame = () => {
    const number = Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında rastgele sayı
    setRandomNumber(number);
    setMessage('');
    setUserGuess('');
    setAttempts(0);
    setGameStarted(true);
    setGuesses([]); // ← Tahminleri sıfırla
  };

  const checkGuess = () => {
    if (randomNumber !== null && userGuess !== '') {
      const guess = parseInt(userGuess, 10);
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setGuesses([...guesses, guess]);

      if (guess === randomNumber) {
        setMessage(`🎉 Tebrikler! Doğru tahmin! Sayı: ${randomNumber}`);
        setGameStarted(false);
      } else if (newAttempts >= 5) {
        setMessage(`Maalesef, tahmin edemediniz! Doğru sayı: ${randomNumber}`);
        setGameStarted(false);
      } else if (guess > randomNumber) {
        setMessage('Çok yüksek! Tekrar deneyin.');
      } else {
        setMessage('Çok düşük! Tekrar deneyin.');
      }

      setUserGuess('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sayı Tahmin Oyunu</Text>

      {gameStarted ? (
        <>
          <Text style={styles.instructions}>1 ile 100 arasında bir sayı tahmin edin:</Text>
          <TextInput
            style={styles.input}
            value={userGuess}
            onChangeText={setUserGuess}
            keyboardType="numeric"
            placeholder="Tahmininizi girin"
            maxLength={3}
          />
          <TouchableOpacity style={styles.button} onPress={checkGuess}>
            <Text style={styles.buttonText}>Tahmin Et</Text>
          </TouchableOpacity>
          <Text style={styles.attempts}>Kalan tahmin hakkınız: {5 - attempts}</Text>
          <Text style={styles.message}>{message}</Text>
          {guesses.length > 0 && (
            <Text style={styles.guesses}>
              Tahminleriniz: {guesses.join(', ')}
            </Text>
          )}
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={startGame}>
            <Text style={styles.buttonText}>Oyuna Başla</Text>
          </TouchableOpacity>
          {message !== '' && <Text style={styles.message}>{message}</Text>}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffefdf',  // Yumuşak bir pastel arka plan rengi
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffb43d',  // Canlı ama yumuşak bir kırmızı tonunda
    marginBottom: 20,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 50,
    color: '#613b00',  // Nötr gri tonları, rahat okunabilir
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ffb43d',  // Canlı kırmızı tonları
    padding: 12,
    marginBottom: 20,
    width: '80%',
    fontSize: 22,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#fff5e5',  // Yumuşak sarımsı bir arka plan
  },
  attempts: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
    color: '#ffc76f',  // Neşeli bir turuncu
  },
  message: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#4688FF',  
  },
  guesses: { 
    fontSize: 14,
    marginTop: 10,
    color: 'gray',
  },
  button: {
    backgroundColor: '#ffb43d',  // Buton rengi, kırmızı tonu
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Game1Screen;
