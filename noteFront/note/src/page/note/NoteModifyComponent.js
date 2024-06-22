import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button, Space, message } from 'antd';
import { getOne, putOne } from "../../api/NoteApi";

const { TextArea } = Input;

const NoteModifyComponent = () => {
    const { nno } = useParams();
    const [note, setNote] = useState({
        nno: '',
        title: '',
        content: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            message.error('You must be logged in to modify notes.');
            navigate('/login');
            return;
        }

        console.log(`Fetching note with id: ${nno}`); // 로그 추가
        getOne(nno, token).then(data => {
            console.log(`Fetched note: `, data); // 로그 추가
            setNote({
                nno: data.nno,
                title: data.title,
                content: data.content
            });
        }).catch(error => {
            console.error("Error fetching note:", error); // 에러 로그 추가
        });
    }, [nno, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
        console.log('Note state updated:', note); // 상태 업데이트 확인
    };

    const handleUpdate = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            message.error('You must be logged in to modify notes.');
            navigate('/login');
            return;
        }

        if (note) {
            console.log('Updating note:', note); // 로그 추가
            putOne(note, token).then(() => {
                console.log('Note updated successfully'); // 로그 추가
                navigate("/note", { state: { refresh: true } });
            }).catch(error => {
                console.error("Error updating note:", error); // 에러 로그 추가
            });
        }
    };

    if (!note.title && !note.content) {
        return <div>Loading...</div>;
    }

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2 p-4">
            <h1>Modify Note</h1>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Input
                    placeholder="Title"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                />
                <TextArea
                    rows={4}
                    placeholder="Content"
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                />
                <Button type="primary" onClick={handleUpdate}>Update</Button>
            </Space>
        </div>
    );
};

export default NoteModifyComponent;
