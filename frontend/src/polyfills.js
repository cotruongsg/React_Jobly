import process from "process/browser";

if (typeof window !== "undefined") {
  window.process = process;
}
