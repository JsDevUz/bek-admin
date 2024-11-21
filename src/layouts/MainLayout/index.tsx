import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="dark:bg-[#151b25]">
      <div>
        <div>
          <div>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
