import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { IconType } from "react-icons";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'

interface Props {
    platforms: Platform[]
}

const PlatformiconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintentendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

  return (
    <HStack marginY={1}>
    {platforms.map((platform) => 
    <Icon as={iconMap[platform.slug]} color='gray.500'></Icon>)}
    </HStack>
  )
}

export default PlatformiconList