import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AdminIndex() {
  const router = useRouter();

  // Datos simulados para el dashboard del admin
  const overviewData = {
    totalAnimals: 1250,
    totalAnimalsChange: '+5%',
    activeUsers: 15,
    activeUsersChange: '+2%',
    recentActivities: 32,
    recentActivitiesChange: '-1%',
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="menu" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {/* Global Overview */}
        <Text style={styles.sectionTitle}>Global Overview</Text>

        <View style={styles.overviewGrid}>
          <View style={styles.overviewCard}>
            <Text style={styles.cardLabel}>Total Animals</Text>
            <View style={styles.cardValueRow}>
              <Text style={styles.cardValue}>
                {overviewData.totalAnimals.toLocaleString()}
              </Text>
              <Text style={[styles.changeText, styles.positiveChange]}>
                {overviewData.totalAnimalsChange}
              </Text>
            </View>
          </View>

          <View style={styles.overviewCard}>
            <Text style={styles.cardLabel}>Active Users</Text>
            <View style={styles.cardValueRow}>
              <Text style={styles.cardValue}>{overviewData.activeUsers}</Text>
              <Text style={[styles.changeText, styles.positiveChange]}>
                {overviewData.activeUsersChange}
              </Text>
            </View>
          </View>

          <View style={styles.overviewCard}>
            <Text style={styles.cardLabel}>Recent Activities</Text>
            <View style={styles.cardValueRow}>
              <Text style={styles.cardValue}>
                {overviewData.recentActivities}
              </Text>
              <Text style={[styles.changeText, styles.negativeChange]}>
                {overviewData.recentActivitiesChange}
              </Text>
            </View>
          </View>
        </View>

        {/* Management Tools */}
        <Text style={[styles.sectionTitle, styles.managementTitle]}>
          Management Tools
        </Text>

        <View style={styles.managementTools}>
          <TouchableOpacity
            style={styles.toolButton}
            onPress={() => router.push('./registro')}
          >
            <MaterialIcons name="add-circle" size={24} color="#4cdf20" />
            <Text style={styles.toolButtonText}>Register New Animal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toolButton}
            onPress={() => router.push('./estadisticas')}
          >
            <MaterialIcons name="trending-up" size={24} color="#4cdf20" />
            <Text style={styles.toolButtonText}>Global Statistics</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.toolButton}
            onPress={() => router.push('./gestion')}
          >
            <MaterialIcons name="group" size={24} color="#4cdf20" />
            <Text style={styles.toolButtonText}>
              User & Livestock Management
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="dashboard" size={24} color="#4cdf20" />
          <Text style={styles.activeNavText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="pets" size={24} color="#6b7280" />
          <Text style={styles.inactiveNavText}>Animals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="assessment" size={24} color="#6b7280" />
          <Text style={styles.inactiveNavText}>Reports</Text>
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
    paddingVertical: 16,
    backgroundColor: '#f6f8f6',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(76, 223, 32, 0.1)',
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#152111',
    marginTop: 16,
    marginBottom: 16,
  },
  managementTitle: {
    marginTop: 32,
  },
  overviewGrid: {
    gap: 16,
    marginBottom: 16,
  },
  overviewCard: {
    backgroundColor: 'rgba(246, 248, 246, 0.5)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 4,
  },
  cardValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  cardValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#152111',
  },
  changeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  positiveChange: {
    color: '#059669',
  },
  negativeChange: {
    color: '#dc2626',
  },
  managementTools: {
    gap: 16,
    paddingBottom: 24,
  },
  toolButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(246, 248, 246, 0.5)',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  toolButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#152111',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f6f8f6',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  activeNavText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4cdf20',
  },
  inactiveNavText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
  },
});
