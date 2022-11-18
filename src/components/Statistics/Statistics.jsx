import PropTypes from 'prop-types';
import StatisticsList from './StatisticsList';
import { Section, Title } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <>
        <StatisticsList items={stats} />
      </>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
