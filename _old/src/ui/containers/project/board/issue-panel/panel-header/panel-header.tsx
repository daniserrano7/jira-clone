import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { IssueId } from "domain/issue";
import { Icon } from "@app/components/icon";
import styles from "./panel-header.module.scss";

export const PanelHeader = ({ id, onDeleteIssue, onClose }: PanelHeaderProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.issue_type}>
        <span className={styles.icon}>
          <Icon name="task" size={16} />
        </span>
        <span className={styles.id}>{id}</span>
      </span>
      <CloseModalDialog action={onDeleteIssue} />
      <Dialog.Close onClick={onClose} className={styles.header_button}>
        <Icon name="close" size={24} />
      </Dialog.Close>
    </div>
  );
};

interface PanelHeaderProps {
  id: IssueId;
  onDeleteIssue: () => void;
  onClose: () => void;
}

const CloseModalDialog = ({ action }: CloseModalDialogProps): JSX.Element => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger
        className={`
        ${styles.header_button} 
        ${styles.delete_button}
      `}
      >
        <Icon name="delete" size={24} />
      </AlertDialog.Trigger>
      <AlertDialog.Portal className={styles.alert_portal}>
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>Delete issue?</AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            This action is permanent and cannot be undone. Are you sure you want to remove this
            issue completely?
          </AlertDialog.Description>
          <div className={styles.buttons}>
            <AlertDialog.Cancel className={styles.cancel}>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action onClick={action} className={styles.action}>
              Delete
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
        <AlertDialog.Overlay className={styles.overlay} />
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

interface CloseModalDialogProps {
  action: () => void;
}
