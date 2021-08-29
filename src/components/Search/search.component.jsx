import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export const Search = ({ value, setValue }) => (
  <Box as="form">
    <InputGroup>
      <InputLeftElement
        height="100%"
        pointerEvents="none"
        children={<Search2Icon color="gray.400" />}
      />

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск"
        variant="flushed"
        size="lg"
      />
    </InputGroup>
  </Box>
)
