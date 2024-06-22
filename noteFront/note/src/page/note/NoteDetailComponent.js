import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Space } from 'antd';
import { getOne, deleteOne } from "../../api/NoteApi";

const NoteDetailComponent = () => {
    const { nno } = useParams();
    const [note, setNote] = useState({
        nno: '',
        title: '',
        content: ''
    });
    const navigate = useNavigate();

    
    

    useEffect(() => {
        getOne(nno).then(data => {
                setNote({
                    nno: data.nno,
                    title: data.title,
                    content: data.content
                });
        }).catch(error => {
                console.error("Error fetching note:", error);
        });
    }, [nno]);

    const handleDelete = () => {
        deleteOne(nno).then(() => {
            console.log('Note deleted successfully');
            navigate("/note", { state: { refresh: true } });
        }).catch(error => {
            console.error("Error deleting note:", error);
        });
    };

    const handleModify = () => {
        navigate(`/note/modify/${nno}`);
    };

    if (!note) {
        return <div>Loading...</div>;
    }

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2 p-4">
            <h1>Note Detail</h1>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <Space direction="horizontal">
                    <Button type="primary" onClick={handleModify}>Modify</Button>
                    <Button type="danger" onClick={handleDelete}>Delete</Button>
                </Space>
            </Space>
        </div>
    );
};

export default NoteDetailComponent;
