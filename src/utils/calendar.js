// Generates and triggers download of an .ics calendar file for the trial or PT session
export function downloadCalendarInvite({ title, description, location, dateStr, timeStr }) {
  // Create an ISO date format for calendar event
  const now = new Date();
  const start = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Default tomorrow
  const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour duration

  const formatDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "").substring(0, 15) + "Z";
  };

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//IronForge Athletics//Gym Session//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title || "IRONFORGE Athletics - Training Session"}`,
    `DESCRIPTION:${(description || "Free Trial Session at IronForge Athletics Anna Nagar").replace(/\n/g, "\\n")}`,
    `LOCATION:${location || "42 Anna Nagar Main Road, Chennai"}`,
    `DTSTART:${formatDate(start)}`,
    `DTEND:${formatDate(end)}`,
    `STATUS:CONFIRMED`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "ironforge-session.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
