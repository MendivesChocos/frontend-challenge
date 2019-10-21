import { UserListContainer } from './components/UserList';
import * as selectUser from './state/user/selectors';
import { user } from './state/user/reducer';
import * as actionsUser from './state/user/actions';

export {
    UserListContainer as UserListFeature,
    selectUser,
    actionsUser,
    user as userReducer
}