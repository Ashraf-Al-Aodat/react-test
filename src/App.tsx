import Box from './components/Box/Box'
import Grid from './components/Grid/Grid';
import GridRuler from './components/GridRuler/GridRuler';

function App() {
  return (
    <div className="App">

      <Grid container spacing="lg">
        <GridRuler spacing="lg"></GridRuler>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 1</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 2</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 3</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 4</Box>
        </Grid>

<Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 5</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box>6</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 7</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 8</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 9</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 10</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 11</Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Box> 12</Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
