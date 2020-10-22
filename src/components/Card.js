import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:300px;
  height: auto;
  border: 1px solid gray;
  background-color: #4d4e54;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Info = styled.p`
  padding: 5px;
  text-align: left;
  margin: 0;
  font-size: 20px;
`;

const Label = styled.span`
  font-weight: 500;
  text-transform: capitalize;
  color: #5ec76b;
`;

const Title = styled.h3`
  color: #ddf7e4;
  margin: 14px 0;
`;

class Card extends React.Component {

  render() {
    console.log(this.props);
    const { name, status, location, species, origin, image } = this.props.person;
    return (
      <Wrapper>
        <Title>{name}</Title>
        <img src={image} alt={name}/>
        <Info> <Label>orign:</Label> {origin.name}</Info>
        <Info><Label>location:</Label> {location.name}</Info>
        <Info><Label>status:</Label> {status}</Info>
        <Info><Label>species:</Label> {species}</Info>
      </Wrapper>
    );
  }
}
export default Card;