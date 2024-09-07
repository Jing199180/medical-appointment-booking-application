import BookTimeForm from "./BookTimeForm";

import styled from "styled-components";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Table from "../../ui/Table";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 0.2fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Date = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Time = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Unbooked = styled.p`
  color: var(--color-red-700);
`;

const Booked = styled.p`
  color: var(--color-blue-700);
`;

function PatientTimeRow({ availableDate }) {
  const { date, startTime, endTime, booked } = availableDate;

  // const queryClient = useQueryClient();
  // const {
  //   mutate,
  //   isLoading: isDeleting,
  //   error,
  // } = useMutation({
  //   mutationFn: deleteTimeSlot,
  //   onSuccess: () => {
  //     toast.success("Time Slot is successfully deleted");
  //     queryClient.invalidateQueries({
  //       queryKey: ["time-slots"],
  //     });
  //   },
  //   onError: (error) => toast.error(error.message),
  // });

  return (
    <>
      <Table.Row>
        <Date>{date}</Date>
        <Time>
          {startTime.slice(0, 5)} - {endTime.slice(0, 5)}
        </Time>
        {!booked ? <Unbooked>尚未預約</Unbooked> : <Booked>已預約</Booked>}

        {!booked && (
          <Modal>
            <Modal.Open opens="Book">
              <Button>
                {/* <MdDeleteForever /> */}
                預約
              </Button>
            </Modal.Open>
            <Modal.Window name="Book">
              <BookTimeForm availableDate={availableDate} />
            </Modal.Window>
          </Modal>
        )}
        {/* <Button
          size="small"
          onClick={() => deleteTimeSlot(id)}
          disabled={isDeleting}
        >
          x
        </Button> */}
      </Table.Row>
    </>
  );
}

export default PatientTimeRow;
