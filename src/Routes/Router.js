import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { configRoutes } from './ConfigRoutes';
import { MAIN_LAYOUT, NO_LAYOUT } from '../Constants/Layout';
import NotFound from '../Features/NotFound/NotFound';
import MainLayout from '../Layout/MainLayout';


const layouts = {
  [NO_LAYOUT]: Fragment,
  [MAIN_LAYOUT]: Fragment,
};

function Router(props) {
    const routes = configRoutes;
    return (
        <Routes>
            {routes.map((route, index) => {
                let Component = route.component;
                let Layout = layouts[route.layout] || MainLayout;
                Component = (
                    <Layout>
                        <route.component />
                    </Layout>
                );
                return <Route key={index} path={route.path} element={Component} />;
            })}
             <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;