import React  from "react";
import Program  from "./containers/program" 
import { Route , Routes } from "react-router-dom";

export function MainRouter(){
    return (
        <Routes>
            <Route exact path="program/" element={<Program />} />
            <Route exact path="program/:programId" element={<Program />} />
            <Route exact path="program/:programId/edit" element={<Program />} />
            <Route exact path="program/new" element={<Program />} />
        </Routes>
    )

} 