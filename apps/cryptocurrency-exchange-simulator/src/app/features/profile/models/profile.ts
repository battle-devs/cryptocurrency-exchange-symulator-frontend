export interface GetUserResponse {
  id: number;
  user_password: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  asset: Asset[];
  transactions: any[];
  role: string;
  isEnable: boolean;
  enabled: boolean;
  authorities: Authority[];
  username: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

export interface Asset {
  id: number;
  amount: number;
  currency?: any;
}

export interface Authority {
  authority: string;
}

export interface Currency {
  dateOfPurchase: string;
  id: number;
  name: string;
}
