import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { getAnimalData } from '../../../constants/mockAnimals';

export default function AnimalDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<'info' | 'health' | 'records'>(
    'info'
  );
  const [showImageModal, setShowImageModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [newOwner, setNewOwner] = useState('');
  const [transferReason, setTransferReason] = useState('');

  // Usar función centralizada para obtener datos del animal

  const animal = getAnimalData(id as string);

  const handleEdit = () => {
    Alert.alert('Editar Animal', 'Función de edición en desarrollo');
  };

  const handleDelete = () => {
    Alert.alert(
      'Eliminar Animal',
      `¿Estás seguro de que quieres eliminar a ${animal.name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => router.back(),
        },
      ]
    );
  };

  const handleImagePress = () => {
    setShowImageModal(true);
  };

  const handleTransfer = () => {
    setShowTransferModal(true);
  };

  const handleTransferSubmit = () => {
    if (!newOwner.trim()) {
      Alert.alert('Error', 'Por favor ingresa el nombre del nuevo propietario');
      return;
    }

    Alert.alert(
      'Transferencia Confirmada',
      `${animal.name} ha sido transferido a ${newOwner}`,
      [
        {
          text: 'OK',
          onPress: () => {
            setShowTransferModal(false);
            setNewOwner('');
            setTransferReason('');
            router.back();
          },
        },
      ]
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
        <Text style={styles.headerTitle}>{animal.name}</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <MaterialIcons name="edit" size={24} color="#152111" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.main}>
        {/* Animal Image and Basic Info */}
        <View style={styles.animalHeader}>
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={{ uri: animal.image }} style={styles.animalImage} />
          </TouchableOpacity>
          <View style={styles.animalBasicInfo}>
            <Text style={styles.animalName}>{animal.name}</Text>
            <Text style={styles.animalId}>ID: {animal.id}</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: animal.statusColor },
                ]}
              />
              <Text style={styles.statusText}>{animal.status}</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'info' && styles.activeTab]}
            onPress={() => setActiveTab('info')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'info' && styles.activeTabText,
              ]}
            >
              Información
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'health' && styles.activeTab]}
            onPress={() => setActiveTab('health')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'health' && styles.activeTabText,
              ]}
            >
              Salud
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'records' && styles.activeTab]}
            onPress={() => setActiveTab('records')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'records' && styles.activeTabText,
              ]}
            >
              Historial
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        {activeTab === 'info' && (
          <View style={styles.tabContent}>
            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>Información General</Text>
              <View style={styles.infoGrid}>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Raza</Text>
                  <Text style={styles.infoValue}>{animal.breed}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Edad</Text>
                  <Text style={styles.infoValue}>{animal.age}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Peso</Text>
                  <Text style={styles.infoValue}>{animal.weight}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Género</Text>
                  <Text style={styles.infoValue}>{animal.gender}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Fecha de Nacimiento</Text>
                  <Text style={styles.infoValue}>{animal.birthDate}</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {activeTab === 'health' && (
          <View style={styles.tabContent}>
            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>Vacunas</Text>
              {animal.vaccinations.map((vaccine, index) => (
                <View key={index} style={styles.vaccinationItem}>
                  <View style={styles.vaccinationInfo}>
                    <Text style={styles.vaccinationName}>{vaccine.name}</Text>
                    <Text style={styles.vaccinationDate}>{vaccine.date}</Text>
                  </View>
                  <View
                    style={[
                      styles.vaccinationStatus,
                      {
                        backgroundColor:
                          vaccine.status === 'completed'
                            ? '#10b981'
                            : '#f59e0b',
                      },
                    ]}
                  >
                    <Text style={styles.vaccinationStatusText}>
                      {vaccine.status === 'completed'
                        ? 'Aplicada'
                        : 'Pendiente'}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {activeTab === 'records' && (
          <View style={styles.tabContent}>
            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>Historial Médico</Text>
              {animal.healthRecords.map((record, index) => (
                <View key={index} style={styles.recordItem}>
                  <Text style={styles.recordDate}>{record.date}</Text>
                  <Text style={styles.recordCondition}>{record.condition}</Text>
                  <Text style={styles.recordTreatment}>
                    Tratamiento: {record.treatment}
                  </Text>
                  <Text style={styles.recordVet}>
                    Veterinario: {record.vet}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButtonLarge} onPress={handleEdit}>
            <MaterialIcons name="edit" size={20} color="#152111" />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.transferButton}
            onPress={handleTransfer}
          >
            <MaterialIcons name="swap-horiz" size={20} color="#ffffff" />
            <Text style={styles.transferButtonText}>Transferir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <MaterialIcons name="delete" size={20} color="#ffffff" />
            <Text style={styles.deleteButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal de Imagen */}
      <Modal
        visible={showImageModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowImageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <MaterialIcons name="photo-camera" size={64} color="#4cdf20" />
            <Text style={styles.modalTitle}>Cambiar Foto del Animal</Text>
            <Text style={styles.modalText}>
              Esta función estará disponible próximamente. Podrás cambiar la
              foto del animal tomando una nueva foto o seleccionando una desde
              tu galería.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowImageModal(false)}
            >
              <Text style={styles.modalButtonText}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de Transferencia */}
      <Modal
        visible={showTransferModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowTransferModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.transferModalContent}>
            <Text style={styles.modalTitle}>Transferir Animal</Text>
            <Text style={styles.modalSubtitle}>
              Transferir {animal.name} (ID: {animal.id}) a un nuevo propietario
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nuevo Propietario *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Nombre del nuevo propietario"
                value={newOwner}
                onChangeText={setNewOwner}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Razón de la Transferencia</Text>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                placeholder="Opcional: Motivo de la transferencia"
                value={transferReason}
                onChangeText={setTransferReason}
                multiline={true}
                numberOfLines={3}
              />
            </View>

            <View style={styles.modalButtonsRow}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => {
                  setShowTransferModal(false);
                  setNewOwner('');
                  setTransferReason('');
                }}
              >
                <Text style={styles.modalCancelButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalConfirmButton}
                onPress={handleTransferSubmit}
              >
                <Text style={styles.modalConfirmButtonText}>Transferir</Text>
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
    backgroundColor: '#f6f8f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(246, 248, 246, 0.8)',
  },
  backButton: {
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
  editButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  animalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  animalImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  animalBasicInfo: {
    flex: 1,
  },
  animalName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 4,
  },
  animalId: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4cdf20',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  activeTabText: {
    color: '#152111',
    fontWeight: 'bold',
  },
  tabContent: {
    marginBottom: 20,
  },
  infoSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 16,
  },
  infoGrid: {
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  infoLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#152111',
    fontWeight: 'bold',
  },
  vaccinationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  vaccinationInfo: {
    flex: 1,
  },
  vaccinationName: {
    fontSize: 16,
    color: '#152111',
    fontWeight: '500',
    marginBottom: 4,
  },
  vaccinationDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  vaccinationStatus: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  vaccinationStatusText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  recordItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  recordDate: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  recordCondition: {
    fontSize: 16,
    color: '#152111',
    fontWeight: '500',
    marginBottom: 4,
  },
  recordTreatment: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  recordVet: {
    fontSize: 14,
    color: '#6b7280',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 24,
    flexWrap: 'wrap',
  },
  editButtonLarge: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#94C973',
    paddingVertical: 16,
    borderRadius: 12,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#152111',
  },
  deleteButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#ef4444',
    paddingVertical: 16,
    borderRadius: 12,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  transferButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    borderRadius: 12,
  },
  transferButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
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
    maxWidth: 350,
    width: '90%',
  },
  transferModalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    margin: 20,
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
  modalSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  modalButton: {
    backgroundColor: '#4cdf20',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#152111',
    marginBottom: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#152111',
    backgroundColor: '#ffffff',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  modalButtonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
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
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalConfirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
