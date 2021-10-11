import {
  Heading,
  Flex,
  IconButton,
  Tooltip,
  Image,
  useClipboard,
} from '@chakra-ui/react';
import { FaExpand, FaLink } from 'react-icons/fa';
import { useImage } from 'use-cloudinary';

function ImageCard({ src }) {
  const { generateImageUrl } = useImage('mdnextjs');

  const url = generateImageUrl({
    delivery: {
      publicId: src,
      storageType: 'fetch',
      secure: true,
    },
    transformation: [
      {
        format: 'auto',
        quality: 'auto',
      },
    ],
  });

  const { onCopy, hasCopied } = useClipboard(url);

  return (
    <Flex
      justify="flex-end"
      h="200px"
      w="400px"
      borderRadius="4px"
      backgroundImage={url}
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
      boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
    >
      <Flex direction="column" w="20%" justify="space-between" align="flex-end">
        <Flex sx={{ gap: '4px' }} mt="8px" mr="8px" justify="right">
          <Tooltip placement="right" hasArrow label={url}>
            <IconButton icon={<FaLink />} onClick={onCopy} />
          </Tooltip>
        </Flex>

        <IconButton
          w="inherit"
          justifySelf="right"
          icon={<FaExpand />}
          mr="8px"
          mb="8px"
        />
      </Flex>
    </Flex>
  );
}

export default function MediaCollection({ media }) {
  return (
    <>
      <Flex direction="column" w="100%" sx={{ gap: '12px' }}>
        {media.length > 0 ? (
          media.map((image) => <ImageCard src={image.url} />)
        ) : (
          <Heading
            as="h1"
            size="lg"
            mt={8}
            alignSelf="center"
            justifySelf="center"
          >
            No images in this folder
          </Heading>
        )}
      </Flex>
    </>
  );
}
