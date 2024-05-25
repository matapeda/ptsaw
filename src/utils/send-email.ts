import { FormData } from "@/app/ui/ContactForm";

export function sendEmail(data: FormData) {
  const apiEndpoint = "https://ptsaw.vercel.app/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return res.text().then((text) => {
          throw new Error(`Network response was not ok: ${text}`);
        });
      }
      return res.json();
    })
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(`Error: ${err.message}`);
    });
}
