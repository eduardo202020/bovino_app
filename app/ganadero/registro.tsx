import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RegistroScreen() {
  const navigation = useNavigation();
  const [animalName, setAnimalName] = useState('');
  const [breed, setBreed] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [rfidTag, setRfidTag] = useState('');

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES');
  };

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setRfidTag('E200001234567890');
      setIsScanning(false);
      Alert.alert('RFID Detectado', 'Tag escaneado exitosamente');
    }, 3000);
  };

  const handleSaveAnimal = () => {
    if (!animalName || !breed) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    Alert.alert(
      'Animal Registrado',
      `${animalName} ha sido registrado exitosamente`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MaterialIcons name="menu" size={24} color="#152111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registrar Nuevo Animal</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.main}>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Nombre del Animal</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el nombre"
              value={animalName}
              onChangeText={setAnimalName}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Raza</Text>
            <TextInput
              style={styles.input}
              placeholder="ej. Angus"
              value={breed}
              onChangeText={setBreed}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>{formatDate(dateOfBirth)}</Text>
              <MaterialIcons name="calendar-today" size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {showDatePicker && (
            <DateTimePicker
              value={dateOfBirth}
              mode="date"
              display="default"
              onChange={onDateChange}
              maximumDate={new Date()}
            />
          )}
        </View>

        <View style={styles.scannerSection}>
          <MaterialIcons name="nfc" size={48} color="#4cdf20" />
          <Text style={styles.scannerTitle}>Escanear Etiqueta RFID</Text>
          <Text style={styles.scannerDescription}>
            Conecte su lector y escanee la etiqueta RFID del animal
          </Text>

          {rfidTag ? (
            <View style={styles.tagDetected}>
              <Text style={styles.tagText}>Tag: {rfidTag}</Text>
            </View>
          ) : null}

          <TouchableOpacity
            style={styles.scanButton}
            onPress={handleStartScan}
            disabled={isScanning}
          >
            <Text style={styles.scanButtonText}>
              {isScanning ? 'Escaneando...' : 'Iniciar Escaneo'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAnimal}>
          <Text style={styles.saveButtonText}>Guardar Animal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f8f6' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  menuButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#152111' },
  headerSpacer: { width: 40 },
  main: { flex: 1, paddingHorizontal: 16 },
  form: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  formGroup: { marginBottom: 20 },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#f9fafb',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#f9fafb',
  },
  dateText: { fontSize: 16, color: '#152111' },
  scannerSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  scannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginTop: 16,
  },
  scannerDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 8,
  },
  tagDetected: {
    backgroundColor: '#e7f5e7',
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  tagText: { color: '#10b981', fontWeight: 'bold' },
  scanButton: {
    backgroundColor: '#4cdf20',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  scanButtonText: { color: '#152111', fontWeight: 'bold' },
  footer: { padding: 16 },
  saveButton: {
    backgroundColor: '#94C973',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: { color: '#152111', fontSize: 18, fontWeight: 'bold' },
});
