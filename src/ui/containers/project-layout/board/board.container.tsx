import { useState, useRef, useEffect } from "react";
import { Breadcrumbs, breadcrumbsInfo, Input } from "ui/components";
import { AvatarList, avatarListInfo, Issues } from "ui/containers";
import styles from "./board.module.scss";

export const Board = (): JSX.Element => {
  const issuesRef = useRef<HTMLHeadingElement>(null);
  const [ issuesWidth, setIssuesWidth ] = useState<number>(0);

  useEffect(() => {
    if (!issuesRef.current) return;

    setIssuesWidth(issuesRef.current.offsetWidth);
  }, [issuesRef]);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Breadcrumbs {...breadcrumbsInfo} />
        <h1 className={styles.title}>Sprint board</h1>
      </section>
      <section className={styles.tools}>
        <Input />
        <div className={styles.users}>
          <AvatarList {...avatarListInfo} />
        </div>
        <div className={styles.filters}>
          FILTERS
        </div>
      </section>
      <section ref={issuesRef} className={styles.issues}>
        {/* ISSUES */}
        <Issues width={issuesWidth} />
      </section>
    </div>
  )
}