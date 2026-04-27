import { ArrowLeftOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ticketsData } from "./ticketsData";

function Badge({ label, value, className }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className={`mt-2 text-sm font-semibold ${className}`}>{value}</p>
    </div>
  );
}

export default function TicketDetails() {
  const navigate = useNavigate();
  const { ticketId } = useParams();

  const ticket = useMemo(
    () => ticketsData.find((item) => item.id === ticketId),
    [ticketId]
  );

  if (!ticket) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h1 className="text-xl font-semibold text-[#9a2119]">Ticket not found</h1>
        <button
          onClick={() => navigate("/support_tickets/all")}
          className="mt-4 px-4 py-2 rounded-md bg-[#9a2119] text-white hover:bg-[#c4392e] transition"
        >
          Back to Support Tickets
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/support_tickets/all")}
          className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#9a2119] hover:text-[#9a2119] transition"
        >
          <ArrowLeftOutlined />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-[#9a2119]">{ticket.subject}</h1>
          <p className="text-sm text-gray-500">Ticket ID: {ticket.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Badge label="Opened By" value={ticket.openedBy} className="text-[#9a2119]" />
        <Badge label="Email" value={ticket.email} className="text-gray-700" />
        <Badge label="Priority" value={ticket.priority} className="text-orange-700" />
        <Badge label="Status" value={ticket.status} className="text-green-700" />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-[#9a2119] mb-4">Ticket Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Opened On
            </p>
            <p className="mt-2 text-sm text-gray-700">{ticket.openedOn}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Current Status
            </p>
            <p className="mt-2 text-sm text-gray-700">{ticket.status}</p>
          </div>
        </div>

        <div className="rounded-xl border border-[#f3d7d4] bg-[#fdf7f6] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#9a2119] mb-2">
            Message
          </p>
          <p className="text-sm leading-7 text-gray-700">{ticket.message}</p>
        </div>
      </div>
    </div>
  );
}
