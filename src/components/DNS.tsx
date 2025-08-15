import { useState } from "react";

const tabs: string[] = ["Description", "Installation"];

const DNS = () => {
  const [tab, setTab] = useState<string>(tabs[0]);

  return (
    <div
      className="
        w-[80%] ml-[10%]
        lg:w-[70%] lg:ml-[15%]
        grid md:grid-cols-2 gap-5
        md:pt-25 pb-10 md:pb-20
        mt-10 md:mt-0
      "
    >
      <div
        className="
            md:order-last
            md:mt-20
            text-center
            gap-3
          "
      >
        <h1
          className="
            text-5xl font-bold
            text-zinc-700
            tracking-wider
          "
        >
          DNS
        </h1>
        <h2
          className="
            text-lg font-medium
            text-zinc-600
          "
        >
          Domain Name System
        </h2>
      </div>
      <div
        className="
            p-5 pb-10 rounded-lg
            bg-white
            shadow-sm
          "
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
              DNS is an industry-standard protocol that maps computer names to
              IP addresses, enabling name resolution for computers and users. In
              Windows networks, DNS is the default name resolution service. As
              part of the TCP/IP protocol suite, all network connections are
              configured with the IP address of at least one DNS server to
              ensure seamless name resolution.
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
                On the <span className="hl">Before you begin</span> page, select{" "}
                <span className="hl">Next</span>.
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
                select the <span className="hl">DNS Server</span> checkbox, and
                then select <span className="hl">Next</span>.
                <ol>
                  <li key={1} className="opacity-90">
                    a. You're prompted to add features that are required for DNS
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
                On the <span className="hl">DNS Server</span> page, review the
                role description and things to note. When you're finished,
                select <span className="hl">Next</span>.
              </li>
              <li key={9}>
                On the{" "}
                <span className="hl">Confirm installation selections</span>{" "}
                page, review the selected roles and features. When you're
                finished, select
                <span className="hl">Install</span> to begin the installation
                process.
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
  );
};

export default DNS;
