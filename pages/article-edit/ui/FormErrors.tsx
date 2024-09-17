import { useActionData } from "@remix-run/react";
import type { action } from "../api/action";

export function FormErrors() {
  const actionData = useActionData<typeof action>();

  const errors = Array.isArray(actionData?.errors) ? actionData.errors : [];

  return errors.length ? (
    <ul className="error-messages">
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  ) : null;
}
