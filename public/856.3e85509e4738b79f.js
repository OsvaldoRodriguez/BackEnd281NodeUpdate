"use strict";(self.webpackChunkfrontEndAngular=self.webpackChunkfrontEndAngular||[]).push([[856],{1856:(R,b,t)=>{t.r(b),t.d(b,{SistemaModule:()=>G});var d=t(6895),g=t(5450),r=t(433),v=t(3065),e=t(8256),y=t(5988),c=t(805),u=t(5593),m=t(1493),p=t(8969);function q(a,s){if(1&a&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&a){const o=s.$implicit;e.xp6(1),e.AsE(" ",o.name," - ",o.size," bytes ")}}function w(a,s){if(1&a&&(e.TgZ(0,"ul"),e.YNc(1,q,2,2,"li",25),e.qZA()),2&a){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.uploadedFiles)}}function N(a,s){if(1&a&&e.YNc(0,w,2,1,"ul",24),2&a){const o=e.oxw();e.Q6J("ngIf",o.uploadedFiles.length)}}function A(a,s){if(1&a){const o=e.EpF();e.TgZ(0,"p-button",26),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.displayModalImage=!1)}),e.qZA()}}const U=function(){return{width:"50vw"}};let x=(()=>{class a{constructor(o,i){this.infoSistemaService=o,this.messageService=i,this.datosSistema=[],this.displayModalImage=!1,this.uploadedFiles=[],this.infoForm=new r.cw({logo:new r.NI("",[r.kI.required]),quienes_somos:new r.NI("",[r.kI.required]),mision:new r.NI("",[r.kI.required]),vision:new r.NI("",[r.kI.required]),celular:new r.NI("",[r.kI.required]),correo:new r.NI("",[r.kI.required]),direccion:new r.NI("",[r.kI.required]),facebook:new r.NI("",[r.kI.required]),twitter:new r.NI("",[r.kI.required]),instagram:new r.NI("",[r.kI.required])}),this.mostrar()}mostrar(){this.infoSistemaService.mostrar().subscribe(o=>{this.datosSistema=o,this.url_imagen=v.y.infosSitema+this.datosSistema[0].logo,this.infoForm=new r.cw({logo:new r.NI("",[r.kI.required]),quienes_somos:new r.NI(this.datosSistema[0]?.quienes_somos,[r.kI.required]),mision:new r.NI(this.datosSistema[0]?.mision,[r.kI.required]),vision:new r.NI(this.datosSistema[0]?.vision,[r.kI.required]),celular:new r.NI(this.datosSistema[0]?.celular,[r.kI.required]),correo:new r.NI(this.datosSistema[0]?.correo,[r.kI.required]),direccion:new r.NI(this.datosSistema[0]?.direccion,[r.kI.required]),facebook:new r.NI(this.datosSistema[0]?.facebook,[r.kI.required]),twitter:new r.NI(this.datosSistema[0]?.twitter,[r.kI.required]),instagram:new r.NI(this.datosSistema[0]?.instagram,[r.kI.required])})},o=>{console.log(o)})}guardarActualizar(o){this.infoSistemaService.guardar(o).subscribe(i=>{this.mostrar()},i=>{console.log(i)})}showModalDialogImage(o){this.datosImagen={...o},this.displayModalImage=!0}myUploader(o){console.log(o.files);let i=new FormData;i.append("imagen",o.files[0]),this.infoSistemaService.actualizarImagen(this.datosImagen.id,i).subscribe(n=>{this.displayModalImage=!1,this.mostrar(),this.messageService.add({severity:"info",summary:"Imagen Actualizada",detail:""})},n=>{this.messageService.add({severity:"info",summary:"Error al Actualizar Imagen",detail:""})})}}return a.\u0275fac=function(o){return new(o||a)(e.Y36(y.X),e.Y36(c.ez))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-informacion"]],decls:75,vars:10,consts:[[3,"formGroup"],[1,"card"],[1,"grid"],[1,"col"],[1,"mx-auto"],["width","200",3,"src"],["icon","pi pi-image","label","Imagen de Sistema",3,"click"],[1,"formgrid","grid"],[1,"field","col"],["for","firstname2"],["id","address","type","text","rows","4","formControlName","quienes_somos",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","address","type","text","rows","2","formControlName","mision",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","address","type","text","rows","2","formControlName","vision",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","username","type","username","formControlName","celular","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","username","type","email","formControlName","correo","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","username","type","username","formControlName","direccion","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","username","formControlName","facebook","type","username","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","username","formControlName","twitter","type","email","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["id","username","type","username","formControlName","instagram","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["pButton","","pRipple","","label","Guardar Cambios",1,"p-button-success","w-full",3,"click"],["header","Subir Imagen",3,"visible","modal","draggable","resizable","visibleChange"],["name","demo[]","accept","image/*",3,"customUpload","uploadHandler"],["pTemplate","content"],["pTemplate","footer"],[4,"ngIf"],[4,"ngFor","ngForOf"],["icon","pi pi-check","label","Ok","styleClass","p-button-text",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),e._uU(5,"Informaci\xf3n del sistema"),e.qZA(),e.TgZ(6,"div",1)(7,"div",4)(8,"div",2)(9,"div",3),e._UZ(10,"img",5),e.qZA()(),e.TgZ(11,"div",2)(12,"div",3)(13,"p-button",6),e.NdJ("click",function(){return i.showModalDialogImage({id:1})}),e.qZA()()()()(),e.TgZ(14,"div",1)(15,"div",7)(16,"div",8)(17,"label",9),e._uU(18,"Quienes Somos"),e.qZA(),e._UZ(19,"textarea",10),e.qZA()(),e.TgZ(20,"div",7)(21,"div",8)(22,"label",9),e._uU(23,"Mision"),e.qZA(),e._UZ(24,"textarea",11),e.qZA(),e.TgZ(25,"div",8)(26,"label",9),e._uU(27,"Vision"),e.qZA(),e._UZ(28,"textarea",12),e.qZA()()()()(),e.TgZ(29,"div",2)(30,"div",3)(31,"h2"),e._uU(32,"Contacto"),e.qZA(),e.TgZ(33,"div",1)(34,"div",7)(35,"div",8)(36,"label",9),e._uU(37,"Celular"),e.qZA(),e._UZ(38,"input",13),e.qZA()(),e.TgZ(39,"div",7)(40,"div",8)(41,"label",9),e._uU(42,"Correo Electronico"),e.qZA(),e._UZ(43,"input",14),e.qZA()(),e.TgZ(44,"div",7)(45,"div",8)(46,"label",9),e._uU(47,"Direccion"),e.qZA(),e._UZ(48,"input",15),e.qZA()()()(),e.TgZ(49,"div",3)(50,"h2"),e._uU(51,"Redes Sociales"),e.qZA(),e.TgZ(52,"div",1)(53,"div",7)(54,"div",8)(55,"label",9),e._uU(56,"Facebook"),e.qZA(),e._UZ(57,"input",16),e.qZA()(),e.TgZ(58,"div",7)(59,"div",8)(60,"label",9),e._uU(61,"Twitter"),e.qZA(),e._UZ(62,"input",17),e.qZA()(),e.TgZ(63,"div",7)(64,"div",8)(65,"label",9),e._uU(66,"Instagram"),e.qZA(),e._UZ(67,"input",18),e.qZA()()()()(),e.TgZ(68,"div",2)(69,"div",3)(70,"button",19),e.NdJ("click",function(){return i.guardarActualizar(i.infoForm.value)}),e.qZA()()()()(),e.TgZ(71,"p-dialog",20),e.NdJ("visibleChange",function(l){return i.displayModalImage=l}),e.TgZ(72,"p-fileUpload",21),e.NdJ("uploadHandler",function(l){return i.myUploader(l)}),e.YNc(73,N,1,1,"ng-template",22),e.qZA(),e.YNc(74,A,1,0,"ng-template",23),e.qZA()),2&o&&(e.Q6J("formGroup",i.infoForm),e.xp6(10),e.Q6J("src",i.url_imagen,e.LSH),e.xp6(61),e.Akn(e.DdM(9,U)),e.Q6J("visible",i.displayModalImage)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(1),e.Q6J("customUpload",!0))},dependencies:[d.sg,d.O5,c.jx,u.Hq,u.zx,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,m.V,p.p]}),a})();var C=t(5471),T=t(1326),S=t(263),h=t(613);function k(a,s){if(1&a&&(e.TgZ(0,"div",23),e._UZ(1,"p-radioButton",24),e.TgZ(2,"label"),e._uU(3),e.qZA()()),2&a){const o=s.$implicit;e.xp6(1),e.s9C("value",o.descripcion),e.xp6(2),e.Oqu(o.descripcion)}}function F(a,s){if(1&a&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&a){const o=s.$implicit;e.xp6(1),e.AsE(" ",o.name," - ",o.size," bytes ")}}function J(a,s){if(1&a&&(e.TgZ(0,"ul"),e.YNc(1,F,2,2,"li",26),e.qZA()),2&a){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.uploadedFiles)}}function M(a,s){if(1&a&&e.YNc(0,J,2,1,"ul",25),2&a){const o=e.oxw();e.Q6J("ngIf",o.uploadedFiles.length)}}function z(a,s){if(1&a){const o=e.EpF();e.TgZ(0,"p-button",27),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.displayModalImage=!1)}),e.qZA()}}const P=function(){return{width:"50vw"}};let Y=(()=>{class a{constructor(o,i,n,l){this.usuarioService=o,this.messageService=i,this.personaSerivce=n,this.authService=l,this.datosUsuario={},this.displayModalImage=!1,this.uploadedFiles=[],this.lista_estados=[{descripcion:"Masculino"},{descripcion:"Femenino"},{descripcion:"Otros"}],this.usuarioForm=new r.cw({nombre:new r.NI("",[r.kI.required]),paterno:new r.NI("",[r.kI.required]),materno:new r.NI("",[r.kI.required]),fecha_nac:new r.NI("",[r.kI.required]),sexo:new r.NI("",[r.kI.required]),nom_usuario:new r.NI("",[r.kI.required]),contrasenia:new r.NI("",[r.kI.required]),correo:new r.NI("",[r.kI.required]),PersonaId:new r.NI("",[r.kI.required]),id:new r.NI("",[r.kI.required])}),this.usuario_actual=this.authService.getUser(),console.log("usuario actual",this.usuario_actual),this.mostrar()}mostrar(){this.usuarioService.mostrar().subscribe(o=>{this.datosUsuario=o;for(let i=0;i<this.datosUsuario.length;i++)this.usuario_actual===this.datosUsuario[i].nom_usuario&&(this.current_user=this.datosUsuario[i].id,this.id_persona=this.datosUsuario[i].PersonaId,this.datosUsuario=this.datosUsuario[i],this.personaSerivce.mostrarId(this.id_persona).subscribe(n=>{this.datosPersona=n,console.log(this.datosPersona),this.usuarioForm=new r.cw({nombre:new r.NI(this.datosPersona[0].nombre,[r.kI.required]),paterno:new r.NI(this.datosPersona[0].paterno,[r.kI.required]),materno:new r.NI(this.datosPersona[0].materno,[r.kI.required]),fecha_nac:new r.NI(this.datosPersona[0].fecha_nac,[r.kI.required]),sexo:new r.NI(this.datosPersona[0].sexo,[r.kI.required]),nom_usuario:new r.NI(this.datosUsuario.nom_usuario,[r.kI.required]),contrasenia:new r.NI(this.datosUsuario.contrasenia,[r.kI.required]),correo:new r.NI(this.datosUsuario.correo,[r.kI.required]),PersonaId:new r.NI(this.datosPersona[0].id,[r.kI.required]),id:new r.NI(this.datosUsuario.id,[r.kI.required])}),console.log("datos de la foto",this.datosUsuario.foto),this.url_imagen=v.y.usuarios+this.datosUsuario.foto},n=>{}))},o=>{console.log(o)})}guardarActualizar(o){this.personaSerivce.actualizar(o.PersonaId,{nombre:o.nombre,paterno:o.paterno,materno:o.materno,fecha_nac:o.fecha_nac,sexo:o.sexo}).subscribe(f=>{this.mostrar(),this.messageService.add({severity:"info",summary:"Datos Actualizados",detail:""})},f=>{this.mostrar(),this.messageService.add({severity:"error",summary:"Error al actualizar",detail:""})}),this.authService.actualizarPerfil(o.id,{contrasenia:o.contrasenia,correo:o.correo}).subscribe(f=>{this.mostrar(),this.messageService.add({severity:"info",summary:"Datos Actualizados",detail:""})},f=>{this.mostrar(),this.messageService.add({severity:"error",summary:"Error al actualizar",detail:""})})}showModalDialogImage(o){this.datosImagen={...o},this.displayModalImage=!0}myUploader(o){console.log(o.files);let i=new FormData;i.append("imagen",o.files[0]),console.log("id persona",this.current_user),this.usuarioService.actualizarImagen(this.current_user,i).subscribe(n=>{this.displayModalImage=!1,this.mostrar(),this.messageService.add({severity:"info",summary:"Imagen Actualizada",detail:""})},n=>{this.messageService.add({severity:"info",summary:"Error al Actualizar Imagen",detail:""})})}}return a.\u0275fac=function(o){return new(o||a)(e.Y36(C.J),e.Y36(c.ez),e.Y36(T.J),e.Y36(S.e))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-perfil"]],decls:58,vars:11,consts:[[3,"formGroup"],[1,"card"],[1,"grid"],[1,"col"],[1,"mx-auto"],["width","200",3,"src"],["icon","pi pi-image","label","Perfil del Usuario",3,"click"],[1,"formgrid","grid"],[1,"field","col"],["for","firstname2"],["type","text","formControlName","nombre","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["type","text","formControlName","paterno","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["type","text","formControlName","materno","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["type","date","formControlName","fecha_nac","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],[1,"mb-3"],["class","field-radiobutton col-6",4,"ngFor","ngForOf"],["type","password","formControlName","contrasenia","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["type","email","formControlName","correo","aria-describedby","username-help",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["pButton","","pRipple","","label","Guardar Cambios",1,"p-button-success","w-full",3,"click"],["header","Subir Imagen",3,"visible","modal","draggable","resizable","visibleChange"],["name","demo[]","accept","image/*",3,"customUpload","uploadHandler"],["pTemplate","content"],["pTemplate","footer"],[1,"field-radiobutton","col-6"],["formControlName","sexo",3,"value"],[4,"ngIf"],[4,"ngFor","ngForOf"],["icon","pi pi-check","label","Ok","styleClass","p-button-text",3,"click"]],template:function(o,i){1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),e._uU(5,"Informaci\xf3n del Usuario"),e.qZA(),e.TgZ(6,"div",1)(7,"div",4)(8,"div",2)(9,"div",3),e._UZ(10,"img",5),e.qZA()(),e.TgZ(11,"div",2)(12,"div",3)(13,"p-button",6),e.NdJ("click",function(){return i.showModalDialogImage({id:1})}),e.qZA()()()()(),e.TgZ(14,"div",1)(15,"div",7)(16,"div",8)(17,"label",9),e._uU(18,"Nombre"),e.qZA(),e._UZ(19,"input",10),e.qZA()(),e.TgZ(20,"div",7)(21,"div",8)(22,"label",9),e._uU(23,"Apellido Paterno"),e.qZA(),e._UZ(24,"input",11),e.qZA()(),e.TgZ(25,"div",7)(26,"div",8)(27,"label",9),e._uU(28,"Apellido Materno"),e.qZA(),e._UZ(29,"input",12),e.qZA()(),e.TgZ(30,"div",7)(31,"div",8)(32,"label",9),e._uU(33,"Fecha de Nacimiento"),e.qZA(),e._UZ(34,"input",13),e.qZA()(),e.TgZ(35,"div",7)(36,"div",8)(37,"label",14),e._uU(38,"Genero"),e.qZA(),e.TgZ(39,"div",7),e.YNc(40,k,4,2,"div",15),e.qZA()()(),e.TgZ(41,"div",7)(42,"div",8)(43,"label",9),e._uU(44,"Contrase\xf1a"),e.qZA(),e._UZ(45,"input",16),e.qZA()(),e.TgZ(46,"div",7)(47,"div",8)(48,"label",9),e._uU(49,"Correo"),e.qZA(),e._UZ(50,"input",17),e.qZA()()()()(),e.TgZ(51,"div",2)(52,"div",3)(53,"button",18),e.NdJ("click",function(){return i.guardarActualizar(i.usuarioForm.value)}),e.qZA()()()()(),e.TgZ(54,"p-dialog",19),e.NdJ("visibleChange",function(l){return i.displayModalImage=l}),e.TgZ(55,"p-fileUpload",20),e.NdJ("uploadHandler",function(l){return i.myUploader(l)}),e.YNc(56,M,1,1,"ng-template",21),e.qZA(),e.YNc(57,z,1,0,"ng-template",22),e.qZA()),2&o&&(e.Q6J("formGroup",i.usuarioForm),e.xp6(10),e.Q6J("src",i.url_imagen,e.LSH),e.xp6(30),e.Q6J("ngForOf",i.lista_estados),e.xp6(14),e.Akn(e.DdM(10,P)),e.Q6J("visible",i.displayModalImage)("modal",!0)("draggable",!1)("resizable",!1),e.xp6(1),e.Q6J("customUpload",!0))},dependencies:[d.sg,d.O5,c.jx,u.Hq,u.zx,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,m.V,p.p,h.EU]}),a})();var I=t(498),_=t(650),Z=t(4844);const H=[{path:"informacion",component:x,canActivate:[I.C,_.B],data:{roles:Z.f.permisosHijos.sistema.informacion}},{path:"perfil",canActivate:[I.C,_.B],data:{roles:Z.f.permisosHijos.sistema.perfil},component:Y}];let Q=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.Bz.forChild(H),g.Bz]}),a})();var D=t(6264),E=t(403),O=t(2453),B=t(4156);let G=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.ez,Q,D.I,E.U$,u.hJ,r.UX,m.S,O.EV,r.u5,B.WebModule,p.O,h.cc]}),a})()}}]);