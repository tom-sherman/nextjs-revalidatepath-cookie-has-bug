import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function action() {
  "use server";
  revalidatePath("/");
}

export default function Page() {
  cookies().has("test");
  return (
    <form action={action}>
      <button type="submit">Revalidate</button>
    </form>
  );
}
