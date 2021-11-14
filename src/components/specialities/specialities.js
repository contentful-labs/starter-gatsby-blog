import React from 'react'

import {
  Heading,
  useColorModeValue,
  Container as Cntr,
  Stack,
} from '@chakra-ui/react'
import Container from '../container'
import Speciality from './speciality/speciality'
import * as styles from './specialities.module.css'

const Specialities = (props) => {
  const { specialities } = props
  if (!specialities || !Array.isArray(specialities)) return null
  return (
    <Container>
      <Cntr maxW="7xl" py={16} as={Stack} spacing={12} m="10">
        <Heading color={useColorModeValue('brand.100', 'brand.300')}>
          Onze specialiteiten
        </Heading>
      </Cntr>
      <ul className={styles.specialityList}>
        {specialities.map((speciality) => (
          <Speciality
            title={speciality.title}
            description={speciality.description.description}
            imageData={speciality.image.gatsbyImageData}
            imgUrl="https://www.voestalpine.com/vamf_assets/var/site/storage/images/_aliases/content_img_medium/media-library/pictures/voestalpine-sadef-nv/products/hvac/295659-1-eng-GB/HVAC.jpg"
          />
        ))}
      </ul>
    </Container>
  )
}

export default Specialities
