import notion from './index';
import removeHyphens from '@utils/removeHyphens';

const fetchTableById = async (tableId) => {
  const id = removeHyphens(tableId);
  return await notion(`/table/${id}`);
};

export default fetchTableById;
