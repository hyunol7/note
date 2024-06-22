import React, { useEffect, useState } from "react";
import { Card, Space, Button, Pagination, message } from 'antd';
import useCustomMove from "../../hooks/UseCustomMove";
import { getList } from "../../api/NoteApi";
import { useNavigate } from "react-router-dom";

const NoteListComponent = () => {
    const [serverData, setServerData] = useState([]);
    const { refresh, moveToRead } = useCustomMove();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // JWT 토큰 삭제
        message.success('로그아웃 하였습니다');
        navigate('/login');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            message.error('로그인을 해주세요.');
            navigate('/user/login');
            return;
        }

        getList().then(recData => {
            console.log(recData);
            setServerData(recData.reverse()); // 최신 글이 위로 오도록 역순 정렬
        }).catch(error => {
            console.error("Error fetching notes:", error);
        });
    }, [navigate, refresh]);

    const handleAdd = () => {
        navigate(`/note/write`);
    };

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
            <div className="flex justify-between items-center">
                <Button type="primary" onClick={handleAdd}>글쓰기</Button>
                <Button type="default" onClick={handleLogout}>로그아웃</Button>
            </div>
            <Space
                direction="vertical"
                size="middle"
                style={{ display: 'flex' }}
            >
                {serverData.map(note => (
                    <Card
                        key={note.nno}
                        title={note.title}
                        size="small"
                        onClick={() => moveToRead(note.nno)}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>{note.content}</p>
                    </Card>
                ))}
            </Space>
            <Pagination current={current} onChange={onChange} total={50} />
        </div>
    );
}

export default NoteListComponent;
