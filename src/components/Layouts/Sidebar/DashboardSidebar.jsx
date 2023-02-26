import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function DashboardSidebar() {
  const router = useRouter();
  const { pathname } = router;
  const [path, setPath] = React.useState("");
  useEffect(() => {
    setPath(pathname.split("/")[2]);
    console.log(pathname.split("/")[2]);
  }, [pathname]);

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      ariaLabel="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin"
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ${
                path === undefined ? "bg-primary" : "hover:bg-gray-100"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                  fill="black"
                />
              </svg>

              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/orders"
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ${
                path === "orders" ? "bg-primary" : "hover:bg-gray-100"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5134 21.5H8.16555C5.09919 21.5 2.74679 20.3925 3.41498 15.9348L4.19301 9.8936C4.60491 7.66934 6.02367 6.81808 7.26852 6.81808H17.447C18.7102 6.81808 20.0466 7.73342 20.5225 9.8936L21.3006 15.9348C21.8681 19.889 19.5797 21.5 16.5134 21.5Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6512 6.5984C16.6512 4.21233 14.7169 2.27804 12.3309 2.27804V2.27804C11.1819 2.27317 10.0782 2.7262 9.26406 3.53695C8.44987 4.34771 7.99218 5.44939 7.99219 6.5984H7.99219"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.297 11.1018H15.2512"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.46492 11.1018H9.41916"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full  ">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/customers"
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ${
                path === "customers" ? "bg-primary" : "hover:bg-gray-100"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.592 15.2068C13.281 15.2068 16.434 15.7658 16.434 17.9988C16.434 20.2318 13.302 20.8068 9.592 20.8068C5.902 20.8068 2.75 20.2528 2.75 18.0188C2.75 15.7848 5.881 15.2068 9.592 15.2068Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.59108 12.0198C7.16908 12.0198 5.20508 10.0568 5.20508 7.6348C5.20508 5.2128 7.16908 3.2498 9.59108 3.2498C12.0121 3.2498 13.9761 5.2128 13.9761 7.6348C13.9851 10.0478 12.0351 12.0108 9.62208 12.0198H9.59108Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4844 10.8816C18.0854 10.6566 19.3184 9.2826 19.3214 7.6196C19.3214 5.9806 18.1264 4.6206 16.5594 4.3636"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5957 14.7322C20.1467 14.9632 21.2297 15.5072 21.2297 16.6272C21.2297 17.3982 20.7197 17.8982 19.8957 18.2112"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Customers</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ${
                path === "products" ? "bg-primary" : "hover:bg-gray-100"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.419 15.7321C21.419 19.3101 19.31 21.4191 15.732 21.4191H7.95C4.363 21.4191 2.25 19.3101 2.25 15.7321V7.93211C2.25 4.35911 3.564 2.25011 7.143 2.25011H9.143C9.861 2.25111 10.537 2.58811 10.967 3.16311L11.88 4.37711C12.312 4.95111 12.988 5.28911 13.706 5.29011H16.536C20.123 5.29011 21.447 7.11611 21.447 10.7671L21.419 15.7321Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.48047 14.463H16.2155"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/conversations"
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ${
                path === "conversations" ? "bg-primary" : "hover:bg-gray-100"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9389 12.413H15.9479"
                  stroke="#53545C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.931 12.413H11.94"
                  stroke="#53545C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.92128 12.413H7.93028"
                  stroke="#53545C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">
                Conversations
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/setting"
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ${
                path === "setting" ? "bg-primary" : "hover:bg-gray-100"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.8074 7.62357L20.185 6.54348C19.6584 5.62956 18.4914 5.31427 17.5763 5.83867V5.83867C17.1406 6.0953 16.6208 6.16811 16.1314 6.04104C15.6421 5.91398 15.2233 5.59747 14.9676 5.16133C14.803 4.8841 14.7146 4.56835 14.7113 4.24599V4.24599C14.7261 3.72918 14.5311 3.22836 14.1708 2.85762C13.8104 2.48689 13.3153 2.27782 12.7982 2.27803H11.5442C11.0377 2.27802 10.552 2.47987 10.1947 2.8389C9.83742 3.19793 9.63791 3.68455 9.64034 4.19107V4.19107C9.62533 5.23688 8.77321 6.07677 7.7273 6.07666C7.40494 6.07331 7.08919 5.9849 6.81197 5.82036V5.82036C5.89679 5.29597 4.72985 5.61125 4.20327 6.52517L3.53508 7.62357C3.00914 8.53635 3.32013 9.70256 4.23073 10.2323V10.2323C4.82263 10.574 5.18726 11.2055 5.18726 11.889C5.18726 12.5725 4.82263 13.204 4.23073 13.5458V13.5458C3.32129 14.0719 3.00996 15.2353 3.53508 16.1453V16.1453L4.16666 17.2346C4.41338 17.6797 4.82734 18.0082 5.31693 18.1474C5.80652 18.2865 6.33137 18.2249 6.77535 17.976V17.976C7.21181 17.7213 7.73192 17.6515 8.22007 17.7822C8.70822 17.9128 9.12397 18.233 9.3749 18.6716C9.53943 18.9488 9.62784 19.2646 9.63119 19.587V19.587C9.63119 20.6435 10.4877 21.5 11.5442 21.5H12.7982C13.8512 21.5 14.7062 20.6491 14.7113 19.5961V19.5961C14.7088 19.088 14.9096 18.6 15.2689 18.2407C15.6282 17.8814 16.1162 17.6806 16.6243 17.6831C16.9459 17.6917 17.2604 17.7797 17.5397 17.9394V17.9394C18.4524 18.4653 19.6186 18.1543 20.1484 17.2437V17.2437L20.8074 16.1453C21.0625 15.7075 21.1325 15.186 21.0019 14.6963C20.8714 14.2067 20.551 13.7893 20.1117 13.5366V13.5366C19.6725 13.2839 19.3521 12.8665 19.2215 12.3769C19.091 11.8873 19.161 11.3658 19.4161 10.9279C19.582 10.6383 19.8221 10.3982 20.1117 10.2323V10.2323C21.0169 9.70285 21.3271 8.54345 20.8074 7.63272V7.63272V7.62357Z"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12.1752"
                  cy="11.889"
                  r="2.63616"
                  stroke="#53545C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 ">
          <li>
            <button className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 w-full">
              <svg
                fill="none"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>

              <span className="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
