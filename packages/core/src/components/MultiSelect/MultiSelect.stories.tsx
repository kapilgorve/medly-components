import { SelectTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { LabelPositions } from '../Label/types';
import { MultiSelect } from './MultiSelect';

const labelPosition: LabelPositions[] = ['top', 'bottom', 'left', 'right'];

const options = [
    { value: 'all', label: 'All' },
    { value: 'medly pharmacy', label: 'Medly Pharmacy' },
    { value: 'kala pharmacy', label: 'Kala Pharmacy' },
    {
        label: 'Group',
        value: [
            { value: 'a pharmacy', label: 'a Pharmacy' },
            { value: 'b pharmacy', label: 'b Pharmacy' },
            { value: 'c pharmacy', label: 'c Pharmacy' },
            { value: 'd pharmacy', label: 'd Pharmacy' }
        ]
    }
];

export const ThemeInterface = (props: SelectTheme): any => null;

export const Basic = () => (
    <MultiSelect
        options={options}
        defaultValues={['medly pharmacy', 'a pharmacy']}
        onChange={action('Value Changed')}
        disabled={boolean('Disabled', false)}
        showChips={boolean('Show Chips', true)}
        showCheckbox={boolean('Show Checkbox', true)}
        fullWidth={boolean('Full Width', true)}
        required={boolean('Required', false)}
        label={text('Label', 'Pharmacy')}
        placeholder="Select Pharmacy"
        description={text('Description', 'We will show reports based on Pharmacy')}
        labelPosition={select('Label Position', labelPosition, 'left')}
    />
);