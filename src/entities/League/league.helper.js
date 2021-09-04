import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { row } from 'components/Table/table.helper'

const props = ['name', 'place', 'start', 'end']

export const transform = (data) =>
  row(
    props,
    {
      ...data,
      place: data?.area?.name,
      start: data?.currentSeason?.startDate,
      end: data?.currentSeason?.endDate
    },
    [
      {
        children: (
          <Link to={`/league/${data?.id}`}>
            <Button size="md" variant="outline" children="Подробнее" />
          </Link>
        )
      }
    ]
  )
