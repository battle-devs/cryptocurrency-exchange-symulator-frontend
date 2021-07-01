export interface RegistrationForm {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  user_password?: string;
}

export interface LoginForm {
  userName: string;
  password: string;
}

export interface RegisterUserResponse {
  id: number;
  user_password: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  asset?: Asset[];
  transactions?: any;
  role: string;
  isEnable: boolean;
  enabled: boolean;
  username: string;
  authorities: Authority[];
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
}

export interface Authority {
  authority: string;
}

export interface Asset {
  amount: number;
  currency: string;
  id: number;
}
