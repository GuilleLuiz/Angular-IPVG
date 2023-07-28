export interface LoginRespuesta {
  token: string;
  username: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}