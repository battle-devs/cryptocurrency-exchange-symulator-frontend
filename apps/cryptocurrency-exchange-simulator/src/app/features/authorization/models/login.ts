export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  lastname: string;
  name: string;
  role: string;
  token: string;
  username: string;
}
