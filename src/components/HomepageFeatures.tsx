import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Active Board & Motivated Community",
    image: "/img/motivated-community.svg",
    description: (
      <>
        CODE ESI created 4 years ago and it keeps growing. We have now over 120
        active members and 10 cells leaders.
      </>
    ),
  },
  {
    title: "Popular IT fields",
    image: "/img/popular-it-fields.svg",
    description: (
      <>
        Training, Projects and Competitions in <code>Web Developement</code>,{" "}
        <code>Business Intelligence</code>,<code>Data Science</code>,{" "}
        <code>Machine Learning</code>, <code>Cyber Security</code> and more.
      </>
    ),
  },
  {
    title: "Open Source",
    image: "/img/open-source-collaboration.svg",
    description: (
      <>
        We are open source and we are always looking for new contributors from
        our school clubs, other school clubs and organizations.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
