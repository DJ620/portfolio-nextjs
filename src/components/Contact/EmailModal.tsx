import React from "react";
import { roboto } from "../../../public/Assets/Fonts";

const EmailModal = () => {
  return (
    <>
      <dialog id="my_modal" className="modal">
        <div className="bg-white modal-box">
            <p className={`${roboto.className} pt-5 text-base`}>Thank you for reaching out! I will get back to you as soon as I can.</p>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-default" />
        </form>
      </dialog>
    </>
  );
};

export default EmailModal;
