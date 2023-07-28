export interface DetalleAve {
    uid: string;
    name: DetalleAveNombre;
    map: DetalleAveMap;
    iucn: DetalleAveIUcn;
    habitat: string;
    didyouknow: string;
    // migration: boolean;
    // dimorphism: boolean;
    size: string;
    // order: string;
    // species: string;
    images: DetalleAveImagen;
    // audio: 
    // _links: 
    // sort: ;
  }
  
  export interface DetalleAveNombre {
    spanish: string;
    english: string;
    latin: string;
  }
  
  export interface DetalleAveMap {
    image: string;
    title: string;
  }
  
  export interface DetalleAveIUcn {
    title?: string;
    description?: string;
  }
  
  export interface DetalleAveImagen {
    main: string;
    gallery: DetalleAveImagenGaleria[];
  }
  
  export interface DetalleAveImagenGaleria {
    url: string;
  }