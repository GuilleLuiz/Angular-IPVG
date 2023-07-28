import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appSoloAdmin]'
})
export class SoloAdminDirective implements OnInit {

  esAdmin: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    // Suponer que mor_2314 | 83r5^_ es admin
  ngOnInit() {
    this.verSiEsAdmin();
    if (this.esAdmin) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else  {
      this.viewContainer.clear();
    }
  }

  verSiEsAdmin() {
    const nombreUsuario = localStorage.getItem('usuario');
    if (nombreUsuario && nombreUsuario === 'mor_2314') {
      this.esAdmin = true;
    } else {
      this.esAdmin = false;
    }
  }

}
