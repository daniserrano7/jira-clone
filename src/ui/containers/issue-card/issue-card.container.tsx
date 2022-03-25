import { useState, useRef } from "react";
import { Listbox } from "@headlessui/react";
import { Issue } from "domain/issue";
import { priorities, Priority } from "domain/priority";
import { Icon, IconName } from "ui/components";
import { useCategoriesPanelContext } from "../board";
import styles from "./issue-card.module.scss";


const priorityDict: Record<Priority, PriorityProps> = {
  low: {
    name: "Low",
    icon: "priority",
  }, 
  medium: {
    name: "Medium",
    icon: "priority",
  },
  high: {
    name: "High",
    icon: "priority",
  },
}


export const IssueCard = ({ issue }: IssueCardProps): JSX.Element => {
  const { setScrollDisabled } = useCategoriesPanelContext();
  const  priorityRef = useRef<HTMLButtonElement>(null);

  const [ priorityIsOpen, setPriorityIsOpen ] = useState<boolean>(false);
  const [ selectedPriority, setSelectedPriority ] = useState<Priority>(issue.priority);

  const handlePriorityPanelToggle = (isOpen: boolean) => {
    if (isOpen !== priorityIsOpen) setScrollDisabled(isOpen);
    setPriorityIsOpen(isOpen);
  }

  const getPriorityMenuStyle = () => {
    if (!priorityRef.current) return;
    
    const { left, bottom } = priorityRef.current.getBoundingClientRect();
    return {
      left: `${left}.px`,
      top: `${bottom}px`,
    }
  }

  const onPriorityChange = (priority: Priority) => {
    setSelectedPriority(priority);
    setScrollDisabled(false);
    issue.setPriority(priority);
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {issue.name}
      </p>
      <div className={styles.details}>
        <span className={styles.issue_type}>
          <span className={styles.icon}>
            <Icon name="task" size={16} />
          </span>
          <span className={styles.code}>Issue 1</span>
        </span>
        <Listbox value={selectedPriority} onChange={onPriorityChange}>
          {({ open }) => {
            handlePriorityPanelToggle(open);

            return (
              <div className={styles.priority}>
                <Listbox.Button as="div">
                  <button ref={priorityRef}>
                    <span className={`
                      ${styles.icon}
                      ${styles[issue.priority]}
                    `}>
                      <Icon name="priority" size={16} />
                    </span>
                  </button>
                </Listbox.Button>
                {priorityIsOpen && (
                  <Listbox.Options
                    style={getPriorityMenuStyle()}
                    className={styles.list_items}
                    static
                  >
                    {priorities.map((priority, index) => (
                      <Listbox.Option key={index} value={priority}>
                        <button className={styles.item}>
                          <span className={`
                            ${styles.icon}
                            ${styles[priority]}
                          `}>
                            <Icon name={priorityDict[priority].icon} size={16} />
                          </span>
                          <span>
                            {priorityDict[priority].name}
                          </span>
                        </button>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </div>
            )
          }}
        </Listbox>
      </div>
    </div>
  )
};

interface PriorityProps {
  name: string;
  icon: IconName;
}

interface IssueCardProps {
  issue: Issue;
}