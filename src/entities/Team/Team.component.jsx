import { useState } from 'react'
import { Flex, Heading, VStack } from '@chakra-ui/react'

import { endpoints } from 'api/endpoints'
import { useRequest } from 'hooks/useRequest'

import { headers } from './team.shape'

import { Table } from 'components/Table/table.component'
import { Search } from 'components/Search/search.component'

export const Team = () => {
  const [search, setSearch] = useState()

  const [state, getTeams, teams] = useRequest({
    endpoint: endpoints.teams
  })

  return (
    <VStack as="section" spacing="48px" as="section" alignItems="flex-start">
      <Flex justify="space-between" align="flex-end" w="100%">
        <Heading as="h1" size="4xl" children="Команды" />

        <Search value={search} setValue={setSearch} />
      </Flex>

      <Table headers={headers} rows={[]} />
    </VStack>
  )
}
