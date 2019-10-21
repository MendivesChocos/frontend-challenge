import * as React from 'react';
import { connect } from 'react-redux';
import { Card } from './Card';
import { PlaceholderShimmer } from './styled';
import * as selectUser from '../../state/user/selectors';
import { edit, deleteCard } from '../../state/user/actions';

const mapStateToProps = (state, ownerProps) => ({
    user: selectUser.getUser(state)(ownerProps.index),
});

const mapDispatchToProps = dispatch => ({
    handleEdit: (uuid: string) => dispatch(edit(uuid)),
    handleDeleteCard: (uuid: string) => dispatch(deleteCard(uuid)),
});

export const CardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)
