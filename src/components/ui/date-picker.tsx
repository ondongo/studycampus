import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

type IProps = {
  date: Date;
  setDate: (date: Date) => void;
};

export default function DatePicker({ date, setDate }: IProps) {
  return (
    <Flatpickr
      id="datetime-picker"
      className="form-control input active"
      placeholder="Choisir une date ex : 1999-05-30"
      type="text"
      value={date}
      options={{
        dateFormat: "Y-m-d",
        enableTime: false,
        defaultDate: new Date(),
        closeOnSelect: true,
        minDate: "1950-01-01",
        maxDate: "2025-12-31",
        allowInput: true,
        
     
      }}
      onChange={([selectedDate]) => {
        setDate(selectedDate);
      }}
    />
  );
}
