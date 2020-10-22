import React from 'react';
import axios from 'axios';
import Card from '../components/Card'

import styled from 'styled-components';

const CardList = styled.div`
  width: 95%;
  height: 100%;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit,minmax(315px,1fr));
  margin: auto;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
`;

const baseUrl = "https://rickandmortyapi.com/api/character/";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: baseUrl,
      personas: [],
      loading: true,
    }
  }

  getData() {
    var that = this;
    axios.get(this.state.currentPage)
      .then(function (response) {
        const { info, results } = response.data;
        that.setState({ loading: false, personas: results, currentPage: info.next });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { loading, personas } = this.state;
    console.log(personas);
    return (
      <Page>
        {loading === true ?
          <h3>Loading...</h3>
          :
          <div>
            <h2>Rick and Morty Characters</h2>
            <CardList>
              {personas.map((item) =>
                <Card person={item} />
              )}
            </CardList>
          </div>
        }
      </Page>
    );
  }
}
export default HomePage;