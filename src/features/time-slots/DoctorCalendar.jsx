import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTimeSlots } from "../../services/apiTimeSlots";

import Calendar from "react-calendar";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import AddTimeSlot from "./AddTimeSlot";
import DoctorTimeTable from "./DoctorTimeTable";
import DoctorTimeTableOperations from "./DoctorTimeTableOperations";
import Row from "../../ui/Row";

const StyledContainer = styled.div`
  display: flex;
  height: 8rem;
  gap: 2rem;
  margin: 4rem 0 8rem 0;
  justify-content: space-between;
  align-items: center;
`;

const StyledBlock = styled.div`
  display: inline-block;
  padding: 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  background-color: var(--color-brand-900);
  /* filter: blur(0.1rem); */
`;

const StyledSpan = styled.span`
  display: inline-block;
`;

const StyledTimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledCalendar = styled.div`
  //navigation styles

  .react-calendar__navigation {
    display: flex;
    gap: 0.2rem;
  }

  .react-calendar__navigation__label {
    font-weight: bold;
  }

  .react-calendar__navigation__arrow {
    flex-grow: 0.333;
  }

  //lables style
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    padding: 2rem;
  }

  //button styles
  .react-calendar {
    width: 100% !important;
  }

  button {
    /* margin: 3px; */
    background-color: var(--color-brand-500);
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 0;

    &:hover {
      background-color: var(--color-brand-700);
    }

    &:active {
      background-color: var(--color-brand-900);
    }
  }

  //day grid styles
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 10rem 10rem 10rem 10rem 10rem;
    grid-gap: 0.5rem;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  //neighbor month & weekend styles
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.3;
  }
  .react-calendar__month-view__days__day--weekend {
    color: var(--color-brand-900);
  }

  //active day styles
  .react-calendar__tile--range {
    box-shadow: 0 0 6px 2px var(--color-brand-700);
  }
  .react-calendar__tile--now {
    border: 5px solid var(--color-brand-600);
    /* background-color: blue !important; */
  }

  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    &.react-calendar__year-view__months {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  .react-calendar__month-view__days__day--highlighted {
    background-color: var(--color-brand-900);
    color: white;
  }

  //other views

  /* .calender-body {
    background-color: #e7f3f8 !important;
  }

  .react-calendar__tile--active {
    background-color: #fbbc13 !important;
  }

  .today {
    border: 2px solid #1f1b13 !important;
  }

  .react-calendar_month-viewdays_day {
    margin: 12px !important;
  }

  .react-calendar__tile--active:enabled:hover {
    background-color: #fbbc13 !important;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #1f1b13 !important;
  }

  .react-calendar__tile--now {
    background-color: transparent !important;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    visibility: hidden;
  } */
`;

function DoctorCalendar() {
  const { isLoading, data: timeSlots } = useQuery({
    queryKey: ["time-slots"],
    queryFn: getTimeSlots,
  });

  const [selectedDate, setSelectedDate] = useState(null);

  if (isLoading) return <Spinner />;

  const highlightedDates = timeSlots.map((slot) => new Date(slot.date));
  // console.log(highlightedDates);

  const availableDates = selectedDate
    ? timeSlots.filter(
        (timeSlot) =>
          new Date(timeSlot.date).toDateString() === selectedDate.toDateString()
      )
    : [];
  // console.log(availableDates);

  function isHighlighted({ date, view }) {
    if (view === "month") {
      return highlightedDates.some(
        (highlightedDate) =>
          highlightedDate.getFullYear() === date.getFullYear() &&
          highlightedDate.getMonth() === date.getMonth() &&
          highlightedDate.getDate() === date.getDate()
      );
    }
  }

  function handleSelectedDate(date) {
    setSelectedDate(date);
  }

  return (
    <>
      <StyledCalendar>
        <Calendar
          onChange={handleSelectedDate}
          calendarType="gregory"
          tileClassName={({ date, view }) =>
            isHighlighted({ date, view })
              ? "react-calendar__month-view__days__day--highlighted"
              : null
          }
        />
        <StyledContainer>
          <StyledTimeContainer>
            <StyledBlock></StyledBlock>
            <StyledSpan>: Appointment available</StyledSpan>
          </StyledTimeContainer>
          <div>
            {selectedDate ? (
              <AddTimeSlot date={selectedDate} />
            ) : (
              <Heading as="h2">
                Please pick a date to set the time slot &uarr;
              </Heading>
            )}
          </div>
        </StyledContainer>
      </StyledCalendar>

      <Row type="horizontal">
        <Heading>Available time:</Heading>
        <DoctorTimeTableOperations />
      </Row>

      <Row>
        <DoctorTimeTable availableDates={availableDates} />
        {/* <div>
        {availableDates.length > 0 ? ( //不能單用availableDates去做判斷，因為有可能是空陣列[]
        availableDates.map((availableDate) => (
          <AvailableTime
          availableDate={availableDate}
          key={availableDate.id}
          />
          ))
          ) : (
            <p>No available time slots for the selected date.</p>
            )}
            </div> */}
      </Row>
    </>
  );
}

export default DoctorCalendar;
