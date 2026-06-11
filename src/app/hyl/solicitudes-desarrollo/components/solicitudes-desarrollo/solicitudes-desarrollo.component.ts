import { Component, OnInit } from '@angular/core';

export interface SolicitudDesarrollo {
  id?: number;
  titulo: string;
  descripcion: string;
  solicitante: string;
  area: string;
  prioridad: 'alta' | 'media' | 'baja';
  estado: 'pendiente' | 'en progreso' | 'completada' | 'rechazada';
  fechaCreacion: Date;
  fechaLimite?: Date;
}

@Component({
  selector: 'app-solicitudes-desarrollo',
  templateUrl: './solicitudes-desarrollo.component.html',
  styleUrls: ['./solicitudes-desarrollo.component.css']
})
export class SolicitudesDesarrolloComponent implements OnInit {
  solicitudes: SolicitudDesarrollo[] = [];
  solicitudSeleccionada: SolicitudDesarrollo = this.inicializarNueva();
  mostrarFormulario = false;
  modoEdicion = false;

  ngOnInit(): void {
    this.cargarEjemplos();
  }

  private cargarEjemplos(): void {
    this.solicitudes = [
      {
        id: 1,
        titulo: 'Implementar nuevo módulo de reportes',
        descripcion: 'Se requiere generar reportes dinámicos en el módulo de talento humano',
        solicitante: 'Ana García',
        area: 'Talento Humano',
        prioridad: 'alta',
        estado: 'en progreso',
        fechaCreacion: new Date('2025-05-01'),
        fechaLimite: new Date('2025-06-15')
      },
      {
        id: 2,
        titulo: 'Mejora en interfaz de usuario',
        descripcion: 'Rediseñar la página de inicio para mejor experiencia',
        solicitante: 'Carlos López',
        area: 'Desarrollo',
        prioridad: 'media',
        estado: 'pendiente',
        fechaCreacion: new Date('2025-05-10')
      }
    ];
  }

  inicializarNueva(): SolicitudDesarrollo {
    return {
      titulo: '',
      descripcion: '',
      solicitante: '',
      area: '',
      prioridad: 'media',
      estado: 'pendiente',
      fechaCreacion: new Date(),
      fechaLimite: undefined
    };
  }

  nuevaSolicitud(): void {
    this.solicitudSeleccionada = this.inicializarNueva();
    this.modoEdicion = false;
    this.mostrarFormulario = true;
  }

  editar(solicitud: SolicitudDesarrollo): void {
    this.solicitudSeleccionada = { ...solicitud };
    this.modoEdicion = true;
    this.mostrarFormulario = true;
  }

  guardar(): void {
    if (this.modoEdicion && this.solicitudSeleccionada.id) {
      const index = this.solicitudes.findIndex(s => s.id === this.solicitudSeleccionada.id);
      if (index !== -1) {
        this.solicitudes[index] = { ...this.solicitudSeleccionada };
      }
    } else {
      const nuevoId = Math.max(0, ...this.solicitudes.map(s => s.id || 0)) + 1;
      this.solicitudSeleccionada.id = nuevoId;
      this.solicitudes.push({ ...this.solicitudSeleccionada });
    }
    this.cerrarFormulario();
  }

  eliminar(id: number): void {
    if (confirm('¿Eliminar esta solicitud?')) {
      this.solicitudes = this.solicitudes.filter(s => s.id !== id);
    }
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
    this.solicitudSeleccionada = this.inicializarNueva();
  }

  getPrioridadClase(prioridad: string): string {
    switch (prioridad) {
      case 'alta': return 'bg-danger';
      case 'media': return 'bg-warning';
      case 'baja': return 'bg-success';
      default: return 'bg-secondary';
    }
  }

  getEstadoClase(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'bg-secondary';
      case 'en progreso': return 'bg-info';
      case 'completada': return 'bg-success';
      case 'rechazada': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }
}