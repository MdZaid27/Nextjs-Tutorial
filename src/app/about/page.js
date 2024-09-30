async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default async function About() {
  await takeTime();
  // throw new Error("this is a manual error");
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
}
