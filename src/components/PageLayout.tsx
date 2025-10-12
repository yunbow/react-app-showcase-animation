import { ReactNode } from 'react';
import './PageLayout.css';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <div className="page-layout">
      <header className="page-header">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </header>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageLayout;
