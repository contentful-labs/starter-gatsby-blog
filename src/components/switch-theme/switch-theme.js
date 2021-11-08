import React from 'react'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      onClick={toggleColorMode}
      color={useColorModeValue('brand.100', 'brand.300')}
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default SwitchTheme
