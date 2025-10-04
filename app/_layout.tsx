import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { UserProvider } from '../context/UserContext';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <Drawer
          drawerContent={CustomDrawerContent}
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: '#f8f9fa',
              width: 280,
            },
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Inicio',
              title: 'Cattle Manager',
            }}
          />
          <Drawer.Screen
            name="auth"
            options={{
              drawerItemStyle: { display: 'none' }, // Ocultar del drawer
            }}
          />
          <Drawer.Screen
            name="admin"
            options={{
              drawerItemStyle: { display: 'none' }, // Ocultar del drawer
            }}
          />
          <Drawer.Screen
            name="ganadero"
            options={{
              drawerItemStyle: { display: 'none' }, // Ocultar del drawer
            }}
          />
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerItemStyle: { display: 'none' }, // Ocultar del drawer
            }}
          />
          <Drawer.Screen
            name="modal"
            options={{
              drawerItemStyle: { display: 'none' }, // Ocultar del drawer
            }}
          />
        </Drawer>
        <StatusBar style="auto" />
      </UserProvider>
    </GestureHandlerRootView>
  );
}
