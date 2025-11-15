export default function Loading() {
  return (
    <div style={{ padding: "50px" }}>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-img"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>

      <style jsx>{`
        .skeleton {
          background: #e0e0e0;
          border-radius: 6px;
          margin-bottom: 15px;
          animation: pulse 1.5s infinite ease-in-out;
        }
        .skeleton-title {
          width: 60%;
          height: 30px;
        }
        .skeleton-img {
          width: 100%;
          height: 350px;
        }
        .skeleton-text {
          width: 100%;
          height: 20px;
        }
        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
