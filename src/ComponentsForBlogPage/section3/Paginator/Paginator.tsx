import React, { useCallback} from "react";
import TextAnd_Icon from "../../../TextAnd_Icon/TextAnd_Icon";
import classPaginator from "./css/classPaginator.module.css";
import { cards } from "../cardsSection3";
import PaginatorsHooks from "../../../MyHooks/PaginatorHooks";

const Paginator = React.memo(() => {

  const { setNum } = PaginatorsHooks();
  
  const handlePageChange = useCallback(
    (direction: number) => {
      setNum((num) => {
        if (
          (direction == -1 && num == 0) ||
          (direction == 1 && num == cards.length - 1)
        ) {
          return num;
        }

        return num + direction;
      });
    },
    [setNum],
  );

  return (
    <>
      <div className={classPaginator.paginator}>
        <TextAnd_Icon IMG="arrowLeft" place="left">
          <span onClick={() => handlePageChange(-1)}>New Post</span>
        </TextAnd_Icon>
        <TextAnd_Icon IMG="arrowRight" place="right">
          <span onClick={() => handlePageChange(1)}>Old Post</span>
        </TextAnd_Icon>
      </div>
    </>
  );
});
export default Paginator;
