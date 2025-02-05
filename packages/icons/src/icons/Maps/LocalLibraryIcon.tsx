import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalLibraryIconSvg from '../../assets/Maps/local_library_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalLibraryIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalLibraryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalLibraryIcon.Style = SvgIcon;
LocalLibraryIcon.displayName = 'LocalLibraryIcon';

export default LocalLibraryIcon
