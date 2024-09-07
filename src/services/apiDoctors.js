import supabase, { supabaseUrl } from "./supabase";
console.log("hi");

export async function getDoctors() {
  const { data, error } = await supabase.from("doctors").select("*");
  if (error) {
    console.error(error);
    throw new Error("Docotors could not be found");
  }

  return data;
}

//https: tvvpowalarxjqvaqhywh.supabase.co/storage/v1/object/public/doctor-images/doctor-001.webp

//修改或是增加醫生資訊
export async function createEditDoctor(newDoctor, id) {
  console.log(newDoctor, id);

  const hasImagePath = newDoctor.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newDoctor.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newDoctor.image
    : `${supabaseUrl}/storage/v1/object/public/doctor-images/${imageName}`;

  //1. Create/edit doctor
  let query = supabase.from("doctors");

  // A) CREATE
  if (!id) query = query.insert([{ ...newDoctor, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newDoctor, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Docotors could not be created");
  }

  //已經有圖片路徑的前提下，直接回傳數據，不上傳圖片
  if (hasImagePath) return data;

  //2. Upload image
  const { error: storageError } = await supabase.storage
    .from("doctor-images")
    .upload(imageName, newDoctor.image);

  //3. Delete the doctor if there was an error uploading image
  if (storageError) {
    await supabase.from("doctors").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Docotor image could not be uploaded and the doctor was not created"
    );
  }
  return data;
}

export async function deleteDoctor(id) {
  const { error } = await supabase.from("doctors").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Docotors could not be delete");
  }
}
