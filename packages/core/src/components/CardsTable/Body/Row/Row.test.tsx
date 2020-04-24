import { render } from '@test-utils';
import React from 'react';
import { Row } from './Row.styled';

describe('Row', () => {
    it('should render row properly', () => {
        const { container } = render(
            <tbody>
                <Row withWhiteBackground={true}>
                    <td>Demo</td>
                </Row>
            </tbody>
        );
        expect(container).toMatchSnapshot();
    });
});