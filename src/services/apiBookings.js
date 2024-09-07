import supabase from "./supabase";
console.log("Script is running");

export async function getBookings() {
  // console.log("getBookings function started");
  const { data, error } = await supabase.from("bookings").select("*");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  // console.log("getBookings function completed");
  return data;
}

//修改或增加
export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([{ ...newBooking }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }
  return data;
}

export async function updateBooking({ id, newBooking }) {
  console.log("Updating booking with ID:", id, "with data:", newBooking); // 调试输

  const { data, error } = await supabase
    .from("bookings")
    .update(newBooking)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  console.log("Deleted booking data:", data);
  return data;
}
