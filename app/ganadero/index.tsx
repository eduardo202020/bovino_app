import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function GanaderoIndex() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="menu" size={24} color="#152111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.main}>
        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>Total Cattle</Text>
            <Text style={styles.statsValue}>150</Text>
          </View>

          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>Recent Registrations</Text>
            <Text style={styles.statsValue}>10</Text>
          </View>

          <View style={[styles.statsCard, styles.alertCard]}>
            <Text style={styles.alertLabel}>Health Alerts</Text>
            <Text style={styles.alertValue}>2</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <TouchableOpacity style={styles.primaryButton}>
            <MaterialIcons name="pets" size={20} color="#152111" />
            <Text style={styles.primaryButtonText}>Mis animales</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <MaterialIcons name="add-circle" size={20} color="#152111" />
            <Text style={styles.secondaryButtonText}>
              Registrar nuevo animal
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <MaterialIcons name="bar-chart" size={20} color="#152111" />
            <Text style={styles.secondaryButtonText}>Estadísticas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="grass" size={30} color="#4cdf20" />
          <Text style={styles.activeNavText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="add" size={30} color="#6b7280" />
          <Text style={styles.inactiveNavText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="query-stats" size={30} color="#6b7280" />
          <Text style={styles.inactiveNavText}>Estadísticas</Text>
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
    paddingBottom: 8,
    backgroundColor: '#f6f8f6',
  },
  menuButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  statsCard: {
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    minWidth: 100,
  },
  alertCard: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(239, 68, 68, 0.5)',
  },
  statsLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 4,
  },
  statsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#152111',
  },
  alertLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#dc2626',
    marginBottom: 4,
  },
  alertValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  actionsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  primaryButton: {
    backgroundColor: '#4cdf20',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#152111',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  secondaryButton: {
    backgroundColor: 'rgba(76, 223, 32, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: '#152111',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 64,
    backgroundColor: '#f6f8f6',
    borderTopWidth: 1,
    borderTopColor: 'rgba(76, 223, 32, 0.2)',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeNavText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4cdf20',
    marginTop: 2,
  },
  inactiveNavText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
    marginTop: 2,
  },
});
