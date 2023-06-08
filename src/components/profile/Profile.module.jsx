import styled from '@emotion/styled';

export const ProfileItem = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 70px 50px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  width: 240px;
  height: 220px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 100px;
  display: block;
  margin: 0 auto 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  text-align: center;
  color: darkgrey;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
  color: darkgrey;
`;

export const Stats = styled.ul`
list-style: none;
display: flex;
padding: 12px;
margin: 0;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
background-color: gainsboro;

`

export const ListItem = styled.li`
  display: grid;
  width: 80px;
  justify-items: center;
  :not(:last-child){
    border-right: 1px solid #999999;
  }
  @media screen and (min-width: 768px){
    width: 128px;
  }
 }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
`;
