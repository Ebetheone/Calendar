import { format } from "date-fns";
import { useState } from "react";
import Calendar from "./components/Calendar";
import Button from "./components/Button";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [show, setShow] = useState<boolean>(true);
  const handleSetToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="">
      {show ? (
        <div className="h-screen w-full flex justify-center items-center">
          <button
            className="flex bg-black text-white justify-center items-center border-2 border-solid border-[rgb(0,0,0)] rounded-[12px] px-4 py-2 font-bold font-serif text-[20px]"
            onClick={() => setShow(false)}
          >
            Calendar
          </button>
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <p>
                <strong>Picked Date: </strong>
                {format(currentDate, "dd LLLL yyyy")}
              </p>
              <Button onClick={handleSetToday}>Today</Button>
            </div>
            <Calendar value={currentDate} onChange={setCurrentDate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
