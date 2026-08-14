export interface UserAttributes {
  id?: number;
  first_name: string;
  middle_name?: string | null;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type UserCreationAttributes = Omit<UserAttributes, "id" | "createdAt" | "updatedAt">;
