"use client";

import CloseIcon from "@mui/icons-material/Close";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function SleepDentistryClient({ videoUrl, videoThumbnail }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <>
      {videoUrl ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 860 },
            mx: { xs: 0, md: "auto" },
          }}
        >
          <Box
            role="button"
            tabIndex={0}
            onClick={openVideo}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openVideo();
            }}
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 220, sm: 280, md: 340 },
              backgroundColor: "rgba(11,45,74,0.06)",
              cursor: "pointer",
              outline: "none",
              "&:focus-visible": {
                boxShadow: "0 0 0 3px rgba(17,114,149,0.35)",
              },
            }}
          >
            {videoThumbnail ? (
              <Image
                src={videoThumbnail}
                alt="Sleep dentistry video thumbnail"
                fill
                style={{ objectFit: "cover" }}
              />
            ) : null}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(11,45,74,0.05) 0%, rgba(11,45,74,0.28) 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                placeItems: "center",
              }}
            >
              <PlayCircleFilledIcon
                sx={{
                  fontSize: { xs: 64, md: 78 },
                  color: "#fff",
                  filter: "drop-shadow(0 10px 18px rgba(11,45,74,0.25))",
                }}
              />
              <Typography
                sx={{
                  mt: 1,
                  fontWeight: 900,
                  color: "#115278",
                  backgroundColor: "rgba(255,255,255,0.88)",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "999px",
                  border: "1px solid rgba(15,53,83,0.10)",
                }}
              >
                Click to play
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: { xs: "100%", md: 860 },
            mx: { xs: 0, md: "auto" },
            height: { xs: 220, sm: 280, md: 340 },
            backgroundColor: "rgba(11,45,74,0.06)",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            px: 3,
          }}
        >
          <Typography sx={{ fontWeight: 900, color: "#115278" }}>
            Video placeholder
          </Typography>
          <Typography sx={{ mt: 1, maxWidth: 520 }}>
            Set <b>{`sleepDentistryVideoUrl`}</b> at the top of this file to
            your embed URL (YouTube/Vimeo) or a direct MP4 URL.
          </Typography>
        </Box>
      )}

      <Dialog
        open={isVideoOpen}
        onClose={closeVideo}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "#000",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
            backgroundColor: "#000",
          }}
        >
          <IconButton
            aria-label="Close video"
            onClick={closeVideo}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.45)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.65)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {videoUrl?.toLowerCase().endsWith(".mp4") ? (
            <Box
              component="video"
              src={videoUrl}
              controls
              autoPlay
              playsInline
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <Box
              component="iframe"
              src={videoUrl}
              title="Sleep dentistry video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
}
