import { Table as _Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

import { id } from 'utils/id'

export const Table = ({ headers, rows }) => (
  <_Table variant="striped">
    <Thead>
      <Tr>
        {headers.map(({ content }) => (
          <Th key={id('head-item')}>{content}</Th>
        ))}
      </Tr>
    </Thead>

    <Tbody>
      {rows.map((row) => (
        <Tr key={id('row')}>
          {row.map(({ content }) => (
            <Td key={id('row-item')}>{content}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </_Table>
)
