import React from "react";
import classes from "./Modal.module.scss";
import Portal from "./Portal";
import { GrClose } from "react-icons/gr";
import Button from "../Button/Button";

const Modal = ({
  isOpen,
  children,
  heading = "",
  canClose = true,
  loading = false,
  toggle,
  justifyContent = "space-between",
  paddingBody,
  height,
  width,
  buttonLabel1,
  buttonLabel2,
  handleSubmit,
}) => {
  return (
    <Portal>
      <div
        className={classes.modal__wrapper}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div
          className={classes.modal__wrapper__content}
          style={{
            height: height + "rem",
            width: width + "rem",
          }}
        >
          <div className={classes.modal__wrapper__content__header}>
            {heading}
            {canClose && (
              <div
                className={classes.modal__wrapper__content__header__close}
                onClick={toggle}
              >
                <GrClose />
              </div>
            )}
          </div>
          <div
            className={classes.modal__wrapper__content__body}
            style={{
              justifyContent: justifyContent,
              padding: paddingBody ? paddingBody : "0rem",
            }}
          >
            {children}
          </div>
          {(buttonLabel1 || buttonLabel2) && (
            <div className={classes.modal__wrapper__content__footer}>
              <div
                className={classes.modal__wrapper__content__footer__cancel}
                onClick={!loading ? toggle : undefined}
              >
                {buttonLabel1}
              </div>
              <Button
                type="button"
                label={buttonLabel2}
                onClick={handleSubmit}
                small
              />
            </div>
          )}
        </div>
        <div
          className={classes.modal__wrapper__background}
          onClick={canClose && !loading ? toggle : undefined}
        ></div>
      </div>
    </Portal>
  );
};

export default Modal;
