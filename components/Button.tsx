import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
// Definir colores localmente para evitar errores de import
const colors = {
  primary: '#4cdf20',
  textPrimary: '#152111',
  borderLight: '#d1d5db',
  primaryLight: 'rgba(76, 223, 32, 0.1)',
};

const fontSizes = {
  sm: 14,
  base: 16,
  lg: 18,
};

const borderRadius = {
  lg: 12,
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
};

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
}: ButtonProps) {
  const getButtonStyle = () => {
    let baseStyle = [styles.button];

    // Variantes
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primaryButton);
        break;
      case 'secondary':
        baseStyle.push(styles.secondaryButton);
        break;
      case 'outline':
        baseStyle.push(styles.outlineButton);
        break;
    }

    // Tamaños
    switch (size) {
      case 'small':
        baseStyle.push(styles.smallButton);
        break;
      case 'medium':
        baseStyle.push(styles.mediumButton);
        break;
      case 'large':
        baseStyle.push(styles.largeButton);
        break;
    }

    // Estados
    if (disabled || loading) {
      baseStyle.push(styles.disabledButton);
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    let baseStyle = [styles.buttonText];

    // Colores según variante
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primaryText);
        break;
      case 'secondary':
        baseStyle.push(styles.secondaryText);
        break;
      case 'outline':
        baseStyle.push(styles.outlineText);
        break;
    }

    // Tamaños
    switch (size) {
      case 'small':
        baseStyle.push(styles.smallText);
        break;
      case 'medium':
        baseStyle.push(styles.mediumText);
        break;
      case 'large':
        baseStyle.push(styles.largeText);
        break;
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? colors.textPrimary : colors.primary}
        />
      ) : (
        <>
          {icon}
          <Text style={getTextStyle()}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.lg,
    gap: spacing.sm,
  },

  // Variantes
  primaryButton: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  secondaryButton: {
    backgroundColor: colors.primaryLight,
  },

  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  // Tamaños
  smallButton: {
    paddingHorizontal: spacing.sm + 4,
    paddingVertical: spacing.xs + 2,
    minHeight: 32,
  },

  mediumButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    minHeight: 44,
  },

  largeButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    minHeight: 56,
  },

  // Estados
  disabledButton: {
    opacity: 0.6,
  },

  // Textos base
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Colores de texto
  primaryText: {
    color: colors.textPrimary,
  },

  secondaryText: {
    color: colors.textPrimary,
  },

  outlineText: {
    color: colors.primary,
  },

  // Tamaños de texto
  smallText: {
    fontSize: fontSizes.sm,
  },

  mediumText: {
    fontSize: fontSizes.base,
  },

  largeText: {
    fontSize: fontSizes.lg,
  },
});
