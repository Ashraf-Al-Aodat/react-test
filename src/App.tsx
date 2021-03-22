import React from 'react';
import Box from './components/Box'
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing="sm">
        
        <Grid item cols={1}>
          <Box>Box 1</Box>
        </Grid>
        
        <Grid item cols={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item cols={8}>
          <Box>Box 3</Box>
        </Grid>

      </Grid>

      <Grid container spacing="lg">
        <Grid item cols={12}>
          <Box>Box 4</Box>
        </Grid>      
      </Grid>
    </div>
  );
}

export default App;
