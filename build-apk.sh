#!/bin/bash

# Script para generar APK de Bovino Manager App
# Este script te ayudará a generar el APK de la aplicación

echo "🐄 Bovino Manager - Generador de APK"
echo "====================================="

# Verificar si EAS CLI está instalado
if ! command -v eas &> /dev/null
then
    echo "⚠️  EAS CLI no está instalado. Instalando..."
    npm install -g @expo/eas-cli
fi

# Verificar si el usuario está logueado en Expo
echo "📱 Verificando autenticación en Expo..."
eas whoami

if [ $? -ne 0 ]; then
    echo "🔑 Necesitas iniciar sesión en Expo:"
    echo "   1. Ve a https://expo.dev y crea una cuenta si no tienes"
    echo "   2. Ejecuta: eas login"
    echo "   3. Vuelve a ejecutar este script"
    exit 1
fi

echo ""
echo "🏗️  Configuración actual:"
echo "   - Nombre de la app: Bovino Manager"
echo "   - Slug: bovino-manager"  
echo "   - Versión: 1.0.0"
echo "   - Package: com.bovinomanager.app"
echo ""

# Mostrar opciones de build
echo "Selecciona el tipo de build:"
echo "1. 🔧 Preview (APK para testing) - Recomendado"
echo "2. 🚀 Production (App Bundle para Play Store)"
echo "3. 🛠️  Development (APK con hot reload)"

read -p "Elige una opción (1-3): " choice

case $choice in
    1)
        echo "🔧 Generando APK de Preview..."
        eas build --platform android --profile preview
        ;;
    2)
        echo "🚀 Generando App Bundle de Producción..."
        eas build --platform android --profile production
        ;;
    3)
        echo "🛠️  Generando APK de Development..."
        eas build --platform android --profile development
        ;;
    *)
        echo "❌ Opción inválida"
        exit 1
        ;;
esac

echo ""
echo "✅ El build ha sido iniciado!"
echo "📱 Puedes monitorear el progreso en: https://expo.dev"
echo "📩 Recibirás un email cuando el APK esté listo"
echo "📱 El APK se podrá descargar desde la página de builds de Expo"