import styled from '@emotion/styled';

export const Friendbox = styled.div`
  display: flex;
  justify-content: center;
`;

export const FriendList = styled.ul`
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  gap: 10px;
  padding: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Status = styled.span`
  margin-right: 5px;
  color: #03a103;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
`;

export const Avatar = styled.img`
  margin-right: 5px;
  background-color: #c5c5c5;
  border-radius: 5px;
`;
export const Name = styled.p`
  font-weight: 700;
`;
