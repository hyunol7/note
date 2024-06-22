import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import NoteList from "../page/note/NoteList";
import AddPage from "../page/note/AddPage";

import NoteModify from "../page/note/NoteModify";
import NoteDetail from "../page/note/NoeDetail";
import Login from "../page/note/Login";
import RegisterPage from "../page/note/RegisterPage";
import LoginPage from "../page/note/LoginPage";


const noteRouter = () => {
  return [
    {
      path: "",
      element: <Navigate replace to="/note" />
    },
    {
      path: "/note",
      element: <Suspense fallback={<div>Loading...</div>}><NoteList /></Suspense>
    },
    {
      path: "/note/write",
      element: <Suspense fallback={<div>Loading...</div>}><AddPage /></Suspense>
    },
    {
      path: "/note/:nno",
      element: <Suspense fallback={<div>Loading...</div>}><NoteDetail /></Suspense>
    },
    {
      path: "/note/modify/:nno",
      element: <Suspense fallback={<div>Loading...</div>}><NoteModify /></Suspense>
    },
    {
      path: "/user/login",
      element: <Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>
    }
    
  
  ];
};

export default noteRouter;
