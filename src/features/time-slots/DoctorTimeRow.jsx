import { useDeleteTimeSlot } from "./useDeteleTimeSlot";

import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { MdDeleteForever } from "react-icons/md";
import ConfirmDelete from "../../ui/ComfirmDelete";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

const Date = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Time = styled.div`
  font-weight: 600;
`;

function DoctorTimeRow({ availableDate }) {
  const { id, date, startTime, endTime, booked } = availableDate;
  const { deleteTimeSlot, isDeleting } = useDeleteTimeSlot();

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
        {!booked ? (
          <Tag type="red">unbooked</Tag>
        ) : (
          <Tag type="blue">booked</Tag>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button>
              <MdDeleteForever />
            </Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="timeSlot"
              disabled={isDeleting}
              onConfirm={() => deleteTimeSlot(id)}
            />
          </Modal.Window>
        </Modal>
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

export default DoctorTimeRow;
