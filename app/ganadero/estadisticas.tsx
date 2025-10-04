import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EstadisticasScreen() {
  const navigation = useNavigation();

  // Datos simulados para las estadísticas
  const statsData = {
    totalAnimals: 120,
    averageAge: '3.5 años',
    healthyPercentage: 90,
    ageDistribution: [
      { label: '0-2', percentage: 65 },
      { label: '2-4', percentage: 80 },
      { label: '4-6', percentage: 45 },
      { label: '6+', percentage: 30 },
    ],
    healthStatus: [
      { label: 'Saludable', percentage: 90, color: '#4cdf20' },
      { label: 'En tratamiento', percentage: 8, color: '#f59e0b' },
      { label: 'Enfermo', percentage: 2, color: '#ef4444' },
    ],
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
        <Text style={styles.headerTitle}>Estadísticas</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        {/* Overview Stats */}
        <View style={styles.overviewSection}>
          <View style={[styles.statsCard, styles.totalCard]}>
            <Text style={styles.statsLabel}>Total de animales</Text>
            <Text style={styles.totalValue}>{statsData.totalAnimals}</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={[styles.statsCard, styles.halfCard]}>
              <Text style={styles.statsLabel}>Edad promedio</Text>
              <Text style={styles.statsValue}>{statsData.averageAge}</Text>
            </View>

            <View style={[styles.statsCard, styles.halfCard]}>
              <Text style={styles.statsLabel}>Saludable</Text>
              <Text style={[styles.statsValue, styles.primaryValue]}>
                {statsData.healthyPercentage}%
              </Text>
            </View>
          </View>
        </View>

        {/* Age Distribution Chart */}
        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>Distribución por edad</Text>

          <View style={styles.chartContainer}>
            {statsData.ageDistribution.map((item, index) => (
              <View key={index} style={styles.chartBar}>
                <View style={styles.barBackground}>
                  <View
                    style={[styles.barFill, { height: `${item.percentage}%` }]}
                  />
                </View>
                <Text style={styles.barLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Health Status */}
        <View style={styles.healthSection}>
          <Text style={styles.sectionTitle}>Estado de salud</Text>

          <View style={styles.healthList}>
            {statsData.healthStatus.map((item, index) => (
              <View key={index} style={styles.healthItem}>
                <View style={styles.healthHeader}>
                  <Text style={styles.healthLabel}>{item.label}</Text>
                  <Text style={styles.healthPercentage}>
                    {item.percentage}%
                  </Text>
                </View>

                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
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
  overviewSection: {
    marginBottom: 24,
  },
  statsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  totalCard: {
    marginBottom: 16,
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#152111',
  },
  statsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#152111',
  },
  primaryValue: {
    color: '#4cdf20',
  },
  chartSection: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#152111',
    marginBottom: 16,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 192,
    paddingHorizontal: 8,
  },
  chartBar: {
    alignItems: 'center',
    flex: 1,
    maxWidth: 60,
  },
  barBackground: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgba(76, 223, 32, 0.2)',
    borderRadius: 2,
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  barFill: {
    width: '100%',
    backgroundColor: '#4cdf20',
    borderRadius: 2,
  },
  barLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
  },
  healthSection: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
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
  healthLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4b5563',
  },
  healthPercentage: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(76, 223, 32, 0.2)',
    borderRadius: 5,
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  },
});
