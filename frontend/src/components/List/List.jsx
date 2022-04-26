import React, { useEffect, useState } from "react";
import { getPrograms } from "../../services/program";
export default  function List({list}){
    
    return (
        
        <table>
            <thead>

            </thead>
            <tbody>
                {list && list?.length === 0 ? (
                    <tr>
                        <td>
                            <h1>No data</h1>
                        </td>
                    </tr>
                ) : ( list.map(item=>(
                    <tr>
                        <td>{item}</td>
                        <td>{item}</td>
                        <td>{item}</td>
                    </tr>
                    )
            ))}
            </tbody>    
        </table>
    );
}