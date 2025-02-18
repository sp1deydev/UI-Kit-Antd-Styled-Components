import Button from "../Features/Button/Button";
import Credit from "../Features/Credit/Credit";
import Overview from "../Features/Overview/Overview";
import Typography from "../Features/Typography/Typography";

export const configRoutes = [
    {
        path: '/',
        component: Overview,
    },
    {
        path: '/button',
        component: Button,
    },
    {
        path: '/credit',
        component: Credit,
    },
    {
        path: '/typography',
        component: Typography,
    },

]