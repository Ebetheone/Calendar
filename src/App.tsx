/* eslint-disable @typescript-eslint/no-unused-vars */
import { format } from "date-fns";
import { useState } from "react";
import Calendar from "./components/Calendar";
import ButtonBlack from "./components/Button";
import { Button, Modal } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState<SizeType>("large");
  const handleSetToday = () => {
    setCurrentDate(new Date());
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <Button type="primary" size={size} onClick={showModal}>
          Calendar
        </Button>
      </div>
      <Modal
        title="Calendar"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <p>
              <strong>Picked Date: </strong>
              {format(currentDate, "dd LLLL yyyy")}
            </p>
            <ButtonBlack onClick={handleSetToday}>Today</ButtonBlack>
          </div>
          <Calendar value={currentDate} onChange={setCurrentDate} />
        </div>
      </Modal>
    </>
  );
};

export default App;
