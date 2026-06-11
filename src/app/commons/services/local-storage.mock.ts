export const localStorageMock = {
  getItem: (key: string): string | null => {
    return null;  // Puedes devolver un valor por defecto o null
  },
  setItem: (key: string, value: string): void => {
    // Simula guardar en el servidor, no hace nada en el servidor
  },
  removeItem: (key: string): void => {
    // Simula eliminar en el servidor
  },
  clear: (): void => {
    // Simula limpiar localStorage
  }
};
