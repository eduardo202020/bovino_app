# 🐄 Bovino Manager App

Aplicación móvil para gestión integral de ganado bovino desarrollada con React Native + Expo.

## 📱 Características

- **Gestión de Animales**: Registro, seguimiento y control de ganado
- **Vacunación**: Control de vacunas y cronogramas
- **Salud Animal**: Historial médico y tratamientos
- **Fotos**: Captura de 3 vistas del animal (frontal, derecha, izquierda)
- **Ubicación GPS**: Registro de ubicación de nacimiento
- **RFID**: Soporte para etiquetas RFID
- **Roles**: Sistema para ganaderos y administradores

## 🚀 Generar APK

### Prerequisitos

1. **Instalar EAS CLI**:

   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Crear cuenta en Expo** (si no tienes):

   - Ve a [expo.dev](https://expo.dev)
   - Regístrate/Inicia sesión

3. **Autenticarse**:

   ```bash
   eas login
   ```

### Opciones de Build

#### 1. APK de Preview (Recomendado para testing)

```bash
eas build --platform android --profile preview
```

#### 2. App Bundle para Play Store

```bash
eas build --platform android --profile production
```

#### 3. APK de Development (con hot reload)

```bash
eas build --platform android --profile development
```

### Script Automático

```bash
./build-apk.sh
```

## 🎨 Configuración de Logo

### Estado Actual

- ✅ Configuración base completada
- ✅ Colores corporativos: #4cdf20 (verde), #152111 (verde oscuro)
- ⚠️ **Pendiente**: Crear logos personalizados

### Para personalizar el logo

1. **Crea los siguientes archivos** (1024x1024px):

   - `icon.png` - Ícono principal
   - `android-icon-foreground.png` - Parte frontal del ícono
   - `android-icon-background.png` - Fondo del ícono
   - `android-icon-monochrome.png` - Versión monocromática
   - `splash-icon.png` - Ícono de splash (400x400px)

2. **Colócalos en**: `assets/images/`

3. **Concepto sugerido**:
   - Silueta de vaca moderna en verde (#4cdf20)
   - Elementos tecnológicos (líneas, píxeles)
   - Diseño minimalista y profesional

### Herramientas recomendadas

- **Canva**: [logomaker.canva.com](https://logomaker.canva.com)
- **Figma**: [figma.com](https://figma.com)
- **IA**: DALL-E, Midjourney con prompt: "Modern minimalist cattle management app logo"

## 📋 Información de la App

- **Nombre**: Bovino Manager
- **Package**: com.bovinomanager.app
- **Versión**: 1.0.0
- **Plataformas**: Android (iOS preparado)

## 🛠️ Desarrollo

```bash
npm install
npx expo start
```

## 📞 Soporte

Para dudas sobre el desarrollo o generación del APK, revisar la documentación de Expo.
