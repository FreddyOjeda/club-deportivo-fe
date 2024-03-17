export interface Miembro {
    id: number;
    nombre: string;
    apellido: string;
    documento: string;
    nacimiento: Date;
    telefono: string;
    correo: string;
    editar?: () => void;
    eliminar?: () => void;
}