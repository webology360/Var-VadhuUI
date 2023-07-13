import React, { useEffect, useState } from "react";
import classes from "./Input.module.scss";
import useComponentVisible from "../../../hooks/useComponentVisible";

const MultiSelect = ({
  valueArr,
  setValueArr,
  label,
  fieldName,
  width,
  widthType,
  height,
  borderRadius,
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  const [reference, isComponentVisible, setIsComponentVisible] =
    useComponentVisible();

  useEffect(() => {
    let count = 0;
    valueArr.forEach((item) => {
      if (item?.isSelected) {
        count++;
      }
    });
    setSelectedCount(count);
  }, [valueArr]);

  const handleClickItem = (selectedItem) => {
    const filteredArr = valueArr.map((arrItem) => {
      if (selectedItem[fieldName] === arrItem[fieldName]) {
        if (arrItem?.isSelected) {
          return { ...arrItem, isSelected: false };
        } else {
          return { ...arrItem, isSelected: true };
        }
      }
      return arrItem;
    });
    setValueArr(filteredArr);
  };
  const handleSelectAll = (e) => {
    e.stopPropagation();
    let filteredArr;
    if (e.target.value === "true") {
      filteredArr = valueArr.map((arrItem) => {
        return { ...arrItem, isSelected: false };
      });
    } else {
      filteredArr = valueArr.map((arrItem) => {
        return { ...arrItem, isSelected: true };
      });
    }
    setValueArr(filteredArr);
  };

  return (
    <div
      className={classes.fieldBox__inputContainer__field}
      style={{
        width: width + widthType,
        minHeight: height + "rem",
        height: height + "rem",
        borderRadius: borderRadius + "rem",
        padding: "0rem",
      }}
      ref={reference}
    >
      {/* <ul
        className={classes.fieldBox__inputContainer__field__selectedItems}
        onClick={() => setIsOpen(!isOpen)}
      >
        {valueArr?.map((item) => {
          if (item?.isSelected) {
            return (
              <li
                className={
                  classes.fieldBox__inputContainer__field__selectedItems__item
                }
              >
                <div>{item[fieldName]}</div>
                <div>X</div>
              </li>
            );
          } else {
            return <></>;
          }
        })}
      </ul> */}
      <div
        className={classes.fieldBox__inputContainer__field__selectedItems}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {selectedCount === valueArr?.length
          ? `Any ${label}`
          : `Total ${selectedCount} Selected`}
      </div>
      {isComponentVisible && (
        <ul className={classes.fieldBox__inputContainer__field__listItems}>
          <li
            className={classes.fieldBox__inputContainer__field__listItems__item}
          >
            <div onClick={handleSelectAll}>
              <input
                type="checkbox"
                value={selectedCount === valueArr?.length}
                checked={selectedCount === valueArr?.length}
                onChange={(e) => e.stopPropagation()}
              />
            </div>
            <div>All</div>
          </li>
          {valueArr?.map((item) => {
            return (
              <li
                className={
                  classes.fieldBox__inputContainer__field__listItems__item
                }
                onClick={() => handleClickItem(item)}
                key={item[fieldName]}
              >
                <div>
                  <input
                    type="checkbox"
                    value={item}
                    checked={item?.isSelected}
                    onChange={(e) => e.stopPropagation()}
                  />
                </div>
                <div>{item[fieldName]}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
