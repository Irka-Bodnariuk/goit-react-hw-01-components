import styled from '@emotion/styled';

export const Friendbox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const FriendList = styled.ul`
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  gap: 8px;
  padding: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Status = styled.span`
  margin-right: 4px;
  color: #03a103;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#ff0000' : '#008000')};
`;

export const Avatar = styled.img`
  margin-right: 4px;
  background-color: #ddedef;
  border-radius: 4px;
`;
export const Name = styled.p`
  font-weight: 700;
`;
