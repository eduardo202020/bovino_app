import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface AnimalCardProps {
  id: string;
  name: string;
  breed?: string;
  rfidTag?: string;
  status: 'healthy' | 'treatment' | 'sick' | 'active' | 'inactive';
  imageUrl?: string;
  owner?: string;
  registeredDate?: string;
  onPress?: () => void;
  onMenuPress?: () => void;
  showOwner?: boolean;
}

export default function AnimalCard({
  id,
  name,
  breed,
  rfidTag,
  status,
  imageUrl,
  owner,
  registeredDate,
  onPress,
  onMenuPress,
  showOwner = false,
}: AnimalCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'healthy':
      case 'active':
        return '#10b981';
      case 'treatment':
        return '#f59e0b';
      case 'sick':
      case 'inactive':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'healthy':
        return 'Saludable';
      case 'treatment':
        return 'Tratamiento';
      case 'sick':
        return 'Enfermo';
      case 'active':
        return 'Activo';
      case 'inactive':
        return 'Inactivo';
      default:
        return status;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Animal Image or Icon */}
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.animalImage} />
        ) : (
          <View style={styles.animalIconContainer}>
            <MaterialIcons name="pets" size={32} color="#4cdf20" />
          </View>
        )}
      </View>

      {/* Animal Information */}
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.animalId}>ID: {id}</Text>
          {onMenuPress && (
            <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
              <MaterialIcons name="more-vert" size={20} color="#6b7280" />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.animalName}>{name}</Text>

        {breed && <Text style={styles.animalBreed}>{breed}</Text>}

        {showOwner && owner && (
          <Text style={styles.animalOwner}>Propietario: {owner}</Text>
        )}

        {rfidTag && <Text style={styles.rfidTag}>RFID: {rfidTag}</Text>}

        {registeredDate && (
          <Text style={styles.registeredDate}>
            Registrado: {formatDate(registeredDate)}
          </Text>
        )}

        {/* Status Badge */}
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor() + '20' },
            ]}
          >
            <View
              style={[styles.statusDot, { backgroundColor: getStatusColor() }]}
            />
            <Text style={[styles.statusText, { color: getStatusColor() }]}>
              {getStatusText()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    marginRight: 16,
  },
  animalImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  animalIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  animalId: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '500',
  },
  menuButton: {
    padding: 4,
    marginTop: -4,
    marginRight: -4,
  },
  animalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 4,
  },
  animalBreed: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  animalOwner: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 4,
  },
  rfidTag: {
    fontSize: 12,
    color: '#9ca3af',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  registeredDate: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
  },
  statusContainer: {
    alignItems: 'flex-start',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

// Componente de lista de animales que utiliza AnimalCard
interface AnimalListProps {
  animals: AnimalCardProps[];
  showOwner?: boolean;
  onAnimalPress?: (animal: AnimalCardProps) => void;
  onAnimalMenuPress?: (animal: AnimalCardProps) => void;
}

export function AnimalList({
  animals,
  showOwner = false,
  onAnimalPress,
  onAnimalMenuPress,
}: AnimalListProps) {
  return (
    <View style={listStyles.container}>
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          {...animal}
          showOwner={showOwner}
          onPress={() => onAnimalPress?.(animal)}
          onMenuPress={() => onAnimalMenuPress?.(animal)}
        />
      ))}
    </View>
  );
}

const listStyles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});
