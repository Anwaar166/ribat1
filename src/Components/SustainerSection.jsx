const SustainerSection = () => {
  return (
    <section
      id="sustainer"
      className="w-full bg-white pt-3 pb-12 sm:pt-5 sm:pb-16 lg:pt-8 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ================= PAYMENT CARD ================= */}
        <div className="flex justify-center">
          <div
            className="w-full bg-[#d3d3d3]"
            style={{
              maxWidth: "590px",
              padding: "32px",
            }}
          >

            {/* HEADING */}
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "#9d0b0b",
                textAlign: "center",
                margin: 0,
              }}
            >
              MONTHLY GIVING FOR LASTING IMPACT
            </h2>

            {/* DESCRIPTION */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: "28px",
                color: "#000",
                textAlign: "center",
                marginTop: "24px",
                marginBottom: "0",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "500px",
              }}
            >
              Every contribution counts. Pledge today for a year!
            </p>

            {/* ================= AMOUNT OPTIONS ================= */}
            <div
              className="grid grid-cols-2"
              style={{
                gap: "20px",
                marginTop: "32px",
              }}
            >

              {/* Rs 10,000 */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "#3d3d3d",
                  color: "#fff",
                  padding: "12px",
                  minHeight: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxSizing: "border-box",
                }}
              >
                <input
                  type="radio"
                  name="monthlyAmount"
                  style={{
                    marginRight: "6px",
                    flexShrink: 0,
                  }}
                />
                Rs 10,000 / month
              </label>

              {/* Rs 25,000 */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "#3d3d3d",
                  color: "#fff",
                  padding: "12px",
                  minHeight: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxSizing: "border-box",
                }}
              >
                <input
                  type="radio"
                  name="monthlyAmount"
                  style={{
                    marginRight: "6px",
                    flexShrink: 0,
                  }}
                />
                Rs 25,000 / month
              </label>

              {/* Rs 50,000 */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "#3d3d3d",
                  color: "#fff",
                  padding: "12px",
                  minHeight: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxSizing: "border-box",
                }}
              >
                <input
                  type="radio"
                  name="monthlyAmount"
                  style={{
                    marginRight: "6px",
                    flexShrink: 0,
                  }}
                />
                Rs 50,000 / month
              </label>

              {/* Rs 100,000 */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundColor: "#3d3d3d",
                  color: "#fff",
                  padding: "12px",
                  minHeight: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxSizing: "border-box",
                }}
              >
                <input
                  type="radio"
                  name="monthlyAmount"
                  style={{
                    marginRight: "6px",
                    flexShrink: 0,
                  }}
                />
                Rs 100,000 / month
              </label>
            </div>

            {/* ================= CUSTOM AMOUNT ================= */}
            <div
              className="flex justify-center"
              style={{
                marginTop: "20px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backgroundColor: "#3d3d3d",
                  color: "#fff",
                  padding: "12px 16px",
                  minHeight: "50px",
                  width: "290px",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxSizing: "border-box",
                }}
              >
                <input
                  type="radio"
                  name="monthlyAmount"
                  style={{
                    marginRight: "6px",
                  }}
                />
                Enter Your Own Amount
              </label>
            </div>

            {/* ================= CURRENCY + AMOUNT ================= */}
            <div
              className="flex justify-center"
              style={{
                marginTop: "36px",
                gap: "6px",
              }}
            >
              <select
                defaultValue="PKR"
                style={{
                  height: "42px",
                  width: "75px",
                  border: "1px solid #6b7280",
                  backgroundColor: "#fff",
                  padding: "0 8px",
                  fontSize: "14px",
                  color: "#374151",
                  outline: "none",
                }}
              >
                <option value="PKR">PKR</option>
              </select>

              <input
                type="text"
                placeholder="0.00 / month"
                style={{
                  height: "42px",
                  width: "250px",
                  border: "1px solid #6b7280",
                  backgroundColor: "#fff",
                  padding: "0 12px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* ================= EMAIL ================= */}
            <div
              className="flex justify-center"
              style={{
                marginTop: "40px",
              }}
            >
              <input
                type="email"
                placeholder="Email"
                style={{
                  height: "40px",
                  width: "230px",
                  border: "1px solid #6b7280",
                  backgroundColor: "#fff",
                  padding: "0 12px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* ================= PAYMENT BUTTON ================= */}
            <div
              className="flex justify-center"
              style={{
                marginTop: "40px",
              }}
            >
              <button
                type="button"
                style={{
                  backgroundColor: "#9d0b0b",
                  color: "#fff",
                  padding: "12px 28px",
                  fontSize: "16px",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Payment Details
              </button>
            </div>

          </div>
        </div>

        {/* ================= ZAKAT INFORMATION ================= */}
        <div
          className="mx-auto w-full max-w-5xl text-left"
          style={{
            marginTop: "48px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "1.2",
              color: "#9d0b0b",
              margin: 0,
            }}
          >
            Is this Donation Zakat-eligible?
          </h2>

          <p
            style={{
              marginTop: "20px",
              fontSize: "15px",
              lineHeight: "28px",
              color: "#666666",
              marginBottom: 0,
            }}
          >
            Ribat is not accepting Zakat donations. We encourage our donors
            to direct their Zakat towards humanitarian aid efforts, while
            continuing to use their Sadaqa to support the vital work of Ribat
            and other deserving non-profit organizations. Your Sadaqa enables
            us to serve the community and fulfill our mission of providing
            essential Islamic resources and services.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SustainerSection;