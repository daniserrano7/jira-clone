import React from "react";
import styles from "./breadcrumbs.module.scss";

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps): JSX.Element => {
  const lastElementIndex = breadcrumbs.length - 1;
  return (
    <div className={styles.container}>
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <BreadcrumbsItem {...breadcrumb} />
          {index !== lastElementIndex && <span className={styles.separator}>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

const BreadcrumbsItem = ({ name, url }: Breadcrumb): JSX.Element => {
  if (url) return <a href={url}>{name}</a>;

  return <span>{name}</span>;
};

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

interface Breadcrumb {
  name: string;
  url?: string;
}
