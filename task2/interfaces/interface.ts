export interface Salary {
  id: number;
  name: string;
  position: string;
  salary: number;
  department: string;
  fixedPercentage: () => void;
}
