import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para la base de datos
export interface Animal {
  id: string;
  name: string;
  rfid_tag: string;
  breed: string;
  birth_date: string;
  gender: 'male' | 'female';
  weight?: number;
  status: 'active' | 'sold' | 'deceased';
  owner_id: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'rancher' | 'admin';
  created_at: string;
  updated_at: string;
}

// Funciones para manejo de animales
export const animalService = {
  // Obtener todos los animales del usuario
  async getAnimals(userId: string): Promise<Animal[]> {
    const { data, error } = await supabase
      .from('animals')
      .select('*')
      .eq('owner_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching animals:', error);
      throw error;
    }

    return data || [];
  },

  // Crear un nuevo animal
  async createAnimal(
    animal: Omit<Animal, 'id' | 'created_at' | 'updated_at'>
  ): Promise<Animal> {
    const { data, error } = await supabase
      .from('animals')
      .insert([animal])
      .select()
      .single();

    if (error) {
      console.error('Error creating animal:', error);
      throw error;
    }

    return data;
  },

  // Actualizar un animal
  async updateAnimal(id: string, updates: Partial<Animal>): Promise<Animal> {
    const { data, error } = await supabase
      .from('animals')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating animal:', error);
      throw error;
    }

    return data;
  },

  // Eliminar un animal
  async deleteAnimal(id: string): Promise<void> {
    const { error } = await supabase.from('animals').delete().eq('id', id);

    if (error) {
      console.error('Error deleting animal:', error);
      throw error;
    }
  },
};

// Funciones para autenticación
export const authService = {
  // Iniciar sesión
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error signing in:', error);
      throw error;
    }

    return data;
  },

  // Registrarse
  async signUp(email: string, password: string, fullName: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.error('Error signing up:', error);
      throw error;
    }

    return data;
  },

  // Cerrar sesión
  async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  },

  // Obtener sesión actual
  async getCurrentSession() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error('Error getting session:', error);
      throw error;
    }

    return session;
  },

  // Escuchar cambios en la autenticación
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
