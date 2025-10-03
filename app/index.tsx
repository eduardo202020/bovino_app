import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useUser } from '../context/UserContext';

export default function IndexScreen() {
  const router = useRouter();
  const { isAuthenticated, user, isLoading } = useUser();

  useEffect(() => {
    console.log('Estado en index:', {
      isLoading,
      isAuthenticated,
      user: user?.role,
    });

    if (!isLoading && isAuthenticated && user) {
      // Redirigir automáticamente basado en el rol del usuario
      console.log('Redirigiendo usuario con rol:', user.role);
      if (user.role === 'admin') {
        console.log('Navegando a /admin');
        router.replace('/admin');
      } else {
        console.log('Navegando a /ganadero');
        router.replace('/ganadero');
      }
    }
  }, [isAuthenticated, user, isLoading, router]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <MaterialIcons name="pets" size={64} color="#4cdf20" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  if (isAuthenticated) {
    // Mostrar pantalla de carga mientras se redirige
    return (
      <View style={styles.loadingContainer}>
        <MaterialIcons name="pets" size={64} color="#4cdf20" />
        <Text style={styles.loadingText}>Redirigiendo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header con Logo */}
      <View style={styles.header}>
        <MaterialIcons name="pets" size={80} color="#4cdf20" />
        <Text style={styles.title}>Cattle Manager</Text>
        <Text style={styles.subtitle}>
          Sistema de identificación y gestión de ganado con tecnología RFID
        </Text>
      </View>

      {/* Características principales */}
      <View style={styles.featuresSection}>
        <View style={styles.feature}>
          <MaterialIcons name="nfc" size={32} color="#4cdf20" />
          <Text style={styles.featureTitle}>Lectura RFID</Text>
          <Text style={styles.featureDescription}>
            Escanea tags RFID para identificar animales instantáneamente
          </Text>
        </View>

        <View style={styles.feature}>
          <MaterialIcons name="bar-chart" size={32} color="#4cdf20" />
          <Text style={styles.featureTitle}>Estadísticas</Text>
          <Text style={styles.featureDescription}>
            Monitorea la salud y crecimiento de tu ganado
          </Text>
        </View>

        <View style={styles.feature}>
          <MaterialIcons name="cloud-sync" size={32} color="#4cdf20" />
          <Text style={styles.featureTitle}>Sincronización</Text>
          <Text style={styles.featureDescription}>
            Datos seguros en la nube accesibles desde cualquier dispositivo
          </Text>
        </View>
      </View>

      {/* Botones de acción */}
      <View style={styles.actionsSection}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/auth/login')}
        >
          <Text style={styles.primaryButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/auth/register')}
        >
          <Text style={styles.secondaryButtonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>¿Necesitas ayuda?</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Cattle Manager. Todos los derechos reservados.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f6',
    paddingHorizontal: 24,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f6f8f6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  loadingText: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  header: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#152111',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  featuresSection: {
    gap: 24,
    marginBottom: 48,
  },
  feature: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#152111',
    marginTop: 12,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  actionsSection: {
    gap: 16,
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: '#4cdf20',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#4cdf20',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#152111',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4cdf20',
    paddingVertical: 14,
    borderRadius: 12,
  },
  secondaryButtonText: {
    color: '#4cdf20',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  linkButton: {
    paddingVertical: 8,
  },
  linkButtonText: {
    color: '#6b7280',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  footer: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
});
