import { useState } from "react";
import { postAdd } from "../../api/NoteApi";
import { Input, Button, Space } from 'antd';
import { useNavigate } from "react-router-dom";


const { TextArea } = Input;

const AddComponent = () => {

    const navigate = useNavigate();

    const initState = {
        title: '',
        content: '',
        modDate: ''
    };

    const [note, setNote] = useState({ ...initState });

    const handleChangeNote = (e) => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    };

    const handleClickAdd = () => {
        postAdd(note).then(data => {
            setNote({ ...initState });
        }).catch(e => {
            console.log(e);
        });
            navigate(`/note`)
    };

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <h1>Note</h1>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <div>
                    <div className="w-1/5 p-6 text-right font-bold">제목</div>
                    <Input
                        placeholder="Title"
                        allowClear
                        name="title"
                        value={note.title}
                        onChange={handleChangeNote}
                    />
                </div>
                <div>
                    <div className="w-1/5 p-6 text-right font-bold">내용</div>
                    <TextArea
                        rows={4}
                        placeholder="Content"
                        allowClear
                        name="content"
                        value={note.content}
                        onChange={handleChangeNote}
                    />
                </div>
                <div className="flex justify-end">
                    <Button type="primary" onClick={handleClickAdd}>ADD</Button>
                </div>
            </Space>
        </div>
    )
}

export default AddComponent;
