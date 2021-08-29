import { Flex, Heading, VStack } from '@chakra-ui/react'

import { table } from './league.shape'

import { Table } from 'components/Table/table.component'

export const League = () => (
  <VStack as="section" spacing="48px" as="section" alignItems="flex-start">
    <Flex justify="space-between" align="flex-end">
      <Heading as="h1" size="4xl" children="Лиги" />

      {/* search */}
    </Flex>

    <Table {...table} />
  </VStack>
)
