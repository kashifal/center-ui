import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalAction } from "../../app/slices/ModalSlice";

function Overlay() {
  const dispatch = useDispatch();
   const isOpen = useSelector((state) =>  state.ModalSlice.isOpen);
  return (
    <div
      style={{ zIndex: "1000" }}
      onClick={() => dispatch(ModalAction.openModal(false))}
      className={`w-full h-screen ${
        isOpen ? "block" : "hidden"
      } fixed top-0 bg-black/10 backdrop-blur-sm`}
    ></div>
  );
}

export default Overlay;
