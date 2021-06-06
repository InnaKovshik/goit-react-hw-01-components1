import s from './Statistics.module.scss';
import PropTypes from 'prop-types';

const StatisticsListItems = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

const StatisticsList = ({ items }) => {
  if (items.length !== 0)
    return <ul className={s.statList}>{items.map(StatisticsListItems)}</ul>;
};

const Statistics = ({ items }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>Upload stats</h2>
    <StatisticsList items={items} />
  </section>
);

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
};

export default Statistics;
