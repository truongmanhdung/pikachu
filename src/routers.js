import React from "react";
import Content from "./components/content/index";
import ShowStart from "./components/showstart/index"
import Level from "./components/level";
import Help from "./components/help";
const routes = [
    {
        path: "/startgame",
        exact: false,
        component: () => <Content/>,
    },
    {
        path: "/",
        exact: true,
        component: () => <ShowStart/>,
    },
    {
        path: "/startlevel",
        exact: false,
        component: () => <Level/>,
    },
    {
        path: "/help",
        exact: false,
        component: () => <Help/>,
    },




];

export default routes;
