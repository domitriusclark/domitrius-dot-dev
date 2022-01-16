import removeHyphens from 'src/utils/removeHyphens';
import notion from './index';

const fetchPageById = async (pageId) => {
  const id = removeHyphens(pageId);
  const page = await notion(`/page/${id}`);

  return page;
};

export default fetchPageById;
