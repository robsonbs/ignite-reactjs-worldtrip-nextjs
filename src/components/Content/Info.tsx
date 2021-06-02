import { Flex, Heading, Icon, Text, Tooltip } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'

export function Info() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          fontWeight="semibold"
          color="yellow.500"
        >
          50
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.900">
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          fontWeight="semibold"
          color="yellow.500"
        >
          60
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.900">
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          fontWeight="semibold"
          color="yellow.500"
        >
          27
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.900">
          cidades +100
          <Tooltip
            hasArrow
            label="Londres, Paris, Roma, Praga, Amsterdã"
            bg="gray.900"
          >
            <span>
              <Icon
                ml="1"
                cursor="pointer"
                as={RiInformationLine}
                color="gray.500"
                transition="0.2s"
                _hover={{ color: 'gray.900' }}
                w="16px"
                h="16px"
              />
            </span>
          </Tooltip>
        </Text>
      </Flex>
    </Flex>
  )
}
