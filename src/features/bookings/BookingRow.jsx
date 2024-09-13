import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteBooking as deleteBookingApi,
  updateBooking as updateBookingApi,
} from "../../services/apiBookings";

import styled from "styled-components";
import toast from "react-hot-toast";
import ConfirmDelete from "../../ui/ComfirmDelete";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";

import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaRegCheckSquare } from "react-icons/fa";

const FullName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Date = styled.div`
  font-weight: 600;
`;

const Time = styled.div`
  font-weight: 600;
`;

const Phone = styled.div`
  font-weight: 600;
`;

const Email = styled.div`
  font-weight: 600;
`;

function BookingRow({ booking }) {
  const {
    id: bookingId,
    startTime,
    endTime,
    date,
    fullName,
    email,
    phone,
    booked,
  } = booking;
  // const formatStartTime = formatData(startTime);
  // const formatEndTime = formatData(endTime);

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries(["bookings"]);
      navigate(0);
    },
    onError: (error) => toast.error(error.message),
  });

  const { mutate: updateBooking, isLoading: isUpdating } = useMutation({
    mutationFn: updateBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully updated");
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: (error) => toast.error(error.message),
  });

  return (
    <>
      <Table.Row>
        <FullName>{fullName}</FullName>
        <Date>{date}</Date>
        <Time>
          {startTime.slice(0, 5)}-{endTime.slice(0, 5)}
        </Time>
        <Phone>{phone}</Phone>
        <Email>{email}</Email>
        {booked ? (
          <Tag type="blue">finished</Tag>
        ) : (
          <Tag type="red">unfinished</Tag>
        )}
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={bookingId}></Menus.Toggle>
            <Menus.List id={bookingId}>
              <Menus.Button
                icon={<FaRegCheckSquare />}
                onClick={() =>
                  updateBooking({ id: bookingId, newBooking: { booked: true } })
                }
                disabled={isUpdating}
              >
                Check
              </Menus.Button>

              <Modal.Open opens="delete">
                <Menus.Button icon={<MdDeleteForever />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="doctor"
                disabled={isDeleting}
                onConfirm={() => {
                  deleteBooking(bookingId);
                }}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </Table.Row>
    </>
  );
}

export default BookingRow;
