import { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import ScrollArea from "@xico2k/react-scroll-area";
import { Category } from "domain/category";
import { createIssue, issueMock1 } from "domain/issue";
import { IssueCard } from "ui/containers";
import styles from "./category-column.module.scss";

export const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
  const { name, issues } = category;

  const scrollRef = useRef<HTMLHeadingElement>(null);
  const [ areaHeight, setAreaHeight ] = useState<string>("100%");

  useEffect(() => {
    if (!scrollRef.current) return;

    setAreaHeight(`${scrollRef.current.offsetHeight}px`);
  }, [scrollRef]);

  const createNewIssue = () => {
    category.addIssue(createIssue(issueMock1));
  }

  return (
    <div className={styles.issue_category}>
      <div className={styles.header}>
        {name}
      </div>
      <div ref={scrollRef} className={styles.body}>
        <ScrollArea height={areaHeight}>
          <ul className={styles.issues_list}>
            {issues.map((issue, index) => (
              <div key={index}>
                <IssueCard issue={issue} />
              </div>
            ))}
          </ul>
          <button onClick={createNewIssue}>
            Create  issue
          </button>
        </ScrollArea>
      </div>
    </div>
  )
});

interface CategoryColumnProps {
  category: Category;
}