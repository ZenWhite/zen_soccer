import { useEffect, useState } from 'react'
import { Flex, Heading, VStack, Spinner } from '@chakra-ui/react'

import { endpoints } from 'api/endpoints'
import { useRequest } from 'hooks/useRequest'

import { headers } from './league.shape'

import { Table } from 'components/Table/table.component'
import { Search } from 'components/Search/search.component'

import { transform } from './league.helper'

export const League = () => {
  const [search, setSearch] = useState('')

  const [state, getLeagues, leagues] = useRequest({
    endpoint: endpoints.leagues
  })

  useEffect(() => {
    getLeagues()
  }, [])

  return (
    <VStack as="section" spacing="48px" as="section" alignItems="flex-start">
      <Flex justify="space-between" align="flex-end" w="100%">
        <Heading as="h1" size="4xl" children="Лиги" />

        <Search value={search} setValue={setSearch} />
      </Flex>

      {state.loading ? (
        <Spinner color="orange.300" size="xl" />
      ) : (
        <Table
          headers={headers}
          rows={
            leagues
              ? leagues.competitions
                  .filter((league) =>
                    league.name.match(new RegExp(search, 'gi'))
                  )
                  .map(transform)
              : []
          }
        />
      )}
    </VStack>
  )
}
