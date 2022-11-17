import styled from '@emotion/styled';

export const Transaction = styled.table`
  color: #575757;
  width: 400px;
  border-collapse: collapse;
  border: 1px solid #ddedef;
  text-align: center;
  margin: 0 auto;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const TransactionTitlElem = styled.th`
  border: 1px solid #ddedef;
  background-color: #00bcd4;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0 4px 0;
`;

export const TransactionItem = styled.tr`
  background-color: #ffffff;
  &:nth-of-type(even) {
    background-color: #ddedef;
  }
`;
export const TransactionElem = styled.td`
  border: 1px solid #ddedef;
  font-weight: 400;
  font-size: 12px;
  padding: 4px 0 4px 0;
`;
