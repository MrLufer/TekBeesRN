import React, {createContext, useContext, useEffect, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface AuthContextType {
  user: FirebaseAuthTypes.User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value: AuthContextType = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
