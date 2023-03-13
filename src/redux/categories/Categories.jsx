import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from './categoriesSlice';
import classes from './Categories.module.css';

const CategoriesContent = () => {
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className={classes.status}>{categories}</h1>
      <button
        type="button"
        className={classes.check__btn}
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        check status
      </button>
    </div>
  );
};

export default CategoriesContent;
