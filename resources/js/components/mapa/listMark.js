import React from 'react';
import Table from "react-bootstrap/Table";

const ListMark = ({estructura,barrio,problema,fecha})=>{

    return (
        <>
            <div style={{
                width:'200px',
                height:"auto",
            }}>
                <Table responsive>
                    <tbody>
                    <tr>
                        <th colSpan={20}> {barrio}</th>
                    </tr>
                    <tr>
                        <th>Problema:</th>
                        <td>{problema}</td>
                    </tr>
                    <tr>
                        <th>Estructura:</th>
                        <td>{estructura}</td>
                    </tr>
                    <tr >
                        <td style={{textAling: 'center'}}>{fecha}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );

}

export default  ListMark


