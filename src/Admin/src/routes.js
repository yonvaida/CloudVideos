import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

//const AddMovie = React.lazy(() => import('./Pages/AddMovies'));
const AllMovies = React.lazy(() => import('./Pages/AllMovies'));
const Settings = React.lazy(() => import('./Pages/SettingsPage/Settings'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/all_movies', exact: true, name: 'Basic Button', component: AllMovies },
    { path: '/settings', exact: true, name: 'Basic Button', component: Settings }
];

export default routes;