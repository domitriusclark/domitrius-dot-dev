import { Flex } from '@chakra-ui/core';

import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';

import ContentBox from '@components/ContentBox';
import Search from '@components/Search';
import { Chakra } from '@components/Chakra';

export default function SearchPage({ allMdx }) {
  const [filteredSeeds, setFilteredSeeds] = React.useState(allMdx);

  const handleFilter = (data) => {
    setFilteredSeeds(data);
  };

  return (
    <Chakra evaluateThemeLazily>
      <Flex>
        {/* Content Area + Input + Tag filter */}
        <Flex direction="column" justify="center" alignItems="center" w="100%">
          <Search seeds={allMdx} handleFilter={handleFilter} />
          <Flex direction="column" justify="space-evenly" h="80vh">
            {filteredSeeds &&
              filteredSeeds.map((seed) => (
                <ContentBox key={seed.slug} seed={seed} />
              ))}
          </Flex>
        </Flex>
      </Flex>
    </Chakra>
  );
}

export function getStaticProps() {
  const files = glob.sync('src/seeds/*.mdx');

  const allMdx = files.map((file) => {
    const split = file.split('/');
    const filename = split[split.length - 1];
    const slug = filename.replace('.mdx', '');

    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource);

    return {
      slug,
      ...data,
    };
  });

  return {
    props: {
      allMdx,
    },
  };
}
