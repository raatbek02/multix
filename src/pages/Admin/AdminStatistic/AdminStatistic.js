import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $host } from "../../../http";
import { setSecondStatisticsData } from "../../../store/secondStatistics_store";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./AdminStatistic.css";

function AdminStatistic() {
  const dispatch = useDispatch();
  const secondStatisticsData = useSelector(
    (s) => s.secondStatistics_store.secondStatisticsData
  );

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(secondStatisticsData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(setSecondStatisticsData(items));
    //  updateCharacters(items);
  }

  const getData = async () => {
    await $host.get(`en/api/information/`).then(({ data }) => {
      dispatch(setSecondStatisticsData(data));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="adminStatistic">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="adminSidebar__list" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="adminStatistic__content"
            >
              {secondStatisticsData &&
                secondStatisticsData.map((el, index) => (
                  <Draggable key={el.id} draggableId={el.title} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="adminStatistic__item"
                      >
                        <div className="adminStatistic__item--left">
                          <div className="adminStatistic__item--logo">
                            <img src={el.image} alt="" />
                          </div>
                        </div>
                        <div className="adminStatistic__item--right">
                          <div className="adminStatistic__item--title">
                            {el.title}
                          </div>
                          <div className="adminStatistic__item--description">
                            {el.description}
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default AdminStatistic;
