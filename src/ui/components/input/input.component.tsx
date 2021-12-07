import { useState, MouseEvent } from "react";
import { Icon } from "..";
import styles from "./input.module.scss";

export const Input = (props: InputProps): JSX.Element => {
  const [ searchText, setSearchText ] = useState<string>("");
  
  const clearSearch = () => setSearchText("");
  const renderIcon = (): JSX.Element => {
    return searchText.length === 0
      ? <SearchIcon />
      : <ClearIcon onClick={clearSearch} />
  }
  return (
    <div className={styles.container}>
      <input
        value={searchText}
        type="text"
        placeholder="Filter issues"
        onChange={e => setSearchText(e.target.value)}
        onClick={() => console.log("CLICK INPUT")}
        className={`${styles.container} ${searchText.length > 0 && styles.expanded}`}
      />
      <span className={styles.icon_container}>
        {renderIcon()}
      </span>
    </div>
  )
}

const SearchIcon = (): JSX.Element => (
  <button className={`${styles.icon} ${styles.search}`}>
    <Icon name="lens" size={16} />
  </button>
)

const ClearIcon = ({ onClick }: ClearIconProps): JSX.Element => (
  //onMouseDown is needed because blur (unfocus) happens before 'click' event, but not before 'onMouseDown'
  <button onMouseDown={onClick} className={`${styles.icon} ${styles.clear}`}>
    <Icon name="close" size={16} />
  </button>
)

interface ClearIconProps {
  onClick: () => void;
}

interface InputProps {
  placeholder?: string;
  onFocusPlaceholder?: string;
}