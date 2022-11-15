import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <>
        <StatisticsList items={stats} />
      </>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
