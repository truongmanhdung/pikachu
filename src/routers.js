import React from "react";
import StartView from "./components/start";
import Game from "./components/game";

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <StartView/>,
    },
    {
        path: "/game",
        exact: true,
        component: () => <Game/>,
    },


];

export default routes;
