import React, { createContext, useContext, useEffect, useReducer } from 'react';

// Tipos para el usuario y la autenticación
export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'rancher' | 'admin';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Acciones para el reducer
type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: User }
  | { type: 'AUTH_FAILURE'; payload: string }
  | { type: 'AUTH_LOGOUT' }
  | { type: 'CLEAR_ERROR' }
  | { type: 'SET_LOADING'; payload: boolean };

// Estado inicial
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Reducer para manejo de estado de autenticación
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

// Interfaz para el contexto
interface UserContextType {
  // Estado
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Acciones
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;

  // Utilidades
  isRancher: () => boolean;
  isAdmin: () => boolean;
}

// Crear el contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider del contexto
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Función para iniciar sesión
  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      dispatch({ type: 'AUTH_START' });

      // Aquí se integraría con Supabase o el servicio de autenticación
      // Por ahora simulamos una respuesta
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simular validación de credenciales
      if (email === 'admin@cattle.com' && password === 'admin123') {
        const user: User = {
          id: '1',
          email: email,
          fullName: 'Administrador',
          role: 'admin',
        };
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
      } else if (email === 'rancher@cattle.com' && password === 'rancher123') {
        const user: User = {
          id: '2',
          email: email,
          fullName: 'Ganadero Test',
          role: 'rancher',
        };
        dispatch({ type: 'AUTH_SUCCESS', payload: user });
      } else {
        throw new Error('Credenciales incorrectas');
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error al iniciar sesión';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error; // Re-lanzar el error para que sea capturado en el componente
    }
  };

  // Función para registrarse
  const signUp = async (
    email: string,
    password: string,
    fullName: string
  ): Promise<void> => {
    try {
      dispatch({ type: 'AUTH_START' });

      // Aquí se integraría con Supabase
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simular registro exitoso
      const user: User = {
        id: Date.now().toString(),
        email: email,
        fullName: fullName,
        role: 'rancher', // Por defecto los nuevos usuarios son ganaderos
      };

      dispatch({ type: 'AUTH_SUCCESS', payload: user });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error al registrarse';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
    }
  };

  // Función para cerrar sesión
  const signOut = async (): Promise<void> => {
    try {
      // Aquí se cerraría la sesión con Supabase
      dispatch({ type: 'AUTH_LOGOUT' });
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  // Función para limpiar errores
  const clearError = (): void => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Utilidades para verificar roles
  const isRancher = (): boolean => {
    return state.user?.role === 'rancher';
  };

  const isAdmin = (): boolean => {
    return state.user?.role === 'admin';
  };

  // Verificar sesión existente al cargar la app
  useEffect(() => {
    const checkExistingSession = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });

        // Aquí verificarías si hay una sesión activa
        // Por ahora simulamos que no hay sesión
        await new Promise((resolve) => setTimeout(resolve, 1000));

        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        dispatch({
          type: 'AUTH_FAILURE',
          payload: 'Error al verificar sesión',
        });
      }
    };

    checkExistingSession();
  }, []);

  // Valor del contexto
  const contextValue: UserContextType = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    error: state.error,
    signIn,
    signUp,
    signOut,
    clearError,
    isRancher,
    isAdmin,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Hook para protección de rutas
export const useAuthGuard = (requiredRole?: 'rancher' | 'admin') => {
  const { user, isAuthenticated, isLoading } = useUser();

  const canAccess = React.useMemo(() => {
    if (!isAuthenticated || !user) return false;
    if (!requiredRole) return true;
    return user.role === requiredRole || user.role === 'admin'; // Admin puede acceder a todo
  }, [isAuthenticated, user, requiredRole]);

  return {
    canAccess,
    isLoading,
    user,
  };
};
