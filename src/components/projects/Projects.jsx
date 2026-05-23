import { useState } from "react";
import Container from "@/components/common/Container/Container";
import styles from "./Projects.module.scss";

const projects = [
  {
    title: "Beautiful feature fence",
    description:
      "This front fence has the durability of a steel frame but the aesthetics of a timber finish! Get the best of both worlds!",
    cover: "/Timber_Fencing.jpg",
    images: ["/Timber_Fencing.jpg", "/Timber_Fencing_2.jpg"],
  },
  {
    title: "Leaning Fence Repair",
    description:
      "Here we have pulled the fence back into it’s correct and plumb position. Installed new posts and braced it into position to allow the concrete to set. This is a very cost effective solution when budget is very important.",
    cover: "/Leaning_Fence.jpg",
    images: ["/Leaning_Fence.jpg", "/Leaning_Fence_2.jpg"],
  },
    {
    title: "Fence for a lifetime!",
    description:
      "When endurance is key. Another way to think longterm and budget friendly, go for a steel frame for extra strength. Keep your traditional fence look with timber battens.",
    cover: "/Fence_Lifetime.jpg",
    images: ["/Fence_Lifetime.jpg"]
  },
];

export default function GalleryList() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>
          Check out a few of our projects
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.title}>
              <img
                src={project.cover}
                alt={project.title}
                className={styles.image}
              />

              <div className={styles.content}>
                <div className={styles.text}>
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <button
                  type="button"
                  className={styles.button}
                  onClick={() => setSelectedProject(project)}
                >
                  View
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>

      {selectedProject && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
            >
              ×
            </button>

            <h3>{selectedProject.title}</h3>

            <div className={styles.modalImages}>
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProject.title} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


