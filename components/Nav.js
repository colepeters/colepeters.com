import contents from './contents'
import { Box, List, Text, NavLink } from './index'

export default function Nav() {
  return (
    <Box as='nav' my={[4, 5]}>
      <List reset pl={0} m={0} fontSize={0}>
        {contents.map(section => (
          <Text as='li' display='flex' mb={4} key={section.name}>
            <Box width={['13ch', null, '16ch']} pr={2}>
              <Text
                as='span'
                letterSpacing='0.1em'
                color='#777'
                fontSize='0.8em'
                fontWeight='500'
                style={{ textTransform: 'uppercase' }}
              >
                {section.name}
              </Text>
            </Box>
            <Box flex='1'>
              <List reset pl={0} m={0}>
                {section.pages.map(pg => (
                  <Text as='li' mb={1} key={pg.name}>
                    <NavLink href={pg.href}>{pg.name}</NavLink>
                  </Text>
                ))}
              </List>
            </Box>
          </Text>
        ))}
      </List>
    </Box>
  )
}
