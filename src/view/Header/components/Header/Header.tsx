import * as React from 'react';

import { 
    Wrapper,
    InnerWrapper,
    Title,
    FotterButton,
    ButtonIcon
} from './styled';

export const Header = ({
    handleAdd
}) => (
    <Wrapper>
        <InnerWrapper>
            <FotterButton>
                <ButtonIcon onClick={() => {
                    handleAdd();
                }}>
                    Agregar Card
                </ButtonIcon>
                <ButtonIcon>
                    Agregar List
                </ButtonIcon>
            </FotterButton>
        </InnerWrapper>
    </Wrapper>
)