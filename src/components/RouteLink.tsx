import { Link } from "react-router-dom";
import styled from 'styled-components';

export const LinkRoute = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 1rem!important;
`;



export default function RouteLink({route , text} : {route: string, text: string}) {
    return (
        <LinkRoute to={route} className="nav-link">
        {text}
        </LinkRoute>
    );
}