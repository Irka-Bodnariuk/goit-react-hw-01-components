import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0 auto;
  max-width: 300px;
  text-align: center;
  background-color: #ffffff;
  margin-bottom: 32px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Title = styled.h2`
  margin: 0;
  padding: 32px;
  text-transform: uppercase;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;
export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  color: #575757;
`;
export const Label = styled.span`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
`;
export const Percentage = styled.span`
  font-weight: 700;
`;
