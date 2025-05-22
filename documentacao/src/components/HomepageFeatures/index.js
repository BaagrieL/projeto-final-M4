import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Programa de Aquisição de Alimentos (PAA) alcança 21,75 mil toneladas doadas em 2024',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O PAA, com investimento de R$ 117,42 milhões, fortalece a agricultura familiar e combate a fome por meio da modalidade de Compra com Doação Simultânea.
      </>
    ),
  },
  {
    title: 'Desperdício de Alimentos',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        O Brasil joga fora cerca de 26 milhões de toneladas de alimentos por ano, segundo a Embrapa.
        Quase 60% do desperdício ocorre antes de chegar ao consumidor.
      </>
    ),
  },
  {
    title: 'Crescimento da Pobreza Pós-Pandemia',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Milhões de famílias perderam acesso a produtos básicos como roupas e higiene durante e após a pandemia.
        A busca por doações cresceu mais de 40% em várias ONGs entre 2021 e 2023.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
