import { Text as ChakraText } from '@chakra-ui/react';
import escapeHtml from 'escape-html';
import { Text } from 'slate';

function removeSpecialCharacters(str) {
  var lower = str.toLowerCase();
  var upper = str.toUpperCase();

  var res = '';
  for (var i = 0; i < lower.length; ++i) {
    if (lower[i] != upper[i] || lower[i].trim() === '') res += str[i];
  }
  return res;
}

const serialize = (node) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    return string;
  }

  const children = node.children.map((n) => serialize(n)).join('');

  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`;
    case 'paragraph':
      return (
        <ChakraText color="red">{removeSpecialCharacters(children)}</ChakraText>
      );
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return children;
  }
};

export default serialize;
