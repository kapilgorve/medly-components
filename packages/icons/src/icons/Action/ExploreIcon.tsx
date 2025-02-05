import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ExploreIconSvg from '../../assets/Action/explore_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ExploreIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExploreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ExploreIcon.Style = SvgIcon;
ExploreIcon.displayName = 'ExploreIcon';

export default ExploreIcon
