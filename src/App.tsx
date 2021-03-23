import { relative } from 'node:path';
import Box from './components/Box/Box'
import Grid from './components/Grid/Grid';
import GridRuler from './components/GridRuler/GridRuler';

function App() {
  return (
    <div className="App">

      <GridRuler spacing="md"></GridRuler>
      
      <Grid container spacing="md">

        <Grid item cols={6}>
          <Box>Box 1</Box>
        </Grid>
        
        <Grid item cols={6}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 3</Box>
        </Grid>


        <Grid item cols={6}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
