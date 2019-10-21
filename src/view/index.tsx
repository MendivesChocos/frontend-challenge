import * as React from 'react';
import { UserListFeature } from '../view/userList';
import { HeaderFeature } from '../view/Header';

export const App = () => (
    <div>
        <HeaderFeature />
        <UserListFeature />
    </div>
);