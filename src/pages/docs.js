import React from 'react';
import Layout from '@theme/Layout';

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Page() {
  return (
    <Layout title="DOCUMENTS">
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '30px',
        marginBottom: '30px'
      }}>
            <h1>Documents for SciFracX</h1>
            </div>

            <Grid container spacing={15} >
            <Grid item xs>
            <FractionalSystemsCard />
            </Grid>
            <Grid item xs>
            <FractionalDiffEqCard />
            </Grid>
            <Grid item xs>
            <FractionalCalculusCard />
            </Grid>
            <Grid item xs>
            <FractionalTransformsCard />
            </Grid>
            </Grid>

    </Layout>
  );
}

function FractionalSystemsCard() {
  return (
    <Card sx={{ maxWidth: 600 }} >
      <CardActionArea underline="none"  href="https://github.com/SciFracX/FractionalSystems.jl">
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            FractionalSystems.jl
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fractional order systems modeling and analysis(fractional PID and analysis)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function FractionalDiffEqCard() {
  return (
    <Card sx={{ maxWidth: 500 }} >
      <CardActionArea  href="https://github.com/SciFracX/FractionalSystems.jl">
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          FractionalDiffEq.jl
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fractional differential equations high performance solvers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function FractionalCalculusCard() {
  return (
    <Card sx={{ maxWidth: 500 }} >
      <CardActionArea  href="https://github.com/SciFracX/FractionalSystems.jl">
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          FractionalCalculus.jl
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fractional derivative and integral computing with high performance algorithms
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function FractionalTransformsCard() {
  return (
    <Card sx={{ maxWidth: 500 }} >
      <CardActionArea  href="https://github.com/SciFracX/FractionalSystems.jl">
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          FractionalTransforms.jl
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fractional fourier transform, fractional sine transform and fractional cosine transform.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Page;