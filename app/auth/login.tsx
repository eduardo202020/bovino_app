import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, isLoading, error } = useUser();
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    try {
      await signIn(email, password);
      console.log('Login exitoso, esperando redirección...');
      // La navegación será manejada por el efecto en index.tsx
    } catch (err) {
      console.error('Error en login:', err);
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="pets" size={48} color="#4cdf20" />
        <Text style={styles.title}>Gestor Ganadero</Text>
        <Text style={styles.subtitle}>
          Bienvenido de nuevo, por favor inicie sesión en su cuenta.
        </Text>
      </View>

      {/* Main Form */}
      <View style={styles.main}>
        <View style={styles.formContainer}>
          {error && <Text style={styles.errorText}>{error}</Text>}

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color="#546051"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo o Usuario"
              placeholderTextColor="#546051"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock"
              size={24}
              color="#546051"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#546051"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={[
              styles.loginButton,
              isLoading && styles.loginButtonDisabled,
            ]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#152111" />
            ) : (
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>O</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Google Login Button */}
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Iniciar con Google</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Aún no tienes cuenta?{' '}
          <Text style={styles.signUpLink}>Regístrate</Text>
        </Text>
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
    paddingTop: 48,
    paddingBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#152111',
    marginTop: 8,
  },
  subtitle: {
    color: '#546051',
    marginTop: 4,
    textAlign: 'center',
    maxWidth: 280,
    paddingHorizontal: 20,
    lineHeight: 20,
    fontSize: 14,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  formContainer: {
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    top: 14,
    zIndex: 1,
  },
  input: {
    paddingLeft: 44,
    paddingRight: 16,
    paddingVertical: 14,
    backgroundColor: '#e9ede8',
    borderRadius: 8,
    color: '#152111',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#4cdf20',
    fontWeight: '500',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#94C973',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonDisabled: {
    backgroundColor: '#7BA05A',
    opacity: 0.6,
  },
  loginButtonText: {
    color: '#152111',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#546051',
    fontSize: 14,
  },
  googleButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d1d5db',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: '#152111',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  footerText: {
    color: '#546051',
    fontSize: 14,
  },
  signUpLink: {
    color: '#4cdf20',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ffebee',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffcdd2',
  },
});
