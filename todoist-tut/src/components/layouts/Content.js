import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from "../Tasks";

export const Content = (props) => {
    return (
        <section>
            <Sidebar/>
            <Tasks />
        </section>
    );
}