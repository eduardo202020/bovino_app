import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ConsultarAnimalScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock data - En una app real, esto vendría de una API
  const allAnimals = [
    {
      id: '12345',
      name: 'Bessie',
      status: 'Activo',
      statusColor: '#10b981',
      breed: 'Holstein',
      age: '3 años',
      weight: '550 kg',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    },
    {
      id: '67890',
      name: 'Daisy',
      status: 'Activo',
      statusColor: '#10b981',
      breed: 'Jersey',
      age: '2 años',
      weight: '420 kg',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    },
    {
      id: '11111',
      name: 'Max',
      status: 'Enfermo',
      statusColor: '#ef4444',
      breed: 'Angus',
      age: '4 años',
      weight: '680 kg',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDbV0kiLh_uyjQ0EkTL2kbtjFIMANFwlpwmThdbR_c8prLQn-NIjbCkRM7y44-IW_w-seY6rurBDdx7NPKohgvVnyodbEHa_ZvpRpnHlHyZ5wrp7rmoQGT9MdW51HxE9zyvYvbhV5C2uA6VMawNpS0sJI2AG7NBHUjEcuRJQrtUGO-tMyTEAVhqLHKffVKRDsmiOozQa5haGd1AmhSuDrp4QWu1jJG_pvNvOYfaPsC9ybzElGGv9wDdi6xK-roZ4LUus1muphYPHoE',
    },
    {
      id: '22222',
      name: 'Luna',
      status: 'En tratamiento',
      statusColor: '#f59e0b',
      breed: 'Charolais',
      age: '5 años',
      weight: '620 kg',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDodOnlOtuSl0tl9tBAVwYqXGAf4-vpglNneeUy75IIXzsPX65MgW-HgcMwcw_Gwe0NjSR45EzfrqkL3Y_l3QKxyQoB892xalCc6l4hroPj1pQm7D1-LzuPiGNXDvevKi0IZdv0Jmtx1m7KE1e07dMaCy5B0FAFPeLKk-KFR-q1HbEpmaqd9-QYPhweVUeR_pzEDePo2SY1oJf5SmMnieQenxfi2Yag2R2fmhqZsETOxKKiIsYSpNQBjmk5cFD1UWkDmy5mUWnNvcI',
    },
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      Alert.alert('Error', 'Por favor ingresa un ID o nombre para buscar');
      return;
    }

    setIsSearching(true);

    // Simular búsqueda
    setTimeout(() => {
      const results = allAnimals.filter(
        (animal) =>
          animal.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          animal.breed.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  };

  const handleAnimalPress = (animalId: string) => {
    router.push(`/ganadero/animales/${animalId}` as any);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
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
        <Text style={styles.headerTitle}>Consultar Animal</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.main}>
        {/* Search Section */}
        <View style={styles.searchSection}>
          <Text style={styles.sectionTitle}>Buscar Animal</Text>
          <Text style={styles.sectionDescription}>
            Ingresa el ID, nombre o raza del animal que deseas consultar
          </Text>

          <View style={styles.searchContainer}>
            <MaterialIcons
              name="search"
              size={20}
              color="#9ca3af"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar por ID, nombre o raza..."
              placeholderTextColor="#9ca3af"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
            {searchQuery ? (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={clearSearch}
              >
                <MaterialIcons name="clear" size={20} color="#9ca3af" />
              </TouchableOpacity>
            ) : null}
          </View>

          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSearch}
            disabled={isSearching}
          >
            <MaterialIcons
              name={isSearching ? 'hourglass-empty' : 'search'}
              size={20}
              color="#152111"
            />
            <Text style={styles.searchButtonText}>
              {isSearching ? 'Buscando...' : 'Buscar'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => router.push('/ganadero/animales' as any)}
            >
              <MaterialIcons name="list" size={32} color="#4cdf20" />
              <Text style={styles.quickActionText}>Ver Todos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => {
                setSearchQuery('Enfermo');
                handleSearch();
              }}
            >
              <MaterialIcons name="local-hospital" size={32} color="#ef4444" />
              <Text style={styles.quickActionText}>Animales Enfermos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => {
                setSearchQuery('Activo');
                handleSearch();
              }}
            >
              <MaterialIcons name="check-circle" size={32} color="#10b981" />
              <Text style={styles.quickActionText}>Animales Activos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => {
                setSearchQuery('2 años');
                handleSearch();
              }}
            >
              <MaterialIcons name="calendar-today" size={32} color="#f59e0b" />
              <Text style={styles.quickActionText}>Jóvenes (2 años)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => {
                setSearchQuery('5 años');
                handleSearch();
              }}
            >
              <MaterialIcons name="elderly" size={32} color="#8b5cf6" />
              <Text style={styles.quickActionText}>Adultos (5 años)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickActionCard}
              onPress={() => {
                setSearchQuery('3 años');
                handleSearch();
              }}
            >
              <MaterialIcons name="pets" size={32} color="#06b6d4" />
              <Text style={styles.quickActionText}>Mediana Edad</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <View style={styles.resultsSection}>
            <Text style={styles.sectionTitle}>
              Resultados ({searchResults.length})
            </Text>

            <View style={styles.resultsList}>
              {searchResults.map((animal) => (
                <TouchableOpacity
                  key={animal.id}
                  style={styles.resultCard}
                  onPress={() => handleAnimalPress(animal.id)}
                >
                  <Image
                    source={{ uri: animal.image }}
                    style={styles.animalImage}
                  />

                  <View style={styles.animalInfo}>
                    <Text style={styles.animalName}>{animal.name}</Text>
                    <Text style={styles.animalId}>ID: {animal.id}</Text>
                    <Text style={styles.animalBreed}>Raza: {animal.breed}</Text>
                    <Text style={styles.animalAge}>Edad: {animal.age}</Text>

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

                  <MaterialIcons
                    name="chevron-right"
                    size={24}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* No Results */}
        {searchResults.length === 0 && searchQuery && !isSearching && (
          <View style={styles.noResultsSection}>
            <MaterialIcons name="search-off" size={64} color="#9ca3af" />
            <Text style={styles.noResultsTitle}>Sin resultados</Text>
            <Text style={styles.noResultsText}>
              No se encontraron animales que coincidan con &ldquo;{searchQuery}
              &rdquo;
            </Text>
          </View>
        )}
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
  headerSpacer: {
    width: 40,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
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
    paddingRight: 40,
    paddingVertical: 14,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    color: '#152111',
    fontSize: 16,
  },
  clearButton: {
    position: 'absolute',
    right: 12,
    top: 14,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#94C973',
    paddingVertical: 14,
    borderRadius: 8,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#152111',
  },
  quickActionsSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    width: '30%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151',
    marginTop: 8,
    textAlign: 'center',
  },
  resultsSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  resultsList: {
    gap: 16,
  },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  animalImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  animalInfo: {
    flex: 1,
  },
  animalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 2,
  },
  animalId: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  animalBreed: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  animalAge: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  noResultsSection: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
  },
  noResultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginTop: 16,
    marginBottom: 8,
  },
  noResultsText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});
