import { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import ScrollArea from "@xico2k/react-scroll-area";
import { Category } from "domain/category";
import { createIssue, issueMock1 } from "domain/issue";
import { IssueCard } from "ui/containers";
import { useCategoriesPanelContext } from "../board";
import styles from "./category-column.module.scss";

export const CategoryColumn = observer(({ category }: CategoryColumnProps): JSX.Element => {
  const { name, issues } = category;
  const { scrollDisabled } = useCategoriesPanelContext();

  const scrollRef = useRef<HTMLHeadingElement>(null);
  const [ areaHeight, setAreaHeight ] = useState<string>("100%");
  const [ scrollTop, setScrollTop ] = useState<number>(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    setAreaHeight(`${scrollRef.current.offsetHeight}px`);
  }, [scrollRef]);

  const createNewIssue = () => {
    category.addIssue(createIssue(issueMock1));
  }

  // Expensive effect. Might want to disable
  const onScroll = ({ scrollTop }: {scrollTop: number}) => {
    setScrollTop(scrollTop);
  }

  return (
    <div className={styles.issue_category}>
      <div className={`
        ${styles.header}
        ${scrollTop > 3 ? styles.scroll_shadow : undefined}
      `}>
        <span>
          {name}
        </span>
        <button onClick={createNewIssue}>
          Create  issue
        </button>
      </div>
      <div ref={scrollRef} className={styles.body}>
        <ScrollArea
          height={areaHeight}
          onScroll={onScroll}
          innerClassName={styles.scroll_area_inner}
          overflowClassName={`
            ${styles.scroll_area}
            ${scrollDisabled ? styles.scroll_disabled : undefined}
          `}
        >
          <ul className={styles.issues_list}>
            {issues.map((issue, index) => (
              <div key={index}>
                <IssueCard issue={issue} />
              </div>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  )
});

interface CategoryColumnProps {
  category: Category;
}