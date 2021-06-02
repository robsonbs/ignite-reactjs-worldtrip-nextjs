import Link from 'next/link'
import { Flex, Grid, Icon, IconButton, Image, Link as ChakraLink } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { FiChevronLeft } from 'react-icons/fi'

export function Header() {
  const { asPath, back } = useRouter()
  const notHomePage = asPath !== '/'

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1160}
      h={['50px', '100px']}
      mx="auto"
      align="center"
      justify="center"
      px="12"
    >
      <Grid
        w="100%"
        h="100%"
        mx="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <IconButton
            aria-label="Back page"
            icon={<Icon as={FiChevronLeft} />}
            variant="unstyled"
            fontSize="24"
            justifySelf="start"
            onClick={() => back()}
          />
        )}
        <Link href="/" passHref>
          <ChakraLink justifySelf="center" gridColumn="2">
            <Image src="/img/logo.svg" alt="Worldtrip" />
          </ChakraLink>
        </Link>

      </Grid>
    </Flex>
  )
}