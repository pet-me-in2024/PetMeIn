import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css_doh/reactcalendar.css";
import moment from "moment";
import { Image } from "react-bootstrap";

export default function ReactCalendar(props) {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState(["2024-05-27", "2024-05-22", "2024-05-29"]);
  return (
    <div>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")}
        value={value}
        showNeighboringMonth={false}
        // className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div
                  className="dot-container"
                  onClick={() => props.setModalOpen(true)}
                >
                  <div className="dot">강아지</div>
                  <div className="dot">멍멍이</div>
                  <div className="dot">댕댕이</div>
                </div>
              </>
            );
          }
        }}
      />
    </div>
  );
}
