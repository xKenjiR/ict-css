import { useEffect, useState } from "react";

const tabs: string[] = ["Description", "Installation"];

const ADDS = () => {
  const [tab, setTab] = useState<string>(tabs[0]);

  return (
    <div
      className="
        bg-linear-to-t from-white to-blue-100
        pt-10 md:pt-0
      "
    >
      <div
        className="
        w-[80%] ml-[10%]
        lg:w-[70%] lg:ml-[15%]
        grid md:grid-cols-2 gap-5
        md:pt-25 pb-10 md:pb-20
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
            ADDS
          </h1>
          <h2
            className="
            mt-2
            text-lg font-medium
            text-zinc-600
          "
          >
            Active Directory Domain Services
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
                A directory is a hierarchical structure that stores information
                about objects on a network. A directory service, such as Active
                Directory Domain Services (AD DS), provides the methods for
                storing directory data and making this data available to network
                users and administrators. For example, AD DS stores information
                about user accounts, such as names, passwords, phone numbers,
                and so on. AD DS also provides a way for authorized users on the
                same network to access this information.
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
                  page, select{" "}
                  <span className="hl">
                    Select a server from the server pool
                  </span>
                  , select the name of the server where you want to install AD
                  DS and then select <span className="hl">Next</span>.
                </li>
                <li key={6}>
                  On the <span className="hl">Select server roles</span> page,
                  select{" "}
                  <span className="hl">Active Directory Domain Services</span>,
                  then on the{" "}
                  <span className="hl">Add Roles and Features Wizard</span>Add
                  Roles and Features Wizard dialog box, select
                  <span className="hl">Add Features</span>Add Features, and then
                  select <span className="hl">Next</span>.
                </li>
                <li key={7}>
                  On the <span className="hl">Select features</span> page,
                  select any additional features you want to install and select{" "}
                  <span className="hl">Next</span>.
                </li>
                <li key={8}>
                  On the{" "}
                  <span className="hl">Active Directory Domain Services</span>{" "}
                  page, review the information and then select{" "}
                  <span className="hl">Next</span>.
                </li>
                <li key={9}>
                  On the{" "}
                  <span className="hl">Confirm installation selections</span>{" "}
                  page, select <span className="hl">Install</span>.
                </li>
                <li key={10}>
                  On the <span className="hl">Results</span> page, verify that
                  the installation succeeded, and select{" "}
                  <span className="hl">
                    Promote this server to a domain controller
                  </span>{" "}
                  to start the Active Directory Domain Services Configuration
                  Wizard.
                </li>
                <li key={11}>
                  On the <span className="hl">Deployment Configuration</span>{" "}
                  page, choose one of the following options:
                  <ol className="sub-list">
                    <li key={1}>
                      If you're installing an additional domain controller in an
                      existing domain, select{" "}
                      <span className="hl">
                        Add a domain controller to an existing domain
                      </span>
                      , and type the name of the domain or select{" "}
                      <span className="hl">Select...</span> to choose a domain,
                      and credentials and then select{" "}
                      <span className="hl">Next</span>.
                    </li>
                    <li key={2}>
                      If you're installing a new child domain, select{" "}
                      <span className="hl">
                        Add a new domain to an existing forest
                      </span>
                      , for <span className="hl">Select domain type</span>,
                      select <span className="hl">Child Domain</span>, type or
                      browse to the name of the parent domain DNS name, type the
                      relative name of the new child domain, type credentials to
                      use to create the new domain, and then select{" "}
                      <span className="hl">Next</span>.
                    </li>
                    <li key={3}>
                      If you're installing a new domain tree, select{" "}
                      <span className="hl">
                        Add new domain to an existing forest
                      </span>
                      , for <span className="hl">Select domain</span> type,
                      choose <span className="hl">Tree Domain</span>, type the
                      name of the root domain, type the DNS name of the new
                      domain, type credentials to use to create the new domain,
                      and then select <span className="hl">Next</span>.
                    </li>
                    <li key={4}>
                      If you're installing a new forest, select{" "}
                      <span className="hl">Add a new forest</span>
                      and then type the name of the root domain
                    </li>
                  </ol>
                </li>
                <li key={12}>
                  On the <span className="hl">Domain Controller Options</span>{" "}
                  page, choose one of the following options:
                  <ol className="sub-list">
                    <li key={1}>
                      If you're creating a new forest or domain, select the
                      domain and forest functional levels, select{" "}
                      <span className="hl">Domain Name System (DNS)</span>{" "}
                      server, specify the DSRM password, and then select{" "}
                      <span className="hl">Next</span>.
                    </li>
                    <li key={2}>
                      If you're adding a domain controller to an existing
                      domain, select{" "}
                      <span className="hl">
                        Domain Name System (DNS) server, Global Catalog (GC), or
                        Read Only Domain Controller (RODC)
                      </span>{" "}
                      as needed, choose the site name, and type the DSRM
                      password and then select <span className="hl">Next</span>.
                    </li>
                  </ol>
                </li>
                <li key={13}>
                  On the <span className="hl">DNS Options</span> page (which
                  appears only if you install a DNS server), select{" "}
                  <span className="hl">Update DNS delegation</span> as needed.
                  If you do, provide credentials that have permission to create
                  DNS delegation records in the parent DNS zone.
                </li>
                <li key={14}>
                  On the <span className="hl">RODC Options</span> page (which
                  appears only if you install an RODC), specify the name of a
                  group or user who will manage the RODC, add accounts to or
                  remove accounts from the Allowed or Denied password
                  replication groups, and then select{" "}
                  <span className="hl">Next</span>.
                </li>
                <li key={15}>
                  On the <span className="hl">Additional Options</span> page,
                  choose one of the following options:
                  <ol className="sub-list">
                    <li key={1}>
                      If you're creating a new domain, type a new NetBIOS name
                      or verify the default NetBIOS name of the domain, and then
                      select <span className="hl">Next</span>.
                    </li>
                    <li key={2}>
                      If you're adding a domain controller to an existing
                      domain, select the domain controller that you want to
                      replicate the AD DS installation data from (or allow the
                      wizard to select any domain controller). If you're
                      installing from media, select{" "}
                      <span className="hl">Install from media path</span> type
                      and verify the path to the installation source files, and
                      then select <span className="hl">Next</span>.
                    </li>
                  </ol>
                </li>
                <li key={16}>
                  On the <span className="hl">Paths</span> page, type the
                  locations for the Active Directory database, log files, and
                  SYSVOL folder (or accept default locations), and select{" "}
                  <span className="hl">Next</span>.
                </li>
                <li key={17}>
                  On the <span className="hl">Preparation Options</span> page,
                  enter credentials that are sufficient to run adprep.
                </li>
                <li key={18}>
                  On the <span className="hl">Review Options</span> page,
                  confirm your selections, select{" "}
                  <span className="hl">View script</span> if you want to export
                  the settings to a Windows PowerShell script, and then select{" "}
                  <span className="hl">Next</span>.
                </li>
                <li key={19}>
                  On the <span className="hl">Prerequisites Check</span> page,
                  confirm that prerequisite validation completed and then select{" "}
                  <span className="hl">Install</span>.
                </li>
                <li key={20}>
                  On the <span className="hl">Results</span> page, verify that
                  the server was successfully configured as a domain controller.
                  The server will be restarted automatically to complete the AD
                  DS installation.
                </li>
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ADDS;
