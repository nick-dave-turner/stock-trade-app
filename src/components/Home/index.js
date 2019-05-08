// @flow
import React from 'react';
import styled from 'styled-components';

import {
  StocksTableContainer,
  TradeFormContainer,
  TradesTableContainer
} from '../../containers/App';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas: 'sidebar tradeTable' 'sidebar stocksTable';
`;

const SideBar = styled.aside`
  grid-area: sidebar;
`;

const TradesTable = styled.section`
  grid-area: tradeTable;
`;

const StocksTable = styled.section`
  grid-area: stocksTable;
`;

function Home() {
  return (
    <Grid>
      <SideBar>
        <TradeFormContainer />
      </SideBar>
      <TradesTable>
        <TradesTableContainer />
      </TradesTable>
      <StocksTable>
        <StocksTableContainer />
      </StocksTable>
    </Grid>
  );
}

export default Home;
