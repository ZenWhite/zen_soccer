import { Table as _Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

import { id } from 'utils/id'

export const Table = ({ headers, rows }) => (
  <_Table variant="striped">
    <Thead>
      <Tr>
        {headers.map((item) => (
          <Th key={id('head-item')} {...item} />
        ))}
      </Tr>
    </Thead>

    <Tbody>
      {rows.map((row) => (
        <Tr key={id('row')}>
          {row.map((item) => (
            <Td key={id('row-item')} {...item} />
          ))}
        </Tr>
      ))}
    </Tbody>
  </_Table>
)
