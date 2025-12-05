import { DarkmodeDrop } from "@lifo123/library";
import { PlatformList, Search } from "@Modules/Home/components";
import '@Modules/Home/styles/home.css';

export default function Home() {
  return (
    <main className="w-4xl rounded-md p-4 mx-auto mt-12">
      <section className="f-col gap-1">
        <div className="f-row justify-between">
          <h1 className="fw-500 text-2xl">My accounts</h1>
          <DarkmodeDrop />
        </div>
        <p className="fs-15 fw-400 text-gray-11">
          Here you can see all your accounts by platform.
        </p>
        <Search />
      </section>

      <section className="mt-8">
        <PlatformList />

      </section>
    </main>
  );
}
