import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes } from '../styles/globalStyles';

interface HeaderProps {
  title: string;
  subtitle?: string;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
}

export default function Header({
  title,
  subtitle,
  rightComponent,
  leftComponent,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {leftComponent && (
          <View style={styles.leftSection}>{leftComponent}</View>
        )}

        <View style={styles.titleSection}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>

        {rightComponent && (
          <View style={styles.rightSection}>{rightComponent}</View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLight,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    minHeight: 56,
  },
  leftSection: {
    marginRight: 12,
  },
  titleSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    marginLeft: 12,
  },
  title: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
});
