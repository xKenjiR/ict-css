import { useState } from "react";

const tabs: string[] = ["Description", "Installation"];

const DCHP = () => {
  const [tab, setTab] = useState<string>(tabs[0]);

  return (
    <div
      className="
        bg-linear-to-b from-white to-blue-100
      "
    >
      <div
        className="
        w-[80%] ml-[10%]
        lg:w-[70%] lg:ml-[15%]
        grid md:grid-cols-2 gap-5
        md:pt-25 pb-10 md:pb-20
        mt-10
      "
      >
        <div
          className="
            md:mt-20
            text-center
          "
          data-aos="fade-right"
        >
          <h1
            className="
            text-5xl font-bold
            text-zinc-700
            tracking-wider
          "
          >
            DCHP
          </h1>
          <h2
            className="
            mt-2
            text-lg font-medium
            text-zinc-600
          "
          >
            Dynamic Host Configuration Protocol
          </h2>
        </div>
        <div
          className="
            p-5 pb-10 rounded-lg
            bg-white
            shadow-sm
            shadow-black/30
            hover:scale-105
            transition-transform
          "
          data-aos="fade-left"
        >
          <div
            className="
            md:text-xl
            font-bold
            text-center
            text-zinc-500
            dark:text-zinc-400
          "
          >
            <ul
              className="
                flex
              "
            >
              {tabs.map((t) => (
                <li
                  onClick={() => {
                    setTab(t);
                  }}
                  key={t}
                  className={t === tab ? "tab active" : "tab"}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5">
            {tab === "Description" ? (
              <p
                className="
                md:text-lg font-medium
                text-zinc-500
              "
              >
                The DHCP automates the assignment and management of IP addresses
                and related network configurations. By centralizing these tasks,
                DHCP Server reduces manual effort, minimizes errors, and ensures
                efficient use of IP address resources across your network.
              </p>
            ) : (
              <ol
                className="
                  flex flex-col gap-3
                  list-decimal ml-5
                  text-sm md:text-base font-medium
                  text-zinc-600
                "
              >
                <li key={1}>
                  From the Windows desktop, open the{" "}
                  <span className="hl">Start menu</span>, then select{" "}
                  <span className="hl">Server Manager</span>.
                </li>
                <li key={2}>
                  On the menu, go to <span className="hl">Manage</span>, then
                  select <span className="hl">Add Roles and Features</span>.
                </li>
                <li key={3}>
                  On the <span className="hl">Before you begin</span> page,
                  select <span className="hl">Next</span>.
                </li>
                <li key={4}>
                  On the <span className="hl">Select installation type</span>{" "}
                  page, select the{" "}
                  <span className="hl">
                    Role-based or feature-based installation
                  </span>{" "}
                  option, then select <span className="hl">Next</span>.
                </li>
                <li key={5}>
                  On the <span className="hl">Select destination server</span>{" "}
                  page, leave the default options, then select{" "}
                  <span className="hl">Next</span>.
                </li>
                <li key={6}>
                  On the <span className="hl">Select server roles</span> page,
                  select the <span className="hl">DHCP Server</span> checkbox,
                  and then select <span className="hl">Next</span>.
                  <ol className="sub-list">
                    <li key={1}>
                      You're prompted to add features that are required for DHCP
                      Server. If you're happy with the default settings, select{" "}
                      <span className="hl">Add Features</span>.
                    </li>
                  </ol>
                </li>
                <li key={7}>
                  On the <span className="hl">Select features</span> page, leave
                  the default selections as-is, then select{" "}
                  <span className="hl">Next</span>.
                </li>
                <li key={8}>
                  On the <span className="hl">DHCP Server</span> page, review
                  the role description and things to note. When you're finished,
                  select <span className="hl">Next</span>.
                </li>
                <li key={9}>
                  On the{" "}
                  <span className="hl">Confirm installation selections</span>{" "}
                  page, review the selected roles and features. When you're
                  finished, select <span className="hl">Install</span> to begin
                  the installation process.
                </li>
                <li key={10}>
                  Once the installation is complete, select{" "}
                  <span className="hl">Close</span>. The installation doesn't
                  require a reboot.
                </li>
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DCHP;
