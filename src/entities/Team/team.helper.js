import { Button } from '@chakra-ui/react'

import { row } from 'components/Table/table.helper'

const props = ['shortName', 'place', 'clubColors', 'founded']

export const transform = (data) =>
  row(props, { ...data, place: data?.area?.name }, [
    { children: <Button size="md" variant="outline" children="Подробнее" /> }
  ])
