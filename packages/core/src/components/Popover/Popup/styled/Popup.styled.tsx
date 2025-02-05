import { css, fullHeight, fullWidth, styled } from '@medly-components/utils';
import { PopupProps } from '../types';
import { getStyleWithArrow } from './WithArrow';

export const getPosition = ({ placement, distance = '0px' }: Partial<PopupProps>) => {
    switch (placement) {
        case 'top-start':
            return css`
                bottom: calc(100% + ${distance});
                left: 0%;
            `;
        case 'top':
            return css`
                bottom: calc(100% + ${distance});
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'top-end':
            return css`
                bottom: calc(100% + ${distance});
                right: 0%;
            `;
        case 'right-start':
            return css`
                top: 0%;
                left: calc(100% + ${distance});
            `;
        case 'right':
            return css`
                left: calc(100% + ${distance});
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'right-end':
            return css`
                bottom: 0;
                left: calc(100% + ${distance});
            `;
        case 'bottom-start':
            return css`
                top: calc(100% + ${distance});
                left: 0%;
            `;
        case 'bottom':
            return css`
                top: calc(100% + ${distance});
                left: 50%;
                transform: translateX(-50%);
            `;
        case 'bottom-end':
            return css`
                top: calc(100% + ${distance});
                right: 0%;
            `;
        case 'left-start':
            return css`
                right: calc(100% + ${distance});
                top: 0%;
            `;
        case 'left':
            return css`
                right: calc(100% + ${distance});
                top: 50%;
                transform: translateY(-50%);
            `;
        case 'left-end':
            return css`
                right: calc(100% + ${distance});
                bottom: 0%;
            `;
    }
};

export const PopupStyled = styled('div')<PopupProps>`
    z-index: 1000;
    position: absolute;
    background-color: ${({ bgColor }) => bgColor};

    ${props => props.fullWidth && fullWidth()};
    ${props => props.fullHeight && fullHeight()};

    ${props => getPosition({ ...props, distance: props.withArrow ? '1.5rem' : props.distance })}
    ${({ withArrow }) => withArrow && getStyleWithArrow}
`;
