export interface DetalleUsuario {
  id: number;
  email: string;
  username:string;
  password:string;
  name:DetalleUsuarioNombre;
  address:DetalleUsuarioDireccion;
  phone:string;
}

export interface DetalleUsuarioNombre {
  firstname:string;
  lastname:string;
}

export interface DetalleUsuarioDireccion {
  city:string;
  street:string;
  number:number;
  zipcode:string;
  geolocation:DetalleUsuarioDireccionGeolocation;
}

export interface DetalleUsuarioDireccionGeolocation {
  lat:string;
  long:string;
}