import { Avatar, Button, Tooltip } from '@chakra-ui/react';

export default function AvatarButtonWithTooltip({
  image,
  tooltip,
  selectedCharacter,
  setSelectedCharacter,
}) {
  return (
    <Tooltip label={tooltip} hasArrow>
      <Button
        w="38px"
        h="38px"
        borderRadius="99px"
        bg="white"
        onClick={() => setSelectedCharacter(tooltip)}
      >
        <Avatar
          name={tooltip}
          showBorder={true}
          borderColor={selectedCharacter === tooltip ? 'blue.200' : 'black'}
          src={image}
          bg="white"
          size="md"
        />
      </Button>
    </Tooltip>
  );
}
