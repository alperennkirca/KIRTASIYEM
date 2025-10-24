export interface Address {
  id: string;
  title: string; // Ev, İş, vb.
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string; // İl
  district: string; // İlçe
  postalCode: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  addresses?: Address[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
