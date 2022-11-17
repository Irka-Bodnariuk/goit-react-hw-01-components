import PropTypes from 'prop-types';
import { List, Item, Label, Percentage } from './Statistics.styled';

import getRandomHexColor from './RandomHexColor';

export default function StatisticsList({ items }) {
  return (
    <List>
      {items.map(({ id, label, percentage }) => (
        <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </List>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
