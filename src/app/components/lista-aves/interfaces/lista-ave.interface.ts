export interface Ave {
    uid: string;
    name: AveNombre;
    // name?: AveNombre; <-- ?: puede venir o no
    images: AveImagen;
    _links: AveLinks;
    sort: number;
  }
  
  export interface AveNombre {
    spanish: string;
    english: string;
    latin: string;
  }
  
  export interface AveImagen {
    main: string;
  }
  
  export interface AveLinks {
    self: string;
    parent: string;
  }