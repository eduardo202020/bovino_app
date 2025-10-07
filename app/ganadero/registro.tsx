import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { mockAnimalDetails, mockAnimals } from '../../constants/mockAnimals';
import { CATTLE_BREEDS } from '../../constants/types';

export default function RegistroScreen() {
  const navigation = useNavigation();
  const [animalName, setAnimalName] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [rfidTag, setRfidTag] = useState('');
  const [birthLocation, setBirthLocation] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showBreedModal, setShowBreedModal] = useState(false);
  const [photos, setPhotos] = useState({
    front: '',
    rightSide: '',
    leftSide: '',
  });

  // Estados para biometría y captura de fotos
  const [isProcessingBiometrics, setIsProcessingBiometrics] = useState(false);
  const [currentPhotoType, setCurrentPhotoType] = useState('');
  const [biometricProgress, setBiometricProgress] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(1));

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(Platform.OS === 'ios');
    setDateOfBirth(currentDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES');
  };

  const generateUniqueId = () => {
    return Date.now().toString();
  };

  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const getAgeCategory = (age: number) => {
    if (age <= 2) return 'Jóvenes (1-2 años)';
    if (age <= 5) return 'Adultos (3-5 años)';
    return 'Mayores (5+ años)';
  };

  const handleStartScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const simulatedRFID = `RFID${Math.floor(Math.random() * 1000000)}`;
      setRfidTag(simulatedRFID);
      setIsScanning(false);
      Alert.alert('RFID Detectado', `Tag escaneado: ${simulatedRFID}`);
    }, 2000);
  };

  const handlePhotoCapture = () => {
    setShowPhotoModal(true);
  };

  // Función para iniciar captura real de fotos
  const handleRealPhotoCapture = async (
    photoType: 'front' | 'rightSide' | 'leftSide'
  ) => {
    setCurrentPhotoType(photoType);
    setShowPhotoModal(false);

    // Mostrar opciones de cámara o galería
    Alert.alert(
      'Seleccionar foto',
      `Captura la vista ${getPhotoTypeName(photoType)} del animal`,
      [
        {
          text: 'Cámara',
          onPress: () => takePicture(photoType),
        },
        {
          text: 'Galería',
          onPress: () => pickImage(photoType),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ]
    );
  };

  // Función auxiliar para nombres de fotos
  const getPhotoTypeName = (type: string) => {
    switch (type) {
      case 'front':
        return 'frontal';
      case 'rightSide':
        return 'lado derecho';
      case 'leftSide':
        return 'lado izquierdo';
      default:
        return 'del animal';
    }
  };

  // Tomar foto con cámara
  const takePicture = async (photoType: 'front' | 'rightSide' | 'leftSide') => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Error',
          'Se necesitan permisos de cámara para esta función'
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        await processBiometrics(result.assets[0].uri, photoType);
      }
    } catch {
      Alert.alert('Error', 'No se pudo acceder a la cámara');
    }
  };

  // Seleccionar imagen de galería
  const pickImage = async (photoType: 'front' | 'rightSide' | 'leftSide') => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Error',
          'Se necesitan permisos de galería para esta función'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        await processBiometrics(result.assets[0].uri, photoType);
      }
    } catch {
      Alert.alert('Error', 'No se pudo acceder a la galería');
    }
  };

  // Procesar biometría con efectos visuales
  const processBiometrics = async (
    imageUri: string,
    photoType: 'front' | 'rightSide' | 'leftSide'
  ) => {
    setIsProcessingBiometrics(true);
    setBiometricProgress(0);

    // Animación de aparición
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Simulación de procesamiento biométrico
    const steps = [
      'Analizando estructura facial...',
      'Detectando características únicas...',
      'Procesando datos biométricos...',
      'Creando perfil de identificación...',
      'Almacenando en base de datos...',
      'Finalizando proceso...',
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setBiometricProgress((i + 1) / steps.length);

      // Efecto de pulso
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }

    // Guardar la imagen
    setPhotos((prev) => ({
      ...prev,
      [photoType]: imageUri,
    }));

    // Animación de salida
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsProcessingBiometrics(false);
      setBiometricProgress(0);

      Alert.alert(
        'Biometría Completada',
        `Los datos biométricos ${getPhotoTypeName(photoType)} han sido procesados y almacenados exitosamente. El animal podrá ser identificado automáticamente en futuras detecciones.`,
        [{ text: 'Continuar' }]
      );
    });
  };

  const handleLocationSelector = () => {
    setShowLocationModal(true);
  };

  const handleBreedSelector = () => {
    setShowBreedModal(true);
  };

  const handleBreedSelect = (selectedBreed: string) => {
    setBreed(selectedBreed);
    setShowBreedModal(false);
  };

  // Funciones mock para simulación

  const handleMockLocationSelect = () => {
    const mockLocations = [
      'Finca San José, Arequipa',
      'Estancia El Progreso, Huancayo',
      'Rancho Los Andes, Arequipa',
      'Ganadería La Esperanza, Huancayo',
    ];
    const randomLocation =
      mockLocations[Math.floor(Math.random() * mockLocations.length)];
    setBirthLocation(randomLocation);
    setShowLocationModal(false);
    Alert.alert('Ubicación Simulada', `Se ha seleccionado: ${randomLocation}`);
  };

  const handleSaveAnimal = () => {
    if (!animalName || !breed || !gender || !weight) {
      Alert.alert(
        'Error',
        'Por favor completa todos los campos requeridos (nombre, raza, género, peso)'
      );
      return;
    }

    const age = calculateAge(dateOfBirth);
    const newAnimal = {
      id: generateUniqueId(),
      name: animalName,
      status: 'Activo',
      statusColor: '#10b981',
      breed,
      age,
      ageCategory: getAgeCategory(age),
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
      gender,
      weight: `${weight} kg`,
      birthDate: dateOfBirth.toLocaleDateString('es-ES'),
      birthLocation: birthLocation || 'No especificada',
      rfidTag,
      photos: {
        front:
          photos.front ||
          'https://via.placeholder.com/300x300/e5e7eb/6b7280?text=Foto+Frontal',
        rightSide:
          photos.rightSide ||
          'https://via.placeholder.com/300x300/e5e7eb/6b7280?text=Lado+Derecho',
        leftSide:
          photos.leftSide ||
          'https://via.placeholder.com/300x300/e5e7eb/6b7280?text=Lado+Izquierdo',
      },
    };

    // Crear el registro detallado del animal
    const newAnimalDetail = {
      id: newAnimal.id,
      name: animalName,
      status: 'Activo',
      statusColor: '#10b981',
      image: newAnimal.image,
      breed,
      age: `${age} años`,
      weight: `${weight} kg`,
      gender,
      birthDate: dateOfBirth.toLocaleDateString('es-ES'),
      birthLocation: birthLocation || 'No especificada',
      rfidTag: rfidTag || 'No asignado',
      photos: newAnimal.photos,
      vaccinations: [
        {
          name: 'Fiebre aftosa',
          date: 'Pendiente',
          status: 'pending' as const,
        },
        { name: 'Brucelosis', date: 'Pendiente', status: 'pending' as const },
      ],
      healthRecords: [
        {
          date: new Date().toLocaleDateString('es-ES'),
          condition: 'Registro inicial',
          treatment: 'Ninguno',
          vet: 'Registrado por ganadero',
        },
      ],
    };

    // Agregar a la lista en memoria RAM
    mockAnimals.push(newAnimal);
    mockAnimalDetails[newAnimal.id] = newAnimalDetail;

    Alert.alert(
      'Animal Registrado',
      `${animalName} ha sido registrado exitosamente con ID: ${newAnimal.id}.\n\nDatos guardados en memoria RAM.`,
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
          {/* Nombre del Animal */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Nombre del Animal *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese el nombre"
              value={animalName}
              onChangeText={setAnimalName}
            />
          </View>

          {/* Raza */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Raza *</Text>
            <TouchableOpacity
              style={styles.breedSelector}
              onPress={handleBreedSelector}
            >
              <Text style={styles.breedText}>
                {breed || 'Seleccionar raza'}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color="#6b7280"
              />
            </TouchableOpacity>
          </View>

          {/* Género */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Género *</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === 'Macho' && styles.genderButtonSelected,
                ]}
                onPress={() => setGender('Macho')}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === 'Macho' && styles.genderTextSelected,
                  ]}
                >
                  Macho
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  gender === 'Hembra' && styles.genderButtonSelected,
                ]}
                onPress={() => setGender('Hembra')}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === 'Hembra' && styles.genderTextSelected,
                  ]}
                >
                  Hembra
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Peso */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Peso (kg) *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej: 450"
              value={weight}
              onChangeText={setWeight}
              keyboardType="numeric"
            />
          </View>

          {/* Fecha de Nacimiento */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>{formatDate(dateOfBirth)}</Text>
              <MaterialIcons name="calendar-today" size={20} color="#6b7280" />
            </TouchableOpacity>
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

          {/* Ubicación de Nacimiento */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Lugar de Nacimiento</Text>
            <TouchableOpacity
              style={styles.locationInput}
              onPress={handleLocationSelector}
            >
              <Text style={styles.locationText}>
                {birthLocation || 'Seleccionar ubicación'}
              </Text>
              <MaterialIcons name="location-on" size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Fotos del Animal */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Fotos del Animal (3 fotos)</Text>
            <View style={styles.photosContainer}>
              <Text style={styles.photosDescription}>
                Capture 3 fotos del animal: frontal, lado derecho y lado
                izquierdo
              </Text>

              {/* Preview de fotos capturadas */}
              {(photos.front || photos.rightSide || photos.leftSide) && (
                <View style={styles.photoPreviewContainer}>
                  {photos.front && (
                    <View style={styles.photoPreviewItem}>
                      <Image
                        source={{ uri: photos.front }}
                        style={styles.photoPreview}
                      />
                      <Text style={styles.photoPreviewLabel}>Frontal</Text>
                    </View>
                  )}
                  {photos.rightSide && (
                    <View style={styles.photoPreviewItem}>
                      <Image
                        source={{ uri: photos.rightSide }}
                        style={styles.photoPreview}
                      />
                      <Text style={styles.photoPreviewLabel}>Lado Der.</Text>
                    </View>
                  )}
                  {photos.leftSide && (
                    <View style={styles.photoPreviewItem}>
                      <Image
                        source={{ uri: photos.leftSide }}
                        style={styles.photoPreview}
                      />
                      <Text style={styles.photoPreviewLabel}>Lado Izq.</Text>
                    </View>
                  )}
                </View>
              )}

              <TouchableOpacity
                style={styles.photoSelector}
                onPress={handlePhotoCapture}
              >
                <MaterialIcons name="photo-camera" size={32} color="#6b7280" />
                <Text style={styles.photoSelectorText}>
                  {photos.front || photos.rightSide || photos.leftSide
                    ? 'Modificar fotos'
                    : 'Capturar fotos'}
                </Text>
              </TouchableOpacity>

              {/* Indicadores de fotos capturadas */}
              <View style={styles.photoIndicators}>
                <View
                  style={[
                    styles.photoIndicator,
                    photos.front && styles.photoIndicatorActive,
                  ]}
                >
                  <MaterialIcons
                    name={
                      photos.front ? 'check-circle' : 'radio-button-unchecked'
                    }
                    size={16}
                    color={photos.front ? '#4cdf20' : '#6b7280'}
                  />
                  <Text style={styles.photoIndicatorText}>Frontal</Text>
                </View>
                <View
                  style={[
                    styles.photoIndicator,
                    photos.rightSide && styles.photoIndicatorActive,
                  ]}
                >
                  <MaterialIcons
                    name={
                      photos.rightSide
                        ? 'check-circle'
                        : 'radio-button-unchecked'
                    }
                    size={16}
                    color={photos.rightSide ? '#4cdf20' : '#6b7280'}
                  />
                  <Text style={styles.photoIndicatorText}>Lado Der.</Text>
                </View>
                <View
                  style={[
                    styles.photoIndicator,
                    photos.leftSide && styles.photoIndicatorActive,
                  ]}
                >
                  <MaterialIcons
                    name={
                      photos.leftSide
                        ? 'check-circle'
                        : 'radio-button-unchecked'
                    }
                    size={16}
                    color={photos.leftSide ? '#4cdf20' : '#6b7280'}
                  />
                  <Text style={styles.photoIndicatorText}>Lado Izq.</Text>
                </View>
              </View>
            </View>
          </View>

          {/* RFID */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Tag RFID</Text>
            <View style={styles.rfidContainer}>
              <TextInput
                style={[styles.input, styles.rfidInput]}
                placeholder="Ingrese o escanee el tag RFID"
                value={rfidTag}
                onChangeText={setRfidTag}
              />
              <TouchableOpacity
                style={[
                  styles.scanButton,
                  isScanning && styles.scanButtonActive,
                ]}
                onPress={handleStartScan}
                disabled={isScanning}
              >
                <MaterialIcons
                  name={isScanning ? 'hourglass-empty' : 'qr-code-scanner'}
                  size={20}
                  color={isScanning ? '#f59e0b' : '#152111'}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Botón Registrar */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleSaveAnimal}
          >
            <Text style={styles.registerButtonText}>Registrar Animal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal para captura de fotos */}
      <Modal
        visible={showPhotoModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowPhotoModal(false)}
      >
        <View style={modalStyles.container}>
          <View style={modalStyles.header}>
            <Text style={modalStyles.title}>Captura de Fotos</Text>
            <TouchableOpacity
              onPress={() => setShowPhotoModal(false)}
              style={modalStyles.closeButton}
            >
              <MaterialIcons name="close" size={24} color="#152111" />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={modalStyles.content}
          >
            {/* Header del modal */}
            <View style={modalStyles.modalHeader}>
              <MaterialIcons name="photo-camera" size={48} color="#4cdf20" />
              <Text style={modalStyles.message}>
                Captura Biométrica de Fotos
              </Text>
              <Text style={modalStyles.description}>
                Captura las 3 fotos del animal para crear su perfil biométrico
                único.
              </Text>
            </View>

            {/* Progreso de captura */}
            <View style={modalStyles.progressContainer}>
              <Text style={modalStyles.progressText}>
                Progreso: {Object.values(photos).filter((p) => p).length}/3
                fotos
              </Text>
              <View style={modalStyles.progressBar}>
                <View
                  style={[
                    modalStyles.progressFill,
                    {
                      width: `${(Object.values(photos).filter((p) => p).length / 3) * 100}%`,
                    },
                  ]}
                />
              </View>
            </View>

            {/* Botones para cada tipo de foto - Diseño de 3 columnas */}
            <View style={modalStyles.photoGridContainer}>
              {/* Foto Frontal */}
              <View style={modalStyles.photoColumnContainer}>
                <TouchableOpacity
                  style={[
                    modalStyles.photoGridButton,
                    photos.front && modalStyles.photoGridButtonCompleted,
                  ]}
                  onPress={() => handleRealPhotoCapture('front')}
                >
                  {photos.front ? (
                    <Image
                      source={{ uri: photos.front }}
                      style={modalStyles.photoGridPreview}
                    />
                  ) : (
                    <MaterialIcons
                      name="photo-camera"
                      size={40}
                      color="#4cdf20"
                    />
                  )}
                  {photos.front && (
                    <View style={modalStyles.completedOverlay}>
                      <MaterialIcons
                        name="check-circle"
                        size={24}
                        color="#fff"
                      />
                    </View>
                  )}
                </TouchableOpacity>
                <Text style={modalStyles.photoGridLabel}>Frontal</Text>
              </View>

              {/* Foto Lado Derecho */}
              <View style={modalStyles.photoColumnContainer}>
                <TouchableOpacity
                  style={[
                    modalStyles.photoGridButton,
                    photos.rightSide && modalStyles.photoGridButtonCompleted,
                  ]}
                  onPress={() => handleRealPhotoCapture('rightSide')}
                >
                  {photos.rightSide ? (
                    <Image
                      source={{ uri: photos.rightSide }}
                      style={modalStyles.photoGridPreview}
                    />
                  ) : (
                    <MaterialIcons
                      name="photo-camera"
                      size={40}
                      color="#4cdf20"
                    />
                  )}
                  {photos.rightSide && (
                    <View style={modalStyles.completedOverlay}>
                      <MaterialIcons
                        name="check-circle"
                        size={24}
                        color="#fff"
                      />
                    </View>
                  )}
                </TouchableOpacity>
                <Text style={modalStyles.photoGridLabel}>Derecho</Text>
              </View>

              {/* Foto Lado Izquierdo */}
              <View style={modalStyles.photoColumnContainer}>
                <TouchableOpacity
                  style={[
                    modalStyles.photoGridButton,
                    photos.leftSide && modalStyles.photoGridButtonCompleted,
                  ]}
                  onPress={() => handleRealPhotoCapture('leftSide')}
                >
                  {photos.leftSide ? (
                    <Image
                      source={{ uri: photos.leftSide }}
                      style={modalStyles.photoGridPreview}
                    />
                  ) : (
                    <MaterialIcons
                      name="photo-camera"
                      size={40}
                      color="#4cdf20"
                    />
                  )}
                  {photos.leftSide && (
                    <View style={modalStyles.completedOverlay}>
                      <MaterialIcons
                        name="check-circle"
                        size={24}
                        color="#fff"
                      />
                    </View>
                  )}
                </TouchableOpacity>
                <Text style={modalStyles.photoGridLabel}>Izquierdo</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Modal para selección de raza */}
      <Modal
        visible={showBreedModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowBreedModal(false)}
      >
        <View style={modalStyles.container}>
          <View style={modalStyles.header}>
            <Text style={modalStyles.title}>Seleccionar Raza</Text>
            <TouchableOpacity
              onPress={() => setShowBreedModal(false)}
              style={modalStyles.closeButton}
            >
              <MaterialIcons name="close" size={24} color="#152111" />
            </TouchableOpacity>
          </View>

          <ScrollView style={modalStyles.breedList}>
            {CATTLE_BREEDS.map((breedOption, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  modalStyles.breedItem,
                  breed === breedOption && modalStyles.breedItemSelected,
                ]}
                onPress={() => handleBreedSelect(breedOption)}
              >
                <Text
                  style={[
                    modalStyles.breedItemText,
                    breed === breedOption && modalStyles.breedItemTextSelected,
                  ]}
                >
                  {breedOption}
                </Text>
                {breed === breedOption && (
                  <MaterialIcons name="check" size={20} color="#152111" />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      {/* Modal para selección de ubicación */}
      <Modal
        visible={showLocationModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View style={modalStyles.container}>
          <View style={modalStyles.header}>
            <Text style={modalStyles.title}>Ubicación de Nacimiento</Text>
            <TouchableOpacity
              onPress={() => setShowLocationModal(false)}
              style={modalStyles.closeButton}
            >
              <MaterialIcons name="close" size={24} color="#152111" />
            </TouchableOpacity>
          </View>

          <View style={modalStyles.content}>
            <MaterialIcons name="location-on" size={64} color="#6b7280" />
            <Text style={modalStyles.message}>
              Próximamente: Selección de ubicación GPS
            </Text>
            <Text style={modalStyles.description}>
              Esta función permitirá seleccionar la ubicación exacta donde nació
              el animal usando:
              {'\n'}- GPS automático
              {'\n'}- Búsqueda por dirección
              {'\n'}- Selección en mapa
            </Text>
            <TouchableOpacity
              style={modalStyles.mockButton}
              onPress={handleMockLocationSelect}
            >
              <Text style={modalStyles.mockButtonText}>
                Simular ubicación (Demo)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de Procesamiento Biométrico */}
      <Modal
        visible={isProcessingBiometrics}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {}}
      >
        <View style={biometricStyles.overlay}>
          <Animated.View
            style={[
              biometricStyles.container,
              {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }],
              },
            ]}
          >
            <View style={biometricStyles.content}>
              {/* Icono de escáner biométrico */}
              <View style={biometricStyles.scannerContainer}>
                <MaterialIcons name="face" size={80} color="#4cdf20" />
                <View style={biometricStyles.scanLines}>
                  <Animated.View
                    style={[
                      biometricStyles.scanLine,
                      {
                        transform: [
                          {
                            translateY: fadeAnim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [-40, 40],
                            }),
                          },
                        ],
                      },
                    ]}
                  />
                </View>
              </View>

              {/* Texto de estado */}
              <Text style={biometricStyles.title}>
                Procesando Datos Biométricos
              </Text>
              <Text style={biometricStyles.subtitle}>
                Analizando características del animal{' '}
                {currentPhotoType
                  ? `(${getPhotoTypeName(currentPhotoType)})`
                  : ''}
              </Text>

              {/* Barra de progreso */}
              <View style={biometricStyles.progressContainer}>
                <View style={biometricStyles.progressBar}>
                  <Animated.View
                    style={[
                      biometricStyles.progressFill,
                      {
                        width: `${biometricProgress * 100}%`,
                      },
                    ]}
                  />
                </View>
                <Text style={biometricStyles.progressText}>
                  {Math.round(biometricProgress * 100)}%
                </Text>
              </View>

              {/* Indicadores de procesamiento */}
              <View style={biometricStyles.indicators}>
                <View style={biometricStyles.indicator}>
                  <MaterialIcons
                    name={
                      biometricProgress > 0.2
                        ? 'check-circle'
                        : 'radio-button-unchecked'
                    }
                    size={16}
                    color={biometricProgress > 0.2 ? '#4cdf20' : '#6b7280'}
                  />
                  <Text style={biometricStyles.indicatorText}>
                    Estructura facial
                  </Text>
                </View>
                <View style={biometricStyles.indicator}>
                  <MaterialIcons
                    name={
                      biometricProgress > 0.4
                        ? 'check-circle'
                        : 'radio-button-unchecked'
                    }
                    size={16}
                    color={biometricProgress > 0.4 ? '#4cdf20' : '#6b7280'}
                  />
                  <Text style={biometricStyles.indicatorText}>
                    Características únicas
                  </Text>
                </View>
                <View style={biometricStyles.indicator}>
                  <MaterialIcons
                    name={
                      biometricProgress > 0.6
                        ? 'check-circle'
                        : 'radio-button-unchecked'
                    }
                    size={16}
                    color={biometricProgress > 0.6 ? '#4cdf20' : '#6b7280'}
                  />
                  <Text style={biometricStyles.indicatorText}>
                    Perfil biométrico
                  </Text>
                </View>
                <View style={biometricStyles.indicator}>
                  <MaterialIcons
                    name={
                      biometricProgress > 0.8
                        ? 'check-circle'
                        : 'radio-button-unchecked'
                    }
                    size={16}
                    color={biometricProgress > 0.8 ? '#4cdf20' : '#6b7280'}
                  />
                  <Text style={biometricStyles.indicatorText}>
                    Base de datos
                  </Text>
                </View>
              </View>

              {/* Loading spinner */}
              <ActivityIndicator
                size="large"
                color="#4cdf20"
                style={biometricStyles.spinner}
              />
            </View>
          </Animated.View>
        </View>
      </Modal>
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
  // Nuevos estilos para género
  genderContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  genderButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  genderButtonSelected: {
    backgroundColor: '#4cdf20',
    borderColor: '#4cdf20',
  },
  genderText: {
    fontSize: 16,
    color: '#152111',
    fontWeight: '500',
  },
  genderTextSelected: {
    color: '#152111',
    fontWeight: 'bold',
  },
  // Estilos para selector de raza
  breedSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#f9fafb',
  },
  breedText: {
    fontSize: 16,
    color: '#152111',
  },
  // Estilos para ubicación
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#f9fafb',
  },
  locationText: {
    fontSize: 16,
    color: '#152111',
  },
  // Estilos para fotos
  photosContainer: {
    marginTop: 8,
  },
  photosDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
    textAlign: 'center',
  },
  photoSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    backgroundColor: '#f9fafb',
  },
  photoSelectorText: {
    fontSize: 16,
    color: '#6b7280',
    marginLeft: 8,
    fontWeight: '500',
  },
  photoIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  photoIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  photoIndicatorActive: {
    opacity: 1,
  },
  photoIndicatorText: {
    fontSize: 12,
    color: '#6b7280',
  },
  // Estilos para preview de fotos en el formulario
  photoPreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingVertical: 8,
  },
  photoPreviewItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  photoPreview: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 4,
    borderWidth: 2,
    borderColor: '#4cdf20',
  },
  photoPreviewLabel: {
    fontSize: 10,
    color: '#4cdf20',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Estilos para RFID
  rfidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rfidInput: {
    flex: 1,
  },
  scanButtonActive: {
    backgroundColor: '#f59e0b',
  },
  // Botón de registro
  registerButton: {
    backgroundColor: '#4cdf20',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#152111',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
  },
  closeButton: {
    padding: 8,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    flexGrow: 1,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  mockButton: {
    backgroundColor: '#4cdf20',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mockButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  // Estilos adicionales para la reorganización del modal
  modalHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#152111',
    textAlign: 'center',
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4cdf20',
    borderRadius: 3,
  },
  mockButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  // Estilos para modal de razas
  breedList: {
    flex: 1,
    padding: 20,
  },
  breedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  breedItemSelected: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 4,
    borderLeftColor: '#4cdf20',
  },
  breedItemText: {
    fontSize: 16,
    color: '#152111',
  },
  breedItemTextSelected: {
    fontWeight: 'bold',
    color: '#152111',
  },
  // Nuevos estilos para captura de fotos
  photoButtonsContainer: {
    marginTop: 20,
    gap: 15,
  },
  photoButton: {
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  photoButtonCompleted: {
    borderColor: '#4cdf20',
    backgroundColor: '#4cdf20',
  },
  photoButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  photoButtonText: {
    flex: 1,
  },
  photoButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
  },
  photoButtonTitleCompleted: {
    color: '#ffffff',
  },
  photoButtonSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  photoButtonSubtitleCompleted: {
    color: '#f0fdf4',
  },
  photoPreview: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginLeft: 10,
  },
  // Estilos para el nuevo diseño de 3 columnas
  photoGridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  photoColumnContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
    maxWidth: 120,
  },
  photoGridButton: {
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 8,
    minHeight: 80,
    maxHeight: 120,
  },
  photoGridButtonCompleted: {
    borderColor: '#4cdf20',
    backgroundColor: '#4cdf20',
  },
  photoGridPreview: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  photoGridLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#152111',
    textAlign: 'center',
  },
  completedOverlay: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#4cdf20',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Estilos para el modal biométrico
const biometricStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    margin: 20,
    maxWidth: 350,
    width: '90%',
  },
  content: {
    alignItems: 'center',
  },
  scannerContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  scanLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  scanLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#4cdf20',
    shadowColor: '#4cdf20',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 25,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4cdf20',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#152111',
    textAlign: 'center',
  },
  indicators: {
    width: '100%',
    marginBottom: 20,
  },
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  indicatorText: {
    fontSize: 14,
    color: '#6b7280',
  },
  spinner: {
    marginTop: 10,
  },
});
