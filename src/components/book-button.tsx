import { Calendar } from "lucide-react";

export default function BookButton() {
  return (
    <button
      className="fixed bottom-6 right-6 bg-primary text-primary-foreground text-lg p-4 rounded-md flex gap-3"
      data-cal-link="martinp/15min"
      data-cal-config='{"theme": "light"}'
    >
      <Calendar />
      Book a meet
    </button>
  );
}
