// tslint:disable:max-line-length
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DotsBouncingLoaderSvg from '../assets/DotsBouncingLoader.svg';
import SvgLoader, { Props } from '../SvgLoader';

const DotsBouncingLoader: React.FunctionComponent<Props> & WithStyle = props => (
    <SvgLoader {...props}>
        <DotsBouncingLoaderSvg {...props} width="1em" height="1em" />
    </SvgLoader>
);

DotsBouncingLoader.Style = SvgLoader;
DotsBouncingLoader.displayName = 'DotsBouncingLoader';
export default DotsBouncingLoader;