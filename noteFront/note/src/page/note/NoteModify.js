import React from 'react';
import NoteModifyComponent from "./NoteModifyComponent";
import { useParams } from 'react-router-dom';

const NoteModify=()=>{

    const {nno} = useParams();
    return(
        <NoteModifyComponent nno = {nno}/>
    );
}
export default NoteModify;