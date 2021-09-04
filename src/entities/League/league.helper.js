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
    [{ children: 'Подробнее' }]
  )