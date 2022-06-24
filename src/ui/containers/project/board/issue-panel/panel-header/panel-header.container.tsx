import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IssueId } from "domain/issue";
import { Icon } from "ui/components/icon";
import deleteAnimatedIcon from "ui/assets/icons/delete-animated.gif";
import styles from "./panel-header.module.scss";

export const PanelHeader = ({ id, onDeleteIssue, onClose }: PanelHeaderProps): JSX.Element => {
  const [ isDeleting, setIsDeleting ] = useState<boolean>(false);

  const deleteIssue = () => {
    const GIF_LOOP_TIMEOUT = 1180;
    
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      onDeleteIssue();
    }, GIF_LOOP_TIMEOUT);
  }

  const renderDeleteIcon = (): JSX.Element => {
    const StaticIcon = () => (
      <span style={{ display: isDeleting ? "none" : "flex"}}>
        <Icon name="delete" size={24} />
      </span>
    );

    const AnimatedIcon = () => (
      <img
        src={deleteAnimatedIcon}
        width={24} 
        height={24} 
        style={{ display: isDeleting ? "flex" : "none"}}
      />
    );
    
    return isDeleting
      ? <AnimatedIcon />
      : <StaticIcon />
  }

  return (
    <div className={styles.container}>
      <span className={styles.issue_type}>
        <span className={styles.icon}>
          <Icon name="task" size={16} />
        </span>
        <span className={styles.id}>
          {id}
        </span>
      </span>
      <button 
        onClick={deleteIssue} 
        className={`${styles.header_button} ${styles.delete_button}`}
      >
        {renderDeleteIcon()}
      </button>
      <Dialog.Close onClick={onClose} className={styles.header_button}>
        <Icon name="close" size={24} />
      </Dialog.Close>
    </div>
  )
}

interface PanelHeaderProps {
  id: IssueId;
  onDeleteIssue: () => void;
  onClose: () => void;
}