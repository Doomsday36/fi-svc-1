import React from 'react';
import styled from 'styled-components';

import { useGlobalContext } from '../../context/globalContext'

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    overflow: hidden;
`;

const ListItem = styled.li`
    padding: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    &:last-child {
        border-bottom: none;
    }
`;

const Category = styled.span`
    font-weight: bold;
    color: #333;
`;

const Amount = styled.span`
    color: #666;
`;

function ListView() {
    const { insights } = useGlobalContext()
    const { categoryWiseTotal } = insights
    return (
        <List>
            {Object.keys(categoryWiseTotal).map(key => 
                <ListItem>
                <Category>{key}</Category>
                <Amount>${categoryWiseTotal[key]}</Amount>
                </ListItem>
            )
            
            }
        </List>
    );
}

export default ListView;