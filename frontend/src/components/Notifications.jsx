import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SocketContext } from "../Context";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  const notify = (name) => {
    toast.info(`${name} is calling you!`, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  if (call.isReceivingCall && !callAccepted) {
    notify(call.name);
    return (
      <div onClick={answerCall}>
        <ToastContainer theme="colored" />
      </div>
    );
  }
  return null;
};

export default Notifications;
