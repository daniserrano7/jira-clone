import { COMMENT_PLACEHOLDER } from "../comment";
import styles from "./edit-box.module.scss";

export const EditBox = ({ message, save, cancel }: EditBoxProps): JSX.Element => (
  <div className={styles.edit_comment}>
    <textarea
      ref={ref => ref && ref.focus()}
      onFocus={e => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
      defaultValue={message}
      placeholder={COMMENT_PLACEHOLDER}
      autoFocus
    />
    <div>
      <button className={styles.save} onClick={save}>Save</button>
      <button className={styles.cancel} onClick={cancel}>Cancel</button>
    </div>
  </div>
);

interface EditBoxProps {
  message: string;
  save: () => void;
  cancel: () => void;
}