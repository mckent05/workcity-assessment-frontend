import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ClientListPage = () => {
  const { clients } = useSelector((state) => state.clients);
  // const { user } = useSelector((state) => state.user);

  // const navigate = useNavigate();

  // const dispatch = useDispatch()

  // const handleDownloadCSV = async () => {
  //   const result = await dispatch(downloadClosedTickets());

  //   if (downloadClosedTickets.fulfilled.match(result)) {
  //     const csvContent = result.payload;
  //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  //     const url = URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", "closed_tickets.csv");
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     URL.revokeObjectURL(url);
  //   } else {
  //     console.error("CSV download failed:", result.payload || result.error.message);
  //   }
  // };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between">
        <h2 className="h4 fw-bold mb-4">Client Dashboard</h2>

        <a href="/clients/add-new" className="btn btn-primary mb-4">
          Add Client
        </a>
      </div>

      <div className="row g-4">
        {clients.map((client) => (
          <div key={client._id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
                <p className="card-text">{client.email}</p>
                <a
                  href={`/clients/${client._id}`}
                  className="btn btn-outline-primary btn-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientListPage;
