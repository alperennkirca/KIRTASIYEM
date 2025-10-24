import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Address } from '../types/auth';
import { toast } from 'sonner@2.0.3';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  updateUser: (name: string, email: string) => void;
  updateAddresses: (addresses: Address[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (email: string, password: string, name: string): boolean => {
    // Get existing users
    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];

    // Check if user already exists
    if (users.find((u: any) => u.email === email)) {
      toast.error('Bu e-posta adresi zaten kayıtlı!');
      return false;
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date().toISOString(),
      addresses: [],
    };

    // Save password separately (in real app, this would be hashed)
    const credentials = { email, password };
    const credentialsJson = localStorage.getItem('credentials');
    const allCredentials = credentialsJson ? JSON.parse(credentialsJson) : [];
    allCredentials.push(credentials);
    localStorage.setItem('credentials', JSON.stringify(allCredentials));

    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setUser(newUser);

    toast.success('Kayıt başarılı! Hoş geldiniz!');
    return true;
  };

  const login = (email: string, password: string): boolean => {
    // Get credentials
    const credentialsJson = localStorage.getItem('credentials');
    const allCredentials = credentialsJson ? JSON.parse(credentialsJson) : [];

    // Check credentials
    const credential = allCredentials.find(
      (c: any) => c.email === email && c.password === password
    );

    if (!credential) {
      toast.error('E-posta veya şifre hatalı!');
      return false;
    }

    // Get user data
    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];
    const userData = users.find((u: any) => u.email === email);

    if (userData) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setUser(userData);
      toast.success('Giriş başarılı!');
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    toast.success('Çıkış yapıldı!');
  };

  const updateUser = (name: string, email: string) => {
    if (!user) return;

    // Get current user data
    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];
    
    // Update user data
    const updatedUsers = users.map((u: any) => {
      if (u.id === user.id) {
        return { ...u, name, email };
      }
      return u;
    });

    // Save updated users
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Update current user
    const updatedUser = { ...user, name, email };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const updateAddresses = (addresses: Address[]) => {
    if (!user) return;

    // Get current user data
    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];
    
    // Update user data with new addresses
    const updatedUsers = users.map((u: any) => {
      if (u.id === user.id) {
        return { ...u, addresses };
      }
      return u;
    });

    // Save updated users
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Update current user
    const updatedUser = { ...user, addresses };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateUser,
        updateAddresses,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
