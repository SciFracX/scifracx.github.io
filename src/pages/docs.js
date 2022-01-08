import React from 'react';
import Layout from '@theme/Layout';


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
        height: '30vh',
        marginLeft: '30px',
        fontSize: '50rem',
      }}>
            <h1>Documents for SciFracX</h1>
            </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          height: '30vh',
          padding: '80px 30px 30px 30px',
          fontSize: '20px',
        }}>
            
          <ActionAreaCard />
            <FractionalSystemsCard />
            <FractionalDiffEqCard />
            <br />
            <FractionalCalculusCard />
            <FractionalTransformsCard />
      </div>
    </Layout>
  );
}

function ActionAreaCard() {
  return (
    <Link >
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea underline='none' href='https://github.com'>
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
    </Link>
  );
}

function FractionalSystemsCard() {
    return (
          <div
          style={{
            padding: '30px 30px 30px 30px',
            float: 'left'
          }}>
            <div className='card'><h3 style={{
              fontSize: '40px'
            }}>FractionalSystems.jl</h3>Fractional order systems modeling and analysis(fractional PID and analysis)</div>
          </div>
        )
}

function FractionalDiffEqCard() {
    return (
          <div
          style={{
            padding: '30px 30px 30px 30px',
            float: 'right'
          }}>
            <div className='card'><h3 style={{
              fontSize: '40px'
            }}>FractionalDiffEq.jl</h3>Fractional differential equations high performance solvers.</div>
          </div>
        )
}

function FractionalCalculusCard() {
    return (
          <div
          style={{
            padding: '30px 30px 30px 30px',
            float: 'left'
          }}>

            <div className='card'><h3 style={{
              fontSize: '40px'
            }}>FractionalCalculus.jl</h3>Fractional derivative and integral computing with high performance algorithms</div>
          </div>
        )
}
function FractionalTransformsCard() {
    return (
          <div
          style={{
            padding: '30px 30px 30px 30px',
            float: 'right'
          }}>
            <div className='card'><h3 style={{
              fontSize: '40px'
            }}>FractionalTransforms.jl</h3></div>
          </div>
        )
}

export default Page;