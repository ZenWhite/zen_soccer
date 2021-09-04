import { row } from 'components/Table/table.helper'

const props = ['shortName', 'place', 'clubColors', 'founded']

export const transform = (data) =>
  row(props, { ...data, place: data?.area?.name }, [{ children: 'Подробнее' }])
