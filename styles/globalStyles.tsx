import { StyleSheet } from 'react-native';

// Colores de la aplicación
export const colors = {
  // Colores principales
  primary: '#4cdf20',
  primaryDark: '#3cb81a',
  primaryLight: 'rgba(76, 223, 32, 0.1)',

  // Fondos
  backgroundLight: '#f6f8f6',
  backgroundDark: '#152111',
  surface: '#ffffff',
  surfaceDark: '#243122',

  // Textos
  textPrimary: '#152111',
  textSecondary: '#6a7b6b',
  textDark: '#f6f8f6',
  textDarkSecondary: '#9aa69a',

  // Bordes
  borderLight: '#e1e4e1',
  borderDark: '#334133',

  // Estados
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',

  // Grises
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
};

// Tamaños de fuente
export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
};

// Espaciado
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

// Radios de borde
export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

// Sombras
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  primary: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
};

// Estilos globales comunes
export const globalStyles = StyleSheet.create({
  // Contenedores
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },

  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },

  // Headers
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.backgroundLight,
  },

  headerTitle: {
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },

  // Botones
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.primary,
  },

  primaryButtonText: {
    color: colors.textPrimary,
    fontSize: fontSizes.base,
    fontWeight: 'bold',
  },

  secondaryButton: {
    backgroundColor: colors.primaryLight,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: colors.textPrimary,
    fontSize: fontSizes.base,
    fontWeight: '600',
  },

  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.borderLight,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  outlineButtonText: {
    color: colors.textPrimary,
    fontSize: fontSizes.base,
    fontWeight: '600',
  },

  // Inputs
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontSize: fontSizes.base,
    color: colors.textPrimary,
  },

  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },

  inputError: {
    borderColor: colors.error,
  },

  // Cards
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.sm,
  },

  cardElevated: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadows.md,
  },

  // Textos
  title: {
    fontSize: fontSizes['3xl'],
    fontWeight: 'bold',
    color: colors.textPrimary,
  },

  subtitle: {
    fontSize: fontSizes.lg,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  body: {
    fontSize: fontSizes.base,
    color: colors.textPrimary,
    lineHeight: 24,
  },

  bodySecondary: {
    fontSize: fontSizes.base,
    color: colors.textSecondary,
    lineHeight: 24,
  },

  caption: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
  },

  // Listas
  listContainer: {
    paddingHorizontal: spacing.md,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
  },

  // Utilidades
  row: {
    flexDirection: 'row',
  },

  column: {
    flexDirection: 'column',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  spaceAround: {
    justifyContent: 'space-around',
  },

  flex1: {
    flex: 1,
  },

  // Márgenes y paddings comunes
  mt4: {
    marginTop: spacing.xs,
  },

  mt8: {
    marginTop: spacing.sm,
  },

  mt16: {
    marginTop: spacing.md,
  },

  mb4: {
    marginBottom: spacing.xs,
  },

  mb8: {
    marginBottom: spacing.sm,
  },

  mb16: {
    marginBottom: spacing.md,
  },

  px16: {
    paddingHorizontal: spacing.md,
  },

  py8: {
    paddingVertical: spacing.sm,
  },

  py16: {
    paddingVertical: spacing.md,
  },

  // Estados de error y éxito
  errorText: {
    color: colors.error,
    fontSize: fontSizes.sm,
  },

  successText: {
    color: colors.success,
    fontSize: fontSizes.sm,
  },

  warningText: {
    color: colors.warning,
    fontSize: fontSizes.sm,
  },

  // Loading y estados vacíos
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
  },

  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },

  emptyStateText: {
    fontSize: fontSizes.lg,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
});

// Temas para modo oscuro (preparado para futuro uso)
export const darkTheme = {
  colors: {
    ...colors,
    backgroundLight: colors.backgroundDark,
    surface: colors.surfaceDark,
    textPrimary: colors.textDark,
    textSecondary: colors.textDarkSecondary,
    borderLight: colors.borderDark,
  },
};
