import * as React from 'react';
import { UserModel } from '../../model/UserModel';

import {
    Wrapper,
    Avatar,
    Line,
    Title,
    Subtitle,
    ButtonIcon,
    FotterButton
} from './styled';

interface Props {
    handleFollow?: Function;
    handleEdit?: Function;
    handleDeleteCard?: Function;
    user?: UserModel;
}

export const Card: React.SFC<Props> = ({
    user: {
        name,
        email,
        uuid,
        picture
    },
    handleEdit,
    handleDeleteCard
}) => (
    <Wrapper>
        <Avatar src={picture} />
        <Line />
        <Title>{name}</Title>
        <Subtitle>{email}</Subtitle>
        <FotterButton>
            <ButtonIcon onClick={() => {
                handleEdit(uuid);
            }}>
                EDITAR
            </ButtonIcon>
            <ButtonIcon onClick={() => {
                handleDeleteCard(uuid);
            }}>
                ELIMINAR
            </ButtonIcon>
        </FotterButton>
    </Wrapper>
)
