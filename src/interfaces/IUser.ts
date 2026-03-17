export interface IUser {
    id:number;
    name: string;
    email: string;
    onEdit?: () => void;
    onDelete?: () => void;
  }
  