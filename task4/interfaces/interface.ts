export interface Book {
  title: string;
  author: string;
  yearPublished: number;
  availableCopies: number;
  getBriefDescription: () => void;
}
