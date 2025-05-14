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
      placeholder="Choose Year"
      type="text"
      value={date}
      options={{
        dateFormat: "Y-m-d",
        enableTime: false,
        defaultDate: new Date(),
        closeOnSelect: true,
      }}
      onChange={([selectedDate]) => {
        setDate(selectedDate);
      }}
    />
  );
}
