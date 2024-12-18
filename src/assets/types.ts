export const enum Department {
  Cardiology = 'Кардилогия',
  Surgery = 'Хирургия',
}

export interface Staff {
  id: number;
  fullname: string;
  department: Department;
}

export interface Doctor extends Staff {
  isHead: boolean;
}

export interface Nurse extends Staff {}

