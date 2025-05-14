import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Question = {
  pattern: string;
  options: string[];
  correctAnswer: string;
};

const questions: Question[] = [
  { pattern: "🔺 🔺 ⚪ 🔺 🔺 ⚪ ❓", options: ["🔺", "⚫", "🔻"], correctAnswer: "🔺" },
  { pattern: "🌙 ☀️ 🌙 ☀️ 🌙 ❓", options: ["☀️", "🌙", "⭐"], correctAnswer: "☀️" },
  { pattern: "🐶 🐶 🐱 🐶 🐶 🐱 ❓", options: ["🐶", "🐱", "🐰"], correctAnswer: "🐶" },
  { pattern: "🔷 🔷 🔷 ⚪ 🔷 🔷 🔷 ⚪ ❓", options: ["⚪", "🔷", "🔶"], correctAnswer: "🔷" },
  { pattern: "🚗 🚙 🚗 🚙 🚗❓", options: ["🚕", "🚗", "🚙"], correctAnswer: "🚙" },
  { pattern: "🍎 🍏 🍎 🍏 🍎 ❓", options: ["🍏", "🍎", "🍇"], correctAnswer: "🍏" },
  { pattern: "👟 👟 🧦 👟 👟 🧦 ❓", options: ["🧦", "👟", "🎩"], correctAnswer: "👟" },
  { pattern: "🔲 🔳 🔲 🔳 ❓", options: ["🔳", "🔲", "⚫"], correctAnswer: "🔲" },
  { pattern: "🎈 🎈 🎁 🎈 🎈 🎁 ❓", options: ["🎁", "🎈", "🎂"], correctAnswer: "🎈" },
  { pattern: "🐸 🐸 🐸 🦆 🐸 🐸 🐸 🦆 ❓", options: ["🦆", "🐸", "🐢"], correctAnswer: "🐸" },
  { pattern: "🌸 🌼 🌸 🌼 🌸 ❓", options: ["🌸", "🌼", "🌺"], correctAnswer: "🌼" },
  { pattern: "🍇 🍇 🍎 🍇 🍇 🍎 ❓", options: ["🍎", "🍇", "🍉"], correctAnswer: "🍇" },
  { pattern: "🥇 🥈 🥇 🥉 🥇 ❓", options: ["🥈", "🥇", "🥉"], correctAnswer: "🥈" },
  { pattern: "🍪 🍩 🍪 🍩 🍪 ❓", options: ["🍪", "🍩", "🍫"], correctAnswer: "🍩" },
  { pattern: "🔲 🔳 🔲 🔲 🔳 🔲 ❓", options: ["🔳", "🔲", "⚫"], correctAnswer: "🔳" },
  { pattern: "🍒 🍓 🍒 🍓 🍒 ❓", options: ["🍒", "🍓", "🍉"], correctAnswer: "🍓" },
  { pattern: "🦄 🦄 🦄 🦄 🦄 🦄 ❓", options: ["🦄", "🐴", "🦓"], correctAnswer: "🦄" },
];


const Game5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selected: string) => {
    if (selected === currentQuestion.correctAnswer) {
      if (currentIndex < questions.length - 1) {
        setMessage("Doğru!");
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setMessage("");
        }, 1000);
      } else {
        setMessage("Tebrikler! Tüm soruları bitirdiniz.");
      }
    } else {
      setMessage("Yanlış! Tekrar dene.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Örüntüyü Tamamla</Text>
      <Text style={styles.pattern}>{currentQuestion.pattern}</Text>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {message !== "" && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fffdf0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#f0d000",
  },
  pattern: {
    fontSize: 32,
    textAlign: "center",
    marginVertical: 24,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  optionButton: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  optionText: {
    fontSize: 28,
  },
  message: {
    marginTop: 30,
    fontSize: 20,
    textAlign: "center",
    color: "#444",
  },
});

export default Game5;
