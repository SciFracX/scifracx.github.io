import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Performance',
    Svg: require('../../static/img/highperformance.svg').default,
    description: (
      <>
        With the high performance Julia language, we value the speed of each algorithms in SciFracX project, try our best to provide users high performance features.
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('../../static/img/easytouse.svg').default,
    description: (
      <>
        A good software should be friendly to users, SciFracX packages privide users out-of-the-box experience with intuitive API and [illustrative docs]().
      </>
    ),
  },
  {
    title: 'Reliablity',
    Svg: require('../../static/img/reliability.svg').default,
    description: (
      <>
        Every functions in packages of SciFracX project has been tested to provide trustworthy features.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
