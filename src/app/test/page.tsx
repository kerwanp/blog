import { Suspense } from "react";
import { ClientComponent } from "./ClientComp";

async function ServerComponent() {
  await new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, 2000);
  });

  return <div>Hello</div>;
}

export default async function page() {
  return (
    <div>
      <ClientComponent />
    </div>
  );
}
