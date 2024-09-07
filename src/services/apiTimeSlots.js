import supabase from "./supabase";

export async function getTimeSlots() {
  const { data, error } = await supabase.from("time-slots").select("*");
  if (error) {
    console.error(error);
    throw new Error("Time slots could not be loaded");
  }
  return data;
}

export async function createTimeSlot(newTimeSlot) {
  const { data, error } = await supabase
    .from("time-slots")
    .insert([{ ...newTimeSlot }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Time slot could not be created");
  }
  return data;
}

export async function updateTimeSlot({ id, newSlotData }) {
  console.log("ID to update:", id);
  console.log("New time slot data:", newSlotData);

  const { data, error } = await supabase
    .from("time-slots")
    .update(newSlotData)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error updating time slot:", error);
    throw new Error("Time slot could not be updated");
  }
  console.log("Updated time slot data:", data);
  return data;
}

export async function deleteTimeSlot(id) {
  const { data, error } = await supabase
    .from("time-slots")
    .delete()
    .eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Time slot could not be delete");
  }
  console.log("Deleted time slot:", data);
  return data;
}
