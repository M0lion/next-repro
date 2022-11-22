/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      cache: "no-store",
    });
  } catch (error) {
    throw new Error("My error message", { cause: error });
  }

  return <></>;
}
