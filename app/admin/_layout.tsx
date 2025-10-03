import { Stack } from 'expo-router';
import React from 'react';

export default function AdminLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="registro" options={{ headerShown: false }} />
      <Stack.Screen name="estadisticas" options={{ headerShown: false }} />
      <Stack.Screen name="gestion" options={{ headerShown: false }} />
    </Stack>
  );
}
