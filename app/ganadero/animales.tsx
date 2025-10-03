import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AnimalesScreen() {
  const [searchText, setSearchText] = useState('');

  // Sample data for animals
  const animals = [
    {
      id: '12345',
      name: 'Bessie',
      status: 'Activo',
      statusColor: '#10b981',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    },
    {
      id: '67890',
      name: 'Daisy',
      status: 'Activo',
      statusColor: '#10b981',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#152111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mis animales</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Main Content */}
      <ScrollView style={styles.main}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialIcons
            name="search"
            size={20}
            color="#9ca3af"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por nombre o ID"
            placeholderTextColor="#9ca3af"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Estado</Text>
            <MaterialIcons name="expand-more" size={16} color="#152111" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Raza</Text>
            <MaterialIcons name="expand-more" size={16} color="#152111" />
          </TouchableOpacity>
        </View>

        {/* Animals List */}
        <View style={styles.animalsList}>
          {animals.map((animal) => (
            <View key={animal.id} style={styles.animalCard}>
              <Image
                source={{ uri: animal.image }}
                style={styles.animalImage}
              />

              <View style={styles.animalInfo}>
                <Text style={styles.animalId}>ID: {animal.id}</Text>
                <Text style={styles.animalName}>{animal.name}</Text>

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

              <TouchableOpacity style={styles.moreButton}>
                <MaterialIcons name="more-vert" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
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
  headerSpacer: {
    width: 40,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 14,
    zIndex: 1,
  },
  searchInput: {
    paddingLeft: 40,
    paddingRight: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 24,
    color: '#152111',
    fontSize: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#152111',
  },
  animalsList: {
    gap: 16,
    paddingBottom: 24,
  },
  animalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
  },
  animalImage: {
    width: 96,
    height: 96,
    borderRadius: 8,
  },
  animalInfo: {
    flex: 1,
  },
  animalId: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  animalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#6b7280',
  },
  moreButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
