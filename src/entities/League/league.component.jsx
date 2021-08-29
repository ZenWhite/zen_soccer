import { useState } from 'react'
import { Flex, Heading, VStack } from '@chakra-ui/react'

import { headers } from './league.shape'

import { Table } from 'components/Table/table.component'
import { Search } from 'components/Search/search.component'

export const League = () => {
  const [search, setSearch] = useState()

  return (
    <VStack as="section" spacing="48px" as="section" alignItems="flex-start">
      <Flex justify="space-between" align="flex-end" w="100%">
        <Heading as="h1" size="4xl" children="Лиги" />

        <Search value={search} setValue={setSearch} />
      </Flex>

      <Table headers={headers} rows={[]} />
    </VStack>
  )
}
