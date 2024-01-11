import React, { useEffect, useState } from "react";
import searcH from "../../assets/img/placeholder-search-5.svg";
import {
  getCoinsApi,
  getEachUserApi,
  getTransactionsApi,
  signleUsersApi,
  updateTransactionApi,
} from "../../Api/Service";
import SideBar from "../../layout/AdminSidebar/Sidebar";
import Log from "../../assets/img/log.jpg";
import { useAuthUser } from "react-auth-kit";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Truncate from "react-truncate-inside/es";
import axios from "axios";
const PendingTransactions = () => {
  const [liveBtc, setliveBtc] = useState(null);
  const [modal, setModal] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [isDisbaled, setisDisbaled] = useState(false);
  const [UserTransactions, setUserTransactions] = useState([]);
  const [singleTransaction, setsingleTransaction] = useState();
  const [userDetail, setuserDetail] = useState({});

  let { id } = useParams();

  let authUser = useAuthUser();
  let Navigate = useNavigate();
  const [Active, setActive] = useState(false);

  const [newNote, setnewNote] = useState({
    note: "",
    txId: "",
  });
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setnewNote({ ...newNote, [name]: value });
  };

  const getTransactions = async () => {
    try {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const allTransactions = await getTransactionsApi();
      if (response && allTransactions.success) {
        // setData(filter)
        let val = response.data.bpi.USD.rate.replace(/,/g, "");
        setliveBtc(val);
        setUserTransactions(allTransactions.Transaction.reverse());

        // setUserTransactions(pendingTransactionsLengthArray);

        //

        setisLoading(false);

        return;
      } else {
        toast.dismiss();
        toast.error(allTransactions.msg);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error);
    } finally {
    }
  };
  let toggleModal = async (data) => {
    setnewNote({
      note: data.note,
      txId: data.txId,
    });
    setsingleTransaction(data);
    setModal(true);
    try {
      let _id = data._id;
      const allTransactions = await getEachUserApi(_id, _id);
      if (allTransactions.success) {
        setuserDetail(allTransactions.signleUser);
        return;
      } else {
        toast.dismiss();
        toast.error(allTransactions.msg);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error);
    } finally {
    }
  };
  let toggleModalClose = () => {
    setnewNote({
      note: "",
      txId: "",
    });
    setuserDetail({});
    setsingleTransaction("");
    setModal(false);
  };

  const approveTransaction = async (txid, status) => {
    if (status === "completed" && !newNote.txId) {
      toast.dismiss();
      toast.error("Transaction id cannot be empty");
      return;
    }
    let amount = txid.amount;
    let _id = txid._id;
    let txId = newNote.txId;
    let trxName = txid.trxName;
    let type = txid.type;
    let note = newNote.note;
    let fromAddress = txid.fromAddress;

    let body = { amount, txId, trxName, _id, note, type, fromAddress, status };

    try {
      setisDisbaled(true);
      const userCoins = await updateTransactionApi(id, body);

      if (userCoins.success) {
        toast.dismiss();
        toast.success(userCoins.msg);
        toggleModalClose();
        getTransactions();
        return;
      } else {
        toast.dismiss();
        toast.error(userCoins.msg);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error);
    } finally {
      setisDisbaled(false);
    }
  };
  //

  //

  let toggleBar = () => {
    if (Active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  useEffect(() => {
    if (authUser().user.role === "user") {
      Navigate("/dashboard");
      return;
    }
    getTransactions();

    // getSignleUser();
  }, []);
  // Copy
  const [timer, setTimer] = useState(null);
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus(true);

        // Reset the copy status after 2 seconds
        setTimeout(() => {
          setCopyStatus(false);
        }, 2000);
      })
      .catch(() => {
        setCopyStatus(false);

        // Reset the copy status after 2 seconds
        setTimeout(() => {
          setCopyStatus(false);
        }, 2000);
      });
  };

  // Copy
  return (
    <div>
      <div>
        <div className="bg-muted-100 dark:bg-muted-900 pb-20">
          <SideBar state={Active} toggle={toggleBar} />
          <div className="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10 lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]">
            <div className="mx-auto w-full max-w-7xl">
              <div className="relative z-50 mb-5 flex h-16  items-center gap-2">
                <button
                  type="button"
                  className="flex h-10 for-desk w-10 items-center justify-center -ms-3"
                >
                  <div className="relative  h-5 w-5 scale-90">
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-1 max-w-[75%] -rotate-45 top-0.5" />
                    <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300 translate-x-4 opacity-0" />
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-1 max-w-[75%] rotate-45 bottom-0" />
                  </div>
                </button>
                <button
                  onClick={toggleBar}
                  type="button"
                  className="flex for-mbl h-10 w-10 items-center justify-center -ms-3"
                >
                  <div className="relative h-5 w-5">
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 top-0.5 top-0.5" />
                    <span className="bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300" />
                    <span className="bg-primary-500 absolute block h-0.5 w-full transition-all duration-300 bottom-0 bottom-0" />
                  </div>
                </button>
                <h1 className="font-heading text-2xl font-light leading-normal leading-normal text-muted-800 hidden dark:text-white md:block">
                  Pending Transactions
                </h1>
                <div className="ms-auto" />

                <div className="group inline-flex items-center justify-center text-right">
                  <div
                    data-headlessui-state
                    className="relative h-9 w-9 text-left"
                  >
                    <button
                      className="group-hover:ring-primary-500 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                      id="headlessui-menu-button-25"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      type="button"
                    >
                      <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full">
                        <img
                          src={Log}
                          className="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                          alt=""
                        />
                      </div>
                    </button>
                    {/**/}
                  </div>
                </div>
              </div>
              <div
                className="nuxt-loading-indicator"
                style={{
                  position: "fixed",
                  top: "0px",
                  right: "0px",
                  left: "0px",
                  pointerEvents: "none",
                  width: "auto",
                  height: "3px",
                  opacity: 0,
                  background: "var(--color-primary-500)",
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                  transition:
                    "transform 0.1s ease 0s, height 0.4s ease 0s, opacity 0.4s ease 0s",
                  zIndex: 999999,
                }}
              />
              <seokit />
              <div className>
                <div>
                  <div className="mb-6 flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex w-full items-center gap-4 sm:w-auto">
                      <div className="relative w-full sm:w-auto">
                        {/**/}
                        <div className="group/nui-input relative">
                          <input
                            id="ninja-input-8"
                            type="text"
                            className="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded-full"
                            placeholder="Filter transactions..."
                          />
                          {/**/}
                          {/**/}
                          <div className="text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75 h-10 w-10">
                            <svg
                              data-v-cd102a71
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="icon h-[1.15rem] w-[1.15rem]"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                              >
                                <circle cx={11} cy={11} r={8} />
                                <path d="m21 21l-4.3-4.3" />
                              </g>
                            </svg>
                          </div>
                          {/**/}
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-end gap-4 sm:w-auto" />
                  </div>
                  <div>
                    {/*  */}
                    {isLoading ? (
                      <div className="mx-auto loading-pg w-full text-center max-w-xs">
                        <div className="mx-auto max-w-xs">
                          <svg
                            data-v-cd102a71
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="icon h-12 w-12 text-primary-500"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                              opacity=".25"
                            />
                            <path
                              fill="currentColor"
                              d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
                            >
                              <animateTransform
                                attributeName="transform"
                                dur="0.75s"
                                repeatCount="indefinite"
                                type="rotate"
                                values="0 12 12;360 12 12"
                              />
                            </path>
                          </svg>
                        </div>
                        <div className="mx-auto max-w-sm">
                          <h4 className="font-heading text-xl font-medium leading-normal leading-normal text-muted-800 mb-1 mt-4 dark:text-white">
                            Loading Transactions
                          </h4>
                          <p className="text-muted-400 font-sans text-sm">
                            Please wait while we load transactions.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid gap-4 grid-cols-1">
                        {/*  */}
                        {UserTransactions.map((transaction) => {
                          return (
                            transaction.transactions &&
                            transaction.transactions.map(
                              (sinlgeUserTx, index) => {
                                return sinlgeUserTx.status === "pending" ? (
                                  <div key={index}>
                                    <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl p-3">
                                      <div className="flex w-full items-center gap-2">
                                        {sinlgeUserTx.type === "deposit" ? (
                                          <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-12 w-12 nui-mask nui-mask-blob bg-success-100 text-success-400">
                                            <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300">
                                              <svg
                                                data-v-cd102a71
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="icon"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z"
                                                />
                                              </svg>
                                            </div>
                                          </div>
                                        ) : sinlgeUserTx.type === "withdraw" ? (
                                          <div className="relative inline-flex shrink-0 items-center justify-center outline-none h-12 w-12 nui-mask nui-mask-blob bg-danger-100 text-danger-400">
                                            <div className="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300">
                                              <svg
                                                data-v-cd102a71
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                className="icon"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 24 24"
                                              >
                                                <path
                                                  fill="currentColor"
                                                  d="M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z"
                                                />
                                              </svg>
                                            </div>
                                            {/**/}
                                            {/**/}
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                        <div>
                                          <p
                                            className="font-heading capitalize text-sm font-medium leading-normal leading-normal"
                                            tag="h3"
                                          >
                                            {sinlgeUserTx.trxName}{" "}
                                            <span className="text-muted-400 capitalize">
                                              ({sinlgeUserTx.status})
                                            </span>
                                          </p>
                                          <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400 mt-1">
                                            {sinlgeUserTx.amount.toFixed(8)}
                                            <span className="text-muted-500">
                                              {`($${
                                                sinlgeUserTx.trxName ===
                                                "bitcoin"
                                                  ? (
                                                      sinlgeUserTx.amount *
                                                      liveBtc
                                                    ).toFixed(2)
                                                  : sinlgeUserTx.trxName ===
                                                    "ethereum"
                                                  ? (
                                                      sinlgeUserTx.amount *
                                                      2241.86
                                                    ).toFixed(2)
                                                  : sinlgeUserTx.trxName ===
                                                    "tether"
                                                  ? sinlgeUserTx.amount.toFixed(
                                                      2
                                                    )
                                                  : (0).toFixed(2)
                                              })`}
                                            </span>
                                          </p>
                                          <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400 md:hidden mt-1">
                                            At:{" "}
                                            {new Date(
                                              sinlgeUserTx.createdAt
                                            ).toLocaleString()}
                                          </p>
                                        </div>
                                        <div className="ms-auto flex items-center gap-2">
                                          <p
                                            className="font-heading text-sm font-medium leading-normal leading-normal me-2 text-gray-500 hidden md:block"
                                            tag="h3"
                                          >
                                            At:{" "}
                                            {new Date(
                                              sinlgeUserTx.createdAt
                                            ).toLocaleString()}
                                          </p>
                                          <button
                                            onClick={() =>
                                              toggleModal(sinlgeUserTx)
                                            }
                                            type="button"
                                            className="disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-md h-8 w-8 p-1 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300"
                                          >
                                            <svg
                                              data-v-cd102a71
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              aria-hidden="true"
                                              role="img"
                                              className="icon h-5 w-5"
                                              width="1em"
                                              height="1em"
                                              viewBox="0 0 24 24"
                                            >
                                              <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                              >
                                                <path d="M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8" />
                                                <circle cx={12} cy={12} r={3} />
                                              </g>
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    {/**/}
                                  </div>
                                ) : (
                                  ""
                                );
                              }
                            )
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div>
          <div
            className="relative z-[9999]"
            id="headlessui-dialog-55"
            role="dialog"
            aria-modal="true"
            data-headlessui-state="open"
          >
            <div className="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" />
            <div className="fixed inset-0 overflow-x-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div
                  id="headlessui-dialog-panel-58"
                  data-headlessui-state="open"
                  className="dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all rounded-lg max-w-2xl"
                >
                  <div className="flex w-full items-center justify-between p-4 md:p-6">
                    <div className="lg:flex lg:items-center lg:justify-between">
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
                          Transaction Details
                        </h2>
                        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <svg
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                                clipRule="evenodd"
                              />
                              <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                            </svg>{" "}
                            User: {userDetail && userDetail.email}
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 flex lg:ml-4 lg:mt-0">
                        {userDetail._id ? (
                          <span className="block">
                            <Link
                              to={`/admin/users/${userDetail._id}/general`}
                              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:ring-gray-600 dark:ring-inset"
                            >
                              <svg
                                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                              </svg>{" "}
                              User Profile{" "}
                            </Link>
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <button
                      onClick={toggleModalClose}
                      type="button"
                      className="flex h-9 w-9 items-center justify-center transition-colors duration-300 disabled:opacity-30 hover:bg-muted-100 dark:hover:bg-muted-700 text-muted-700 dark:text-muted-50 rounded-full"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 6 6 18M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 md:p-6 overflow-auto">
                    {singleTransaction.by === "admin" ? (
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 md:gap-y-8 sm:grid-cols-2 mb-3">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Transaction ID
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              className="font-medium inline-flex text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                              onClick={() =>
                                handleCopyToClipboard(singleTransaction.txId)
                              }
                            >
                              {" "}
                              <Truncate
                                text={singleTransaction.txId}
                                offset={6}
                                width="100"
                              />
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Transaction Hash
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              className="font-medium text-gray-900 inline-flex dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                              onClick={() =>
                                handleCopyToClipboard(singleTransaction.txId)
                              }
                            >
                              {" "}
                              <Truncate
                                text={singleTransaction.txId}
                                offset={6}
                                width="100"
                              />
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Block
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <Truncate
                              text={singleTransaction.txId}
                              offset={6}
                              width="100"
                            />
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Timestamp
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            {new Date(
                              singleTransaction.createdAt
                            ).toLocaleString()}
                          </dd>
                        </div>
                        {singleTransaction.fromAddress ? (
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              From
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                              <a
                                href="javascript:void(0)"
                                onClick={() =>
                                  handleCopyToClipboard(
                                    singleTransaction.fromAddress
                                  )
                                }
                                className="font-medium inline-flex text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                              >
                                <Truncate
                                  text={singleTransaction.fromAddress}
                                  offset={6}
                                  width="100"
                                />
                                <svg
                                  data-v-cd102a71
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                >
                                  <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                  >
                                    <rect
                                      width={13}
                                      height={13}
                                      x={9}
                                      y={9}
                                      rx={2}
                                      ry={2}
                                    />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </g>
                                </svg>
                              </a>
                            </dd>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            to
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              className="font-medium text-gray-900 inline-flex dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                              onClick={() =>
                                handleCopyToClipboard(singleTransaction.txId)
                              }
                            >
                              <Truncate
                                text={singleTransaction.txId}
                                offset={6}
                                width="100"
                              />

                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Value
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              onClick={() =>
                                handleCopyToClipboard(
                                  singleTransaction.amount.toFixed(8)
                                )
                              }
                              className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                            >
                              {singleTransaction.amount.toFixed(8)}{" "}
                              {`${
                                singleTransaction.trxName === "bitcoin"
                                  ? "BTC"
                                  : singleTransaction.trxName === "ethereum"
                                  ? "ETH"
                                  : singleTransaction.trxName === "tether"
                                  ? "USDT"
                                  : ""
                              }`}
                              {"   "}
                              <span className="text-gray-400">{`($${
                                singleTransaction.trxName === "bitcoin"
                                  ? (
                                      singleTransaction.amount * liveBtc
                                    ).toFixed(2)
                                  : singleTransaction.trxName === "ethereum"
                                  ? (
                                      singleTransaction.amount * 2241.86
                                    ).toFixed(2)
                                  : singleTransaction.trxName === "tether"
                                  ? singleTransaction.amount.toFixed(2)
                                  : (0).toFixed(2)
                              })`}</span>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-2"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Status
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            {singleTransaction.status === "pending" ? (
                              <>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                                  Pending
                                </span>
                              </>
                            ) : singleTransaction.status === "completed" ? (
                              <>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                                  Completed
                                </span>
                              </>
                            ) : singleTransaction.status === "failed" ? (
                              <>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
                                  Failed
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="border-muted-300 dark:border-muted-700 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center border-l w-10">
                                  <svg
                                    data-v-cd102a71
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="icon text-muted-400 transition-transform duration-300 h-4 w-4"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="m6 9l6 6l6-6"
                                    />
                                  </svg>
                                </span>
                              </>
                            )}
                            <span className="text-gray-400 dark:text-gray-500 ml-2">
                              {singleTransaction.note}
                            </span>

                            {/**/}
                          </dd>
                        </div>
                      </dl>
                    ) : singleTransaction.by === "user" ? (
                      <>
                        <dt className="text-sm font-bold text-gray-500 dark:text-gray-400">
                          Transaction performed by the user
                        </dt>
                        <br></br>
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 md:gap-y-8 sm:grid-cols-2 mb-3">
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              to
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                              <a
                                href="javascript:void(0)"
                                className="font-medium text-gray-900 inline-flex dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                                onClick={() =>
                                  handleCopyToClipboard(singleTransaction.txId)
                                }
                              >
                                <Truncate
                                  text={singleTransaction.txId}
                                  offset={6}
                                  width="100"
                                />

                                <svg
                                  data-v-cd102a71
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                >
                                  <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                  >
                                    <rect
                                      width={13}
                                      height={13}
                                      x={9}
                                      y={9}
                                      rx={2}
                                      ry={2}
                                    />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </g>
                                </svg>
                              </a>
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Timestamp
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                              {new Date(
                                singleTransaction.createdAt
                              ).toLocaleString()}
                            </dd>
                          </div>

                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Value
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                              <a
                                href="javascript:void(0)"
                                onClick={() =>
                                  handleCopyToClipboard(
                                    singleTransaction.amount.toFixed(8)
                                  )
                                }
                                className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                              >
                                {singleTransaction.amount.toFixed(8)}{" "}
                                {`${
                                  singleTransaction.trxName === "bitcoin"
                                    ? "BTC"
                                    : singleTransaction.trxName === "ethereum"
                                    ? "ETH"
                                    : singleTransaction.trxName === "tether"
                                    ? "USDT"
                                    : ""
                                }`}
                                {"   "}
                                <span className="text-gray-400">{`($${
                                  singleTransaction.trxName === "bitcoin"
                                    ? (
                                        singleTransaction.amount * liveBtc
                                      ).toFixed(2)
                                    : singleTransaction.trxName === "ethereum"
                                    ? (
                                        singleTransaction.amount * 2241.86
                                      ).toFixed(2)
                                    : singleTransaction.trxName === "tether"
                                    ? singleTransaction.amount.toFixed(2)
                                    : (0).toFixed(2)
                                })`}</span>
                                <svg
                                  data-v-cd102a71
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon w-5 h-5 inline-block -mt-1 ml-2"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                >
                                  <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                  >
                                    <rect
                                      width={13}
                                      height={13}
                                      x={9}
                                      y={9}
                                      rx={2}
                                      ry={2}
                                    />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </g>
                                </svg>
                              </a>
                            </dd>
                          </div>
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Status
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                              {singleTransaction.status === "pending" ? (
                                <>
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                                    Pending
                                  </span>
                                </>
                              ) : singleTransaction.status === "completed" ? (
                                <>
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                                    Completed
                                  </span>
                                </>
                              ) : singleTransaction.status === "failed" ? (
                                <>
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
                                    Failed
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="border-muted-300 dark:border-muted-700 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center border-l w-10">
                                    <svg
                                      data-v-cd102a71
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      aria-hidden="true"
                                      role="img"
                                      className="icon text-muted-400 transition-transform duration-300 h-4 w-4"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m6 9l6 6l6-6"
                                      />
                                    </svg>
                                  </span>
                                </>
                              )}
                              <span className="text-gray-400 dark:text-gray-500 ml-2">
                                {singleTransaction.note}
                              </span>

                              {/**/}
                            </dd>
                          </div>
                        </dl>{" "}
                      </>
                    ) : (
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 md:gap-y-8 sm:grid-cols-2 mb-3">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Transaction ID
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              className="font-medium inline-flex text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                              onClick={() =>
                                handleCopyToClipboard(singleTransaction.txId)
                              }
                            >
                              {" "}
                              <Truncate
                                text={singleTransaction.txId}
                                offset={6}
                                width="100"
                              />
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Transaction Hash
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              className="font-medium text-gray-900 inline-flex dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xs"
                              onClick={() =>
                                handleCopyToClipboard(singleTransaction.txId)
                              }
                            >
                              {" "}
                              <Truncate
                                text={singleTransaction.txId}
                                offset={6}
                                width="100"
                              />
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Block
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <Truncate
                              text={singleTransaction.txId}
                              offset={6}
                              width="100"
                            />
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Timestamp
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            {new Date(
                              singleTransaction.createdAt
                            ).toLocaleString()}
                          </dd>
                        </div>
                        {singleTransaction.fromAddress ? (
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              From
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                              <a
                                href="javascript:void(0)"
                                onClick={() =>
                                  handleCopyToClipboard(
                                    singleTransaction.fromAddress
                                  )
                                }
                                className="font-medium inline-flex text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                              >
                                <Truncate
                                  text={singleTransaction.fromAddress}
                                  offset={6}
                                  width="100"
                                />
                                <svg
                                  data-v-cd102a71
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  aria-hidden="true"
                                  role="img"
                                  className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                >
                                  <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                  >
                                    <rect
                                      width={13}
                                      height={13}
                                      x={9}
                                      y={9}
                                      rx={2}
                                      ry={2}
                                    />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </g>
                                </svg>
                              </a>
                            </dd>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            to
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              className="font-medium text-gray-900 inline-flex dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                              onClick={() =>
                                handleCopyToClipboard(singleTransaction.txId)
                              }
                            >
                              <Truncate
                                text={singleTransaction.txId}
                                offset={6}
                                width="100"
                              />

                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-1"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Value
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            <a
                              href="javascript:void(0)"
                              onClick={() =>
                                handleCopyToClipboard(
                                  singleTransaction.amount.toFixed(8)
                                )
                              }
                              className="font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                            >
                              {singleTransaction.amount.toFixed(8)}{" "}
                              {`${
                                singleTransaction.trxName === "bitcoin"
                                  ? "BTC"
                                  : singleTransaction.trxName === "ethereum"
                                  ? "ETH"
                                  : singleTransaction.trxName === "tether"
                                  ? "USDT"
                                  : ""
                              }`}
                              {"   "}
                              <span className="text-gray-400">{`($${
                                singleTransaction.trxName === "bitcoin"
                                  ? (
                                      singleTransaction.amount * liveBtc
                                    ).toFixed(2)
                                  : singleTransaction.trxName === "ethereum"
                                  ? (
                                      singleTransaction.amount * 2241.86
                                    ).toFixed(2)
                                  : singleTransaction.trxName === "tether"
                                  ? singleTransaction.amount.toFixed(2)
                                  : (0).toFixed(2)
                              })`}</span>
                              <svg
                                data-v-cd102a71
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="icon w-5 h-5 inline-block -mt-1 ml-2"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                >
                                  <rect
                                    width={13}
                                    height={13}
                                    x={9}
                                    y={9}
                                    rx={2}
                                    ry={2}
                                  />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </g>
                              </svg>
                            </a>
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Status
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                            {singleTransaction.status === "pending" ? (
                              <>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                                  Pending
                                </span>
                              </>
                            ) : singleTransaction.status === "completed" ? (
                              <>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                                  Completed
                                </span>
                              </>
                            ) : singleTransaction.status === "failed" ? (
                              <>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
                                  Failed
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="border-muted-300 dark:border-muted-700 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center border-l w-10">
                                  <svg
                                    data-v-cd102a71
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="icon text-muted-400 transition-transform duration-300 h-4 w-4"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="m6 9l6 6l6-6"
                                    />
                                  </svg>
                                </span>
                              </>
                            )}
                            <span className="text-gray-400 dark:text-gray-500 ml-2">
                              {singleTransaction.note}
                            </span>

                            {/**/}
                          </dd>
                        </div>
                      </dl>
                    )}
                    {singleTransaction.status === "pending" ? (
                      <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-2">
                        <p
                          className="font-heading text-sm font-medium leading-normal leading-normal"
                          tag="h3"
                        >
                          {" "}
                          Actions{" "}
                        </p>
                        <p className="font-alt text-xs font-normal leading-normal leading-normal text-muted-400 mt-1">
                          {" "}
                          You can approve or reject this transaction.{" "}
                        </p>
                        <div className="mt-4">
                          <span
                            htmlFor="txid"
                            className="text-sm font-medium text-gray-500"
                          >
                            Transaction ID
                          </span>
                          <div className="relative">
                            {/**/}
                            <div className="group/nui-input relative">
                              <input
                                id="txId"
                                type="text"
                                onChange={handleInput}
                                value={newNote.txId}
                                name="txId"
                                className="mt-1 nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 px-3 rounded"
                                placeholder="Enter transaction ID"
                              />
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                          </div>
                        </div>
                        <div className="mt-1">
                          <span
                            htmlFor="note"
                            className="text-sm font-medium text-gray-500"
                          >
                            Note
                          </span>
                          <div className="relative">
                            <div className="group/nui-input relative">
                              <input
                                id="note"
                                onChange={handleInput}
                                value={newNote.note}
                                name="note"
                                type="text"
                                className="mt-1 nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 px-3 rounded"
                                placeholder="Enter note"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-x-2 mt-2">
                          <button
                            data-v-71bb21a6
                            type="button"
                            onClick={() =>
                              approveTransaction(singleTransaction, "failed")
                            }
                            className="is-button rounded is-button-default bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
                          >
                            Decline
                          </button>
                          <button
                            disabled={isDisbaled}
                            data-v-71bb21a6
                            type="button"
                            onClick={() =>
                              approveTransaction(singleTransaction, "completed")
                            }
                            className="is-button rounded is-button-default bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex w-full items-center gap-x-2 justify-end">
                    <div className="p-4 md:p-6">
                      <div className="flex gap-x-2">
                        <button
                          onClick={toggleModalClose}
                          data-v-71bb21a6
                          type="button"
                          className="is-button rounded is-button-default"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingTransactions;
