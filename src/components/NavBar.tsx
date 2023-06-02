import { ColorModeScript, HStack, Image} from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image></Image>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar