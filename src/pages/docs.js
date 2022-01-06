import React from 'react';
import Layout from '@theme/Layout';

function Page() {
  return (
    <Layout title="DOCUMENTS">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
            <h1>Documents for SciFracX</h1>

            <div className="grid">
            <FractionalSystemsCard />
            <FractionalDiffEqCard />
            <FractionalCalculusCard />
            <FractionalTransformsCard />
            </div>
      </div>
    </Layout>
  );
}

function FractionalSystemsCard() {
    return (
          <div>
            <div className='card'>FractionalSystems.jl</div>
          </div>
        )
}

function FractionalDiffEqCard() {
    return (
          <div>
            <div className='card'>FractionalDiffEq.jl</div>
          </div>
        )
}

function FractionalCalculusCard() {
    return (
          <div>
            <div className='card'>FractionalCalculus.jl</div>
          </div>
        )
}
function FractionalTransformsCard() {
    return (
          <div>
            <div className='card'>FractionalTransforms.jl</div>
          </div>
        )
}

export default Page;