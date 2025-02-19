import { useState, useEffect } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="container">
      <PickDate />
    </div>
  );
}

// Datepicker Component
function PickDate() {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const formatted = format(date, "PPP");
    setFormattedDate(formatted);
  }, [date]);

  return (
    <div>
      <DatePicker
        inline={true}
        selected={date}
        onChange={(date) => setDate(date)}
        autoFocus={true}
        dateFormat={"date"}
      />
      <h2>{`${formattedDate}`}</h2>
    </div>
  );
}
export default App;
