import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) => {
    return param ? parseInt(param) : defaultValue;
}

const useCustomMove = () => {
    const [queryParams] = useSearchParams();
    const page = getNum(queryParams.get('page'), 1);
    const size = getNum(queryParams.get('size'), 10);

    const defaultParams = createSearchParams({ page, size }).toString();
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    const moveToList = (pageParam) => {
        const pageNum = getNum(pageParam?.page, page);
        const sizeNum = getNum(pageParam?.size, size);
        const queryStr = createSearchParams({ page: pageNum, size: sizeNum }).toString();
        setRefresh(prev => !prev);
        navigate({ pathname: "../note", search: queryStr });
    }

    const moveToModify = (nno) => {
        navigate({ pathname: `../modify/${nno}`, search: defaultParams });
    }

    const moveToRead = (nno) => {
        navigate({ pathname: `../note/${nno}`, search: defaultParams });
    }

    return { moveToList, page, size, moveToModify, moveToRead, refresh };
}

export default useCustomMove;
