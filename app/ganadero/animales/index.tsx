import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
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
import { mockAnimals } from '../../../constants/mockAnimals';

export default function AnimalesListScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [breedFilter, setBreedFilter] = useState('Todas');
  const [ageFilter, setAgeFilter] = useState('Todas');

  // Usar datos mock centralizados
  const animals = mockAnimals;

  const filteredAnimals = animals.filter((animal) => {
    // Filtro por búsqueda de texto
    const matchesSearch =
      animal.name.toLowerCase().includes(searchText.toLowerCase()) ||
      animal.id.includes(searchText);

    // Filtro por estado
    const matchesStatus =
      statusFilter === 'Todos' || animal.status === statusFilter;

    // Filtro por raza
    const matchesBreed =
      breedFilter === 'Todas' || animal.breed === breedFilter;

    // Filtro por edad
    const matchesAge =
      ageFilter === 'Todas' || animal.ageCategory === ageFilter;

    return matchesSearch && matchesStatus && matchesBreed && matchesAge;
  });

  const handleAnimalPress = (animalId: string) => {
    router.push(`/ganadero/animales/${animalId}` as any);
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
        <Text style={styles.headerTitle}>Mis animales</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/ganadero/registro')}
        >
          <MaterialIcons name="add" size={24} color="#152111" />
        </TouchableOpacity>
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScrollContainer}
          style={styles.filtersScrollView}
        >
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              const statuses = ['Todos', 'Activo', 'Enfermo', 'En tratamiento'];
              const currentIndex = statuses.indexOf(statusFilter);
              const nextIndex = (currentIndex + 1) % statuses.length;
              setStatusFilter(statuses[nextIndex]);
            }}
          >
            <Text style={styles.filterText}>Estado: {statusFilter}</Text>
            <MaterialIcons name="expand-more" size={16} color="#152111" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              const breeds = [
                'Todas',
                'Holstein',
                'Jersey',
                'Angus',
                'Charolais',
              ];
              const currentIndex = breeds.indexOf(breedFilter);
              const nextIndex = (currentIndex + 1) % breeds.length;
              setBreedFilter(breeds[nextIndex]);
            }}
          >
            <Text style={styles.filterText}>Raza: {breedFilter}</Text>
            <MaterialIcons name="expand-more" size={16} color="#152111" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              const ages = [
                'Todas',
                'Jóvenes (1-2 años)',
                'Adultos (3-5 años)',
                'Mayores (5+ años)',
              ];
              const currentIndex = ages.indexOf(ageFilter);
              const nextIndex = (currentIndex + 1) % ages.length;
              setAgeFilter(ages[nextIndex]);
            }}
          >
            <Text style={styles.filterText}>Edad: {ageFilter}</Text>
            <MaterialIcons name="expand-more" size={16} color="#152111" />
          </TouchableOpacity>
        </ScrollView>

        {/* Animals List */}
        <View style={styles.animalsList}>
          {filteredAnimals.map((animal) => (
            <TouchableOpacity
              key={animal.id}
              style={styles.animalCard}
              onPress={() => handleAnimalPress(animal.id)}
            >
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

              <MaterialIcons name="chevron-right" size={24} color="#6b7280" />
            </TouchableOpacity>
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
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(246, 248, 246, 0.8)',
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
  addButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
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
  filtersScrollView: {
    marginBottom: 16,
  },
  filtersScrollContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    minWidth: 140,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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
});
