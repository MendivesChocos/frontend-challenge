import { connect } from 'react-redux';
import { selectUser } from '../../../userList';
import { Header } from './Header';
import { actionsUser } from '../../../userList'

const mapStateToProps = state => ({
    totalFollowing: selectUser.getTotalFollowing(state)
});

const mapDispatchToProps = dispatch => ({
    handleAdd: () => dispatch(actionsUser.fetchAddUser())
});

export const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)