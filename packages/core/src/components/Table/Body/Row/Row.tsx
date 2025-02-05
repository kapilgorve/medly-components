import React, { useCallback, useContext, useMemo, useState } from 'react';
import { GroupCell } from '../../GroupCell';
import { getGridTemplateColumns } from '../../helpers';
import { TablePropsContext } from '../../TableProps.context';
import { TableColumnConfig } from '../../types';
import Cell from '../Cell';
import ExtendedRowCell from '../Cell/ExtendedRowCell';
import RowActionsCell from '../Cell/RowActionsCell';
import * as Styled from './Row.styled';
import { Props } from './types';

export const Row: React.FC<Props> = React.memo(props => {
    const [isExpanded, setExpansionState] = useState(false),
        { id, data, showShadowAfterFrozenElement, selectedRowIds, onRowSelection, addColumnMaxSize, ...restProps } = props,
        {
            columns,
            isLoading,
            onRowClick,
            rowClickDisableKey,
            rowSelectionDisableKey,
            isRowSelectable,
            isRowExpandable,
            isGroupedTable,
            showRowWithCardStyle,
            size: tableSize,
            expandedRowComponent
        } = useContext(TablePropsContext);

    const isRowSelected = useMemo(() => !isLoading && selectedRowIds.includes(id), [id, isLoading, selectedRowIds]),
        isRowClickDisabled = useMemo(() => data[rowClickDisableKey], [data, rowClickDisableKey]),
        isRowSelectionDisabled = useMemo(() => data[rowSelectionDisableKey], [data, rowSelectionDisableKey]),
        handleRowSelection = useCallback(() => onRowSelection(id), [id]),
        handleExpansionIconClick = useCallback(() => setExpansionState(val => !val), []),
        handleRowClick = useMemo(
            () =>
                !isLoading
                    ? onRowClick && !isRowClickDisabled
                        ? () => onRowClick(data)
                        : isRowExpandable
                        ? handleExpansionIconClick
                        : undefined
                    : undefined,
            [isLoading, onRowClick, isRowClickDisabled, isRowExpandable, handleExpansionIconClick]
        );

    const getCells = useCallback(
        (rowData: any = {}, configs: TableColumnConfig[] = columns, field = '') =>
            configs.reduce((cells, config) => {
                const fieldName = `${field && `${field}.`}${config.field}`;

                return config.field === 'row-actions'
                    ? cells
                    : [
                          ...cells,
                          config.children ? (
                              <GroupCell
                                  as={field ? 'div' : 'td'}
                                  key={config.field}
                                  hidden={config.hidden}
                                  gridTemplateColumns={getGridTemplateColumns(config.children)}
                              >
                                  {getCells(rowData[config.field], config.children, config.field)}
                              </GroupCell>
                          ) : (
                              <Cell
                                  rowId={id}
                                  key={fieldName}
                                  config={config}
                                  as={field ? 'div' : 'td'}
                                  isLoading={isLoading}
                                  rowData={rowData}
                                  data={rowData[config.field]}
                                  addColumnMaxSize={addColumnMaxSize}
                                  isRowClickDisabled={isRowClickDisabled}
                                  dottedFieldName={fieldName}
                                  tableSize={tableSize}
                              />
                          )
                      ];
            }, []),
        [id, data, isLoading, columns, addColumnMaxSize, isRowClickDisabled, tableSize]
    );

    return (
        <>
            <Styled.Row
                {...restProps}
                disabled={isRowClickDisabled}
                onClick={handleRowClick}
                isSelected={isRowSelected}
                isExpanded={isExpanded}
                isExpandable={isRowExpandable}
                showRowWithCardStyle={showRowWithCardStyle}
                gridTemplateColumns={getGridTemplateColumns(columns)}
            >
                {(isRowSelectable || isRowExpandable) && (
                    <RowActionsCell
                        tableSize={tableSize}
                        isLoading={isLoading}
                        isRowExpanded={isExpanded}
                        isGroupedTable={isGroupedTable}
                        isRowExpandable={isRowExpandable}
                        isRowSelected={isRowSelected}
                        isRowSelectable={isRowSelectable}
                        isRowSelectionDisabled={isRowSelectionDisabled}
                        onRowSelection={handleRowSelection}
                        onRowExpansionIconClick={handleExpansionIconClick}
                        showShadowAtRight={showShadowAfterFrozenElement}
                    />
                )}
                {getCells(data)}
                {isRowExpandable && expandedRowComponent && (
                    <ExtendedRowCell
                        rowId={id}
                        rowData={data}
                        tableSize={tableSize}
                        isRowExpanded={isExpanded}
                        isRowSelected={isRowSelected}
                        isGroupedTable={isGroupedTable}
                        expandedRowComponent={expandedRowComponent}
                        isRowClickDisabled={isRowClickDisabled}
                        showShadowAtRight={showShadowAfterFrozenElement}
                    />
                )}
            </Styled.Row>
        </>
    );
});
Row.displayName = 'Row';
