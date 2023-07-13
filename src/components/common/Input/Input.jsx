import React, { useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import Button from "../Button/Button";
import classes from "./Input.module.scss";
import ShowPasswordIcon from "../../../assets/icons/Login/ShowPasswordIcon";
import HidePasswordIcon from "../../../assets/icons/Login/HidePasswordIcon";
import { GrClose } from "react-icons/gr";
import MultiSelect from "./MultiSelect";

const Input = ({
  fieldProps: {
    type = "text",
    fieldName,
    fieldValue,
    name,
    value,
    label,
    buttonLabel = "select",
    labelMsg,
    disableLabelClick,
    labelColor = "dark",
    placeholder,
    defaultValue = "",
    valueArr,
    setValueArr,
    error,
    required,
    rows = 1,
    cols = 15,
    validations,
    icon = false,
    hidden = false,
    autoComplete = "on",
    height = "4.6",
    width = "26",
    widthType = "rem",
    borderRadius = "0",
    direction = "column",
    gap = "1",
    noPasswordIcon = false,
    fileInputButton = true,
    fileInputButtonHeight = "5",
    fileInputButtonWidth = "15",
    isLight = true,
    reference,
    handleClickFileButton,
    fileInputIcon,
    fileInputName = "",
    fileInputView = false,
    handleCancleFileInput,
    handleFileInputView,
    minRange = 0,
    maxRange = 100,
    rangeSymbol = "%",
    onChange = () => {},
    onKeyDown,
    fileInputRef,
    textAreaScrollable,
    loading = false,
    ...rest
  },
}) => {
  const fileRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const { setValue, register, control } = useFormContext({});
  const { field } = useController({ name, control });
  const handleClickFileInput = () => {
    fileRef.current.click();
  };
  const handleHeightTextArea = (e) => {
    e.target.style.height = e.target.scrollHeight + "px";
  };
  let fullFileName =
    type === "file" && fileInputName
      ? fileInputName
      : field?.value && typeof field?.value === "string"
      ? field?.value
      : field?.value?.[0]?.name || field?.value?.[0];

  let lastIndexVal =
    type === "file" &&
    fullFileName &&
    (fullFileName.lastIndexOf(".") - 1) >>> 0;

  let fileExtension =
    type === "file" &&
    fullFileName &&
    fullFileName.slice(lastIndexVal + 2).slice(0, 4);

  const themeClassName = isLight
    ? classes.input__isLight
    : classes.input__isDark;

  return (
    <div
      className={themeClassName}
      style={{
        flexDirection: direction,
        gap: gap + "rem",
        justifyContent: direction.includes("reverse") ? "flex-end" : "normal",
        width: widthType === "%" ? width + widthType : width + "rem",
      }}
    >
      <div className={classes.labelContainer}>
        {label && (
          <label
            className={classes.labelContainer__label}
            htmlFor={!disableLabelClick ? name || fieldName : undefined}
            // style={{
            //   color:
            //     labelColor === "dark"
            //       ? "#404040"
            //       : labelColor === "light"
            //       ? "#707070"
            //       : labelColor,
            // }}
          >
            {label}
            <span className={classes.labelContainer__label__required}>
              {validations?.required?.value || required ? "*" : ""}
            </span>{" "}
            {/* : */}
          </label>
        )}
        {labelMsg && (
          <span className={classes.labelContainer__labelMsg}>{labelMsg}</span>
        )}
      </div>
      <div className={classes.fieldBox}>
        <div className={classes.fieldBox__inputContainer}>
          {type === "textarea" ? (
            <textarea
              className={classes.fieldBox__inputContainer__field}
              placeholder={placeholder}
              name={name}
              {...register(name, {
                ...validations,
                onChange: (e) => {
                  if (!textAreaScrollable) {
                    handleHeightTextArea(e);
                  }
                  onChange(e);
                },
              })}
              style={{
                maxWidth: width + widthType,
                minWidth: width + widthType,
                minHeight: height + "rem",
                borderRadius: borderRadius + "rem",
                padding: "1.3rem",
                overflow: textAreaScrollable ? "auto" : "hidden",
              }}
              id={name || fieldName}
              rows={rows}
              cols={cols}
              {...rest}
            ></textarea>
          ) : type === "select" ? (
            <select
              className={classes.fieldBox__inputContainer__field}
              name={name}
              {...register(name, {
                ...validations,
                onChange: (e) => {
                  onChange(e);
                },
              })}
              style={{
                width: width + widthType,
                minHeight: height + "rem",
                borderRadius: borderRadius + "rem",
              }}
              id={name || fieldName}
              defaultValue={defaultValue}
              {...rest}
            >
              {!defaultValue && (
                <option value="" disabled hidden>
                  {placeholder}
                </option>
              )}
              {valueArr?.map((val) => {
                return (
                  <option
                    key={
                      fieldValue || fieldName
                        ? val[fieldValue || fieldName]
                        : val
                    }
                    value={
                      fieldValue || fieldName
                        ? val[fieldValue || fieldName]
                        : val
                    }
                  >
                    {fieldName ? val[fieldName] : val}
                  </option>
                );
              })}
            </select>
          ) : type === "file" ? (
            <input
              className={classes.fieldBox__inputContainer__field}
              name={name}
              type={type}
              {...register(name, {
                ...validations,
                onChange: (e) => {
                  setValue(name, e.target?.files);
                  onChange(e);
                },
              })}
              onClick={(e) => (e.target.value = null)}
              id={name || fieldName}
              aria-invalid={error ? "true" : "false"}
              placeholder={placeholder}
              style={{
                width: width + widthType,
                minHeight: height + "rem",
                borderRadius: borderRadius + "rem",
              }}
              hidden={hidden}
              ref={(e) => {
                field.ref(e);
                if (reference) {
                  reference.current = e;
                } else if (fileRef) {
                  fileRef.current = e;
                }
              }}
              {...rest}
            />
          ) : type === "range" ? (
            <input
              className={classes.fieldBox__inputContainer__field}
              name={name}
              type={type}
              {...register(name, {
                ...validations,
                onChange: (e) => {
                  onChange(e);
                },
              })}
              id={name || fieldName}
              aria-invalid={error ? "true" : "false"}
              style={{
                width: width + widthType,
                margin: "0rem 2rem",
                borderRadius: borderRadius + "rem",
              }}
              min={minRange}
              max={maxRange}
              {...rest}
            />
          ) : type === "multiselect" ? (
            <MultiSelect
              borderRadius={borderRadius}
              label={label}
              fieldName={fieldName}
              height={height}
              setValueArr={onChange}
              valueArr={valueArr}
              width={width}
              widthType={widthType}
            />
          ) : (
            <input
              className={classes.fieldBox__inputContainer__field}
              name={name}
              type={type === "password" && showPassword ? "text" : type}
              autoComplete={autoComplete}
              {...register(name, {
                ...validations,
                onChange: (e) => {
                  onChange(e);
                },
              })}
              onKeyDown={(e) => {
                if (onKeyDown) {
                  onKeyDown(e);
                }
              }}
              id={name || fieldName}
              aria-invalid={error ? "true" : "false"}
              placeholder={placeholder}
              style={{
                width: width + widthType,
                minHeight: height + "rem",
                borderRadius: borderRadius + "rem",
                padding: icon ? "0.6rem 1rem 0.6rem 4.5rem" : "1.3rem",
              }}
              hidden={hidden}
              {...rest}
            />
          )}
          {type === "file" &&
          fullFileName &&
          fileInputName !== "false" &&
          !loading ? (
            <div
              className={classes.fieldBox__inputContainer__fileNameContainer}
              title={fullFileName}
              style={{
                minHeight: height + "rem",
                flexDirection: fileInputView ? "column" : "row",
              }}
            >
              <div
                className={
                  classes.fieldBox__inputContainer__fileNameContainer__fileName
                }
              >
                <div
                  className={
                    classes.fieldBox__inputContainer__fileNameContainer__fileName__text
                  }
                >
                  {fullFileName?.length > 25
                    ? fullFileName.slice(0, 20) + "..." + fileExtension
                    : fullFileName}{" "}
                  {name === "imgList" &&
                  (field?.value?.[1]?.name || field?.value?.[1])
                    ? `+ ${field?.value?.length - 1} others`
                    : ""}
                </div>
                <span
                  className={
                    classes.fieldBox__inputContainer__fileNameContainer__fileName__icon
                  }
                  onClick={() => {
                    if (!rest?.disabled) {
                      setValue(name, "");
                      if (handleCancleFileInput) {
                        handleCancleFileInput();
                      }
                    }
                  }}
                >
                  <GrClose />
                </span>
              </div>
            </div>
          ) : (
            type === "file" &&
            fileInputButton && (
              <Button
                onClick={() => {
                  if (handleClickFileButton) {
                    handleClickFileButton();
                  } else {
                    handleClickFileInput();
                  }
                }}
                icon={fileInputIcon}
                label={placeholder || "Select"}
                height={fileInputButtonHeight}
                width={width}
                widthType={widthType}
                dark={!isLight}
                light={isLight}
                disabled={rest?.disabled}
                type="button"
                loading={loading}
              />
            )
          )}
          {icon && (
            <span className={classes.fieldBox__inputContainer__icon}>
              {icon}
            </span>
          )}
          {/* {search && (
            <img
              src={searchIcon}
              alt="search"
              className={classes.fieldBox__inputContainer__searchIcon}
            />
          )} */}
          {type === "password" && !noPasswordIcon && !hidden && (
            <div
              className={classes.fieldBox__inputContainer__eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
            </div>
          )}
          {(loading && type !== "file") ||
          (loading && type !== "file" && !fileInputButton) ? (
            <div className={classes.fieldBox__inputContainer__loader}>
              Loading...
            </div>
          ) : error ? (
            <div className={classes.fieldBox__inputContainer__error}>
              {error}
            </div>
          ) : (
            <></>
          )}
          {type === "range" && (
            <div
              className={classes.fieldBox__inputContainer__sliderValue}
              style={{ left: "-1rem" }}
            >
              {minRange}
              {rangeSymbol}
            </div>
          )}
          {type === "range" && (
            <div
              className={classes.fieldBox__inputContainer__sliderValue}
              style={{ left: `${Number(field?.value / 3)}rem`, top: "3rem" }}
            >
              {fieldValue}
              {rangeSymbol}
            </div>
          )}
          {type === "range" && (
            <div
              className={classes.fieldBox__inputContainer__sliderValue}
              style={{ right: "-6.5rem" }}
            >
              {maxRange}
              {rangeSymbol}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
