import React from 'react';
import './PortfolioStyle.css';
// import Table from '../Table';

const Portfolio = ()=>{
   

    return(
        <>
            <div className='summary'>
                <div className='balance'>
                    <h3>Current Balance</h3>
                    <p>$21,282.81</p>
                </div>
                <div className='balance gain'>
                    <h3>24h</h3>
                    <p>$21,282.81</p>
                </div>
                <button className='add'> Buy More </button>
            </div>


            <table className="market-table">

                <thead className="table-head">

                    <tr className="table-row table-title">

                    <th className="table-heading"></th>

                    <th className="table-heading" scope="col">#</th>

                    <th className="table-heading" scope="col">Name</th>

                    <th className="table-heading" scope="col">Price</th>

                    <th className="table-heading" scope="col">24h %</th>

                    <th className="table-heading" scope="col">1h %</th>

                    <th className="table-heading market-cap" scope="col">Market Cap</th>
                    
                    <th className="table-heading market-vol" scope="col">Market Volume</th>

                    </tr>
                </thead>

                <tbody className="table-body">
                {/* <Table /> */}
                </tbody>
            </table>
        </>
    )
}

export default Portfolio;