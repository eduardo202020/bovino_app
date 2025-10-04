import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useUser } from '../context/UserContext';

export default function CustomDrawerContent(props: any) {
  const { isAuthenticated, user, signOut } = useUser();
  const router = useRouter();

  // Función para navegar y cerrar el drawer
  const navigateAndClose = (route: any) => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
    router.push(route);
  };

  // Función para acciones que no requieren navegación pero sí cerrar drawer
  const executeAndClose = (action: () => void) => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
    action();
  };

  const handleSignOut = async () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
    Alert.alert('Cerrar Sesión', '¿Estás seguro que deseas cerrar sesión?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Cerrar Sesión',
        style: 'destructive',
        onPress: async () => {
          await signOut();
          router.replace('/');
        },
      },
    ]);
  };

  const showInfo = () => {
    Alert.alert(
      'Información',
      'Cattle Manager v1.0.0\n\nSistema de gestión de ganado con tecnología RFID'
    );
  };

  const showSettings = () => {
    Alert.alert('Ajustes', 'Funcionalidad en desarrollo');
  };

  const showReports = () => {
    Alert.alert('Reportes', 'Funcionalidad en desarrollo');
  };

  // Si no está autenticado, mostrar menú pre-login
  if (!isAuthenticated) {
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContainer}
        style={styles.drawerContainer}
        showsVerticalScrollIndicator={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="pets" size={48} color="#4cdf20" />
          <Text style={styles.headerTitle}>Gestor Ganadero</Text>
          <Text style={styles.headerSubtitle}>Gestión de Ganado</Text>
        </View>

        {/* Pre-login Menu */}
        <View style={styles.menuContainer}>
          <DrawerItem
            label="Ingresar"
            onPress={() => navigateAndClose('/auth/login')}
            icon={({ color, size }) => (
              <MaterialIcons name="login" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Registrarse"
            onPress={() => navigateAndClose('/auth/register')}
            icon={({ color, size }) => (
              <MaterialIcons name="person-add" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Versión 1.0.0</Text>
        </View>
      </DrawerContentScrollView>
    );
  }

  // Si está autenticado como GANADERO
  if (user?.role === 'rancher') {
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContainer}
        style={styles.drawerContainer}
        showsVerticalScrollIndicator={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="pets" size={48} color="#4cdf20" />
          <Text style={styles.headerTitle}>Gestor Ganadero</Text>
          <Text style={styles.headerSubtitle}>Bienvenido, {user.fullName}</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleBadgeText}>Ganadero</Text>
          </View>
        </View>

        {/* Ganadero Menu */}
        <View style={styles.menuContainer}>
          <DrawerItem
            label="Tablero"
            onPress={() => navigateAndClose('/ganadero')}
            icon={({ color, size }) => (
              <MaterialIcons name="dashboard" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Mis Animales"
            onPress={() => navigateAndClose('/ganadero/animales')}
            icon={({ color, size }) => (
              <MaterialIcons name="pets" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Consultar Animal"
            onPress={() => navigateAndClose('/ganadero/consultar')}
            icon={({ color, size }) => (
              <MaterialIcons name="search" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Registrar Nuevo Animal"
            onPress={() => navigateAndClose('/ganadero/registro')}
            icon={({ color, size }) => (
              <MaterialIcons name="add-circle" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Historial de Actividad"
            onPress={() => navigateAndClose('/ganadero/estadisticas')}
            icon={({ color, size }) => (
              <MaterialIcons name="history" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Estadísticas"
            onPress={() => navigateAndClose('/ganadero/estadisticas')}
            icon={({ color, size }) => (
              <MaterialIcons name="bar-chart" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />

          {/* Separator */}
          <View style={styles.separator} />

          <DrawerItem
            label="Información"
            onPress={() => executeAndClose(showInfo)}
            icon={({ color, size }) => (
              <MaterialIcons name="info" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Ajustes"
            onPress={() => executeAndClose(showSettings)}
            icon={({ color, size }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Salir"
            onPress={handleSignOut}
            icon={({ color, size }) => (
              <MaterialIcons name="logout" size={size} color={color} />
            )}
            labelStyle={[styles.menuItemLabel, styles.logoutLabel]}
            style={styles.menuItem}
          />
        </View>
      </DrawerContentScrollView>
    );
  }

  // Si está autenticado como ADMIN
  if (user?.role === 'admin') {
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContainer}
        style={styles.drawerContainer}
        showsVerticalScrollIndicator={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="pets" size={48} color="#4cdf20" />
          <Text style={styles.headerTitle}>Gestor Ganadero</Text>
          <Text style={styles.headerSubtitle}>Bienvenido, {user.fullName}</Text>
          <View style={[styles.roleBadge, styles.adminBadge]}>
            <Text style={styles.roleBadgeText}>Administrador</Text>
          </View>
        </View>

        {/* Admin Menu */}
        <View style={styles.menuContainer}>
          <DrawerItem
            label="Tablero"
            onPress={() => navigateAndClose('/admin')}
            icon={({ color, size }) => (
              <MaterialIcons name="dashboard" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Gestionar Usuarios"
            onPress={() => navigateAndClose('/admin/gestion')}
            icon={({ color, size }) => (
              <MaterialIcons name="people" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Gestionar Ganado"
            onPress={() => navigateAndClose('/admin/gestion')}
            icon={({ color, size }) => (
              <MaterialIcons name="pets" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Estadísticas Globales"
            onPress={() => navigateAndClose('/admin/estadisticas')}
            icon={({ color, size }) => (
              <MaterialIcons name="analytics" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Generar Reportes"
            onPress={() => executeAndClose(showReports)}
            icon={({ color, size }) => (
              <MaterialIcons name="assessment" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />

          {/* Separator */}
          <View style={styles.separator} />

          <DrawerItem
            label="Información"
            onPress={() => executeAndClose(showInfo)}
            icon={({ color, size }) => (
              <MaterialIcons name="info" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Ajustes"
            onPress={() => executeAndClose(showSettings)}
            icon={({ color, size }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            )}
            labelStyle={styles.menuItemLabel}
            style={styles.menuItem}
          />
          <DrawerItem
            label="Salir"
            onPress={handleSignOut}
            icon={({ color, size }) => (
              <MaterialIcons name="logout" size={size} color={color} />
            )}
            labelStyle={[styles.menuItemLabel, styles.logoutLabel]}
            style={styles.menuItem}
          />
        </View>
      </DrawerContentScrollView>
    );
  }

  // Fallback (no debería llegar aquí)
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  drawerContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f7f5',
  },
  header: {
    backgroundColor: '#2d4a2b',
    width: '100%',
    padding: 24,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 2,
    alignItems: 'center',
    marginBottom: 0,
    // marginHorizontal: 8,
    // marginTop: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    color: '#94C973',
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  roleBadge: {
    backgroundColor: '#94C973',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  adminBadge: {
    backgroundColor: '#ff9800',
  },
  roleBadgeText: {
    color: '#152111',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  menuContainer: {
    paddingTop: 0,
    paddingBottom: 20,
    paddingHorizontal: 0,
    marginHorizontal: 8,
    minHeight: 400,
  },
  menuItem: {
    marginHorizontal: 0,
    marginVertical: 0,
    marginBottom: 0.5,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  menuItemLabel: {
    fontSize: 15,
    color: '#333',
    marginLeft: 0,
    fontWeight: '500',
  },
  logoutLabel: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(224, 224, 224, 0.4)',
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 0.5,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    color: '#666',
    fontSize: 12,
  },
});
