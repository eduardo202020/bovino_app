import { Stack } from 'expo-router';
import React from 'react';

export default function GanaderoLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="animales" options={{ headerShown: false }} />
      <Stack.Screen name="registro" options={{ headerShown: false }} />
      <Stack.Screen name="estadisticas" options={{ headerShown: false }} />
    </Stack>
  );
}
