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

export default function AdminEstadisticasScreen() {
  const router = useRouter();

  // Datos globales simulados
  const globalStats = {
    totalAnimals: 1250,
    totalUsers: 15,
    averageAnimalsPerUser: 83,
    healthyPercentage: 92,
    systemUsage: {
      dailyScans: 156,
      weeklyRegistrations: 23,
      monthlyReports: 8,
    },
    topBreeds: [
      { name: 'Angus', count: 450, percentage: 36 },
      { name: 'Holstein', count: 320, percentage: 26 },
      { name: 'Brahman', count: 280, percentage: 22 },
      { name: 'Hereford', count: 200, percentage: 16 },
    ],
    systemHealth: [
      { label: 'Saludable', percentage: 92, color: '#4cdf20' },
      { label: 'En tratamiento', percentage: 6, color: '#f59e0b' },
      { label: 'Enfermo', percentage: 2, color: '#ef4444' },
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Global Statistics</Text>
      </View>

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {/* Overview Stats */}
        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>Global Overview</Text>

          <View style={styles.statsGrid}>
            <View style={[styles.statsCard, styles.totalCard]}>
              <Text style={styles.statsLabel}>Total Animals</Text>
              <Text style={styles.totalValue}>
                {globalStats.totalAnimals.toLocaleString()}
              </Text>
            </View>

            <View style={styles.statsRow}>
              <View style={[styles.statsCard, styles.halfCard]}>
                <Text style={styles.statsLabel}>Total Users</Text>
                <Text style={styles.statsValue}>{globalStats.totalUsers}</Text>
              </View>

              <View style={[styles.statsCard, styles.halfCard]}>
                <Text style={styles.statsLabel}>Avg per User</Text>
                <Text style={styles.statsValue}>
                  {globalStats.averageAnimalsPerUser}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* System Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>System Activity</Text>

          <View style={styles.activityGrid}>
            <View style={styles.activityCard}>
              <MaterialIcons name="qr-code-scanner" size={32} color="#4cdf20" />
              <Text style={styles.activityValue}>
                {globalStats.systemUsage.dailyScans}
              </Text>
              <Text style={styles.activityLabel}>Daily Scans</Text>
            </View>

            <View style={styles.activityCard}>
              <MaterialIcons name="add-circle" size={32} color="#3b82f6" />
              <Text style={styles.activityValue}>
                {globalStats.systemUsage.weeklyRegistrations}
              </Text>
              <Text style={styles.activityLabel}>Weekly Registrations</Text>
            </View>

            <View style={styles.activityCard}>
              <MaterialIcons name="assessment" size={32} color="#f59e0b" />
              <Text style={styles.activityValue}>
                {globalStats.systemUsage.monthlyReports}
              </Text>
              <Text style={styles.activityLabel}>Monthly Reports</Text>
            </View>
          </View>
        </View>

        {/* Top Breeds */}
        <View style={styles.breedsSection}>
          <Text style={styles.sectionTitle}>Top Breeds</Text>

          <View style={styles.breedsList}>
            {globalStats.topBreeds.map((breed, index) => (
              <View key={index} style={styles.breedItem}>
                <View style={styles.breedInfo}>
                  <Text style={styles.breedName}>{breed.name}</Text>
                  <Text style={styles.breedCount}>{breed.count} animals</Text>
                </View>

                <View style={styles.breedPercentage}>
                  <Text style={styles.percentageText}>{breed.percentage}%</Text>
                </View>

                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${breed.percentage}%` },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Health Status */}
        <View style={styles.healthSection}>
          <Text style={styles.sectionTitle}>Global Health Status</Text>

          <View style={styles.healthOverview}>
            <Text style={styles.healthPercentage}>
              {globalStats.healthyPercentage}%
            </Text>
            <Text style={styles.healthLabel}>Overall Healthy</Text>
          </View>

          <View style={styles.healthList}>
            {globalStats.systemHealth.map((item, index) => (
              <View key={index} style={styles.healthItem}>
                <View style={styles.healthHeader}>
                  <Text style={styles.healthItemLabel}>{item.label}</Text>
                  <Text style={styles.healthItemPercentage}>
                    {item.percentage}%
                  </Text>
                </View>

                <View style={styles.healthProgressBar}>
                  <View
                    style={[
                      styles.healthProgressFill,
                      {
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
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
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'rgba(246, 248, 246, 0.8)',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    flex: 1,
    textAlign: 'center',
    paddingRight: 32,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 16,
  },
  overviewSection: {
    marginBottom: 24,
  },
  statsGrid: {
    gap: 16,
  },
  statsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  totalCard: {
    marginBottom: 0,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  halfCard: {
    flex: 1,
  },
  statsLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 4,
  },
  totalValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#152111',
  },
  statsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#152111',
  },
  activitySection: {
    marginBottom: 24,
  },
  activityGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  activityCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  activityValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
  },
  activityLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
    textAlign: 'center',
  },
  breedsSection: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  breedsList: {
    gap: 16,
  },
  breedItem: {
    gap: 8,
  },
  breedInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  breedName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#152111',
  },
  breedCount: {
    fontSize: 14,
    color: '#6b7280',
  },
  breedPercentage: {
    alignSelf: 'flex-end',
  },
  percentageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4cdf20',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(76, 223, 32, 0.2)',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4cdf20',
    borderRadius: 4,
  },
  healthSection: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  healthOverview: {
    alignItems: 'center',
    marginBottom: 24,
  },
  healthPercentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4cdf20',
  },
  healthLabel: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  healthList: {
    gap: 12,
  },
  healthItem: {
    marginBottom: 4,
  },
  healthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  healthItemLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4b5563',
  },
  healthItemPercentage: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  healthProgressBar: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(76, 223, 32, 0.2)',
    borderRadius: 5,
  },
  healthProgressFill: {
    height: '100%',
    borderRadius: 5,
  },
});
