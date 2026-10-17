#!/usr/bin/env bash
# Export every featured design as a 1080x1920 PNG into ./out
# Usage:  ./scripts/render.sh            (all featured designs)
#         ./scripts/render.sh 58 57      (only these design numbers)
# Needs Google Chrome (or Chromium) and an internet connection (fonts + d3 load from CDNs).
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:-}"
for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" "$(command -v google-chrome || true)" "$(command -v chromium || true)" "$(command -v chromium-browser || true)"; do
  [ -z "$CHROME" ] && [ -n "$c" ] && [ -x "$c" ] && CHROME="$c"
done
[ -z "$CHROME" ] && { echo "Chrome not found. Set CHROME=/path/to/chrome"; exit 1; }
name_of() { case "$1" in
  58) echo travel-wrapped;; 57) echo music-album;; 55) echo mba-market-coverage;; 56) echo tech-dashboard;;
  51) echo luxe-sky;; 52) echo luxe-cream;; 53) echo pop-pink;; 54) echo pop-sunset;;
  48) echo sky-skyline-top;; 49) echo lavender-skyline-top;; 47) echo sage;; 50) echo terracotta;;
  45) echo travel-map-cream;; 46) echo places-blush;;
  59) echo noir-gold;; 60) echo midnight;; 61) echo emerald-velvet;; 62) echo bordeaux;; 63) echo wrapped-noir;; 64) echo ivory-gold;;
  65) echo doctor;; 66) echo physician;; 67) echo ceo;; 68) echo teacher;; 69) echo product-manager;; 70) echo compiler-engineer;; 71) echo stylist;; 72) echo sticker-atlas;; 73) echo sticker-atlas-night;; 74) echo skyline-atlas;; 75) echo skyline-atlas-night;; 80) echo world-atlas;; 81) echo world-atlas-night;; 82) echo world-wrapped;; 83) echo noir-gold-world;; *) echo "design-$1";; esac; }
if [ $# -gt 0 ]; then IDS=("$@"); else IDS=(72 73 74 75 80 81 82 83 58 63 59 60 61 62 65 66 67 68 69 70 71 57 55 56); fi
mkdir -p out
URL="file://$(pwd)/generator/index.html"
for v in "${IDS[@]}"; do
  name="$(name_of "$v")"
  prof="$(mktemp -d)"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1080,1920 --virtual-time-budget=20000 --allow-file-access-from-files \
    --user-data-dir="$prof" --screenshot="out/$v-$name.png" "$URL#v=$v" >/dev/null 2>&1
  rm -rf "$prof"; echo "✓ out/$v-$name.png"
done
