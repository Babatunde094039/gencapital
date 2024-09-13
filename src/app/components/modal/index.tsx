import React, { ReactNode, useState } from "react";
import { Button, Modal } from "antd";

interface Props {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>> | any ;
  step?: number;
}

const Modals = ({ children, open, setOpen, step }: Props) => {
 
  return (
    <div>
      <Modal
        title=""
        centered
        open={open}
       
        onCancel={() => {
          setOpen(false);
          
        }}
        footer={null}
        closable={false}
        destroyOnClose
        keyboard
        className={` ${step === 2 ? 'lg:!w-[30%] w-[90%]' : 'lg:!w-[50%] w-[90%]'}  `}
>
        {children}
      </Modal>
    </div>
  );
};

export default Modals;
