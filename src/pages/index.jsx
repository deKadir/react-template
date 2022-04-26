import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllRoutes from 'constants/routes';
export default function Pages() {
  return (
    <Routes>
      {AllRoutes.map((route, index) => (
        <Route path={route.path} element={<route.component />} key={index} />
      ))}
      <Route />
    </Routes>
  );
}
