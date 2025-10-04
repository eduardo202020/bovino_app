import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { mockUsers } from '../../constants/mockUsers';

export default function AjustesScreen() {
  const navigation = useNavigation();

  // Simular usuario actual (en una app real vendría del contexto de autenticación)
  const currentUser = mockUsers[0]; // Juan Pérez

  // Estados para el formulario
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [farmName, setFarmName] = useState(
    currentUser.location?.farmName || ''
  );
  const [address, setAddress] = useState(currentUser.location?.address || '');
  const [city, setCity] = useState(currentUser.location?.city || '');
  const [state, setState] = useState(currentUser.location?.state || '');
  const [country, setCountry] = useState(currentUser.location?.country || '');
  const [showLocationModal, setShowLocationModal] = useState(false);

  const handleSave = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Nombre y email son obligatorios');
      return;
    }

    // En una app real, aquí se enviaría la información al servidor
    Alert.alert(
      'Información Actualizada',
      'Los datos del ganadero han sido actualizados exitosamente',
      [{ text: 'OK' }]
    );
  };

  const handleLocationSelector = () => {
    setShowLocationModal(true);
  };

  const formatLocationText = () => {
    if (address && city && state) {
      return `${address}, ${city}, ${state}`;
    }
    return 'Seleccionar ubicación';
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MaterialIcons name="menu" size={24} color="#152111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajustes del Ganadero</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Formulario */}
      <ScrollView style={styles.main}>
        <View style={styles.form}>
          {/* Información Personal */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Información Personal</Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Nombre Completo *</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre completo"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Email *</Text>
              <TextInput
                style={styles.input}
                placeholder="correo@ejemplo.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Información de la Ganadería */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Información de la Ganadería</Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Nombre de la Finca</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: Hacienda El Paraíso"
                value={farmName}
                onChangeText={setFarmName}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Dirección</Text>
              <TextInput
                style={styles.input}
                placeholder="Calle, carrera o vereda"
                value={address}
                onChangeText={setAddress}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Ciudad</Text>
              <TextInput
                style={styles.input}
                placeholder="Ciudad"
                value={city}
                onChangeText={setCity}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Departamento/Estado</Text>
              <TextInput
                style={styles.input}
                placeholder="Departamento o Estado"
                value={state}
                onChangeText={setState}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>País</Text>
              <TextInput
                style={styles.input}
                placeholder="País"
                value={country}
                onChangeText={setCountry}
              />
            </View>
          </View>

          {/* Ubicación Geográfica */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ubicación Geográfica</Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Coordenadas GPS</Text>
              <TouchableOpacity
                style={styles.locationInput}
                onPress={handleLocationSelector}
              >
                <Text style={styles.locationText}>{formatLocationText()}</Text>
                <MaterialIcons name="location-on" size={20} color="#6b7280" />
              </TouchableOpacity>
              <Text style={styles.helper}>
                Toque para seleccionar ubicación en el mapa
              </Text>
            </View>
          </View>

          {/* Estadísticas */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Estadísticas</Text>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <MaterialIcons name="pets" size={24} color="#4cdf20" />
                <Text style={styles.statNumber}>
                  {currentUser.animalsCount}
                </Text>
                <Text style={styles.statLabel}>Animales Registrados</Text>
              </View>

              <View style={styles.statItem}>
                <MaterialIcons name="schedule" size={24} color="#4cdf20" />
                <Text style={styles.statNumber}>{currentUser.lastActive}</Text>
                <Text style={styles.statLabel}>Última Actividad</Text>
              </View>
            </View>
          </View>

          {/* Botón Guardar */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Guardar Cambios</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal de Ubicación */}
      <Modal
        visible={showLocationModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <MaterialIcons name="location-on" size={64} color="#4cdf20" />
            <Text style={styles.modalTitle}>Selector de Ubicación GPS</Text>
            <Text style={styles.modalText}>
              Esta función estará disponible próximamente. Podrás seleccionar la
              ubicación exacta de tu ganadería usando mapas interactivos y GPS.
            </Text>
            <Text style={styles.modalSubText}>
              Funciones disponibles: • Selección por mapa interactivo • Búsqueda
              por dirección • Detección automática por GPS • Guardado de
              múltiples ubicaciones
            </Text>
            <View style={styles.modalButtonsRow}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => setShowLocationModal(false)}
              >
                <Text style={styles.modalCancelButtonText}>Cerrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalConfirmButton}
                onPress={() => {
                  Alert.alert(
                    'GPS Simulado',
                    'Ubicación detectada automáticamente'
                  );
                  setShowLocationModal(false);
                }}
              >
                <Text style={styles.modalConfirmButtonText}>Usar GPS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 44,
    paddingBottom: 16,
    backgroundColor: '#4cdf20',
  },
  menuButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
  },
  headerSpacer: {
    width: 40,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  form: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#4cdf20',
    paddingBottom: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#152111',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#152111',
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  locationText: {
    fontSize: 16,
    color: '#6b7280',
    flex: 1,
  },
  helper: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    fontStyle: 'italic',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#152111',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 4,
  },
  saveButton: {
    backgroundColor: '#4cdf20',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    margin: 20,
    alignItems: 'center',
    maxWidth: 400,
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  modalSubText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'left',
    lineHeight: 20,
    marginBottom: 24,
  },
  modalButtonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  modalCancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  modalConfirmButton: {
    flex: 1,
    backgroundColor: '#4cdf20',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalConfirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#152111',
  },
});
