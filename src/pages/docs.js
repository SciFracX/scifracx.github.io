import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Card from '../components/Card';

const Projects = [
  {
    sectionHead: 'FractionalCalculus.jl',
    items: 'Fractional derivative and integral computing with high performance algorithms'
  },
  {
    sectionHead: 'FractionalSystems.jl',
    items: 'Fractional order systems modeling and analysis(fractional PID and analysis)'
  }
]

function Page() {
  return (
    <Layout title="DOCUMENTS">
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        marginBottom: '30px'
      }}>
            <h1>Documents for SciFracX</h1>
            </div>

                <div className="container">
                <div className="row" style={{marginLeft: '100px'}}>
                <a href="https://github.com" target="_blank">
                <Card sectionHead={"FractionalSystems.jl"} items={"Fractional order systems modeling and analysis(fractional PID and analysis)"} />
                </a>
                <a href="https://github.com" target="_blank">
                <Card sectionHead={"FractionalDiffEq.jl"} items={"Fractional differential equations high performance solvers, capable of solving multi-term, system differential equations."} />
                </a>
                <a href="https://github.com" target="_blank">
                <Card sectionHead={"FractionalCalculus.jl"} items={"Fractional derivative and integral computing with high performance algorithms"} />
                </a>
                <a href="https://github.com" target="_blank">
                <Card sectionHead={"FractionalTransforms.jl"} items={"Fractional fourier transform, fractional sine transform and fractional cosine transform."} />
                </a>
        </div>
        </div>
    </Layout>
  );
}

export default Page;