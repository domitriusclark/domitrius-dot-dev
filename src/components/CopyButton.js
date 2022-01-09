import { Button, useClipboard } from '@chakra-ui/react';

export default function CopyButton({ value, ...props }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button {...props} aria-label="Copy text" role="button" onClick={onCopy}>
      {hasCopied ? 'Copied' : 'Copy'}
    </Button>
  );
}
