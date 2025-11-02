import React, { useContext, useState } from "react";
import { ItemsContext } from "./ItemsContext";
import { useTranslation } from "react-i18next";

const BillForm = () => {
  const { t } = useTranslation();
  const { items, removeItem } = useContext(ItemsContext);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // Extract service data (defaulting to 0 if undefined)
  const curtainsType = items?.curtains?.selectedType || "factory";
  const carpetQty = Number(items?.carpet?.qty || 0);
  const sofaQty = Number(items?.sofa?.qty || 0);
  const acQty = Number(items?.ac?.qty || 0);
  const mattressQty = Number(items?.mattress?.qty || 0);
  const curtainsOnSite = Number(items?.curtains?.onSite || 0);
  const curtainsFactory = Number(items?.curtains?.factory || 0);
  const curtainsSheers = Number(items?.curtains?.sheers || 0);

  const total =
    curtainsOnSite +
    curtainsFactory +
    curtainsSheers +
    carpetQty +
    sofaQty +
    acQty +
    mattressQty;

  // ✅ Create WhatsApp message with type & quantity details
  const createWhatsAppMessage = () => {
    let message = `🧾 *Combined Bill Summary*\n\n`;

    if (name.trim() !== "") message += `👤 *Name:* ${name.trim()}\n`;
    if (phoneNumber.trim() !== "")
      message += `📞 *Customer Phone:* ${phoneNumber.trim()}\n`;
    if (address.trim() !== "") message += `🏠 *Address:* ${address.trim()}\n`;

    message += `\n──────────────────────\n`;
    message += `🧹 *Service Details:*\n`;

    // Curtains breakdown
    if (curtainsFactory > 0)
      message += `• Curtains (Factory - ${curtainsType}): AED ${curtainsFactory.toFixed()}\n`;
    if (curtainsOnSite > 0)
      message += `• Curtains (OnSite): AED ${curtainsOnSite.toFixed()}\n`;
    if (curtainsSheers > 0)
      message += `• Curtains (Sheers): AED ${curtainsSheers.toFixed()}\n`;

    // Other services with qty shown
    if (carpetQty > 0)
      message += `• Carpet Cleaning – Qty: ${
        items?.carpet?.count || 1
      }, AED ${carpetQty.toFixed()}\n`;
    if (sofaQty > 0)
      message += `• Sofa Cleaning – Qty: ${
        items?.sofa?.count || 1
      }, AED ${sofaQty.toFixed()}\n`;
    if (acQty > 0)
      message += `• AC Cleaning – Qty: ${
        items?.ac?.count || 1
      }, AED ${acQty.toFixed()}\n`;
    if (mattressQty > 0)
      message += `• Mattress Cleaning – Qty: ${
        items?.mattress?.count || 1
      }, AED ${mattressQty.toFixed()}\n`;

    message += `──────────────────────\n`;
    message += `💰 *Total:* AED ${total.toFixed()}\n`;
    message += `\n✅ Thank you for your business!\n`;

    return encodeURIComponent(message);
  };

  const handleSendWhatsApp = () => {
    const businessNumber = "971508648401"; // Replace with your own
    const message = createWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="container mt-4 px-3"
      style={{
        maxWidth: "600px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        padding: "15px",
      }}
    >
      <h2
        className="text-center mb-3"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "28px",
          fontWeight: 700,
          color: "#2c3e50",
          letterSpacing: "0.03em",
        }}
      >
        {t("billForm.invoice_title")}
      </h2>

      {/* Customer Info Inputs */}
      <InputField
        label={t("billForm.instruct")}
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("billForm.customer_name")}
      />
      <InputField
        label={t("billForm.phone_number")}
        id="phone"
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder={t("billForm.placeholder_phone")}
      />
      <InputField
        label={t("billForm.address")}
        id="address"
        type="textarea"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder={t("billForm.placeholder_address")}
      />

      {/* Service Summary Cards */}
      <div
        className="d-flex flex-column align-items-center"
        style={{ gap: "10px" }}
      >
        {curtainsFactory > 0 && (
          <ServiceCard
            title={`Curtains (Factory - ${curtainsType})`}
            amount={curtainsFactory}
            onRemove={() => removeItem("curtains", "factory")}
          />
        )}
        {curtainsOnSite > 0 && (
          <ServiceCard
            title="Curtains (OnSite)"
            amount={curtainsOnSite}
            onRemove={() => removeItem("curtains", "onSite")}
          />
        )}
        {curtainsSheers > 0 && (
          <ServiceCard
            title="Curtains (Sheers)"
            amount={curtainsSheers}
            onRemove={() => removeItem("curtains", "sheers")}
          />
        )}
        {carpetQty > 0 && (
          <ServiceCard
            title={`Carpet × ${items?.carpet?.count || 1}`}
            amount={carpetQty}
            onRemove={() => removeItem("carpet", "qty")}
          />
        )}
        {sofaQty > 0 && (
          <ServiceCard
            title={`Sofa × ${items?.sofa?.count || 1}`}
            amount={sofaQty}
            onRemove={() => removeItem("sofa", "qty")}
          />
        )}
        {acQty > 0 && (
          <ServiceCard
            title={`AC × ${items?.ac?.count || 1}`}
            amount={acQty}
            onRemove={() => removeItem("ac", "qty")}
          />
        )}
        {mattressQty > 0 && (
          <ServiceCard
            title={`Mattress × ${items?.mattress?.count || 1}`}
            amount={mattressQty}
            onRemove={() => removeItem("mattress", "qty")}
          />
        )}
      </div>

      <hr className="my-3" />

      <div className="text-center">
        <h4 style={{ color: "#2563eb", fontWeight: "700", fontSize: "22px" }}>
          {t("billForm.total")}
        </h4>
        <h2
          style={{
            fontWeight: "800",
            color: "#1e293b",
            fontSize: "28px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {total.toFixed()} AED
        </h2>
      </div>

      {/* WhatsApp Send Button */}
      <div className="text-center mt-4">
        <button
          onClick={handleSendWhatsApp}
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "15px",
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 25px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(37, 211, 102, 0.4)",
            transition: "background-color 0.3s ease",
          }}
        >
          {t("billForm.send_button")}
        </button>
      </div>
    </div>
  );
};

const InputField = ({ label, id, type, value, onChange, placeholder }) => (
  <div style={{ marginBottom: "15px" }}>
    <label
      htmlFor={id}
      style={{
        fontWeight: "600",
        display: "block",
        marginBottom: "6px",
        fontSize: "12px",
        color: "#334155",
      }}
    >
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={3}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px",
          resize: "vertical",
        }}
      />
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
      />
    )}
  </div>
);

const ServiceCard = ({ title, amount, onRemove }) => (
  <div
    style={{
      background: "#f9fafb",
      borderRadius: "10px",
      padding: "12px 15px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.04)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      maxWidth: "500px",
    }}
  >
    <span style={{ fontWeight: "600", fontSize: "16px", color: "#334155" }}>
      {title}
    </span>
    <span style={{ color: "#16a34a", fontWeight: "700", fontSize: "16px" }}>
      {amount.toFixed()} AED
    </span>
    {onRemove && (
      <button
        onClick={onRemove}
        style={{
          marginLeft: "10px",
          background: "transparent",
          border: "none",
          color: "#ef4444",
          cursor: "pointer",
        }}
        title="Remove item"
      >
        ✕
      </button>
    )}
  </div>
);

export default BillForm;
