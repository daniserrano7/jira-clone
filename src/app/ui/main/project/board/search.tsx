import React from "react";
import cx from "classix";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { useProjectStore } from "@app/ui/main/project";

export const Search = (): JSX.Element => {
  const { search, setSearch } = useProjectStore();

  const clearSearch = () => setSearch("");
  const renderIcon = (): JSX.Element => {
    return search.length === 0 ? (
      <SearchIcon />
    ) : (
      <ClearIcon onClick={clearSearch} />
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative w-fit">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Filter issues"
        onChange={handleChange}
        className={cx(
          "border-1 box-border h-[40px] w-[120px] rounded border-none bg-grey-100 py-2",
          "pr-8 pl-2 outline outline-2 outline-grey-400 duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-light",
          "placeholder:duration-200 placeholder:ease-in-out hover:bg-grey-300 focus:w-[190px]",
          "focus:bg-white focus:shadow-blue focus:outline-primary-main dark:bg-dark-500",
          "dark:outline-dark-100 dark:placeholder:text-font-main-dark dark:placeholder:opacity-50",
          "dark:placeholder:text-opacity-100 dark:focus:outline-primary-main-dark"
        )}
      />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2">
        {renderIcon()}
      </span>
    </div>
  );
};

const iconBaseClass = cx(
  "flex border-none justify-center items-center font-icon z-10"
);

const SearchIcon = (): JSX.Element => (
  <span className={cx(iconBaseClass, "dark:text-font-light-dark")}>
    <BiSearch size={16} />
  </span>
);

const ClearIcon = ({ onClick }: ClearIconProps): JSX.Element => (
  // onMouseDown is needed because blur (unfocus) happens
  // before 'click' event, but not before 'onMouseDown'
  <button
    onMouseDown={onClick}
    className={cx(
      iconBaseClass,
      "cursor-pointer rounded hover:bg-grey-300 dark:hover:bg-dark-100"
    )}
    aria-label="Clear search"
  >
    <IoCloseOutline size={16} />
  </button>
);

interface ClearIconProps {
  onClick: () => void;
}
