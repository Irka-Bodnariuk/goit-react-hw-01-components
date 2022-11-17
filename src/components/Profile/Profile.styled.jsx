import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  margin: 0 auto;
  max-width: 300px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  margin-bottom: 32px;
`;

export const Description = styled.div`
  padding: 16px;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  background-color: #ddedef;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
`;
export const Username = styled.p`
  font-weight: 700;
  margin-bottom: 16px;
`;
export const Tag = styled.p`
  color: #575757;
  margin-bottom: 16px;
`;

export const Location = styled.p`
  color: #575757;
`;

export const Stats = styled.ul`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 0.5px solid #575757;
  margin: 0;
  padding: 0;
  background-color: #ddedef;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  padding: 10px;
  &:not(:first-of-type) {
    border-left: 0.5px solid #575757;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: #575757;
  margin-bottom: 6px;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
