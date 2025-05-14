export type IEventDT = {
  id: number;
  date: {
    day: string;
    month: string;
    year: number;
  };
  title: string;
  time: string;
  location: string;
  image: string;
};
