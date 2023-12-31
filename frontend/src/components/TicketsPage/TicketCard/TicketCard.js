import React, { useEffect } from "react";

import classes from "./TicketCard.module.css";

import { useEventImagesContext } from "../../../hooks/EventImagesContext";
import { formatTime, formatDate } from "../../../lib/Utils";

import ImageIcon from "../../../assets/svg/ImageIcon";
import { usePageContext, Pages } from "../../../hooks/PageContext";

const TicketCard = ({ ticket }) => {
  const { setActivePage } = usePageContext();
  const { eventImages, fetchEventImage } = useEventImagesContext();

  const { title, startDate, endDate, location, image } = ticket.event;

  const onChooseTicket = () => {
    setActivePage({ type: Pages.ticket, props: { ticket: ticket } });
  };

  // load image
  useEffect(() => {
    if (image) {
      fetchEventImage(image);
    }
  }, [image, fetchEventImage]);

  return (
    <div className={classes["ticket-card"]} onClick={onChooseTicket}>
      {eventImages[image] ? (
        <img src={eventImages[image]} alt="" />
      ) : (
        <ImageIcon />
      )}

      <div className={classes["ticket-card-info"]}>
        <h3>{title}</h3>

        <div className={classes["ticket-card-info-element"]}>
          <h4>Start time</h4>
          <div className={classes["ticket-card-info-element-container"]}>
            <div className={classes["ticket-card-info-element-container-item"]}>
              <h3>{formatDate(startDate)}</h3>
            </div>

            <div className={classes["ticket-card-info-element-container-item"]}>
              <h3>{formatTime(startDate)}</h3>
            </div>
          </div>
        </div>

        <div className={classes["ticket-card-info-element"]}>
          <h4>End time</h4>
          <div className={classes["ticket-card-info-element-container"]}>
            <div className={classes["ticket-card-info-element-container-item"]}>
              <h3>{formatDate(endDate)}</h3>
            </div>

            <div className={classes["ticket-card-info-element-container-item"]}>
              <h3>{formatTime(endDate)}</h3>
            </div>
          </div>
        </div>

        <div className={classes["ticket-card-info-element"]}>
          <h4>Location</h4>
          <h3>{location}</h3>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
