import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RegistroScreen() {
  const router = useRouter();
  const [animalName, setAnimalName] = useState('');
  const [breed, setBreed] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [rfidTag, setRfidTag] = useState('');

  const handleStartScan = () => {
    setIsScanning(true);
    // Simular escaneo RFID
    setTimeout(() => {
      setRfidTag('E200001234567890');
      setIsScanning(false);
      Alert.alert('RFID Detectado', 'Tag escaneado exitosamente');
    }, 3000);
  };

  const handleSaveAnimal = () => {
    if (!animalName || !breed || !dateOfBirth) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // Aquí se guardaría el animal en la base de datos
    Alert.alert(
      'Animal Registrado',
      `${animalName} ha sido registrado exitosamente`,
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#152111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Register New Animal</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {/* Form */}
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Animal Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              placeholderTextColor="#6b7280"
              value={animalName}
              onChangeText={setAnimalName}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Breed</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Angus"
              placeholderTextColor="#6b7280"
              value={breed}
              onChangeText={setBreed}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#6b7280"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
          </View>
        </View>

        {/* RFID Scanner Section */}
        <View style={styles.scannerSection}>
          <View style={styles.scannerIcon}>
            <MaterialIcons name="nfc" size={48} color="#4cdf20" />
          </View>

          <Text style={styles.scannerTitle}>Scan RFID Tag</Text>
          <Text style={styles.scannerDescription}>
            Connect your Bluetooth reader and scan the animal's RFID tag to link
            it.
          </Text>

          {rfidTag ? (
            <View style={styles.tagDetected}>
              <Text style={styles.tagText}>Tag Detectado: {rfidTag}</Text>
            </View>
          ) : null}

          <TouchableOpacity
            style={[styles.scanButton, isScanning && styles.scanButtonActive]}
            onPress={handleStartScan}
            disabled={isScanning}
          >
            <Text style={styles.scanButtonText}>
              {isScanning ? 'Escaneando...' : 'Start Scan'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAnimal}>
          <Text style={styles.saveButtonText}>Save Animal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  form: {
    marginBottom: 32,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#152111',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#152111',
    borderWidth: 0,
  },
  scannerSection: {
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  scannerIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(76, 223, 32, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  scannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 8,
  },
  scannerDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  tagDetected: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  tagText: {
    color: '#10b981',
    fontWeight: '600',
    fontSize: 14,
  },
  scanButton: {
    backgroundColor: 'rgba(76, 223, 32, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    width: '100%',
  },
  scanButtonActive: {
    backgroundColor: 'rgba(76, 223, 32, 0.3)',
  },
  scanButtonText: {
    color: '#4cdf20',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    padding: 16,
  },
  saveButton: {
    backgroundColor: '#4cdf20',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#4cdf20',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  saveButtonText: {
    color: '#152111',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
