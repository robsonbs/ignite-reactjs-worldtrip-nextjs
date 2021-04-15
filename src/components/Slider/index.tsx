import Link from 'next/link'

import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

export function Slider() {
  return (
    <Box width="90%" h={[250, 450]} maxWidth={1240} mx="auto" mb="10">
      <Swiper
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000
        }}
      >
        <SwiperSlide>
          <Box width="100%" h={450} bg="gray.900" pos="relative" zIndex="1">
            <Image
              src="img/continents/europe.jpg"
              pos="absolute"
              width="100%"
              height="100%"
              objectFit="cover"
              zIndex="-1"
            />

            <Flex
              direction="column"
              w="100%"
              h="100%"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Link href="/continent/europe">
                <a>
                  <Heading color="gray.50" fontWeight="bold" size="2xl" mb="4">
                    Europa
                  </Heading>
                  <Text
                    as="span"
                    color="gray.100"
                    fontWeight="bold"
                    fontSize={['0.8rem', '1xl', '2xl']}
                  >
                    o continente mais antigo.
                  </Text>
                </a>
              </Link>
            </Flex>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}