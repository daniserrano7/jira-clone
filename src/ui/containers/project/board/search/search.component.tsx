import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "infrastructure/store";
import { Icon } from "ui/components/icon";
import styles from "./search.module.scss";

export const Search = observer((): JSX.Element => {
  const store = useStore();
  const search = store.filters.search;

  const setSearch = (value: string) => {
    store.filters.search = value;
  }

  const clearSearch = () => setSearch("");
  const renderIcon = (): JSX.Element => {
    return search.length === 0
      ? <SearchIcon />
      : <ClearIcon onClick={clearSearch} />
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  }
  
  return (
    <div className={styles.container}>
      <input
        value={search}
        type="text"
        placeholder="Filter issues"
        onChange={handleChange}
        className={`${styles.container} ${search.length > 0 && styles.expanded}`}
      />
      <span className={styles.icon_container}>
        {renderIcon()}
      </span>
    </div>
  )
});

const SearchIcon = (): JSX.Element => (
  <button className={`${styles.icon} ${styles.search}`}>
    <Icon name="lens" size={16} />
  </button>
)

const ClearIcon = ({ onClick }: ClearIconProps): JSX.Element => (
  // onMouseDown is needed because blur (unfocus) happens 
  // before 'click' event, but not before 'onMouseDown'
  <button onMouseDown={onClick} className={`${styles.icon} ${styles.clear}`}>
    <Icon name="close" size={16} />
  </button>
)

interface ClearIconProps {
  onClick: () => void;
}