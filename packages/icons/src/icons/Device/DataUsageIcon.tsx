import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DataUsageIconSvg from '../../assets/Device/data_usage_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DataUsageIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DataUsageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DataUsageIcon.Style = SvgIcon;
DataUsageIcon.displayName = 'DataUsageIcon';

export default DataUsageIcon
