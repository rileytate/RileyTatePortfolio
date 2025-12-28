import styles from "./projectSection.module.css"
import { useState } from "react";

function ProjectSection ({ projectTitle, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.project_section}>
      <section className="title_row">
        <h1>{projectTitle}</h1>
        <button onClick={toggleDetails}>
          {isOpen ? 'Hide Details' : 'Show Details'}
        </button>
      </section>
      {isOpen && children}
    </section>
  );
}

export default ProjectSection;