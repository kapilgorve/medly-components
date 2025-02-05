import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TimerIconSvg from '../../assets/Image/timer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TimerIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TimerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TimerIcon.Style = SvgIcon;
TimerIcon.displayName = 'TimerIcon';

export default TimerIcon
