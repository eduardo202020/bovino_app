import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { mockAdminAnimals, mockUsers } from '../../constants/mockUsers';

export default function AdminGestionScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'users' | 'animals'>('users');
  const [searchText, setSearchText] = useState('');

  // Usar datos mock centralizados
  const users = mockUsers;
  const animals = mockAdminAnimals;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'healthy':
        return '#10b981';
      case 'inactive':
      case 'treatment':
        return '#f59e0b';
      case 'sick':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Activo';
      case 'inactive':
        return 'Inactivo';
      case 'healthy':
        return 'Saludable';
      case 'treatment':
        return 'Tratamiento';
      case 'sick':
        return 'Enfermo';
      default:
        return status;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <MaterialIcons name="menu" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gestión</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'users' && styles.activeTab]}
          onPress={() => setActiveTab('users')}
        >
          <MaterialIcons
            name="group"
            size={20}
            color={activeTab === 'users' ? '#4cdf20' : '#6b7280'}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'users' && styles.activeTabText,
            ]}
          >
            Usuarios
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'animals' && styles.activeTab]}
          onPress={() => setActiveTab('animals')}
        >
          <MaterialIcons
            name="pets"
            size={20}
            color={activeTab === 'animals' ? '#4cdf20' : '#6b7280'}
          />
          <Text
            style={[
              styles.tabText,
              activeTab === 'animals' && styles.activeTabText,
            ]}
          >
            Animales
          </Text>
        </TouchableOpacity>
      </View>

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
          placeholder={`Buscar ${activeTab === 'users' ? 'usuarios' : 'animales'}...`}
          placeholderTextColor="#9ca3af"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {activeTab === 'users' ? (
          /* Users List */
          <View style={styles.usersList}>
            {users.map((user) => (
              <View key={user.id} style={styles.userCard}>
                <View style={styles.userAvatar}>
                  <MaterialIcons name="person" size={24} color="#6b7280" />
                </View>

                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Text style={styles.userEmail}>{user.email}</Text>
                  <Text style={styles.userDetails}>
                    {user.animalsCount} animales • Último acceso:{' '}
                    {user.lastActive}
                  </Text>
                </View>

                <View style={styles.userActions}>
                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusColor(user.status) + '20' },
                    ]}
                  >
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: getStatusColor(user.status) },
                      ]}
                    />
                    <Text
                      style={[
                        styles.statusText,
                        { color: getStatusColor(user.status) },
                      ]}
                    >
                      {getStatusText(user.status)}
                    </Text>
                  </View>

                  <TouchableOpacity style={styles.actionButton}>
                    <MaterialIcons name="more-vert" size={20} color="#6b7280" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ) : (
          /* Animals List */
          <View style={styles.animalsList}>
            {animals.map((animal) => (
              <View key={animal.id} style={styles.animalCard}>
                <View style={styles.animalIcon}>
                  <MaterialIcons name="pets" size={24} color="#4cdf20" />
                </View>

                <View style={styles.animalInfo}>
                  <Text style={styles.animalName}>{animal.name}</Text>
                  <Text style={styles.animalDetails}>
                    {animal.breed} • ID: {animal.id}
                  </Text>
                  <Text style={styles.animalOwner}>
                    Propietario: {animal.owner}
                  </Text>
                  <Text style={styles.animalRfid}>RFID: {animal.rfidTag}</Text>
                </View>

                <View style={styles.animalActions}>
                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusColor(animal.status) + '20' },
                    ]}
                  >
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: getStatusColor(animal.status) },
                      ]}
                    />
                    <Text
                      style={[
                        styles.statusText,
                        { color: getStatusColor(animal.status) },
                      ]}
                    >
                      {getStatusText(animal.status)}
                    </Text>
                  </View>

                  <TouchableOpacity style={styles.actionButton}>
                    <MaterialIcons name="more-vert" size={20} color="#6b7280" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
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
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    gap: 8,
  },
  activeTab: {
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
    borderWidth: 1,
    borderColor: '#4cdf20',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  activeTabText: {
    color: '#4cdf20',
  },
  searchContainer: {
    position: 'relative',
    marginHorizontal: 16,
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
    backgroundColor: '#ffffff',
    borderRadius: 8,
    color: '#152111',
    fontSize: 16,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  usersList: {
    gap: 12,
    paddingBottom: 24,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    gap: 12,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(107, 114, 128, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#152111',
    marginBottom: 2,
  },
  userEmail: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  userDetails: {
    fontSize: 12,
    color: '#9ca3af',
  },
  userActions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  animalsList: {
    gap: 12,
    paddingBottom: 24,
  },
  animalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    gap: 12,
  },
  animalIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animalInfo: {
    flex: 1,
  },
  animalName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#152111',
    marginBottom: 2,
  },
  animalDetails: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  animalOwner: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 2,
  },
  animalRfid: {
    fontSize: 11,
    color: '#9ca3af',
    fontFamily: 'monospace',
  },
  animalActions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  actionButton: {
    padding: 4,
  },
});
